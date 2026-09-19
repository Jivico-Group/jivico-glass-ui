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

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    glass: true;
  }
  interface ChipPropsVariantOverrides {
    tonal: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Tabs' {
  interface TabsPropsIndicatorColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/FormLabel' {
  interface FormLabelPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    glass: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    glass: true;
  }
}

declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    glass: true;
  }
}

export const GOOGLE_SANS_FLEX_URL =
  'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap';

/** Montserrat (subheadings/accent) + Space Grotesk (body fallback) — from brand kit */
export const JIVICO_BRAND_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap';

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
      borderRadius: 20,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            backgroundColor: palette.background.default,
            color: palette.text.primary,
            transition: 'background-color 0.2s ease, color 0.2s ease',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          },
          // Firefox scrollbars
          '@supports not (-webkit-touch-callout: none)': {
            '*': {
              scrollbarWidth: 'thin',
              scrollbarColor: isDark
                ? 'rgba(255, 255, 255, 0.2) transparent'
                : 'rgba(0, 0, 0, 0.2) transparent',
            },
          },
          // Chromium browsers (Chrome, Edge, Brave, Opera) - Preserves native macOS overlay scrollbars in Safari
          '@supports (selector(::-webkit-scrollbar)) and (not (-webkit-hyphens: none))': {
            '::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: isDark
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
              borderRadius: '9999px',
              border: '1px solid transparent',
              backgroundClip: 'padding-box',
            },
            '::-webkit-scrollbar-thumb:hover': {
              backgroundColor: isDark
                ? 'rgba(255, 255, 255, 0.35)'
                : 'rgba(0, 0, 0, 0.35)',
            },
            '::-webkit-scrollbar-corner': {
              background: 'transparent',
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
