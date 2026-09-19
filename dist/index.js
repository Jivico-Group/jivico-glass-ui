'use strict';

var styles = require('@mui/material/styles');
var React = require('react');
var material = require('@mui/material');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');
var CssBaseline = require('@mui/material/CssBaseline');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var CssBaseline__default = /*#__PURE__*/_interopDefault(CssBaseline);

// src/theme/colors.ts
var COLORS = {
  // ─── Brand Monochrome ────────────────────────────────────────────────────────
  brand: {
    charcoal: "#111111",
    stone: "#686868",
    sand: "#D9D9CF",
    cream: "#F6F5F2"
  },
  // ─── Primary (Charcoal) ──────────────────────────────────────────────────────
  primary: {
    /** Light mode: bold charcoal for buttons, focus rings, active states */
    light: "#111111",
    /** Dark mode: crisp cream/off-white — reads as luxury against dark glass */
    dark: "#F6F5F2",
    hoverLight: "#2A2A2A",
    hoverDark: "#E8E7E4",
    activeLight: "#1A1A1A",
    activeDark: "#D9D8D4",
    disabledLight: "#D9D9D9",
    disabledDark: "#3A3A3A",
    glowLight: "rgba(17, 17, 17, 0.35)",
    glowDark: "rgba(246, 245, 242, 0.4)",
    textLight: "#FFFFFF",
    textDark: "#111111"
  },
  // ─── Secondary (Cream) ───────────────────────────────────────────────────────
  secondary: {
    light: "#F6F5F2",
    dark: "#F6F5F2",
    hoverLight: "#2A2A2A",
    hoverDark: "#E8E7E4",
    activeLight: "#3A3A37",
    activeDark: "#D4D4D8",
    disabledLight: "#3A3A3A",
    disabledDark: "#EDEDED",
    glowLight: "rgba(17, 17, 17, 0.08)",
    glowDark: "rgba(246, 245, 242, 0.15)",
    textLight: "#111111",
    textDark: "#F6F5F2"
  },
  // ─── Semantic ────────────────────────────────────────────────────────────────
  success: {
    light: "#34A853",
    dark: "#81C995",
    hoverLight: "#2D9247",
    hoverDark: "#A8DAB5",
    activeLight: "#24863E",
    activeDark: "#6FB8B9",
    disabledLight: "#C6EBD2",
    disabledDark: "#2F4A3A",
    glowLight: "rgba(52, 168, 83, 0.35)",
    glowDark: "rgba(129, 201, 149, 0.4)",
    textLight: "#FFFFFF",
    textDark: "#111111"
  },
  warning: {
    light: "#E67700",
    dark: "#F6AD55",
    hoverLight: "#CC6A00",
    hoverDark: "#FBD38D",
    activeLight: "#B35900",
    activeDark: "#F1A340",
    disabledLight: "#FCD5A6",
    disabledDark: "#3A2B13",
    glowLight: "rgba(230, 119, 0, 0.35)",
    glowDark: "rgba(246, 173, 85, 0.4)",
    textLight: "#FFFFFF",
    textDark: "#111111"
  },
  error: {
    light: "#EA4335",
    dark: "#F28B82",
    hoverLight: "#D93025",
    hoverDark: "#F6AEA9",
    activeLight: "#B3261E",
    activeDark: "#E57373",
    disabledLight: "#FBC5C1",
    disabledDark: "#3A2F2F",
    glowLight: "rgba(224, 67, 53, 0.35)",
    glowDark: "rgba(242, 139, 130, 0.4)",
    textLight: "#FFFFFF",
    textDark: "#111111"
  },
  info: {
    light: "#4285F4",
    dark: "#8AB4F8",
    hoverLight: "#1A73E8",
    hoverDark: "#AECBFA",
    activeLight: "#0F5CC7",
    activeDark: "#7BAAF7",
    disabledLight: "#D6E3FD",
    disabledDark: "#2A3B5E",
    glowLight: "rgba(66, 133, 244, 0.35)",
    glowDark: "rgba(138, 180, 248, 0.4)",
    textLight: "#FFFFFF",
    textDark: "#111111"
  },
  // ─── Backgrounds ─────────────────────────────────────────────────────────────
  background: {
    /** Light: warm off-white (brand Cream) for an editorial, premium feel */
    light: "#F6F5F2",
    dark: "#0A0A0A",
    /** Light paper surfaces are pure white for contrast against Cream bg */
    paperLight: "#FFFFFF",
    paperDark: "#141414"
  },
  // ─── Text ────────────────────────────────────────────────────────────────────
  text: {
    primaryLight: "#111111",
    primaryDark: "#F6F5F2",
    secondaryLight: "#686868",
    secondaryDark: "#9AA0A6"
  },
  // ─── Dividers ────────────────────────────────────────────────────────────────
  divider: {
    light: "rgba(17, 17, 17, 0.1)",
    dark: "rgba(246, 245, 242, 0.1)"
  },
  // ─── Action States ───────────────────────────────────────────────────────────
  action: {
    hoverLight: "rgba(17, 17, 17, 0.04)",
    hoverDark: "rgba(255, 255, 255, 0.06)",
    /** Selected tint: charcoal-based in light, cream-based in dark */
    selectedLight: "rgba(17, 17, 17, 0.08)",
    selectedDark: "rgba(246, 245, 242, 0.12)"
  },
  white: "#FFFFFF",
  black: "#0A0A0A",
  // ─── Glass System (unchanged — glassmorphism architecture preserved) ──────────
  glass: {
    /** Palette-compatible color tokens for custom color="glass" */
    mainLight: "rgba(255, 255, 255, 0.72)",
    mainDark: "rgba(255, 255, 255, 0.12)",
    contrastTextLight: "#111111",
    contrastTextDark: "#F6F5F2",
    lightLight: "rgba(255, 255, 255, 0.88)",
    lightDark: "rgba(255, 255, 255, 0.18)",
    darkLight: "rgba(255, 255, 255, 0.55)",
    darkDark: "rgba(255, 255, 255, 0.08)",
    hoverLight: "rgba(255, 255, 255, 0.9)",
    hoverDark: "rgba(255, 255, 255, 0.2)",
    activeLight: "rgba(255, 255, 255, 0.78)",
    activeDark: "rgba(255, 255, 255, 0.09)",
    disabledLight: "rgba(255, 255, 255, 0.35)",
    disabledDark: "rgba(255, 255, 255, 0.04)",
    glowLight: "rgba(0, 0, 0, 0.08)",
    glowDark: "rgba(255, 255, 255, 0.25)",
    buttonBorderLight: "rgba(0, 0, 0, 0.18)",
    buttonBorderDark: "rgba(255, 255, 255, 0.2)",
    buttonBgLight: "rgba(0, 0, 0, 0.02)",
    buttonBgDark: "rgba(255, 255, 255, 0.04)",
    buttonHoverBgLight: "rgba(0, 0, 0, 0.05)",
    buttonHoverBgDark: "rgba(255, 255, 255, 0.08)",
    buttonTextHoverLight: "rgba(0, 0, 0, 0.04)",
    buttonTextHoverDark: "rgba(255, 255, 255, 0.06)",
    fabShadowLight: "0 8px 24px rgba(0,0,0,0.14)",
    fabShadowDark: "0 8px 24px rgba(0,0,0,0.6)",
    inputBorderHoverLight: "rgba(17, 17, 17, 0.35)",
    inputBorderHoverDark: "rgba(255, 255, 255, 0.3)",
    inputFocusBgDark: "rgba(255, 255, 255, 0.06)",
    paperBgLight: "rgba(255, 255, 255, 0.95)",
    paperBgDark: "rgba(20, 20, 20, 0.95)",
    paperBorderLight: "rgba(17, 17, 17, 0.08)",
    paperBorderDark: "rgba(255, 255, 255, 0.1)",
    paperShadowLight: "0 16px 40px rgba(0, 0, 0, 0.08)",
    paperShadowDark: "0 16px 40px rgba(0, 0, 0, 0.6)",
    controlLight: "rgba(17, 17, 17, 0.3)",
    controlDark: "rgba(255, 255, 255, 0.3)",
    switchTrackLight: "rgba(17, 17, 17, 0.15)",
    switchTrackDark: "rgba(255, 255, 255, 0.2)",
    switchShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    sliderThumbShadow: "0 2px 8px rgba(0,0,0,0.2)",
    sliderRailLight: "rgba(17, 17, 17, 0.1)",
    sliderRailDark: "rgba(255, 255, 255, 0.15)",
    chipBgLight: "rgba(17, 17, 17, 0.05)",
    chipBgDark: "rgba(255, 255, 255, 0.08)",
    chipBorderLight: "rgba(17, 17, 17, 0.08)",
    chipBorderDark: "rgba(255, 255, 255, 0.08)",
    avatarBorderLight: "rgba(17, 17, 17, 0.1)",
    avatarBorderDark: "rgba(255, 255, 255, 0.12)",
    tableBorderLight: "rgba(17, 17, 17, 0.07)",
    tableBorderDark: "rgba(255, 255, 255, 0.06)",
    tableHeadBgLight: "rgba(17, 17, 17, 0.025)",
    tableHeadBgDark: "rgba(255, 255, 255, 0.02)",
    tooltipBgLight: "rgba(17, 17, 17, 0.88)",
    tooltipBgDark: "rgba(246, 245, 242, 0.92)",
    tooltipBorderLight: "rgba(255, 255, 255, 0.1)",
    tooltipBorderDark: "rgba(0, 0, 0, 0.12)",
    tooltipShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    dialogBgLight: "rgba(255, 255, 255, 0.72)",
    dialogBgDark: "rgba(14, 14, 14, 0.72)",
    dialogShadowLight: "0 24px 64px rgba(0, 0, 0, 0.12)",
    dialogShadowDark: "0 24px 64px rgba(0, 0, 0, 0.8)",
    skeletonBgLight: "rgba(17, 17, 17, 0.06)",
    skeletonBgDark: "rgba(255, 255, 255, 0.06)",
    progressBgLight: "rgba(17, 17, 17, 0.08)",
    progressBgDark: "rgba(255, 255, 255, 0.1)",
    cardBgLight: "rgba(255, 255, 255, 0.85)",
    cardBgDark: "rgba(18, 18, 18, 0.78)",
    cardShadowLight: "0 12px 36px 0 rgba(0, 0, 0, 0.04)",
    cardShadowDark: "0 12px 36px 0 rgba(0, 0, 0, 0.55)",
    cardHoverShadowLight: "0 20px 48px 0 rgba(0, 0, 0, 0.1)",
    cardHoverShadowDark: "0 20px 48px 0 rgba(0, 0, 0, 0.72)",
    elevation1Light: "0 8px 24px rgba(0, 0, 0, 0.05)",
    elevation1Dark: "0 8px 24px rgba(0, 0, 0, 0.4)",
    appBarBgLight: "rgba(246, 245, 242, 0.82)",
    appBarBgDark: "rgba(10, 10, 10, 0.78)",
    accordionBgLight: "rgba(255, 255, 255, 0.6)",
    accordionBgDark: "rgba(18, 18, 18, 0.6)",
    drawerBgLight: "rgba(246, 245, 242, 0.97)",
    drawerBgDark: "rgba(10, 10, 10, 0.97)",
    menuItemHoverLight: "rgba(17, 17, 17, 0.04)",
    menuItemHoverDark: "rgba(255, 255, 255, 0.08)"
  },
  alertRgb: {
    success: "52, 168, 83",
    warningDark: "246, 173, 85",
    warningLight: "230, 119, 0",
    error: "234, 67, 53",
    info: "66, 133, 244"
  },
  // ─── Gradients ───────────────────────────────────────────────────────────────
  /** Monochrome sweep — Charcoal → Stone. Used only on accent/hero text. */
  gradients: {
    primary: "linear-gradient(135deg, #111111 0%, #686868 100%)",
    primaryHover: "linear-gradient(135deg, #000000 0%, #4A4A4A 100%)",
    /** Light-mode accent variant: Stone → Sand for a softer editorial sweep */
    accent: "linear-gradient(135deg, #686868 0%, #D9D9CF 100%)",
    /** Dark-mode accent: Cream → Stone */
    accentDark: "linear-gradient(135deg, #F6F5F2 0%, #686868 100%)"
  }
};

// src/theme/palette.ts
var buildPalette = (mode) => {
  const isDark = mode === "dark";
  return {
    primary: {
      main: isDark ? COLORS.primary.dark : COLORS.primary.light,
      hover: isDark ? COLORS.primary.hoverDark : COLORS.primary.hoverLight,
      active: isDark ? COLORS.primary.activeDark : COLORS.primary.activeLight,
      disabled: isDark ? COLORS.primary.disabledDark : COLORS.primary.disabledLight,
      glow: isDark ? COLORS.primary.glowDark : COLORS.primary.glowLight,
      contrastText: isDark ? COLORS.primary.textDark : COLORS.primary.textLight
    },
    secondary: {
      main: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
      hover: isDark ? COLORS.secondary.hoverDark : COLORS.secondary.hoverLight,
      active: isDark ? COLORS.secondary.activeDark : COLORS.secondary.activeLight,
      disabled: isDark ? COLORS.secondary.disabledDark : COLORS.secondary.disabledLight,
      glow: isDark ? COLORS.secondary.glowDark : COLORS.secondary.glowLight,
      contrastText: isDark ? COLORS.secondary.textDark : COLORS.secondary.textLight
    },
    success: {
      main: isDark ? COLORS.success.dark : COLORS.success.light,
      hover: isDark ? COLORS.success.hoverDark : COLORS.success.hoverLight,
      active: isDark ? COLORS.success.activeDark : COLORS.success.activeLight,
      disabled: isDark ? COLORS.success.disabledDark : COLORS.success.disabledLight,
      glow: isDark ? COLORS.success.glowDark : COLORS.success.glowLight,
      contrastText: isDark ? COLORS.success.textDark : COLORS.success.textLight
    },
    warning: {
      main: isDark ? COLORS.warning.dark : COLORS.warning.light,
      hover: isDark ? COLORS.warning.hoverDark : COLORS.warning.hoverLight,
      active: isDark ? COLORS.warning.activeDark : COLORS.warning.activeLight,
      disabled: isDark ? COLORS.warning.disabledDark : COLORS.warning.disabledLight,
      glow: isDark ? COLORS.warning.glowDark : COLORS.warning.glowLight,
      contrastText: isDark ? COLORS.warning.textDark : COLORS.warning.textLight
    },
    error: {
      main: isDark ? COLORS.error.dark : COLORS.error.light,
      hover: isDark ? COLORS.error.hoverDark : COLORS.error.hoverLight,
      active: isDark ? COLORS.error.activeDark : COLORS.error.activeLight,
      disabled: isDark ? COLORS.error.disabledDark : COLORS.error.disabledLight,
      glow: isDark ? COLORS.error.glowDark : COLORS.error.glowLight,
      contrastText: isDark ? COLORS.error.textDark : COLORS.error.textLight
    },
    info: {
      main: isDark ? COLORS.info.dark : COLORS.info.light,
      hover: isDark ? COLORS.info.hoverDark : COLORS.info.hoverLight,
      active: isDark ? COLORS.info.activeDark : COLORS.info.activeLight,
      disabled: isDark ? COLORS.info.disabledDark : COLORS.info.disabledLight,
      glow: isDark ? COLORS.info.glowDark : COLORS.info.glowLight,
      contrastText: isDark ? COLORS.info.textDark : COLORS.info.textLight
    },
    background: {
      default: isDark ? COLORS.background.dark : COLORS.background.light,
      paper: isDark ? COLORS.background.paperDark : COLORS.background.paperLight
    },
    text: {
      primary: isDark ? COLORS.text.primaryDark : COLORS.text.primaryLight,
      secondary: isDark ? COLORS.text.secondaryDark : COLORS.text.secondaryLight
    },
    divider: isDark ? COLORS.divider.dark : COLORS.divider.light,
    glass: {
      main: isDark ? COLORS.glass.mainDark : COLORS.glass.mainLight,
      contrastText: isDark ? COLORS.glass.contrastTextDark : COLORS.glass.contrastTextLight,
      light: isDark ? COLORS.glass.lightDark : COLORS.glass.lightLight,
      dark: isDark ? COLORS.glass.darkDark : COLORS.glass.darkLight,
      hover: isDark ? COLORS.glass.hoverDark : COLORS.glass.hoverLight,
      active: isDark ? COLORS.glass.activeDark : COLORS.glass.activeLight,
      disabled: isDark ? COLORS.glass.disabledDark : COLORS.glass.disabledLight,
      glow: isDark ? COLORS.glass.glowDark : COLORS.glass.glowLight,
      buttonBorder: isDark ? COLORS.glass.buttonBorderDark : COLORS.glass.buttonBorderLight,
      buttonBg: isDark ? COLORS.glass.buttonBgDark : COLORS.glass.buttonBgLight,
      buttonHoverBg: isDark ? COLORS.glass.buttonHoverBgDark : COLORS.glass.buttonHoverBgLight,
      buttonTextHover: isDark ? COLORS.glass.buttonTextHoverDark : COLORS.glass.buttonTextHoverLight,
      fabShadow: isDark ? COLORS.glass.fabShadowDark : COLORS.glass.fabShadowLight,
      inputBorderHover: isDark ? COLORS.glass.inputBorderHoverDark : COLORS.glass.inputBorderHoverLight,
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
      cardHoverShadow: isDark ? COLORS.glass.cardHoverShadowDark : COLORS.glass.cardHoverShadowLight,
      elevation1: isDark ? COLORS.glass.elevation1Dark : COLORS.glass.elevation1Light,
      appBarBg: isDark ? COLORS.glass.appBarBgDark : COLORS.glass.appBarBgLight,
      accordionBg: isDark ? COLORS.glass.accordionBgDark : COLORS.glass.accordionBgLight,
      drawerBg: isDark ? COLORS.glass.drawerBgDark : COLORS.glass.drawerBgLight,
      menuItemHover: isDark ? COLORS.glass.menuItemHoverDark : COLORS.glass.menuItemHoverLight
    },
    action: {
      hover: isDark ? COLORS.action.hoverDark : COLORS.action.hoverLight,
      selected: isDark ? COLORS.action.selectedDark : COLORS.action.selectedLight
    },
    alert: {
      success: COLORS.alertRgb.success,
      warning: isDark ? COLORS.alertRgb.warningDark : COLORS.alertRgb.warningLight,
      error: COLORS.alertRgb.error,
      info: COLORS.alertRgb.info
    },
    gradients: COLORS.gradients
  };
};

// src/theme/typography.ts
var typography = {
  fontFamily: [
    '"SF Pro Display"',
    '"SF Pro Text"',
    '"Google Sans Flex"',
    '"Google Sans"',
    '"Montserrat"',
    '"Space Grotesk"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "sans-serif"
  ].join(","),
  // Tight, editorial headings — luxury fashion house cadence
  h1: {
    fontSize: "3.75rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  h2: {
    fontSize: "2.85rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.08,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  h3: {
    fontSize: "2.1rem",
    fontWeight: 700,
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    letterSpacing: "-0.018em",
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    letterSpacing: "-0.012em",
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "-0.006em",
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  // Body text: regular weight, high legibility
  body1: {
    fontSize: "1.0625rem",
    lineHeight: 1.55,
    letterSpacing: "-0.008em",
    fontWeight: 400
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "-0.004em"
  },
  // Buttons: Montserrat caps feel premium but readable
  button: {
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: "0.01em",
    fontSize: "0.9375rem",
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif'
  },
  // Overline for tags / labels
  overline: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontFamily: '"Montserrat", "Space Grotesk", -apple-system, sans-serif'
  }
};
var JIVICO_FONTS_URL = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";

// src/theme/overrides/glassRecipe.ts
var glassRecipe = (isDark) => ({
  backdropFilter: "blur(48px) saturate(200%) brightness(105%)",
  WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(105%)",
  backgroundColor: isDark ? "rgba(20, 24, 32, 0.18)" : "rgba(255, 255, 255, 0.8)",
  backgroundImage: isDark ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(248,250,252,0.4) 100%)",
  border: isDark ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(255,255,255,0.6)",
  boxShadow: isDark ? "0 12px 36px rgba(0,0,0,0.45), inset 0 1px 1.5px rgba(255,255,255,0.18)" : "0 20px 50px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04), inset 0 1.5px 1.5px rgba(255,255,255,0.95)"
});
var glassAppBarRecipe = (isDark) => ({
  backgroundColor: isDark ? "rgba(18, 20, 26, 0.65) !important" : "rgba(246, 245, 242, 0.60) !important",
  backgroundImage: isDark ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important" : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 100%) !important",
  backdropFilter: "blur(24px) saturate(180%) !important",
  WebkitBackdropFilter: "blur(24px) saturate(180%) !important",
  borderTop: "none !important",
  borderLeft: "none !important",
  borderRight: "none !important",
  borderBottom: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"} !important`,
  boxShadow: isDark ? "0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3) !important" : "0 4px 20px -2px rgba(17, 17, 17, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02) !important",
  borderRadius: "0 !important"
});
var liquidGlassPopupRecipe = (isDark) => ({
  borderRadius: "18px !important",
  backgroundColor: isDark ? "rgba(18, 20, 26, 0.05) !important" : "rgba(255, 255, 255, 0.08) !important",
  backgroundImage: isDark ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important" : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important",
  backdropFilter: "blur(30px) saturate(190%) !important",
  WebkitBackdropFilter: "blur(30px) saturate(190%) !important",
  border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"} !important`,
  boxShadow: isDark ? "0 24px 50px rgba(0, 0, 0, 0.65), 0 6px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important" : "0 20px 48px -4px rgba(0, 0, 0, 0.10), 0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6) !important",
  padding: "6px !important",
  overflow: "hidden !important",
  transition: "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important",
  transformOrigin: "top center !important"
});
var LiquidDialogDrawerRecipe = (isDark) => ({
  backgroundColor: isDark ? "rgba(20, 20, 24, 0.37)" : "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(30px) saturate(180%) brightness(110%)",
  WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(110%)",
  backgroundImage: isDark ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(248, 250, 252, 0.4) 100%)",
  border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid rgba(255, 255, 255, 0.65)",
  boxShadow: isDark ? `
          0 -12px 40px rgba(0, 0, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.12)
        ` : `
          0 -12px 40px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.7)
        `,
  backgroundClip: "padding-box",
  overflow: "hidden"
});

// src/theme/overrides/inputs.ts
var getInputOverrides = (palette, isDark) => ({
  // ========================================================================
  // BUTTON
  // ========================================================================
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const variant = ownerState.variant || "text";
        const colorKey = ownerState.color && ownerState.color !== "inherit" ? ownerState.color : "primary";
        const activeColorGroup = palette[colorKey] || palette.primary;
        const mainColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover;
        const activeColor = activeColorGroup.active;
        const disabledColor = activeColorGroup.disabled;
        const glowColor = activeColorGroup.glow;
        const textColor = activeColorGroup.contrastText || COLORS.white;
        const isPrimary = colorKey === "primary";
        const isSecondary = colorKey === "secondary";
        const isGlass = colorKey === "glass";
        const isSemantic = !isPrimary && !isSecondary && !isGlass;
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 38,
          borderRadius: 9999,
          padding: "9px 22px",
          fontWeight: 600,
          fontSize: "0.875rem",
          lineHeight: 1.2,
          textTransform: "none",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          fontFamily: '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
          letterSpacing: "-0.01em",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:active": {
            transform: "translateY(0) scale(0.98)"
          },
          // ── Primary Contained — Luxury Monochrome ──────────────────────
          ...variant === "contained" && isPrimary && {
            backgroundColor: mainColor,
            color: textColor,
            boxShadow: isDark ? "0 6px 24px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)" : "0 6px 20px rgba(17,17,17,0.22), inset 0 1px 1px rgba(255,255,255,0.15)",
            "&:hover": {
              backgroundColor: hoverColor,
              transform: "translateY(-2px)",
              boxShadow: isDark ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)" : "0 12px 32px rgba(17,17,17,0.3)"
            },
            "&:active": {
              backgroundColor: activeColor,
              transform: "translateY(0) scale(0.98)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}, ${isDark ? "0 6px 24px rgba(0,0,0,0.55)" : "0 6px 20px rgba(17,17,17,0.22)"}`
            },
            "&.Mui-disabled": {
              backgroundColor: disabledColor,
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              boxShadow: "none",
              transform: "none"
            }
          },
          // ── Primary Outlined — Frosted Glass ───────────────────────────
          ...variant === "outlined" && isPrimary && {
            border: "none",
            background: isDark ? "rgba(255, 255, 255, 0.1)" : COLORS.brand.cream,
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: isDark ? "0 6px 20px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.15)" : "0 6px 20px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(17,17,17,0.08)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.15)" : COLORS.white,
              transform: "translateY(-2px)",
              boxShadow: isDark ? "0 12px 32px rgba(0,0,0,0.6), inset 0 0 0 1.5px rgba(255,255,255,0.25)" : "0 12px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(17,17,17,0.15)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? `0 0 0 3px ${glowColor}, 0 6px 24px rgba(0,0,0,0.55)` : `0 0 0 3px rgba(246,245,242,0.6), 0 6px 20px rgba(0,0,0,0.06)`
            },
            "&.Mui-disabled": {
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              transform: "none"
            }
          },
          // ── Secondary Contained — Soft Glass ───────────────────────────
          ...variant === "contained" && isSecondary && {
            background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)",
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            boxShadow: isDark ? "inset 0 0 0 1px rgba(255,255,255,0.05)" : "inset 0 0 0 1px rgba(17,17,17,0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
              transform: "translateY(-1.5px)",
              boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)" : "0 4px 14px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(17,17,17,0.1)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)"
            },
            "&.Mui-disabled": {
              background: isDark ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              transform: "none"
            }
          },
          // ── Secondary Outlined — Glass Border ──────────────────────────
          ...variant === "outlined" && isSecondary && {
            border: "none",
            background: "transparent",
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            boxShadow: isDark ? "inset 0 0 0 1.5px rgba(255,255,255,0.15)" : "inset 0 0 0 1.5px rgba(17,17,17,0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(17, 17, 17, 0.03)",
              transform: "translateY(-1.5px)",
              boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(255,255,255,0.25)" : "0 4px 14px rgba(0,0,0,0.04), inset 0 0 0 1.5px rgba(17,17,17,0.25)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)"
            },
            "&.Mui-disabled": {
              boxShadow: isDark ? "inset 0 0 0 1px rgba(255,255,255,0.1)" : "inset 0 0 0 1px rgba(17,17,17,0.1)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
              background: "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              transform: "none"
            }
          },
          // ── Glass Contained — Pure Frosted Glass ───────────────────────
          ...variant === "contained" && isGlass && {
            background: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.72)",
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.85)"}`,
            boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.22)" : "0 6px 22px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.92)",
              transform: "translateY(-2px)",
              boxShadow: isDark ? "0 14px 40px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "0 10px 28px rgba(0, 0, 0, 0.1), inset 0 1px 1px #FFFFFF"
            },
            "&:active": {
              background: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.78)",
              transform: "translateY(0) scale(0.98)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 3px rgba(255, 255, 255, 0.35), 0 8px 32px rgba(0, 0, 0, 0.45)" : "0 0 0 3px rgba(17, 17, 17, 0.2), 0 6px 22px rgba(0, 0, 0, 0.08)"
            },
            "&.Mui-disabled": {
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.3)",
              color: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.28)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)"}`,
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              transform: "none"
            }
          },
          // ── Glass Outlined — Frosted Border & Airy Glass ───────────────
          ...variant === "outlined" && isGlass && {
            background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.28)",
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            border: `1.5px solid ${isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(17, 17, 17, 0.16)"}`,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: isDark ? "0 4px 18px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.06)" : "0 4px 14px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.55)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
              transform: "translateY(-1.5px)",
              boxShadow: isDark ? "0 8px 24px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.12)" : "0 6px 20px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)"
            },
            "&:active": {
              background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)",
              transform: "translateY(0) scale(0.98)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 3px rgba(255, 255, 255, 0.3)" : "0 0 0 3px rgba(17, 17, 17, 0.2)"
            },
            "&.Mui-disabled": {
              borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
              color: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)",
              background: "transparent",
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              transform: "none"
            }
          },
          // ── Semantic Contained (Info, Warning, Error, Success) ─────────
          ...variant === "contained" && isSemantic && {
            backgroundColor: mainColor,
            color: textColor,
            boxShadow: "none",
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: hoverColor,
              boxShadow: `0 6px 20px ${glowColor}`,
              transform: "translateY(-1.5px)"
            },
            "&:active": {
              backgroundColor: activeColor
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`
            },
            "&.Mui-disabled": {
              backgroundColor: disabledColor,
              color: isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.4)",
              boxShadow: "none",
              transform: "none"
            }
          },
          // ── Semantic Outlined (Info, Warning, Error, Success) ──────────
          ...variant === "outlined" && isSemantic && {
            border: `1.5px solid ${mainColor}`,
            color: mainColor,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              borderColor: hoverColor,
              boxShadow: `0 4px 14px ${glowColor}`,
              transform: "translateY(-1.5px)"
            },
            "&:active": {
              borderColor: activeColor,
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`
            },
            "&.Mui-disabled": {
              borderColor: disabledColor,
              color: disabledColor,
              backgroundColor: "transparent",
              boxShadow: "none",
              transform: "none"
            }
          },
          // ── Glass Text — Soft Glass Pill on Hover ──────────────────────
          ...variant === "text" && isGlass && {
            background: "transparent",
            color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
            padding: "8px 18px",
            minHeight: 40,
            border: "1px solid transparent",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              background: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.7)"}`,
              boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.25)" : "0 4px 14px rgba(0, 0, 0, 0.04)",
              transform: "translateY(-1px)"
            },
            "&:active": {
              background: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.75)",
              transform: "translateY(0) scale(0.98)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 3px rgba(255, 255, 255, 0.3)" : "0 0 0 3px rgba(17, 17, 17, 0.2)"
            },
            "&.Mui-disabled": {
              color: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)",
              background: "transparent",
              border: "1px solid transparent",
              transform: "none"
            }
          },
          // ── Text Buttons (all other colors) ────────────────────────────
          ...variant === "text" && !isGlass && {
            color: isPrimary || isSecondary ? isDark ? COLORS.brand.cream : COLORS.brand.charcoal : mainColor,
            padding: "8px 16px",
            minHeight: 40,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              transform: "translateY(-1px)"
            },
            "&:active": {
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`
            },
            "&.Mui-disabled": {
              color: isPrimary || isSecondary ? isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)" : disabledColor,
              backgroundColor: "transparent",
              boxShadow: "none",
              transform: "none"
            }
          }
        };
      },
      sizeSmall: {
        minHeight: 30,
        padding: "5px 14px",
        fontSize: "0.78rem"
      },
      sizeMedium: {
        minHeight: 36,
        padding: "7px 18px",
        fontSize: "0.85rem"
      },
      sizeLarge: {
        minHeight: 44,
        padding: "11px 26px",
        fontSize: "0.9375rem"
      }
    }
  },
  // ========================================================================
  // BUTTON GROUP
  // ========================================================================
  MuiButtonGroup: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const isContained = ownerState.variant === "contained";
        const isOutlined = ownerState.variant === "outlined";
        return {
          boxShadow: "none",
          borderRadius: 9999,
          // Contained: clip children inside the pill shape
          ...isContained && {
            overflow: "hidden",
            "& .MuiButton-root": {
              borderRadius: 0,
              // No individual border — the group clip + bg handles shape
              border: "none !important"
            },
            "& .MuiButton-root + .MuiButton-root": {
              // Subtle divider between contained buttons
              borderLeft: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"} !important`
            }
          },
          // Outlined: group gets single border, NO overflow hidden (avoids clip artifacts)
          ...isOutlined && {
            overflow: "visible",
            border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.3)"}`,
            "& .MuiButton-root": {
              borderRadius: 0,
              border: "none !important",
              boxShadow: "none !important",
              background: "transparent",
              "&:hover": {
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.05)",
                boxShadow: "none !important",
                transform: "none"
              },
              "&:focus-visible": {
                outline: "none",
                boxShadow: "none !important"
              }
            },
            // Pill radius on the first and last button
            "& .MuiButton-root:first-of-type": {
              borderTopLeftRadius: "9999px !important",
              borderBottomLeftRadius: "9999px !important"
            },
            "& .MuiButton-root:last-of-type": {
              borderTopRightRadius: "9999px !important",
              borderBottomRightRadius: "9999px !important"
            },
            // Divider between outlined group buttons
            "& .MuiButton-root + .MuiButton-root": {
              borderLeft: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(17,17,17,0.2)"} !important`
            }
          }
        };
      }
    }
  },
  // ========================================================================
  // FAB
  // ========================================================================
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        boxShadow: palette.glass.fabShadow,
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-3px) scale(1.03)"
        },
        "&:active": {
          transform: "translateY(0) scale(0.97)"
        }
      }
    }
  },
  // ========================================================================
  // OUTLINED INPUT
  // ========================================================================
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = ownerState.color ? ownerState.color : "primary";
        const activeColorGroup = palette[colorKey] || palette.primary;
        const activeColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover || activeColor;
        activeColorGroup.glow;
        const isGlass = colorKey === "glass";
        const isSemantic = colorKey === "success" || colorKey === "warning" || colorKey === "error" || colorKey === "info";
        return {
          borderRadius: 12,
          backgroundColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.55)" : palette.glass.buttonBg,
          backdropFilter: isGlass ? "blur(20px) saturate(190%)" : "blur(8px)",
          WebkitBackdropFilter: isGlass ? "blur(20px) saturate(190%)" : "blur(8px)",
          boxShadow: isGlass ? isDark ? "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 14px rgba(0, 0, 0, 0.2)" : "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0, 0, 0, 0.04)" : "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.20)" : "rgba(17, 17, 17, 0.16)" : isSemantic ? activeColor : palette.divider,
            transition: "border-color 0.2s ease, box-shadow 0.2s ease"
          },
          "&:hover": {
            ...isGlass && {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.70)"
            }
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.32)" : isSemantic ? hoverColor : palette.glass.inputBorderHover
          },
          "&.Mui-focused": {
            backgroundColor: isGlass ? isDark ? "rgba(24, 26, 32, 0.65)" : "rgba(255, 255, 255, 0.90)" : palette.glass.inputFocusBg,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isGlass ? isDark ? "#F6F5F2" : "#111111" : activeColor,
              borderWidth: "1.5px"
            }
          },
          "&.Mui-error": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.error.main
            }
          }
        };
      },
      input: {
        fontSize: "0.9375rem",
        color: palette.text.primary
      },
      multiline: {
        padding: "13px 18px"
      }
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          fontSize: "0.85rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 36
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "6px 14px",
            fontSize: "0.85rem"
          },
          "&.MuiInputBase-multiline": {
            padding: "6px 14px",
            alignItems: "flex-start"
          }
        }
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: "0.9375rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 48
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "12px 18px",
            fontSize: "0.9375rem"
          },
          "&.MuiInputBase-multiline": {
            padding: "12px 18px",
            alignItems: "flex-start"
          }
        }
      },
      {
        props: { size: "large" },
        style: {
          fontSize: "1.1rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 56
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "16px 20px",
            fontSize: "1.1rem"
          },
          "&.MuiInputBase-multiline": {
            padding: "16px 20px",
            alignItems: "flex-start"
          }
        }
      }
    ]
  },
  // ========================================================================
  // INPUT LABEL
  // ========================================================================
  MuiInputLabel: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = ownerState.color ? ownerState.color : "primary";
        const activeColorGroup = palette[colorKey] || palette.primary;
        const activeColor = activeColorGroup.main;
        const isSemantic = colorKey === "success" || colorKey === "warning" || colorKey === "error" || colorKey === "info";
        let translate = "translate(18px, 13px) scale(1)";
        let shrinkTranslate = "translate(18px, -9px) scale(0.75)";
        if (ownerState.size === "small") {
          translate = "translate(14px, 8px) scale(1)";
          shrinkTranslate = "translate(14px, -9px) scale(0.75)";
        } else if (ownerState.size === "large") {
          translate = "translate(20px, 17px) scale(1)";
          shrinkTranslate = "translate(20px, -9px) scale(0.75)";
        }
        return {
          fontSize: "0.9375rem",
          color: isSemantic ? activeColor : palette.text.secondary,
          "&.Mui-focused": {
            color: activeColor
          },
          // Use explicit class targeting and !important to beat MUI's default specificity
          "&.MuiInputLabel-outlined": {
            transform: `${translate} !important`,
            "&.MuiInputLabel-shrink": {
              transform: `${shrinkTranslate} !important`
            }
          },
          ...ownerState.variant === "outlined" && {
            // Also ensure that the legend width accommodates the horizontal padding changes
            "& + .MuiOutlinedInput-root > fieldset > legend": {
              marginLeft: ownerState.size === "small" ? 0 : ownerState.size === "large" ? 6 : 4
            }
          }
        };
      }
    }
  },
  // ========================================================================
  // FORM HELPER TEXT
  // ========================================================================
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = ownerState?.color;
        const isSemantic = colorKey === "success" || colorKey === "warning" || colorKey === "error" || colorKey === "info";
        const semanticColor = isSemantic && palette[colorKey] ? palette[colorKey].main : palette.text.secondary;
        return {
          fontSize: "0.78rem",
          marginLeft: 14,
          marginTop: 4,
          color: semanticColor,
          "&.Mui-error": {
            color: palette.error.main
          }
        };
      }
    }
  },
  // ========================================================================
  // SELECT
  // ========================================================================
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          "& .MuiPaper-root": {
            ...liquidGlassPopupRecipe(isDark)
          },
          "& .MuiList-root": {
            backgroundColor: "transparent !important",
            backgroundImage: "none !important",
            padding: "0 !important"
          },
          "& .MuiMenuItem-root": {
            minHeight: "34px",
            padding: "6px 12px",
            fontSize: "0.875rem",
            borderRadius: "10px",
            color: palette.text.primary,
            transition: "all 0.15s ease",
            "&:hover": {
              backgroundColor: `${palette.glass.menuItemHover} !important`
            },
            "&.Mui-selected": {
              backgroundColor: `${palette.action.selected} !important`,
              color: `${palette.primary.main} !important`,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: `${palette.glass.menuItemHover} !important`
              }
            }
          }
        }
      }
    },
    styleOverrides: {
      icon: {
        color: palette.text.secondary,
        transition: "transform 0.2s ease, color 0.2s ease"
      }
    }
  },
  // ========================================================================
  // AUTOCOMPLETE
  // ========================================================================
  MuiAutocomplete: {
    defaultProps: {
      slotProps: {
        paper: {
          elevation: 0
        }
      }
    },
    styleOverrides: {
      popper: {
        zIndex: 1400
      },
      paper: {
        ...liquidGlassPopupRecipe(isDark)
      },
      listbox: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",
        padding: "4px !important"
      },
      option: {
        borderRadius: 10,
        padding: "7px 12px",
        margin: "1px 0",
        fontSize: "0.875rem",
        color: palette.text.primary,
        transition: "all 0.15s ease",
        '&[data-focus="true"]': {
          backgroundColor: `${palette.glass.menuItemHover} !important`
        },
        '&[aria-selected="true"]': {
          backgroundColor: `${palette.action.selected} !important`,
          color: `${palette.primary.main} !important`,
          fontWeight: 600,
          '&[data-focus="true"]': {
            backgroundColor: `${palette.action.selected} !important`
          }
        }
      },
      noOptions: {
        color: palette.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important"
      },
      loading: {
        color: palette.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important"
      },
      tag: {
        margin: "3px"
      },
      clearIndicator: {
        color: palette.text.secondary,
        "&:hover": {
          color: palette.text.primary
        }
      },
      popupIndicator: {
        color: palette.text.secondary,
        "&:hover": {
          color: palette.text.primary
        }
      }
    }
  }
});

// src/theme/overrides/controls.ts
var resolveControlColors = (colorName, isDark, palette, theme) => {
  if (colorName === "glass") {
    return {
      active: isDark ? "#F6F5F2" : "#111111",
      glow: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.08)",
      track: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.45)"
    };
  }
  if (colorName === "secondary") {
    return {
      active: isDark ? "#A0A09B" : COLORS.brand.stone,
      // #686868 Warm Stone
      glow: isDark ? "rgba(160, 160, 155, 0.3)" : "rgba(104, 104, 104, 0.25)",
      track: isDark ? "#8A8A82" : COLORS.brand.stone
      // #686868 Warm Stone
    };
  }
  if (colorName === "default") {
    return {
      active: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 17, 17, 0.65)",
      glow: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.08)",
      track: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(17, 17, 17, 0.45)"
    };
  }
  const pal = theme.palette[colorName];
  return {
    active: pal?.main || palette.primary.main,
    glow: pal?.glow || palette.primary.glow,
    track: pal?.main || palette.primary.main
  };
};
var getControlOverrides = (palette, isDark) => ({
  MuiCheckbox: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = ownerState.color || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(colorName, isDark, palette, theme);
        return {
          borderRadius: 8,
          color: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
          padding: 8,
          transition: "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          "&:hover": {
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)"
          },
          "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            color: resolved.active,
            ...isGlass && {
              filter: isDark ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))" : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))"
            }
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${resolved.glow}`
          },
          "&.Mui-disabled": {
            color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          }
        };
      }
    }
  },
  MuiRadio: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = ownerState.color || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(colorName, isDark, palette, theme);
        return {
          color: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
          padding: 8,
          transition: "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          "&:hover": {
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)"
          },
          "&.Mui-checked": {
            color: resolved.active,
            ...isGlass && {
              filter: isDark ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))" : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))"
            }
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${resolved.glow}`
          },
          "&.Mui-disabled": {
            color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          }
        };
      }
    }
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = ownerState.color || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(colorName, isDark, palette, theme);
        const thumbCheckedColor = isGlass ? "#FFFFFF" : colorName === "primary" ? isDark ? "#1D1D1F" : COLORS.white : COLORS.white;
        return {
          width: 44,
          height: 24,
          padding: 0,
          display: "flex",
          "& .MuiSwitch-switchBase": {
            padding: 3,
            color: isDark ? "#F6F5F2" : COLORS.white,
            transitionDuration: "200ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: thumbCheckedColor,
              "& + .MuiSwitch-track": {
                backgroundColor: resolved.track,
                opacity: 1,
                border: isGlass ? `1px solid ${isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.2)"}` : 0,
                ...isGlass && {
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                }
              },
              "&.Mui-disabled": {
                color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                "& + .MuiSwitch-track": {
                  opacity: 0.3
                }
              }
            },
            "&.Mui-disabled": {
              color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
              "& + .MuiSwitch-track": {
                opacity: 0.3
              }
            },
            "&:hover": {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)"
            }
          },
          "& .MuiSwitch-thumb": {
            width: 18,
            height: 18,
            borderRadius: 9,
            boxShadow: isDark ? "0 2px 6px rgba(0, 0, 0, 0.6)" : "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            ...isGlass && {
              border: isDark ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.8)"
            }
          },
          "& .MuiSwitch-track": {
            borderRadius: 24 / 2,
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.14)",
            opacity: 1,
            border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.06)",
            transition: "background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)"
          }
        };
      },
      sizeSmall: {
        width: 34,
        height: 18,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(16px)"
          }
        },
        "& .MuiSwitch-thumb": {
          width: 14,
          height: 14,
          borderRadius: 7
        },
        "& .MuiSwitch-track": {
          borderRadius: 18 / 2
        }
      }
    }
  },
  MuiSlider: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = ownerState.color || "primary";
        const resolved = resolveControlColors(colorName, isDark, palette, theme);
        return {
          color: resolved.active,
          height: 6,
          padding: "13px 0",
          "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: isDark ? "#1E2025" : "#FFFFFF",
            border: `2px solid ${resolved.active}`,
            boxShadow: isDark ? "0 2px 6px rgba(0, 0, 0, 0.5)" : "0 2px 6px rgba(0, 0, 0, 0.15)",
            transition: "box-shadow 0.15s ease",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 6px ${resolved.glow}`
            },
            "&.Mui-active": {
              boxShadow: `0px 0px 0px 9px ${resolved.glow}`
            },
            "&::before": {
              display: "none"
            }
          },
          "& .MuiSlider-track": {
            border: "none",
            height: 6,
            borderRadius: 3,
            backgroundColor: resolved.track
          },
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.12)",
            height: 6,
            borderRadius: 3
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: isDark ? "rgba(30, 32, 38, 0.9)" : "rgba(17, 17, 17, 0.9)",
            borderRadius: 6,
            fontSize: "0.75rem",
            fontWeight: 600,
            backdropFilter: "blur(8px)"
          }
        };
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        gap: "10px",
        userSelect: "none",
        "& .MuiFormControlLabel-label": {
          fontSize: "0.875rem",
          fontWeight: 500,
          color: palette.text.primary
        }
      }
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        padding: "6px 16px",
        border: `1px solid ${palette.glass.paperBorder}`,
        color: palette.text.secondary,
        transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        "&.Mui-selected": {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
          "&:hover": {
            backgroundColor: palette.secondary.hover
          }
        }
      }
    }
  }
});
var CloseDeleteIcon = (props) => React__default.default.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    style: { width: "1em", height: "1em", ...props.style }
  },
  React__default.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  React__default.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
);
var getDataDisplayOverrides = (palette, isDark) => {
  const chipColor = (colorKey) => {
    const semanticColors = {
      info: {
        main: "#4285F4",
        hover: isDark ? "#5A95F5" : "#3367D6",
        active: isDark ? "#3367D6" : "#2A56C6",
        disabled: isDark ? "rgba(66, 133, 244, 0.3)" : "rgba(66, 133, 244, 0.25)",
        glow: "rgba(66, 133, 244, 0.35)",
        text: "#FFFFFF"
      },
      warning: {
        main: "#E67700",
        hover: isDark ? "#EE881E" : "#C96800",
        active: isDark ? "#C96800" : "#A85700",
        disabled: isDark ? "rgba(230, 119, 0, 0.3)" : "rgba(230, 119, 0, 0.25)",
        glow: "rgba(230, 119, 0, 0.35)",
        text: "#FFFFFF"
      },
      error: {
        main: "#EA4335",
        hover: isDark ? "#ED594D" : "#C5221F",
        active: isDark ? "#C5221F" : "#A51D1A",
        disabled: isDark ? "rgba(234, 67, 53, 0.3)" : "rgba(234, 67, 53, 0.25)",
        glow: "rgba(234, 67, 53, 0.35)",
        text: "#FFFFFF"
      },
      success: {
        main: "#34A853",
        hover: isDark ? "#45B463" : "#278A42",
        active: isDark ? "#278A42" : "#1E7034",
        disabled: isDark ? "rgba(52, 168, 83, 0.3)" : "rgba(52, 168, 83, 0.25)",
        glow: "rgba(52, 168, 83, 0.35)",
        text: "#FFFFFF"
      }
    };
    if (semanticColors[colorKey]) {
      return semanticColors[colorKey];
    }
    if (colorKey === "glass") {
      return {
        main: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.68)",
        hover: isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.88)",
        active: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.75)",
        disabled: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.3)",
        glow: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.08)",
        text: isDark ? "#F6F5F2" : "#111111"
      };
    }
    const group = palette[colorKey] || palette.primary;
    return {
      main: group.main,
      hover: group.hover,
      active: group.active,
      disabled: group.disabled,
      glow: group.glow,
      text: group.contrastText || "#FFFFFF"
    };
  };
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: React__default.default.createElement(CloseDeleteIcon)
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            height: 32,
            fontSize: "0.82rem",
            padding: "0 12px",
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
              width: 10,
              height: 10,
              borderWidth: "2px",
              marginRight: "7px"
            },
            "& .MuiChip-avatar": {
              width: 24,
              height: 24,
              marginLeft: "-3px",
              marginRight: "6px",
              fontSize: "0.7rem"
            },
            "& .MuiChip-icon": {
              fontSize: "18px",
              marginLeft: "-2px",
              marginRight: "6px"
            },
            "& .MuiChip-deleteIcon": {
              fontSize: "17px",
              marginLeft: "6px",
              marginRight: "-1px"
            }
          }
        }
      ],
      styleOverrides: {
        root: ({ ownerState }) => {
          const color = ownerState.color ?? "default";
          const variant = ownerState.variant ?? "filled";
          const isGlass = color === "glass";
          const isPrimary = color === "primary";
          const isSecondary = color === "secondary";
          const isSemantic = !isPrimary && !isSecondary && !isGlass && color !== "default";
          const cc = chipColor(color === "default" ? "primary" : color);
          return {
            // ── Base ──────────────────────────────────────────────────────
            display: "inline-flex",
            alignItems: "center",
            borderRadius: 9999,
            height: 28,
            // Medium (default) — brand kit 28px
            fontWeight: 500,
            fontFamily: '"Montserrat", "Google Sans Flex", -apple-system, sans-serif',
            fontSize: "0.76rem",
            letterSpacing: "0.02em",
            lineHeight: 1,
            padding: "0 11px",
            cursor: "default",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            userSelect: "none",
            "& .MuiChip-label": {
              color: "inherit",
              display: "inline-flex",
              alignItems: "center",
              padding: 0
            },
            // ── Brand Kit Signature Circle Indicator Before Label ────────
            // Displayed on all chips unless a custom icon or avatar is provided
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
              content: '""',
              display: "inline-block",
              width: 8.5,
              height: 8.5,
              borderRadius: "50%",
              border: "1.75px solid currentColor",
              boxSizing: "border-box",
              marginRight: "6px",
              flexShrink: 0,
              opacity: 0.9
            },
            // Delete icon
            "& .MuiChip-deleteIcon": {
              fontSize: "15px",
              marginLeft: "5px",
              marginRight: "-2px",
              opacity: 0.75,
              transition: "opacity 0.15s ease, transform 0.15s ease",
              color: "inherit",
              cursor: "pointer",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.15)",
                color: "inherit"
              }
            },
            // Avatar inside chip
            "& .MuiChip-avatar": {
              width: 20,
              height: 20,
              marginLeft: "-3px",
              marginRight: "6px",
              fontSize: "0.65rem",
              fontWeight: 700
            },
            // Icon inside chip
            "& .MuiChip-icon": {
              fontSize: "16px",
              marginLeft: "-2px",
              marginRight: "6px",
              color: "inherit",
              opacity: 0.85
            },
            // ══════════════════════════════════════════════════════════════
            // FILLED VARIANT
            // ══════════════════════════════════════════════════════════════
            // ── Primary Filled — Solid Charcoal (Light) / Cream (Dark) ────
            ...variant === "filled" && isPrimary && {
              backgroundColor: isDark ? "#F6F5F2" : "#111111",
              color: isDark ? "#111111" : "#FFFFFF",
              border: "1px solid transparent",
              boxShadow: isDark ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)" : "0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "#E8E7E4" : "#2A2A2A",
                transform: "translateY(-1px)",
                boxShadow: isDark ? "0 6px 16px rgba(0,0,0,0.4)" : "0 6px 14px rgba(0,0,0,0.12)"
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: isDark ? "#D9D8D4" : "#1A1A1A",
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#EBEBEB",
                color: isDark ? "rgba(255,255,255,0.3)" : "#A0A0A0",
                boxShadow: "none",
                opacity: 1
              }
            },
            // ── Secondary Filled — Cream (Light) / Dark Stone (Dark) ──────
            ...variant === "filled" && isSecondary && {
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F6F5F2",
              color: isDark ? "#F6F5F2" : "#111111",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: isDark ? "0 2px 8px rgba(0,0,0,0.25)" : "0 2px 6px rgba(0,0,0,0.04)",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.16)" : "#EDECE8",
                transform: "translateY(-1px)"
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: isDark ? "rgba(255,255,255,0.22)" : "#D9D9CF",
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(246,245,242,0.6)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                boxShadow: "none",
                opacity: 1
              }
            },
            // ── Glass Filled — Pure Frosted Glass Chip ────────────────────
            ...variant === "filled" && isGlass && {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.68)",
              color: isDark ? "#F6F5F2" : "#111111",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.85)"}`,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: isDark ? "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)" : "0 3px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.88)",
                transform: "translateY(-1px)",
                boxShadow: isDark ? "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)" : "0 6px 18px rgba(0,0,0,0.08), inset 0 1px 0 #FFFFFF"
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.75)",
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.3)",
                color: isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)",
                border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)"}`,
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                opacity: 1
              }
            },
            // ── Semantic Filled (Info, Warning, Error, Success) ──────────
            ...variant === "filled" && isSemantic && {
              backgroundColor: cc.main,
              color: cc.text,
              border: "1px solid transparent",
              boxShadow: isDark ? `0 2px 8px rgba(0,0,0,0.3)` : `0 2px 6px ${cc.glow}`,
              "&.MuiChip-clickable:hover": {
                backgroundColor: cc.hover,
                transform: "translateY(-1px)",
                boxShadow: isDark ? `0 6px 16px rgba(0,0,0,0.4)` : `0 6px 14px ${cc.glow}`
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: cc.active,
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                backgroundColor: cc.disabled,
                color: isDark ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.5)",
                boxShadow: "none",
                opacity: 1
              }
            },
            // ── Default Filled — Neutral Glass ───────────────────────────
            ...variant === "filled" && color === "default" && {
              backgroundColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.05)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
              color: palette.text.primary,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: isDark ? "0 2px 8px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.04)",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.08)",
                transform: "translateY(-1px)"
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: isDark ? "rgba(255,255,255,0.16)" : "rgba(17,17,17,0.12)",
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                boxShadow: "none",
                opacity: 1
              }
            },
            // ══════════════════════════════════════════════════════════════
            // OUTLINED VARIANT
            // ══════════════════════════════════════════════════════════════
            // ── Primary Outlined ─────────────────────────────────────────
            ...variant === "outlined" && isPrimary && {
              backgroundColor: "transparent",
              border: `1.5px solid ${isDark ? "#F6F5F2" : "#111111"}`,
              color: isDark ? "#F6F5F2" : "#111111",
              boxShadow: "none",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(246,245,242,0.08)" : "rgba(17,17,17,0.06)",
                transform: "translateY(-1px)",
                boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.25)" : "0 4px 10px rgba(0,0,0,0.07)"
              },
              "&.Mui-disabled": {
                borderColor: isDark ? "rgba(246,245,242,0.2)" : "rgba(17,17,17,0.2)",
                color: isDark ? "rgba(246,245,242,0.3)" : "rgba(17,17,17,0.3)",
                opacity: 1
              }
            },
            // ── Secondary Outlined ───────────────────────────────────────
            ...variant === "outlined" && isSecondary && {
              backgroundColor: "transparent",
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.2)"}`,
              color: isDark ? "#F6F5F2" : "#111111",
              boxShadow: "none",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                transform: "translateY(-1px)"
              },
              "&.Mui-disabled": {
                borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                opacity: 1
              }
            },
            // ── Glass Outlined — Airy Translucent Border Chip ─────────────
            ...variant === "outlined" && isGlass && {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.28)",
              border: `1.5px solid ${isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(17, 17, 17, 0.16)"}`,
              color: isDark ? "#F6F5F2" : "#111111",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: isDark ? "0 2px 10px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.03)",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.55)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
                transform: "translateY(-1px)",
                boxShadow: isDark ? "0 6px 18px rgba(0,0,0,0.35)" : "0 4px 14px rgba(0,0,0,0.06)"
              },
              "&.MuiChip-clickable:active": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)",
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)",
                color: isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.25)",
                backgroundColor: "transparent",
                opacity: 1
              }
            },
            // ── Semantic Outlined (Info, Warning, Error, Success) ────────
            ...variant === "outlined" && isSemantic && {
              backgroundColor: "transparent",
              border: `1.5px solid ${cc.main}`,
              color: cc.main,
              boxShadow: "none",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"},0.12)` : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"},0.07)`,
                transform: "translateY(-1px)",
                boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.25)" : "0 4px 10px rgba(0,0,0,0.07)"
              },
              "&.Mui-disabled": {
                borderColor: cc.disabled,
                color: cc.disabled,
                opacity: 1
              }
            },
            // ── Default Outlined ─────────────────────────────────────────
            ...variant === "outlined" && color === "default" && {
              backgroundColor: "transparent",
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.25)"}`,
              color: palette.text.primary,
              boxShadow: "none",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                transform: "translateY(-1px)"
              },
              "&.Mui-disabled": {
                borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                opacity: 1
              }
            },
            // ══════════════════════════════════════════════════════════════
            // TONAL VARIANT (Soft background chip from Brand Kit)
            // ══════════════════════════════════════════════════════════════
            ...variant === "tonal" && {
              backgroundColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.45)" : isPrimary ? isDark ? "rgba(246, 245, 242, 0.12)" : "rgba(17, 17, 17, 0.07)" : isSecondary ? isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.05)" : isSemantic ? isDark ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.2)` : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.1)` : isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(17, 17, 17, 0.05)",
              color: isGlass || isPrimary || isSecondary ? isDark ? "#F6F5F2" : "#111111" : isSemantic ? cc.main : palette.text.primary,
              border: `1px solid ${isGlass ? isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.6)" : isDark ? isSemantic ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.25)` : "rgba(255,255,255,0.08)" : isSemantic ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.15)` : "rgba(17,17,17,0.08)"}`,
              ...isGlass && {
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)"
              },
              boxShadow: "none",
              "&.MuiChip-clickable:hover": {
                backgroundColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.7)" : isPrimary ? isDark ? "rgba(246, 245, 242, 0.18)" : "rgba(17, 17, 17, 0.12)" : isSecondary ? isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.09)" : isSemantic ? isDark ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.28)` : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.16)` : isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
                transform: "translateY(-1px)"
              },
              "&.MuiChip-clickable:active": {
                transform: "translateY(0) scale(0.98)"
              },
              "&.Mui-disabled": {
                opacity: 0.45
              }
            },
            // ── Size: Large (Brand Kit: 32px) ───────────────────────────
            ...ownerState.size === "large" && {
              height: 32,
              fontSize: "0.82rem",
              padding: "0 12px",
              "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
                width: 10,
                height: 10,
                borderWidth: "2px",
                marginRight: "7px"
              },
              "& .MuiChip-avatar": {
                width: 24,
                height: 24,
                marginLeft: "-3px",
                marginRight: "6px",
                fontSize: "0.7rem"
              },
              "& .MuiChip-icon": {
                fontSize: "18px",
                marginLeft: "-2px",
                marginRight: "6px"
              },
              "& .MuiChip-deleteIcon": {
                fontSize: "17px",
                marginLeft: "6px",
                marginRight: "-1px"
              }
            }
          };
        },
        // ── Size variants — Brand Kit: Small 24px, Medium 28px, Large 32px ──
        sizeSmall: {
          height: 24,
          fontSize: "0.68rem",
          padding: "0 8px",
          "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
            width: 7,
            height: 7,
            borderWidth: "1.5px",
            marginRight: "5px"
          },
          "& .MuiChip-avatar": {
            width: 16,
            height: 16,
            marginLeft: "-3px",
            marginRight: "4px",
            fontSize: "0.55rem"
          },
          "& .MuiChip-icon": {
            fontSize: "14px",
            marginLeft: "-1px",
            marginRight: "4px"
          },
          "& .MuiChip-deleteIcon": {
            fontSize: "14px",
            marginLeft: "4px",
            marginRight: "-1px"
          }
        },
        sizeMedium: {
          height: 28,
          fontSize: "0.76rem",
          padding: "0 11px",
          "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
            width: 8.5,
            height: 8.5,
            borderWidth: "1.75px",
            marginRight: "6px"
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const isGlass = ownerState.variant === "glass";
          const isRounded = ownerState.variant === "rounded";
          return {
            fontFamily: '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
            fontWeight: 700,
            fontSize: "0.9375rem",
            letterSpacing: "-0.01em",
            border: `1.5px solid ${isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.85)"}`,
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.65)",
            color: isDark ? "#F6F5F2" : "#111111",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.18)" : "0 4px 16px rgba(17, 17, 17, 0.06), inset 0 1px 1.5px rgba(255, 255, 255, 0.95)",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            ...isRounded && {
              borderRadius: "28%"
              // Apple continuous curve squircle
            },
            ...isGlass && {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.08) !important" : "rgba(255, 255, 255, 0.45) !important",
              backdropFilter: "blur(20px) saturate(190%) !important",
              WebkitBackdropFilter: "blur(20px) saturate(190%) !important",
              border: `1.5px solid ${isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.95)"} !important`
            },
            "& .MuiAvatar-img": {
              borderRadius: "inherit"
            }
          };
        }
      }
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            border: `2px solid ${isDark ? "rgba(20, 24, 32, 0.85)" : "rgba(255, 255, 255, 0.95)"}`,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: isDark ? "0 2px 8px rgba(0, 0, 0, 0.4)" : "0 2px 8px rgba(0, 0, 0, 0.06)",
            marginLeft: -8,
            "&:first-of-type": {
              marginLeft: 0
            }
          },
          "& .MuiAvatar-root:last-child": {
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
            color: palette.text.primary,
            fontWeight: 700,
            fontSize: "0.82rem"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.divider
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          overflow: "hidden"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.glass.tableBorder}`,
          padding: "14px 20px",
          color: palette.text.primary
        },
        head: {
          fontWeight: 600,
          color: palette.text.secondary,
          backgroundColor: palette.glass.tableHeadBg,
          textTransform: "uppercase",
          fontSize: "0.75rem",
          letterSpacing: "0.04em"
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: ({ ownerState }) => {
          const color = ownerState.color || "primary";
          const isGlass = color === "glass";
          const isDot = ownerState.variant === "dot";
          const colorGroup = palette[color] || palette.primary;
          if (isDot) {
            const dotColor = isGlass ? isDark ? "#F6F5F2" : "#111111" : colorGroup.main;
            return {
              height: 10,
              width: 10,
              minWidth: 10,
              borderRadius: "50%",
              backgroundColor: dotColor,
              border: `2px solid ${isDark ? "#12141A" : "#FFFFFF"}`,
              boxShadow: isGlass ? isDark ? "0 0 8px rgba(255, 255, 255, 0.5)" : "0 0 6px rgba(0, 0, 0, 0.3)" : `0 0 8px ${colorGroup.glow || colorGroup.main}`
            };
          }
          if (isGlass) {
            return {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.75)",
              color: isDark ? "#F6F5F2" : "#111111",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.9)"}`,
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              boxShadow: isDark ? "0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.25)" : "0 4px 12px rgba(17, 17, 17, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
              fontWeight: 700,
              fontSize: "0.72rem",
              height: 20,
              minWidth: 20,
              borderRadius: 10,
              padding: "0 6px"
            };
          }
          return {
            backgroundColor: colorGroup.main,
            color: colorGroup.contrastText || "#FFFFFF",
            border: `1.5px solid ${isDark ? "rgba(20, 24, 32, 0.9)" : "rgba(255, 255, 255, 0.95)"}`,
            boxShadow: `0 2px 8px ${colorGroup.glow || "rgba(0, 0, 0, 0.15)"}`,
            fontWeight: 700,
            fontSize: "0.72rem",
            height: 20,
            minWidth: 20,
            borderRadius: 10,
            padding: "0 6px"
          };
        }
      }
    }
  };
};

// src/theme/overrides/feedback.ts
var getFeedbackOverrides = (palette, isDark) => ({
  MuiAlert: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const severity = ownerState.severity || "info";
        const alertColor = palette[severity === "warning" ? "warning" : severity === "error" ? "error" : severity === "success" ? "success" : "info"] || palette.info;
        const bgOpacity = isDark ? 0.12 : 0.08;
        return {
          borderRadius: 18,
          backdropFilter: "blur(16px)",
          fontWeight: 500,
          fontSize: "0.9375rem",
          border: "1px solid",
          backgroundColor: isDark ? `rgba(${severity === "success" ? COLORS.alertRgb.success : severity === "warning" ? COLORS.alertRgb.warningDark : severity === "error" ? COLORS.alertRgb.error : COLORS.alertRgb.info}, ${bgOpacity})` : `rgba(${severity === "success" ? COLORS.alertRgb.success : severity === "warning" ? COLORS.alertRgb.warningLight : severity === "error" ? COLORS.alertRgb.error : COLORS.alertRgb.info}, ${bgOpacity})`,
          borderColor: alertColor.main,
          color: alertColor.main
        };
      }
    }
  },
  MuiModal: {
    styleOverrides: {
      root: {
        "&.MuiModal-root": {
          overflow: "hidden"
        }
      }
    }
  },
  MuiDialog: {
    defaultProps: {
      disableScrollLock: false
    },
    styleOverrides: {
      paper: {
        ...LiquidDialogDrawerRecipe(isDark)
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily: '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
        fontWeight: 700,
        fontSize: "1.25rem",
        letterSpacing: "-0.02em",
        padding: "16px 20px 8px"
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "12px 20px",
        color: palette.text.secondary
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "12px 20px 16px",
        gap: "10px"
      }
    }
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        backgroundColor: palette.glass.skeletonBg
      }
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        height: 6,
        backgroundColor: palette.glass.progressBg
      },
      bar: {
        borderRadius: 9999
      }
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palette.glass.tooltipBg,
        backdropFilter: "saturate(180%) blur(32px)",
        WebkitBackdropFilter: "saturate(180%) blur(32px)",
        border: `1px solid ${palette.glass.tooltipBorder}`,
        boxShadow: palette.glass.tooltipShadow,
        color: isDark ? "#1D1D1F" : "#F5F5F7",
        borderRadius: 12,
        padding: "8px 12px",
        fontSize: "0.8125rem",
        fontWeight: 600
      },
      arrow: {
        color: palette.glass.tooltipBg,
        "&::before": {
          border: `1px solid ${palette.glass.tooltipBorder}`,
          backgroundColor: palette.glass.tooltipBg,
          boxSizing: "border-box"
        }
      }
    }
  }
});

// src/theme/overrides/surfaces.ts
var getSurfaceOverrides = (palette, isDark) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        background: `linear-gradient(135deg, ${palette.glass.cardBg} 0%, ${isDark ? "rgba(22, 22, 22, 0.25)" : "rgba(255, 255, 255, 0.45)"} 100%)`,
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: `${palette.glass.cardShadow}, inset 0 1px 1px 0 ${isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.75)"}`,
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.01)",
          // Luxury hover: deep neutral shadow — no colour glow, just depth
          boxShadow: isDark ? "0 28px 60px rgba(0, 0, 0, 0.72), 0 2px 0px rgba(255, 255, 255, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.1)" : "0 28px 60px rgba(0, 0, 0, 0.12), 0 2px 0 rgba(255, 255, 255, 1), inset 0 1px 2px rgba(255, 255, 255, 1)",
          borderColor: isDark ? "rgba(246, 245, 242, 0.14)" : "rgba(17, 17, 17, 0.16)",
          "&::after": {
            left: "160%",
            transition: "all 0.8s ease"
          },
          "& .product-img": {
            transform: "scale(1.08)"
          },
          "& .quick-actions": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundImage: "none",
        "&.MuiPopover-paper, &.MuiMenu-paper, &.MuiAutocomplete-paper": {
          ...liquidGlassPopupRecipe(isDark)
        }
      },
      elevation1: {
        boxShadow: palette.glass.elevation1
      }
    },
    variants: [
      {
        props: { variant: "glassFooter" },
        style: {
          backgroundColor: palette.glass.appBarBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: `1px solid ${palette.glass.chipBorder}`,
          borderRadius: 0,
          paddingTop: "64px",
          paddingBottom: "32px",
          marginTop: "auto",
          color: palette.text.primary
        }
      }
    ]
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        backgroundColor: palette.glass.accordionBg,
        backdropFilter: "blur(12px)",
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: "none",
        "&:before": { display: "none" },
        "&.Mui-expanded": {
          margin: "12px 0"
        }
      }
    }
  }
});

// src/theme/overrides/navigation.ts
var getNavigationOverrides = (palette, isDark) => ({
  // ========================================================================
  // APP BAR — luxury glassmorphism (recipe shared via glassRecipe.ts)
  // ========================================================================
  MuiAppBar: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        ...glassAppBarRecipe(isDark),
        color: palette.text.primary,
        transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease"
      },
      colorTransparent: {
        ...glassAppBarRecipe(isDark)
      },
      colorDefault: {
        ...glassAppBarRecipe(isDark)
      },
      colorInherit: {
        ...glassAppBarRecipe(isDark)
      }
    }
  },
  // ========================================================================
  // TOOLBAR
  // ========================================================================
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "56px !important",
        paddingLeft: "24px !important",
        paddingRight: "24px !important"
      }
    }
  },
  MuiTabs: {
    defaultProps: {
      textColor: "primary",
      indicatorColor: "primary"
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        minHeight: 44,
        height: "auto",
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "#ECEAE5",
        // Brand Kit Sand #D9D9CF warm tinted track
        borderRadius: 9999,
        // Brand Kit fully rounded pill track
        padding: "4px",
        border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.04)"}`,
        display: ownerState.variant === "fullWidth" ? "flex" : "inline-flex",
        width: ownerState.variant === "fullWidth" ? "100%" : "fit-content",
        boxShadow: isDark ? "inset 0 1px 3px rgba(0,0,0,0.35)" : "inset 0 1px 2px rgba(0,0,0,0.04)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxSizing: "border-box",
        position: "relative",
        isolation: "isolate",
        overflow: "visible",
        "& .MuiTabs-scroller": {
          position: "relative",
          borderRadius: 9999,
          overflow: "visible !important",
          height: "100%"
        },
        "& .MuiTabs-flexContainer": {
          position: "relative",
          zIndex: 2,
          gap: 0,
          height: "100%",
          alignItems: "center"
        }
      }),
      indicator: ({ ownerState }) => {
        const isGlass = ownerState.indicatorColor === "glass";
        return {
          height: "100%",
          top: 0,
          bottom: 0,
          borderRadius: 9999,
          // Brand Kit fully rounded floating pill
          backgroundColor: isGlass ? isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.75)" : isDark ? "#F6F5F2" : "#FFFFFF",
          border: isGlass ? `1px solid ${isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.9)"}` : isDark ? "none" : "1px solid rgba(0, 0, 0, 0.03)",
          boxShadow: isGlass ? isDark ? "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)" : "0 3px 12px rgba(0,0,0,0.06), inset 0 1px 0 #FFFFFF" : isDark ? "0 4px 16px rgba(0, 0, 0, 0.45)" : "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
          // Exact drop shadow sampled from Brand Kit image
          ...isGlass && {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          },
          zIndex: 1,
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
        };
      }
    }
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const isGlass = ownerState.textColor === "secondary";
        return {
          position: "relative",
          zIndex: 2,
          textTransform: "none",
          fontFamily: '"Montserrat", "Google Sans Flex", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: "0.84rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.2,
          minHeight: 36,
          height: 36,
          minWidth: 80,
          borderRadius: 9999,
          padding: "8px 22px",
          color: isDark ? "rgba(255, 255, 255, 0.62)" : "#686868",
          // Brand Stone #686868
          transition: "color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          userSelect: "none",
          "&:hover": {
            color: isDark ? "#F6F5F2" : "#111111",
            backgroundColor: "transparent"
          },
          "&:active": {
            transform: "scale(0.98)"
          },
          "&.Mui-selected": {
            fontWeight: 600,
            color: isDark ? isGlass ? "#F6F5F2" : "#111111" : "#111111",
            // High contrast Charcoal #111111 on Cream / White floating pill!
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent"
            }
          },
          "&.Mui-disabled": {
            color: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(104, 104, 104, 0.35)",
            opacity: 0.6
          }
        };
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        ...LiquidDialogDrawerRecipe(isDark),
        ...ownerState.anchor === "bottom" && {
          borderBottom: "none",
          borderLeft: "none",
          borderRight: "none",
          borderTopLeftRadius: "28px !important",
          borderTopRightRadius: "28px !important",
          borderBottomLeftRadius: "0 !important",
          borderBottomRightRadius: "0 !important"
        },
        ...ownerState.anchor === "top" && {
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderTopLeftRadius: "0 !important",
          borderTopRightRadius: "0 !important",
          borderBottomLeftRadius: "28px !important",
          borderBottomRightRadius: "28px !important"
        },
        ...ownerState.anchor === "left" && {
          borderLeft: "none",
          borderTop: "none",
          borderBottom: "none",
          borderTopLeftRadius: "0 !important",
          borderBottomLeftRadius: "0 !important",
          borderTopRightRadius: "10px !important",
          borderBottomRightRadius: "10px !important"
        },
        ...ownerState.anchor === "right" && {
          borderRight: "none",
          borderTop: "none",
          borderBottom: "none",
          borderTopRightRadius: "0 !important",
          borderBottomRightRadius: "0 !important",
          borderTopLeftRadius: "10px !important",
          borderBottomLeftRadius: "10px !important"
        }
      })
    }
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark)
      }
    }
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark),
        maxHeight: "400px",
        overflowY: "auto"
      },
      list: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important"
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "6px 12px",
        minHeight: "32px",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "all 0.15s ease",
        "&:hover": {
          backgroundColor: palette.glass.menuItemHover
        },
        "&.Mui-selected": {
          backgroundColor: palette.action.selected,
          color: palette.primary.main
        }
      }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: "4px"
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "2px 4px"
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "6px 10px",
        minHeight: "36px",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)"
        }
      }
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 34,
        color: palette.text.secondary
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: 0
      },
      primary: {
        fontSize: "0.875rem",
        fontWeight: 500
      },
      secondary: {
        fontSize: "0.75rem"
      }
    }
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        "&.Mui-selected": {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
          "&:hover": {
            backgroundColor: palette.secondary.hover
          }
        }
      }
    }
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        padding: "24px 0"
      }
    }
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.12)",
        borderTopWidth: 2,
        borderRadius: 1
      }
    }
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.1)",
        "&.Mui-active": {
          color: palette.text.primary,
          filter: isDark ? `drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))` : `drop-shadow(0 0 6px rgba(17, 17, 17, 0.15))`
        },
        "&.Mui-completed": {
          color: palette.text.primary
        }
      },
      text: {
        fill: isDark ? "#111" : "#FFF",
        fontWeight: 700
      }
    }
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: palette.text.secondary,
        "&.Mui-active": {
          color: palette.text.primary,
          fontWeight: 600
        },
        "&.Mui-completed": {
          color: palette.text.primary,
          fontWeight: 500
        }
      }
    }
  }
});

// src/theme/theme.ts
var GOOGLE_SANS_FLEX_URL = "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";
var JIVICO_BRAND_FONTS_URL = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";
var themeCache = {};
function buildTheme(mode) {
  const isDark = mode === "dark";
  const palette = buildPalette(mode);
  const theme = styles.createTheme({
    palette: {
      mode,
      primary: palette.primary,
      secondary: palette.secondary,
      success: palette.success,
      warning: palette.warning,
      error: palette.error,
      info: palette.info,
      background: palette.background,
      text: palette.text,
      divider: palette.divider,
      action: palette.action,
      glass: palette.glass
    },
    typography,
    shape: {
      borderRadius: 20
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            backgroundColor: palette.background.default,
            color: palette.text.primary,
            transition: "background-color 0.2s ease, color 0.2s ease",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
          },
          // Firefox scrollbars
          "@supports not (-webkit-touch-callout: none)": {
            "*": {
              scrollbarWidth: "thin",
              scrollbarColor: isDark ? "rgba(255, 255, 255, 0.2) transparent" : "rgba(0, 0, 0, 0.2) transparent"
            }
          },
          // Chromium browsers (Chrome, Edge, Brave, Opera) - Preserves native macOS overlay scrollbars in Safari
          "@supports (selector(::-webkit-scrollbar)) and (not (-webkit-hyphens: none))": {
            "::-webkit-scrollbar": {
              width: "6px",
              height: "6px"
            },
            "::-webkit-scrollbar-track": {
              background: "transparent"
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
              borderRadius: "9999px",
              border: "1px solid transparent",
              backgroundClip: "padding-box"
            },
            "::-webkit-scrollbar-thumb:hover": {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)"
            },
            "::-webkit-scrollbar-corner": {
              background: "transparent"
            }
          }
        }
      },
      ...getInputOverrides(palette, isDark),
      ...getControlOverrides(palette, isDark),
      ...getDataDisplayOverrides(palette, isDark),
      ...getFeedbackOverrides(palette, isDark),
      ...getSurfaceOverrides(palette, isDark),
      ...getNavigationOverrides(palette, isDark)
    }
  });
  return styles.responsiveFontSizes(theme);
}
var getHybridTheme = (mode) => {
  if (!themeCache[mode]) {
    themeCache[mode] = buildTheme(mode);
  }
  return themeCache[mode];
};
var getAppleTheme = getHybridTheme;
var getAntigravityTheme = getHybridTheme;
var createJivicoTheme = getHybridTheme;
getHybridTheme("light");
var GlassPanel = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    backgroundColor: isDark ? "rgba(28, 31, 38, 0.65)" : "rgba(255, 255, 255, 0.24)",
    backgroundImage: isDark ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(248, 250, 252, 0.4) 100%)",
    backdropFilter: "blur(48px) saturate(180%)",
    WebkitBackdropFilter: "blur(48px) saturate(180%)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.6)"}`,
    boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)" : `
      0 20px 50px rgba(15, 23, 42, 0.08),
      0 8px 20px rgba(15, 23, 42, 0.06),
      0 2px 6px rgba(15, 23, 42, 0.04),
      inset 0 1px 1px rgba(255, 255, 255, 0.95)
    `,
    borderRadius: 24
  };
});
var GlassBox = material.styled(material.Box, {
  shouldForwardProp: (prop) => prop !== "isDark" && prop !== "radius"
})(({ theme, isDark: explicitDark, radius = 20 }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const recipe = glassRecipe(isDark);
  return {
    ...recipe,
    borderRadius: radius,
    boxSizing: "border-box"
  };
});
var GlassContainer = GlassBox;
var PageRoot = material.styled(material.Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  overflowX: "clip",
  backgroundColor: theme.palette.background.default
}));
var SectionContainer = material.styled(material.Container, {
  shouldForwardProp: (p) => p !== "largeBottom" && p !== "smallBottom"
})(({ largeBottom, smallBottom }) => ({
  position: "relative",
  zIndex: 1,
  marginBottom: largeBottom ? 96 : smallBottom ? 64 : 80
}));
var Section = SectionContainer;
var GlassToolbarRoot = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark" && p !== "isScrolled"
})(({ theme, isDark, isScrolled }) => ({
  position: "fixed",
  top: "calc(72px + env(safe-area-inset-top, 0px))",
  zIndex: 1e3,
  width: "100%",
  padding: isScrolled ? theme.spacing(0.8, 0) : theme.spacing(1.5, 0),
  borderBottom: `1px solid ${isScrolled ? isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)" : "transparent"}`,
  background: isDark ? "rgba(10,10,12,0.85)" : "rgba(255,255,255,0.88)",
  backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
  WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
  transform: "translateZ(0)",
  WebkitTransform: "translateZ(0)",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  boxShadow: isScrolled ? isDark ? "0 10px 30px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.06)" : "none",
  transition: [
    "padding 450ms cubic-bezier(0.16, 1, 0.3, 1)",
    "background-color 350ms ease",
    "border-color 350ms ease",
    "box-shadow 450ms cubic-bezier(0.16, 1, 0.3, 1)",
    "backdrop-filter 450ms ease"
  ].join(", "),
  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: 0
  }
}));
var GlassNavArrowButton = material.styled(material.IconButton, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: 34,
  height: 34,
  backgroundColor: isDark ? "rgba(20,20,24,0.75)" : "rgba(255,255,255,0.85)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
  color: isDark ? "#FFFFFF" : "#111827",
  boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.4)" : "0 4px 14px rgba(0,0,0,0.08)",
  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  "&:hover": {
    backgroundColor: isDark ? "rgba(35,35,42,0.95)" : "#FFFFFF",
    transform: "translateY(-50%) scale(1.1)",
    boxShadow: isDark ? "0 6px 20px rgba(236,72,153,0.3)" : "0 6px 20px rgba(236,72,153,0.2)"
  },
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));
var GlassEdgeFade = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "side" && p !== "direction" && p !== "isDark" && p !== "visible" && p !== "bottomOffset"
})(({ theme, side, direction, isDark, visible = true, bottomOffset = 0 }) => {
  const align = side ?? direction ?? "left";
  const bg = align === "left" ? isDark ? "linear-gradient(to right, rgba(11, 11, 15, 0.9) 0%, transparent 100%)" : "linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, transparent 100%)" : isDark ? "linear-gradient(to left, rgba(11, 11, 15, 0.9) 0%, transparent 100%)" : "linear-gradient(to left, rgba(255, 255, 255, 0.9) 0%, transparent 100%)";
  return {
    position: "absolute",
    top: 0,
    bottom: bottomOffset,
    [align]: 0,
    width: 44,
    pointerEvents: "none",
    zIndex: 5,
    background: bg,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.25s ease",
    [theme.breakpoints.up("md")]: {
      width: 56
    }
  };
});
var EdgeFade = GlassEdgeFade;
var GlassSectionHeaderRow = material.styled(material.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(2)
  }
}));
var GlassTitleGroup = material.styled(material.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "auto"
  }
}));
var GlassIconGlow = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "gradient"
})(({ gradient = "amber" }) => {
  const bg = {
    amber: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)",
    pink: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    cyan: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
    purple: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    emerald: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)"
  }[gradient];
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 14,
    background: bg,
    color: "#FFFFFF",
    boxShadow: "0 4px 16px rgba(236, 72, 153, 0.35)"
  };
});
var GlassSectionTitle = material.styled(material.Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: 900,
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem"
  }
}));
var GlassSectionSubtitle = material.styled(material.Typography, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ isDark }) => ({
  fontSize: "0.875rem",
  color: isDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
}));
var GlassControlsGroup = material.styled(material.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var GlassScrollButton = material.styled(material.IconButton, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ isDark }) => ({
  backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)",
  border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)"}`,
  color: isDark ? "#FFFFFF" : "#111827",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)",
    transform: "scale(1.06)"
  }
}));
var ThemeContext = React.createContext({
  mode: "light",
  toggleTheme: () => {
  },
  setMode: () => {
  }
});
var useThemeMode = () => React.useContext(ThemeContext);
function ThemeModeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode"
}) {
  const [mode, setModeState] = React.useState(defaultMode);
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "light" || saved === "dark") {
        setModeState(saved);
      } else if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setModeState("dark");
      }
    } catch {
    }
  }, [storageKey]);
  const toggleTheme = () => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem(storageKey, next);
      } catch {
      }
      return next;
    });
  };
  const setMode = (newMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(storageKey, newMode);
    } catch {
    }
  };
  const value = React.useMemo(
    () => ({
      mode,
      toggleTheme,
      setMode
    }),
    [mode]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value, children });
}
var SectionHeader = ({
  title,
  subtitle,
  icon,
  iconGradient = "pink",
  desktopAction,
  controls
}) => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    GlassSectionHeaderRow,
    {
      sx: {
        flexDirection: "row !important",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        gap: { xs: 1.5, sm: 2 }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(GlassTitleGroup, { sx: { flex: 1, minWidth: 0 }, children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(GlassIconGlow, { gradient: iconGradient, sx: { flexShrink: 0 }, children: icon }),
          /* @__PURE__ */ jsxRuntime.jsxs(material.Box, { sx: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              GlassSectionTitle,
              {
                variant: "h3",
                sx: {
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: title
              }
            ),
            subtitle && /* @__PURE__ */ jsxRuntime.jsx(
              GlassSectionSubtitle,
              {
                isDark,
                sx: {
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                },
                children: subtitle
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          material.Box,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              flexShrink: 0,
              width: "auto"
            },
            children: [
              controls,
              desktopAction && /* @__PURE__ */ jsxRuntime.jsx(material.Box, { sx: { display: { xs: "none", md: "block" } }, children: /* @__PURE__ */ jsxRuntime.jsxs(
                material.Button,
                {
                  variant: "contained",
                  color: "primary",
                  component: desktopAction.href ? "a" : "button",
                  href: desktopAction.href,
                  onClick: desktopAction.onClick,
                  sx: { px: 3, py: 1, textDecoration: "none" },
                  children: [
                    desktopAction.label,
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { size: 16, style: { marginLeft: 8 } })
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};
var HeaderAppBar = material.styled(material.AppBar, {
  shouldForwardProp: (prop) => prop !== "isScrolled"
})(({ theme, isScrolled }) => {
  const isDark = theme.palette.mode === "dark";
  return {
    position: "sticky",
    top: 0,
    paddingTop: "env(safe-area-inset-top, 0px)",
    backgroundColor: isScrolled ? isDark ? "rgba(10, 10, 12, 0.85)" : "rgba(255, 255, 255, 0.88)" : "transparent",
    backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
    WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
    borderBottom: isScrolled ? `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"}` : "1px solid transparent",
    backgroundImage: !isScrolled ? isDark ? "linear-gradient(180deg, rgba(10, 10, 12, 0.85) 0%, rgba(10, 10, 12, 0) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 100%)" : "none",
    zIndex: 1100,
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    [theme.breakpoints.down("md")]: {
      position: "relative"
    }
  };
});
var HeroSection = material.styled(material.Box)({
  position: "relative",
  zIndex: 1,
  paddingTop: 48,
  paddingBottom: 128,
  "@media (max-width:899.95px)": {
    paddingTop: 32,
    paddingBottom: 80
  }
});
var HeroTitle = material.styled(material.Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  letterSpacing: "-0.03em",
  fontSize: "4.2rem",
  lineHeight: 1.08,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem"
  }
}));
var HeroDescription = material.styled(material.Typography)(({ theme }) => ({
  opacity: 0.7,
  marginBottom: theme.spacing(5),
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.6,
  fontSize: "1.05rem"
}));
var HeroActions = material.styled(material.Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0),
    justifyContent: "space-between"
  }
}));
var HeroStatsPanel = material.styled(GlassPanel)(({ theme }) => ({
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
  padding: 24,
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    bottom: 14,
    left: 14,
    right: 14,
    padding: "14px 16px",
    borderRadius: 20
  }
}));
var StatValue = material.styled(material.Typography)({
  fontWeight: 800
});
var StatLabel = material.styled(material.Typography)({
  opacity: 0.6
});
var HeroImageFrame = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "4/3",
  borderRadius: "32px",
  overflow: "hidden",
  boxShadow: isDark ? "0 24px 80px rgba(0,0,0,0.5)" : "0 24px 80px rgba(0,0,0,0.08)",
  [theme.breakpoints.down("md")]: {
    aspectRatio: "4/5",
    minHeight: 450,
    borderRadius: "26px"
  },
  [theme.breakpoints.down("sm")]: {
    aspectRatio: "3/4",
    minHeight: 480,
    borderRadius: "22px"
  }
}));
var CoverImage = material.styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
});
var floatAmbient = styles.keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -25px) scale(1.08); }
  100% { transform: translate(-20px, 35px) scale(0.95); }
`;
var AmbientBlob = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "variant" && p !== "isDark"
})(({ isDark, variant }) => {
  const configs = {
    // Charcoal/Cream (brand primary)
    primary: {
      top: "5%",
      left: "10%",
      width: "45vw",
      height: "45vw",
      color: isDark ? "rgba(246, 245, 242, 0.09)" : "rgba(17, 17, 17, 0.055)",
      duration: "18s"
    },
    // Stone (brand secondary tone)
    secondary: {
      top: "35%",
      right: "5%",
      width: "40vw",
      height: "40vw",
      color: isDark ? "rgba(217, 217, 207, 0.1)" : "rgba(104, 104, 104, 0.06)",
      duration: "22s"
    },
    // Warm Sand/Cream — editorial softness
    warm: {
      top: "60%",
      left: "5%",
      width: "45vw",
      height: "45vw",
      color: isDark ? "rgba(217, 217, 207, 0.08)" : "rgba(246, 245, 242, 0.6)",
      duration: "20s"
    },
    // Legacy alias → primary monochrome
    pink: {
      top: "5%",
      left: "10%",
      width: "45vw",
      height: "45vw",
      color: isDark ? "rgba(246, 245, 242, 0.09)" : "rgba(17, 17, 17, 0.055)",
      duration: "18s"
    },
    // Legacy alias → secondary monochrome
    purple: {
      top: "35%",
      right: "5%",
      width: "40vw",
      height: "40vw",
      color: isDark ? "rgba(217, 217, 207, 0.1)" : "rgba(104, 104, 104, 0.06)",
      duration: "22s"
    },
    // Legacy alias → warm
    amber: {
      top: "75%",
      right: "15%",
      width: "35vw",
      height: "35vw",
      color: isDark ? "rgba(217, 217, 207, 0.08)" : "rgba(246, 245, 242, 0.6)",
      duration: "25s"
    },
    // Info blue — retained for depth contrast
    blue: {
      top: "35%",
      right: "5%",
      width: "40vw",
      height: "40vw",
      color: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
      duration: "22s"
    },
    // Teal/Cyan — very subtle
    cyan: {
      top: "20%",
      left: "50%",
      width: "35vw",
      height: "35vw",
      color: isDark ? "rgba(104, 104, 104, 0.1)" : "rgba(6, 182, 212, 0.04)",
      duration: "19s"
    }
  };
  const config = configs[variant] ?? configs.primary;
  return {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    WebkitFilter: "blur(80px)",
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
    willChange: "transform",
    zIndex: 0,
    pointerEvents: "none",
    ...config.top && { top: config.top },
    ...config.bottom && { bottom: config.bottom },
    ...config.left && { left: config.left },
    ...config.right && { right: config.right },
    width: config.width,
    height: config.height,
    background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
    animation: `${floatAmbient} ${config.duration} ease-in-out infinite alternate`,
    "@media (max-width: 600px)": {
      filter: "blur(40px)",
      WebkitFilter: "blur(40px)"
    }
  };
});
var DecorativeBlob = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ isDark }) => ({
  position: "absolute",
  top: "-30%",
  right: "-10%",
  width: "50%",
  height: "160%",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${isDark ? "rgba(217, 217, 207, 0.08)" : "rgba(17, 17, 17, 0.04)"} 0%, transparent 70%)`,
  filter: "blur(60px)",
  willChange: "transform",
  pointerEvents: "none"
}));
var gradientLight = "linear-gradient(135deg, #111111 0%, #686868 100%)";
var gradientDark = "linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)";
var GradientText = styles.styled("span")(({ isDark }) => ({
  background: isDark ? gradientDark : gradientLight,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  display: "inline"
}));
var GradientContextTitle = styles.styled(material.Typography)(({ isDark }) => ({
  fontWeight: 800,
  letterSpacing: "-0.04em",
  lineHeight: 1.2,
  fontSize: "1.35rem",
  display: "inline-block",
  paddingBottom: "4px",
  marginBottom: "-4px",
  background: isDark ? gradientDark : gradientLight,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text"
}));
function JivicoFontPreload() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
    /* @__PURE__ */ jsxRuntime.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
    /* @__PURE__ */ jsxRuntime.jsx("link", { href: GOOGLE_SANS_FLEX_URL, rel: "stylesheet" }),
    /* @__PURE__ */ jsxRuntime.jsx("link", { href: JIVICO_BRAND_FONTS_URL, rel: "stylesheet" })
  ] });
}
var JivicoFontLinks = JivicoFontPreload;
var FreestyleBadge = material.styled(material.Chip, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    backgroundColor: isDark ? "rgba(233,30,99,0.15)" : "rgba(233,30,99,0.08)",
    color: "#E91E63",
    fontWeight: 700,
    fontSize: "0.7rem",
    marginBottom: theme.spacing(3)
  };
});
var BannerChip = material.styled(material.Chip, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    backgroundColor: theme.palette.secondary.main,
    color: isDark ? "#1D1D1F" : "#FFF",
    fontWeight: 700,
    fontSize: "0.7rem",
    marginBottom: 16
  };
});
var SupportedTypeChip = material.styled(material.Chip, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
    fontWeight: 600,
    fontSize: "0.75rem"
  };
});
var FilterChip = material.styled(material.Chip, {
  shouldForwardProp: (p) => p !== "isSelected"
})(({ theme, isSelected }) => ({
  borderRadius: 12,
  fontWeight: 700,
  fontSize: "0.84rem",
  height: 38,
  padding: "0 4px",
  border: `1.5px solid ${isSelected ? "#EC4899" : theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
  background: isSelected ? theme.palette.mode === "dark" ? "rgba(236,72,153,0.15)" : "rgba(236,72,153,0.08)" : "transparent",
  color: isSelected ? "#EC4899" : theme.palette.mode === "dark" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)",
  transition: "all 0.2s ease",
  cursor: "pointer",
  "&:hover": {
    background: isSelected ? theme.palette.mode === "dark" ? "rgba(236,72,153,0.2)" : "rgba(236,72,153,0.12)" : theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"
  }
}));
var MobileViewAllButton = material.styled(material.Button, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    width: "100%",
    padding: "12px 24px",
    borderRadius: 16,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
    color: isDark ? "#FFFFFF" : "#111827",
    backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
    backdropFilter: "blur(8px)",
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
      borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
    }
  };
});
function MobileViewAll({ href, label = "View All", onClick }) {
  const ButtonComp = MobileViewAllButton;
  return /* @__PURE__ */ jsxRuntime.jsx(material.Box, { sx: { display: { xs: "block", md: "none" }, mt: 3, px: 2 }, children: /* @__PURE__ */ jsxRuntime.jsx(
    ButtonComp,
    {
      component: href ? "a" : "button",
      href,
      onClick,
      endIcon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { size: 16 }),
      children: label
    }
  ) });
}
var LiquidGlassCardRoot = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 24,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: isDark ? "#1C1F26" : "#FFFFFF",
    backgroundImage: isDark ? "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)" : "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 100%)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"}`,
    boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)" : "0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "60%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)",
      transform: "skewX(-25deg)",
      transition: "none",
      pointerEvents: "none"
    },
    "&:hover": {
      transform: "translateY(-8px) scale(1.01)",
      boxShadow: isDark ? "0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)" : "0 12px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 1)",
      borderColor: isDark ? "rgba(236, 72, 153, 0.5)" : "rgba(236, 72, 153, 0.4)",
      "&::after": {
        left: "160%",
        transition: "all 0.8s ease"
      }
    }
  };
});
var LiquidSpotlightImageArea = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark" && p !== "spotlight"
})(({ theme, isDark: explicitDark, spotlight = "pink" }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const spotlightColor = {
    pink: {
      primary: isDark ? "rgba(236, 72, 153, 0.18)" : "rgba(236, 72, 153, 0.1)",
      secondary: isDark ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.05)"
    },
    amber: {
      primary: isDark ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.08)",
      secondary: isDark ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.05)"
    },
    cyan: {
      primary: isDark ? "rgba(6, 182, 212, 0.18)" : "rgba(6, 182, 212, 0.08)",
      secondary: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)"
    },
    purple: {
      primary: isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.08)",
      secondary: isDark ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.05)"
    }
  }[spotlight];
  return {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1.25",
    overflow: "hidden",
    background: isDark ? `radial-gradient(circle at 50% 45%, ${spotlightColor.primary} 0%, ${spotlightColor.secondary} 40%, rgba(15, 17, 26, 0.85) 100%)` : `radial-gradient(circle at 50% 45%, ${spotlightColor.primary} 0%, ${spotlightColor.secondary} 40%, rgba(238, 242, 248, 0.95) 100%)`,
    borderBottom: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)"}`,
    flexShrink: 0,
    "& img": {
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    },
    "&:hover img": {
      transform: "scale(1.08)"
    }
  };
});
var GlassWishlistButton = material.styled(material.IconButton, {
  shouldForwardProp: (p) => p !== "isDark" && p !== "liked"
})(({ theme, isDark: explicitDark, liked }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    width: 36,
    height: 36,
    backgroundColor: isDark ? "rgba(20, 20, 28, 0.65)" : "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.9)"}`,
    boxShadow: isDark ? "0 4px 12px rgba(0, 0, 0, 0.4)" : "0 4px 12px rgba(0, 0, 0, 0.08)",
    color: liked ? "#EC4899" : isDark ? "#FFFFFF" : "#111827",
    transition: "all 0.25s ease",
    "&:hover": {
      backgroundColor: "#EC4899",
      color: "#FFFFFF",
      transform: "scale(1.12)",
      boxShadow: "0 6px 16px rgba(236, 72, 153, 0.45)"
    }
  };
});
var HolographicBadge = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "tagColor" && p !== "gradient"
})(({ theme, tagColor, gradient }) => ({
  position: "absolute",
  top: 12,
  left: 12,
  zIndex: 2,
  padding: theme.spacing(0.4, 1.2),
  borderRadius: 999,
  fontSize: "0.66rem",
  fontWeight: 900,
  letterSpacing: 0.6,
  color: "#FFFFFF",
  background: gradient || tagColor || "#EC4899",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
  textTransform: "uppercase",
  backdropFilter: "blur(8px)",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    top: 8,
    left: 8,
    padding: "3px 8px",
    fontSize: "0.58rem",
    letterSpacing: 0.3
  }
}));
var GlassCardBody = material.styled(material.Box)(({ theme }) => ({
  padding: theme.spacing(2.2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5)
  }
}));
var GlassProductTitle = material.styled(material.Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "0.92rem",
  lineHeight: 1.35,
  minHeight: "2.7em",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.82rem",
    minHeight: "2.5em"
  }
}));
var TribeMemberPill = material.styled(material.Box, {
  shouldForwardProp: (p) => p !== "isDark" && p !== "variant"
})(({ theme, isDark: explicitDark, variant = "pink" }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const isPink = variant === "pink";
  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.6),
    padding: theme.spacing(0.4, 0.9),
    borderRadius: 8,
    background: isDark ? isPink ? "linear-gradient(90deg, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.18) 100%)" : "linear-gradient(90deg, rgba(245, 158, 11, 0.18) 0%, rgba(236, 72, 153, 0.18) 100%)" : isPink ? "linear-gradient(90deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)" : "linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
    border: `1px solid ${isDark ? isPink ? "rgba(236, 72, 153, 0.3)" : "rgba(245, 158, 11, 0.3)" : isPink ? "rgba(236, 72, 153, 0.2)" : "rgba(245, 158, 11, 0.2)"}`,
    fontSize: "0.72rem",
    fontWeight: 800,
    color: isDark ? isPink ? "#F472B6" : "#FBBF24" : isPink ? "#DB2777" : "#D97706",
    marginTop: "auto"
  };
});
var LiquidGlassCard = LiquidGlassCardRoot;
var sizeConfig = {
  sm: { minHeight: 42, px: 1.5, py: 0.4, fontSize: "0.8125rem", gap: 1.25 },
  md: { minHeight: 52, px: 2, py: 0.6, fontSize: "0.875rem", gap: 1.5 },
  lg: { minHeight: 62, px: 2.5, py: 0.8, fontSize: "0.9375rem", gap: 1.75 }
};
var getPlacementStyles = (placement = "none", offset) => {
  if (placement === "none") {
    return {
      position: "relative",
      display: "inline-flex"
    };
  }
  const defaultY = 10;
  const defaultX = 20;
  const topOffset = offset?.y ?? defaultY;
  const bottomOffset = offset?.y ?? defaultY;
  const leftOffset = offset?.x ?? defaultX;
  const rightOffset = offset?.x ?? defaultX;
  const baseFixed = {
    position: "fixed",
    display: "inline-flex",
    zIndex: 11e3,
    willChange: "transform, opacity"
  };
  switch (placement) {
    case "top-center":
      return {
        ...baseFixed,
        top: topOffset,
        left: "50%",
        transform: "translateX(-50%)"
      };
    case "top-left":
      return {
        ...baseFixed,
        top: topOffset,
        left: leftOffset
      };
    case "top-right":
      return {
        ...baseFixed,
        top: topOffset,
        right: rightOffset
      };
    case "bottom-center":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: "50%",
        transform: "translateX(-50%)"
      };
    case "bottom-left":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: leftOffset
      };
    case "bottom-right":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        right: rightOffset
      };
    default:
      return {
        position: "relative",
        display: "inline-flex"
      };
  }
};
var StyledIslandRoot = material.styled(material.Box, {
  shouldForwardProp: (prop) => prop !== "placement" && prop !== "size" && prop !== "offset" && prop !== "blur" && prop !== "isDark" && prop !== "interactive"
})(({
  theme,
  placement = "none",
  size = "md",
  offset,
  blur = 40,
  isDark: explicitDark,
  interactive
}) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const { minHeight, px, py, fontSize, gap } = sizeConfig[size];
  const placementStyles = getPlacementStyles(placement, offset);
  return {
    ...placementStyles,
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: 9999,
    minHeight,
    padding: theme.spacing(py, px),
    gap: theme.spacing(gap),
    fontSize,
    fontFamily: theme.typography.fontFamily,
    // Quiet Luxury Frosted Mist Glass (Authentic Cosmos / Dries Van Noten)
    backdropFilter: `blur(${blur}px) saturate(140%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(140%)`,
    backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.65)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`,
    boxShadow: isDark ? "0 8px 24px 0 rgba(0, 0, 0, 0.30)" : "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
    color: isDark ? "#FFFFFF" : "#111827",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    ...interactive && {
      cursor: "pointer",
      "&:hover": {
        transform: placement === "top-center" || placement === "bottom-center" ? "translateX(-50%) translateY(-1.5px)" : "translateY(-1.5px)",
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.80)",
        borderColor: isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.12)",
        boxShadow: isDark ? "0 12px 32px 0 rgba(0, 0, 0, 0.40)" : "0 12px 32px 0 rgba(0, 0, 0, 0.08)"
      }
    }
  };
});
var DynamicIsland = React.forwardRef(
  ({
    children,
    placement = "none",
    size = "md",
    offset,
    blur,
    isDark,
    interactive = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      StyledIslandRoot,
      {
        ref,
        placement,
        size,
        offset,
        blur,
        isDark,
        interactive,
        ...props,
        children
      }
    );
  }
);
DynamicIsland.displayName = "DynamicIsland";
var StyledPillButton = material.styled(material.ButtonBase, {
  shouldForwardProp: (prop) => prop !== "isDark" && prop !== "active"
})(({
  theme,
  isDark: explicitDark,
  active
}) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    borderRadius: 9999,
    height: 36,
    padding: "0 14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(0.85),
    fontSize: "0.8125rem",
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1,
    color: isDark ? "#FFFFFF" : "#111827",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: active ? isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.95)" : isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.75)",
    border: `1px solid ${active ? isDark ? "rgba(255, 255, 255, 0.24)" : "rgba(0, 0, 0, 0.16)" : isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.08)"}`,
    boxShadow: isDark ? "none" : "0 1px 3px rgba(0, 0, 0, 0.04)",
    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    "&:hover": {
      backgroundColor: isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.95)",
      borderColor: isDark ? "rgba(255, 255, 255, 0.24)" : "rgba(0, 0, 0, 0.15)"
    },
    "&:active": {
      transform: "scale(0.98)"
    }
  };
});
var DynamicIslandPill = React.forwardRef(({ children, startIcon, endIcon, isDark, active, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(StyledPillButton, { ref, isDark, active, ...props, children: [
    startIcon && /* @__PURE__ */ jsxRuntime.jsx(
      material.Box,
      {
        component: "span",
        sx: {
          display: "inline-flex",
          alignItems: "center",
          fontSize: "1rem"
        },
        children: startIcon
      }
    ),
    children,
    endIcon && /* @__PURE__ */ jsxRuntime.jsx(
      material.Box,
      {
        component: "span",
        sx: {
          display: "inline-flex",
          alignItems: "center",
          fontSize: "0.9rem"
        },
        children: endIcon
      }
    )
  ] });
});
DynamicIslandPill.displayName = "DynamicIslandPill";
function InternalMuiWrapper({
  children,
  enableCssBaseline = true
}) {
  const { mode } = useThemeMode();
  const theme = React.useMemo(() => getAntigravityTheme(mode), [mode]);
  return /* @__PURE__ */ jsxRuntime.jsxs(styles.ThemeProvider, { theme, children: [
    enableCssBaseline && /* @__PURE__ */ jsxRuntime.jsx(CssBaseline__default.default, {}),
    children
  ] });
}
function JivicoThemeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode",
  enableCssBaseline = true
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeModeProvider, { defaultMode, storageKey, children: /* @__PURE__ */ jsxRuntime.jsx(InternalMuiWrapper, { enableCssBaseline, children }) });
}

exports.AmbientBlob = AmbientBlob;
exports.BannerChip = BannerChip;
exports.COLORS = COLORS;
exports.CoverImage = CoverImage;
exports.DecorativeBlob = DecorativeBlob;
exports.DynamicIsland = DynamicIsland;
exports.DynamicIslandPill = DynamicIslandPill;
exports.EdgeFade = EdgeFade;
exports.FilterChip = FilterChip;
exports.FreestyleBadge = FreestyleBadge;
exports.GOOGLE_SANS_FLEX_URL = GOOGLE_SANS_FLEX_URL;
exports.GlassBox = GlassBox;
exports.GlassCardBody = GlassCardBody;
exports.GlassContainer = GlassContainer;
exports.GlassControlsGroup = GlassControlsGroup;
exports.GlassEdgeFade = GlassEdgeFade;
exports.GlassIconGlow = GlassIconGlow;
exports.GlassNavArrowButton = GlassNavArrowButton;
exports.GlassPanel = GlassPanel;
exports.GlassProductTitle = GlassProductTitle;
exports.GlassScrollButton = GlassScrollButton;
exports.GlassSectionHeaderRow = GlassSectionHeaderRow;
exports.GlassSectionSubtitle = GlassSectionSubtitle;
exports.GlassSectionTitle = GlassSectionTitle;
exports.GlassTitleGroup = GlassTitleGroup;
exports.GlassToolbarRoot = GlassToolbarRoot;
exports.GlassWishlistButton = GlassWishlistButton;
exports.GradientContextTitle = GradientContextTitle;
exports.GradientText = GradientText;
exports.HeaderAppBar = HeaderAppBar;
exports.HeroActions = HeroActions;
exports.HeroDescription = HeroDescription;
exports.HeroImageFrame = HeroImageFrame;
exports.HeroSection = HeroSection;
exports.HeroStatsPanel = HeroStatsPanel;
exports.HeroTitle = HeroTitle;
exports.HolographicBadge = HolographicBadge;
exports.JIVICO_BRAND_FONTS_URL = JIVICO_BRAND_FONTS_URL;
exports.JIVICO_FONTS_URL = JIVICO_FONTS_URL;
exports.JivicoFontLinks = JivicoFontLinks;
exports.JivicoFontPreload = JivicoFontPreload;
exports.JivicoThemeProvider = JivicoThemeProvider;
exports.LiquidGlassCard = LiquidGlassCard;
exports.LiquidGlassCardRoot = LiquidGlassCardRoot;
exports.LiquidSpotlightImageArea = LiquidSpotlightImageArea;
exports.MobileViewAll = MobileViewAll;
exports.MobileViewAllButton = MobileViewAllButton;
exports.PageRoot = PageRoot;
exports.Section = Section;
exports.SectionContainer = SectionContainer;
exports.SectionHeader = SectionHeader;
exports.StatLabel = StatLabel;
exports.StatValue = StatValue;
exports.StudioSectionHeader = SectionHeader;
exports.SupportedTypeChip = SupportedTypeChip;
exports.ThemeModeProvider = ThemeModeProvider;
exports.TribeMemberPill = TribeMemberPill;
exports.buildPalette = buildPalette;
exports.createJivicoTheme = createJivicoTheme;
exports.getAntigravityTheme = getAntigravityTheme;
exports.getAppleTheme = getAppleTheme;
exports.getControlOverrides = getControlOverrides;
exports.getDataDisplayOverrides = getDataDisplayOverrides;
exports.getFeedbackOverrides = getFeedbackOverrides;
exports.getHybridTheme = getHybridTheme;
exports.getInputOverrides = getInputOverrides;
exports.getNavigationOverrides = getNavigationOverrides;
exports.getSurfaceOverrides = getSurfaceOverrides;
exports.typography = typography;
exports.useThemeMode = useThemeMode;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map