import type { JivicoPalette } from "./palette/index.js";

/**
 * ============================================================
 * GLOBAL MUI THEME & PALETTE AUGMENTATIONS
 * ============================================================
 * Component-specific prop augmentations are co-located in their
 * corresponding files under src/theme/overrides/.
 */

declare module "@mui/material/styles" {
  interface Palette {
    accent: JivicoPalette["accent"];
    glass: JivicoPalette["glass"];

    "glass-surface"?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };

    glassSurface?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };

    gradients?: JivicoPalette["gradients"];
  }

  interface PaletteOptions {
    accent?: JivicoPalette["accent"];
    glass?: JivicoPalette["glass"];

    "glass-surface"?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };

    glassSurface?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };

    gradients?: JivicoPalette["gradients"];
  }

  interface TypeText {
    glassSurface?: string;
    "glass-surface"?: string;
  }
}

/**
 * ============================================================
 * BOX
 * ============================================================
 */

declare module "@mui/material/Box" {
  interface BoxPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;

    primary: true;
    secondary: true;
    success: true;
    error: true;
    info: true;
    warning: true;
  }
}
