import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
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
  defaultMode = 'light',
  storageKey = 'jivico-theme-mode',
}: ThemeModeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') {
        setModeState(saved);
      } else if (
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setModeState('dark');
      }
    } catch {
      // Ignore storage access errors (SSR/private mode)
    }
  }, [storageKey]);

  const toggleTheme = () => {
    setModeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(storageKey, newMode);
    } catch {
      // Ignore
    }
  };

  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
      setMode,
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
