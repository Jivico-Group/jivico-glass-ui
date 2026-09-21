import { COLORS } from "../colors/index.js";

export const buildGlassPalette = (isDark: boolean) => ({
  main: isDark ? COLORS.glass.mainDark : COLORS.glass.mainLight,

  contrastText: isDark
    ? COLORS.glass.contrastTextDark
    : COLORS.glass.contrastTextLight,

  surface: isDark ? "#FFFFFF" : "#000000",

  light: isDark ? COLORS.glass.lightDark : COLORS.glass.lightLight,
  dark: isDark ? COLORS.glass.darkDark : COLORS.glass.darkLight,

  hover: isDark ? COLORS.glass.hoverDark : COLORS.glass.hoverLight,
  active: isDark ? COLORS.glass.activeDark : COLORS.glass.activeLight,

  disabled: isDark ? COLORS.glass.disabledDark : COLORS.glass.disabledLight,

  glow: isDark ? COLORS.glass.glowDark : COLORS.glass.glowLight,

  buttonBorder: isDark
    ? COLORS.glass.buttonBorderDark
    : COLORS.glass.buttonBorderLight,

  buttonBg: isDark ? COLORS.glass.buttonBgDark : COLORS.glass.buttonBgLight,
  alertBg: isDark ? COLORS.glass.alertBgDark : COLORS.glass.alertBgLight,
  buttonHoverBg: isDark
    ? COLORS.glass.buttonHoverBgDark
    : COLORS.glass.buttonHoverBgLight,

  buttonTextHover: isDark
    ? COLORS.glass.buttonTextHoverDark
    : COLORS.glass.buttonTextHoverLight,

  fabShadow: isDark ? COLORS.glass.fabShadowDark : COLORS.glass.fabShadowLight,

  inputBorderHover: isDark
    ? COLORS.glass.inputBorderHoverDark
    : COLORS.glass.inputBorderHoverLight,

  inputFocusBg: isDark ? COLORS.glass.inputFocusBgDark : COLORS.white,

  paperBg: isDark ? COLORS.glass.paperBgDark : COLORS.glass.paperBgLight,

  paperBorder: isDark
    ? COLORS.glass.paperBorderDark
    : COLORS.glass.paperBorderLight,

  paperShadow: isDark
    ? COLORS.glass.paperShadowDark
    : COLORS.glass.paperShadowLight,

  control: isDark ? COLORS.glass.controlDark : COLORS.glass.controlLight,

  switchTrack: isDark
    ? COLORS.glass.switchTrackDark
    : COLORS.glass.switchTrackLight,

  switchShadow: COLORS.glass.switchShadow,

  sliderThumbShadow: COLORS.glass.sliderThumbShadow,

  sliderRail: isDark
    ? COLORS.glass.sliderRailDark
    : COLORS.glass.sliderRailLight,

  chipBg: isDark ? COLORS.glass.chipBgDark : COLORS.glass.chipBgLight,

  chipBorder: isDark
    ? COLORS.glass.chipBorderDark
    : COLORS.glass.chipBorderLight,

  avatarBorder: isDark
    ? COLORS.glass.avatarBorderDark
    : COLORS.glass.avatarBorderLight,

  tableBorder: isDark
    ? COLORS.glass.tableBorderDark
    : COLORS.glass.tableBorderLight,

  tableHeadBg: isDark
    ? COLORS.glass.tableHeadBgDark
    : COLORS.glass.tableHeadBgLight,

  tooltipBg: isDark ? COLORS.glass.tooltipBgDark : COLORS.glass.tooltipBgLight,

  tooltipBorder: isDark
    ? COLORS.glass.tooltipBorderDark
    : COLORS.glass.tooltipBorderLight,

  tooltipShadow: COLORS.glass.tooltipShadow,

  dialogBg: isDark ? COLORS.glass.dialogBgDark : COLORS.glass.dialogBgLight,

  dialogShadow: isDark
    ? COLORS.glass.dialogShadowDark
    : COLORS.glass.dialogShadowLight,

  skeletonBg: isDark
    ? COLORS.glass.skeletonBgDark
    : COLORS.glass.skeletonBgLight,

  progressBg: isDark
    ? COLORS.glass.progressBgDark
    : COLORS.glass.progressBgLight,

  cardBg: isDark ? COLORS.glass.cardBgDark : COLORS.glass.cardBgLight,

  cardShadow: isDark
    ? COLORS.glass.cardShadowDark
    : COLORS.glass.cardShadowLight,

  cardHoverShadow: isDark
    ? COLORS.glass.cardHoverShadowDark
    : COLORS.glass.cardHoverShadowLight,

  elevation1: isDark
    ? COLORS.glass.elevation1Dark
    : COLORS.glass.elevation1Light,

  appBarBg: isDark ? COLORS.glass.appBarBgDark : COLORS.glass.appBarBgLight,

  accordionBg: isDark
    ? COLORS.glass.accordionBgDark
    : COLORS.glass.accordionBgLight,

  drawerBg: isDark ? COLORS.glass.drawerBgDark : COLORS.glass.drawerBgLight,

  menuItemHover: isDark
    ? COLORS.glass.menuItemHoverDark
    : COLORS.glass.menuItemHoverLight,
});
