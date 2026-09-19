import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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

const GlassModeContext = createContext<GlassModeContextType>({
  mode: "light",
  resolvedMode: "light",
  toggleGlassMode: () => {},
  setGlassMode: () => {},
});

export const useGlassMode = () => useContext(GlassModeContext);

export interface GlassModeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export function GlassModeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode",
}: GlassModeProviderProps) {
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

  /**
   * Restore the user's saved preference after hydration.
   */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);

      if (saved === "light" || saved === "dark" || saved === "system") {
        setModeState(saved);
      }
    } catch {
      // Ignore storage access errors.
    }
  }, [storageKey]);

  /**
   * Watch the operating system/browser appearance.
   */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemMode = () => {
      setSystemMode(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemMode();

    mediaQuery.addEventListener("change", updateSystemMode);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemMode);
    };
  }, []);

  /**
   * Resolve the actual appearance.
   */
  const resolvedMode: ResolvedThemeMode = mode === "system" ? systemMode : mode;

  /**
   * Toggle between light and dark.
   *
   * When using system mode, this explicitly switches
   * to the opposite of the currently resolved mode.
   */
  const toggleGlassMode = () => {
    setModeState((previousMode) => {
      const currentResolved =
        previousMode === "system" ? systemMode : previousMode;

      const nextMode: ThemeMode =
        currentResolved === "light" ? "dark" : "light";

      try {
        localStorage.setItem(storageKey, nextMode);
      } catch {
        // Ignore storage access errors.
      }

      return nextMode;
    });
  };

  /**
   * Set the user's appearance preference.
   */
  const setGlassMode = (newMode: ThemeMode) => {
    setModeState(newMode);

    try {
      localStorage.setItem(storageKey, newMode);
    } catch {
      // Ignore storage access errors.
    }
  };

  const value = useMemo<GlassModeContextType>(
    () => ({
      mode,
      resolvedMode,
      toggleGlassMode,
      setGlassMode,
    }),
    [mode, resolvedMode],
  );

  return (
    <GlassModeContext.Provider value={value}>
      {children}
    </GlassModeContext.Provider>
  );
}
