import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";
import { buildPalette } from "./palette.js";
import { typography } from "./typography.js";
import { getInputOverrides } from "./overrides/inputs";
import { getControlOverrides } from "./overrides/controls.js";
import { getDataDisplayOverrides } from "./overrides/dataDisplay";
import { getFeedbackOverrides } from "./overrides/feedback";
import { getSurfaceOverrides } from "./overrides/surfaces";
import { getNavigationOverrides } from "./overrides/navigation";
import "./augmentations.d.ts";
import { getTableRootOverrides } from "./overrides/table/index.js";
import { getMenuRootOverrides } from "./overrides/menu/index.js";

export const GOOGLE_SANS_FLEX_URL =
  "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";

/** Montserrat (subheadings/accent) + Space Grotesk (body fallback) — from brand kit */
export const JIVICO_BRAND_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";

/**
 * Jivico Comprehensive Design System
 *
 * Composes the full MUI theme from modular pieces:
 *  - colors.ts        → raw color constants
 *  - palette.ts       → mode-resolved palette builder
 *  - typography.ts    → font configuration
 *  - overrides/*      → component style overrides by category
 */
const themeCache: Partial<Record<"light" | "dark", Theme>> = {};

function buildTheme(mode: "light" | "dark"): Theme {
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
      glass: palette.glass as any,
      "glass-surface": palette["glass-surface"] as any,
      glassSurface: palette.glassSurface as any,
    },
    typography,
    shape: {
      borderRadius: 20,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            backgroundColor: palette.background.default,
            color: palette.text.primary,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          // Firefox scrollbars
          "@supports not (-webkit-touch-callout: none)": {
            "*": {
              scrollbarWidth: "thin",
              scrollbarColor: isDark
                ? "rgba(255, 255, 255, 0.2) transparent"
                : "rgba(0, 0, 0, 0.2) transparent",
            },
          },
          // Chromium browsers (Chrome, Edge, Brave, Opera) - Preserves native macOS overlay scrollbars in Safari
          "@supports (selector(::-webkit-scrollbar)) and (not (-webkit-hyphens: none))":
            {
              "::-webkit-scrollbar": {
                width: "6px",
                height: "6px",
              },
              "::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.2)",
                borderRadius: "9999px",
                border: "1px solid transparent",
                backgroundClip: "padding-box",
              },
              "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.35)"
                  : "rgba(0, 0, 0, 0.35)",
              },
              "::-webkit-scrollbar-corner": {
                background: "transparent",
              },
            },
        },
      },
      ...getInputOverrides(palette, isDark),
      ...getControlOverrides(palette, isDark),
      ...getDataDisplayOverrides(palette, isDark),
      ...getFeedbackOverrides(palette, isDark),
      ...getSurfaceOverrides(palette, isDark),
      ...getNavigationOverrides(palette, isDark),
      ...getTableRootOverrides(palette, isDark),
      ...getMenuRootOverrides(palette, isDark),
    },
  });

  return responsiveFontSizes(theme);
}

export const JivicoGlassTheme = (mode: "light" | "dark"): Theme => {
  if (!themeCache[mode]) {
    themeCache[mode] = buildTheme(mode);
  }

  return themeCache[mode]!;
};

export const createJivicoTheme = JivicoGlassTheme;

export default JivicoGlassTheme;
