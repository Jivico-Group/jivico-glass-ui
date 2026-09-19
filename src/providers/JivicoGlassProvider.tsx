import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import JivicoGlassTheme from "../theme/theme.js";
import {
  GlassModeProvider,
  useGlassMode,
  ThemeMode,
} from "../context/ThemeContext.js";

function InternalMuiWrapper({
  children,
  enableCssBaseline = true,
}: {
  children: React.ReactNode;
  enableCssBaseline?: boolean;
}) {
  const { resolvedMode } = useGlassMode();

  const theme = React.useMemo(
    () => JivicoGlassTheme(resolvedMode),
    [resolvedMode],
  );

  return (
    <ThemeProvider theme={theme}>
      {enableCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
}

export interface JivicoGlassProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
  enableCssBaseline?: boolean;
}

export function JivicoGlassProvider({
  children,
  defaultMode = "system",
  storageKey = "jivico-theme-mode",
  enableCssBaseline = true,
}: JivicoGlassProviderProps) {
  return (
    <GlassModeProvider defaultMode={defaultMode} storageKey={storageKey}>
      <InternalMuiWrapper enableCssBaseline={enableCssBaseline}>
        {children}
      </InternalMuiWrapper>
    </GlassModeProvider>
  );
}
