import React, { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import JivicoGlassTheme from "../theme/theme.js";

export interface GlassThemeScopeProps {
  /**
   * Forces the theme mode ("light" | "dark") for all enclosed components.
   */
  mode: "light" | "dark";
  children: React.ReactNode;
}
/**
 * `<GlassThemeScope>` allows forcing a specific theme mode ("light" or "dark")
 * on any subtree or component (e.g. forcing a table, card, or modal to be Dark Mode).
 */
export function GlassThemeScope({ mode, children }: GlassThemeScopeProps) {
  const scopeTheme = useMemo(() => JivicoGlassTheme(mode), [mode]);

  return <ThemeProvider theme={scopeTheme}>{children}</ThemeProvider>;
}
