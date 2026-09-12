import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getAntigravityTheme } from '../theme/theme.js';
import { ThemeModeProvider, useThemeMode, ThemeMode } from '../context/ThemeContext.js';

function InternalMuiWrapper({
  children,
  enableCssBaseline = true,
}: {
  children: React.ReactNode;
  enableCssBaseline?: boolean;
}) {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getAntigravityTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {enableCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
}

export interface JivicoThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
  enableCssBaseline?: boolean;
}

export function JivicoThemeProvider({
  children,
  defaultMode = 'light',
  storageKey = 'jivico-theme-mode',
  enableCssBaseline = true,
}: JivicoThemeProviderProps) {
  return (
    <ThemeModeProvider defaultMode={defaultMode} storageKey={storageKey}>
      <InternalMuiWrapper enableCssBaseline={enableCssBaseline}>
        {children}
      </InternalMuiWrapper>
    </ThemeModeProvider>
  );
}
