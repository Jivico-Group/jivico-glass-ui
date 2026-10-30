"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedThemeMode = "light" | "dark";

export interface GlassModeContextType {
  /**
   * User-selected appearance preference.
   *
   * - light  → always light
   * - dark   → always dark
   * - system → follows OS/browser preference
   */
  mode: ThemeMode;

  /**
   * The actual appearance currently being used.
   *
   * Always resolves to either light or dark.
   */
  resolvedMode: ResolvedThemeMode;

  /**
   * Toggles between light and dark.
   *
   * If currently using system, it switches from the
   * currently resolved appearance to the opposite.
   */
  toggleGlassMode: () => void;

  /**
   * Sets the user's appearance preference.
   */
  setGlassMode: (mode: ThemeMode) => void;
}

export const GlassModeContext = createContext<GlassModeContextType>({
  mode: "light",
  resolvedMode: "light",
  toggleGlassMode: () => {},
  setGlassMode: () => {},
});

export const useGlassMode = () => useContext(GlassModeContext);

// Backward-compatible aliases
export const ThemeContext = GlassModeContext;
export const useThemeContext = useGlassMode;

export interface GlassModeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

function getLocalStorage(): Storage | null {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage;
    }
    if (typeof localStorage !== "undefined") {
      return localStorage;
    }
  } catch {
    // Storage access denied (private mode, quota, security restrictions)
  }
  return null;
}

export function GlassModeProvider({ children, defaultMode = "light", storageKey = "jivico-theme-mode" }: GlassModeProviderProps) {
  /**
   * User-selected appearance preference.
   */
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  /**
   * Current OS/browser appearance.
   *
   * Starts with a deterministic value for SSR.
   */
  const [systemMode, setSystemMode] = useState<ResolvedThemeMode>("light");

  // Refs to track current state synchronously for rapid event handling and pure updater functions
  const modeRef = useRef<ThemeMode>(mode);
  const systemModeRef = useRef<ResolvedThemeMode>(systemMode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    systemModeRef.current = systemMode;
  }, [systemMode]);

  /**
   * Restore the user's saved preference after hydration.
   * Guarded against overwriting during hydration.
   */
  useEffect(() => {
    try {
      const storage = getLocalStorage();
      if (storage) {
        const saved = storage.getItem(storageKey);

        if (saved === "light" || saved === "dark" || saved === "system") {
          modeRef.current = saved;
          setModeState(saved);
        }
      }
    } catch {
      // Ignore storage access errors
    }
  }, [storageKey]);

  /**
   * Watch the operating system/browser appearance.
   */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemMode = () => {
      const nextSysMode: ResolvedThemeMode = mediaQuery.matches ? "dark" : "light";
      systemModeRef.current = nextSysMode;
      setSystemMode(nextSysMode);
    };

    updateSystemMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateSystemMode);
      return () => {
        mediaQuery.removeEventListener("change", updateSystemMode);
      };
    }

    if (typeof (mediaQuery as any).addListener === "function") {
      (mediaQuery as any).addListener(updateSystemMode);
      return () => {
        (mediaQuery as any).removeListener(updateSystemMode);
      };
    }

    return undefined;
  }, []);

  /**
   * Resolve the actual appearance.
   */
  const resolvedMode: ResolvedThemeMode = mode === "system" ? systemMode : mode;

  /**
   * Helper to perform smooth View Transitions if supported by browser.
   * Must not run during SSR, must degrade gracefully if unsupported or throwing.
   */
  const withViewTransition = useCallback((callback: () => void) => {
    if (
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      typeof (document as any).startViewTransition === "function"
    ) {
      let executed = false;
      const safeCallback = () => {
        if (!executed) {
          executed = true;
          callback();
        }
      };

      try {
        const transition = (document as any).startViewTransition(() => {
          safeCallback();
        });
        if (transition && typeof transition.finished?.catch === "function") {
          transition.finished.catch(() => {
            // Silently handle transition abort/superseded without unhandled rejection
          });
        }
        if (transition && typeof transition.ready?.catch === "function") {
          transition.ready.catch(() => {
            // Silently handle ready promise rejection
          });
        }
      } catch {
        // Fallback: execute callback directly if API invocation throws synchronously
        safeCallback();
      }
    } else {
      callback();
    }
  }, []);

  /**
   * Toggle between light and dark.
   *
   * When using system mode, this explicitly switches
   * to the opposite of the currently resolved mode.
   *
   * Pure state update: localStorage side-effect runs outside of functional state updater.
   */
  const toggleGlassMode = useCallback(() => {
    const currentMode = modeRef.current;
    const currentResolved = currentMode === "system" ? systemModeRef.current : currentMode;
    const nextMode: ThemeMode = currentResolved === "light" ? "dark" : "light";

    modeRef.current = nextMode;

    withViewTransition(() => {
      setModeState(nextMode);
    });

    try {
      const storage = getLocalStorage();
      if (storage) storage.setItem(storageKey, nextMode);
    } catch {
      // Ignore storage access errors.
    }
  }, [storageKey, withViewTransition]);

  /**
   * Set the user's appearance preference.
   *
   * Pure state update: localStorage side-effect runs outside of functional state updater.
   */
  const setGlassMode = useCallback(
    (newMode: ThemeMode) => {
      if (newMode !== "light" && newMode !== "dark" && newMode !== "system") return;
      modeRef.current = newMode;

      withViewTransition(() => {
        setModeState(newMode);
      });

      try {
        const storage = getLocalStorage();
        if (storage) storage.setItem(storageKey, newMode);
      } catch {
        // Ignore storage access errors.
      }
    },
    [storageKey, withViewTransition],
  );

  const value = useMemo<GlassModeContextType>(
    () => ({ mode, resolvedMode, toggleGlassMode, setGlassMode }),
    [mode, resolvedMode, toggleGlassMode, setGlassMode],
  );

  return <GlassModeContext.Provider value={value}>{children}</GlassModeContext.Provider>;
}
