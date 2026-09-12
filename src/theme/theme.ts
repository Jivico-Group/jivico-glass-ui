import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { buildPalette, JivicoPalette } from './palette.js';
import { typography } from './typography.js';
import { getInputOverrides } from './overrides/inputs.js';
import { getControlOverrides } from './overrides/controls.js';
import { getDataDisplayOverrides } from './overrides/dataDisplay.js';
import { getFeedbackOverrides } from './overrides/feedback.js';
import { getSurfaceOverrides } from './overrides/surfaces.js';
import { getNavigationOverrides } from './overrides/navigation.js';

declare module '@mui/material/styles' {
  interface Palette {
    glass: JivicoPalette['glass'];
    gradients?: JivicoPalette['gradients'];
  }
  interface PaletteOptions {
    glass?: JivicoPalette['glass'];
    gradients?: JivicoPalette['gradients'];
  }
}

export const GOOGLE_SANS_FLEX_URL =
  'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap';

/**
 * Jivico Comprehensive Design System: Apple Precision + Google Antigravity
 *
 * Composes the full MUI theme from modular pieces:
 *  - colors.ts        → raw color constants
 *  - palette.ts       → mode-resolved palette builder
 *  - typography.ts    → font configuration
 *  - overrides/*      → component style overrides by category
 */
const themeCache: Partial<Record<'light' | 'dark', Theme>> = {};

function buildTheme(mode: 'light' | 'dark'): Theme {
  const isDark = mode === 'dark';
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
    },
    typography,
    shape: {
      borderRadius: 18,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @import url('${GOOGLE_SANS_FLEX_URL}');
          body {
            scroll-behavior: smooth;
            background-color: ${palette.background.default};
            color: ${palette.text.primary};
            transition: background-color 0.2s ease, color 0.2s ease;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `,
      },
      ...getInputOverrides(palette, isDark),
      ...getControlOverrides(palette, isDark),
      ...getDataDisplayOverrides(palette, isDark),
      ...getFeedbackOverrides(palette, isDark),
      ...getSurfaceOverrides(palette, isDark),
      ...getNavigationOverrides(palette, isDark),
    },
  });

  return responsiveFontSizes(theme);
}

export const getHybridTheme = (mode: 'light' | 'dark'): Theme => {
  if (!themeCache[mode]) {
    themeCache[mode] = buildTheme(mode);
  }
  return themeCache[mode]!;
};

export const getAppleTheme = getHybridTheme;
export const getAntigravityTheme = getHybridTheme;
export const createJivicoTheme = getHybridTheme;
export default getHybridTheme('light');
