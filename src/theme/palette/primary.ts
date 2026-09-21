import { COLORS } from "../colors/index.js";

export const buildPrimaryPalette = (isDark: boolean) => ({
  main: isDark ? COLORS.primary.dark : COLORS.primary.light,
  light: COLORS.primary.dark,
  dark: COLORS.primary.light,
  hover: isDark ? COLORS.primary.hoverDark : COLORS.primary.hoverLight,
  active: isDark ? COLORS.primary.activeDark : COLORS.primary.activeLight,
  disabled: isDark
    ? COLORS.primary.disabledDark
    : COLORS.primary.disabledLight,
  glow: isDark ? COLORS.primary.glowDark : COLORS.primary.glowLight,
  contrastText: isDark ? COLORS.primary.textDark : COLORS.primary.textLight,
});

