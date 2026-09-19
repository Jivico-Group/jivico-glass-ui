import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedThemeMode = "light" | "dark";

export interface ThemeContextType {
  /**
   * User-selected theme preference.
   *
   * - light  → always light
   * - dark   → always dark
   * - system → follows OS/browser preference
   */
  mode: ThemeMode;

  /**
   * The actual theme currently being used.
   *
   * Always resolves to either light or dark.
   */
  resolvedMode: ResolvedThemeMode;

  /**
   * Toggles between light and dark.
   *
   * If currently using system, it resolves to the
   * opposite of the current resolved theme.
   */
  toggleTheme: () => void;

  /**
   * Sets the user's theme preference.
   */
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  resolvedMode: "light",
  toggleTheme: () => {},
  setMode: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

export interface ThemeModeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export function ThemeModeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode",
}: ThemeModeProviderProps) {
  /*
   * This is the user's preference.
   *
   * It can be:
   * light
   * dark
   * system
   */
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  /*
   * This is the actual theme that should be passed
   * to JivicoGlassTheme().
   *
   * Keep the initial value deterministic for SSR.
   */
  const [systemMode, setSystemMode] = useState<ResolvedThemeMode>("light");

  /*
   * Load saved preference after hydration.
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

  /*
   * Watch the operating system/browser theme.
   *
   * This only runs in the browser because useEffect()
   * does not run during SSR.
   */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemMode = () => {
      setSystemMode(mediaQuery.matches ? "dark" : "light");
    };

    // Initial system preference.
    updateSystemMode();

    // React to OS theme changes.
    mediaQuery.addEventListener("change", updateSystemMode);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemMode);
    };
  }, []);

  /*
   * Resolve the actual theme.
   */
  const resolvedMode: ResolvedThemeMode = mode === "system" ? systemMode : mode;

  /*
   * Toggle light/dark.
   *
   * If mode is "system", toggle from the currently
   * resolved theme and explicitly switch to the opposite.
   */
  const toggleTheme = () => {
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

  /*
   * Explicitly change the user's preference.
   */
  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);

    try {
      localStorage.setItem(storageKey, newMode);
    } catch {
      // Ignore storage access errors.
    }
  };

  const value = useMemo<ThemeContextType>(
    () => ({
      mode,
      resolvedMode,
      toggleTheme,
      setMode,
    }),
    [mode, resolvedMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
