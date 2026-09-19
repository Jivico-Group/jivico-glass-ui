import { COLORS } from './colors.js';

/**
 * Builds a mode-resolved palette from the raw COLORS constants.
 * Every value is already resolved for the given mode so consumers
 * never need to branch on `isDark` themselves.
 */
export const buildPalette = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return {
    primary: {
      main: isDark ? COLORS.primary.dark : COLORS.primary.light,
      hover: isDark ? COLORS.primary.hoverDark : COLORS.primary.hoverLight,
      active: isDark ? COLORS.primary.activeDark : COLORS.primary.activeLight,
      disabled: isDark ? COLORS.primary.disabledDark : COLORS.primary.disabledLight,
      glow: isDark ? COLORS.primary.glowDark : COLORS.primary.glowLight,
      contrastText: isDark ? COLORS.primary.textDark : COLORS.primary.textLight,
    },
    secondary: {
      main: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
      hover: isDark ? COLORS.secondary.hoverDark : COLORS.secondary.hoverLight,
      active: isDark ? COLORS.secondary.activeDark : COLORS.secondary.activeLight,
      disabled: isDark ? COLORS.secondary.disabledDark : COLORS.secondary.disabledLight,
      glow: isDark ? COLORS.secondary.glowDark : COLORS.secondary.glowLight,
      contrastText: isDark ? COLORS.secondary.textDark : COLORS.secondary.textLight,
    },
    success: {
      main: isDark ? COLORS.success.dark : COLORS.success.light,
      hover: isDark ? COLORS.success.hoverDark : COLORS.success.hoverLight,
      active: isDark ? COLORS.success.activeDark : COLORS.success.activeLight,
      disabled: isDark ? COLORS.success.disabledDark : COLORS.success.disabledLight,
      glow: isDark ? COLORS.success.glowDark : COLORS.success.glowLight,
      contrastText: isDark ? COLORS.success.textDark : COLORS.success.textLight,
    },
    warning: {
      main: isDark ? COLORS.warning.dark : COLORS.warning.light,
      hover: isDark ? COLORS.warning.hoverDark : COLORS.warning.hoverLight,
      active: isDark ? COLORS.warning.activeDark : COLORS.warning.activeLight,
      disabled: isDark ? COLORS.warning.disabledDark : COLORS.warning.disabledLight,
      glow: isDark ? COLORS.warning.glowDark : COLORS.warning.glowLight,
      contrastText: isDark ? COLORS.warning.textDark : COLORS.warning.textLight,
    },
    error: {
      main: isDark ? COLORS.error.dark : COLORS.error.light,
      hover: isDark ? COLORS.error.hoverDark : COLORS.error.hoverLight,
      active: isDark ? COLORS.error.activeDark : COLORS.error.activeLight,
      disabled: isDark ? COLORS.error.disabledDark : COLORS.error.disabledLight,
      glow: isDark ? COLORS.error.glowDark : COLORS.error.glowLight,
      contrastText: isDark ? COLORS.error.textDark : COLORS.error.textLight,
    },
    info: {
      main: isDark ? COLORS.info.dark : COLORS.info.light,
      hover: isDark ? COLORS.info.hoverDark : COLORS.info.hoverLight,
      active: isDark ? COLORS.info.activeDark : COLORS.info.activeLight,
      disabled: isDark ? COLORS.info.disabledDark : COLORS.info.disabledLight,
      glow: isDark ? COLORS.info.glowDark : COLORS.info.glowLight,
      contrastText: isDark ? COLORS.info.textDark : COLORS.info.textLight,
    },
    background: {
      default: isDark ? COLORS.background.dark : COLORS.background.light,
      paper: isDark ? COLORS.background.paperDark : COLORS.background.paperLight,
    },
    text: {
      primary: isDark ? COLORS.text.primaryDark : COLORS.text.primaryLight,
      secondary: isDark ? COLORS.text.secondaryDark : COLORS.text.secondaryLight,
    },
    divider: isDark ? COLORS.divider.dark : COLORS.divider.light,
    glass: {
      buttonBorder: isDark ? COLORS.glass.buttonBorderDark : COLORS.glass.buttonBorderLight,
      buttonBg: isDark ? COLORS.glass.buttonBgDark : COLORS.glass.buttonBgLight,
      buttonHoverBg: isDark ? COLORS.glass.buttonHoverBgDark : COLORS.glass.buttonHoverBgLight,
      buttonTextHover: isDark
        ? COLORS.glass.buttonTextHoverDark
        : COLORS.glass.buttonTextHoverLight,
      fabShadow: isDark ? COLORS.glass.fabShadowDark : COLORS.glass.fabShadowLight,
      inputBorderHover: isDark
        ? COLORS.glass.inputBorderHoverDark
        : COLORS.glass.inputBorderHoverLight,
      inputFocusBg: isDark ? COLORS.glass.inputFocusBgDark : COLORS.white,
      paperBg: isDark ? COLORS.glass.paperBgDark : COLORS.glass.paperBgLight,
      paperBorder: isDark ? COLORS.glass.paperBorderDark : COLORS.glass.paperBorderLight,
      paperShadow: isDark ? COLORS.glass.paperShadowDark : COLORS.glass.paperShadowLight,
      control: isDark ? COLORS.glass.controlDark : COLORS.glass.controlLight,
      switchTrack: isDark ? COLORS.glass.switchTrackDark : COLORS.glass.switchTrackLight,
      switchShadow: COLORS.glass.switchShadow,
      sliderThumbShadow: COLORS.glass.sliderThumbShadow,
      sliderRail: isDark ? COLORS.glass.sliderRailDark : COLORS.glass.sliderRailLight,
      chipBg: isDark ? COLORS.glass.chipBgDark : COLORS.glass.chipBgLight,
      chipBorder: isDark ? COLORS.glass.chipBorderDark : COLORS.glass.chipBorderLight,
      avatarBorder: isDark ? COLORS.glass.avatarBorderDark : COLORS.glass.avatarBorderLight,
      tableBorder: isDark ? COLORS.glass.tableBorderDark : COLORS.glass.tableBorderLight,
      tableHeadBg: isDark ? COLORS.glass.tableHeadBgDark : COLORS.glass.tableHeadBgLight,
      tooltipBg: isDark ? COLORS.glass.tooltipBgDark : COLORS.glass.tooltipBgLight,
      tooltipBorder: isDark ? COLORS.glass.tooltipBorderDark : COLORS.glass.tooltipBorderLight,
      tooltipShadow: COLORS.glass.tooltipShadow,
      dialogBg: isDark ? COLORS.glass.dialogBgDark : COLORS.glass.dialogBgLight,
      dialogShadow: isDark ? COLORS.glass.dialogShadowDark : COLORS.glass.dialogShadowLight,
      skeletonBg: isDark ? COLORS.glass.skeletonBgDark : COLORS.glass.skeletonBgLight,
      progressBg: isDark ? COLORS.glass.progressBgDark : COLORS.glass.progressBgLight,
      cardBg: isDark ? COLORS.glass.cardBgDark : COLORS.glass.cardBgLight,
      cardShadow: isDark ? COLORS.glass.cardShadowDark : COLORS.glass.cardShadowLight,
      cardHoverShadow: isDark
        ? COLORS.glass.cardHoverShadowDark
        : COLORS.glass.cardHoverShadowLight,
      elevation1: isDark ? COLORS.glass.elevation1Dark : COLORS.glass.elevation1Light,
      appBarBg: isDark ? COLORS.glass.appBarBgDark : COLORS.glass.appBarBgLight,
      accordionBg: isDark ? COLORS.glass.accordionBgDark : COLORS.glass.accordionBgLight,
      drawerBg: isDark ? COLORS.glass.drawerBgDark : COLORS.glass.drawerBgLight,
      menuItemHover: isDark ? COLORS.glass.menuItemHoverDark : COLORS.glass.menuItemHoverLight,
    },
    action: {
      hover: isDark ? COLORS.action.hoverDark : COLORS.action.hoverLight,
      selected: isDark ? COLORS.action.selectedDark : COLORS.action.selectedLight,
    },
    alert: {
      success: COLORS.alertRgb.success,
      warning: isDark ? COLORS.alertRgb.warningDark : COLORS.alertRgb.warningLight,
      error: COLORS.alertRgb.error,
      info: COLORS.alertRgb.info,
    },
    gradients: COLORS.gradients,
  };
};

export type JivicoPalette = ReturnType<typeof buildPalette>;
