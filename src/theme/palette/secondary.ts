import { COLORS } from "../colors/index.js";

export const buildSecondaryPalette = (isDark: boolean) => ({
  main: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
  hover: isDark ? COLORS.secondary.hoverDark : COLORS.secondary.hoverLight,
  active: isDark
    ? COLORS.secondary.activeDark
    : COLORS.secondary.activeLight,
  disabled: isDark
    ? COLORS.secondary.disabledDark
    : COLORS.secondary.disabledLight,
  glow: isDark ? COLORS.secondary.glowDark : COLORS.secondary.glowLight,
  contrastText: isDark
    ? COLORS.secondary.textDark
    : COLORS.secondary.textLight,
});
