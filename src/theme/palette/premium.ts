import { COLORS } from "../colors/index.js";

export const buildPremiumPalette = (isDark: boolean) => ({
  main: isDark ? COLORS.premium.dark : COLORS.premium.light,
  light: COLORS.premium.dark,
  dark: COLORS.premium.hoverLight,
  hover: isDark ? COLORS.premium.hoverDark : COLORS.premium.hoverLight,
  active: isDark ? COLORS.premium.activeDark : COLORS.premium.activeLight,
  disabled: isDark ? COLORS.premium.disabledDark : COLORS.premium.disabledLight,
  glow: isDark ? COLORS.premium.glowDark : COLORS.premium.glowLight,
  contrastText: isDark ? COLORS.premium.textDark : COLORS.premium.textLight,
  gradient: COLORS.premium.gradient,
});
