import { COLORS } from "../colors/index.js";

export const buildSemanticPalette = (isDark: boolean) => ({
  success: {
    main: isDark ? COLORS.success.dark : COLORS.success.light,
    light: COLORS.success.dark,
    dark: COLORS.success.light,
    hover: isDark ? COLORS.success.hoverDark : COLORS.success.hoverLight,
    active: isDark ? COLORS.success.activeDark : COLORS.success.activeLight,
    disabled: isDark
      ? COLORS.success.disabledDark
      : COLORS.success.disabledLight,
    glow: isDark ? COLORS.success.glowDark : COLORS.success.glowLight,
    contrastText: isDark ? COLORS.success.textDark : COLORS.success.textLight,
  },

  warning: {
    main: isDark ? COLORS.warning.dark : COLORS.warning.light,
    light: COLORS.warning.dark,
    dark: COLORS.warning.light,
    hover: isDark ? COLORS.warning.hoverDark : COLORS.warning.hoverLight,
    active: isDark ? COLORS.warning.activeDark : COLORS.warning.activeLight,
    disabled: isDark
      ? COLORS.warning.disabledDark
      : COLORS.warning.disabledLight,
    glow: isDark ? COLORS.warning.glowDark : COLORS.warning.glowLight,
    contrastText: isDark ? COLORS.warning.textDark : COLORS.warning.textLight,
  },

  error: {
    main: isDark ? COLORS.error.dark : COLORS.error.light,
    light: COLORS.error.dark,
    dark: COLORS.error.light,
    hover: isDark ? COLORS.error.hoverDark : COLORS.error.hoverLight,
    active: isDark ? COLORS.error.activeDark : COLORS.error.activeLight,
    disabled: isDark ? COLORS.error.disabledDark : COLORS.error.disabledLight,
    glow: isDark ? COLORS.error.glowDark : COLORS.error.glowLight,
    contrastText: isDark ? COLORS.error.textDark : COLORS.error.textLight,
  },

  info: {
    main: isDark ? COLORS.info.dark : COLORS.info.light,
    light: COLORS.info.dark,
    dark: COLORS.info.light,
    hover: isDark ? COLORS.info.hoverDark : COLORS.info.hoverLight,
    active: isDark ? COLORS.info.activeDark : COLORS.info.activeLight,
    disabled: isDark ? COLORS.info.disabledDark : COLORS.info.disabledLight,
    glow: isDark ? COLORS.info.glowDark : COLORS.info.glowLight,
    contrastText: isDark ? COLORS.info.textDark : COLORS.info.textLight,
  },
});

