"use client";

import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { DEFAULT_TOAST_DURATIONS, normalizePosition } from "./Toast.types.js";
import { ToastContext } from "./ToastContext.js";
import { ALL_POSITIONS, createInitialToastState, toastReducer } from "./toastReducer.js";
import { ToastAllViewports } from "./ToastViewport.js";
import type {
  ToastApi,
  ToastColor,
  ToastItemState,
  ToastOptions,
  ToastPosition,
  ToastProviderProps,
  ToastRadius,
  ToastShortcutOptions,
  ToastVariant,
} from "./Toast.types.js";

export interface ExtendedToastProviderProps extends ToastProviderProps {
  portal?: boolean;
  container?: HTMLElement | null;
}

interface TimerRecord {
  timeoutId: ReturnType<typeof setTimeout>;
  remaining: number;
  startedAt: number;
  duration: number;
  isPaused: boolean;
}

/**
 * ToastProvider — Root provider for the Jivico Glass UI Toast Notification System.
 * Manages global toast state using React useReducer, enforces auto-dismiss timers,
 * hover/focus pause-resume lifecycle, and exposes the stable ToastApi context.
 */
export const ToastProvider: React.FC<ExtendedToastProviderProps> = ({
  children,
  defaultPosition = "top-right",
  defaultRadius = "soft",
  defaultDuration,
  defaultColor = "primary",
  defaultVariant = "glass",
  maxVisible = 3,
  maxPending = 20,
  gap = 12,
  portal = true,
  container,
}) => {
  const [state, dispatch] = useReducer(toastReducer, undefined, createInitialToastState);
  const idCounterRef = useRef(0);
  const timersRef = useRef<Map<string, TimerRecord>>(new Map());
  const exitTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const generateId = useCallback((): string => {
    idCounterRef.current += 1;
    return `toast-${Date.now().toString(36)}-${idCounterRef.current}`;
  }, []);

  const dismiss = useCallback(
    (id: string) => {
      // Clear and remove auto-dismiss timer
      const activeTimer = timersRef.current.get(id);
      if (activeTimer) {
        clearTimeout(activeTimer.timeoutId);
        timersRef.current.delete(id);
      }

      // Start exit animation
      dispatch({ type: "START_EXIT", id });

      // Clear any existing exit timer for this ID
      const existingExitTimer = exitTimersRef.current.get(id);
      if (existingExitTimer) clearTimeout(existingExitTimer);

      // Schedule removal and FIFO queue promotion after CSS exit animation (220ms)
      const timer = setTimeout(() => {
        dispatch({ type: "REMOVE_TOAST", id, maxVisible });
        exitTimersRef.current.delete(id);
      }, 220);

      exitTimersRef.current.set(id, timer);
    },
    [maxVisible],
  );

  const dismissAll = useCallback(
    (position?: ToastPosition) => {
      // Clear timers for target position(s)
      if (position) {
        const posState = state[position];
        if (posState) {
          for (const item of posState.visible) {
            const timer = timersRef.current.get(item.id);
            if (timer) {
              clearTimeout(timer.timeoutId);
              timersRef.current.delete(item.id);
            }
          }
        }
      } else {
        for (const timer of timersRef.current.values()) clearTimeout(timer.timeoutId);
        timersRef.current.clear();
      }

      dispatch({ type: "DISMISS_ALL", position });

      setTimeout(() => {
        if (position) dispatch({ type: "CLEAR_POSITION", position });
        else dispatch({ type: "CLEAR_ALL_IMMEDIATELY" });
      }, 220);
    },
    [state],
  );

  const handlePause = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (!timer || timer.isPaused || timer.duration === 0) {
      return;
    }

    clearTimeout(timer.timeoutId);
    const elapsed = Date.now() - timer.startedAt;
    timer.remaining = Math.max(0, timer.remaining - elapsed);
    timer.isPaused = true;
  }, []);

  const handleResume = useCallback(
    (id: string) => {
      const timer = timersRef.current.get(id);
      if (!timer || !timer.isPaused || timer.duration === 0) return;
      if (timer.remaining <= 0) {
        dismiss(id);
        return;
      }

      timer.startedAt = Date.now();
      timer.isPaused = false;
      timer.timeoutId = setTimeout(() => {
        dismiss(id);
      }, timer.remaining);
    },
    [dismiss],
  );

  // Synchronize auto-dismiss timers for visible toasts
  useEffect(() => {
    const currentVisibleIds = new Set<string>();

    for (const pos of ALL_POSITIONS) {
      const posState = state[pos];
      if (!posState) continue;

      for (const item of posState.visible) {
        if (item.status === "visible") {
          currentVisibleIds.add(item.id);

          // If not yet tracked in timersRef and duration is positive
          if (!timersRef.current.has(item.id) && item.duration > 0) {
            const timeoutId = setTimeout(() => {
              dismiss(item.id);
            }, item.duration);

            timersRef.current.set(item.id, { timeoutId, remaining: item.duration, startedAt: Date.now(), duration: item.duration, isPaused: false });
          }
        }
      }
    }

    // Clean up timers for toasts that are no longer in visible state
    for (const [timerId, timerRecord] of timersRef.current.entries()) {
      if (!currentVisibleIds.has(timerId)) {
        clearTimeout(timerRecord.timeoutId);
        timersRef.current.delete(timerId);
      }
    }
  }, [state, dismiss]);

  // Clean up all active timers on provider unmount
  useEffect(() => {
    return () => {
      for (const timerRecord of timersRef.current.values()) {
        clearTimeout(timerRecord.timeoutId);
      }
      timersRef.current.clear();

      for (const exitTimer of exitTimersRef.current.values()) {
        clearTimeout(exitTimer);
      }
      exitTimersRef.current.clear();
    };
  }, []);

  const show = useCallback(
    (options: ToastOptions): string => {
      const id = options.id || generateId();
      const color: ToastColor = options.color ?? defaultColor;
      const position: ToastPosition = normalizePosition(options.position ?? defaultPosition);
      const radius: ToastRadius = options.radius ?? defaultRadius;
      const variant: ToastVariant = options.variant ?? defaultVariant;
      const duration: number =
        options.duration !== undefined ? options.duration : defaultDuration !== undefined ? defaultDuration : DEFAULT_TOAST_DURATIONS[color];
      const dismissible: boolean = options.dismissible ?? true;

      const toastItem: Omit<ToastItemState, "status"> = {
        id,
        message: options.message,
        title: options.title,
        color,
        position,
        radius,
        variant,
        duration,
        dismissible,
        timestamp: options.timestamp,
        loading: options.loading,
        action: options.action,
        icon: options.icon,
        createdAt: Date.now(),
      };

      dispatch({ type: "ADD_TOAST", toast: toastItem, maxVisible, maxPending });

      return id;
    },
    [generateId, defaultColor, defaultPosition, defaultRadius, defaultVariant, defaultDuration, maxVisible, maxPending],
  );

  const success = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "success" });
    },
    [show],
  );

  const error = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "error" });
    },
    [show],
  );

  const warning = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "warning" });
    },
    [show],
  );

  const info = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "info" });
    },
    [show],
  );

  const primary = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "primary" });
    },
    [show],
  );

  const secondary = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "secondary" });
    },
    [show],
  );

  const accent = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "accent" });
    },
    [show],
  );

  const glass = useCallback(
    (message: React.ReactNode, options?: ToastShortcutOptions): string => {
      return show({ ...options, message, color: "glass" });
    },
    [show],
  );

  const update = useCallback(
    (id: string, options: Partial<ToastOptions>) => {
      dispatch({ type: "UPDATE_TOAST", id, updates: options, maxVisible, maxPending });
    },
    [maxVisible, maxPending],
  );

  const api: ToastApi = useMemo(
    () => ({ show, success, error, warning, info, primary, secondary, accent, glass, update, dismiss, dismissAll }),
    [show, success, error, warning, info, primary, secondary, accent, glass, update, dismiss, dismissAll],
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastAllViewports
        state={state}
        onDismiss={dismiss}
        onPause={handlePause}
        onResume={handleResume}
        gap={gap}
        portal={portal}
        container={container}
      />
    </ToastContext.Provider>
  );
};
