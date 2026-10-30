"use client";

import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { DEFAULT_TOAST_DURATIONS, normalizePosition } from "./Toast.types.js";
import { ToastContext } from "./ToastContext.js";
import { ALL_POSITIONS, createInitialToastState, findToastGlobally, sanitizeDuration, toastReducer } from "./toastReducer.js";
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
  revision: number;
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
  const stateRef = useRef(state);
  const activeIdsRef = useRef<Set<string>>(new Set());
  const positionCountsRef = useRef<Record<ToastPosition, number>>({
    "top-left": 0,
    "top-center": 0,
    "top-right": 0,
    "bottom-left": 0,
    "bottom-center": 0,
    "bottom-right": 0,
  });

  useEffect(() => {
    stateRef.current = state;

    const nextActiveIds = new Set<string>();
    const nextCounts: Record<ToastPosition, number> = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0,
    };

    for (const pos of ALL_POSITIONS) {
      const posState = state[pos];
      if (!posState) continue;
      nextCounts[pos] = posState.visible.length;
      for (const item of posState.visible) {
        nextActiveIds.add(item.id);
      }
      for (const item of posState.queue) {
        nextActiveIds.add(item.id);
      }
    }

    activeIdsRef.current = nextActiveIds;
    positionCountsRef.current = nextCounts;
  }, [state]);

  const idCounterRef = useRef(0);
  const timersRef = useRef<Map<string, TimerRecord>>(new Map());
  const exitTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const generateId = useCallback((): string => {
    idCounterRef.current += 1;
    return `toast-${Date.now().toString(36)}-${idCounterRef.current}`;
  }, []);

  const dismiss = useCallback(
    (id: string) => {
      // If this toast is already transitioning out (exit timer running), idempotent no-op
      if (exitTimersRef.current.has(id)) {
        return;
      }

      // Clear and remove auto-dismiss timer
      const activeTimer = timersRef.current.get(id);
      if (activeTimer) {
        clearTimeout(activeTimer.timeoutId);
        timersRef.current.delete(id);
      }

      // Start exit animation
      dispatch({ type: "START_EXIT", id });
    },
    [],
  );

  const dismissAll = useCallback(
    (position?: ToastPosition) => {
      const targetPositions = position ? [position] : ALL_POSITIONS;

      // Cancel active auto-dismiss timers for targeted visible toasts
      for (const pos of targetPositions) {
        const posState = stateRef.current[pos];
        if (!posState) continue;
        for (const item of posState.visible) {
          const timer = timersRef.current.get(item.id);
          if (timer) {
            clearTimeout(timer.timeoutId);
            timersRef.current.delete(item.id);
          }
        }
      }

      // Dispatch DISMISS_ALL to set visible status to 'exiting' and clear queue
      dispatch({ type: "DISMISS_ALL", position });
    },
    [],
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

  // Synchronize auto-dismiss timers and exit timers for visible/exiting toasts
  useEffect(() => {
    const currentVisibleIds = new Set<string>();
    const currentExitingIds = new Set<string>();

    for (const pos of ALL_POSITIONS) {
      const posState = state[pos];
      if (!posState) continue;

      for (const item of posState.visible) {
        if (item.status === "visible") {
          currentVisibleIds.add(item.id);
          const existingTimer = timersRef.current.get(item.id);

          if (!existingTimer) {
            // New visible toast with positive duration: start auto-dismiss timer
            if (item.duration > 0) {
              const timeoutId = setTimeout(() => {
                dismiss(item.id);
              }, item.duration);

              timersRef.current.set(item.id, {
                timeoutId,
                remaining: item.duration,
                startedAt: Date.now(),
                duration: item.duration,
                revision: item.revision ?? 0,
                isPaused: false,
              });
            }
          } else {
            // Existing timer record: check if duration or revision was updated via toast.update()
            const isDurationChanged = existingTimer.duration !== item.duration;
            const isRevisionChanged = existingTimer.revision !== (item.revision ?? 0);

            if (isDurationChanged || isRevisionChanged) {
              clearTimeout(existingTimer.timeoutId);

              if (item.duration <= 0) {
                // Changed to persistent: delete timer record
                timersRef.current.delete(item.id);
              } else if (existingTimer.isPaused) {
                // Updated while paused: adjust remaining and duration, stay paused
                existingTimer.duration = item.duration;
                existingTimer.remaining = item.duration;
                existingTimer.revision = item.revision ?? 0;
              } else {
                // Updated while active: start new timer with updated duration
                const timeoutId = setTimeout(() => {
                  dismiss(item.id);
                }, item.duration);

                existingTimer.timeoutId = timeoutId;
                existingTimer.duration = item.duration;
                existingTimer.remaining = item.duration;
                existingTimer.startedAt = Date.now();
                existingTimer.revision = item.revision ?? 0;
              }
            }
          }
        } else if (item.status === "exiting") {
          currentExitingIds.add(item.id);

          // Clear any active auto-dismiss timer
          const activeTimer = timersRef.current.get(item.id);
          if (activeTimer) {
            clearTimeout(activeTimer.timeoutId);
            timersRef.current.delete(item.id);
          }

          // Schedule exit removal after 220ms CSS transition
          if (!exitTimersRef.current.has(item.id)) {
            const exitTimer = setTimeout(() => {
              dispatch({ type: "REMOVE_TOAST", id: item.id, maxVisible });
              exitTimersRef.current.delete(item.id);
            }, 220);
            exitTimersRef.current.set(item.id, exitTimer);
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

    // Clean up exit timers for toasts that are no longer in exiting state
    for (const [exitId, exitTimer] of exitTimersRef.current.entries()) {
      if (!currentExitingIds.has(exitId)) {
        clearTimeout(exitTimer);
        exitTimersRef.current.delete(exitId);
      }
    }
  }, [state, dismiss, maxVisible]);

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
      const color: ToastColor = options.color ?? defaultColor;
      const position: ToastPosition = normalizePosition(options.position ?? defaultPosition);
      const fallbackDuration = defaultDuration !== undefined ? defaultDuration : DEFAULT_TOAST_DURATIONS[color];
      const rawDuration: number = options.duration !== undefined ? options.duration : fallbackDuration;
      const duration: number = sanitizeDuration(rawDuration, fallbackDuration);
      const id = options.id || generateId();

      // Reject custom ID conflicts globally
      if (options.id && (activeIdsRef.current.has(options.id) || findToastGlobally(stateRef.current, options.id))) {
        return "";
      }

      // Reject admission if pending queue is disabled (maxPending === 0) and visible stack is full
      const currentPosState = stateRef.current[position];
      const currentCount = Math.max(
        currentPosState ? currentPosState.visible.length : 0,
        positionCountsRef.current[position] ?? 0,
      );
      if (maxPending === 0 && currentCount >= maxVisible) {
        return "";
      }

      activeIdsRef.current.add(id);
      positionCountsRef.current[position] = (positionCountsRef.current[position] ?? 0) + 1;

      const radius: ToastRadius = options.radius ?? defaultRadius;
      const variant: ToastVariant = options.variant ?? defaultVariant;
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
        revision: 0,
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
