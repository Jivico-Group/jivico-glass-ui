import {
  keyframes,
  styled as styled$1,
  useTheme as useTheme$1,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import * as G from "react";
import G__default, {
  createContext,
  forwardRef,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useId,
} from "react";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import {
  styled,
  Box,
  Container,
  IconButton,
  Typography,
  AppBar,
  Button,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Dialog,
  Tooltip,
  Stack,
} from "@mui/material";
import { ArrowRight, ArrowLeft, ChevronRight, ZoomOut, ZoomIn, Minimize2, Maximize2 } from "lucide-react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import Me from "@mui/material/Box";
import na from "@mui/material/Button";
import Xr from "@mui/material/Typography";
import Ki from "@mui/material/BottomNavigation";
import en from "@mui/material/BottomNavigationAction";
import Xn from "@mui/material/CssBaseline";
var to = { charcoal: "#111111", stone: "#686868", sand: "#D9D9CF", cream: "#F6F5F2" };
var ao = {
  light: "#111111",
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
  textDark: "#111111",
};
var io = {
  light: "#686868",
  dark: "#D6D3CD",
  hoverLight: "#555555",
  hoverDark: "#E2DED6",
  activeLight: "#3F3F3F",
  activeDark: "#C2BDB3",
  disabledLight: "#C7C7C4",
  disabledDark: "#4A4844",
  glowLight: "rgba(104, 104, 104, 0.18)",
  glowDark: "rgba(214, 211, 205, 0.20)",
  textLight: "#FFFFFF",
  textDark: "#111111",
};
var no = {
  light: "#B08D57",
  dark: "#D4B77A",
  hoverLight: "#9A7848",
  hoverDark: "#E0C78F",
  activeLight: "#806238",
  activeDark: "#C5A665",
  disabledLight: "#D9C9AD",
  disabledDark: "#5A4B35",
  glowLight: "rgba(176, 141, 87, 0.18)",
  glowDark: "rgba(212, 183, 122, 0.20)",
  textLight: "#FFFFFF",
  textDark: "#111111",
};
var so = {
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
    textDark: "#111111",
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
    textDark: "#111111",
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
    textDark: "#111111",
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
    textDark: "#111111",
  },
};
var lo = { light: "#FFFFFF", dark: "#0A0A0A", paperLight: "#FFFFFF", paperDark: "#141414" };
var co = { primaryLight: "#111111", primaryDark: "#F6F5F2", secondaryLight: "#686868", secondaryDark: "#9AA0A6" };
var go = { light: "rgba(17, 17, 17, 0.1)", dark: "rgba(246, 245, 242, 0.1)" };
var po = {
  hoverLight: "rgba(17, 17, 17, 0.04)",
  hoverDark: "rgba(255, 255, 255, 0.06)",
  selectedLight: "rgba(17, 17, 17, 0.08)",
  selectedDark: "rgba(246, 245, 242, 0.12)",
};
var bo = {
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
  alertBgLight: "rgba(255, 255, 255, 0.62)",
  alertBgDark: "rgba(255, 255, 255, 0.08)",
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
  appBarBgLight: "rgba(255, 255, 255, 0.82)",
  appBarBgDark: "rgba(10, 10, 10, 0.78)",
  accordionBgLight: "rgba(255, 255, 255, 0.6)",
  accordionBgDark: "rgba(18, 18, 18, 0.6)",
  drawerBgLight: "rgba(255, 255, 255, 0.97)",
  drawerBgDark: "rgba(10, 10, 10, 0.97)",
  menuItemHoverLight: "rgba(17, 17, 17, 0.04)",
  menuItemHoverDark: "rgba(255, 255, 255, 0.08)",
};
var mo = {
  success: "52, 168, 83",
  warningDark: "246, 173, 85",
  warningLight: "230, 119, 0",
  error: "234, 67, 53",
  info: "66, 133, 244",
};
var uo = {
  primary: "linear-gradient(135deg, #111111 0%, #686868 100%)",
  primaryHover: "linear-gradient(135deg, #000000 0%, #4A4A4A 100%)",
  accent: "linear-gradient(135deg, #686868 0%, #D9D9CF 100%)",
  accentDark: "linear-gradient(135deg, #F6F5F2 0%, #686868 100%)",
};
var t = {
  brand: to,
  primary: ao,
  secondary: io,
  accent: no,
  ...so,
  background: lo,
  text: co,
  divider: go,
  action: po,
  white: "#FFFFFF",
  black: "#0A0A0A",
  glass: bo,
  alertRgb: mo,
  gradients: uo,
};
var xo = () => ({ charcoal: t.brand.charcoal, stone: t.brand.stone, sand: t.brand.sand, cream: t.brand.cream });
var ho = (e) => ({
  main: e ? t.primary.dark : t.primary.light,
  light: t.primary.dark,
  dark: t.primary.light,
  hover: e ? t.primary.hoverDark : t.primary.hoverLight,
  active: e ? t.primary.activeDark : t.primary.activeLight,
  disabled: e ? t.primary.disabledDark : t.primary.disabledLight,
  glow: e ? t.primary.glowDark : t.primary.glowLight,
  contrastText: e ? t.primary.textDark : t.primary.textLight,
});
var fo = (e) => ({
  main: e ? t.secondary.dark : t.secondary.light,
  light: t.secondary.dark,
  dark: t.secondary.light,
  hover: e ? t.secondary.hoverDark : t.secondary.hoverLight,
  active: e ? t.secondary.activeDark : t.secondary.activeLight,
  disabled: e ? t.secondary.disabledDark : t.secondary.disabledLight,
  glow: e ? t.secondary.glowDark : t.secondary.glowLight,
  contrastText: e ? t.secondary.textDark : t.secondary.textLight,
});
var vo = (e) => ({
  main: e ? t.accent.dark : t.accent.light,
  light: t.accent.dark,
  dark: t.accent.light,
  hover: e ? t.accent.hoverDark : t.accent.hoverLight,
  active: e ? t.accent.activeDark : t.accent.activeLight,
  disabled: e ? t.accent.disabledDark : t.accent.disabledLight,
  glow: e ? t.accent.glowDark : t.accent.glowLight,
  contrastText: e ? t.accent.textDark : t.accent.textLight,
});
var yo = (e) => ({
  success: {
    main: e ? t.success.dark : t.success.light,
    light: t.success.dark,
    dark: t.success.light,
    hover: e ? t.success.hoverDark : t.success.hoverLight,
    active: e ? t.success.activeDark : t.success.activeLight,
    disabled: e ? t.success.disabledDark : t.success.disabledLight,
    glow: e ? t.success.glowDark : t.success.glowLight,
    contrastText: e ? t.success.textDark : t.success.textLight,
  },
  warning: {
    main: e ? t.warning.dark : t.warning.light,
    light: t.warning.dark,
    dark: t.warning.light,
    hover: e ? t.warning.hoverDark : t.warning.hoverLight,
    active: e ? t.warning.activeDark : t.warning.activeLight,
    disabled: e ? t.warning.disabledDark : t.warning.disabledLight,
    glow: e ? t.warning.glowDark : t.warning.glowLight,
    contrastText: e ? t.warning.textDark : t.warning.textLight,
  },
  error: {
    main: e ? t.error.dark : t.error.light,
    light: t.error.dark,
    dark: t.error.light,
    hover: e ? t.error.hoverDark : t.error.hoverLight,
    active: e ? t.error.activeDark : t.error.activeLight,
    disabled: e ? t.error.disabledDark : t.error.disabledLight,
    glow: e ? t.error.glowDark : t.error.glowLight,
    contrastText: e ? t.error.textDark : t.error.textLight,
  },
  info: {
    main: e ? t.info.dark : t.info.light,
    light: t.info.dark,
    dark: t.info.light,
    hover: e ? t.info.hoverDark : t.info.hoverLight,
    active: e ? t.info.activeDark : t.info.activeLight,
    disabled: e ? t.info.disabledDark : t.info.disabledLight,
    glow: e ? t.info.glowDark : t.info.glowLight,
    contrastText: e ? t.info.textDark : t.info.textLight,
  },
});
var wo = (e) => ({
  default: e ? t.background.dark : t.background.light,
  paper: e ? t.background.paperDark : t.background.paperLight,
});
var So = (e) => ({
  primary: e ? t.text.primaryDark : t.text.primaryLight,
  secondary: e ? t.text.secondaryDark : t.text.secondaryLight,
  glassSurface: e ? "#FFFFFF" : "#000000",
  "glass-surface": e ? "#FFFFFF" : "#000000",
});
var Co = (e) => (e ? t.divider.dark : t.divider.light);
var Fo = (e) => ({
  main: e ? t.glass.mainDark : t.glass.mainLight,
  contrastText: e ? t.glass.contrastTextDark : t.glass.contrastTextLight,
  surface: e ? "#FFFFFF" : "#000000",
  light: e ? t.glass.lightDark : t.glass.lightLight,
  dark: e ? t.glass.darkDark : t.glass.darkLight,
  hover: e ? t.glass.hoverDark : t.glass.hoverLight,
  active: e ? t.glass.activeDark : t.glass.activeLight,
  disabled: e ? t.glass.disabledDark : t.glass.disabledLight,
  glow: e ? t.glass.glowDark : t.glass.glowLight,
  buttonBorder: e ? t.glass.buttonBorderDark : t.glass.buttonBorderLight,
  buttonBg: e ? t.glass.buttonBgDark : t.glass.buttonBgLight,
  alertBg: e ? t.glass.alertBgDark : t.glass.alertBgLight,
  buttonHoverBg: e ? t.glass.buttonHoverBgDark : t.glass.buttonHoverBgLight,
  buttonTextHover: e ? t.glass.buttonTextHoverDark : t.glass.buttonTextHoverLight,
  fabShadow: e ? t.glass.fabShadowDark : t.glass.fabShadowLight,
  inputBorderHover: e ? t.glass.inputBorderHoverDark : t.glass.inputBorderHoverLight,
  inputFocusBg: e ? t.glass.inputFocusBgDark : t.white,
  paperBg: e ? t.glass.paperBgDark : t.glass.paperBgLight,
  paperBorder: e ? t.glass.paperBorderDark : t.glass.paperBorderLight,
  paperShadow: e ? t.glass.paperShadowDark : t.glass.paperShadowLight,
  control: e ? t.glass.controlDark : t.glass.controlLight,
  switchTrack: e ? t.glass.switchTrackDark : t.glass.switchTrackLight,
  switchShadow: t.glass.switchShadow,
  sliderThumbShadow: t.glass.sliderThumbShadow,
  sliderRail: e ? t.glass.sliderRailDark : t.glass.sliderRailLight,
  chipBg: e ? t.glass.chipBgDark : t.glass.chipBgLight,
  chipBorder: e ? t.glass.chipBorderDark : t.glass.chipBorderLight,
  avatarBorder: e ? t.glass.avatarBorderDark : t.glass.avatarBorderLight,
  tableBorder: e ? t.glass.tableBorderDark : t.glass.tableBorderLight,
  tableHeadBg: e ? t.glass.tableHeadBgDark : t.glass.tableHeadBgLight,
  tooltipBg: e ? t.glass.tooltipBgDark : t.glass.tooltipBgLight,
  tooltipBorder: e ? t.glass.tooltipBorderDark : t.glass.tooltipBorderLight,
  tooltipShadow: t.glass.tooltipShadow,
  dialogBg: e ? t.glass.dialogBgDark : t.glass.dialogBgLight,
  dialogShadow: e ? t.glass.dialogShadowDark : t.glass.dialogShadowLight,
  skeletonBg: e ? t.glass.skeletonBgDark : t.glass.skeletonBgLight,
  progressBg: e ? t.glass.progressBgDark : t.glass.progressBgLight,
  cardBg: e ? t.glass.cardBgDark : t.glass.cardBgLight,
  cardShadow: e ? t.glass.cardShadowDark : t.glass.cardShadowLight,
  cardHoverShadow: e ? t.glass.cardHoverShadowDark : t.glass.cardHoverShadowLight,
  elevation1: e ? t.glass.elevation1Dark : t.glass.elevation1Light,
  appBarBg: e ? t.glass.appBarBgDark : t.glass.appBarBgLight,
  accordionBg: e ? t.glass.accordionBgDark : t.glass.accordionBgLight,
  drawerBg: e ? t.glass.drawerBgDark : t.glass.drawerBgLight,
  menuItemHover: e ? t.glass.menuItemHoverDark : t.glass.menuItemHoverLight,
});
var Mo = (e) => ({
  hover: e ? t.action.hoverDark : t.action.hoverLight,
  selected: e ? t.action.selectedDark : t.action.selectedLight,
});
var ko = (e) => ({
  success: t.alertRgb.success,
  warning: e ? t.alertRgb.warningDark : t.alertRgb.warningLight,
  error: t.alertRgb.error,
  info: t.alertRgb.info,
});
var To = () => t.gradients;
var Bo = (e) => ({
  "glass-surface": {
    main: e ? "#FFFFFF" : "#000000",
    light: e ? "#FFFFFF" : "#000000",
    dark: e ? "#FFFFFF" : "#000000",
    contrastText: e ? "#000000" : "#FFFFFF",
  },
  glassSurface: {
    main: e ? "#FFFFFF" : "#000000",
    light: e ? "#FFFFFF" : "#000000",
    dark: e ? "#FFFFFF" : "#000000",
    contrastText: e ? "#000000" : "#FFFFFF",
  },
});
var Ro = (e) => {
  let r = e === "dark";
  return {
    brand: xo(),
    primary: ho(r),
    accent: vo(r),
    secondary: fo(r),
    ...yo(r),
    background: wo(r),
    text: So(r),
    divider: Co(r),
    glass: Fo(r),
    action: Mo(r),
    alert: ko(r),
    gradients: To(),
    ...Bo(r),
  };
};
var er = ['"Google Sans Flex"', '"Google Sans"', "sans-serif"].join(","),
  De = er,
  dr = er,
  Ma = er,
  ka = er,
  zo = {
    fontFamily: er,
    subtitle1: { fontSize: "1rem", fontWeight: 450, letterSpacing: "-0.006em", lineHeight: 1.4, fontFamily: dr },
    subtitle2: { fontSize: "0.875rem", fontWeight: 500, letterSpacing: "-0.004em", lineHeight: 1.4, fontFamily: dr },
    h1: { fontSize: "3.75rem", fontWeight: 550, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: De },
    h2: { fontSize: "2.85rem", fontWeight: 550, letterSpacing: "-0.03em", lineHeight: 1.08, fontFamily: De },
    h3: { fontSize: "2.1rem", fontWeight: 550, letterSpacing: "-0.025em", lineHeight: 1.15, fontFamily: De },
    h4: { fontSize: "1.5rem", fontWeight: 450, letterSpacing: "-0.018em", lineHeight: 1.2, fontFamily: De },
    h5: { fontSize: "1.25rem", fontWeight: 450, letterSpacing: "-0.012em", lineHeight: 1.25, fontFamily: De },
    h6: { fontSize: "1rem", fontWeight: 450, letterSpacing: "-0.006em", lineHeight: 1.3, fontFamily: De },
    body1: { fontSize: "1.0625rem", lineHeight: 1.55, letterSpacing: "-0.008em", fontWeight: 400, fontFamily: dr },
    body2: { fontSize: "0.875rem", lineHeight: 1.5, letterSpacing: "-0.004em", fontWeight: 400, fontFamily: dr },
    button: {
      textTransform: "none",
      fontWeight: 450,
      letterSpacing: "0.005em",
      fontSize: "0.9375rem",
      lineHeight: 1.2,
      fontFamily: Ma,
    },
    caption: { fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.01em", lineHeight: 1.4, fontFamily: dr },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 450,
      letterSpacing: "0.12em",
      lineHeight: 1.2,
      textTransform: "uppercase",
      fontFamily: ka,
    },
  },
  Ta =
    "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..450,0..100&display=swap",
  Ol = Ta,
  Al = er;
var rr = "cubic-bezier(0.16, 1, 0.3, 1)",
  Lo = [
    `background-color 180ms ${rr}`,
    `border-color 180ms ${rr}`,
    `box-shadow 220ms ${rr}`,
    `color 180ms ${rr}`,
    `transform 180ms ${rr}`,
    `backdrop-filter 220ms ${rr}`,
  ].join(", "),
  Io = {
    light: {
      contained: "rgba(255, 255, 255, 0.72)",
      containedHover: "rgba(255, 255, 255, 0.92)",
      containedActive: "rgba(255, 255, 255, 0.78)",
      containedDisabled: "rgba(255, 255, 255, 0.3)",
      containedBorder: "rgba(255, 255, 255, 0.85)",
      containedShadow: "0 6px 22px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
      containedHoverShadow: "0 10px 28px rgba(0, 0, 0, 0.1), inset 0 1px 1px #FFFFFF",
      outlined: "rgba(255, 255, 255, 0.28)",
      outlinedHover: "rgba(255, 255, 255, 0.55)",
      outlinedActive: "rgba(255, 255, 255, 0.4)",
      outlinedBorder: "rgba(17, 17, 17, 0.16)",
      outlinedHoverBorder: "rgba(17, 17, 17, 0.3)",
      outlinedShadow: "0 4px 14px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
      outlinedHoverShadow: "0 6px 20px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
    },
    dark: {
      contained: "rgba(255, 255, 255, 0.12)",
      containedHover: "rgba(255, 255, 255, 0.2)",
      containedActive: "rgba(255, 255, 255, 0.09)",
      containedDisabled: "rgba(255, 255, 255, 0.04)",
      containedBorder: "rgba(255, 255, 255, 0.16)",
      containedShadow: "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.22)",
      containedHoverShadow: "0 14px 40px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
      outlined: "rgba(255, 255, 255, 0.04)",
      outlinedHover: "rgba(255, 255, 255, 0.09)",
      outlinedActive: "rgba(255, 255, 255, 0.06)",
      outlinedBorder: "rgba(255, 255, 255, 0.22)",
      outlinedHoverBorder: "rgba(255, 255, 255, 0.35)",
      outlinedShadow: "0 4px 18px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.06)",
      outlinedHoverShadow: "0 8px 24px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
    },
  },
  Po = (e, r) => ({
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ ownerState: o }) => {
          let a = o.variant || "text",
            i = o.color ?? "primary",
            s = i === "inherit" ? "primary" : i,
            l = e[s] || e.primary,
            c = l.main,
            p = l.hover,
            d = l.active,
            u = l.disabled,
            b = l.glow,
            g = l.contrastText || t.white,
            y = s === "primary",
            x = s === "secondary",
            f = s === "dark-glass",
            w = s === "glass" || f,
            k = !y && !x && !w,
            S = f || r,
            O = S ? Io.dark : Io.light;
          return {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 38,
            borderRadius: 9999,
            padding: "9px 22px",
            fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
            fontSize: "0.875rem",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            textTransform: "none",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transition: Lo,
            "&:active": { transform: "translateY(0) scale(0.985)" },
            "&:focus-visible": { outline: "none" },
            "&.Mui-disabled": { cursor: "default", pointerEvents: "none", transform: "none" },
            ...(a === "contained" &&
              y && {
                backgroundColor: c,
                color: g,
                boxShadow: r
                  ? "0 6px 24px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)"
                  : "0 6px 20px rgba(17,17,17,0.22), inset 0 1px 1px rgba(255,255,255,0.15)",
                "&:hover": {
                  backgroundColor: p,
                  transform: "translateY(-1px)",
                  boxShadow: r
                    ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                    : "0 12px 32px rgba(17,17,17,0.3)",
                },
                "&:active": { backgroundColor: d, transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: r
                    ? `0 0 0 3px ${b}, 0 6px 24px rgba(0,0,0,0.55)`
                    : `0 0 0 3px ${b}, 0 6px 20px rgba(17,17,17,0.22)`,
                },
                "&.Mui-disabled": {
                  backgroundColor: u,
                  color: r ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                  boxShadow: "none",
                },
              }),
            ...(a === "outlined" &&
              y && {
                border: "none",
                background: r ? "rgba(255, 255, 255, 0.1)" : t.brand.cream,
                color: r ? t.brand.cream : t.brand.charcoal,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: r
                  ? "0 6px 20px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.15)"
                  : "0 6px 20px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(17,17,17,0.08)",
                "&:hover": {
                  background: r ? "rgba(255, 255, 255, 0.15)" : t.white,
                  transform: "translateY(-1px)",
                  boxShadow: r
                    ? "0 12px 32px rgba(0,0,0,0.6), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                    : "0 12px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(17,17,17,0.15)",
                },
                "&:active": { transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: r
                    ? `0 0 0 3px ${b}, 0 6px 24px rgba(0,0,0,0.55)`
                    : "0 0 0 3px rgba(246,245,242,0.6), 0 6px 20px rgba(0,0,0,0.06)",
                },
                "&.Mui-disabled": {
                  background: r ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  color: r ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                },
              }),
            ...(a === "contained" &&
              x && {
                background: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)",
                color: r ? t.brand.cream : t.brand.charcoal,
                boxShadow: r ? "inset 0 0 0 1px rgba(255,255,255,0.05)" : "inset 0 0 0 1px rgba(17,17,17,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                "&:hover": {
                  background: r ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
                  transform: "translateY(-1px)",
                  boxShadow: r
                    ? "0 4px 14px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)"
                    : "0 4px 14px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(17,17,17,0.1)",
                },
                "&:active": { transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: r ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
                },
                "&.Mui-disabled": {
                  background: r ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",
                  color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                },
              }),
            ...(a === "outlined" &&
              x && {
                border: "none",
                background: "transparent",
                color: r ? t.brand.cream : t.brand.charcoal,
                boxShadow: r ? "inset 0 0 0 1.5px rgba(255,255,255,0.15)" : "inset 0 0 0 1.5px rgba(17,17,17,0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                "&:hover": {
                  background: r ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                  transform: "translateY(-1px)",
                  boxShadow: r
                    ? "0 4px 14px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                    : "0 4px 14px rgba(0,0,0,0.04), inset 0 0 0 1.5px rgba(17,17,17,0.25)",
                },
                "&:active": { transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: r ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
                },
                "&.Mui-disabled": {
                  boxShadow: r ? "inset 0 0 0 1px rgba(255,255,255,0.1)" : "inset 0 0 0 1px rgba(17,17,17,0.1)",
                  color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                  background: "transparent",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                },
              }),
            ...(a === "contained" &&
              w && {
                background: O.contained,
                color: S ? t.brand.cream : t.brand.charcoal,
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: `1px solid ${O.containedBorder}`,
                boxShadow: O.containedShadow,
                "&:hover": {
                  background: O.containedHover,
                  transform: "translateY(-1px)",
                  boxShadow: O.containedHoverShadow,
                },
                "&:active": { background: O.containedActive, transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: S
                    ? "0 0 0 3px rgba(255,255,255,0.35), 0 8px 32px rgba(0,0,0,0.45)"
                    : "0 0 0 3px rgba(17,17,17,0.2), 0 6px 22px rgba(0,0,0,0.08)",
                },
                "&.Mui-disabled": {
                  background: O.containedDisabled,
                  color: S ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.28)",
                  border: `1px solid ${S ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)"}`,
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                },
              }),
            ...(a === "outlined" &&
              w && {
                background: O.outlined,
                color: S ? t.brand.cream : t.brand.charcoal,
                border: `1.5px solid ${O.outlinedBorder}`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: O.outlinedShadow,
                "&:hover": {
                  background: O.outlinedHover,
                  borderColor: O.outlinedHoverBorder,
                  transform: "translateY(-1px)",
                  boxShadow: O.outlinedHoverShadow,
                },
                "&:active": { background: O.outlinedActive, transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": {
                  boxShadow: S ? "0 0 0 3px rgba(255,255,255,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
                },
                "&.Mui-disabled": {
                  borderColor: S ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)",
                  color: S ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
                  background: "transparent",
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                },
              }),
            ...(a === "contained" &&
              k && {
                backgroundColor: c,
                color: g,
                boxShadow: "none",
                border: "1px solid transparent",
                "&:hover": { backgroundColor: p, boxShadow: `0 6px 20px ${b}`, transform: "translateY(-1px)" },
                "&:active": { backgroundColor: d, transform: "translateY(0) scale(0.985)" },
                "&:focus-visible": { boxShadow: `0 0 0 3px ${b}` },
                "&.Mui-disabled": {
                  backgroundColor: u,
                  color: r ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.4)",
                  boxShadow: "none",
                },
              }),
            ...(a === "outlined" &&
              k && {
                border: `1.5px solid ${c}`,
                color: c,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: r ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                  borderColor: p,
                  boxShadow: `0 4px 14px ${b}`,
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  borderColor: d,
                  backgroundColor: r ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                  transform: "translateY(0) scale(0.985)",
                },
                "&:focus-visible": { boxShadow: `0 0 0 3px ${b}` },
                "&.Mui-disabled": { borderColor: u, color: u, backgroundColor: "transparent", boxShadow: "none" },
              }),
            ...(a === "text" &&
              w && {
                background: "transparent",
                color: S ? t.brand.cream : t.brand.charcoal,
                padding: "8px 18px",
                minHeight: 40,
                border: "1px solid transparent",
                transition: Lo,
                "&:hover": {
                  background: S ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: `1px solid ${S ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)"}`,
                  boxShadow: S ? "0 4px 16px rgba(0,0,0,0.25)" : "0 4px 14px rgba(0,0,0,0.04)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  background: S ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.75)",
                  transform: "translateY(0) scale(0.985)",
                },
                "&:focus-visible": {
                  boxShadow: S ? "0 0 0 3px rgba(255,255,255,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
                },
                "&.Mui-disabled": {
                  color: S ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
                  background: "transparent",
                  border: "1px solid transparent",
                },
              }),
            ...(a === "text" &&
              !w && {
                color: y || x ? (r ? t.brand.cream : t.brand.charcoal) : c,
                padding: "8px 16px",
                minHeight: 40,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: r ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  backgroundColor: r ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                  transform: "translateY(0) scale(0.985)",
                },
                "&:focus-visible": { boxShadow: `0 0 0 3px ${b}` },
                "&.Mui-disabled": {
                  color: y || x ? (r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)") : u,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }),
            "@media (prefers-reduced-motion: reduce)": {
              transition: "none",
              "&:hover": { transform: "none" },
              "&:active": { transform: "none" },
            },
          };
        },
        sizeSmall: { minHeight: 30, padding: "5px 14px", fontSize: "0.78rem" },
        sizeMedium: { minHeight: 36, padding: "7px 18px", fontSize: "0.85rem" },
        sizeLarge: { minHeight: 44, padding: "11px 26px", fontSize: "0.9375rem" },
      },
    },
  });
var Pr = "cubic-bezier(0.16, 1, 0.3, 1)",
  Ba = [`border-color 180ms ${Pr}`, `box-shadow 220ms ${Pr}`, `transform 180ms ${Pr}`].join(", "),
  Oo = (e) => ({
    MuiButtonGroup: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ ownerState: r }) => {
          let o = r.variant || "outlined";
          return {
            boxShadow: "none",
            borderRadius: 9999,
            "& .MuiButtonGroup-grouped": {
              position: "relative",
              zIndex: 0,
              borderRadius: 0,
              transition: Ba,
              "&:focus-visible": { zIndex: 3 },
              "&:hover": { zIndex: 2 },
              "&:active": { zIndex: 2 },
              "&.Mui-disabled": { zIndex: 0 },
            },
            ...(o === "contained" && {
              "& .MuiButtonGroup-grouped": {
                boxShadow: "none",
                "&:first-of-type": { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
                "&:last-of-type": { borderTopRightRadius: 9999, borderBottomRightRadius: 9999, borderRight: "none" },
                "&:not(:last-of-type)": {
                  borderRight: e ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(255,255,255,0.35)",
                },
                "&:hover": { zIndex: 2 },
                "&.Mui-selected": { zIndex: 2 },
              },
            }),
            ...(o === "outlined" && {
              "& .MuiButtonGroup-grouped": {
                "&:first-of-type": { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
                "&:last-of-type": { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
                "&:not(:first-of-type)": { marginLeft: -1 },
                "&:hover": { zIndex: 2 },
                "&.Mui-selected": { zIndex: 2 },
                "&.Mui-selected + .MuiButtonGroup-grouped": { borderLeftColor: "transparent" },
              },
            }),
            ...(o === "text" && {
              "& .MuiButtonGroup-grouped": {
                borderRadius: 9999,
                "&:not(:last-of-type)": { marginRight: 2 },
                "&:hover": { zIndex: 2 },
                "&.Mui-selected": { zIndex: 2 },
              },
            }),
            "@media (prefers-reduced-motion: reduce)": {
              "& .MuiButtonGroup-grouped": {
                transition: "none",
                transform: "none",
                "&:hover": { transform: "none" },
                "&:active": { transform: "none" },
              },
            },
          };
        },
      },
    },
  });
var Ao = (e) => ({
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        boxShadow: e.glass.fabShadow,
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": { transform: "translateY(-3px) scale(1.03)" },
        "&:active": { transform: "translateY(0) scale(0.97)" },
      },
    },
  },
});
var Ho = (e, r) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState: o }) => {
        let a = o.color ? o.color : "primary",
          i = e[a] || e.primary,
          s = i.main,
          l = i.hover || s;
        i.glow;
        let p = a === "glass",
          d = a === "success" || a === "warning" || a === "error" || a === "info";
        return {
          borderRadius: 12,
          backgroundColor: p ? (r ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.55)") : e.glass.buttonBg,
          backdropFilter: p ? "blur(20px) saturate(190%)" : "blur(8px)",
          WebkitBackdropFilter: p ? "blur(20px) saturate(190%)" : "blur(8px)",
          boxShadow: p
            ? r
              ? "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 14px rgba(0, 0, 0, 0.2)"
              : "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0, 0, 0, 0.04)"
            : "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: p ? (r ? "rgba(255, 255, 255, 0.20)" : "rgba(17, 17, 17, 0.16)") : d ? s : e.divider,
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          },
          "&:hover": { ...(p && { backgroundColor: r ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.70)" }) },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: p
              ? r
                ? "rgba(255, 255, 255, 0.35)"
                : "rgba(17, 17, 17, 0.32)"
              : d
                ? l
                : e.glass.inputBorderHover,
          },
          "&.Mui-focused": {
            backgroundColor: p ? (r ? "rgba(24, 26, 32, 0.65)" : "rgba(255, 255, 255, 0.90)") : e.glass.inputFocusBg,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: p ? (r ? "#F6F5F2" : "#111111") : s,
              borderWidth: "1.5px",
            },
          },
          "&.Mui-error": { "& .MuiOutlinedInput-notchedOutline": { borderColor: e.error.main } },
        };
      },
      input: { fontSize: "0.9375rem", color: e.text.primary, "@media (max-width: 599.95px)": { fontSize: "16px" } },
      multiline: { padding: "13px 18px" },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          fontSize: "0.85rem",
          "@media (max-width: 599.95px)": { fontSize: "16px" },
          "&:not(.MuiInputBase-multiline)": { minHeight: 36 },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "6px 14px",
            fontSize: "0.85rem",
            "@media (max-width: 599.95px)": { fontSize: "16px" },
          },
          "&.MuiInputBase-multiline": {
            padding: "6px 14px",
            alignItems: "flex-start",
            "& .MuiInputBase-input": { fontSize: "16px" },
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: "0.9375rem",
          "&:not(.MuiInputBase-multiline)": { minHeight: 48 },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "12px 18px",
            fontSize: "0.9375rem",
            "@media (max-width: 599.95px)": { fontSize: "16px" },
          },
          "&.MuiInputBase-multiline": {
            padding: "12px 18px",
            alignItems: "flex-start",
            "& .MuiInputBase-input": { fontSize: "16px" },
          },
        },
      },
      {
        props: { size: "large" },
        style: {
          fontSize: "1.1rem",
          "&:not(.MuiInputBase-multiline)": { minHeight: 56 },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": { padding: "16px 20px", fontSize: "1.1rem" },
          "&.MuiInputBase-multiline": { padding: "16px 20px", alignItems: "flex-start" },
        },
      },
    ],
  },
});
var Wo = (e) => ({
  MuiInputLabel: {
    styleOverrides: {
      root: ({ ownerState: r }) => {
        let o = r.color ? r.color : "primary",
          i = (e[o] || e.primary).main,
          s = o === "success" || o === "warning" || o === "error" || o === "info",
          l = "translate(18px, 13px) scale(1)",
          c = "translate(18px, -9px) scale(0.75)";
        return (
          r.size === "small"
            ? ((l = "translate(14px, 8px) scale(1)"), (c = "translate(14px, -9px) scale(0.75)"))
            : r.size === "large" && ((l = "translate(20px, 17px) scale(1)"), (c = "translate(20px, -9px) scale(0.75)")),
          {
            fontSize: "0.9375rem",
            color: s ? i : e.text.secondary,
            "&.Mui-focused": { color: i },
            "&.MuiInputLabel-outlined": {
              transform: `${l} !important`,
              "&.MuiInputLabel-shrink": { transform: `${c} !important` },
            },
            ...(r.variant === "outlined" && {
              "& + .MuiOutlinedInput-root > fieldset > legend": {
                marginLeft: r.size === "small" ? 0 : r.size === "large" ? 6 : 4,
              },
            }),
          }
        );
      },
    },
  },
});
var Eo = (e) => ({
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ ownerState: r }) => {
        let o = r?.color;
        return {
          fontSize: "0.78rem",
          marginLeft: 14,
          marginTop: 4,
          color:
            (o === "success" || o === "warning" || o === "error" || o === "info") && e[o]
              ? e[o].main
              : e.text.secondary,
          "&.Mui-error": { color: e.error.main },
        };
      },
    },
  },
});
var $o = (e) => ({
    backdropFilter: "blur(48px) saturate(200%) brightness(105%)",
    WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(105%)",
    backgroundColor: e ? "rgba(20, 24, 32, 0.18)" : "rgba(255, 255, 255, 0.8)",
    backgroundImage: e
      ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)"
      : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(248,250,252,0.4) 100%)",
    border: e ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(255,255,255,0.6)",
    boxShadow: e
      ? "0 12px 36px rgba(0,0,0,0.45), inset 0 1px 1.5px rgba(255,255,255,0.18)"
      : "0 20px 50px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04), inset 0 1.5px 1.5px rgba(255,255,255,0.95)",
  }),
  cr = (e) => ({
    backgroundColor: e ? "rgba(18, 20, 26, 0.65) !important" : "rgba(246, 245, 242, 0.60) !important",
    backgroundImage: e
      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 100%) !important",
    backdropFilter: "blur(24px) saturate(180%) !important",
    WebkitBackdropFilter: "blur(24px) saturate(180%) !important",
    borderTop: "none !important",
    borderLeft: "none !important",
    borderRight: "none !important",
    borderBottom: `1px solid ${e ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"} !important`,
    boxShadow: e
      ? "0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3) !important"
      : "0 4px 20px -2px rgba(17, 17, 17, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02) !important",
    borderRadius: "0 !important",
  }),
  Pe = (e) => ({
    borderRadius: "18px !important",
    backgroundColor: e ? "rgba(18, 20, 26, 0.05) !important" : "rgba(255, 255, 255, 0.08) !important",
    backgroundImage: e
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important",
    backdropFilter: "blur(30px) saturate(190%) !important",
    WebkitBackdropFilter: "blur(30px) saturate(190%) !important",
    border: `1px solid ${e ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"} !important`,
    boxShadow: e
      ? "0 24px 50px rgba(0, 0, 0, 0.65), 0 6px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important"
      : "0 20px 48px -4px rgba(0, 0, 0, 0.10), 0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6) !important",
    padding: "6px !important",
    maxHeight: "320px",
    overflowY: "auto",
    overflowX: "hidden",
    transition: "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important",
    transformOrigin: "top center !important",
  });
var Go = (e, r) => ({
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          "& .MuiPaper-root": { ...Pe(r), maxHeight: "320px !important", overflowY: "auto !important" },
          "& .MuiList-root": {
            backgroundColor: "transparent !important",
            backgroundImage: "none !important",
            padding: "4px !important",
          },
          "& .MuiMenuItem-root": {
            minHeight: "28px",
            padding: "5px 10px",
            fontSize: "0.8125rem",
            borderRadius: "8px",
            color: e.text.primary,
            transition: "all 0.15s ease",
            gap: "8px",
            "&:hover": { backgroundColor: `${e.glass.menuItemHover} !important` },
            "&.Mui-selected": {
              backgroundColor: `${e.action.selected} !important`,
              color: `${e.primary.main} !important`,
              fontWeight: 600,
              "&:hover": { backgroundColor: `${e.glass.menuItemHover} !important` },
            },
          },
        },
      },
    },
    styleOverrides: { icon: { color: e.text.secondary, transition: "transform 0.2s ease, color 0.2s ease" } },
  },
});
var Vo = (e, r) => ({
  MuiAutocomplete: {
    defaultProps: { slotProps: { paper: { elevation: 0 } } },
    styleOverrides: {
      popper: { zIndex: 1400 },
      paper: { ...Pe(r) },
      input: { "@media (max-width: 599.95px)": { fontSize: "16px" } },
      listbox: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",
        padding: "4px !important",
      },
      option: {
        borderRadius: 10,
        padding: "7px 12px",
        margin: "1px 0",
        fontSize: "0.875rem",
        color: e.text.primary,
        transition: "all 0.15s ease",
        '&[data-focus="true"]': { backgroundColor: `${e.glass.menuItemHover} !important` },
        '&[aria-selected="true"]': {
          backgroundColor: `${e.action.selected} !important`,
          color: `${e.primary.main} !important`,
          fontWeight: 600,
          '&[data-focus="true"]': { backgroundColor: `${e.action.selected} !important` },
        },
      },
      noOptions: {
        color: e.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important",
      },
      loading: {
        color: e.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important",
      },
      tag: { margin: "3px" },
      clearIndicator: { color: e.text.secondary, "&:hover": { color: e.text.primary } },
      popupIndicator: { color: e.text.secondary, "&:hover": { color: e.text.primary } },
    },
  },
});
var gr = "cubic-bezier(0.16, 1, 0.3, 1)",
  jo = [
    `background-color 180ms ${gr}`,
    `border-color 180ms ${gr}`,
    `box-shadow 220ms ${gr}`,
    `color 180ms ${gr}`,
    `transform 180ms ${gr}`,
  ].join(", "),
  Ra = (e, r) => {
    let o = typeof r == "string" && r !== "standard" && r !== "inherit" && r in e ? r : "primary";
    return e[o] || e.primary;
  },
  Jo = (e, r) => ({
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ ownerState: o }) => {
          let a = typeof o.color == "string" ? o.color : "primary",
            i = Ra(e, a),
            s = i.main,
            l = i.hover || s,
            c = i.active || l,
            p = i.disabled || s,
            d = i.contrastText || t.white,
            u = i.glow || (r ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.1)"),
            b = a === "glass" || a === "dark-glass",
            g = a === "dark-glass" || r;
          return {
            backgroundColor: r ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.04)",
            borderRadius: 8,
            padding: 4,
            gap: 4,
            boxShadow: r ? "inset 0 1px 1px rgba(255,255,255,0.05)" : "inset 0 1px 2px rgba(17,17,17,0.05)",
            "& .MuiToggleButtonGroup-grouped": {
              margin: 0,
              border: "none",
              borderRadius: "6px !important",
              transition: jo,
              color: r ? "rgba(255,255,255,0.65)" : "rgba(17,17,17,0.65)",
              "&:not(:first-of-type)": { border: "none", borderRadius: "6px !important" },
              "&:first-of-type": { borderRadius: "6px !important" },
              "&:last-of-type": { borderRadius: "6px !important" },
              "&:hover": {
                backgroundColor: r ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.06)",
                color: s,
                transform: "translateY(-1px)",
                zIndex: 1,
              },
              "&:active": {
                backgroundColor: r ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.08)",
                transform: "translateY(0) scale(0.985)",
              },
              "&.Mui-selected": {
                backgroundColor: b ? (g ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.72)") : s,
                color: b ? (g ? t.brand.cream : t.brand.charcoal) : d,
                boxShadow: b
                  ? g
                    ? "0 6px 20px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.18)"
                    : "0 6px 18px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.9)"
                  : `0 4px 14px ${u}, inset 0 1px 1px rgba(255,255,255,0.2)`,
                zIndex: 1,
                "&:hover": {
                  backgroundColor: b ? (g ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.9)") : l,
                  color: b ? (g ? t.brand.cream : t.brand.charcoal) : d,
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  backgroundColor: b ? (g ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.78)") : c,
                  transform: "translateY(0) scale(0.985)",
                },
                "&:focus-visible": { outline: "none", boxShadow: `0 0 0 3px ${u}` },
              },
              "&:focus-visible": { outline: "none", boxShadow: `0 0 0 3px ${u}`, zIndex: 2 },
              "&.Mui-disabled": {
                color: r ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.3)",
                backgroundColor: "transparent",
                boxShadow: "none",
                transform: "none",
                cursor: "default",
                "&.Mui-selected": {
                  backgroundColor: b ? (r ? "rgba(255,255,255,0.05)" : "rgba(17,17,17,0.04)") : p,
                  color: b
                    ? r
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(17,17,17,0.3)"
                    : r
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(255,255,255,0.7)",
                  boxShadow: "none",
                  transform: "none",
                },
              },
            },
            "@media (prefers-reduced-motion: reduce)": {
              "& .MuiToggleButtonGroup-grouped": {
                transition: "none",
                "&:hover": { transform: "none" },
                "&:active": { transform: "none" },
                "&.Mui-selected:hover": { transform: "none" },
                "&.Mui-selected:active": { transform: "none" },
              },
            },
          };
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          lineHeight: 1.2,
          padding: "6px 12px",
          minHeight: 32,
          boxSizing: "border-box",
          border: "none",
          borderRadius: 6,
          backgroundColor: "transparent",
          transition: jo,
          position: "relative",
        },
      },
    },
  });
var No = (e, r) => ({
  ...Po(e, r),
  ...Oo(r),
  ...Jo(e, r),
  ...Ao(e),
  ...Ho(e, r),
  ...Wo(e),
  ...Eo(e),
  ...Go(e, r),
  ...Vo(e, r),
});
var Sr = (e, r, o, a) => {
    if (e === "glass")
      return {
        active: r ? "#F6F5F2" : "#111111",
        glow: r ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.08)",
        track: r ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.45)",
      };
    if (e === "secondary")
      return {
        active: r ? "#A0A09B" : t.brand.stone,
        glow: r ? "rgba(160, 160, 155, 0.3)" : "rgba(104, 104, 104, 0.25)",
        track: r ? "#8A8A82" : t.brand.stone,
      };
    if (e === "accent") return { active: o.accent.main, glow: o.accent.glow, track: o.accent.main };
    if (e === "default")
      return {
        active: r ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 17, 17, 0.65)",
        glow: r ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.08)",
        track: r ? "rgba(255, 255, 255, 0.45)" : "rgba(17, 17, 17, 0.45)",
      };
    let i = a.palette[e];
    return {
      active: i?.main || o.primary.main,
      glow: i?.glow || `${i?.main}40` || o.primary.glow,
      track: i?.main || o.primary.main,
    };
  },
  Yo = (e, r) => ({
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState: o, theme: a }) => {
          let i = o.color || "primary",
            s = i === "glass",
            l = Sr(i, r, e, a);
          return {
            borderRadius: 8,
            color: r ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
            padding: 8,
            transition: "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
            "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)" },
            "&.Mui-checked, &.MuiCheckbox-indeterminate": {
              color: l.active,
              ...(s && {
                filter: r
                  ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))"
                  : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))",
              }),
            },
            "&.Mui-focusVisible": { boxShadow: `0 0 0 3px ${l.glow}` },
            "&.Mui-disabled": { color: r ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)" },
          };
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState: o, theme: a }) => {
          let i = o.color || "primary",
            s = i === "glass",
            l = Sr(i, r, e, a);
          return {
            color: r ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
            padding: 8,
            transition: "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
            "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)" },
            "&.Mui-checked": {
              color: l.active,
              ...(s && {
                filter: r
                  ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))"
                  : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))",
              }),
            },
            "&.Mui-focusVisible": { boxShadow: `0 0 0 3px ${l.glow}` },
            "&.Mui-disabled": { color: r ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)" },
          };
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ ownerState: o, theme: a }) => {
          let i = o.color || "primary",
            s = i === "glass",
            l = Sr(i, r, e, a),
            c = s ? "#FFFFFF" : i === "primary" && r ? "#1D1D1F" : t.white;
          return {
            width: 44,
            height: 24,
            padding: 0,
            display: "flex",
            "& .MuiSwitch-switchBase": {
              padding: 3,
              color: r ? "#F6F5F2" : t.white,
              transitionDuration: "200ms",
              "&.Mui-checked": {
                transform: "translateX(20px)",
                color: c,
                "& + .MuiSwitch-track": {
                  backgroundColor: l.track,
                  opacity: 1,
                  border: s ? `1px solid ${r ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.2)"}` : 0,
                  ...(s && { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }),
                },
                "&.Mui-disabled": {
                  color: r ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                  "& + .MuiSwitch-track": { opacity: 0.3 },
                },
              },
              "&.Mui-disabled": {
                color: r ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                "& + .MuiSwitch-track": { opacity: 0.3 },
              },
              "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)" },
            },
            "& .MuiSwitch-thumb": {
              width: 18,
              height: 18,
              borderRadius: 9,
              boxShadow: r ? "0 2px 6px rgba(0, 0, 0, 0.6)" : "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              ...(s && { border: r ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.8)" }),
            },
            "& .MuiSwitch-track": {
              borderRadius: 24 / 2,
              backgroundColor: r ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.14)",
              opacity: 1,
              border: r ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.06)",
              transition:
                "background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          };
        },
        sizeSmall: {
          width: 34,
          height: 18,
          padding: 0,
          "& .MuiSwitch-switchBase": { padding: 2, "&.Mui-checked": { transform: "translateX(16px)" } },
          "& .MuiSwitch-thumb": { width: 14, height: 14, borderRadius: 7 },
          "& .MuiSwitch-track": { borderRadius: 18 / 2 },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ ownerState: o, theme: a }) => {
          let i = o.color || "primary",
            l = Sr(i, r, e, a);
          return {
            color: l.active,
            height: 6,
            padding: "13px 0",
            "& .MuiSlider-thumb": {
              height: 16,
              width: 16,
              backgroundColor: r ? "#1E2025" : "#FFFFFF",
              border: `2px solid ${l.active}`,
              boxShadow: r ? "0 2px 6px rgba(0, 0, 0, 0.5)" : "0 2px 6px rgba(0, 0, 0, 0.15)",
              transition: "box-shadow 0.15s ease",
              "&:hover, &.Mui-focusVisible": { boxShadow: `0px 0px 0px 6px ${l.glow}` },
              "&.Mui-active": { boxShadow: `0px 0px 0px 9px ${l.glow}` },
              "&::before": { display: "none" },
            },
            "& .MuiSlider-track": { border: "none", height: 6, borderRadius: 3, backgroundColor: l.track },
            "& .MuiSlider-rail": {
              opacity: 1,
              backgroundColor: r ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.12)",
              height: 6,
              borderRadius: 3,
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: r ? "rgba(30, 32, 38, 0.9)" : "rgba(17, 17, 17, 0.9)",
              borderRadius: 6,
              fontSize: "0.75rem",
              fontWeight: 600,
              backdropFilter: "blur(8px)",
            },
          };
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          gap: "10px",
          userSelect: "none",
          "& .MuiFormControlLabel-label": { fontSize: "0.875rem", fontWeight: 500, color: e.text.primary },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: "6px 16px",
          border: `1px solid ${e.glass.paperBorder}`,
          color: e.text.secondary,
          transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
          "&.Mui-selected": {
            backgroundColor: e.secondary.main,
            color: e.secondary.contrastText,
            "&:hover": { backgroundColor: e.secondary.hover },
          },
        },
      },
    },
  });
var za = (e) =>
    G__default.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        style: { width: "1em", height: "1em", ...e.style },
      },
      G__default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      G__default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    ),
  _o = (e, r) => {
    let o = (a) => {
      let i = {
        info: {
          main: "#4285F4",
          hover: r ? "#5A95F5" : "#3367D6",
          active: r ? "#3367D6" : "#2A56C6",
          disabled: r ? "rgba(66, 133, 244, 0.3)" : "rgba(66, 133, 244, 0.25)",
          glow: "rgba(66, 133, 244, 0.35)",
          text: "#FFFFFF",
        },
        warning: {
          main: "#E67700",
          hover: r ? "#EE881E" : "#C96800",
          active: r ? "#C96800" : "#A85700",
          disabled: r ? "rgba(230, 119, 0, 0.3)" : "rgba(230, 119, 0, 0.25)",
          glow: "rgba(230, 119, 0, 0.35)",
          text: "#FFFFFF",
        },
        error: {
          main: "#EA4335",
          hover: r ? "#ED594D" : "#C5221F",
          active: r ? "#C5221F" : "#A51D1A",
          disabled: r ? "rgba(234, 67, 53, 0.3)" : "rgba(234, 67, 53, 0.25)",
          glow: "rgba(234, 67, 53, 0.35)",
          text: "#FFFFFF",
        },
        success: {
          main: "#34A853",
          hover: r ? "#45B463" : "#278A42",
          active: r ? "#278A42" : "#1E7034",
          disabled: r ? "rgba(52, 168, 83, 0.3)" : "rgba(52, 168, 83, 0.25)",
          glow: "rgba(52, 168, 83, 0.35)",
          text: "#FFFFFF",
        },
      };
      if (i[a]) return i[a];
      if (a === "glass")
        return {
          main: r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.68)",
          hover: r ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.88)",
          active: r ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.75)",
          disabled: r ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.3)",
          glow: r ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.08)",
          text: r ? "#F6F5F2" : "#111111",
        };
      let s = e[a] || e.primary;
      return {
        main: s.main,
        hover: s.hover,
        active: s.active,
        disabled: s.disabled,
        glow: s.glow,
        text: s.contrastText || "#FFFFFF",
      };
    };
    return {
      MuiChip: {
        defaultProps: { deleteIcon: G__default.createElement(za) },
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
                marginRight: "7px",
              },
              "& .MuiChip-avatar": {
                width: 24,
                height: 24,
                marginLeft: "-3px",
                marginRight: "6px",
                fontSize: "0.7rem",
              },
              "& .MuiChip-icon": { fontSize: "18px", marginLeft: "-2px", marginRight: "6px" },
              "& .MuiChip-deleteIcon": { fontSize: "17px", marginLeft: "6px", marginRight: "-1px" },
            },
          },
        ],
        styleOverrides: {
          root: ({ ownerState: a }) => {
            let i = a.color ?? "default",
              s = a.variant ?? "filled",
              l = i === "glass",
              c = i === "primary",
              p = i === "secondary",
              d = !c && !p && !l && i !== "default",
              u = o(i === "default" ? "primary" : i);
            return {
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 9999,
              height: 28,
              fontWeight: 500,
              fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
              fontSize: "0.76rem",
              letterSpacing: "0.02em",
              lineHeight: 1,
              padding: "0 11px",
              cursor: "default",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              userSelect: "none",
              "& .MuiChip-label": { color: "inherit", display: "inline-flex", alignItems: "center", padding: 0 },
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
                opacity: 0.9,
              },
              "& .MuiChip-deleteIcon": {
                fontSize: "15px",
                marginLeft: "5px",
                marginRight: "-2px",
                opacity: 0.75,
                transition: "opacity 0.15s ease, transform 0.15s ease",
                color: "inherit",
                cursor: "pointer",
                "&:hover": { opacity: 1, transform: "scale(1.15)", color: "inherit" },
              },
              "& .MuiChip-avatar": {
                width: 20,
                height: 20,
                marginLeft: "-3px",
                marginRight: "6px",
                fontSize: "0.65rem",
                fontWeight: 700,
              },
              "& .MuiChip-icon": {
                fontSize: "16px",
                marginLeft: "-2px",
                marginRight: "6px",
                color: "inherit",
                opacity: 0.85,
              },
              ...(s === "filled" &&
                c && {
                  backgroundColor: r ? "#F6F5F2" : "#111111",
                  color: r ? "#111111" : "#FFFFFF",
                  border: "1px solid transparent",
                  boxShadow: r
                    ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "#E8E7E4" : "#2A2A2A",
                    transform: "translateY(-1px)",
                    boxShadow: r ? "0 6px 16px rgba(0,0,0,0.4)" : "0 6px 14px rgba(0,0,0,0.12)",
                  },
                  "&.MuiChip-clickable:active": {
                    backgroundColor: r ? "#D9D8D4" : "#1A1A1A",
                    transform: "translateY(0) scale(0.98)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: r ? "rgba(255,255,255,0.12)" : "#EBEBEB",
                    color: r ? "rgba(255,255,255,0.3)" : "#A0A0A0",
                    boxShadow: "none",
                    opacity: 1,
                  },
                }),
              ...(s === "filled" &&
                p && {
                  backgroundColor: r ? "rgba(255,255,255,0.1)" : "#F6F5F2",
                  color: r ? "#F6F5F2" : "#111111",
                  border: `1px solid ${r ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: r ? "0 2px 8px rgba(0,0,0,0.25)" : "0 2px 6px rgba(0,0,0,0.04)",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255,255,255,0.16)" : "#EDECE8",
                    transform: "translateY(-1px)",
                  },
                  "&.MuiChip-clickable:active": {
                    backgroundColor: r ? "rgba(255,255,255,0.22)" : "#D9D9CF",
                    transform: "translateY(0) scale(0.98)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: r ? "rgba(255,255,255,0.05)" : "rgba(246,245,242,0.6)",
                    color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                    boxShadow: "none",
                    opacity: 1,
                  },
                }),
              ...(s === "filled" &&
                l && {
                  backgroundColor: r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.68)",
                  color: r ? "#F6F5F2" : "#111111",
                  border: `1px solid ${r ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.85)"}`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: r
                    ? "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"
                    : "0 3px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.88)",
                    transform: "translateY(-1px)",
                    boxShadow: r
                      ? "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 6px 18px rgba(0,0,0,0.08), inset 0 1px 0 #FFFFFF",
                  },
                  "&.MuiChip-clickable:active": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.75)",
                    transform: "translateY(0) scale(0.98)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.3)",
                    color: r ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)",
                    border: `1px solid ${r ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)"}`,
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    opacity: 1,
                  },
                }),
              ...(s === "filled" &&
                d && {
                  backgroundColor: u.main,
                  color: u.text,
                  border: "1px solid transparent",
                  boxShadow: r ? "0 2px 8px rgba(0,0,0,0.3)" : `0 2px 6px ${u.glow}`,
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: u.hover,
                    transform: "translateY(-1px)",
                    boxShadow: r ? "0 6px 16px rgba(0,0,0,0.4)" : `0 6px 14px ${u.glow}`,
                  },
                  "&.MuiChip-clickable:active": { backgroundColor: u.active, transform: "translateY(0) scale(0.98)" },
                  "&.Mui-disabled": {
                    backgroundColor: u.disabled,
                    color: r ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.5)",
                    boxShadow: "none",
                    opacity: 1,
                  },
                }),
              ...(s === "filled" &&
                i === "default" && {
                  backgroundColor: r ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.05)",
                  border: `1px solid ${r ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
                  color: e.text.primary,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: r ? "0 2px 8px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.04)",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.08)",
                    transform: "translateY(-1px)",
                  },
                  "&.MuiChip-clickable:active": {
                    backgroundColor: r ? "rgba(255,255,255,0.16)" : "rgba(17,17,17,0.12)",
                    transform: "translateY(0) scale(0.98)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: r ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                    color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                    boxShadow: "none",
                    opacity: 1,
                  },
                }),
              ...(s === "outlined" &&
                c && {
                  backgroundColor: "transparent",
                  border: `1.5px solid ${r ? "#F6F5F2" : "#111111"}`,
                  color: r ? "#F6F5F2" : "#111111",
                  boxShadow: "none",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(246,245,242,0.08)" : "rgba(17,17,17,0.06)",
                    transform: "translateY(-1px)",
                    boxShadow: r ? "0 4px 12px rgba(0,0,0,0.25)" : "0 4px 10px rgba(0,0,0,0.07)",
                  },
                  "&.Mui-disabled": {
                    borderColor: r ? "rgba(246,245,242,0.2)" : "rgba(17,17,17,0.2)",
                    color: r ? "rgba(246,245,242,0.3)" : "rgba(17,17,17,0.3)",
                    opacity: 1,
                  },
                }),
              ...(s === "outlined" &&
                p && {
                  backgroundColor: "transparent",
                  border: `1.5px solid ${r ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.2)"}`,
                  color: r ? "#F6F5F2" : "#111111",
                  boxShadow: "none",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                    transform: "translateY(-1px)",
                  },
                  "&.Mui-disabled": {
                    borderColor: r ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)",
                    color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                    opacity: 1,
                  },
                }),
              ...(s === "outlined" &&
                l && {
                  backgroundColor: r ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.28)",
                  border: `1.5px solid ${r ? "rgba(255, 255, 255, 0.22)" : "rgba(17, 17, 17, 0.16)"}`,
                  color: r ? "#F6F5F2" : "#111111",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: r ? "0 2px 10px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.03)",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.55)",
                    borderColor: r ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
                    transform: "translateY(-1px)",
                    boxShadow: r ? "0 6px 18px rgba(0,0,0,0.35)" : "0 4px 14px rgba(0,0,0,0.06)",
                  },
                  "&.MuiChip-clickable:active": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.4)",
                    transform: "translateY(0) scale(0.98)",
                  },
                  "&.Mui-disabled": {
                    borderColor: r ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)",
                    color: r ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.25)",
                    backgroundColor: "transparent",
                    opacity: 1,
                  },
                }),
              ...(s === "outlined" &&
                d && {
                  backgroundColor: "transparent",
                  border: `1.5px solid ${u.main}`,
                  color: u.main,
                  boxShadow: "none",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r
                      ? `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"},0.12)`
                      : `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"},0.07)`,
                    transform: "translateY(-1px)",
                    boxShadow: r ? "0 4px 12px rgba(0,0,0,0.25)" : "0 4px 10px rgba(0,0,0,0.07)",
                  },
                  "&.Mui-disabled": { borderColor: u.disabled, color: u.disabled, opacity: 1 },
                }),
              ...(s === "outlined" &&
                i === "default" && {
                  backgroundColor: "transparent",
                  border: `1.5px solid ${r ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.25)"}`,
                  color: e.text.primary,
                  boxShadow: "none",
                  "&.MuiChip-clickable:hover": {
                    backgroundColor: r ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                    transform: "translateY(-1px)",
                  },
                  "&.Mui-disabled": {
                    borderColor: r ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)",
                    color: r ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                    opacity: 1,
                  },
                }),
              ...(s === "tonal" && {
                backgroundColor: l
                  ? r
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.45)"
                  : c
                    ? r
                      ? "rgba(246, 245, 242, 0.12)"
                      : "rgba(17, 17, 17, 0.07)"
                    : p
                      ? r
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(17, 17, 17, 0.05)"
                      : d
                        ? r
                          ? `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.2)`
                          : `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.1)`
                        : r
                          ? "rgba(255, 255, 255, 0.07)"
                          : "rgba(17, 17, 17, 0.05)",
                color: l || c || p ? (r ? "#F6F5F2" : "#111111") : d ? u.main : e.text.primary,
                border: `1px solid ${l ? (r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.6)") : r ? (d ? `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.25)` : "rgba(255,255,255,0.08)") : d ? `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.15)` : "rgba(17,17,17,0.08)"}`,
                ...(l && { backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }),
                boxShadow: "none",
                "&.MuiChip-clickable:hover": {
                  backgroundColor: l
                    ? r
                      ? "rgba(255, 255, 255, 0.14)"
                      : "rgba(255, 255, 255, 0.7)"
                    : c
                      ? r
                        ? "rgba(246, 245, 242, 0.18)"
                        : "rgba(17, 17, 17, 0.12)"
                      : p
                        ? r
                          ? "rgba(255, 255, 255, 0.12)"
                          : "rgba(17, 17, 17, 0.09)"
                        : d
                          ? r
                            ? `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.28)`
                            : `rgba(${i === "info" ? "66,133,244" : i === "warning" ? "230,119,0" : i === "error" ? "234,67,53" : "52,168,83"}, 0.16)`
                          : r
                            ? "rgba(255, 255, 255, 0.12)"
                            : "rgba(17, 17, 17, 0.08)",
                  transform: "translateY(-1px)",
                },
                "&.MuiChip-clickable:active": { transform: "translateY(0) scale(0.98)" },
                "&.Mui-disabled": { opacity: 0.45 },
              }),
              ...(a.size === "large" && {
                height: 32,
                fontSize: "0.82rem",
                padding: "0 12px",
                "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
                  width: 10,
                  height: 10,
                  borderWidth: "2px",
                  marginRight: "7px",
                },
                "& .MuiChip-avatar": {
                  width: 24,
                  height: 24,
                  marginLeft: "-3px",
                  marginRight: "6px",
                  fontSize: "0.7rem",
                },
                "& .MuiChip-icon": { fontSize: "18px", marginLeft: "-2px", marginRight: "6px" },
                "& .MuiChip-deleteIcon": { fontSize: "17px", marginLeft: "6px", marginRight: "-1px" },
              }),
            };
          },
          sizeSmall: {
            height: 24,
            fontSize: "0.68rem",
            padding: "0 8px",
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
              width: 7,
              height: 7,
              borderWidth: "1.5px",
              marginRight: "5px",
            },
            "& .MuiChip-avatar": { width: 16, height: 16, marginLeft: "-3px", marginRight: "4px", fontSize: "0.55rem" },
            "& .MuiChip-icon": { fontSize: "14px", marginLeft: "-1px", marginRight: "4px" },
            "& .MuiChip-deleteIcon": { fontSize: "14px", marginLeft: "4px", marginRight: "-1px" },
          },
          sizeMedium: {
            height: 28,
            fontSize: "0.76rem",
            padding: "0 11px",
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before": {
              width: 8.5,
              height: 8.5,
              borderWidth: "1.75px",
              marginRight: "6px",
            },
          },
        },
      },
    };
  };
var Xo = (e, r) => ({
  MuiAvatar: {
    styleOverrides: {
      root: ({ ownerState: o }) => {
        let a = o.variant === "glass",
          i = o.variant === "rounded";
        return {
          fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
          fontWeight: 700,
          fontSize: "0.9375rem",
          letterSpacing: "-0.01em",
          border: `1.5px solid ${r ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.85)"}`,
          backgroundColor: r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.65)",
          color: r ? "#F6F5F2" : "#111111",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: r
            ? "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.18)"
            : "0 4px 16px rgba(17, 17, 17, 0.06), inset 0 1px 1.5px rgba(255, 255, 255, 0.95)",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          ...(i && { borderRadius: "28%" }),
          ...(a && {
            backgroundColor: r ? "rgba(255, 255, 255, 0.08) !important" : "rgba(255, 255, 255, 0.45) !important",
            backdropFilter: "blur(20px) saturate(190%) !important",
            WebkitBackdropFilter: "blur(20px) saturate(190%) !important",
            border: `1.5px solid ${r ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.95)"} !important`,
          }),
          "& .MuiAvatar-img": { borderRadius: "inherit" },
        };
      },
    },
  },
  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        "& .MuiAvatar-root": {
          border: `2px solid ${r ? "rgba(20, 24, 32, 0.85)" : "rgba(255, 255, 255, 0.95)"}`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: r ? "0 2px 8px rgba(0, 0, 0, 0.4)" : "0 2px 8px rgba(0, 0, 0, 0.06)",
          marginLeft: -8,
          "&:first-of-type": { marginLeft: 0 },
        },
        "& .MuiAvatar-root:last-child": {
          backgroundColor: r ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
          color: r ? "#F6F5F2" : "#111111",
          fontWeight: 700,
          fontSize: "0.82rem",
        },
      },
    },
  },
});
var Uo = (e) => ({ MuiDivider: { styleOverrides: { root: { borderColor: e.divider } } } });
var qo = (e, r) => ({
  MuiBadge: {
    styleOverrides: {
      badge: ({ ownerState: o }) => {
        let a = o.color || "primary",
          i = a === "glass",
          s = o.variant === "dot",
          l = e[a] || e.primary;
        return s
          ? {
              height: 10,
              width: 10,
              minWidth: 10,
              borderRadius: "50%",
              backgroundColor: i ? (r ? "#F6F5F2" : "#111111") : l.main,
              border: `2px solid ${r ? "#12141A" : "#FFFFFF"}`,
              boxShadow: i
                ? r
                  ? "0 0 8px rgba(255, 255, 255, 0.5)"
                  : "0 0 6px rgba(0, 0, 0, 0.3)"
                : `0 0 8px ${l.glow || l.main}`,
            }
          : i
            ? {
                backgroundColor: r ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.75)",
                color: r ? "#F6F5F2" : "#111111",
                border: `1px solid ${r ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.9)"}`,
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                boxShadow: r
                  ? "0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.25)"
                  : "0 4px 12px rgba(17, 17, 17, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
                fontWeight: 700,
                fontSize: "0.72rem",
                height: 20,
                minWidth: 20,
                borderRadius: 10,
                padding: "0 6px",
              }
            : {
                backgroundColor: l.main,
                color: l.contrastText || "#FFFFFF",
                border: `1.5px solid ${r ? "rgba(20, 24, 32, 0.9)" : "rgba(255, 255, 255, 0.95)"}`,
                boxShadow: `0 2px 8px ${l.glow || "rgba(0, 0, 0, 0.15)"}`,
                fontWeight: 700,
                fontSize: "0.72rem",
                height: 20,
                minWidth: 20,
                borderRadius: 10,
                padding: "0 6px",
              };
      },
    },
  },
});
var Zo = (e) => ({
  MuiTypography: {
    styleOverrides: {
      root: ({ ownerState: r }) => {
        let o = r.color,
          a = "linear-gradient(135deg, #111111 0%, #686868 100%)",
          i = "linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)";
        return o === "glass-surface"
          ? { color: e ? "#FFFFFF !important" : "#000000 !important" }
          : o === "glass"
            ? {
                background: e
                  ? "linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.68) 100%)"
                  : "linear-gradient(135deg, #111111 0%, rgba(17, 17, 17, 0.68) 100%)",
                WebkitBackgroundClip: "text !important",
                WebkitTextFillColor: "transparent !important",
                textShadow: e ? "0 2px 12px rgba(255, 255, 255, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.08)",
              }
            : o === "gradient"
              ? {
                  background: e ? i : a,
                  WebkitBackgroundClip: "text !important",
                  WebkitTextFillColor: "transparent !important",
                  backgroundClip: "text !important",
                }
              : {};
      },
    },
  },
});
var Ko = (e, r) => ({ ..._o(e, r), ...Xo(e, r), ...Uo(e), ...qo(e, r), ...Zo(r) });
var Qo = (e, r) => {
  let o = { square: 0, small: 8, medium: 12, large: 18, rounded: 24, pill: 9999 },
    a = { subtle: "blur(8px)", medium: "blur(14px)", strong: "blur(20px)", ultra: "blur(28px)" },
    i = (l) => {
      switch (l) {
        case "success":
          return e.success;
        case "warning":
          return e.warning;
        case "error":
          return e.error;
        default:
          return e.info;
      }
    },
    s = (l) => {
      switch (l) {
        case "success":
          return t.alertRgb.success;
        case "warning":
          return r ? t.alertRgb.warningDark : t.alertRgb.warningLight;
        case "error":
          return t.alertRgb.error;
        default:
          return t.alertRgb.info;
      }
    };
  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState: l }) => {
          let c = l.severity ?? "info",
            p = l.color ?? "glass",
            d = l.appearance ?? "glass",
            u = l.radius ?? "large",
            b = l.glassIntensity ?? "strong",
            g = l.glow ?? true,
            y = i(c),
            x = p === "glass" ? y : e[p],
            f = x.main,
            w = s(c),
            k = r ? 0.12 : 0.08,
            S = e.glass.alertBg;
          return (
            d === "solid" && (S = f),
            d === "tonal" && (S = `rgba(${w}, ${r ? 0.18 : 0.1})`),
            d === "glass" && (S = `rgba(${w}, ${k})`),
            d === "outlined" && (S = "transparent"),
            {
              position: "relative",
              overflow: "hidden",
              borderRadius: o[u],
              padding: "10px 16px",
              fontWeight: 500,
              fontSize: "0.9375rem",
              lineHeight: 1.5,
              color: d === "solid" ? x.contrastText : f,
              backgroundColor: S,
              border: "1px solid",
              borderColor:
                d === "outlined"
                  ? f
                  : d === "glass"
                    ? `rgba(${w}, ${r ? 0.32 : 0.22})`
                    : d === "tonal"
                      ? `rgba(${w}, ${r ? 0.3 : 0.2})`
                      : "transparent",
              backdropFilter: d === "glass" ? `saturate(180%) ${a[b]}` : void 0,
              WebkitBackdropFilter: d === "glass" ? `saturate(180%) ${a[b]}` : void 0,
              boxShadow:
                d === "glass"
                  ? r
                    ? "inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "inset 0 1px 0 rgba(255,255,255,0.65)"
                  : g && d !== "outlined"
                    ? `0 4px 18px rgba(${w}, ${r ? 0.16 : 0.08})`
                    : "none",
              "&::before":
                d === "glass"
                  ? {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      borderRadius: "inherit",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 55%)",
                      opacity: r ? 0.8 : 1,
                    }
                  : void 0,
              "& > *": { position: "relative", zIndex: 1 },
              "& .MuiAlert-icon": { color: d === "solid" ? x.contrastText : f, opacity: 1, paddingTop: 2 },
              "& .MuiAlert-message": { padding: "2px 0" },
              "& .MuiAlert-action": {
                paddingTop: 0,
                paddingRight: 0,
                "& .MuiIconButton-root": {
                  color: d === "solid" ? x.contrastText : f,
                  transition: "background-color 180ms ease, transform 180ms ease",
                  "&:hover": {
                    backgroundColor: d === "solid" ? "rgba(255,255,255,0.12)" : `rgba(${w}, ${r ? 0.12 : 0.08})`,
                  },
                  "&:active": { transform: "scale(0.94)" },
                },
              },
              "& .MuiAlertTitle-root": { marginBottom: 2, fontWeight: 700, color: d === "solid" ? x.contrastText : f },
            }
          );
        },
      },
    },
  };
};
var Do = (e, r) => ({
  MuiTooltip: {
    defaultProps: { arrow: true, placement: "top", enterDelay: 100, leaveDelay: 50 },
    styleOverrides: {
      tooltip: ({ ownerState: o }) => {
        let a = o.glass === "true" || o.glass === true,
          i = r ? "#F5F5F7" : "#111111",
          s = r ? "#111111" : "#FFFFFF",
          l = r ? "rgba(245, 245, 247, 0.82)" : "rgba(17, 17, 17, 0.78)",
          c = r ? "#111111" : "#FFFFFF",
          p = a
            ? r
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(255, 255, 255, 0.18)"
            : r
              ? "rgba(0, 0, 0, 0.12)"
              : "rgba(255, 255, 255, 0.12)",
          d = r ? "0 8px 28px rgba(0, 0, 0, 0.18)" : "0 12px 36px rgba(0, 0, 0, 0.45)";
        return {
          position: "relative",
          overflow: "hidden",
          borderRadius: 10,
          padding: "7px 13px",
          fontSize: "0.8125rem",
          fontWeight: 600,
          lineHeight: 1.35,
          backgroundColor: a ? l : i,
          color: a ? c : s,
          border: `1px solid ${p}`,
          boxShadow: d,
          ...(a && {
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: r
                ? "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 45%, transparent 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 45%, transparent 100%)",
              zIndex: 0,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              pointerEvents: "none",
              background: r ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.22)",
              zIndex: 2,
            },
          }),
          "& > *": { position: "relative", zIndex: 1 },
        };
      },
      arrow: ({ ownerState: o }) => {
        let a = o.glass === "true" || o.glass === true,
          i = a ? (r ? "rgba(245, 245, 247, 0.82)" : "rgba(17, 17, 17, 0.78)") : r ? "#F5F5F7" : "#111111";
        return {
          color: i,
          "&::before": {
            backgroundColor: i,
            border: `1px solid ${a ? (r ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.18)") : r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"}`,
          },
        };
      },
      popper: {
        "&[data-popper-placement*='top'] .MuiTooltip-tooltip": { transformOrigin: "bottom center" },
        "&[data-popper-placement*='bottom'] .MuiTooltip-tooltip": { transformOrigin: "top center" },
        "&[data-popper-placement*='left'] .MuiTooltip-tooltip": { transformOrigin: "right center" },
        "&[data-popper-placement*='right'] .MuiTooltip-tooltip": { transformOrigin: "left center" },
      },
    },
  },
});
var La = { square: 0, small: 8, medium: 12, large: 16, rounded: 20, pill: 24 },
  et = (e, r) => ({
    MuiDialog: {
      defaultProps: { disableScrollLock: false, radius: "small" },
      styleOverrides: {
        root: { "& .MuiDialog-container": { padding: { xs: 1.5, sm: 2, md: 3 } } },
        paper: ({ ownerState: o }) => {
          let a = o.glass === "true" || o.glass === true,
            i = o.radius ?? "large",
            s = o.fullScreen ? 0 : (La[i] ?? 20),
            l = r ? "#18181B" : "#FFFFFF",
            c = r ? "#F5F5F7" : "#111111",
            p = r ? "rgba(24, 24, 27, 0.49)" : "rgba(255, 255, 255, 0.52)",
            d = r ? "#F5F5F7" : "#111111",
            u = a
              ? r
                ? "rgba(255, 255, 255, 0.14)"
                : "rgba(255, 255, 255, 0.85)"
              : r
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.08)",
            b = r ? "0 24px 70px rgba(0, 0, 0, 0.45)" : "0 24px 70px rgba(0, 0, 0, 0.14)";
          return {
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderRadius: s,
            backgroundColor: a ? p : l,
            color: a ? d : c,
            border: `1px solid ${u}`,
            boxShadow: b,
            ...(a && {
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
            }),
            ...(a && {
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: r
                  ? `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.08) 0%,
                    rgba(255,255,255,0.025) 45%,
                    transparent 100%
                  )
                `
                  : `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.55) 0%,
                    rgba(255,255,255,0.12) 45%,
                    transparent 100%
                  )
                `,
                zIndex: 0,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                pointerEvents: "none",
                background: r ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.95)",
                zIndex: 2,
              },
            }),
            "& > *": { position: "relative", zIndex: 1 },
            "& .MuiDialogTitle-root": { color: "inherit" },
            "& .MuiDialogContent-root": { color: "inherit" },
            "& .MuiDialogContentText-root": {
              color: a
                ? r
                  ? "rgba(245,245,247,0.72)"
                  : "rgba(17,17,17,0.68)"
                : r
                  ? "rgba(245,245,247,0.70)"
                  : "rgba(17,17,17,0.68)",
            },
            "& .MuiDialogActions-root": { position: "relative", zIndex: 1 },
          };
        },
      },
    },
  });
var rt = (e, r) => ({
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: 1.3,
        letterSpacing: "-0.025em",
        padding: "20px 24px 10px",
        color: e.text.primary,
        "& + .MuiDialogContent-root": { paddingTop: 8 },
        "& .MuiIconButton-root": {
          width: 36,
          height: 36,
          borderRadius: 12,
          color: e.text.secondary,
          backgroundColor: r ? "rgba(255,255,255,.055)" : "rgba(17,17,17,.045)",
          border: `1px solid ${r ? "rgba(255,255,255,.08)" : "rgba(17,17,17,.08)"}`,
          transition: "all 180ms cubic-bezier(.2,.8,.2,1)",
          "&:hover": {
            color: e.text.primary,
            backgroundColor: r ? "rgba(255,255,255,.10)" : "rgba(17,17,17,.08)",
            transform: "scale(1.04)",
          },
          "&:active": { transform: "scale(.96)" },
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "14px 24px 20px",
        color: e.text.secondary,
        fontSize: "0.9375rem",
        lineHeight: 1.6,
        "&:first-of-type": { paddingTop: 16 },
        "&::-webkit-scrollbar": { width: 6 },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: r ? "rgba(255,255,255,.16)" : "rgba(17,17,17,.14)",
          borderRadius: 999,
        },
        "&::-webkit-scrollbar-track": { background: "transparent" },
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "14px 24px 20px",
        gap: 10,
        borderTop: `1px solid ${r ? "rgba(255,255,255,.07)" : "rgba(17,17,17,.07)"}`,
        "& > :not(style) ~ :not(style)": { marginLeft: 0 },
      },
    },
  },
});
var ot = (e, r) => {
  let o = { square: 0, small: 4, medium: 8, large: 12, rounded: 18, pill: 9999 },
    a = { thin: 3, small: 4, medium: 6, large: 8 },
    i = { subtle: "blur(8px)", medium: "blur(14px)", strong: "blur(20px)", ultra: "blur(28px)" },
    s = {
      primary: { main: e.primary.main, contrastText: e.primary.contrastText },
      secondary: { main: e.secondary.main, contrastText: e.secondary.contrastText },
      accent: { main: e.accent.main, contrastText: e.accent.contrastText },
      success: { main: e.success.main, contrastText: e.success.contrastText },
      info: { main: e.info.main, contrastText: e.info.contrastText },
      warning: { main: e.warning.main, contrastText: e.warning.contrastText },
      error: { main: e.error.main, contrastText: e.error.contrastText },
      glass: { main: e.glass.main, contrastText: e.glass.contrastText },
    },
    l = r ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
    c = r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.70)",
    p = r ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)";
  return {
    MuiLinearProgress: {
      defaultProps: { color: "glass" },
      styleOverrides: {
        root: ({ ownerState: d }) => {
          let u = d.color ?? "glass",
            b = d.appearance ?? "glass",
            g = d.radius ?? "pill",
            y = d.size ?? "medium",
            x = d.glassIntensity ?? "strong",
            f = s[u],
            w = l;
          return (
            b === "solid" && (w = r ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"),
            b === "tonal" &&
              (w =
                u === "glass"
                  ? l
                  : r
                    ? `color-mix(
                      in srgb,
                      ${f.main} 16%,
                      rgba(255,255,255,0.06)
                    )`
                    : `color-mix(
                      in srgb,
                      ${f.main} 10%,
                      rgba(0,0,0,0.045)
                    )`),
            b === "glass" && (w = c),
            b === "outlined" && (w = "transparent"),
            {
              position: "relative",
              width: "100%",
              height: a[y],
              minHeight: a[y],
              borderRadius: o[g],
              overflow: "hidden",
              boxSizing: "border-box",
              backgroundColor: w,
              border: b === "outlined" ? `1px solid ${f.main}` : b === "glass" ? `1px solid ${p}` : "none",
              backdropFilter: b === "glass" ? `saturate(180%) ${i[x]}` : void 0,
              WebkitBackdropFilter: b === "glass" ? `saturate(180%) ${i[x]}` : void 0,
              backgroundImage:
                b === "glass"
                  ? r
                    ? "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))"
                    : "linear-gradient(90deg, rgba(255,255,255,0.72), rgba(255,255,255,0.40))"
                  : void 0,
              [`& > .${linearProgressClasses.bar}`]: {
                display: "block",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                opacity: 1,
                visibility: "visible",
                borderRadius: o[g],
              },
              [`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar}`]: {
                opacity: 1,
                visibility: "visible",
                display: "block",
              },
              [`&.${linearProgressClasses.indeterminate} > .${linearProgressClasses.bar}`]: {
                opacity: 1,
                visibility: "visible",
                display: "block",
              },
              [`&.${linearProgressClasses.query} > .${linearProgressClasses.bar}`]: {
                opacity: 1,
                visibility: "visible",
                display: "block",
              },
              "&::before":
                b === "glass"
                  ? {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      borderRadius: "inherit",
                      background: "linear-gradient(90deg, rgba(255,255,255,0.12), transparent 50%)",
                      zIndex: 2,
                    }
                  : void 0,
              [`& > .${linearProgressClasses.bar}`]: {
                zIndex: 1,
                display: "block",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                opacity: 1,
                visibility: "visible",
                borderRadius: o[g],
              },
            }
          );
        },
        bar: ({ ownerState: d }) => {
          let u = d.color ?? "glass",
            b = d.appearance ?? "glass",
            g = d.radius ?? "pill",
            y = d.glow ?? true,
            x = s[u],
            f = u === "glass" ? (r ? "#F5F5F5" : "#111111") : x.main,
            w = u === "glass" ? (r ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.20)") : `${x.main}55`;
          return {
            position: "relative",
            display: "block",
            minWidth: "2px",
            borderRadius: o[g],
            backgroundColor: f,
            opacity: 1,
            visibility: "visible",
            backgroundImage:
              b === "glass"
                ? r
                  ? "linear-gradient(90deg, rgba(255,255,255,0.30), rgba(255,255,255,0.12))"
                  : "linear-gradient(90deg, rgba(0,0,0,0.16), rgba(0,0,0,0.07))"
                : "none",
            boxShadow: y ? `0 0 10px ${w}, 0 0 20px ${w}` : "none",
            transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), width 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                b === "glass"
                  ? r
                    ? "linear-gradient(90deg, rgba(255,255,255,0.24), rgba(255,255,255,0))"
                    : "linear-gradient(90deg, rgba(255,255,255,0.55), rgba(255,255,255,0))"
                  : "none",
              pointerEvents: "none",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              borderRadius: "inherit",
              background: b === "glass" ? (r ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.70)") : "transparent",
              pointerEvents: "none",
            },
          };
        },
        dashed: ({ ownerState: d }) => {
          let u = d.radius ?? "pill";
          return { borderRadius: o[u], opacity: 0.5 };
        },
      },
    },
  };
};
var tt = (e, r) => {
  let o = { square: 0, small: 6, medium: 10, large: 14, rounded: 20, pill: 9999 },
    a = { subtle: "blur(8px)", medium: "blur(14px)", strong: "blur(20px)", ultra: "blur(28px)" },
    i = {
      primary: { main: e.primary.main },
      secondary: { main: e.secondary.main },
      accent: { main: e.accent.main },
      success: { main: e.success.main },
      info: { main: e.info.main },
      warning: { main: e.warning.main },
      error: { main: e.error.main },
      glass: { main: e.glass.main },
    };
  return {
    MuiSkeleton: {
      defaultProps: { animation: "wave" },
      styleOverrides: {
        root: ({ ownerState: s }) => {
          let l = s.color ?? "glass",
            c = s.appearance ?? "glass",
            p = s.radius ?? "medium",
            d = s.glassIntensity ?? "strong",
            u = s.glow ?? true,
            b = i[l],
            g = e.glass.skeletonBg;
          return (
            c === "solid" && (g = r ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.07)"),
            c === "tonal" &&
              (g =
                l === "glass" ? e.glass.skeletonBg : `color-mix(in srgb, ${b.main} ${r ? "16%" : "9%"}, transparent)`),
            c === "glass" && (g = e.glass.skeletonBg),
            c === "outlined" && (g = "transparent"),
            {
              position: "relative",
              overflow: "hidden",
              borderRadius: o[p],
              backgroundColor: g,
              border:
                c === "outlined"
                  ? `1px solid ${b.main}`
                  : c === "glass"
                    ? `1px solid ${r ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)"}`
                    : "none",
              backdropFilter: c === "glass" ? `saturate(180%) ${a[d]}` : void 0,
              WebkitBackdropFilter: c === "glass" ? `saturate(180%) ${a[d]}` : void 0,
              boxShadow:
                c === "glass"
                  ? r
                    ? "inset 0 1px 0 rgba(255,255,255,0.07)"
                    : "inset 0 1px 0 rgba(255,255,255,0.55)"
                  : "none",
              backgroundImage:
                c === "glass"
                  ? r
                    ? "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015))"
                    : "linear-gradient(135deg, rgba(255,255,255,0.70), rgba(255,255,255,0.32))"
                  : void 0,
              "&::before":
                c === "glass"
                  ? {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      borderRadius: "inherit",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.16), transparent 50%)",
                      opacity: 0.9,
                    }
                  : void 0,
              ...(u && c !== "outlined" && l !== "glass"
                ? {
                    boxShadow: `0 0 18px color-mix(
                    in srgb,
                    ${b.main} ${r ? "18%" : "10%"},
                    transparent
                  )`,
                  }
                : {}),
              "&.MuiSkeleton-wave::after": {
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
                opacity: c === "glass" ? 1 : 0.65,
              },
              "&.MuiSkeleton-text": { borderRadius: o[p] },
              "&.MuiSkeleton-rounded": { borderRadius: o[p] },
              "&.MuiSkeleton-rectangular": { borderRadius: o[p] },
            }
          );
        },
      },
    },
  };
};
var at = (e, r) => ({ ...Qo(e, r), ...Do(e, r), ...et(e, r), ...rt(e, r), ...ot(e, r), ...tt(e, r) });
var Ia = (e, r, o) =>
    ({
      primary: {
        background: o ? "#161616" : "#FFFFFF",
        border: o ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.10)",
        hoverBackground: o ? "#1C1C1C" : "#FAFAFA",
        hoverBorder: o ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.16)",
      },
      secondary: {
        background: o ? "#202020" : "#F6F5F2",
        border: o ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)",
        hoverBackground: o ? "#262626" : "#F0EFEC",
        hoverBorder: o ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.14)",
      },
      accent: {
        background: e.accent.main,
        border: e.accent.main,
        hoverBackground: e.accent.hover,
        hoverBorder: e.accent.hover,
      },
      info: { background: e.info.main, border: e.info.main, hoverBackground: e.info.hover, hoverBorder: e.info.hover },
      success: {
        background: e.success.main,
        border: e.success.main,
        hoverBackground: e.success.hover,
        hoverBorder: e.success.hover,
      },
      warning: {
        background: e.warning.main,
        border: e.warning.main,
        hoverBackground: e.warning.hover,
        hoverBorder: e.warning.hover,
      },
      error: {
        background: e.error.main,
        border: e.error.main,
        hoverBackground: e.error.hover,
        hoverBorder: e.error.hover,
      },
      glass: {
        background: o ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.72)",
        border: o ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.10)",
        hoverBackground: o ? "rgba(255, 255, 255, 0.11)" : "rgba(255, 255, 255, 0.86)",
        hoverBorder: o ? "rgba(255, 255, 255, 0.20)" : "rgba(17, 17, 17, 0.14)",
      },
    })[r],
  it = (e, r) => ({
    MuiCard: {
      defaultProps: { color: "primary", radius: "medium" },
      styleOverrides: {
        root: ({ ownerState: o }) => {
          let a = o,
            s = a.glass === "true" || a.glass === true || a.color === "glass" ? "glass" : a.color || "primary",
            l = a.radius || "medium",
            c = a.hoverEffect === true || a.hoverEffect === "true",
            p = a.variant || "elevation",
            d = Ia(e, s, r),
            u = { none: 0, small: 6, medium: 10, large: 16, full: 9999 },
            b = s === "accent" || s === "info" || s === "success" || s === "warning" || s === "error",
            g = {
              position: "relative",
              overflow: "hidden",
              borderRadius: u[l],
              backgroundColor: d.background,
              backgroundImage: "none",
              boxShadow: "none",
              border: `1px solid ${d.border}`,
              transition: c
                ? [
                    "background-color 180ms ease",
                    "border-color 180ms ease",
                    "transform 180ms ease",
                    "box-shadow 180ms ease",
                  ].join(", ")
                : "none",
              "&.MuiPaper-elevation": { boxShadow: "none" },
              "&.MuiPaper-elevation0": { boxShadow: "none" },
              "&.MuiPaper-elevation1": { boxShadow: "none" },
              "&.MuiPaper-elevation2": { boxShadow: "none" },
              "&.MuiPaper-elevation3": { boxShadow: "none" },
              "&.MuiPaper-elevation4": { boxShadow: "none" },
              "&.MuiPaper-elevation5": { boxShadow: "none" },
              "&.MuiPaper-square": { borderRadius: 0 },
            };
          return (
            c &&
              ((g.cursor = "pointer"),
              (g["&:hover"] = {
                backgroundColor: d.hoverBackground,
                borderColor: d.hoverBorder,
                transform: "translateY(-2px)",
                boxShadow: r ? "0 8px 24px rgba(0, 0, 0, 0.28)" : "0 8px 24px rgba(0, 0, 0, 0.08)",
              }),
              (g["&:active"] = { transform: "translateY(-1px)" })),
            p === "tonal" &&
              ((g.backgroundColor = b
                ? r
                  ? `color-mix(in srgb, ${d.background} 16%, transparent)`
                  : `color-mix(in srgb, ${d.background} 8%, white)`
                : d.background),
              (g.borderColor = b
                ? r
                  ? `color-mix(in srgb, ${d.border} 35%, transparent)`
                  : `color-mix(in srgb, ${d.border} 20%, white)`
                : d.border),
              (g.boxShadow = "none")),
            s === "glass" && ((g.backdropFilter = "blur(14px)"), (g.WebkitBackdropFilter = "blur(14px)")),
            g
          );
        },
      },
      variants: [{ props: { variant: "tonal" }, style: { boxShadow: "none" } }],
    },
  });
var nt = (e, r) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: r ? "#161616" : "#FFFFFF",
        backgroundImage: "none",
        border: `1px solid ${r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"}`,
        boxShadow: "none",
        "&.MuiPopover-paper, &.MuiMenu-paper, &.MuiAutocomplete-paper": { ...Pe(r) },
        "&.MuiPaper-elevation": { boxShadow: "none" },
        "&.MuiPaper-elevation0": { boxShadow: "none" },
        "&.MuiPaper-elevation1": { boxShadow: "none" },
        "&.MuiPaper-elevation2": { boxShadow: "none" },
        "&.MuiPaper-elevation3": { boxShadow: "none" },
        "&.MuiPaper-elevation4": { boxShadow: "none" },
        "&.MuiPaper-elevation5": { boxShadow: "none" },
        "&.MuiPaper-square": { borderRadius: 0 },
      },
    },
    variants: [
      {
        props: { variant: "glassFooter" },
        style: {
          backgroundColor: e.glass.appBarBg,
          backgroundImage: "none",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: `1px solid ${e.glass.chipBorder}`,
          borderRight: "none",
          borderBottom: "none",
          borderLeft: "none",
          borderRadius: 0,
          paddingTop: "64px",
          paddingBottom: "32px",
          marginTop: "auto",
          color: e.text.primary,
          boxShadow: "none",
        },
      },
    ],
  },
});
var st = (e, r) => ({
  MuiAccordion: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        position: "relative",
        borderRadius: 12,
        backgroundColor: r ? "#161616" : "#FFFFFF",
        backgroundImage: "none",
        border: `1px solid ${r ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.09)"}`,
        boxShadow: "none",
        overflow: "hidden",
        transition: "background-color 180ms ease, border-color 180ms ease",
        "&:before": { display: "none" },
        "&:hover": {
          backgroundColor: r ? "#191919" : "#FCFCFC",
          borderColor: r ? "rgba(255, 255, 255, 0.13)" : "rgba(17, 17, 17, 0.13)",
        },
        "&.Mui-expanded": {
          margin: "8px 0",
          backgroundColor: r ? "#181818" : "#FAFAFA",
          borderColor: r ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.14)",
        },
        "&:first-of-type": { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
        "&:last-of-type": { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
      },
    },
  },
});
var lt = (e, r) => ({ ...it(e, r), ...nt(e, r), ...st(e, r) });
var dt = (e, r) => ({
  MuiAppBar: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        ...cr(r),
        color: e.text.primary,
        transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      },
      colorTransparent: { ...cr(r) },
      colorDefault: { ...cr(r) },
      colorInherit: { ...cr(r) },
    },
  },
});
var ct = () => ({
  MuiToolbar: {
    styleOverrides: {
      root: { minHeight: "56px !important", paddingLeft: "24px !important", paddingRight: "24px !important" },
    },
  },
});
var gt = (e) => ({
  MuiTabs: {
    defaultProps: { textColor: "secondary", indicatorColor: "secondary", size: "medium" },
    styleOverrides: {
      root: ({ ownerState: r }) => {
        let o = r.size === "small",
          a = r.variant === "scrollable",
          i = r.textColorOverride || r.textColor || "secondary",
          s = {
            primary: "#111111",
            secondary: "#111111",
            inherit: "inherit",
            accent: e ? "#111111" : "#FFFFFF",
            info: "#FFFFFF",
            success: "#FFFFFF",
            warning: "#FFFFFF",
            error: "#FFFFFF",
            glass: e ? "#F6F5F2" : "#111111",
          },
          l = s[i] || s.secondary;
        return {
          minHeight: o ? 32 : 44,
          height: o ? 32 : "auto",
          backgroundColor: e ? "rgba(255, 255, 255, 0.06)" : "#ECEAE5",
          borderRadius: 9999,
          padding: o ? "3px" : "4px",
          border: `1px solid ${e ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.04)"}`,
          display: r.variant === "fullWidth" ? "flex" : "inline-flex",
          width: r.variant === "fullWidth" ? "100%" : "fit-content",
          maxWidth: "100%",
          boxShadow: e ? "inset 0 1px 3px rgba(0,0,0,0.35)" : "inset 0 1px 2px rgba(0,0,0,0.04)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxSizing: "border-box",
          position: "relative",
          isolation: "isolate",
          overflow: a ? "hidden" : "visible",
          "& .MuiTab-root.Mui-selected": { color: l },
          "& .MuiTabs-scroller": {
            position: "relative",
            borderRadius: 9999,
            overflow: a ? "auto !important" : "visible !important",
            height: "100%",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          },
          "& .MuiTabs-flexContainer": { position: "relative", zIndex: 2, gap: 0, height: "100%", alignItems: "center" },
          "& .MuiTabs-scrollButtons": {
            color: e ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 17, 17, 0.7)",
            borderRadius: 9999,
            width: o ? 24 : 32,
            height: o ? 24 : 32,
            minWidth: o ? 24 : 32,
            alignSelf: "center",
            zIndex: 3,
            "&.Mui-disabled": { opacity: 0.3 },
          },
          ...(o && {
            "& .MuiTab-root": { minHeight: 26, height: 26, fontSize: "0.78rem", padding: "4px 14px", minWidth: 64 },
          }),
        };
      },
      indicator: ({ ownerState: r }) => {
        let o = r.indicatorColorOverride || r.indicatorColor || "secondary",
          a = {
            primary: {
              light: "#FFFFFF",
              dark: "#F6F5F2",
              lightBorder: "rgba(0, 0, 0, 0.03)",
              darkBorder: "transparent",
              lightShadow: "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
              darkShadow: "0 4px 16px rgba(0, 0, 0, 0.45)",
            },
            secondary: {
              light: "#FFFFFF",
              dark: "#F6F5F2",
              lightBorder: "rgba(0, 0, 0, 0.03)",
              darkBorder: "transparent",
              lightShadow: "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
              darkShadow: "0 4px 16px rgba(0, 0, 0, 0.45)",
            },
            accent: {
              light: "#B08D57",
              dark: "#D4B77A",
              lightBorder: "rgba(128, 98, 56, 0.25)",
              darkBorder: "rgba(224, 199, 143, 0.25)",
              lightShadow: "0 3px 12px rgba(176, 141, 87, 0.22), 0 1px 3px rgba(176, 141, 87, 0.12)",
              darkShadow: "0 4px 16px rgba(212, 183, 122, 0.22), 0 1px 3px rgba(212, 183, 122, 0.12)",
            },
            info: {
              light: "#4285F4",
              dark: "#8AB4F8",
              lightBorder: "rgba(66, 133, 244, 0.20)",
              darkBorder: "rgba(138, 180, 248, 0.20)",
              lightShadow: "0 3px 12px rgba(66, 133, 244, 0.18)",
              darkShadow: "0 4px 12px rgba(138, 180, 248, 0.18)",
            },
            success: {
              light: "#34A853",
              dark: "#81C995",
              lightBorder: "rgba(52, 168, 83, 0.20)",
              darkBorder: "rgba(129, 201, 149, 0.20)",
              lightShadow: "0 3px 12px rgba(52, 168, 83, 0.18)",
              darkShadow: "0 4px 16px rgba(129, 201, 149, 0.18)",
            },
            warning: {
              light: "#E67700",
              dark: "#F6AD55",
              lightBorder: "rgba(230, 119, 0, 0.20)",
              darkBorder: "rgba(246, 173, 85, 0.20)",
              lightShadow: "0 3px 12px rgba(230, 119, 0, 0.18)",
              darkShadow: "0 4px 16px rgba(246, 173, 85, 0.18)",
            },
            error: {
              light: "#EA4335",
              dark: "#F28B82",
              lightBorder: "rgba(234, 67, 53, 0.20)",
              darkBorder: "rgba(242, 139, 130, 0.20)",
              lightShadow: "0 3px 12px rgba(234, 67, 53, 0.18)",
              darkShadow: "0 4px 16px rgba(242, 139, 130, 0.18)",
            },
          },
          i = a[o] ?? a.secondary,
          s = o === "glass";
        return {
          height: "100%",
          top: 0,
          bottom: 0,
          borderRadius: 9999,
          backgroundColor: s ? (e ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.75)") : e ? i.dark : i.light,
          border: s
            ? `1px solid ${e ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.9)"}`
            : `1px solid ${e ? i.darkBorder : i.lightBorder}`,
          boxShadow: s
            ? e
              ? "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)"
              : "0 3px 12px rgba(0,0,0,0.06), inset 0 1px 0 #FFFFFF"
            : e
              ? i.darkShadow
              : i.lightShadow,
          ...(s && { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }),
          zIndex: 1,
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        };
      },
    },
  },
  MuiTab: {
    defaultProps: { disableRipple: true, size: "medium" },
    styleOverrides: {
      root: ({ ownerState: r }) => {
        let o = r.size === "small";
        return {
          position: "relative",
          zIndex: 2,
          textTransform: "none",
          fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
          fontSize: o ? "0.78rem" : "0.84rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.2,
          minHeight: o ? 26 : 36,
          height: o ? 26 : 36,
          minWidth: o ? 64 : 80,
          borderRadius: 9999,
          padding: o ? "4px 14px" : "8px 22px",
          color: e ? "rgba(255, 255, 255, 0.62)" : "#686868",
          transition: "color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          userSelect: "none",
          "&:hover": { color: e ? "#F6F5F2" : "#111111", backgroundColor: "transparent" },
          "&:active": { transform: "scale(0.98)" },
          "&.Mui-selected": {
            fontWeight: 600,
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "transparent" },
          },
          "&.Mui-disabled": { color: e ? "rgba(255, 255, 255, 0.25)" : "rgba(104, 104, 104, 0.35)", opacity: 0.6 },
        };
      },
    },
  },
});
var pt = (e) => ({
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState: r }) => {
        let o = r.glass === "true" || r.glass === true,
          a = e ? "#18181B" : "#FFFFFF",
          i = e ? "#F5F5F7" : "#111111",
          s = e ? "rgba(24, 24, 27, 0.72)" : "rgba(255, 255, 255, 0.72)",
          l = e ? "#F5F5F7" : "#111111",
          c = o
            ? e
              ? "rgba(255, 255, 255, 0.14)"
              : "rgba(255, 255, 255, 0.85)"
            : e
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.08)",
          p = e ? "0 24px 70px rgba(0, 0, 0, 0.45)" : "0 24px 70px rgba(0, 0, 0, 0.14)";
        return {
          position: "relative",
          overflowY: "auto",
          backgroundColor: o ? s : a,
          color: o ? l : i,
          border: `1px solid ${c}`,
          boxShadow: p,
          ...(o && {
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: e
                ? `linear-gradient(
                    135deg,
                    rgba(255,255,255,0.08) 0%,
                    rgba(255,255,255,0.025) 45%,
                    transparent 100%
                  )`
                : `linear-gradient(
                    135deg,
                    rgba(255,255,255,0.55) 0%,
                    rgba(255,255,255,0.12) 45%,
                    transparent 100%
                  )`,
              zIndex: 0,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              pointerEvents: "none",
              background: e ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.95)",
              zIndex: 2,
            },
          }),
          "& > *": { position: "relative", zIndex: 1 },
          ...(r.anchor === "bottom" && {
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
            borderTopLeftRadius: "28px !important",
            borderTopRightRadius: "28px !important",
            borderBottomLeftRadius: "0 !important",
            borderBottomRightRadius: "0 !important",
          }),
          ...(r.anchor === "top" && {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderTopLeftRadius: "0 !important",
            borderTopRightRadius: "0 !important",
            borderBottomLeftRadius: "28px !important",
            borderBottomRightRadius: "28px !important",
          }),
          ...(r.anchor === "left" && {
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
            borderTopLeftRadius: "0 !important",
            borderBottomLeftRadius: "0 !important",
            borderTopRightRadius: "10px !important",
            borderBottomRightRadius: "10px !important",
          }),
          ...(r.anchor === "right" && {
            borderRight: "none",
            borderTop: "none",
            borderBottom: "none",
            borderTopRightRadius: "0 !important",
            borderBottomRightRadius: "0 !important",
            borderTopLeftRadius: "10px !important",
            borderBottomLeftRadius: "10px !important",
          }),
        };
      },
    },
  },
});
var bt = (e, r) => ({
  MuiPopover: { styleOverrides: { paper: { ...Pe(r) } } },
  MuiMenu: {
    styleOverrides: {
      paper: { ...Pe(r), maxHeight: "400px", overflowY: "auto" },
      list: { backgroundColor: "transparent !important", backgroundImage: "none !important" },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: "5px 10px",
        minHeight: "28px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        transition: "all 0.15s ease",
        gap: "8px",
        "&.MuiMenuItem-dense": { minHeight: "24px", padding: "3px 8px", fontSize: "0.775rem" },
        "&:hover": { backgroundColor: e.glass.menuItemHover },
        "&.Mui-selected": {
          backgroundColor: e.action.selected,
          color: e.primary.main,
          fontWeight: 600,
          "&:hover": { backgroundColor: e.glass.menuItemHover },
        },
      },
    },
  },
});
var mt = (e) => ({
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        "&.Mui-selected": {
          backgroundColor: e.secondary.main,
          color: e.secondary.contrastText,
          "&:hover": { backgroundColor: e.secondary.hover },
        },
      },
    },
  },
});
var ut = (e, r) => ({
  MuiStepper: {
    defaultProps: { color: "primary" },
    styleOverrides: {
      root: { "--jivico-stepper-color": e.primary.main, "--jivico-stepper-contrast": e.primary.contrastText },
    },
    variants: [
      {
        props: { color: "primary" },
        style: { "--jivico-stepper-color": e.primary.main, "--jivico-stepper-contrast": e.primary.contrastText },
      },
      {
        props: { color: "secondary" },
        style: { "--jivico-stepper-color": e.secondary.main, "--jivico-stepper-contrast": e.secondary.contrastText },
      },
      {
        props: { color: "accent" },
        style: { "--jivico-stepper-color": e.accent.main, "--jivico-stepper-contrast": e.accent.contrastText },
      },
      {
        props: { color: "info" },
        style: { "--jivico-stepper-color": e.info.main, "--jivico-stepper-contrast": e.info.contrastText },
      },
      {
        props: { color: "success" },
        style: { "--jivico-stepper-color": e.success.main, "--jivico-stepper-contrast": e.success.contrastText },
      },
      {
        props: { color: "warning" },
        style: { "--jivico-stepper-color": e.warning.main, "--jivico-stepper-contrast": e.warning.contrastText },
      },
      {
        props: { color: "error" },
        style: { "--jivico-stepper-color": e.error.main, "--jivico-stepper-contrast": e.error.contrastText },
      },
    ],
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: r ? "rgba(255, 255, 255, 0.22)" : "rgba(17, 17, 17, 0.22)",
        borderTopWidth: 2,
        borderRadius: 1,
      },
      root: {
        "&.Mui-active .MuiStepConnector-line": { borderColor: `var(--jivico-stepper-color, ${e.primary.main})` },
        "&.Mui-completed .MuiStepConnector-line": { borderColor: `var(--jivico-stepper-color, ${e.primary.main})` },
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: r ? "rgba(255, 255, 255, 0.2)" : "rgba(17, 17, 17, 0.38)",
        transition: "color 0.2s ease, filter 0.2s ease, transform 0.2s ease",
        "& .MuiStepIcon-text": { fill: `${e.background.paper} !important` },
        "&.Mui-active": {
          color: `var(--jivico-stepper-color, ${e.primary.main})`,
          filter: `drop-shadow(0 0 6px color-mix(in srgb, var(--jivico-stepper-color, ${e.primary.main}) 25%, transparent))`,
          "& .MuiStepIcon-text": {
            fill: `var(--jivico-stepper-contrast, ${e.primary.contrastText}) !important`,
            fontWeight: 700,
          },
        },
        "&.Mui-completed": {
          color: `var(--jivico-stepper-color, ${e.primary.main})`,
          "& .MuiStepIcon-text": { fill: `var(--jivico-stepper-contrast, ${e.primary.contrastText}) !important` },
        },
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: e.text.secondary,
        "&.Mui-active": { color: `var(--jivico-stepper-color, ${e.primary.main})`, fontWeight: 700 },
        "&.Mui-completed": { color: `var(--jivico-stepper-color, ${e.primary.main})`, fontWeight: 600 },
      },
    },
  },
});
var xt = (e, r) => ({
  MuiBottomNavigation: {
    defaultProps: { glass: "true", size: "medium", placement: "inline" },
    styleOverrides: {
      root: ({ ownerState: o }) => {
        let a = o.glass === "true" || o.glass === true,
          i = o.placement || "inline",
          s = o.size || "medium",
          l = r ? "#18181B" : "#FFFFFF",
          c = r ? "#F5F5F7" : "#111111",
          p = r ? "rgba(24, 24, 27, 0.72)" : "rgba(255, 255, 255, 0.60)",
          d = r ? "#F5F5F7" : "#111111",
          u = a
            ? r
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(255, 255, 255, 0.85)"
            : r
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.08)",
          b = r ? "0 16px 48px rgba(0, 0, 0, 0.5)" : "0 12px 36px rgba(0, 0, 0, 0.1)",
          g = { small: 48, medium: 64 },
          y = { small: "5px 8px", medium: "6px 10px" },
          x = {
            "top-left": { position: "fixed", top: 20, left: 24, zIndex: 1100 },
            "top-center": { position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 1100 },
            "top-right": { position: "fixed", top: 20, right: 24, zIndex: 1100 },
            "bottom-left": { position: "fixed", bottom: 24, left: 24, zIndex: 1100 },
            "bottom-center": {
              position: "fixed",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1100,
            },
            "bottom-right": { position: "fixed", bottom: 24, right: 24, zIndex: 1100 },
            inline: { position: "relative" },
          };
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: g[s] || 64,
          padding: y[s] || "6px 10px",
          borderRadius: 9999,
          boxSizing: "border-box",
          backgroundColor: a ? p : l,
          color: a ? d : c,
          border: `1px solid ${u}`,
          boxShadow: b,
          ...(x[i] || x.inline),
          ...(a && {
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              background: r
                ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 45%, transparent 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",
              zIndex: 0,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 20,
              right: 20,
              height: 1,
              pointerEvents: "none",
              background: r
                ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent)"
                : "linear-gradient(90deg, transparent, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 70%, transparent)",
              zIndex: 2,
            },
          }),
        };
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: ({ ownerState: o }) => {
        let a = o.size === "small",
          s = (o.showLabel ?? o.showLabels) !== false,
          l = a ? 28 : 46;
        return {
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          boxSizing: "border-box",
          height: l,
          minWidth: s ? (a ? 36 : 52) : l,
          maxWidth: s ? (a ? 100 : 140) : l,
          width: s ? "auto" : l,
          aspectRatio: s ? "unset" : "1 / 1",
          padding: s ? (a ? "3px 8px" : "6px 12px") : 0,
          borderRadius: s ? 9999 : "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: r ? "rgba(245, 245, 247, 0.6)" : "rgba(17, 17, 17, 0.6)",
          transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            color: r ? "#F5F5F7" : "#111111",
            backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)",
          },
          "&.Mui-selected": {
            color: r ? "#F5F5F7" : "#111111",
            fontWeight: 700,
            backgroundColor: r ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.08)",
            boxShadow: r
              ? a
                ? "inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 2px 8px rgba(0,0,0,0.25)"
                : "inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 4px 14px rgba(0,0,0,0.3)"
              : a
                ? "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(0,0,0,0.05)"
                : "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 4px 12px rgba(0,0,0,0.05)",
            "& .MuiSvgIcon-root, & svg": { transform: a ? "scale(1.05)" : "scale(1.1)" },
          },
          "& .MuiBottomNavigationAction-label": {
            display: s ? "block" : "none !important",
            fontSize: a ? "0.6875rem" : "0.75rem",
            fontWeight: 600,
            lineHeight: 1.2,
            mt: a ? 0.1 : 0.25,
            transition: "all 0.2s ease",
          },
        };
      },
    },
  },
});
var ht = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(246, 245, 242, 0.72)" : "rgba(17, 17, 17, 0.68)",
    s = r ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.62)",
    l = r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.72)",
    c = r ? "0 12px 40px rgba(0, 0, 0, 0.28)" : "0 12px 40px rgba(17, 17, 17, 0.08)",
    p = r ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.48)",
    d = {
      primary: {
        main: e.primary.main,
        soft: r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)",
        hover: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.045)",
        active: r ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.09)",
      },
      secondary: {
        main: e.secondary.main,
        soft: r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)",
        hover: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.045)",
        active: r ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.09)",
      },
      accent: {
        main: e.accent.main,
        soft: r ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.07)",
        hover: r ? "rgba(255, 255, 255, 0.07)" : "rgba(17, 17, 17, 0.05)",
        active: r ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.10)",
      },
      success: {
        main: e.success.main,
        soft: r ? "rgba(16, 185, 129, 0.16)" : "rgba(16, 185, 129, 0.10)",
        hover: r ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.06)",
        active: r ? "rgba(16, 185, 129, 0.22)" : "rgba(16, 185, 129, 0.14)",
      },
      warning: {
        main: e.warning.main,
        soft: r ? "rgba(245, 158, 11, 0.16)" : "rgba(245, 158, 11, 0.10)",
        hover: r ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.06)",
        active: r ? "rgba(245, 158, 11, 0.22)" : "rgba(245, 158, 11, 0.14)",
      },
      error: {
        main: e.error.main,
        soft: r ? "rgba(239, 68, 68, 0.16)" : "rgba(239, 68, 68, 0.10)",
        hover: r ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.06)",
        active: r ? "rgba(239, 68, 68, 0.22)" : "rgba(239, 68, 68, 0.14)",
      },
    },
    u = {
      small: {
        minHeight: 36,
        padding: "6px 10px",
        radius: 10,
        iconMinWidth: 36,
        iconSize: 18,
        primaryFontSize: "0.8125rem",
        secondaryFontSize: "0.75rem",
      },
      medium: {
        minHeight: 44,
        padding: "9px 12px",
        radius: 12,
        iconMinWidth: 40,
        iconSize: 20,
        primaryFontSize: "0.925rem",
        secondaryFontSize: "0.8125rem",
      },
      large: {
        minHeight: 52,
        padding: "12px 14px",
        radius: 14,
        iconMinWidth: 44,
        iconSize: 22,
        primaryFontSize: "1rem",
        secondaryFontSize: "0.875rem",
      },
    };
  return {
    MuiList: {
      styleOverrides: {
        root: ({ ownerState: b }) => {
          let g = b;
          d[g.color ?? "primary"];
          let x = u[g.size ?? "medium"],
            w = (g.variant ?? "standard") === "glass";
          return {
            width: "100%",
            padding: 4,
            boxSizing: "border-box",
            color: o,
            ...(w
              ? {
                  backgroundColor: s,
                  border: `1px solid ${l}`,
                  borderRadius: 18,
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: c,
                  "& .MuiListItemButton-root": { "&:hover": { backgroundColor: p } },
                }
              : { backgroundColor: "transparent", border: "1px solid transparent" }),
            "& .MuiListItemButton-root": {
              minHeight: x.minHeight,
              padding: x.padding,
              borderRadius: x.radius,
              "& .MuiListItemIcon-root": { minWidth: x.iconMinWidth, "& svg": { fontSize: x.iconSize } },
              "& .MuiListItemText-primary": { fontSize: x.primaryFontSize },
              "& .MuiListItemText-secondary": { fontSize: x.secondaryFontSize },
            },
            ...(w
              ? {
                  "& .MuiListItemButton-root.Mui-selected": {
                    backgroundColor: r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.52)",
                    "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.64)" },
                  },
                }
              : {}),
          };
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 2,
          paddingBottom: 2,
          "&.MuiListItem-divider": {
            borderBottom: `1px solid ${r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"}`,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState: b }) => {
          let g = b,
            y = d[g.color ?? "primary"],
            x = u[g.size ?? "medium"];
          return {
            minHeight: x.minHeight,
            padding: x.padding,
            borderRadius: x.radius,
            color: o,
            transition: "background-color 160ms ease, color 160ms ease, transform 160ms ease",
            "&:hover": { backgroundColor: y.hover },
            "&:active": { backgroundColor: y.active },
            "&:focus-visible": { outline: `2px solid ${y.main}`, outlineOffset: -2 },
            "&.Mui-selected": {
              backgroundColor: y.soft,
              "&:hover": { backgroundColor: y.active },
              "& .MuiListItemIcon-root": { color: y.main },
              "& .MuiListItemText-primary": { color: o, fontWeight: 650 },
            },
            "&.Mui-disabled": { opacity: 0.45 },
            "& .MuiListItemIcon-root": { minWidth: x.iconMinWidth, "& svg": { fontSize: x.iconSize } },
            "& .MuiListItemText-primary": { fontSize: x.primaryFontSize },
            "& .MuiListItemText-secondary": { fontSize: x.secondaryFontSize },
          };
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: { root: { minWidth: 40, color: i, transition: "color 160ms ease", "& svg": { fontSize: 20 } } },
    },
    MuiListItemText: {
      styleOverrides: {
        root: { marginTop: 2, marginBottom: 2 },
        primary: { color: o, fontSize: "0.925rem", fontWeight: 500, lineHeight: 1.4 },
        secondary: { color: a, fontSize: "0.8125rem", lineHeight: 1.4, marginTop: 2 },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: ({ ownerState: b }) => {
          let g = b;
          return {
            minWidth: u[g.size ?? "medium"].iconMinWidth + 8,
            "& .MuiAvatar-root": {
              width: g.size === "small" ? 30 : g.size === "large" ? 42 : 36,
              height: g.size === "small" ? 30 : g.size === "large" ? 42 : 36,
              fontSize: g.size === "small" ? "0.75rem" : g.size === "large" ? "1rem" : "0.875rem",
              border: `1px solid ${r ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)"}`,
            },
          };
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 12,
          "& .MuiIconButton-root": {
            color: a,
            transition: "background-color 160ms ease, color 160ms ease",
            "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)", color: o },
            "&:focus-visible": { outline: `2px solid ${e.primary.main}`, outlineOffset: 2 },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          minHeight: 32,
          padding: "8px 12px 6px",
          backgroundColor: "transparent",
          color: r ? "rgba(246, 245, 242, 0.52)" : "rgba(17, 17, 17, 0.52)",
          fontSize: "0.7rem",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          "&.MuiListSubheader-sticky": {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: r ? "rgba(17, 17, 17, 0.72)" : "rgba(246, 245, 242, 0.72)",
          },
        },
      },
    },
  };
};
var ft = (e, r) => ({
  ...dt(e, r),
  ...ct(),
  ...gt(r),
  ...pt(r),
  ...bt(e, r),
  ...mt(e),
  ...ut(e, r),
  ...xt(e, r),
  ...ht(e, r),
});
var vt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = r ? "rgba(255, 255, 255, 0.045)" : "rgba(17, 17, 17, 0.035)",
    l = r ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.07)",
    c = r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.62)",
    p = r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.72)",
    d = r ? "0 14px 40px rgba(0, 0, 0, 0.24)" : "0 14px 40px rgba(17, 17, 17, 0.07)",
    u = {
      primary: {
        main: e.primary.main,
        header: r ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
        hover: r ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
        selected: r ? "rgba(255, 255, 255, 0.11)" : "rgba(17, 17, 17, 0.08)",
      },
      secondary: {
        main: e.secondary.main,
        header: r ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
        hover: r ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
        selected: r ? "rgba(255, 255, 255, 0.11)" : "rgba(17, 17, 17, 0.08)",
      },
      accent: {
        main: e.accent.main,
        header: r ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.055)",
        hover: r ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.055)",
        selected: r ? "rgba(255, 255, 255, 0.13)" : "rgba(17, 17, 17, 0.095)",
      },
      success: {
        main: e.success.main,
        header: r ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.065)",
        hover: r ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.065)",
        selected: r ? "rgba(16, 185, 129, 0.17)" : "rgba(16, 185, 129, 0.10)",
      },
      warning: {
        main: e.warning.main,
        header: r ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.065)",
        hover: r ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.065)",
        selected: r ? "rgba(245, 158, 11, 0.17)" : "rgba(245, 158, 11, 0.10)",
      },
      error: {
        main: e.error.main,
        header: r ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.065)",
        hover: r ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.065)",
        selected: r ? "rgba(239, 68, 68, 0.17)" : "rgba(239, 68, 68, 0.10)",
      },
    },
    b = {
      small: { cellPadding: "7px 10px", headerPadding: "8px 10px", fontSize: "0.8125rem", headerFontSize: "0.72rem" },
      medium: { cellPadding: "11px 14px", headerPadding: "12px 14px", fontSize: "0.875rem", headerFontSize: "0.75rem" },
    };
  return {
    MuiTable: {
      styleOverrides: {
        root: ({ ownerState: g }) => {
          let y = g,
            x = u[y.color ?? "primary"],
            f = b[y.size ?? "medium"],
            k = (y.variant ?? "standard") === "glass";
          return {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            color: o,
            ...(k
              ? {
                  backgroundColor: c,
                  border: `1px solid ${p}`,
                  borderRadius: 18,
                  overflow: "hidden",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: d,
                }
              : { backgroundColor: "transparent" }),
            "& .MuiTableCell-root": {
              padding: f.cellPadding,
              fontSize: f.fontSize,
              color: o,
              borderBottom: `1px solid ${i}`,
            },
            "& .MuiTableHead-root .MuiTableCell-root": {
              padding: f.headerPadding,
              backgroundColor: k ? "rgba(255, 255, 255, 0.04)" : x.header,
              color: o,
              fontSize: f.headerFontSize,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            },
            "& .MuiTableBody-root .MuiTableRow-root": {
              transition: "background-color 160ms ease",
              "&:hover": { backgroundColor: k ? (r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.46)") : s },
              "&.Mui-selected": {
                backgroundColor: k ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.52)") : l,
                "&:hover": {
                  backgroundColor: k ? (r ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.62)") : x.selected,
                },
              },
            },
            "& .MuiTableFooter-root": {
              "& .MuiTableCell-root": {
                color: a,
                fontWeight: 500,
                backgroundColor: k ? "rgba(255, 255, 255, 0.025)" : "transparent",
              },
            },
            "& .MuiTableCell-head": { borderBottom: `1px solid ${k ? p : i}` },
            "& .MuiTableCell-footer": { borderBottom: 0, borderTop: `1px solid ${k ? p : i}` },
            "& .MuiTableCell-alignRight": { fontVariantNumeric: "tabular-nums" },
            "& .MuiTableCell-alignCenter": { verticalAlign: "middle" },
            "& .MuiTableRow-root:last-child .MuiTableCell-body": { borderBottom: 0 },
            "& .MuiTableRow-root:focus-visible": { outline: `2px solid ${x.main}`, outlineOffset: -2 },
          };
        },
      },
    },
  };
};
var yt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = r ? "rgba(255, 255, 255, 0.045)" : "rgba(255, 255, 255, 0.42)",
    l = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    };
  return {
    MuiTableHead: {
      styleOverrides: {
        root: ({ ownerState: c }) => {
          let p = c,
            d = l[p.color ?? "primary"],
            b = (p.variant ?? "standard") === "glass";
          return {
            "& .MuiTableRow-root": {
              backgroundColor: b ? s : r ? "rgba(255, 255, 255, 0.045)" : "rgba(17, 17, 17, 0.035)",
            },
            "& .MuiTableCell-root": {
              position: "relative",
              color: o,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              borderBottom: `1px solid ${b ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.64)") : i}`,
              "&.MuiTableCell-alignLeft": { textAlign: "left" },
              "&.MuiTableCell-alignCenter": { textAlign: "center" },
              "&.MuiTableCell-alignRight": { textAlign: "right", fontVariantNumeric: "tabular-nums" },
              "&.MuiTableCell-paddingCheckbox": { width: 48, paddingLeft: 8, paddingRight: 8 },
              "& .MuiTableSortLabel-root": {
                color: a,
                transition: "color 160ms ease, opacity 160ms ease",
                "&:hover": { color: o },
                "&.Mui-active": { color: d },
                "& .MuiTableSortLabel-icon": {
                  color: d,
                  opacity: 0.75,
                  transition: "color 160ms ease, opacity 160ms ease",
                },
                "&.Mui-active .MuiTableSortLabel-icon": { color: d, opacity: 1 },
                "&:focus-visible": { outline: `2px solid ${d}`, outlineOffset: 2, borderRadius: 4 },
              },
            },
            "& .MuiTableCell-root:first-of-type": { paddingLeft: 16 },
            "& .MuiTableCell-root:last-of-type": { paddingRight: 16 },
          };
        },
      },
    },
  };
};
var wt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = r ? "rgba(255, 255, 255, 0.045)" : "rgba(17, 17, 17, 0.035)",
    l = r ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.07)",
    c = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    };
  return {
    MuiTableBody: {
      styleOverrides: {
        root: ({ ownerState: p }) => {
          let d = p,
            u = c[d.color ?? "primary"],
            g = (d.variant ?? "standard") === "glass";
          return {
            "& .MuiTableRow-root": {
              position: "relative",
              transition: "background-color 160ms ease, box-shadow 160ms ease",
              "& .MuiTableCell-root": {
                color: o,
                borderBottom: `1px solid ${g ? (r ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.065)") : i}`,
                verticalAlign: "middle",
              },
              "&:hover": { backgroundColor: g ? (r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.46)") : s },
              "&.Mui-selected": {
                backgroundColor: g ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.52)") : l,
                "&:hover": {
                  backgroundColor: g
                    ? r
                      ? "rgba(255, 255, 255, 0.14)"
                      : "rgba(255, 255, 255, 0.62)"
                    : r
                      ? "rgba(255, 255, 255, 0.12)"
                      : "rgba(17, 17, 17, 0.095)",
                },
              },
              "&:focus-visible": { outline: `2px solid ${u}`, outlineOffset: -2 },
              "&:last-child .MuiTableCell-body": { borderBottom: 0 },
            },
            "& .MuiTableCell-body": {
              color: o,
              fontWeight: 400,
              "&.MuiTableCell-alignLeft": { textAlign: "left" },
              "&.MuiTableCell-alignCenter": { textAlign: "center" },
              "&.MuiTableCell-alignRight": { textAlign: "right", fontVariantNumeric: "tabular-nums" },
              "&.MuiTableCell-paddingCheckbox": { width: 48, paddingLeft: 8, paddingRight: 8 },
              "&:first-of-type": { paddingLeft: 16 },
              "&:last-of-type": { paddingRight: 16 },
            },
            "& .MuiTableCell-body .MuiTypography-root": { color: "inherit" },
            "& .MuiTableCell-body .MuiTypography-colorTextSecondary": { color: a },
            "& .MuiTableCell-body .MuiLink-root": {
              color: u,
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 160ms ease",
              "&:hover": { textDecoration: "underline" },
              "&:focus-visible": { outline: `2px solid ${u}`, outlineOffset: 2, borderRadius: 4 },
            },
            "& .MuiTableCell-body .MuiCheckbox-root": {
              color: a,
              "&.Mui-checked": { color: u },
              "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.05)" },
              "&.Mui-focusVisible": { outline: `2px solid ${u}`, outlineOffset: 2 },
            },
          };
        },
      },
    },
  };
};
var St = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    i = r ? "rgba(255, 255, 255, 0.045)" : "rgba(17, 17, 17, 0.035)",
    s = r ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.07)",
    l = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    };
  return {
    MuiTableRow: {
      styleOverrides: {
        root: ({ ownerState: c }) => {
          let p = c,
            d = l[p.color ?? "primary"],
            b = (p.variant ?? "standard") === "glass";
          return {
            color: o,
            transition: "background-color 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
            "& .MuiTableCell-root": {
              borderBottom: `1px solid ${b ? (r ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.065)") : a}`,
            },
            "&:hover": { backgroundColor: b ? (r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.46)") : i },
            "&.Mui-selected": {
              backgroundColor: b ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.52)") : s,
              "&:hover": {
                backgroundColor: b
                  ? r
                    ? "rgba(255, 255, 255, 0.14)"
                    : "rgba(255, 255, 255, 0.62)"
                  : r
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(17, 17, 17, 0.095)",
              },
            },
            "&:focus-visible": { outline: `2px solid ${d}`, outlineOffset: -2 },
            "&:last-child .MuiTableCell-body": { borderBottom: 0 },
            "&.MuiTableRow-hover:hover": {
              backgroundColor: b ? (r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.46)") : i,
            },
            "& .MuiTableCell-root:first-of-type": { borderTopLeftRadius: 0 },
            "& .MuiTableCell-root:last-of-type": { borderTopRightRadius: 0 },
          };
        },
        head: { "&:hover": { backgroundColor: "transparent" } },
        footer: { "&:hover": { backgroundColor: "transparent" } },
      },
    },
  };
};
var Ct = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    };
  return {
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState: l }) => {
          let c = l,
            p = s[c.color ?? "primary"],
            u = (c.variant ?? "standard") === "glass",
            b = c.size ?? "medium";
          return {
            padding: b === "small" ? "7px 10px" : "11px 14px",
            fontSize: b === "small" ? "0.8125rem" : "0.875rem",
            color: o,
            borderBottom: `1px solid ${u ? (r ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.065)") : i}`,
            verticalAlign: "middle",
            lineHeight: 1.45,
            "&.MuiTableCell-head": {
              fontSize: b === "small" ? "0.72rem" : "0.75rem",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: o,
            },
            "&.MuiTableCell-body": { fontWeight: 400 },
            "&.MuiTableCell-footer": {
              fontWeight: 500,
              color: a,
              borderBottom: 0,
              borderTop: `1px solid ${u ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)") : i}`,
            },
            "&.MuiTableCell-alignLeft": { textAlign: "left" },
            "&.MuiTableCell-alignCenter": { textAlign: "center" },
            "&.MuiTableCell-alignRight": { textAlign: "right", fontVariantNumeric: "tabular-nums" },
            "&.MuiTableCell-paddingNone": { padding: 0 },
            "&.MuiTableCell-paddingCheckbox": { width: 48, paddingLeft: 8, paddingRight: 8 },
            "&:first-of-type": { paddingLeft: b === "small" ? 12 : 16 },
            "&:last-of-type": { paddingRight: b === "small" ? 12 : 16 },
            "& .MuiTypography-root": { color: "inherit" },
            "& .MuiTypography-colorTextSecondary": { color: a },
            "& .MuiLink-root": {
              color: p,
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 160ms ease",
              "&:hover": { textDecoration: "underline" },
              "&:focus-visible": { outline: `2px solid ${p}`, outlineOffset: 2, borderRadius: 4 },
            },
            "& .MuiIconButton-root": {
              color: a,
              "&:hover": { color: p, backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.05)" },
              "&.Mui-focusVisible": { outline: `2px solid ${p}`, outlineOffset: 2 },
            },
            "& .MuiCheckbox-root": {
              color: a,
              "&.Mui-checked": { color: p },
              "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.05)" },
              "&.Mui-focusVisible": { outline: `2px solid ${p}`, outlineOffset: 2 },
            },
            "& .MuiTableSortLabel-root": {
              color: a,
              "&:hover": { color: o },
              "&.Mui-active": { color: p },
              "& .MuiTableSortLabel-icon": { color: p },
            },
          };
        },
      },
    },
  };
};
var Ft = (e, r) => {
  let o = r ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.62)",
    a = r ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.72)",
    i = r ? "0 14px 40px rgba(0, 0, 0, 0.24)" : "0 14px 40px rgba(17, 17, 17, 0.07)",
    s = r ? "rgba(255, 255, 255, 0.04)" : "rgba(17, 17, 17, 0.04)",
    l = r ? "rgba(255, 255, 255, 0.18)" : "rgba(17, 17, 17, 0.16)",
    c = r ? "rgba(255, 255, 255, 0.28)" : "rgba(17, 17, 17, 0.24)";
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
          scrollbarColor: `${l} ${s}`,
          "&::-webkit-scrollbar": { width: 8, height: 8 },
          "&::-webkit-scrollbar-track": { background: s, borderRadius: 999 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: l,
            borderRadius: 999,
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            transition: "background-color 160ms ease",
            "&:hover": { backgroundColor: c },
          },
          "&::-webkit-scrollbar-corner": { background: "transparent" },
          "&.MuiTableContainer-root": { "& .MuiTable-root": { minWidth: "100%" } },
          "&[data-sticky-header='true']": {
            "& .MuiTableHead-root": { position: "sticky", top: 0, zIndex: 2 },
            "& .MuiTableHead-root .MuiTableCell-root": { position: "sticky", top: 0, zIndex: 2 },
          },
          "&[data-glass='true']": {
            backgroundColor: o,
            border: `1px solid ${a}`,
            borderRadius: 18,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow: i,
            overflow: "auto",
            "& .MuiTable-root": { backgroundColor: "transparent" },
          },
          "&[data-glass='true'] .MuiTableHead-root": { backgroundColor: "transparent" },
          "&[data-glass='true'] .MuiTableHead-root .MuiTableCell-root": {
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          },
        },
      },
    },
  };
};
var Mt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = r ? "rgba(255, 255, 255, 0.025)" : "rgba(255, 255, 255, 0.32)",
    l = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    };
  return {
    MuiTableFooter: {
      styleOverrides: {
        root: ({ ownerState: c }) => {
          let p = c,
            d = l[p.color ?? "primary"],
            b = (p.variant ?? "standard") === "glass";
          return {
            backgroundColor: b ? s : "transparent",
            "& .MuiTableRow-root": { backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" } },
            "& .MuiTableCell-root": {
              color: a,
              fontWeight: 500,
              verticalAlign: "middle",
              borderTop: `1px solid ${b ? (r ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)") : i}`,
              borderBottom: 0,
              "&.MuiTableCell-alignLeft": { textAlign: "left" },
              "&.MuiTableCell-alignCenter": { textAlign: "center" },
              "&.MuiTableCell-alignRight": { textAlign: "right", fontVariantNumeric: "tabular-nums" },
              "&:first-of-type": { paddingLeft: 16 },
              "&:last-of-type": { paddingRight: 16 },
            },
            "& .MuiTablePagination-root": {
              color: a,
              minHeight: 52,
              "& .MuiTablePagination-toolbar": { minHeight: 52, paddingLeft: 12, paddingRight: 12 },
              "& .MuiTablePagination-selectLabel": { color: a, margin: 0 },
              "& .MuiTablePagination-displayedRows": { color: a, margin: 0 },
              "& .MuiTablePagination-select": { color: o },
              "& .MuiTablePagination-input": { color: o },
              "& .MuiTablePagination-actions": { marginLeft: 12 },
              "& .MuiIconButton-root": {
                color: a,
                transition: "color 160ms ease, background-color 160ms ease",
                "&:hover": { color: d, backgroundColor: r ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.05)" },
                "&.Mui-disabled": { color: r ? "rgba(246, 245, 242, 0.25)" : "rgba(17, 17, 17, 0.25)" },
                "&.Mui-focusVisible": { outline: `2px solid ${d}`, outlineOffset: 2 },
              },
            },
            "& .MuiSelect-select": { color: o },
            "& .MuiInputBase-root": {
              color: o,
              "&:before": { borderBottomColor: i },
              "&:hover:not(.Mui-disabled):before": { borderBottomColor: d },
              "&.Mui-focused:after": { borderBottomColor: d },
            },
          };
        },
      },
    },
  };
};
var kt = (e, r) => ({ ...vt(e, r), ...yt(e, r), ...wt(e, r), ...St(e, r), ...Ct(e, r), ...Ft(e, r), ...Mt(e, r) });
var Tt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    s = r ? "#1B1B1B" : "#FFFFFF",
    l = r ? "rgba(255, 255, 255, 0.075)" : "rgba(255, 255, 255, 0.72)",
    c = r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.78)",
    p = r ? "0 18px 45px rgba(0, 0, 0, 0.30)" : "0 18px 45px rgba(17, 17, 17, 0.10)",
    d = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    },
    u = {
      small: {
        listPadding: "4px",
        itemMinHeight: 24,
        itemPadding: "6px 10px",
        itemFontSize: "0.8125rem",
        iconSize: 18,
        iconGap: 8,
        radius: 8,
      },
      medium: {
        listPadding: "6px",
        itemMinHeight: 32,
        itemPadding: "9px 12px",
        itemFontSize: "0.875rem",
        iconSize: 20,
        iconGap: 10,
        radius: 10,
      },
    };
  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiMenu-paper": {
            color: o,
            backgroundColor: s,
            border: `1px solid ${i}`,
            borderRadius: 12,
            boxShadow: r ? "0 14px 36px rgba(0, 0, 0, 0.28)" : "0 14px 36px rgba(17, 17, 17, 0.10)",
            backgroundImage: "none",
            overflow: "hidden",
          },
          "& .MuiMenu-list": { color: o },
        },
        paper: ({ ownerState: b }) => {
          let g = b,
            y = d[g.color ?? "primary"],
            x = g.surface ?? g.variant ?? "standard",
            f = u[g.size ?? "medium"],
            w = x === "glass";
          return {
            minWidth: 180,
            color: o,
            ...(w
              ? {
                  backgroundColor: l,
                  border: `1px solid ${c}`,
                  borderRadius: f.radius + 4,
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  boxShadow: p,
                  backgroundImage: "none",
                }
              : { backgroundColor: s, border: `1px solid ${i}`, borderRadius: f.radius + 4, backgroundImage: "none" }),
            "& .MuiMenu-list": { padding: f.listPadding, color: o, outline: "none" },
            "& .MuiMenuItem-root": {
              minHeight: f.itemMinHeight,
              padding: f.itemPadding,
              borderRadius: f.radius,
              fontSize: f.itemFontSize,
              lineHeight: 1.35,
              color: o,
              gap: f.iconGap,
              transition: "background-color 160ms ease, color 160ms ease",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor: w
                ? r
                  ? "rgba(255, 255, 255, 0.09)"
                  : "rgba(255, 255, 255, 0.58)"
                : r
                  ? "rgba(255, 255, 255, 0.07)"
                  : "rgba(17, 17, 17, 0.045)",
            },
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: w
                ? r
                  ? "rgba(255, 255, 255, 0.13)"
                  : "rgba(255, 255, 255, 0.68)"
                : r
                  ? "rgba(255, 255, 255, 0.10)"
                  : "rgba(17, 17, 17, 0.065)",
              color: o,
            },
            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor: w
                ? r
                  ? "rgba(255, 255, 255, 0.17)"
                  : "rgba(255, 255, 255, 0.76)"
                : r
                  ? "rgba(255, 255, 255, 0.14)"
                  : "rgba(17, 17, 17, 0.085)",
            },
            "& .MuiMenuItem-root.Mui-focusVisible": { outline: `2px solid ${y}`, outlineOffset: -2 },
            "& .MuiMenuItem-root.Mui-disabled": { color: a, opacity: 0.55 },
            "& .MuiMenuItem-root .MuiListItemIcon-root": {
              minWidth: f.iconSize,
              width: f.iconSize,
              color: a,
              marginRight: 0,
            },
            "& .MuiMenuItem-root:hover .MuiListItemIcon-root": { color: y },
            "& .MuiMenuItem-root.Mui-selected .MuiListItemIcon-root": { color: y },
            "& .MuiMenuItem-root .MuiListItemText-root": { marginTop: 0, marginBottom: 0 },
            "& .MuiMenuItem-root .MuiListItemText-primary": {
              color: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
            },
            "& .MuiMenuItem-root .MuiListItemText-secondary": {
              color: a,
              fontSize: f.itemFontSize === "0.8125rem" ? "0.72rem" : "0.75rem",
              lineHeight: 1.35,
            },
            "& .MuiMenuItem-root .MuiSvgIcon-root": { fontSize: f.iconSize, flexShrink: 0 },
            "& .MuiDivider-root": { margin: "4px 0", borderColor: w ? c : i },
          };
        },
      },
    },
  };
};
var Bt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)",
    i = {
      primary: e.primary.main,
      secondary: e.secondary.main,
      accent: e.accent.main,
      success: e.success.main,
      warning: e.warning.main,
      error: e.error.main,
    },
    s = {
      small: { minHeight: 34, padding: "6px 10px", fontSize: "0.8125rem", radius: 8, iconSize: 18, gap: 8 },
      medium: { minHeight: 42, padding: "9px 12px", fontSize: "0.875rem", radius: 10, iconSize: 20, gap: 10 },
    };
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: ({ ownerState: l }) => {
          let c = l,
            p = i[c.color ?? "primary"];
          s[c.size ?? "medium"];
          return {
            lineHeight: 1.35,
            color: o,
            transition: "background-color 160ms ease, color 160ms ease",
            "&:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.07)" : "rgba(17, 17, 17, 0.045)" },
            "&.Mui-focusVisible": { outline: `2px solid ${p}`, outlineOffset: -2 },
            "&.Mui-selected": {
              backgroundColor: r ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.065)",
              color: o,
            },
            "&.Mui-selected:hover": { backgroundColor: r ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.085)" },
            "&.Mui-disabled": { color: a, opacity: 0.55 },
          };
        },
      },
    },
  };
};
var Rt = (e, r) => ({
  MuiMenuList: {
    styleOverrides: {
      root: {
        color: r ? "#F6F5F2" : "#111111",
        outline: "none",
        "&:focus": { outline: "none" },
        "& .MuiDivider-root": { borderColor: r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)" },
        "& .MuiMenuItem-root + .MuiDivider-root": { marginTop: 4 },
        "& .MuiDivider-root + .MuiMenuItem-root": { marginTop: 4 },
        "& .MuiMenuItem-root": { "&:focus-visible": { outline: `2px solid ${e.primary.main}`, outlineOffset: -2 } },
      },
    },
  },
});
var zt = (e, r) => {
  let o = r ? "#F6F5F2" : "#111111",
    a = r ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)",
    i = r ? "#1B1B1B" : "#FFFFFF",
    s = r ? "rgba(255, 255, 255, 0.075)" : "rgba(255, 255, 255, 0.72)",
    l = r ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.78)",
    c = r ? "0 18px 45px rgba(0, 0, 0, 0.30)" : "0 18px 45px rgba(17, 17, 17, 0.10)";
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: o,
          backgroundColor: i,
          backgroundImage: "none",
          border: `1px solid ${a}`,
          borderRadius: 12,
          boxShadow: r ? "0 14px 36px rgba(0, 0, 0, 0.28)" : "0 14px 36px rgba(17, 17, 17, 0.10)",
          overflow: "hidden",
          "&[data-jivico-menu-variant='glass']": {
            backgroundColor: s,
            border: `1px solid ${l}`,
            borderRadius: 14,
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: c,
          },
          "& .MuiMenu-list": { color: o },
          "& .MuiDivider-root": { borderColor: l },
        },
      },
    },
  };
};
var Lt = (e, r) => ({ ...Tt(e, r), ...Bt(e, r), ...Rt(e, r), ...zt(e, r) });
var It =
    "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap",
  Or = {};
function Aa(e) {
  let r = e === "dark",
    o = Ro(e),
    a = createTheme({
      palette: {
        mode: e,
        primary: o.primary,
        secondary: o.secondary,
        success: o.success,
        warning: o.warning,
        error: o.error,
        info: o.info,
        background: o.background,
        text: o.text,
        divider: o.divider,
        action: o.action,
        glass: o.glass,
        "glass-surface": o["glass-surface"],
        glassSurface: o.glassSurface,
      },
      typography: zo,
      shape: { borderRadius: 20 },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              scrollBehavior: "smooth",
              backgroundColor: o.background.default,
              color: o.text.primary,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            },
            "@supports not (-webkit-touch-callout: none)": {
              "*": {
                scrollbarWidth: "thin",
                scrollbarColor: r ? "rgba(255, 255, 255, 0.2) transparent" : "rgba(0, 0, 0, 0.2) transparent",
              },
            },
            "@supports (selector(::-webkit-scrollbar)) and (not (-webkit-hyphens: none))": {
              "::-webkit-scrollbar": { width: "6px", height: "6px" },
              "::-webkit-scrollbar-track": { background: "transparent" },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: r ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                borderRadius: "9999px",
                border: "1px solid transparent",
                backgroundClip: "padding-box",
              },
              "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: r ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
              },
              "::-webkit-scrollbar-corner": { background: "transparent" },
            },
          },
        },
        ...No(o, r),
        ...Yo(o, r),
        ...Ko(o, r),
        ...at(o, r),
        ...lt(o, r),
        ...ft(o, r),
        ...kt(o, r),
        ...Lt(o, r),
      },
    });
  return responsiveFontSizes(a);
}
var Pt = (e) => (Or[e] || (Or[e] = Aa(e)), Or[e]),
  Xd = Pt,
  Fr = Pt;
var Ot = styled(Box, { shouldForwardProp: (e) => e !== "isDark" })(({ theme: e, isDark: r }) => {
  let o = r ?? e.palette.mode === "dark";
  return {
    backgroundColor: o ? "rgba(28, 31, 38, 0.65)" : "rgba(255, 255, 255, 0.24)",
    backgroundImage: o
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(248, 250, 252, 0.4) 100%)",
    backdropFilter: "blur(48px) saturate(180%)",
    WebkitBackdropFilter: "blur(48px) saturate(180%)",
    border: `1px solid ${o ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)"}`,
    borderRadius: 24,
  };
});
var Ea = styled(Box, { shouldForwardProp: (e) => e !== "isDark" && e !== "radius" })(
    ({ theme: e, isDark: r, radius: o = 20 }) => {
      let a = r ?? e.palette.mode === "dark";
      return { ...$o(a), borderRadius: o, boxSizing: "border-box", color: a ? "#fff" : "#000" };
    },
  ),
  r5 = styled(Box)(({ theme: e }) => ({ color: e.palette.mode === "dark" ? "#FFFFFF" : "#000000" })),
  o5 = Ea;
var i5 = styled(Box)(({ theme: e }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  overflowX: "clip",
  backgroundColor: e.palette.background.default,
}));
var Ja = styled(Container, { shouldForwardProp: (e) => e !== "largeBottom" && e !== "smallBottom" })(
    ({ largeBottom: e, smallBottom: r }) => ({ position: "relative", zIndex: 1, marginBottom: e ? 96 : r ? 64 : 80 }),
  ),
  l5 = Ja;
var g5 = styled(Box, { shouldForwardProp: (e) => e !== "isDark" && e !== "isScrolled" })(
    ({ theme: e, isDark: r, isScrolled: o }) => ({
      position: "fixed",
      top: "calc(72px + env(safe-area-inset-top, 0px))",
      zIndex: 1e3,
      width: "100%",
      padding: o ? e.spacing(0.8, 0) : e.spacing(1.5, 0),
      borderBottom: `1px solid ${o ? (r ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)") : "transparent"}`,
      background: r ? "rgba(10,10,12,0.85)" : "rgba(255,255,255,0.88)",
      backdropFilter: o ? "blur(24px) saturate(180%)" : "none",
      WebkitBackdropFilter: o ? "blur(24px) saturate(180%)" : "none",
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      boxShadow: o ? (r ? "0 10px 30px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.06)") : "none",
      transition: [
        "padding 450ms cubic-bezier(0.16, 1, 0.3, 1)",
        "background-color 350ms ease",
        "border-color 350ms ease",
        "box-shadow 450ms cubic-bezier(0.16, 1, 0.3, 1)",
        "backdrop-filter 450ms ease",
      ].join(", "),
      [e.breakpoints.down("md")]: { position: "relative", top: 0 },
    }),
  ),
  p5 = styled(IconButton, { shouldForwardProp: (e) => e !== "isDark" })(({ theme: e, isDark: r }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: 34,
    height: 34,
    backgroundColor: r ? "rgba(20,20,24,0.75)" : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: `1px solid ${r ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
    color: r ? "#FFFFFF" : "#111827",
    boxShadow: r ? "0 4px 14px rgba(0,0,0,0.4)" : "0 4px 14px rgba(0,0,0,0.08)",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    "&:hover": {
      backgroundColor: r ? "rgba(35,35,42,0.95)" : "#FFFFFF",
      transform: "translateY(-50%) scale(1.1)",
      boxShadow: r ? "0 6px 20px rgba(236,72,153,0.3)" : "0 6px 20px rgba(236,72,153,0.2)",
    },
    [e.breakpoints.down("sm")]: { display: "none" },
  })),
  Ya = styled(Box, {
    shouldForwardProp: (e) =>
      e !== "side" && e !== "direction" && e !== "isDark" && e !== "visible" && e !== "bottomOffset",
  })(({ theme: e, side: r, direction: o, isDark: a, visible: i = true, bottomOffset: s = 0 }) => {
    let l = r ?? o ?? "left",
      c =
        l === "left"
          ? a
            ? "linear-gradient(to right, rgba(11, 11, 15, 0.9) 0%, transparent 100%)"
            : "linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, transparent 100%)"
          : a
            ? "linear-gradient(to left, rgba(11, 11, 15, 0.9) 0%, transparent 100%)"
            : "linear-gradient(to left, rgba(255, 255, 255, 0.9) 0%, transparent 100%)";
    return {
      position: "absolute",
      top: 0,
      bottom: s,
      [l]: 0,
      width: 44,
      pointerEvents: "none",
      zIndex: 5,
      background: c,
      opacity: i ? 1 : 0,
      transition: "opacity 0.25s ease",
      [e.breakpoints.up("md")]: { width: 56 },
    };
  }),
  b5 = Ya;
var $t = styled(Box)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: e.spacing(3),
    gap: e.spacing(2),
    flexWrap: "wrap",
    [e.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "stretch",
      gap: e.spacing(1.5),
      marginBottom: e.spacing(2),
    },
  })),
  Gt = styled(Box)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing(1.5),
    width: "100%",
    [e.breakpoints.up("md")]: { width: "auto" },
  })),
  Vt = styled(Box, { shouldForwardProp: (e) => e !== "gradient" })(({ gradient: e = "amber" }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 14,
    background: {
      amber: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)",
      pink: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
      cyan: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
      purple: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      emerald: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
    }[e],
    color: "#FFFFFF",
    boxShadow: "0 4px 16px rgba(236, 72, 153, 0.35)",
  })),
  jt = styled(Typography)(({ theme: e }) => ({
    fontSize: "1.75rem",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    [e.breakpoints.down("sm")]: { fontSize: "1.4rem" },
  })),
  Jt = styled(Typography, { shouldForwardProp: (e) => e !== "isDark" })(({ isDark: e }) => ({
    fontSize: "0.875rem",
    color: e ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)",
  })),
  x5 = styled(Box)(({ theme: e }) => ({ display: "flex", alignItems: "center", gap: e.spacing(1) })),
  h5 = styled(IconButton, { shouldForwardProp: (e) => e !== "isDark" })(({ isDark: e }) => ({
    backgroundColor: e ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)",
    border: `1px solid ${e ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)"}`,
    color: e ? "#FFFFFF" : "#111827",
    transition: "all 0.2s ease",
    "&:hover": { backgroundColor: e ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)", transform: "scale(1.06)" },
  }));
var _t = createContext({ mode: "light", resolvedMode: "light", toggleGlassMode: () => {}, setGlassMode: () => {} }),
  kr = () => useContext(_t);
function Xt({ children: e, defaultMode: r = "light", storageKey: o = "jivico-theme-mode" }) {
  let [a, i] = useState(r),
    [s, l] = useState("light");
  (useEffect(() => {
    try {
      let g = localStorage.getItem(o);
      (g === "light" || g === "dark" || g === "system") && i(g);
    } catch {}
  }, [o]),
    useEffect(() => {
      if (typeof window > "u" || !window.matchMedia) return;
      let g = window.matchMedia("(prefers-color-scheme: dark)"),
        y = () => {
          l(g.matches ? "dark" : "light");
        };
      return (
        y(),
        g.addEventListener("change", y),
        () => {
          g.removeEventListener("change", y);
        }
      );
    }, []));
  let c = a === "system" ? s : a,
    p = (g) => {
      typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function"
        ? document.startViewTransition(() => {
            g();
          })
        : g();
    },
    d = () => {
      p(() => {
        i((g) => {
          let x = (g === "system" ? s : g) === "light" ? "dark" : "light";
          try {
            localStorage.setItem(o, x);
          } catch {}
          return x;
        });
      });
    },
    u = (g) => {
      p(() => {
        i(g);
        try {
          localStorage.setItem(o, g);
        } catch {}
      });
    },
    b = useMemo(() => ({ mode: a, resolvedMode: c, toggleGlassMode: d, setGlassMode: u }), [a, c]);
  return jsx(_t.Provider, { value: b, children: e });
}
var T5 = ({ title: e, subtitle: r, icon: o, iconGradient: a = "pink", desktopAction: i, controls: s }) => {
  let { mode: l } = kr();
  return jsxs($t, {
    sx: {
      flexDirection: "row !important",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      gap: { xs: 1.5, sm: 2 },
    },
    children: [
      jsxs(Gt, {
        sx: { flex: 1, minWidth: 0 },
        children: [
          o && jsx(Vt, { gradient: a, sx: { flexShrink: 0 }, children: o }),
          jsxs(Box, {
            sx: { minWidth: 0 },
            children: [
              jsx(jt, {
                variant: "h3",
                sx: {
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
                children: e,
              }),
              r &&
                jsx(Jt, {
                  isDark: l === "dark",
                  sx: {
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  },
                  children: r,
                }),
            ],
          }),
        ],
      }),
      jsxs(Box, {
        sx: { display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 }, flexShrink: 0, width: "auto" },
        children: [
          s,
          i &&
            jsx(Box, {
              sx: { display: { xs: "none", md: "block" } },
              children: jsxs(Button, {
                variant: "contained",
                color: "primary",
                component: i.href ? "a" : "button",
                href: i.href,
                onClick: i.onClick,
                sx: { px: 3, py: 1, textDecoration: "none" },
                children: [i.label, jsx(ArrowRight, { size: 16, style: { marginLeft: 8 } })],
              }),
            }),
        ],
      }),
    ],
  });
};
var L5 = styled(AppBar, { shouldForwardProp: (e) => e !== "isScrolled" })(({ theme: e, isScrolled: r }) => {
  let o = e.palette.mode === "dark";
  return {
    position: "sticky",
    top: 0,
    paddingTop: "env(safe-area-inset-top, 0px)",
    backgroundColor: r ? (o ? "rgba(10, 10, 12, 0.85)" : "rgba(255, 255, 255, 0.88)") : "transparent",
    backdropFilter: r ? "blur(20px) saturate(180%)" : "none",
    WebkitBackdropFilter: r ? "blur(20px) saturate(180%)" : "none",
    borderBottom: r ? `1px solid ${o ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"}` : "1px solid transparent",
    backgroundImage: r
      ? "none"
      : o
        ? "linear-gradient(180deg, rgba(10, 10, 12, 0.85) 0%, rgba(10, 10, 12, 0) 100%)"
        : "linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 100%)",
    zIndex: 1100,
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    [e.breakpoints.down("md")]: { position: "relative" },
  };
});
var A5 = styled(Box)({
    position: "relative",
    zIndex: 1,
    paddingTop: 48,
    paddingBottom: 128,
    "@media (max-width:899.95px)": { paddingTop: 32, paddingBottom: 80 },
  }),
  H5 = styled(Typography)(({ theme: e }) => ({
    fontWeight: 800,
    marginBottom: e.spacing(3),
    letterSpacing: "-0.03em",
    fontSize: "4.2rem",
    lineHeight: 1.08,
    [e.breakpoints.down("md")]: { fontSize: "1.8rem" },
  })),
  W5 = styled(Typography)(({ theme: e }) => ({
    opacity: 0.7,
    marginBottom: e.spacing(5),
    fontWeight: 400,
    maxWidth: 480,
    lineHeight: 1.6,
    fontSize: "1.05rem",
  })),
  E5 = styled(Box)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing(2),
    flexWrap: "wrap",
    [e.breakpoints.down("sm")]: { gap: e.spacing(0), justifyContent: "space-between" },
  })),
  $5 = styled(Ot)(({ theme: e }) => ({
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 24,
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    [e.breakpoints.down("sm")]: { bottom: 14, left: 14, right: 14, padding: "14px 16px", borderRadius: 20 },
  })),
  G5 = styled(Typography)({ fontWeight: 800 }),
  V5 = styled(Typography)({ opacity: 0.6 }),
  j5 = styled(Box, { shouldForwardProp: (e) => e !== "isDark" })(({ theme: e, isDark: r }) => ({
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    borderRadius: "32px",
    overflow: "hidden",
    boxShadow: r ? "0 24px 80px rgba(0,0,0,0.5)" : "0 24px 80px rgba(0,0,0,0.08)",
    [e.breakpoints.down("md")]: { aspectRatio: "4/5", minHeight: 450, borderRadius: "26px" },
    [e.breakpoints.down("sm")]: { aspectRatio: "3/4", minHeight: 480, borderRadius: "22px" },
  })),
  J5 = styled("img")({ width: "100%", height: "100%", objectFit: "cover", display: "block" });
var oi = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -25px) scale(1.08); }
  100% { transform: translate(-20px, 35px) scale(0.95); }
`,
  X5 = styled(Box, { shouldForwardProp: (e) => e !== "variant" && e !== "isDark" })(({ isDark: e, variant: r }) => {
    let o = {
        primary: {
          top: "5%",
          left: "10%",
          width: "45vw",
          height: "45vw",
          color: e ? "rgba(246, 245, 242, 0.09)" : "rgba(17, 17, 17, 0.055)",
          duration: "18s",
        },
        secondary: {
          top: "35%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          color: e ? "rgba(217, 217, 207, 0.1)" : "rgba(104, 104, 104, 0.06)",
          duration: "22s",
        },
        warm: {
          top: "60%",
          left: "5%",
          width: "45vw",
          height: "45vw",
          color: e ? "rgba(217, 217, 207, 0.08)" : "rgba(246, 245, 242, 0.6)",
          duration: "20s",
        },
        pink: {
          top: "5%",
          left: "10%",
          width: "45vw",
          height: "45vw",
          color: e ? "rgba(246, 245, 242, 0.09)" : "rgba(17, 17, 17, 0.055)",
          duration: "18s",
        },
        purple: {
          top: "35%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          color: e ? "rgba(217, 217, 207, 0.1)" : "rgba(104, 104, 104, 0.06)",
          duration: "22s",
        },
        amber: {
          top: "75%",
          right: "15%",
          width: "35vw",
          height: "35vw",
          color: e ? "rgba(217, 217, 207, 0.08)" : "rgba(246, 245, 242, 0.6)",
          duration: "25s",
        },
        blue: {
          top: "35%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          color: e ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
          duration: "22s",
        },
        cyan: {
          top: "20%",
          left: "50%",
          width: "35vw",
          height: "35vw",
          color: e ? "rgba(104, 104, 104, 0.1)" : "rgba(6, 182, 212, 0.04)",
          duration: "19s",
        },
      },
      a = o[r] ?? o.primary;
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
      ...(a.top && { top: a.top }),
      ...(a.bottom && { bottom: a.bottom }),
      ...(a.left && { left: a.left }),
      ...(a.right && { right: a.right }),
      width: a.width,
      height: a.height,
      background: `radial-gradient(circle, ${a.color} 0%, transparent 70%)`,
      animation: `${oi} ${a.duration} ease-in-out infinite alternate`,
      "@media (max-width: 600px)": { filter: "blur(40px)", WebkitFilter: "blur(40px)" },
    };
  }),
  U5 = styled(Box, { shouldForwardProp: (e) => e !== "isDark" })(({ isDark: e }) => ({
    position: "absolute",
    top: "-30%",
    right: "-10%",
    width: "50%",
    height: "160%",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${e ? "rgba(217, 217, 207, 0.08)" : "rgba(17, 17, 17, 0.04)"} 0%, transparent 70%)`,
    filter: "blur(60px)",
    willChange: "transform",
    pointerEvents: "none",
  }));
var Kt = "linear-gradient(135deg, #111111 0%, #686868 100%)",
  Qt = "linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)",
  Q5 = styled$1("span")(({ isDark: e }) => ({
    background: e ? Qt : Kt,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline",
  })),
  D5 = styled$1(Typography)(({ isDark: e }) => ({
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 1.2,
    fontSize: "1.35rem",
    display: "inline-block",
    paddingBottom: "4px",
    marginBottom: "-4px",
    background: e ? Qt : Kt,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }));
function ai() {
  return jsxs(Fragment, {
    children: [
      jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      jsx("link", { href: It, rel: "stylesheet" }),
    ],
  });
}
var oc = ai;
var gi = styled(Button, { shouldForwardProp: (e) => e !== "isDark" })(({ theme: e, isDark: r }) => {
  let o = r ?? e.palette.mode === "dark";
  return {
    width: "100%",
    padding: "12px 24px",
    borderRadius: 16,
    border: `1px solid ${o ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
    color: o ? "#FFFFFF" : "#111827",
    backgroundColor: o ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
    backdropFilter: "blur(8px)",
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: o ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
      borderColor: o ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
    },
  };
});
function sc({ href: e, label: r = "View All", onClick: o }) {
  return jsx(Box, {
    sx: { display: { xs: "block", md: "none" }, mt: 3, px: 2 },
    children: jsx(gi, {
      component: e ? "a" : "button",
      href: e,
      onClick: o,
      endIcon: jsx(ArrowRight, { size: 16 }),
      children: r,
    }),
  });
}
var mi = styled(Box, { shouldForwardProp: (e) => e !== "isDark" })(({ theme: e, isDark: r }) => {
    let o = r ?? e.palette.mode === "dark";
    return {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundColor: o ? "#1C1F26" : "#FFFFFF",
      backgroundImage: o
        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 100%)",
      border: `1px solid ${o ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"}`,
      boxShadow: o
        ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
        : "0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)",
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
        pointerEvents: "none",
      },
      "&:hover": {
        transform: "translateY(-8px) scale(1.01)",
        boxShadow: o
          ? "0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
          : "0 12px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 1)",
        borderColor: o ? "rgba(236, 72, 153, 0.5)" : "rgba(236, 72, 153, 0.4)",
        "&::after": { left: "160%", transition: "all 0.8s ease" },
      },
    };
  }),
  gc = styled(Box, { shouldForwardProp: (e) => e !== "isDark" && e !== "spotlight" })(
    ({ theme: e, isDark: r, spotlight: o = "pink" }) => {
      let a = r ?? e.palette.mode === "dark",
        i = {
          pink: {
            primary: a ? "rgba(236, 72, 153, 0.18)" : "rgba(236, 72, 153, 0.1)",
            secondary: a ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.05)",
          },
          amber: {
            primary: a ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.08)",
            secondary: a ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.05)",
          },
          cyan: {
            primary: a ? "rgba(6, 182, 212, 0.18)" : "rgba(6, 182, 212, 0.08)",
            secondary: a ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
          },
          purple: {
            primary: a ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.08)",
            secondary: a ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.05)",
          },
        }[o];
      return {
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1.25",
        overflow: "hidden",
        background: a
          ? `radial-gradient(circle at 50% 45%, ${i.primary} 0%, ${i.secondary} 40%, rgba(15, 17, 26, 0.85) 100%)`
          : `radial-gradient(circle at 50% 45%, ${i.primary} 0%, ${i.secondary} 40%, rgba(238, 242, 248, 0.95) 100%)`,
        borderBottom: `1px solid ${a ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)"}`,
        flexShrink: 0,
        "& img": { transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" },
        "&:hover img": { transform: "scale(1.08)" },
      };
    },
  ),
  pc = styled(IconButton, { shouldForwardProp: (e) => e !== "isDark" && e !== "liked" })(
    ({ theme: e, isDark: r, liked: o }) => {
      let a = r ?? e.palette.mode === "dark";
      return {
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 2,
        width: 36,
        height: 36,
        backgroundColor: a ? "rgba(20, 20, 28, 0.65)" : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${a ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.9)"}`,
        boxShadow: a ? "0 4px 12px rgba(0, 0, 0, 0.4)" : "0 4px 12px rgba(0, 0, 0, 0.08)",
        color: o ? "#EC4899" : a ? "#FFFFFF" : "#111827",
        transition: "all 0.25s ease",
        "&:hover": {
          backgroundColor: "#EC4899",
          color: "#FFFFFF",
          transform: "scale(1.12)",
          boxShadow: "0 6px 16px rgba(236, 72, 153, 0.45)",
        },
      };
    },
  ),
  bc = styled(Box, { shouldForwardProp: (e) => e !== "tagColor" && e !== "gradient" })(
    ({ theme: e, tagColor: r, gradient: o }) => ({
      position: "absolute",
      top: 12,
      left: 12,
      zIndex: 2,
      padding: e.spacing(0.4, 1.2),
      borderRadius: 999,
      fontSize: "0.66rem",
      fontWeight: 900,
      letterSpacing: 0.6,
      color: "#FFFFFF",
      background: o || r || "#EC4899",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
      textTransform: "uppercase",
      backdropFilter: "blur(8px)",
      whiteSpace: "nowrap",
      [e.breakpoints.down("sm")]: { top: 8, left: 8, padding: "3px 8px", fontSize: "0.58rem", letterSpacing: 0.3 },
    }),
  ),
  mc = styled(Box)(({ theme: e }) => ({
    padding: e.spacing(2.2),
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1),
    flexGrow: 1,
    justifyContent: "space-between",
    [e.breakpoints.down("sm")]: { padding: e.spacing(1.5) },
  })),
  uc = styled(Typography)(({ theme: e }) => ({
    fontWeight: 800,
    fontSize: "0.92rem",
    lineHeight: 1.35,
    minHeight: "2.7em",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [e.breakpoints.down("sm")]: { fontSize: "0.82rem", minHeight: "2.5em" },
  })),
  xc = styled(Box, { shouldForwardProp: (e) => e !== "isDark" && e !== "variant" })(
    ({ theme: e, isDark: r, variant: o = "pink" }) => {
      let a = r ?? e.palette.mode === "dark",
        i = o === "pink";
      return {
        display: "flex",
        alignItems: "center",
        gap: e.spacing(0.6),
        padding: e.spacing(0.4, 0.9),
        borderRadius: 8,
        background: a
          ? i
            ? "linear-gradient(90deg, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.18) 100%)"
            : "linear-gradient(90deg, rgba(245, 158, 11, 0.18) 0%, rgba(236, 72, 153, 0.18) 100%)"
          : i
            ? "linear-gradient(90deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)"
            : "linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
        border: `1px solid ${a ? (i ? "rgba(236, 72, 153, 0.3)" : "rgba(245, 158, 11, 0.3)") : i ? "rgba(236, 72, 153, 0.2)" : "rgba(245, 158, 11, 0.2)"}`,
        fontSize: "0.72rem",
        fontWeight: 800,
        color: a ? (i ? "#F472B6" : "#FBBF24") : i ? "#DB2777" : "#D97706",
        marginTop: "auto",
      };
    },
  ),
  hc = mi;
var ur = (e = "editorial") => {
  switch (e) {
    case "none":
      return { display: "none" };
    case "minimal":
      return { background: "linear-gradient(90deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.14) 44%, rgba(0,0,0,0.02) 72%)" };
    case "glass":
      return { background: "linear-gradient(90deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.20) 46%, rgba(0,0,0,0.03) 75%)" };
    case "editorial-soft":
      return {
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.20) 34%, rgba(0,0,0,0.06) 58%, rgba(0,0,0,0.00) 78%), linear-gradient(180deg, rgba(0,0,0,0.02) 55%, rgba(0,0,0,0.18) 100%)",
      };
    case "spotlight":
    case "editorial-center":
      return {
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.48) 42%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.02) 100%), linear-gradient(180deg, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.32) 100%)",
      };
    case "spotlight-soft":
    case "editorial-center-soft":
      return {
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.26) 42%, rgba(0,0,0,0.08) 72%, rgba(0,0,0,0.00) 100%), linear-gradient(180deg, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.18) 100%)",
      };
    case "cinematic-soft":
    case "editorial-full-soft":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.44) 100%), linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.12) 100%)",
      };
    case "cinematic-deep":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.80) 100%), linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.32) 100%)",
      };
    case "cinematic":
    case "editorial-full":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.68) 100%), linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.22) 100%)",
      };
    default:
      return {
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.34) 34%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0.02) 78%), linear-gradient(180deg, rgba(0,0,0,0.04) 55%, rgba(0,0,0,0.28) 100%)",
      };
  }
};
var vi = 5e3,
  Jr = (e) => {
    if (e !== void 0)
      return typeof e == "number" || typeof e == "string" ? e : { xs: e.xs, sm: e.sm, md: e.md, lg: e.lg, xl: e.xl };
  },
  yi = (e) => {
    switch (e) {
      case "square":
        return 0;
      case "soft":
        return 14;
      default:
        return 2;
    }
  },
  hr = (e) =>
    e
      ? Array.isArray(e)
        ? e.some(hr)
        : typeof e == "object" && e !== null
          ? "fontSize" in e && e.fontSize !== void 0
          : false
      : false,
  oa = {
    small: {
      minHeight: { xs: 260, md: 320 },
      aspectRatio: { xs: "16/10", md: "21/9" },
      title: { xs: "1.5rem", md: "1.5rem", lg: "1.75rem" },
      description: { xs: "0.875rem", md: "0.95rem" },
      eyebrow: "0.65rem",
      buttonSize: "small",
      contentPadding: { xs: 2.5, md: 4, lg: 5 },
      arrowSize: 36,
      navigationGap: 1,
    },
    medium: {
      minHeight: { xs: 320, md: 400 },
      aspectRatio: { xs: "16/10", md: "16/8" },
      title: { xs: "2rem", md: "3rem", lg: "3.5rem" },
      description: { xs: "0.9rem", md: "1rem" },
      eyebrow: "0.68rem",
      buttonSize: "medium",
      contentPadding: { xs: 3, md: 5, lg: 6 },
      arrowSize: 40,
      navigationGap: 1.25,
    },
    large: {
      minHeight: { xs: 380, md: 480 },
      aspectRatio: { xs: "4/3", md: "16/9" },
      title: { xs: "2.35rem", md: "3.5rem", lg: "4.25rem" },
      description: { xs: "0.95rem", md: "1.05rem" },
      eyebrow: "0.7rem",
      buttonSize: "medium",
      contentPadding: { xs: 3.5, md: 6, lg: 8 },
      arrowSize: 44,
      navigationGap: 1.5,
    },
    hero: {
      minHeight: { xs: 440, md: 560 },
      aspectRatio: { xs: "1/1", md: "21/9" },
      title: { xs: "2.75rem", md: "3.5rem", lg: "3.5rem" },
      description: { xs: "1rem", md: "1.1rem" },
      eyebrow: "0.72rem",
      buttonSize: "large",
      contentPadding: { xs: 4, md: 8, lg: 10 },
      arrowSize: 48,
      navigationGap: 1.75,
    },
  },
  wi = ({ href: e, label: r, target: o, rel: a, onClick: i }) =>
    jsx(Box, {
      component: "a",
      href: e,
      target: o,
      rel: a,
      "aria-label": r,
      onClick: i,
      sx: {
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "block",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        cursor: "pointer",
      },
    }),
  Si = ({
    items: e,
    ImageComponent: r,
    imageSizes: o = "100vw",
    imagePriority: a = false,
    variant: i = "editorial",
    size: s = "hero",
    transition: l = "cinematic",
    autoplay: c = false,
    interval: p = vi,
    loop: d = true,
    pauseOnHover: u = true,
    showArrows: b = true,
    showProgress: g = true,
    navigation: y = "dots",
    activeIndex: x,
    defaultActiveIndex: f = 0,
    onActiveIndexChange: w,
    onNavigate: k,
    swipe: S = true,
    radius: O = "rounded",
    height: _,
    minHeight: Z,
    maxHeight: Q,
    aspectRatio: E,
    containerSx: pe,
    className: ue,
    "aria-label": xe = "Showcase",
  }) => {
    let N = useTheme(),
      A = useMediaQuery(N.breakpoints.down("md")),
      [B, X] = useState(f),
      ie = x !== void 0,
      R = ie ? x : B,
      [be, le] = useState(false),
      V = useRef(null),
      M = useRef(null),
      $ = useRef(false),
      z = oa[s] ?? oa.hero,
      I = useMemo(() => e.filter(Boolean), [e]),
      P = I.length,
      j = P === 0 ? 0 : Math.min(Math.max(R, 0), P - 1),
      Qe = I[j],
      Te = useCallback(
        (n) => {
          if (!P) return;
          let m = n;
          (d ? (m = (n + P) % P) : (m = Math.max(0, Math.min(n, P - 1))), ie || X(m));
          let h = I[m];
          h && w?.(m, h);
        },
        [P, d, ie, w, I],
      ),
      L = useCallback(() => {
        P && ((!d && j >= P - 1) || Te(j + 1));
      }, [j, P, d, Te]),
      ee = useCallback(() => {
        P && ((!d && j <= 0) || Te(j - 1));
      }, [j, P, d, Te]),
      U = useRef(p),
      me = useRef(Date.now()),
      q = useRef(null);
    (useEffect(() => {
      ((U.current = p), (me.current = Date.now()));
    }, [j, p]),
      useEffect(() => {
        if (!c || P <= 1) return;
        if (u && be) {
          if (me.current) {
            let m = Date.now() - me.current,
              h = U.current - m;
            U.current = Math.max(0, h);
          }
          q.current && (clearTimeout(q.current), (q.current = null));
          return;
        }
        me.current = Date.now();
        let n = Math.max(50, U.current);
        return (
          (q.current = setTimeout(() => {
            L();
          }, n)),
          () => {
            q.current && (clearTimeout(q.current), (q.current = null));
          }
        );
      }, [c, p, P, u, be, j, L]),
      useEffect(() => {
        let n = (m) => {
          (m.key === "ArrowRight" && L(), m.key === "ArrowLeft" && ee());
        };
        return (window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n));
      }, [L, ee]));
    let D = useRef(false),
      Be = (n) => {
        if (!S) return;
        let m = n.touches[0];
        ((V.current = m.clientX), (M.current = m.clientY), ($.current = false));
      },
      Ne = (n) => {
        if (!S || V.current === null || M.current === null) return;
        let m = n.touches[0],
          h = m.clientX - V.current,
          C = m.clientY - M.current;
        (Math.abs(h) > 8 || Math.abs(C) > 8) && ($.current = true);
      },
      Ie = (n) => {
        if (!S || V.current === null || M.current === null) return;
        let m = n.changedTouches[0],
          h = m.clientX - V.current,
          C = m.clientY - M.current;
        ((V.current = null),
          (M.current = null),
          !(Math.abs(h) < 30 || Math.abs(h) < Math.abs(C)) && (h < 0 ? L() : ee()));
      },
      de = (n) => {
        S && ((V.current = n.clientX), (M.current = n.clientY), ($.current = false), (D.current = true));
      },
      he = (n) => {
        if (!S || !D.current || V.current === null || M.current === null) return;
        let m = n.clientX - V.current,
          h = n.clientY - M.current;
        (Math.abs(m) > 8 || Math.abs(h) > 8) && ($.current = true);
      },
      we = (n) => {
        if (!S || !D.current || V.current === null || M.current === null) {
          D.current = false;
          return;
        }
        D.current = false;
        let m = n.clientX - V.current,
          h = n.clientY - M.current;
        ((V.current = null),
          (M.current = null),
          Math.abs(m) >= 30 && Math.abs(m) > Math.abs(h) && (m < 0 ? L() : ee()));
      };
    if (!Qe) return null;
    let ne = yi(O),
      fe = Jr(_),
      We = Jr(Z ?? (_ === void 0 ? z.minHeight : void 0)),
      ar = Jr(Q),
      Se =
        _ === void 0
          ? E !== void 0
            ? typeof E == "string"
              ? E
              : { xs: E.xs, sm: E.sm, md: E.md, lg: E.lg, xl: E.xl }
            : z.aspectRatio
          : void 0,
      ve = (n) => {
        let m = n === j;
        return l === "fade"
          ? { opacity: m ? 1 : 0, transform: "none", transition: "opacity 700ms ease" }
          : l === "slide"
            ? {
                opacity: m ? 1 : 0,
                transform: m ? "translateX(0)" : n < j ? "translateX(-4%)" : "translateX(4%)",
                transition: "opacity 700ms ease, transform 700ms ease",
              }
            : {
                opacity: m ? 1 : 0,
                transform: m ? "scale(1)" : "scale(1.035)",
                transition: "opacity 900ms ease, transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
              };
      },
      Ce = (n) => ur(n ?? i),
      Ye = (n, m, h) => {
        let C = !!(a && (m || h === 0));
        return r
          ? jsx(r, {
              src: A && n.media.mobileSrc ? n.media.mobileSrc : n.media.src,
              alt: n.media.alt,
              fill: true,
              sizes: o,
              priority: C,
              loading: C ? "eager" : "lazy",
              fetchPriority: C ? "high" : "auto",
              style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
            })
          : A && n.media.mobileSrc
            ? jsx(Box, {
                component: "img",
                src: n.media.mobileSrc,
                alt: n.media.alt,
                loading: C ? "eager" : "lazy",
                fetchPriority: C ? "high" : "auto",
                sx: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              })
            : jsx(Box, {
                component: "img",
                src: n.media.src,
                alt: n.media.alt,
                loading: C ? "eager" : "lazy",
                fetchPriority: C ? "high" : "auto",
                sx: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              });
      };
    return jsxs(Box, {
      className: ue,
      role: "region",
      "aria-label": xe,
      onMouseEnter: () => {
        u && le(true);
      },
      onMouseLeave: (n) => {
        (u && le(false), we(n));
      },
      onTouchStart: Be,
      onTouchMove: Ne,
      onTouchEnd: Ie,
      onMouseDown: de,
      onMouseMove: he,
      onMouseUp: we,
      sx: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: S ? "grab" : "default",
        "&:active": { cursor: S ? "grabbing" : "default" },
        height: fe,
        minHeight: We,
        maxHeight: ar,
        aspectRatio: Se,
        borderRadius: ne,
        bgcolor: "background.default",
        touchAction: "auto",
        ...pe,
      },
      children: [
        I.map((n, m) => {
          let h = m === j;
          return jsxs(
            Box,
            {
              "aria-hidden": !h,
              sx: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: h ? "auto" : "none",
                ...ve(m),
              },
              children: [
                jsxs(Box, {
                  sx: { position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%" },
                  children: [
                    Ye(n, h, m),
                    jsx(Box, { sx: { position: "absolute", inset: 0, zIndex: 1, ...Ce(n.variant) } }),
                  ],
                }),
                h &&
                  n.href &&
                  jsx(wi, {
                    href: n.href,
                    label: n.linkLabel ?? (n.title ? `View ${n.title}` : n.media.alt || "View details"),
                    onClick: (C) => {
                      if ($.current) {
                        C.preventDefault();
                        return;
                      }
                      (C.preventDefault(), k?.(n, j, C));
                    },
                  }),
                jsx(Box, {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: n.contentAlign === "center" ? "center" : "flex-end",
                    alignItems:
                      n.contentAlign === "center" ? "center" : n.contentAlign === "right" ? "flex-end" : "flex-start",
                    p: z.contentPadding,
                    pointerEvents: "none",
                    color: "#fff",
                    fontKerning: "normal",
                    fontOpticalSizing: "auto",
                  },
                  children: n.content
                    ? n.content
                    : jsxs(Box, {
                        sx: [
                          {
                            maxWidth: { xs: "92%", sm: "78%", md: "58%", lg: "50%" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems:
                              n.contentAlign === "center"
                                ? "center"
                                : n.contentAlign === "right"
                                  ? "flex-end"
                                  : "flex-start",
                            textAlign:
                              n.contentAlign === "center" ? "center" : n.contentAlign === "right" ? "right" : "left",
                            gap: { xs: 0.9, md: 1.15 },
                          },
                          ...(Array.isArray(n.contentSx) ? n.contentSx : [n.contentSx]),
                        ],
                        children: [
                          n.eyebrow &&
                            jsx(Typography, {
                              component: "div",
                              sx: [
                                {
                                  ...(!hr(n.eyebrowSx) && { fontSize: z.eyebrow }),
                                  fontWeight: 550,
                                  lineHeight: 1.2,
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  opacity: 0.9,
                                },
                                ...(Array.isArray(n.eyebrowSx) ? n.eyebrowSx : [n.eyebrowSx]),
                              ],
                              children: n.eyebrow,
                            }),
                          n.title &&
                            jsx(Typography, {
                              component: "h2",
                              sx: [
                                {
                                  ...(!hr(n.titleSx) && { fontSize: z.title }),
                                  lineHeight: 1.02,
                                  fontWeight: 550,
                                  letterSpacing: "-0.025em",
                                  maxWidth: { xs: "100%", md: "720px" },
                                },
                                ...(Array.isArray(n.titleSx) ? n.titleSx : [n.titleSx]),
                              ],
                              children: n.title,
                            }),
                          n.description &&
                            jsx(Typography, {
                              component: "p",
                              sx: [
                                {
                                  m: 0,
                                  maxWidth: { xs: "100%", md: "560px" },
                                  ...(!hr(n.descriptionSx) && { fontSize: z.description }),
                                  fontWeight: 400,
                                  lineHeight: 1.5,
                                  letterSpacing: "-0.005em",
                                  opacity: 0.9,
                                },
                                ...(Array.isArray(n.descriptionSx) ? n.descriptionSx : [n.descriptionSx]),
                              ],
                              children: n.description,
                            }),
                          n.action &&
                            (n.action.label || n.action.href || n.action.onClick) &&
                            jsx(Box, {
                              sx: { pointerEvents: "auto", mt: { xs: 0.5, md: 1 } },
                              children: n.action.href
                                ? jsx(Button, {
                                    href: n.action.href,
                                    variant: n.action.variant ?? "contained",
                                    color: n.action.color ?? "primary",
                                    size: n.action.size ?? z.buttonSize,
                                    tabIndex: h ? 0 : -1,
                                    endIcon: n.action.showArrow !== false ? jsx(ArrowRight, { size: 16 }) : void 0,
                                    target: n.action.target,
                                    rel: n.action.rel,
                                    onClick: (C) => {
                                      (C.preventDefault(), !$.current && (n.action?.onClick?.(C), k?.(n, j, C)));
                                    },
                                    "aria-label": n.action.ariaLabel,
                                    sx: [
                                      {
                                        borderRadius: 999,
                                        whiteSpace: "nowrap",
                                        fontWeight: 550,
                                        letterSpacing: "-0.01em",
                                        textTransform: "none",
                                        lineHeight: 1.2,
                                        "& .MuiButton-endIcon": { ml: 0.75 },
                                      },
                                      ...(Array.isArray(n.action.sx) ? n.action.sx : [n.action.sx]),
                                    ],
                                    children: n.action.label,
                                  })
                                : jsx(Button, {
                                    variant: n.action.variant ?? "contained",
                                    color: n.action.color ?? "primary",
                                    size: n.action.size ?? z.buttonSize,
                                    tabIndex: h ? 0 : -1,
                                    endIcon: n.action.showArrow !== false ? jsx(ArrowRight, { size: 16 }) : void 0,
                                    onClick: (C) => {
                                      $.current || (n.action?.onClick?.(C), k?.(n, j, C));
                                    },
                                    "aria-label": n.action.ariaLabel,
                                    sx: [
                                      {
                                        borderRadius: 999,
                                        whiteSpace: "nowrap",
                                        fontWeight: 550,
                                        letterSpacing: "-0.01em",
                                        textTransform: "none",
                                        lineHeight: 1.2,
                                        "& .MuiButton-endIcon": { ml: 0.75 },
                                      },
                                      ...(Array.isArray(n.action.sx) ? n.action.sx : [n.action.sx]),
                                    ],
                                    children: n.action.label,
                                  }),
                            }),
                        ],
                      }),
                }),
                n.sideLabel &&
                  jsx(Box, {
                    sx: {
                      position: "absolute",
                      top: "50%",
                      right: { xs: 85, md: 105, lg: 120 },
                      zIndex: 4,
                      transform: "translateY(-50%) rotate(-90deg)",
                      transformOrigin: "center center",
                      width: 0,
                      height: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    },
                    children: jsx(Typography, {
                      sx: [
                        {
                          ...(!hr(n.sideLabelSx) && { fontSize: "0.65rem" }),
                          fontWeight: 550,
                          lineHeight: 1.2,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#fff",
                          opacity: 0.75,
                          whiteSpace: "nowrap",
                        },
                        ...(Array.isArray(n.sideLabelSx) ? n.sideLabelSx : [n.sideLabelSx]),
                      ],
                      children: n.sideLabel,
                    }),
                  }),
              ],
            },
            n.id,
          );
        }),
        b &&
          P > 1 &&
          jsxs(Fragment, {
            children: [
              jsx(IconButton, {
                "aria-label": "Previous slide",
                onClick: ee,
                disabled: !d && j === 0,
                sx: {
                  position: "absolute",
                  zIndex: 5,
                  left: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: z.arrowSize,
                  height: z.arrowSize,
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
                  "&.Mui-disabled": { opacity: 0.35 },
                },
                children: jsx(ArrowLeft, { size: A ? 18 : 20 }),
              }),
              jsx(IconButton, {
                "aria-label": "Next slide",
                onClick: L,
                disabled: !d && j === P - 1,
                sx: {
                  position: "absolute",
                  zIndex: 5,
                  right: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: z.arrowSize,
                  height: z.arrowSize,
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
                  "&.Mui-disabled": { opacity: 0.35 },
                },
                children: jsx(ArrowRight, { size: A ? 18 : 20 }),
              }),
            ],
          }),
        y !== "none" &&
          P > 1 &&
          jsx(Box, {
            sx: {
              position: "absolute",
              zIndex: 5,
              ...(y === "vertical"
                ? {
                    right: { xs: 14, md: 58, lg: 76 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: z.navigationGap,
                    alignItems: "center",
                    justifyContent: "center",
                  }
                : {
                    left: "50%",
                    bottom: { xs: 16, sm: 24 },
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "row",
                    gap: z.navigationGap,
                    alignItems: "center",
                    justifyContent: "center",
                  }),
            },
            children: I.map((n, m) => {
              let h = m === j;
              return jsx(
                Box,
                {
                  component: "button",
                  type: "button",
                  "aria-label": `Go to slide ${m + 1}`,
                  "aria-current": h ? "true" : void 0,
                  onClick: () => Te(m),
                  sx: {
                    appearance: "none",
                    border: 0,
                    padding: 0,
                    margin: 0,
                    minWidth: 44,
                    minHeight: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "transparent",
                    cursor: "pointer",
                    transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                    "&:focus-visible": { outline: `2px solid ${N.palette.primary.main}`, outlineOffset: 3 },
                    "&:hover": { transform: y === "vertical" ? "scale(1.08)" : "none" },
                  },
                  children:
                    y === "vertical"
                      ? jsx(Box, {
                          sx: {
                            width: h ? 3 : 1,
                            height: h ? 42 : 20,
                            borderRadius: 999,
                            backgroundColor: h ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                            transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                            boxShadow: h ? "0 0 10px rgba(255,255,255,0.18)" : "none",
                          },
                        })
                      : jsx(Box, {
                          sx: {
                            width: h ? 24 : 7,
                            height: 7,
                            borderRadius: 999,
                            backgroundColor: h ? "#FFFFFF" : "rgba(255,255,255,0.48)",
                            transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                            boxShadow: h ? "0 0 10px rgba(255,255,255,0.16)" : "none",
                          },
                        }),
                },
                n.id,
              );
            }),
          }),
        g &&
          P > 1 &&
          jsx(Box, {
            sx: {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 6,
              height: 2,
              borderBottomLeftRadius: ne,
              borderBottomRightRadius: ne,
              bgcolor: "rgba(255, 255, 255, 0.25)",
              overflow: "hidden",
            },
            children: jsx(
              Box,
              {
                sx: {
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  ...(c
                    ? {
                        width: "0%",
                        animation: `showcaseProgress ${p}ms linear forwards`,
                        animationPlayState: u && be ? "paused" : "running",
                      }
                    : { width: `${((j + 1) / P) * 100}%`, transition: "width 400ms ease" }),
                  "@keyframes showcaseProgress": { "0%": { width: "0%" }, "100%": { width: "100%" } },
                },
              },
              j,
            ),
          }),
      ],
    });
  };
var Nr = { xs: 2, sm: 3, md: 4, lg: 5, xl: 5 },
  zi = 2,
  Li = 5e3,
  Ii = (e, r, o) => e?.[o] ?? r[o];
function Pi({
  items: e,
  getKey: r,
  getImage: o,
  getTitle: a,
  getHref: i,
  renderContent: s,
  renderImage: l,
  renderItem: c,
  ImageComponent: p,
  columns: d = Nr,
  itemWidth: u,
  gap: b = zi,
  justifyContent: g = "flex-start",
  navigation: y = "arrows",
  renderPreviousButton: x,
  renderNextButton: f,
  swipe: w = true,
  autoplay: k = false,
  interval: S = Li,
  pauseOnHover: O = true,
  loop: _ = false,
  step: Z = 1,
  snap: Q = true,
  transition: E = "scale",
  imageAspectRatio: pe = "3 / 4",
  radius: ue = 0,
  itemSx: xe,
  sx: N,
  className: A,
  cursor: B,
  onNavigate: X,
  "aria-label": ie = "Content rail",
}) {
  let R = useTheme(),
    be = useMediaQuery(R.breakpoints.down("sm")),
    le = useMediaQuery(R.breakpoints.between("sm", "md")),
    V = useMediaQuery(R.breakpoints.between("md", "lg")),
    M = useMediaQuery(R.breakpoints.between("lg", "xl")),
    $ = G.useMemo(() => (be ? "xs" : le ? "sm" : V ? "md" : M ? "lg" : "xl"), [be, le, V, M]),
    z = Ii(d, Nr, $),
    I = u?.[$],
    P = G.useRef(null),
    [j, Qe] = G.useState(false),
    [Te, L] = G.useState(false),
    [ee, U] = G.useState(false),
    [me, q] = G.useState(0),
    D = useMediaQuery("(prefers-reduced-motion: reduce)"),
    Be = G.useCallback(
      (n) => {
        let m = u?.[n];
        if (m) return m;
        let h = d?.[n] ?? Nr[n];
        return `calc((100% - ${(h - 1) * b}px) / ${h})`;
      },
      [d, b, u],
    ),
    Ne = G.useMemo(
      () => ({
        xs: `0 0 ${Be("xs")}`,
        sm: `0 0 ${Be("sm")}`,
        md: `0 0 ${Be("md")}`,
        lg: `0 0 ${Be("lg")}`,
        xl: `0 0 ${Be("xl")}`,
      }),
      [Be],
    ),
    Ie = G.useMemo(() => Math.max(1, Math.ceil(e.length / Math.max(1, z))), [e.length, z]),
    de = G.useMemo(() => {
      let n = "cubic-bezier(0.22, 1, 0.36, 1)";
      switch (E) {
        case "fade":
          return {
            item: { transition: "box-shadow 300ms ease" },
            image: { transition: `transform 500ms ${n}` },
            overlay: { transition: "opacity 250ms ease" },
            hoverItem: {},
            hoverImage: {},
            hoverOverlay: { opacity: 1 },
          };
        case "scale":
          return {
            item: { transition: `transform 500ms ${n}, box-shadow 300ms ease` },
            image: { transition: `transform 500ms ${n}` },
            overlay: { transition: "opacity 250ms ease" },
            hoverItem: {},
            hoverImage: { transform: "scale(1.025)" },
            hoverOverlay: { opacity: 1 },
          };
        case "lift":
          return {
            item: { transition: `transform 500ms ${n}, box-shadow 300ms ease` },
            image: { transition: `transform 500ms ${n}` },
            overlay: { transition: "opacity 250ms ease" },
            hoverItem: { transform: "translateY(-4px)", boxShadow: R.shadows[6] },
            hoverImage: { transform: "scale(1.035)" },
            hoverOverlay: { opacity: 1 },
          };
        default:
          return { item: {}, image: {}, overlay: {}, hoverItem: {}, hoverImage: {}, hoverOverlay: {} };
      }
    }, [R.shadows, E]),
    he = G.useCallback(() => {
      let n = P.current;
      if (!n) return;
      let m = Math.max(0, n.scrollWidth - n.clientWidth),
        h = n.scrollLeft;
      (L(h > 1), U(h < m - 1));
      let C = n.querySelector("[data-rail-item]");
      if (!C) {
        q(0);
        return;
      }
      let re = C.parentElement,
        se = window.getComputedStyle(re ?? C),
        Ee = parseFloat(se.columnGap) || parseFloat(se.gap) || b,
        $e = C.getBoundingClientRect().width,
        Re = Math.max(1, z),
        Ge = $e * Re + Ee * Math.max(0, Re - 1);
      if (Ge <= 0) {
        q(0);
        return;
      }
      if (m > 0 && h >= m - 2) {
        q(Ie - 1);
        return;
      }
      let ir = Math.round(h / Ge);
      q(Math.min(Math.max(ir, 0), Ie - 1));
    }, [z, b, Ie]);
  G.useEffect(() => {
    he();
    let n = P.current;
    if (!n) return;
    let m = new ResizeObserver(he);
    m.observe(n);
    let h = n.firstElementChild;
    return (
      h instanceof HTMLElement && m.observe(h),
      n.addEventListener("scroll", he, { passive: true }),
      () => {
        (m.disconnect(), n.removeEventListener("scroll", he));
      }
    );
  }, [he, e.length, z, I, b]);
  let we = G.useCallback(() => {
      let n = P.current;
      if (!n) return 0;
      let m = n.querySelector("[data-rail-item]");
      if (!m) return n.clientWidth;
      let h = m.getBoundingClientRect(),
        C = m.parentElement,
        re = window.getComputedStyle(C ?? m),
        se = parseFloat(re.columnGap) || parseFloat(re.gap) || b;
      return h.width + se;
    }, [b]),
    ne = G.useCallback(
      (n) => {
        let m = P.current;
        if (!m) return;
        let h = we() * Math.max(1, Z),
          C = n === "next" ? h : -h;
        m.scrollBy({ left: C, behavior: D ? "auto" : "smooth" });
      },
      [we, Z, D],
    ),
    fe = G.useCallback(() => {
      let n = P.current;
      n && n.scrollTo({ left: 0, behavior: D ? "auto" : "smooth" });
    }, [D]),
    We = G.useCallback(() => {
      let n = P.current;
      if (!n) return;
      let m = Math.max(0, n.scrollWidth - n.clientWidth);
      n.scrollTo({ left: m, behavior: D ? "auto" : "smooth" });
    }, [D]),
    ar = G.useCallback(() => {
      if (Te) {
        ne("previous");
        return;
      }
      _ && We();
    }, [Te, _, ne, We]),
    Se = G.useCallback(() => {
      if (ee) {
        ne("next");
        return;
      }
      _ && fe();
    }, [ee, _, ne, fe]);
  G.useEffect(() => {
    if (!k || D || (O && j) || e.length <= z) return;
    let n = Math.max(1e3, S),
      m = window.setInterval(() => {
        let h = P.current;
        if (!h) return;
        let C = Math.max(0, h.scrollWidth - h.clientWidth);
        if (h.scrollLeft >= C - 2) {
          _ && fe();
          return;
        }
        ne("next");
      }, n);
    return () => window.clearInterval(m);
  }, [k, S, O, j, D, e.length, z, _, ne, fe]);
  let ve = G.useCallback(
      ({ src: n, alt: m, index: h }) =>
        l
          ? l({ item: e[h], index: h, src: n })
          : p
            ? jsx(p, {
                src: n,
                alt: m,
                fill: true,
                sizes: "(max-width: 600px) 50vw, (max-width: 900px) 33vw, 20vw",
                priority: h < z,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                },
              })
            : jsx(Box, {
                component: "img",
                src: n,
                alt: m,
                loading: h < z ? "eager" : "lazy",
                draggable: false,
                sx: {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  userSelect: "none",
                  ...de.image,
                },
              }),
      [p, z, e, l, de.image],
    ),
    Ce = G.useCallback(
      ({ item: n, index: m }) => {
        let h = o(n, m),
          C = a?.(n, m),
          re = i?.(n, m),
          se = typeof C == "string" && C.trim().length > 0 ? `View ${C}` : "View item",
          Ee = (Re) => {
            (Re.preventDefault(), Re.stopPropagation(), X?.(n, m, Re));
          },
          $e = jsxs(Box, {
            sx: {
              position: "relative",
              width: "100%",
              aspectRatio: pe,
              overflow: "hidden",
              borderRadius: ue,
              backgroundColor: R.palette.action.hover,
            },
            children: [
              ve({ src: h, alt: typeof C == "string" ? C : "", index: m }),
              jsx(Box, {
                className: "Rail-image-overlay",
                "aria-hidden": true,
                sx: {
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "linear-gradient(to top, rgba(0,0,0,0.22), transparent 45%)",
                  opacity: 0,
                  ...de.overlay,
                },
              }),
            ],
          });
        return jsxs(Box, {
          sx: { position: "relative", width: "100%", minWidth: 0 },
          children: [
            re &&
              jsx(Box, {
                component: "a",
                href: re,
                "aria-label": se,
                onClick: Ee,
                sx: {
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }),
            $e,
            C &&
              jsxs(Box, {
                sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, pt: 1.5 },
                children: [
                  jsx(Typography, {
                    variant: "body2",
                    sx: {
                      minWidth: 0,
                      flex: 1,
                      fontWeight: 450,
                      color: "text.primary",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    },
                    children: C,
                  }),
                  jsx(ChevronRight, { size: 18, strokeWidth: 1.8, "aria-hidden": true }),
                ],
              }),
            s && jsx(Box, { sx: { pt: C ? 0.5 : 1.5 }, children: s({ item: n, index: m }) }),
          ],
        });
      },
      [i, o, a, pe, X, ue, s, ve, R.palette.action.hover, de.overlay],
    ),
    Ye = (n) => {
      let m = n === "previous",
        h = m ? !Te && !_ : !ee && !_,
        C = (se) => {
          (se?.preventDefault(), se?.stopPropagation(), !h && (m ? ar() : Se()));
        },
        re = { onClick: C, disabled: h };
      return m && x
        ? x(re)
        : !m && f
          ? f(re)
          : jsx(IconButton, {
              "aria-label": m ? "Previous" : "Next",
              disabled: h,
              onClick: C,
              onMouseDown: (se) => {
                (se.preventDefault(), se.stopPropagation());
              },
              sx: {
                width: 44,
                height: 44,
                borderRadius: "50%",
                color: R.palette.mode === "dark" ? "#fff" : R.palette.text.primary,
                bgcolor: R.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                border:
                  R.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.28)"
                    : "1px solid rgba(255, 255, 255, 0.6)",
                boxShadow:
                  R.palette.mode === "dark" ? "0 4px 20px rgba(0, 0, 0, 0.25)" : "0 4px 20px rgba(0, 0, 0, 0.08)",
                transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                "&:hover": {
                  bgcolor: R.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
                  transform: "translateY(-1px)",
                },
                "&.Mui-disabled": { opacity: 0.35, pointerEvents: "auto", cursor: "not-allowed" },
              },
              children: m ? jsx(ArrowLeft, { size: 18 }) : jsx(ArrowRight, { size: 18 }),
            });
    };
  return e.length
    ? jsxs(Box, {
        component: "section",
        className: A,
        "aria-label": ie,
        onMouseEnter: () => {
          O && Qe(true);
        },
        onMouseLeave: () => {
          O && Qe(false);
        },
        sx: { position: "relative", cursor: B, width: "100%", minWidth: 0, ...N },
        children: [
          jsx(Box, {
            ref: P,
            sx: {
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorX: "contain",
              scrollBehavior: D ? "auto" : "smooth",
              scrollSnapType: Q ? "x mandatory" : "none",
              scrollbarWidth: "none",
              touchAction: w ? "pan-x" : "auto",
              "&::-webkit-scrollbar": { display: "none" },
            },
            children: jsx(Box, {
              sx: {
                display: "flex",
                flexWrap: "nowrap",
                gap: b,
                justifyContent: g,
                width: "100%",
                minWidth: "100%",
                pb: 0.5,
              },
              children: e.map((n, m) => {
                let h = r(n, m),
                  C = c?.({ item: n, index: m }) ?? Ce({ item: n, index: m });
                return jsx(
                  Box,
                  {
                    "data-rail-item": true,
                    sx: {
                      position: "relative",
                      flex: Ne,
                      flexShrink: 0,
                      minWidth: 0,
                      boxSizing: "border-box",
                      scrollSnapAlign: Q ? "start" : "none",
                      scrollSnapStop: Q ? "normal" : "unset",
                      ...de.item,
                      "&:hover": { ...de.hoverItem },
                      "&:hover img": { ...de.hoverImage },
                      "&:hover .Rail-image-overlay": { ...de.hoverOverlay },
                      ...xe,
                    },
                    children: C,
                  },
                  h,
                );
              }),
            }),
          }),
          (y === "arrows" || y === "both") &&
            jsxs(Fragment, {
              children: [
                jsx(Box, {
                  sx: {
                    position: "absolute",
                    top: "50%",
                    left: 12,
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    display: { xs: "none", sm: "block" },
                  },
                  children: Ye("previous"),
                }),
                jsx(Box, {
                  sx: {
                    position: "absolute",
                    top: "50%",
                    right: 12,
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    display: { xs: "none", sm: "block" },
                  },
                  children: Ye("next"),
                }),
              ],
            }),
          (y === "dots" || y === "both") &&
            jsx(Box, {
              sx: { display: "flex", justifyContent: "center", alignItems: "center", gap: 0.25, mt: 2 },
              children: Array.from({ length: Ie }).map((n, m) => {
                let h = me === m;
                return jsx(
                  Box,
                  {
                    component: "button",
                    type: "button",
                    "aria-label": `Go to page ${m + 1}`,
                    "aria-current": h ? "true" : void 0,
                    onClick: () => {
                      let C = P.current;
                      if (!C) return;
                      let re = C.querySelector("[data-rail-item]");
                      if (!re) return;
                      let se = re.parentElement,
                        Ee = window.getComputedStyle(se ?? re),
                        $e = parseFloat(Ee.columnGap) || parseFloat(Ee.gap) || b,
                        Re = re.getBoundingClientRect().width,
                        Ge = Math.max(1, z),
                        ir = Re * Ge + $e * Math.max(0, Ge - 1),
                        wr = Math.max(0, C.scrollWidth - C.clientWidth),
                        Ir = m === Ie - 1 ? wr : Math.min(ir * m, wr);
                      (q(m), C.scrollTo({ left: Ir, behavior: D ? "auto" : "smooth" }));
                    },
                    sx: {
                      width: 24,
                      height: 24,
                      minWidth: 24,
                      minHeight: 24,
                      p: 0,
                      m: 0,
                      border: 0,
                      borderRadius: "50%",
                      background: "transparent",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        display: "block",
                        width: h ? 22 : 6,
                        height: 6,
                        borderRadius: 999,
                        backgroundColor: h ? "text.primary" : "action.disabled",
                        transition: "width 220ms ease",
                      },
                      "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 1 },
                    },
                  },
                  m,
                );
              }),
            }),
        ],
      })
    : null;
}
var Yr = (e) => {
    if (e !== void 0)
      return typeof e == "number" || typeof e == "string" ? e : { xs: e.xs, sm: e.sm, md: e.md, lg: e.lg, xl: e.xl };
  },
  Wi = (e) => {
    switch (e) {
      case "square":
        return 0;
      case "soft":
        return 4;
      default:
        return 2;
    }
  },
  zr = (e) =>
    e
      ? Array.isArray(e)
        ? e.some(zr)
        : typeof e == "object" && e !== null
          ? "fontSize" in e && e.fontSize !== void 0
          : false
      : false,
  ia = {
    small: {
      minHeight: { xs: 240, md: 290 },
      aspectRatio: { xs: "16/10", md: "21/9" },
      title: { xs: "1.5rem", md: "1.5rem", lg: "1.7rem" },
      description: { xs: "0.8rem", md: "0.86rem" },
      eyebrow: "0.6rem",
      buttonSize: "small",
      contentPadding: { xs: 2.25, md: 3.25, lg: 4 },
    },
    medium: {
      minHeight: { xs: 300, md: 360 },
      aspectRatio: { xs: "16/10", md: "16/8" },
      title: { xs: "1.5rem", md: "1.9rem", lg: "2.2rem" },
      description: { xs: "0.84rem", md: "0.9rem" },
      eyebrow: "0.62rem",
      buttonSize: "small",
      contentPadding: { xs: 2.5, md: 4, lg: 4.75 },
    },
    large: {
      minHeight: { xs: 360, md: 440 },
      aspectRatio: { xs: "4/3", md: "16/9" },
      title: { xs: "1.75rem", md: "2.25rem", lg: "2.65rem" },
      description: { xs: "0.88rem", md: "0.94rem" },
      eyebrow: "0.64rem",
      buttonSize: "medium",
      contentPadding: { xs: 3, md: 4.5, lg: 5.5 },
    },
    hero: {
      minHeight: { xs: 410, md: 520 },
      aspectRatio: { xs: "1/1", md: "21/9" },
      title: { xs: "2rem", md: "2.8rem", lg: "3.25rem" },
      description: { xs: "0.9rem", md: "0.98rem" },
      eyebrow: "0.65rem",
      buttonSize: "medium",
      contentPadding: { xs: 3.25, md: 5, lg: 6.25 },
    },
  },
  Ei = ({ href: e, label: r, target: o, rel: a, onClick: i }) =>
    jsx(Box, {
      component: "a",
      href: e,
      target: o,
      rel: a,
      "aria-label": r,
      onClick: i,
      sx: {
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "block",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        cursor: "pointer",
      },
    }),
  $i = ({
    item: e,
    ImageComponent: r,
    imageSizes: o = "100vw",
    imagePriority: a = false,
    variant: i = "editorial",
    size: s = "medium",
    radius: l = "rounded",
    height: c,
    minHeight: p,
    maxHeight: d,
    aspectRatio: u,
    containerSx: b,
    className: g,
    "aria-label": y = "Spotlight",
    onNavigate: x,
  }) => {
    let f = useTheme(),
      w = useMediaQuery(f.breakpoints.down("md"));
    if (!e) return null;
    let k = ia[s] ?? ia.medium,
      S = Wi(l),
      O = Yr(c),
      _ = Yr(p ?? (c === void 0 ? k.minHeight : void 0)),
      Z = Yr(d),
      Q =
        c === void 0
          ? u !== void 0
            ? typeof u == "string"
              ? u
              : { xs: u.xs, sm: u.sm, md: u.md, lg: u.lg, xl: u.xl }
            : k.aspectRatio
          : void 0,
      E = e.contentAlign ?? "left",
      pe = E === "center" ? "center" : E === "right" ? "flex-end" : "flex-start",
      ue = E === "center" ? "center" : E === "right" ? "right" : "left",
      xe = E === "center" ? "center" : "flex-end",
      N = (B) => ur(B ?? i),
      A = (B) => {
        let X = !!a;
        return r
          ? jsx(r, {
              src: w && B.media.mobileSrc ? B.media.mobileSrc : B.media.src,
              alt: B.media.alt,
              fill: true,
              sizes: o,
              priority: X,
              loading: X ? "eager" : "lazy",
              fetchPriority: X ? "high" : "auto",
              style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
            })
          : w && B.media.mobileSrc
            ? jsx(Box, {
                component: "img",
                src: B.media.mobileSrc,
                alt: B.media.alt,
                loading: X ? "eager" : "lazy",
                fetchPriority: X ? "high" : "auto",
                sx: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              })
            : jsx(Box, {
                component: "img",
                src: B.media.src,
                alt: B.media.alt,
                loading: X ? "eager" : "lazy",
                fetchPriority: X ? "high" : "auto",
                sx: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              });
      };
    return jsxs(Box, {
      className: g,
      role: "region",
      "aria-label": y,
      sx: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
        userSelect: "none",
        WebkitUserSelect: "none",
        height: O,
        minHeight: _,
        maxHeight: Z,
        aspectRatio: Q,
        borderRadius: S,
        bgcolor: "background.default",
        ...b,
      },
      children: [
        jsxs(Box, {
          sx: { position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%" },
          children: [A(e), jsx(Box, { sx: { position: "absolute", inset: 0, zIndex: 1, ...N(e.variant) } })],
        }),
        e.href &&
          jsx(Ei, {
            href: e.href,
            label: e.linkLabel ?? (e.title ? `View ${e.title}` : e.media.alt || "View details"),
            onClick: (B) => {
              (B.preventDefault(), x?.(e, B));
            },
          }),
        jsx(Box, {
          sx: {
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: xe,
            alignItems: pe,
            p: k.contentPadding,
            pointerEvents: "none",
            color: "#fff",
            fontKerning: "normal",
            fontOpticalSizing: "auto",
          },
          children: e.content
            ? e.content
            : jsxs(Box, {
                sx: [
                  {
                    maxWidth: {
                      xs: "92%",
                      sm: "78%",
                      md: E === "center" ? "70%" : "58%",
                      lg: E === "center" ? "60%" : "50%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: pe,
                    textAlign: ue,
                    gap: { xs: 0.9, md: 1.15 },
                  },
                  ...(Array.isArray(e.contentSx) ? e.contentSx : [e.contentSx]),
                ],
                children: [
                  e.eyebrow &&
                    jsx(Typography, {
                      component: "div",
                      sx: [
                        {
                          ...(!zr(e.eyebrowSx) && { fontSize: k.eyebrow }),
                          fontWeight: 550,
                          lineHeight: 1.2,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          opacity: 0.9,
                        },
                        ...(Array.isArray(e.eyebrowSx) ? e.eyebrowSx : [e.eyebrowSx]),
                      ],
                      children: e.eyebrow,
                    }),
                  e.title &&
                    jsx(Typography, {
                      component: "h2",
                      sx: [
                        {
                          ...(!zr(e.titleSx) && { fontSize: k.title }),
                          lineHeight: 1.02,
                          fontWeight: 550,
                          letterSpacing: "-0.025em",
                          maxWidth: { xs: "100%", md: "620px" },
                        },
                        ...(Array.isArray(e.titleSx) ? e.titleSx : [e.titleSx]),
                      ],
                      children: e.title,
                    }),
                  e.description &&
                    jsx(Typography, {
                      component: "p",
                      sx: [
                        {
                          m: 0,
                          maxWidth: { xs: "100%", md: "560px" },
                          ...(!zr(e.descriptionSx) && { fontSize: k.description }),
                          fontWeight: 400,
                          letterSpacing: "-0.005em",
                          lineHeight: 1.5,
                          opacity: 0.9,
                        },
                        ...(Array.isArray(e.descriptionSx) ? e.descriptionSx : [e.descriptionSx]),
                      ],
                      children: e.description,
                    }),
                  e.action &&
                    (e.action.label || e.action.href || e.action.onClick) &&
                    jsx(Box, {
                      sx: { pointerEvents: "auto", mt: { xs: 0.5, md: 1 } },
                      children: e.action.href
                        ? jsx(Button, {
                            href: e.action.href,
                            variant: e.action.variant ?? "contained",
                            color: e.action.color ?? "primary",
                            size: e.action.size ?? k.buttonSize,
                            endIcon: e.action.showArrow !== false ? jsx(ArrowRight, { size: 16 }) : void 0,
                            target: e.action.target,
                            rel: e.action.rel,
                            onClick: (B) => {
                              (B.preventDefault(), e.action?.onClick?.(B), x?.(e, B));
                            },
                            "aria-label": e.action.ariaLabel,
                            sx: [
                              {
                                borderRadius: 999,
                                whiteSpace: "nowrap",
                                fontWeight: 550,
                                letterSpacing: "-0.01em",
                                textTransform: "none",
                                lineHeight: 1.2,
                                "& .MuiButton-endIcon": { ml: 0.75 },
                              },
                              ...(Array.isArray(e.action.sx) ? e.action.sx : [e.action.sx]),
                            ],
                            children: e.action.label,
                          })
                        : jsx(Button, {
                            variant: e.action.variant ?? "contained",
                            color: e.action.color ?? "primary",
                            size: e.action.size ?? k.buttonSize,
                            endIcon: e.action.showArrow !== false ? jsx(ArrowRight, { size: 16 }) : void 0,
                            onClick: (B) => {
                              (e.action?.onClick?.(B), x?.(e, B));
                            },
                            "aria-label": e.action.ariaLabel,
                            sx: [
                              {
                                borderRadius: 999,
                                whiteSpace: "nowrap",
                                fontWeight: 550,
                                letterSpacing: "-0.01em",
                                textTransform: "none",
                                lineHeight: 1.2,
                                "& .MuiButton-endIcon": { ml: 0.75 },
                              },
                              ...(Array.isArray(e.action.sx) ? e.action.sx : [e.action.sx]),
                            ],
                            children: e.action.label,
                          }),
                    }),
                ],
              }),
        }),
        e.sideLabel &&
          jsx(Box, {
            sx: {
              position: "absolute",
              top: "50%",
              right: { xs: 12, md: 24 },
              zIndex: 4,
              transform: "translateY(-50%) rotate(-90deg)",
              transformOrigin: "center",
              pointerEvents: "none",
            },
            children: jsx(Typography, {
              sx: [
                {
                  fontSize: "0.65rem",
                  fontWeight: 550,
                  lineHeight: 1.2,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#fff",
                  opacity: 0.75,
                  whiteSpace: "nowrap",
                },
                ...(Array.isArray(e.sideLabelSx) ? e.sideLabelSx : [e.sideLabelSx]),
              ],
              children: e.sideLabel,
            }),
          }),
      ],
    });
  };
var da = "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw",
  Ur = (e) => e,
  Vi = (e, r) => (e === void 0 ? r.shape.borderRadius : typeof e == "number" ? r.spacing(e) : e),
  ji = ({ action: e, onNavigate: r }) =>
    e
      ? e.href
        ? jsx(na, {
            component: "a",
            href: e.href,
            variant: "contained",
            size: "small",
            onClick: (o) => {
              (o.preventDefault(), o.stopPropagation(), e.onClick?.(o), r?.(o));
            },
            sx: {
              width: "fit-content",
              minWidth: 0,
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 600,
              whiteSpace: "nowrap",
              pointerEvents: "auto",
            },
            children: e.label,
          })
        : jsx(na, {
            variant: "contained",
            size: "small",
            onClick: (o) => {
              (e.onClick?.(o), r?.(o));
            },
            sx: {
              width: "fit-content",
              minWidth: 0,
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 600,
              whiteSpace: "nowrap",
              pointerEvents: "auto",
            },
            children: e.label,
          })
      : null,
  sa = ({ src: e, alt: r, imagePosition: o, imageSizes: a, imagePriority: i }) =>
    jsx(Me, {
      component: "img",
      src: e,
      alt: r,
      loading: i ? "eager" : "lazy",
      sizes: a ?? da,
      sx: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: o,
        transition: "transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    }),
  la = ({
    image: e,
    mobileImage: r,
    alt: o,
    imagePosition: a,
    imageSizes: i,
    imagePriority: s = false,
    ImageComponent: l,
  }) =>
    l
      ? jsx(l, {
          ...{
            src: e,
            alt: o,
            sizes: i ?? da,
            priority: s,
            fill: true,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: a,
              transition: "transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1)",
            },
          },
        })
      : r
        ? jsxs("picture", {
            children: [
              jsx("source", { media: "(max-width: 767px)", srcSet: r }),
              jsx(sa, { src: e, alt: o, imagePosition: a, imageSizes: i, imagePriority: s }),
            ],
          })
        : jsx(sa, { src: e, alt: o, imagePosition: a, imageSizes: i, imagePriority: s }),
  Ji = ({ href: e, label: r, onNavigate: o }) =>
    jsx(Me, {
      component: "a",
      href: e,
      "aria-label": r,
      onClick: (a) => {
        (a.preventDefault(), o?.(a));
      },
      sx: {
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "block",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        cursor: "pointer",
      },
    }),
  Ni = ({
    image: e,
    mobileImage: r,
    alt: o = "",
    ImageComponent: a,
    imageSizes: i,
    eyebrow: s,
    title: l,
    description: c,
    action: p,
    variant: d = "overlay",
    size: u = "medium",
    height: b,
    minHeight: g,
    maxHeight: y,
    aspectRatio: x = "4 / 5",
    imagePosition: f = "center",
    radius: w,
    imagePriority: k = false,
    href: S,
    linkLabel: O,
    onNavigate: _,
    children: Z,
    sx: Q,
    className: E,
    "aria-label": pe,
  }) => {
    let ue = useTheme$1(),
      xe = Vi(w, ue),
      N = {
        small: { minHeight: 220, padding: 2, titleVariant: "h6", descriptionVariant: "body2" },
        medium: { minHeight: 300, padding: 3, titleVariant: "h5", descriptionVariant: "body2" },
        large: { minHeight: 400, padding: 4, titleVariant: "h4", descriptionVariant: "body1" },
      }[u],
      A = Ur(b),
      B = Ur(g),
      X = Ur(y),
      ie = O || (o ? `View ${o}` : "View highlight"),
      R = S ? jsx(Ji, { href: S, label: ie, onNavigate: _ }) : null,
      be = jsxs(Fragment, {
        children: [
          s &&
            jsx(Xr, {
              variant: "overline",
              sx: { display: "block", mb: 0.5, fontWeight: 600, letterSpacing: "0.12em" },
              children: s,
            }),
          l &&
            jsx(Xr, {
              component: "h3",
              variant: N.titleVariant,
              sx: { fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.025em" },
              children: l,
            }),
          c &&
            jsx(Xr, {
              variant: N.descriptionVariant,
              sx: { mt: 1, maxWidth: 420, lineHeight: 1.5, opacity: 0.9 },
              children: c,
            }),
          p && jsx(Me, { sx: { mt: 2, pointerEvents: "auto" }, children: jsx(ji, { action: p, onNavigate: _ }) }),
          Z && jsx(Me, { sx: { mt: 2, pointerEvents: "auto" }, children: Z }),
        ],
      });
    if (d === "minimal")
      return jsxs(Me, {
        component: "article",
        className: E,
        "aria-label": pe,
        sx: [
          { width: "100%", overflow: "hidden", borderRadius: xe, "&:hover img": { transform: "scale(1.03)" } },
          ...(Array.isArray(Q) ? Q : [Q]),
        ],
        children: [
          jsxs(Me, {
            sx: {
              position: "relative",
              width: "100%",
              aspectRatio: x,
              height: A,
              minHeight: B,
              maxHeight: X,
              overflow: "hidden",
            },
            children: [
              jsx(la, {
                image: e,
                mobileImage: r,
                alt: o,
                imagePosition: f,
                imageSizes: i,
                imagePriority: k,
                ImageComponent: a,
              }),
              R,
            ],
          }),
          (s || l || c || p || Z) && jsx(Me, { sx: { pt: 2, px: 0.5 }, children: be }),
        ],
      });
    let le =
      d === "center"
        ? { alignItems: "center", justifyContent: "center", textAlign: "center" }
        : { alignItems: "flex-start", justifyContent: "flex-end", textAlign: "left" };
    return jsxs(Me, {
      component: "article",
      className: E,
      "aria-label": pe,
      sx: [
        {
          position: "relative",
          width: "100%",
          minHeight: B ?? N.minHeight,
          height: A,
          maxHeight: X,
          aspectRatio: A ? void 0 : x,
          overflow: "hidden",
          borderRadius: xe,
          isolation: "isolate",
          color: "#fff",
          backgroundColor: ue.palette.grey[900],
          "&:hover img": { transform: "scale(1.035)" },
        },
        ...(Array.isArray(Q) ? Q : [Q]),
      ],
      children: [
        jsxs(Me, {
          sx: { position: "absolute", inset: 0, zIndex: 0 },
          children: [
            jsx(la, {
              image: e,
              mobileImage: r,
              alt: o,
              imagePosition: f,
              imageSizes: i,
              imagePriority: k,
              ImageComponent: a,
            }),
            R,
          ],
        }),
        jsx(Me, {
          "aria-hidden": true,
          sx: {
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              d === "center"
                ? "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 100%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.72) 100%)",
          },
        }),
        jsx(Me, {
          sx: {
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            ...le,
            p: N.padding,
          },
          children: be,
        }),
      ],
    });
  };
var Ui = forwardRef(
  ({ showLabel: e, selected: r, value: o, onChange: a, component: i = Box, children: s, sx: l, ...c }, p) =>
    jsx(i, { ref: p, sx: { position: "relative", zIndex: 1, ...l }, ...c, children: s }),
);
Ui.displayName = "DynamicIslandItem";
var Qi = G__default.forwardRef(({ children: e, ...r }, o) => jsx(Ki, { ref: o, ...r, children: e }));
Qi.displayName = "DynamicIsland";
var lg = en;
var sn = 112,
  ln = 112,
  dn = 1,
  cn = 2,
  gn = 5,
  pn = (e) => {
    switch (e) {
      case "square":
        return 0;
      case "soft":
        return 3;
      default:
        return 2;
    }
  },
  Kr = (e) => {
    if (e !== void 0)
      return typeof e == "number" || typeof e == "string" ? e : { xs: e.xs, sm: e.sm, md: e.md, lg: e.lg, xl: e.xl };
  },
  bn = ({
    items: e,
    activeIndex: r,
    defaultActiveIndex: o = 0,
    onActiveIndexChange: a,
    renderImage: i,
    renderThumbnail: s,
    height: l,
    minHeight: c,
    maxHeight: p,
    aspectRatio: d,
    thumbnailPosition: u = "auto",
    navigation: b = "arrows",
    swipe: g = true,
    mouseDrag: y = true,
    keyboard: x = true,
    fullscreen: f = true,
    zoom: w = true,
    objectFit: k = "contain",
    loop: S = true,
    radius: O = "square",
    thumbnailWidth: _ = sn,
    thumbnailSize: Z = ln,
    thumbnailGap: Q = dn,
    mediaGap: E = cn,
    showFullscreenButton: pe = true,
    showZoomButton: ue = true,
    showRemainingCount: xe = true,
    maxVisibleThumbnails: N = gn,
    renderPreviousButton: A,
    renderNextButton: B,
    renderFullscreenButton: X,
    renderZoomButton: ie,
    rootRef: R,
    sx: be,
    className: le,
    "aria-label": V = "Visual viewer",
  }) => {
    let M = useTheme(),
      $ = useMediaQuery(M.breakpoints.down("md")),
      z = useMemo(() => e.filter(Boolean), [e]),
      I = z.length,
      P = r !== void 0,
      [j, Qe] = useState(o),
      L = I === 0 ? 0 : Math.min(Math.max(P ? r : j, 0), I - 1),
      ee = z[L],
      [U, me] = useState(false),
      [q, D] = useState(false),
      Be = useRef(null),
      Ne = useRef(null),
      Ie = useRef(null),
      de = useRef(null),
      he = useRef(null),
      we = useRef(false),
      ne = useRef(null),
      fe = useRef(null),
      We = useRef(false),
      ar = useCallback(
        (v) => {
          ((Be.current = v), typeof R == "function" ? R(v) : R && (R.current = v));
        },
        [R],
      ),
      Se = useCallback(
        (v) => {
          if (!I) return;
          let F = v;
          (S ? (F = (v + I) % I) : (F = Math.max(0, Math.min(v, I - 1))), P || Qe(F));
          let H = z[F];
          H && a?.(F, H);
        },
        [I, S, P, a, z],
      ),
      ve = useCallback(() => {
        I && ((!S && L >= I - 1) || Se(L + 1));
      }, [L, I, S, Se]),
      Ce = useCallback(() => {
        I && ((!S && L <= 0) || Se(L - 1));
      }, [L, I, S, Se]),
      Ye = useCallback((v) => {
        let F = Ne.current;
        if (!F) return;
        F.querySelector(`[data-visual-viewer-thumbnail="${v}"]`)?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }, []);
    useEffect(() => {
      Ye(L);
    }, [L, Ye]);
    let n = useCallback(() => {
        D(false);
      }, []),
      m = useCallback(() => {
        f && D((v) => !v);
      }, [f]),
      h = useCallback(() => {
        w && me((v) => !v);
      }, [w]);
    (useEffect(() => {
      me(false);
    }, [L]),
      useEffect(() => {
        if (!x) return;
        let v = (F) => {
          let H = F.target;
          if (!(H?.tagName === "INPUT" || H?.tagName === "TEXTAREA" || H?.isContentEditable))
            switch (F.key) {
              case "ArrowRight":
                (F.preventDefault(), ve());
                break;
              case "ArrowLeft":
                (F.preventDefault(), Ce());
                break;
              case "Escape":
                (q && (F.preventDefault(), n()), U && me(false));
                break;
              case "+":
              case "=":
                w && (F.preventDefault(), me(true));
                break;
              case "-":
                w && (F.preventDefault(), me(false));
                break;
            }
        };
        return (
          window.addEventListener("keydown", v),
          () => {
            window.removeEventListener("keydown", v);
          }
        );
      }, [x, q, ve, Ce, n, m, f, w, U]));
    let C = (v) => {
        if (!g) return;
        let F = v.touches[0];
        ((de.current = F.clientX), (he.current = F.clientY));
      },
      re = (v) => {
        if (!g || de.current === null || he.current === null) return;
        let F = v.changedTouches[0],
          H = F.clientX - de.current,
          Fe = F.clientY - he.current;
        ((de.current = null),
          (he.current = null),
          !(Math.abs(H) < 40 || Math.abs(H) < Math.abs(Fe)) && (H < 0 ? ve() : Ce()));
      },
      se = (v) => {
        y &&
          v.button === 0 &&
          ((ne.current = v.clientX), (fe.current = v.clientY), (We.current = false), (we.current = true));
      },
      Ee = (v) => {
        if (!y || !we.current || ne.current === null || fe.current === null) return;
        let F = v.clientX - ne.current,
          H = v.clientY - fe.current;
        (Math.abs(F) > 8 || Math.abs(H) > 8) && (We.current = true);
      },
      $e = (v) => {
        if (!y || !we.current) return;
        we.current = false;
        let F = ne.current,
          H = fe.current;
        if (((ne.current = null), (fe.current = null), F === null || H === null)) return;
        let Fe = v.clientX - F,
          lr = v.clientY - H;
        Math.abs(Fe) < 40 || Math.abs(Fe) < Math.abs(lr) || (Fe < 0 ? ve() : Ce());
      },
      Re = (v) => {
        we.current && $e(v);
      },
      Ge = Kr(l),
      ir = Kr(c),
      wr = Kr(p),
      Ir = typeof d == "string" ? d : d ? { xs: d.xs, sm: d.sm, md: d.md, lg: d.lg, xl: d.xl } : void 0,
      nr = u === "auto" ? ($ ? "bottom" : "left") : u,
      Fa = (v) => {
        let F = { item: v, index: L, active: true, isThumbnail: false, isFullscreen: q };
        if (i) return i(F);
        let H = $ && v.mobileSrc ? v.mobileSrc : v.src;
        return jsx(Box, {
          component: "img",
          src: H,
          alt: v.alt ?? "",
          draggable: false,
          sx: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: k,
            display: "block",
            userSelect: "none",
            WebkitUserSelect: "none",
            transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
            transform: U ? "scale(1.12)" : "scale(1)",
          },
        });
      },
      ro = (v, F) => {
        let Fe = { item: v, index: F, active: F === L, isThumbnail: true, isFullscreen: q };
        return s
          ? s(Fe)
          : jsx(Box, {
              component: "img",
              src: v.thumbnailSrc ?? v.src,
              alt: v.alt ?? `Thumbnail ${F + 1}`,
              draggable: false,
              sx: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                userSelect: "none",
                WebkitUserSelect: "none",
              },
            });
      };
    if (!ee) return null;
    let sr = pn(O),
      _e = Math.min(N, I),
      oo = I > _e;
    return jsxs(Fragment, {
      children: [
        jsxs(Box, {
          ref: ar,
          className: le,
          role: "region",
          "aria-label": V,
          tabIndex: x ? 0 : void 0,
          onTouchStart: C,
          onTouchEnd: re,
          onMouseDown: se,
          onMouseMove: Ee,
          onMouseUp: $e,
          onMouseLeave: Re,
          sx: {
            position: "relative",
            display: "flex",
            width: "100%",
            height: Ge,
            minHeight: ir,
            maxHeight: wr,
            aspectRatio: Ge === void 0 ? Ir : void 0,
            overflow: "hidden",
            isolation: "isolate",
            borderRadius: sr,
            bgcolor: "background.paper",
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: g ? "pan-y" : "auto",
            "&:focus-visible": { outline: `2px solid ${M.palette.primary.main}`, outlineOffset: 3 },
            ...be,
          },
          children: [
            nr === "left" &&
              jsx(Box, {
                sx: { flexShrink: 0, width: _, height: "100%", mr: E, overflow: "hidden" },
                children: jsx(Box, {
                  ref: Ne,
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: Q,
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                  },
                  children: z.slice(0, _e).map((v, F) => {
                    let H = F === L,
                      Fe = F === _e - 1,
                      lr = xe && oo && Fe;
                    return jsxs(
                      Box,
                      {
                        "data-visual-viewer-thumbnail": F,
                        component: "button",
                        type: "button",
                        "aria-label": `View image ${F + 1}`,
                        "aria-current": H ? "true" : void 0,
                        onClick: () => Se(F),
                        sx: {
                          position: "relative",
                          flexShrink: 0,
                          width: "100%",
                          height: Z,
                          minHeight: Z,
                          p: 0,
                          border: 0,
                          borderRadius: Math.max(0, sr - 2),
                          overflow: "hidden",
                          bgcolor: "background.default",
                          cursor: "pointer",
                          opacity: H ? 1 : 0.68,
                          transition: "opacity 220ms ease, transform 220ms ease",
                          "&:hover": { opacity: 1, transform: "scale(0.97)" },
                          "&:focus-visible": { outline: `2px solid ${M.palette.primary.main}`, outlineOffset: 2 },
                          ...(H && { boxShadow: `inset 0 0 0 2px ${M.palette.primary.main}` }),
                        },
                        children: [
                          ro(v, F),
                          lr &&
                            jsxs(Box, {
                              sx: {
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "rgba(0,0,0,0.48)",
                                color: "#FFFFFF",
                                fontSize: "0.9rem",
                                fontWeight: 700,
                                letterSpacing: "0.02em",
                              },
                              children: ["+", I - _e + 1],
                            }),
                        ],
                      },
                      v.id,
                    );
                  }),
                }),
              }),
            jsxs(Box, {
              ref: Ie,
              sx: {
                position: "relative",
                flex: 1,
                minWidth: 0,
                minHeight: 0,
                height: "100%",
                overflow: "hidden",
                borderRadius: sr,
                bgcolor: "background.default",
                cursor: U ? "zoom-out" : w ? "zoom-in" : "default",
              },
              onClick: () => {
                w && We.current === false && h();
              },
              children: [
                Fa(ee),
                ee.overlay &&
                  jsx(Box, {
                    sx: { position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" },
                    children: ee.overlay,
                  }),
                b === "arrows" &&
                  I > 1 &&
                  jsx(Fragment, {
                    children: A
                      ? jsx(Box, {
                          sx: {
                            position: "absolute",
                            left: { xs: 10, md: 18 },
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 5,
                          },
                          children: A({ disabled: !S && L === 0, onClick: Ce }),
                        })
                      : jsx(IconButton, {
                          "aria-label": "Previous image",
                          onClick: (v) => {
                            (v.stopPropagation(), Ce());
                          },
                          disabled: !S && L === 0,
                          sx: {
                            position: "absolute",
                            left: { xs: 10, md: 18 },
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 8,
                            width: { xs: 38, md: 44 },
                            height: { xs: 38, md: 44 },
                            color: M.palette.mode === "dark" ? "#fff" : M.palette.text.primary,
                            bgcolor:
                              M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
                            backdropFilter: "blur(12px)",
                            border:
                              M.palette.mode === "dark"
                                ? "1px solid rgba(255, 255, 255, 0.28)"
                                : "1px solid rgba(255, 255, 255, 0.6)",
                            boxShadow:
                              M.palette.mode === "dark"
                                ? "0 4px 20px rgba(0, 0, 0, 0.25)"
                                : "0 4px 20px rgba(0, 0, 0, 0.08)",
                            transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                            "&:hover": {
                              bgcolor:
                                M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
                              transform: "translateY(-50%) scale(1.04)",
                            },
                            "&.Mui-disabled": { opacity: 0.35 },
                          },
                          children: jsx(ArrowLeft, { size: 18 }),
                        }),
                  }),
                b === "arrows" &&
                  I > 1 &&
                  jsx(Fragment, {
                    children: B
                      ? jsx(Box, {
                          sx: {
                            position: "absolute",
                            right: { xs: 10, md: 18 },
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 8,
                          },
                          children: B({ disabled: !S && L === I - 1, onClick: ve }),
                        })
                      : jsx(IconButton, {
                          "aria-label": "Next image",
                          onClick: (v) => {
                            (v.stopPropagation(), ve());
                          },
                          disabled: !S && L === I - 1,
                          sx: {
                            position: "absolute",
                            right: { xs: 10, md: 18 },
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 8,
                            width: { xs: 38, md: 44 },
                            height: { xs: 38, md: 44 },
                            color: M.palette.mode === "dark" ? "#fff" : M.palette.text.primary,
                            bgcolor:
                              M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
                            backdropFilter: "blur(12px)",
                            border:
                              M.palette.mode === "dark"
                                ? "1px solid rgba(255, 255, 255, 0.28)"
                                : "1px solid rgba(255, 255, 255, 0.6)",
                            boxShadow:
                              M.palette.mode === "dark"
                                ? "0 4px 20px rgba(0, 0, 0, 0.25)"
                                : "0 4px 20px rgba(0, 0, 0, 0.08)",
                            transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                            "&:hover": {
                              bgcolor:
                                M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
                              transform: "translateY(-50%) scale(1.04)",
                            },
                            "&.Mui-disabled": { opacity: 0.35 },
                          },
                          children: jsx(ArrowRight, { size: 18 }),
                        }),
                  }),
                jsxs(Box, {
                  sx: {
                    position: "absolute",
                    right: { xs: 12, md: 18 },
                    top: nr === "bottom" ? { xs: 12, md: 16 } : { xs: 12, md: "auto" },
                    bottom: nr === "bottom" ? "auto" : { xs: "auto", md: 18 },
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  },
                  children: [
                    w &&
                      ue &&
                      (ie
                        ? ie(h, U)
                        : jsx(IconButton, {
                            "aria-label": U ? "Zoom out" : "Zoom in",
                            onClick: (v) => {
                              (v.stopPropagation(), h());
                            },
                            sx: {
                              width: 38,
                              height: 38,
                              color: M.palette.mode === "dark" ? "#fff" : M.palette.text.primary,
                              bgcolor:
                                M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
                              backdropFilter: "blur(12px)",
                              border:
                                M.palette.mode === "dark"
                                  ? "1px solid rgba(255, 255, 255, 0.28)"
                                  : "1px solid rgba(255, 255, 255, 0.6)",
                              boxShadow:
                                M.palette.mode === "dark"
                                  ? "0 4px 20px rgba(0, 0, 0, 0.25)"
                                  : "0 4px 20px rgba(0, 0, 0, 0.08)",
                              transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                              "&:hover": {
                                bgcolor:
                                  M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
                                transform: "scale(1.04)",
                              },
                            },
                            children: U ? jsx(ZoomOut, { size: 17 }) : jsx(ZoomIn, { size: 17 }),
                          })),
                    f &&
                      pe &&
                      (X
                        ? X(m)
                        : jsx(IconButton, {
                            "aria-label": q ? "Exit fullscreen" : "View fullscreen",
                            onClick: (v) => {
                              (v.stopPropagation(), m());
                            },
                            sx: {
                              width: 38,
                              height: 38,
                              color: M.palette.mode === "dark" ? "#fff" : M.palette.text.primary,
                              bgcolor:
                                M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
                              backdropFilter: "blur(12px)",
                              border:
                                M.palette.mode === "dark"
                                  ? "1px solid rgba(255, 255, 255, 0.28)"
                                  : "1px solid rgba(255, 255, 255, 0.6)",
                              boxShadow:
                                M.palette.mode === "dark"
                                  ? "0 4px 20px rgba(0, 0, 0, 0.25)"
                                  : "0 4px 20px rgba(0, 0, 0, 0.08)",
                              transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                              "&:hover": {
                                bgcolor:
                                  M.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
                                transform: "scale(1.04)",
                              },
                            },
                            children: q ? jsx(Minimize2, { size: 17 }) : jsx(Maximize2, { size: 17 }),
                          })),
                  ],
                }),
              ],
            }),
            nr === "bottom" &&
              jsx(Box, {
                sx: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 7,
                  px: { xs: 1.5, sm: 2 },
                  pb: { xs: 1.5, sm: 2 },
                  pt: 5,
                  background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.48) 100%)",
                  pointerEvents: "none",
                },
                children: jsx(Box, {
                  ref: Ne,
                  sx: {
                    display: "flex",
                    gap: Q,
                    width: "100%",
                    overflowX: "auto",
                    overflowY: "hidden",
                    scrollbarWidth: "none",
                    pointerEvents: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                  },
                  children: z.slice(0, _e).map((v, F) => {
                    let H = F === L,
                      Fe = F === _e - 1,
                      lr = xe && oo && Fe;
                    return jsxs(
                      Box,
                      {
                        "data-visual-viewer-thumbnail": F,
                        component: "button",
                        type: "button",
                        "aria-label": `View image ${F + 1}`,
                        "aria-current": H ? "true" : void 0,
                        onClick: () => Se(F),
                        sx: {
                          position: "relative",
                          flex: `0 0 ${Z}px`,
                          width: Z,
                          height: Z,
                          minWidth: Z,
                          p: 0,
                          border: 0,
                          borderRadius: Math.max(0, sr - 2),
                          overflow: "hidden",
                          bgcolor: "background.paper",
                          cursor: "pointer",
                          opacity: H ? 1 : 0.7,
                          transition: "opacity 220ms ease, transform 220ms ease",
                          "&:hover": { opacity: 1, transform: "scale(0.97)" },
                          "&:focus-visible": { outline: `2px solid ${M.palette.primary.main}`, outlineOffset: 2 },
                          ...(H && { boxShadow: `inset 0 0 0 2px ${M.palette.primary.main}` }),
                        },
                        children: [
                          ro(v, F),
                          lr &&
                            jsxs(Box, {
                              sx: {
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "rgba(0,0,0,0.48)",
                                color: "#FFFFFF",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                              },
                              children: ["+", I - _e + 1],
                            }),
                        ],
                      },
                      v.id,
                    );
                  }),
                }),
              }),
          ],
        }),
        jsxs(Dialog, {
          open: q,
          onClose: n,
          fullScreen: true,
          sx: {
            "& .MuiDialog-paper": {
              bgcolor: "#000",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: 0,
            },
          },
          children: [
            jsx(Box, {
              sx: { position: "absolute", top: 12, right: 12, zIndex: 10 },
              children: jsx(Tooltip, {
                title: "Close (Esc)",
                children: jsx(IconButton, {
                  "aria-label": "Close fullscreen",
                  onClick: n,
                  sx: {
                    width: 42,
                    height: 42,
                    bgcolor: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
                  },
                  children: jsx(Minimize2, { size: 18 }),
                }),
              }),
            }),
            jsx(Box, {
              sx: {
                position: "absolute",
                top: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                bgcolor: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
                borderRadius: 10,
                px: 1.5,
                py: 0.5,
              },
              children: jsxs(Box, {
                component: "span",
                sx: { color: "#fff", fontSize: "0.78rem", fontWeight: 600 },
                children: [L + 1, " / ", I],
              }),
            }),
            jsxs(Box, {
              sx: { flex: 1, position: "relative", overflow: "hidden", cursor: U ? "zoom-out" : "default" },
              onClick: () => U && me(false),
              children: [
                ee &&
                  (i
                    ? jsx(Box, {
                        sx: {
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                          transform: U ? "scale(1.5)" : "scale(1)",
                          userSelect: "none",
                        },
                        children: i({ item: ee, index: L, active: true, isThumbnail: false, isFullscreen: true }),
                      })
                    : jsx(Box, {
                        component: "img",
                        src: ee.src,
                        alt: ee.alt ?? "",
                        draggable: false,
                        sx: {
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                          transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                          transform: U ? "scale(1.5)" : "scale(1)",
                          userSelect: "none",
                        },
                      })),
                b === "arrows" &&
                  I > 1 &&
                  jsxs(Fragment, {
                    children: [
                      jsx(IconButton, {
                        "aria-label": "Previous image",
                        onClick: (v) => {
                          (v.stopPropagation(), Ce());
                        },
                        disabled: !S && L === 0,
                        sx: {
                          position: "absolute",
                          left: 16,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 48,
                          height: 48,
                          bgcolor: "rgba(255,255,255,0.14)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.28)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                          color: "#fff",
                          "&:hover": { bgcolor: "rgba(255,255,255,0.24)", transform: "translateY(-50%) scale(1.04)" },
                          "&.Mui-disabled": { opacity: 0.3 },
                        },
                        children: jsx(ArrowLeft, { size: 22 }),
                      }),
                      jsx(IconButton, {
                        "aria-label": "Next image",
                        onClick: (v) => {
                          (v.stopPropagation(), ve());
                        },
                        disabled: !S && L === I - 1,
                        sx: {
                          position: "absolute",
                          right: 16,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 48,
                          height: 48,
                          bgcolor: "rgba(255,255,255,0.14)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.28)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                          color: "#fff",
                          "&:hover": { bgcolor: "rgba(255,255,255,0.24)", transform: "translateY(-50%) scale(1.04)" },
                          "&.Mui-disabled": { opacity: 0.3 },
                        },
                        children: jsx(ArrowRight, { size: 22 }),
                      }),
                    ],
                  }),
                w &&
                  jsx(Tooltip, {
                    title: U ? "Zoom out" : "Zoom in",
                    children: jsx(IconButton, {
                      "aria-label": U ? "Zoom out" : "Zoom in",
                      onClick: (v) => {
                        (v.stopPropagation(), me((F) => !F));
                      },
                      sx: {
                        position: "absolute",
                        bottom: 16,
                        right: 16,
                        width: 42,
                        height: 42,
                        bgcolor: "rgba(255,255,255,0.14)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        color: "#fff",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.24)", transform: "scale(1.04)" },
                      },
                      children: U ? jsx(ZoomOut, { size: 18 }) : jsx(ZoomIn, { size: 18 }),
                    }),
                  }),
              ],
            }),
            I > 1 &&
              jsx(Box, {
                sx: {
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  p: 1.5,
                  overflowX: "auto",
                  backdropFilter: "blur(12px)",
                  justifyContent: "center",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                },
                children: z.map((v, F) =>
                  jsx(
                    Box,
                    {
                      component: "button",
                      onClick: () => Se(F),
                      "aria-label": v.alt ?? `Image ${F + 1}`,
                      sx: {
                        flexShrink: 0,
                        width: 64,
                        height: 64,
                        p: 0,
                        border: "2px solid",
                        borderColor: F === L ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)",
                        borderRadius: 1,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "border-color 0.2s ease, transform 0.2s ease",
                        transform: F === L ? "scale(1.06)" : "scale(1)",
                        bgcolor: "transparent",
                        "&:hover": { borderColor: "rgba(255,255,255,0.6)" },
                      },
                      children: jsx(Box, {
                        component: "img",
                        src: v.thumbnailSrc ?? v.src,
                        alt: v.alt ?? "",
                        draggable: false,
                        sx: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          pointerEvents: "none",
                        },
                      }),
                    },
                    v.id,
                  ),
                ),
              }),
          ],
        }),
      ],
    });
  };
var xa = { square: 0, rounded: 0.75, soft: 1 };
function mn(e, r, o) {
  return e
    ? jsx(Me, {
        component: "img",
        src: e,
        alt: r ?? "",
        sx: { display: "block", width: "100%", height: "100%", objectFit: o ?? "cover" },
      })
    : null;
}
function un({
  items: e,
  getKey: r,
  renderItem: o,
  renderImage: a,
  renderOverlay: i,
  renderBlock: s,
  renderContent: l,
  getImage: c,
  getImageAlt: p,
  getHref: d,
  getLinkLabel: u,
  onNavigate: b,
  columns: g = { xs: 2, sm: 2, md: 3, lg: 4 },
  gap: y = 2,
  rowGap: x,
  columnGap: f,
  justifyItems: w = "stretch",
  alignItems: k = "stretch",
  imageAspectRatio: S = "4 / 5",
  imageFit: O = "cover",
  radius: _ = "soft",
  itemSx: Z,
  imageSx: Q,
  blockSx: E,
  sx: pe,
  className: ue,
  "aria-label": xe,
}) {
  return jsx(Me, {
    className: ue,
    "aria-label": xe,
    sx: {
      display: "grid",
      gridTemplateColumns: {
        xs: g.xs ? `repeat(${g.xs}, minmax(0, 1fr))` : void 0,
        sm: g.sm ? `repeat(${g.sm}, minmax(0, 1fr))` : void 0,
        md: g.md ? `repeat(${g.md}, minmax(0, 1fr))` : void 0,
        lg: g.lg ? `repeat(${g.lg}, minmax(0, 1fr))` : void 0,
        xl: g.xl ? `repeat(${g.xl}, minmax(0, 1fr))` : void 0,
      },
      gap: y,
      rowGap: x ?? y,
      columnGap: f ?? y,
      justifyItems: w,
      alignItems: k,
      width: "100%",
      ...pe,
    },
    children: e.map((N, A) => {
      let B = r ? r(N, A) : A,
        X = c?.(N, A),
        ie = p?.(N, A),
        R = d?.(N, A),
        be = u?.(N, A) ?? (typeof ie == "string" ? ie : void 0),
        le = !!(R || b),
        V = ($) => {
          $.metaKey ||
            $.ctrlKey ||
            $.shiftKey ||
            $.button === 1 ||
            (b && ($.preventDefault(), $.stopPropagation(), b(N, A, $)));
        },
        M = { item: N, index: A, href: R, onNavigate: le ? V : void 0 };
      return o
        ? jsx(Me, { sx: { minWidth: 0, width: "100%", ...Z }, children: o(M) }, B)
        : jsxs(
            Me,
            {
              sx: { minWidth: 0, width: "100%", overflow: "hidden", borderRadius: xa[_], ...Z },
              children: [
                jsxs(Me, {
                  sx: {
                    position: "relative",
                    width: "100%",
                    aspectRatio: S,
                    overflow: "hidden",
                    borderRadius: xa[_],
                    cursor: le ? "pointer" : void 0,
                    ...Q,
                  },
                  children: [
                    a ? a({ item: N, index: A, src: X, alt: ie, href: R, onNavigate: le ? V : void 0 }) : mn(X, ie, O),
                    R &&
                      jsx(Me, {
                        component: "a",
                        href: R,
                        "aria-label": be,
                        onClick: V,
                        sx: {
                          position: "absolute",
                          inset: 0,
                          zIndex: 1,
                          display: "block",
                          width: "100%",
                          height: "100%",
                          textDecoration: "none",
                          cursor: "pointer",
                        },
                      }),
                    !R &&
                      b &&
                      jsx(Me, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": be,
                        onClick: V,
                        onKeyDown: ($) => {
                          ($.key === "Enter" || $.key === " ") && ($.preventDefault(), V($));
                        },
                        sx: {
                          position: "absolute",
                          inset: 0,
                          zIndex: 1,
                          display: "block",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        },
                      }),
                    i &&
                      jsx(Me, {
                        sx: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 },
                        children: i({ item: N, index: A, src: X, alt: ie, href: R, onNavigate: le ? V : void 0 }),
                      }),
                  ],
                }),
                (s || l) &&
                  jsx(Me, {
                    sx: { width: "100%", minWidth: 0, ...E },
                    children: (s ?? l)({ item: N, index: A, href: R, onNavigate: le ? V : void 0 }),
                  }),
              ],
            },
            B,
          );
    }),
  });
}
var xn = {
    small: {
      maxWidth: 1180,
      minHeight: { xs: 620, sm: 640, md: 660 },
      contentMaxWidth: { xs: 520, md: 470 },
      visualMaxWidth: { xs: 360, sm: 460, md: 560, lg: 620 },
      code: { xs: "0.66rem", sm: "0.7rem" },
      title: { xs: "2.35rem", sm: "2.9rem", md: "3.35rem", lg: "3.6rem" },
      description: { xs: "0.875rem", sm: "0.9375rem" },
      titleBottom: { xs: 6, sm: 8 },
      actionTop: { xs: 3, sm: 3.5 },
      buttonHeight: 44,
      buttonMinWidth: 145,
      signatureTop: { xs: 4, sm: 5 },
    },
    medium: {
      maxWidth: 1320,
      minHeight: { xs: 650, sm: 690, md: 710 },
      contentMaxWidth: { xs: 540, md: 520 },
      visualMaxWidth: { xs: 400, sm: 520, md: 650, lg: 720 },
      code: { xs: "0.68rem", sm: "0.74rem" },
      title: { xs: "2.55rem", sm: "3.2rem", md: "3.8rem", lg: "4.15rem" },
      description: { xs: "0.925rem", sm: "1rem", md: "1.025rem" },
      titleBottom: { xs: 6, sm: 8 },
      actionTop: { xs: 3, sm: 3.5 },
      buttonHeight: 46,
      buttonMinWidth: 150,
      signatureTop: { xs: 4.5, sm: 5.5 },
    },
    large: {
      maxWidth: 1440,
      minHeight: { xs: 680, sm: 720, md: 740, lg: 760 },
      contentMaxWidth: { xs: 520, md: 560 },
      visualMaxWidth: { xs: 420, sm: 540, md: 700, lg: 800 },
      code: { xs: "0.7rem", sm: "0.76rem" },
      title: { xs: "2.8rem", sm: "3.5rem", md: "4.1rem", lg: "4.5rem" },
      description: { xs: "0.92rem", sm: "1rem", md: "1.05rem" },
      titleBottom: { xs: 6, sm: 8, md: 8 },
      actionTop: { xs: 3, sm: 3.5 },
      buttonHeight: 48,
      buttonMinWidth: 160,
      signatureTop: { xs: 4.5, sm: 5.5 },
    },
  },
  hn = ({
    image: e,
    renderImage: r,
    code: o,
    title: a,
    description: i,
    children: s,
    actionLabel: l,
    onAction: c,
    secondaryActionLabel: p,
    onSecondaryAction: d,
    signature: u,
    size: b = "medium",
    surface: g = "standard",
    className: y,
    sx: x,
  }) => {
    let f = xn[b],
      w = g === "glass",
      k = (S) =>
        r
          ? r(S)
          : jsx(Box, {
              component: "img",
              src: S.src,
              alt: S.alt ?? "",
              width: S.width,
              height: S.height,
              sx: { display: "block", width: "100%", height: "auto", maxWidth: "100%", objectFit: "contain" },
            });
    return jsx(Box, {
      className: y,
      sx: {
        width: "100%",
        boxSizing: "border-box",
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        py: { xs: 3, sm: 4, md: 5, lg: 6 },
        ...(w && {
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 3, sm: 4 },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          boxShadow: { xs: "0 12px 40px rgba(0, 0, 0, 0.06)", md: "0 20px 60px rgba(0, 0, 0, 0.08)" },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(255,255,255,0.10), transparent 45%, rgba(255,255,255,0.04))",
            opacity: 0.7,
          },
        }),
        ...x,
      },
      children: jsxs(Box, {
        sx: {
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: f.maxWidth,
          minHeight: f.minHeight,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.92fr) minmax(0, 1.08fr)" },
          alignItems: "center",
          columnGap: { xs: 0, md: 5, lg: 8 },
          rowGap: { xs: 4, sm: 5, md: 0 },
        },
        children: [
          jsxs(Stack, {
            sx: {
              width: "100%",
              maxWidth: f.contentMaxWidth,
              justifySelf: { xs: "center", md: "start" },
              alignSelf: "center",
              alignItems: "flex-start",
              textAlign: "left",
            },
            children: [
              o &&
                jsx(Typography, {
                  component: "div",
                  sx: {
                    mb: { xs: 1.5, sm: 1.75 },
                    color: "text.secondary",
                    fontSize: f.code,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    lineHeight: 1.2,
                    textTransform: "uppercase",
                  },
                  children: o,
                }),
              jsx(Typography, {
                component: "h1",
                sx: {
                  width: "100%",
                  color: "text.primary",
                  fontSize: f.title,
                  fontWeight: 700,
                  letterSpacing: "-0.055em",
                  lineHeight: { xs: 1.02, sm: 1, md: 0.99, lg: 0.98 },
                  textWrap: "balance",
                  maxWidth: "100%",
                },
                children: a,
              }),
              i &&
                jsx(Typography, {
                  component: "p",
                  sx: {
                    maxWidth: 570,
                    mt: f.titleBottom,
                    mb: 0,
                    color: "text.secondary",
                    fontSize: f.description,
                    fontWeight: 400,
                    lineHeight: 1.65,
                    textWrap: "pretty",
                  },
                  children: i,
                }),
              s && jsx(Box, { sx: { width: "100%", mt: 3 }, children: s }),
              (l || p) &&
                jsxs(Stack, {
                  direction: { xs: "column", sm: "row" },
                  spacing: { xs: 1.25, sm: 1.5 },
                  sx: {
                    width: { xs: "100%", sm: "auto" },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: "flex-start",
                    mt: f.actionTop,
                  },
                  children: [
                    l &&
                      jsx(Button, {
                        variant: "contained",
                        onClick: c,
                        sx: {
                          width: { xs: "100%", sm: "auto" },
                          minWidth: f.buttonMinWidth,
                          minHeight: f.buttonHeight,
                          px: 2.75,
                          whiteSpace: "nowrap",
                        },
                        children: l,
                      }),
                    p &&
                      jsx(Button, {
                        variant: "outlined",
                        onClick: d,
                        sx: {
                          width: { xs: "100%", sm: "auto" },
                          minWidth: f.buttonMinWidth,
                          minHeight: f.buttonHeight,
                          px: 2.75,
                          whiteSpace: "nowrap",
                        },
                        children: p,
                      }),
                  ],
                }),
              u &&
                jsx(Box, {
                  sx: {
                    mt: f.signatureTop,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    maxWidth: "100%",
                    color: "text.secondary",
                  },
                  children: u,
                }),
            ],
          }),
          e &&
            jsx(Box, {
              sx: {
                width: "100%",
                maxWidth: f.visualMaxWidth,
                justifySelf: { xs: "center", md: "end" },
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                order: { xs: -1, md: 0 },
                px: { xs: 2, sm: 3, md: 0 },
                "& img": { display: "block", width: "100%", height: "auto", maxWidth: "100%", objectFit: "contain" },
              },
              children: k(e),
            }),
        ],
      }),
    });
  };
var Cn = (e) => (Number.isFinite(e) ? Math.min(100, Math.max(0, e)) : 0),
  Fn = (e) =>
    e < 25
      ? e + 3
      : e < 50
        ? e + 2
        : e < 70
          ? e + 1.5
          : e < 85
            ? e + 0.8
            : e < 92
              ? e + 0.35
              : e < 96
                ? e + 0.15
                : e < 98
                  ? e + 0.05
                  : e,
  Mn = {
    "0%": { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)" },
    "25%": { transform: "translate3d(0, -8px, 0) rotate(-0.5deg) scale(1.006)" },
    "50%": { transform: "translate3d(0, -15px, 0) rotate(0deg) scale(1.012)" },
    "75%": { transform: "translate3d(0, -7px, 0) rotate(0.5deg) scale(1.006)" },
    "100%": { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)" },
  },
  kn = {
    "0%": { transform: "translate(-50%, -50%) rotate(-16deg) scale(1)" },
    "50%": { transform: "translate(-50%, -50%) rotate(-12deg) scale(1.025)" },
    "100%": { transform: "translate(-50%, -50%) rotate(-16deg) scale(1)" },
  },
  Tn = {
    "0%": { transform: "translate(-50%, -50%) rotate(18deg) scale(1)" },
    "50%": { transform: "translate(-50%, -50%) rotate(23deg) scale(1.035)" },
    "100%": { transform: "translate(-50%, -50%) rotate(18deg) scale(1)" },
  },
  Bn = styled$1(Box)(({ theme: e }) => ({
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    background: "transparent",
    color: e.palette.text.primary,
    overflow: "hidden",
    padding: e.spacing(4, 3),
    [e.breakpoints.down("sm")]: { minHeight: "100svh", padding: e.spacing(3, 2) },
    "@media (prefers-reduced-motion: reduce)": {
      "& *": {
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
        transitionDuration: "0.01ms !important",
      },
    },
  })),
  Rn = styled$1(Box)(({ theme: e }) => ({
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: 760,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    [e.breakpoints.down("sm")]: { maxWidth: 420 },
  })),
  zn = styled$1(Box)(({ theme: e }) => ({
    position: "relative",
    width: "min(540px, 66vw)",
    aspectRatio: "1 / 0.88",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: e.spacing(2),
    color: e.palette.text.primary,
    [e.breakpoints.down("md")]: { width: "min(460px, 70vw)" },
    [e.breakpoints.down("sm")]: { width: "min(350px, 82vw)", marginBottom: e.spacing(1) },
  })),
  Ln = styled$1(Box)(() => ({
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "loading-showcase-product-float 6s ease-in-out infinite",
    willChange: "transform",
    "@keyframes loading-showcase-product-float": Mn,
    "& img": {
      display: "block",
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
  })),
  Sa = styled$1("svg")(({ theme: e }) => ({
    position: "absolute",
    inset: "50% auto auto 50%",
    width: "115%",
    height: "58%",
    pointerEvents: "none",
    color: e.palette.text.primary,
    transformOrigin: "center",
    opacity: 0.9,
    zIndex: 1,
    willChange: "transform",
  })),
  In = styled$1(Sa)(() => ({
    transform: "translate(-50%, -50%) rotate(-16deg)",
    animation: "loading-showcase-orbit-one 9s ease-in-out infinite",
    "@keyframes loading-showcase-orbit-one": kn,
  })),
  Pn = styled$1(Sa)(() => ({
    transform: "translate(-50%, -50%) rotate(18deg)",
    opacity: 0.65,
    animation: "loading-showcase-orbit-two 11s ease-in-out infinite",
    "@keyframes loading-showcase-orbit-two": Tn,
  })),
  On = styled$1(Typography)(({ theme: e }) => ({
    maxWidth: 620,
    margin: 0,
    color: e.palette.text.primary,
    fontWeight: 300,
    letterSpacing: "-0.045em",
    lineHeight: 1.05,
    fontSize: "clamp(2.25rem, 4.2vw, 4.25rem)",
    textWrap: "balance",
    [e.breakpoints.down("sm")]: { maxWidth: 340, fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1.08 },
  })),
  An = styled$1(Box)(({ theme: e }) => ({
    width: "min(355px, 72vw)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: e.spacing(4),
    [e.breakpoints.down("sm")]: { width: "min(320px, 78vw)", marginTop: e.spacing(3) },
  })),
  Hn = styled$1(LinearProgress)(({ theme: e }) => ({
    width: "100%",
    height: 3,
    borderRadius: 999,
    backgroundColor: e.palette.action.disabledBackground,
    overflow: "hidden",
    "& .MuiLinearProgress-bar": {
      borderRadius: 999,
      backgroundColor: e.palette.text.primary,
      transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
  })),
  Wn = styled$1(Typography)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(1),
    marginTop: e.spacing(1.75),
    color: e.palette.text.secondary,
    fontSize: "0.62rem",
    fontWeight: 600,
    letterSpacing: "0.28em",
    lineHeight: 1.4,
    textTransform: "uppercase",
    [e.breakpoints.down("sm")]: { fontSize: "0.58rem", letterSpacing: "0.22em", gap: e.spacing(0.75) },
  })),
  En = styled$1("span")(({ theme: e }) => ({
    color: e.palette.text.secondary,
    opacity: 0.65,
    fontSize: "0.8rem",
    lineHeight: 1,
  })),
  $n = styled$1(Box)(({ theme: e }) => ({
    position: "absolute",
    right: e.spacing(6),
    bottom: e.spacing(5),
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: e.palette.text.primary,
    [e.breakpoints.down("md")]: { right: e.spacing(4), bottom: e.spacing(4) },
    [e.breakpoints.down("sm")]: {
      position: "relative",
      right: "auto",
      bottom: "auto",
      marginTop: e.spacing(6),
      alignItems: "center",
    },
  })),
  Gn = styled$1("span")(({ theme: e }) => ({
    fontFamily: '"Brush Script MT", "Segoe Script", "Snell Roundhand", cursive',
    fontSize: "1.65rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: e.palette.text.primary,
    [e.breakpoints.down("sm")]: { fontSize: "1.4rem" },
  })),
  Vn = styled$1("span")(({ theme: e }) => ({
    marginTop: e.spacing(1),
    fontSize: "0.52rem",
    fontWeight: 600,
    letterSpacing: "0.32em",
    lineHeight: 1,
    color: e.palette.text.secondary,
    [e.breakpoints.down("sm")]: { fontSize: "0.48rem", letterSpacing: "0.27em" },
  })),
  jn = ({
    image: e,
    renderImage: r,
    loading: o = true,
    title: a = jsx(Fragment, { children: "We\u2019re getting things ready..." }),
    loadingLabel: i = "LOADING YOUR EXPERIENCE",
    signature: s = jsxs(Fragment, {
      children: [jsx(Gn, { children: "Jivico Studio" }), jsx(Vn, { children: "JIVICO STUDIO" })],
    }),
    className: l,
  }) => {
    let [c, p] = useState(0),
      d = useRef(0);
    useEffect(() => {
      if (!o) {
        let f = window.setInterval(() => {
          p((w) => {
            let k = Math.min(100, w + 2.5);
            return ((d.current = k), k >= 100 && window.clearInterval(f), k);
          });
        }, 40);
        return () => {
          window.clearInterval(f);
        };
      }
      let x = window.setInterval(() => {
        p((f) => {
          let w = Cn(Fn(f));
          return ((d.current = w), w);
        });
      }, 180);
      return () => {
        window.clearInterval(x);
      };
    }, [o]);
    let u = useId(),
      b = `loading-orbit-one-${u}`,
      g = `loading-orbit-two-${u}`,
      y = (x) =>
        r
          ? r(x)
          : jsx(Box, {
              component: "img",
              src: x.src,
              alt: x.alt ?? "",
              width: x.width,
              height: x.height,
              sx: {
                display: "block",
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              },
            });
    return jsxs(Bn, {
      className: l,
      "aria-busy": o,
      "aria-label": o ? "Loading" : void 0,
      children: [
        jsxs(Rn, {
          children: [
            e &&
              jsxs(zn, {
                children: [
                  jsxs(In, {
                    viewBox: "0 0 700 300",
                    "aria-hidden": "true",
                    children: [
                      jsx("defs", {
                        children: jsxs("linearGradient", {
                          id: b,
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%",
                          children: [
                            jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0" }),
                            jsx("stop", { offset: "30%", stopColor: "currentColor", stopOpacity: "0.32" }),
                            jsx("stop", { offset: "55%", stopColor: "currentColor", stopOpacity: "0.7" }),
                            jsx("stop", { offset: "80%", stopColor: "currentColor", stopOpacity: "0.18" }),
                            jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" }),
                          ],
                        }),
                      }),
                      jsx("ellipse", {
                        cx: "350",
                        cy: "150",
                        rx: "290",
                        ry: "90",
                        fill: "none",
                        stroke: `url(#${b})`,
                        strokeWidth: "2.5",
                      }),
                    ],
                  }),
                  jsxs(Pn, {
                    viewBox: "0 0 700 300",
                    "aria-hidden": "true",
                    children: [
                      jsx("defs", {
                        children: jsxs("linearGradient", {
                          id: g,
                          x1: "0%",
                          y1: "100%",
                          x2: "100%",
                          y2: "0%",
                          children: [
                            jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0" }),
                            jsx("stop", { offset: "25%", stopColor: "currentColor", stopOpacity: "0.18" }),
                            jsx("stop", { offset: "52%", stopColor: "currentColor", stopOpacity: "0.65" }),
                            jsx("stop", { offset: "78%", stopColor: "currentColor", stopOpacity: "0.18" }),
                            jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" }),
                          ],
                        }),
                      }),
                      jsx("ellipse", {
                        cx: "350",
                        cy: "150",
                        rx: "300",
                        ry: "105",
                        fill: "none",
                        stroke: `url(#${g})`,
                        strokeWidth: "2",
                      }),
                    ],
                  }),
                  jsx(Ln, { children: y({ ...e, width: e.width ?? 540, height: e.height ?? 540 }) }),
                ],
              }),
            jsx(On, { children: a }),
            jsxs(An, {
              children: [
                jsx(Hn, { variant: "determinate", value: c, "aria-label": "Loading" }),
                jsxs(Wn, {
                  children: [
                    jsx("span", { children: i }),
                    jsx(En, { "aria-hidden": "true", children: "\xB7" }),
                    jsxs("span", { children: [Math.round(c), "%"] }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsx($n, { children: s }),
      ],
    });
  };
function Ca() {
  let e = useTheme(),
    r = useMediaQuery(e.breakpoints.only("xs")),
    o = useMediaQuery(e.breakpoints.only("sm")),
    a = useMediaQuery(e.breakpoints.only("md")),
    i = useMediaQuery(e.breakpoints.only("lg")),
    s = useMediaQuery(e.breakpoints.only("xl")),
    l = r,
    c = o || a,
    p = i || s,
    d = "xs";
  return (
    s ? (d = "xl") : i ? (d = "lg") : a ? (d = "md") : o && (d = "sm"),
    { breakpoint: d, isMobile: l, isTablet: c, isDesktop: p, isXs: r, isSm: o, isMd: a, isLg: i, isXl: s }
  );
}
var Nn = Ca;
function Un({ children: e, enableCssBaseline: r = true }) {
  let { resolvedMode: o } = kr(),
    a = G__default.useMemo(() => Fr(o), [o]);
  return jsxs(ThemeProvider, { theme: a, children: [r && jsx(Xn, {}), e] });
}
function Xg({
  children: e,
  defaultMode: r = "system",
  storageKey: o = "jivico-theme-mode",
  enableCssBaseline: a = true,
}) {
  return jsx(Xt, { defaultMode: r, storageKey: o, children: jsx(Un, { enableCssBaseline: a, children: e }) });
}
function ep({ mode: e, children: r }) {
  let o = useMemo(() => Fr(e), [e]);
  return jsx(ThemeProvider, { theme: o, children: r });
}
export {
  no as ACCENT_COLORS,
  po as ACTION_COLORS,
  mo as ALERT_RGB,
  X5 as AmbientBlob,
  lo as BACKGROUND_COLORS,
  to as BRAND_COLORS,
  t as COLORS,
  J5 as CoverImage,
  go as DIVIDER_COLORS,
  U5 as DecorativeBlob,
  Qi as DynamicIsland,
  lg as DynamicIslandAction,
  Ui as DynamicIslandItem,
  b5 as EdgeFade,
  bo as GLASS_COLORS,
  It as GOOGLE_SANS_FLEX_URL,
  uo as GRADIENT_COLORS,
  un as Gallery,
  Ea as GlassBox,
  mc as GlassCardBody,
  o5 as GlassContainer,
  x5 as GlassControlsGroup,
  Ya as GlassEdgeFade,
  Vt as GlassIconGlow,
  Xt as GlassModeProvider,
  p5 as GlassNavArrowButton,
  Ot as GlassPanel,
  uc as GlassProductTitle,
  h5 as GlassScrollButton,
  $t as GlassSectionHeaderRow,
  Jt as GlassSectionSubtitle,
  jt as GlassSectionTitle,
  r5 as GlassSurface,
  ep as GlassThemeScope,
  Gt as GlassTitleGroup,
  g5 as GlassToolbarRoot,
  pc as GlassWishlistButton,
  D5 as GradientContextTitle,
  Q5 as GradientText,
  L5 as HeaderAppBar,
  E5 as HeroActions,
  W5 as HeroDescription,
  j5 as HeroImageFrame,
  A5 as HeroSection,
  $5 as HeroStatsPanel,
  H5 as HeroTitle,
  Ni as Highlight,
  bc as HolographicBadge,
  Ol as JIVICO_FONTS_URL,
  Al as JIVICO_FONT_FAMILY,
  oc as JivicoFontLinks,
  ai as JivicoFontPreload,
  Xg as JivicoGlassProvider,
  Pt as JivicoGlassTheme,
  hc as LiquidGlassCard,
  mi as LiquidGlassCardRoot,
  gc as LiquidSpotlightImageArea,
  jn as LoadingShowcase,
  sc as MobileViewAll,
  gi as MobileViewAllButton,
  ao as PRIMARY_COLORS,
  i5 as PageRoot,
  Pi as Rails,
  io as SECONDARY_COLORS,
  so as SEMANTIC_COLORS,
  l5 as Section,
  Ja as SectionContainer,
  T5 as SectionHeader,
  Si as Showcase,
  $i as Spotlight,
  V5 as StatLabel,
  G5 as StatValue,
  hn as StatusShowcase,
  T5 as StudioSectionHeader,
  co as TEXT_COLORS,
  xc as TribeMemberPill,
  bn as VisualViewer,
  vo as buildAccentPalette,
  Mo as buildActionPalette,
  ko as buildAlertPalette,
  Bo as buildAliasesPalette,
  wo as buildBackgroundPalette,
  xo as buildBrandPalette,
  Co as buildDividerPalette,
  Fo as buildGlassPalette,
  To as buildGradientsPalette,
  Ro as buildPalette,
  ho as buildPrimaryPalette,
  fo as buildSecondaryPalette,
  yo as buildSemanticPalette,
  So as buildTextPalette,
  Xd as createJivicoTheme,
  Yo as getControlOverrides,
  Ko as getDataDisplayOverrides,
  at as getFeedbackOverrides,
  No as getInputOverrides,
  ft as getNavigationOverrides,
  lt as getSurfaceOverrides,
  ur as getVariantOverlay,
  zo as typography,
  kr as useGlassMode,
  Nn as useResponsive,
  Ca as useResponsiveHook,
};
