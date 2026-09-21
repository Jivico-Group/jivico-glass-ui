import { COLORS } from "../colors/index.js";

export const buildAccentPalette = (isDark: boolean) => ({
  main: isDark ? COLORS.accent.dark : COLORS.accent.light,
  hover: isDark ? COLORS.accent.hoverDark : COLORS.accent.hoverLight,
  active: isDark ? COLORS.accent.activeDark : COLORS.accent.activeLight,
  disabled: isDark
    ? COLORS.accent.disabledDark
    : COLORS.accent.disabledLight,
  glow: isDark ? COLORS.accent.glowDark : COLORS.accent.glowLight,
  contrastText: isDark ? COLORS.accent.textDark : COLORS.accent.textLight,
});
