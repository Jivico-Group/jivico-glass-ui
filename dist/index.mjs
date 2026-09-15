import { keyframes, styled as styled$1, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { styled, Box, Container, IconButton, Typography, AppBar, Chip, Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import CssBaseline from '@mui/material/CssBaseline';

// src/theme/colors.ts
var COLORS = {
  primary: {
    light: "#EC4899",
    // Brand Pink
    dark: "#F472B6",
    // Brand Pink (Lighter for Dark Mode)
    hoverLight: "#DB2777",
    hoverDark: "#F9A8D4",
    glowLight: "rgba(236, 72, 153, 0.35)",
    glowDark: "rgba(244, 114, 182, 0.45)"
  },
  secondary: {
    light: "#1D1D1F",
    // Apple Obsidian
    dark: "#FFFFFF",
    // Crisp White
    hoverLight: "#333336",
    hoverDark: "#E8EAED",
    glowLight: "rgba(0, 0, 0, 0.2)",
    glowDark: "rgba(255, 255, 255, 0.25)"
  },
  success: {
    light: "#34A853",
    // Google Green / Apple Leaf
    dark: "#81C995",
    // Soft Antigravity Mint
    hoverLight: "#2D9247",
    hoverDark: "#A8DAB5",
    glowLight: "rgba(52, 168, 83, 0.35)",
    glowDark: "rgba(129, 201, 149, 0.4)"
  },
  warning: {
    light: "#E67700",
    // Apple Deep Amber / Google Warm Ochre
    dark: "#F6AD55",
    // Antigravity Warm Honey Peach
    hoverLight: "#CC6A00",
    hoverDark: "#FBD38D",
    glowLight: "rgba(230, 119, 0, 0.35)",
    glowDark: "rgba(246, 173, 85, 0.4)"
  },
  error: {
    light: "#EA4335",
    // Google Red / Apple Coral
    dark: "#F28B82",
    // Antigravity Coral Red
    hoverLight: "#D93025",
    hoverDark: "#F6AEA9",
    glowLight: "rgba(234, 67, 53, 0.35)",
    glowDark: "rgba(242, 139, 130, 0.4)"
  },
  info: {
    light: "#4285F4",
    // Google Blue / Sky Blue
    dark: "#8AB4F8",
    // Antigravity Sky Blue
    hoverLight: "#1A73E8",
    hoverDark: "#AECBFA",
    glowLight: "rgba(66, 133, 244, 0.35)",
    glowDark: "rgba(138, 180, 248, 0.4)"
  },
  background: {
    light: "#FFFFFF",
    dark: "#000000",
    paperLight: "#F8F9FA",
    paperDark: "#141418"
  },
  text: {
    primaryLight: "#1D1D1F",
    primaryDark: "#F5F5F7",
    secondaryLight: "#5F6368",
    secondaryDark: "#9AA0A6"
  },
  divider: {
    light: "rgba(0, 0, 0, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)"
  },
  action: {
    hoverLight: "rgba(0, 0, 0, 0.04)",
    hoverDark: "rgba(255, 255, 255, 0.06)",
    selectedLight: "rgba(0, 113, 227, 0.08)",
    selectedDark: "rgba(41, 151, 255, 0.15)"
  },
  white: "#FFFFFF",
  black: "#0A0A0C",
  glass: {
    buttonBorderLight: "rgba(0, 0, 0, 0.18)",
    buttonBorderDark: "rgba(255, 255, 255, 0.2)",
    buttonBgLight: "rgba(0, 0, 0, 0.02)",
    buttonBgDark: "rgba(255, 255, 255, 0.04)",
    buttonHoverBgLight: "rgba(0, 0, 0, 0.05)",
    buttonHoverBgDark: "rgba(255, 255, 255, 0.08)",
    buttonTextHoverLight: "rgba(0, 0, 0, 0.04)",
    buttonTextHoverDark: "rgba(255, 255, 255, 0.06)",
    fabShadowLight: "0 8px 24px rgba(0,0,0,0.12)",
    fabShadowDark: "0 8px 24px rgba(0,0,0,0.6)",
    inputBorderHoverLight: "rgba(0, 0, 0, 0.3)",
    inputBorderHoverDark: "rgba(255, 255, 255, 0.3)",
    inputFocusBgDark: "rgba(255, 255, 255, 0.06)",
    paperBgLight: "rgba(255, 255, 255, 0.95)",
    paperBgDark: "rgba(20, 20, 24, 0.95)",
    paperBorderLight: "rgba(0, 0, 0, 0.08)",
    paperBorderDark: "rgba(255, 255, 255, 0.1)",
    paperShadowLight: "0 16px 40px rgba(0, 0, 0, 0.08)",
    paperShadowDark: "0 16px 40px rgba(0, 0, 0, 0.6)",
    controlLight: "rgba(0, 0, 0, 0.3)",
    controlDark: "rgba(255, 255, 255, 0.3)",
    switchTrackLight: "rgba(0, 0, 0, 0.15)",
    switchTrackDark: "rgba(255, 255, 255, 0.2)",
    switchShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    sliderThumbShadow: "0 2px 8px rgba(0,0,0,0.2)",
    sliderRailLight: "rgba(0, 0, 0, 0.1)",
    sliderRailDark: "rgba(255, 255, 255, 0.15)",
    chipBgLight: "rgba(0, 0, 0, 0.05)",
    chipBgDark: "rgba(255, 255, 255, 0.08)",
    chipBorderLight: "rgba(0, 0, 0, 0.06)",
    chipBorderDark: "rgba(255, 255, 255, 0.08)",
    avatarBorderLight: "rgba(0, 0, 0, 0.08)",
    avatarBorderDark: "rgba(255, 255, 255, 0.12)",
    tableBorderLight: "rgba(0, 0, 0, 0.06)",
    tableBorderDark: "rgba(255, 255, 255, 0.06)",
    tableHeadBgLight: "rgba(0, 0, 0, 0.02)",
    tableHeadBgDark: "rgba(255, 255, 255, 0.02)",
    tooltipBgLight: "rgba(20, 20, 24, 0.65)",
    tooltipBgDark: "rgba(255, 255, 255, 0.65)",
    tooltipBorderLight: "rgba(255, 255, 255, 0.1)",
    tooltipBorderDark: "rgba(0, 0, 0, 0.12)",
    tooltipShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    dialogBgLight: "rgba(255, 255, 255, 0.7)",
    dialogBgDark: "rgba(20, 20, 24, 0.7)",
    dialogShadowLight: "0 24px 64px rgba(0, 0, 0, 0.15)",
    dialogShadowDark: "0 24px 64px rgba(0, 0, 0, 0.8)",
    skeletonBgLight: "rgba(0, 0, 0, 0.06)",
    skeletonBgDark: "rgba(255, 255, 255, 0.06)",
    progressBgLight: "rgba(0, 0, 0, 0.08)",
    progressBgDark: "rgba(255, 255, 255, 0.1)",
    cardBgLight: "rgba(248, 249, 250, 0.85)",
    cardBgDark: "rgba(20, 20, 24, 0.75)",
    cardShadowLight: "0 12px 36px 0 rgba(0, 0, 0, 0.03)",
    cardShadowDark: "0 12px 36px 0 rgba(0, 0, 0, 0.55)",
    cardHoverShadowLight: "0 20px 48px 0 rgba(0, 0, 0, 0.08)",
    cardHoverShadowDark: "0 20px 48px 0 rgba(0, 0, 0, 0.7)",
    elevation1Light: "0 8px 24px rgba(0, 0, 0, 0.04)",
    elevation1Dark: "0 8px 24px rgba(0, 0, 0, 0.4)",
    appBarBgLight: "rgba(255, 255, 255, 0.8)",
    appBarBgDark: "rgba(10, 10, 12, 0.75)",
    accordionBgLight: "rgba(248, 249, 250, 0.6)",
    accordionBgDark: "rgba(20, 20, 24, 0.6)",
    drawerBgLight: "rgba(255, 255, 255, 0.95)",
    drawerBgDark: "rgba(10, 10, 12, 0.95)",
    menuItemHoverLight: "rgba(0, 0, 0, 0.04)",
    menuItemHoverDark: "rgba(255, 255, 255, 0.08)"
  },
  alertRgb: {
    success: "52, 168, 83",
    warningDark: "246, 173, 85",
    warningLight: "230, 119, 0",
    error: "234, 67, 53",
    info: "66, 133, 244"
  },
  gradients: {
    primary: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    primaryHover: "linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)"
  }
};

// src/theme/palette.ts
var buildPalette = (mode) => {
  const isDark = mode === "dark";
  return {
    primary: {
      main: isDark ? COLORS.primary.dark : COLORS.primary.light,
      hover: isDark ? COLORS.primary.hoverDark : COLORS.primary.hoverLight,
      glow: isDark ? COLORS.primary.glowDark : COLORS.primary.glowLight,
      contrastText: COLORS.white
    },
    secondary: {
      main: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
      hover: isDark ? COLORS.secondary.hoverDark : COLORS.secondary.hoverLight,
      glow: isDark ? COLORS.secondary.glowDark : COLORS.secondary.glowLight,
      contrastText: isDark ? COLORS.black : COLORS.white
    },
    success: {
      main: isDark ? COLORS.success.dark : COLORS.success.light,
      hover: isDark ? COLORS.success.hoverDark : COLORS.success.hoverLight,
      glow: isDark ? COLORS.success.glowDark : COLORS.success.glowLight,
      contrastText: isDark ? COLORS.black : COLORS.white
    },
    warning: {
      main: isDark ? COLORS.warning.dark : COLORS.warning.light,
      hover: isDark ? COLORS.warning.hoverDark : COLORS.warning.hoverLight,
      glow: isDark ? COLORS.warning.glowDark : COLORS.warning.glowLight,
      contrastText: isDark ? COLORS.black : COLORS.white
    },
    error: {
      main: isDark ? COLORS.error.dark : COLORS.error.light,
      hover: isDark ? COLORS.error.hoverDark : COLORS.error.hoverLight,
      glow: isDark ? COLORS.error.glowDark : COLORS.error.glowLight,
      contrastText: COLORS.white
    },
    info: {
      main: isDark ? COLORS.info.dark : COLORS.info.light,
      hover: isDark ? COLORS.info.hoverDark : COLORS.info.hoverLight,
      glow: isDark ? COLORS.info.glowDark : COLORS.info.glowLight,
      contrastText: isDark ? COLORS.black : COLORS.white
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
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "sans-serif"
  ].join(","),
  h1: { fontSize: "3.75rem", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05 },
  h2: { fontSize: "2.85rem", fontWeight: 600, letterSpacing: "-0.028em", lineHeight: 1.1 },
  h3: { fontSize: "2.1rem", fontWeight: 600, letterSpacing: "-0.022em", lineHeight: 1.18 },
  h4: { fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.015em" },
  h5: { fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em" },
  h6: { fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.005em" },
  body1: { fontSize: "1.0625rem", lineHeight: 1.5, letterSpacing: "-0.01em", fontWeight: 400 },
  body2: { fontSize: "0.875rem", lineHeight: 1.45, letterSpacing: "-0.005em" },
  button: {
    textTransform: "none",
    fontWeight: 500,
    letterSpacing: "-0.01em",
    fontSize: "0.9375rem"
  }
};

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
        const glowColor = activeColorGroup.glow;
        const isPrimary = colorKey === "primary";
        const isSecondary = colorKey === "secondary";
        let textColor = COLORS.white;
        if (isDark && (isSecondary || colorKey === "success" || colorKey === "warning" || colorKey === "info")) {
          textColor = COLORS.black;
        }
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 48,
          borderRadius: 30,
          padding: "12px 28px",
          fontWeight: 800,
          fontSize: "0.92rem",
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
          // Primary Contained
          ...variant === "contained" && isPrimary && {
            background: COLORS.gradients.primary,
            color: COLORS.white,
            boxShadow: isDark ? "0 8px 28px rgba(236,72,153,0.38), inset 0 1px 1px rgba(255,255,255,0.3)" : "0 8px 24px rgba(236,72,153,0.28), inset 0 1px 1px rgba(255,255,255,0.4)",
            "&:hover": {
              background: COLORS.gradients.primaryHover,
              transform: "translateY(-2px)",
              boxShadow: isDark ? "0 12px 36px rgba(236,72,153,0.5), 0 0 20px rgba(139,92,246,0.3)" : "0 12px 32px rgba(236,72,153,0.38)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: isDark ? "0 0 0 4px rgba(236,72,153,0.22), 0 8px 28px rgba(236,72,153,0.38)" : "0 0 0 4px rgba(236,72,153,0.18), 0 8px 24px rgba(236,72,153,0.28)"
            },
            "&.Mui-disabled": {
              background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              boxShadow: "none",
              transform: "none"
            }
          },
          // Primary Outlined
          ...variant === "outlined" && isPrimary && {
            border: "none",
            boxShadow: `inset 0 0 0 2px ${isDark ? "rgba(236,72,153,0.7)" : "#EC4899"}`,
            color: "#EC4899",
            background: isDark ? "rgba(236,72,153,0.04)" : "rgba(236,72,153,0.02)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            "&:hover": {
              background: isDark ? "rgba(236,72,153,0.14)" : "rgba(236,72,153,0.08)",
              transform: "translateY(-2px)",
              boxShadow: `inset 0 0 0 2px #F472B6, 0 8px 20px rgba(236,72,153,0.25)`
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `inset 0 0 0 2px ${isDark ? "rgba(236,72,153,0.7)" : "#EC4899"}, 0 0 0 4px rgba(236,72,153,0.16), 0 8px 20px rgba(236,72,153,0.2)`
            },
            "&.Mui-disabled": {
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              background: "transparent",
              boxShadow: "none",
              transform: "none"
            }
          },
          // Secondary Contained
          ...variant === "contained" && isSecondary && {
            backgroundColor: mainColor,
            color: textColor,
            "&:hover": {
              backgroundColor: hoverColor,
              boxShadow: `0 6px 20px ${glowColor}`,
              transform: "translateY(-1.5px) scale(1.015)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 4px ${glowColor}, 0 6px 20px ${glowColor}`
            },
            "&.Mui-disabled": {
              backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              boxShadow: "none",
              transform: "none"
            }
          },
          // Secondary Outlined
          ...variant === "outlined" && isSecondary && {
            borderColor: palette.glass.buttonBorder,
            color: mainColor,
            backgroundColor: palette.glass.buttonBg,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "&:hover": {
              borderColor: mainColor,
              backgroundColor: palette.glass.buttonHoverBg,
              boxShadow: `0 0 14px ${glowColor}`,
              transform: "translateY(-1.5px) scale(1.015)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 4px ${glowColor}`
            },
            "&.Mui-disabled": {
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
              background: "transparent",
              boxShadow: "none",
              transform: "none"
            }
          },
          // Other Contained Colors
          ...variant === "contained" && !isPrimary && !isSecondary && {
            backgroundColor: mainColor,
            color: textColor,
            "&:hover": {
              backgroundColor: hoverColor,
              boxShadow: `0 6px 20px ${glowColor}`,
              transform: "translateY(-1.5px) scale(1.015)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 4px ${glowColor}`
            }
          },
          // Other Outlined Colors
          ...variant === "outlined" && !isPrimary && !isSecondary && {
            borderColor: palette.glass.buttonBorder,
            color: mainColor,
            backgroundColor: palette.glass.buttonBg,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "&:hover": {
              borderColor: mainColor,
              backgroundColor: palette.glass.buttonHoverBg,
              boxShadow: `0 0 14px ${glowColor}`,
              transform: "translateY(-1.5px) scale(1.015)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 4px ${glowColor}`
            }
          },
          // Text Button
          ...variant === "text" && {
            color: mainColor,
            padding: "8px 16px",
            minHeight: 40,
            "&:hover": {
              backgroundColor: palette.glass.buttonTextHover,
              transform: "translateY(-1px)"
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`
            }
          }
        };
      },
      sizeSmall: {
        minHeight: 36,
        padding: "8px 18px",
        fontSize: "0.8125rem"
      },
      sizeMedium: {
        minHeight: 40,
        padding: "11px 20px",
        fontSize: "0.875rem"
      },
      sizeLarge: {
        minHeight: 52,
        padding: "13px 30px",
        fontSize: "1.0625rem"
      }
    }
  },
  // ========================================================================
  // BUTTON GROUP
  // ========================================================================
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        overflow: "hidden",
        boxShadow: "none",
        "& .MuiButton-root": {
          borderRadius: 0
        }
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
      root: {
        borderRadius: 12,
        backgroundColor: palette.glass.buttonBg,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.divider,
          transition: "border-color 0.2s ease"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.glass.inputBorderHover
        },
        "&.Mui-focused": {
          backgroundColor: palette.glass.inputFocusBg,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.main,
            borderWidth: "1.5px"
          }
        },
        "&.Mui-error": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.error.main
          }
        }
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
      root: {
        fontSize: "0.9375rem",
        color: palette.text.secondary,
        "&.Mui-focused": {
          color: palette.primary.main
        }
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
          "& .MuiMenuItem-root": {
            minHeight: "32px !important",
            padding: "4px 12px !important",
            fontSize: "0.85rem !important"
          }
        }
      }
    }
  },
  // ========================================================================
  // AUTOCOMPLETE
  // ========================================================================
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        borderRadius: 18,
        backgroundColor: palette.glass.paperBg,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.paperShadow
      }
    }
  }
});

// src/theme/overrides/controls.ts
var getControlOverrides = (palette, isDark) => ({
  MuiCheckbox: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        color: palette.glass.inputBorderHover,
        "&.Mui-checked": {
          color: palette.primary.main
        }
      }
    }
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: palette.glass.inputBorderHover,
        "&.Mui-checked": {
          color: palette.primary.main
        }
      }
    }
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 40,
        height: 20,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(20px)",
            color: isDark ? "#1D1D1F" : COLORS.white,
            "& + .MuiSwitch-track": {
              backgroundColor: palette.primary.main,
              opacity: 1,
              border: 0
            }
          }
        },
        "& .MuiSwitch-thumb": {
          width: 16,
          height: 16,
          boxShadow: palette.glass.switchShadow
        },
        "& .MuiSwitch-track": {
          borderRadius: 20 / 2,
          backgroundColor: palette.glass.switchTrack,
          opacity: 1
        }
      },
      sizeSmall: {
        width: 32,
        height: 18,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(14px)"
          }
        },
        "& .MuiSwitch-thumb": {
          width: 14,
          height: 14
        },
        "& .MuiSwitch-track": {
          borderRadius: 18 / 2
        }
      }
    }
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
        height: 6,
        padding: "13px 0"
      },
      thumb: {
        height: 14,
        width: 14,
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        "&:hover, &.Mui-focusVisible": {
          boxShadow: `0px 0px 0px 6px ${palette.primary.glow}`
        },
        "&::before": {
          display: "none"
        }
      },
      track: {
        border: "none",
        height: 6,
        borderRadius: 3
      },
      rail: {
        opacity: 0.2,
        backgroundColor: isDark ? "#fff" : "#000",
        height: 6,
        borderRadius: 3
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

// src/theme/overrides/dataDisplay.ts
var getDataDisplayOverrides = (palette, _isDark) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        fontFamily: '"Google Sans Flex", -apple-system, sans-serif',
        fontSize: "0.8125rem",
        backdropFilter: "blur(12px)",
        "& .MuiChip-label": {
          color: "inherit"
        }
      },
      filled: {
        backgroundColor: palette.glass.buttonHoverBg,
        color: palette.text.primary,
        border: `1px solid ${palette.glass.chipBorder}`
      }
    }
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        borderRadius: "50%",
        border: `1.5px solid ${palette.glass.avatarBorder}`
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
  }
});

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
        backgroundColor: palette.glass.dialogBg,
        backdropFilter: "saturate(180%) blur(24px)",
        WebkitBackdropFilter: "saturate(180%) blur(24px)",
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.dialogShadow,
        padding: "8px"
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
        background: `linear-gradient(135deg, ${palette.glass.cardBg} 0%, ${isDark ? "rgba(30,30,35,0.2)" : "rgba(255,255,255,0.4)"} 100%)`,
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: `${palette.glass.cardShadow}, inset 0 1px 1px 0 ${isDark ? "rgba(246, 29, 29, 0.1)" : "rgba(255, 255, 255, 0.7)"}`,
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.01)",
          boxShadow: isDark ? "0 28px 60px rgba(0, 0, 0, 0.65), 0 0 32px rgba(236, 72, 153, 0.28), inset 0 1px 2px rgba(255, 255, 255, 0.35)" : "0 28px 60px rgba(236, 72, 153, 0.14), 0 0 28px rgba(236, 72, 153, 0.18), inset 0 1px 2px rgba(255, 255, 255, 1)",
          borderColor: isDark ? "rgba(236, 72, 153, 0.5)" : "rgba(236, 72, 153, 0.4)",
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
        backgroundImage: "none"
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
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.glass.appBarBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${palette.glass.chipBorder}`,
        borderRadius: 0,
        boxShadow: "none",
        color: palette.text.primary,
        transition: "all 0.3s ease",
        zIndex: 1100
      }
    }
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
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 44
      },
      indicator: {
        height: 3,
        borderRadius: 3,
        backgroundColor: palette.primary.main,
        boxShadow: isDark ? `0 0 10px ${palette.primary.glow}` : "none"
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.9375rem",
        color: palette.text.secondary,
        "&.Mui-selected": {
          color: palette.text.primary,
          fontWeight: 600
        }
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        backgroundColor: isDark ? "rgba(20, 20, 24, 0.58)" : "rgba(255, 255, 255, 0.58)",
        backdropFilter: "blur(30px) saturate(180%) brightness(110%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(110%)",
        backgroundImage: `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.18),
          rgba(255, 255, 255, 0.04)
        )
      `,
        border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid rgba(255, 255, 255, 0.65)",
        boxShadow: isDark ? `
          0 -12px 40px rgba(0, 0, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.12)
        ` : `
          0 -12px 40px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.7)
        `,
        backgroundClip: "padding-box",
        overflow: "hidden",
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
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: 18,
        backgroundColor: palette.glass.paperBg,
        backdropFilter: "saturate(180%) blur(20px)",
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.paperShadow,
        padding: "6px",
        maxHeight: "400px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)",
          borderRadius: "3px"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.25)"
        }
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
  }
});

// src/theme/theme.ts
var GOOGLE_SANS_FLEX_URL = "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";
var themeCache = {};
function buildTheme(mode) {
  const isDark = mode === "dark";
  const palette = buildPalette(mode);
  const theme = createTheme({
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
      borderRadius: 18
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
          }
        }
      },
      ...getInputOverrides(palette, isDark),
      ...getControlOverrides(palette, isDark),
      ...getDataDisplayOverrides(palette),
      ...getFeedbackOverrides(palette, isDark),
      ...getSurfaceOverrides(palette, isDark),
      ...getNavigationOverrides(palette, isDark)
    }
  });
  return responsiveFontSizes(theme);
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
var GlassPanel = styled(Box, {
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
var PageRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  overflowX: "clip",
  backgroundColor: theme.palette.background.default
}));
var SectionContainer = styled(Container, {
  shouldForwardProp: (p) => p !== "largeBottom" && p !== "smallBottom"
})(({ largeBottom, smallBottom }) => ({
  position: "relative",
  zIndex: 1,
  marginBottom: largeBottom ? 96 : smallBottom ? 64 : 80
}));
var Section = SectionContainer;
var GlassToolbarRoot = styled(Box, {
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
var GlassNavArrowButton = styled(IconButton, {
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
var GlassEdgeFade = styled(Box, {
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
var GlassSectionHeaderRow = styled(Box)(({ theme }) => ({
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
var GlassTitleGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "auto"
  }
}));
var GlassIconGlow = styled(Box, {
  shouldForwardProp: (p) => p !== "gradient"
})(({ gradient: gradient2 = "amber" }) => {
  const bg = {
    amber: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)",
    pink: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    cyan: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
    purple: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    emerald: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)"
  }[gradient2];
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
var GlassSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: 900,
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem"
  }
}));
var GlassSectionSubtitle = styled(Typography, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ isDark }) => ({
  fontSize: "0.875rem",
  color: isDark ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)"
}));
var GlassControlsGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var GlassScrollButton = styled(IconButton, {
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
var ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {
  },
  setMode: () => {
  }
});
var useThemeMode = () => useContext(ThemeContext);
function ThemeModeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode"
}) {
  const [mode, setModeState] = useState(defaultMode);
  useEffect(() => {
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
  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
      setMode
    }),
    [mode]
  );
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value, children });
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsxs(GlassTitleGroup, { sx: { flex: 1, minWidth: 0 }, children: [
          icon && /* @__PURE__ */ jsx(GlassIconGlow, { gradient: iconGradient, sx: { flexShrink: 0 }, children: icon }),
          /* @__PURE__ */ jsxs(Box, { sx: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx(
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
            subtitle && /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs(
          Box,
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
              desktopAction && /* @__PURE__ */ jsx(Box, { sx: { display: { xs: "none", md: "block" } }, children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "contained",
                  color: "primary",
                  component: desktopAction.href ? "a" : "button",
                  href: desktopAction.href,
                  onClick: desktopAction.onClick,
                  sx: { px: 3, py: 1, textDecoration: "none" },
                  children: [
                    desktopAction.label,
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16, style: { marginLeft: 8 } })
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
var HeaderAppBar = styled(AppBar, {
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
var HeroSection = styled(Box)({
  position: "relative",
  zIndex: 1,
  paddingTop: 48,
  paddingBottom: 128,
  "@media (max-width:899.95px)": {
    paddingTop: 32,
    paddingBottom: 80
  }
});
var HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  letterSpacing: "-0.03em",
  fontSize: "4.2rem",
  lineHeight: 1.08,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem"
  }
}));
var HeroDescription = styled(Typography)(({ theme }) => ({
  opacity: 0.7,
  marginBottom: theme.spacing(5),
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.6,
  fontSize: "1.05rem"
}));
var HeroActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0),
    justifyContent: "space-between"
  }
}));
var HeroStatsPanel = styled(GlassPanel)(({ theme }) => ({
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
var StatValue = styled(Typography)({
  fontWeight: 800
});
var StatLabel = styled(Typography)({
  opacity: 0.6
});
var HeroImageFrame = styled(Box, {
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
var CoverImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
});
var floatAmbient = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -25px) scale(1.08); }
  100% { transform: translate(-20px, 35px) scale(0.95); }
`;
var AmbientBlob = styled(Box, {
  shouldForwardProp: (p) => p !== "variant" && p !== "isDark"
})(
  ({ isDark, variant }) => {
    const config = {
      pink: {
        top: "5%",
        left: "10%",
        width: "45vw",
        height: "45vw",
        color: isDark ? "rgba(236,72,153,0.16)" : "rgba(236,72,153,0.08)",
        duration: "18s"
      },
      blue: {
        top: "35%",
        right: "5%",
        width: "40vw",
        height: "40vw",
        color: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.07)",
        duration: "22s"
      },
      purple: {
        top: "60%",
        left: "5%",
        width: "45vw",
        height: "45vw",
        color: isDark ? "rgba(139,92,246,0.16)" : "rgba(139,92,246,0.08)",
        duration: "20s"
      },
      amber: {
        top: "75%",
        right: "15%",
        width: "35vw",
        height: "35vw",
        color: isDark ? "rgba(245,158,11,0.14)" : "rgba(245,158,11,0.06)",
        duration: "25s"
      },
      cyan: {
        top: "20%",
        left: "50%",
        width: "35vw",
        height: "35vw",
        color: isDark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.06)",
        duration: "19s"
      }
    }[variant];
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
      top: config.top,
      ..."left" in config ? { left: config.left } : {},
      ..."right" in config ? { right: config.right } : {},
      width: config.width,
      height: config.height,
      background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
      animation: `${floatAmbient} ${config.duration} ease-in-out infinite alternate`,
      "@media (max-width: 600px)": {
        filter: "blur(40px)",
        WebkitFilter: "blur(40px)"
      }
    };
  }
);
var DecorativeBlob = styled(Box, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ isDark }) => ({
  position: "absolute",
  top: "-30%",
  right: "-10%",
  width: "50%",
  height: "160%",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${isDark ? "rgba(233,30,99,0.12)" : "rgba(233,30,99,0.06)"} 0%, transparent 70%)`,
  filter: "blur(60px)",
  willChange: "transform",
  pointerEvents: "none"
}));
var gradient = "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)";
var GradientText = styled$1("span")(() => ({
  background: gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  display: "inline"
}));
var GradientContextTitle = styled$1(Typography)(() => ({
  fontWeight: 800,
  letterSpacing: "-0.4px",
  lineHeight: 1.25,
  fontSize: "1.35rem",
  display: "inline-block",
  paddingBottom: "4px",
  marginBottom: "-4px",
  background: gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text"
}));
function JivicoFontPreload() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
    /* @__PURE__ */ jsx("link", { href: GOOGLE_SANS_FLEX_URL, rel: "stylesheet" })
  ] });
}
var JivicoFontLinks = JivicoFontPreload;
var FreestyleBadge = styled(Chip, {
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
var BannerChip = styled(Chip, {
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
var SupportedTypeChip = styled(Chip, {
  shouldForwardProp: (p) => p !== "isDark"
})(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
    fontWeight: 600,
    fontSize: "0.75rem"
  };
});
var FilterChip = styled(Chip, {
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
var MobileViewAllButton = styled(Button, {
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
  return /* @__PURE__ */ jsx(Box, { sx: { display: { xs: "block", md: "none" }, mt: 3, px: 2 }, children: /* @__PURE__ */ jsx(
    ButtonComp,
    {
      component: href ? "a" : "button",
      href,
      onClick,
      endIcon: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }),
      children: label
    }
  ) });
}
var LiquidGlassCardRoot = styled(Box, {
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
var LiquidSpotlightImageArea = styled(Box, {
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
var GlassWishlistButton = styled(IconButton, {
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
var HolographicBadge = styled(Box, {
  shouldForwardProp: (p) => p !== "tagColor" && p !== "gradient"
})(({ theme, tagColor, gradient: gradient2 }) => ({
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
  background: gradient2 || tagColor || "#EC4899",
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
var GlassCardBody = styled(Box)(({ theme }) => ({
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
var GlassProductTitle = styled(Typography)(({ theme }) => ({
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
var TribeMemberPill = styled(Box, {
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
function InternalMuiWrapper({
  children,
  enableCssBaseline = true
}) {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getAntigravityTheme(mode), [mode]);
  return /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
    enableCssBaseline && /* @__PURE__ */ jsx(CssBaseline, {}),
    children
  ] });
}
function JivicoThemeProvider({
  children,
  defaultMode = "light",
  storageKey = "jivico-theme-mode",
  enableCssBaseline = true
}) {
  return /* @__PURE__ */ jsx(ThemeModeProvider, { defaultMode, storageKey, children: /* @__PURE__ */ jsx(InternalMuiWrapper, { enableCssBaseline, children }) });
}

export { AmbientBlob, BannerChip, COLORS, CoverImage, DecorativeBlob, EdgeFade, FilterChip, FreestyleBadge, GOOGLE_SANS_FLEX_URL, GlassCardBody, GlassControlsGroup, GlassEdgeFade, GlassIconGlow, GlassNavArrowButton, GlassPanel, GlassProductTitle, GlassScrollButton, GlassSectionHeaderRow, GlassSectionSubtitle, GlassSectionTitle, GlassTitleGroup, GlassToolbarRoot, GlassWishlistButton, GradientContextTitle, GradientText, HeaderAppBar, HeroActions, HeroDescription, HeroImageFrame, HeroSection, HeroStatsPanel, HeroTitle, HolographicBadge, JivicoFontLinks, JivicoFontPreload, JivicoThemeProvider, LiquidGlassCard, LiquidGlassCardRoot, LiquidSpotlightImageArea, MobileViewAll, MobileViewAllButton, PageRoot, Section, SectionContainer, SectionHeader, StatLabel, StatValue, SectionHeader as StudioSectionHeader, SupportedTypeChip, ThemeModeProvider, TribeMemberPill, buildPalette, createJivicoTheme, getAntigravityTheme, getAppleTheme, getControlOverrides, getDataDisplayOverrides, getFeedbackOverrides, getHybridTheme, getInputOverrides, getNavigationOverrides, getSurfaceOverrides, typography, useThemeMode };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map