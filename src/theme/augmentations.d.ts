import type { JivicoPalette } from "./palette/index.js";

/**
 * ============================================================
 * GLOBAL MUI THEME & PALETTE AUGMENTATIONS
 * ============================================================
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
 * BUTTONS & INPUT CONTROLS
 * ============================================================
 */

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * DATA DISPLAY (CHIP, BADGE, AVATAR, TYPOGRAPHY)
 * ============================================================
 */

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface ChipPropsVariantOverrides {
    tonal: true;
  }

  interface ChipPropsSizeOverrides {
    large: true;
  }

  interface ChipOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Avatar" {
  interface AvatarPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface AvatarPropsVariantOverrides {
    glass: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
    gradient: true;
  }
}

/**
 * ============================================================
 * SURFACES & FEEDBACK (CARD, DIALOG, DRAWER, TOOLTIP, ALERT, PROGRESS)
 * ============================================================
 */

declare module "@mui/material/Card" {
  interface CardOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "glass";
    radius?: "none" | "small" | "medium" | "large" | "full";
    hover?: boolean;
    variant?: "elevation" | "outlined" | "tonal";
    glass?: boolean;
  }

  interface CardPropsColorOverrides {
    accent: true;
    info: true;
    success: true;
    warning: true;
    error: true;
    glass: true;
  }

  interface CardPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/material/Dialog" {
  interface DialogOwnProps {
    glass?: boolean;
    color?: "primary" | "secondary" | "accent" | "glass";
    variant?: "glass" | "solid" | "tonal" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    elevation?: "none" | "low" | "medium" | "high" | "floating";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    border?: "none" | "subtle" | "strong";
  }

  interface DialogProps {
    glass?: boolean;
  }

  interface DialogPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    glass: true;
  }

  interface DialogPropsVariantOverrides {
    glass: true;
    solid: true;
    tonal: true;
    outlined: true;
  }
}

declare module "@mui/material/Drawer" {
  interface DrawerProps {
    glass?: boolean;
  }

  interface DrawerOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Tooltip" {
  interface TooltipProps {
    glass?: boolean;
  }

  interface TooltipOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface AlertProps {
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    glow?: boolean;
  }

  interface AlertOwnProps {
    glass?: boolean;
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    glow?: boolean;
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface LinearProgressProps {
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    size?: "thin" | "small" | "medium" | "large";
    glow?: boolean;
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
  }

  interface LinearProgressOwnProps {
    glass?: boolean;
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    size?: "thin" | "small" | "medium" | "large";
    glow?: boolean;
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
  }
}

declare module "@mui/material/Skeleton" {
  interface SkeletonPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    success: true;
    info: true;
    warning: true;
    error: true;
    glass: true;
  }

  interface SkeletonOwnProps {
    glass?: boolean;
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    glow?: boolean;
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "info"
      | "warning"
      | "error"
      | "glass";
  }
}

/**
 * ============================================================
 * NAVIGATION (BOTTOM NAVIGATION, TABS, STEPPER, BOX)
 * ============================================================
 */

declare module "@mui/material/BottomNavigation" {
  interface BottomNavigationOwnProps {
    glass?: boolean;
    size?: "small" | "medium";
    placement?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "inline";
  }
}

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    glass?: boolean;
    size?: "small" | "medium";
    placement?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "inline";
    textColorOverride?:
      | "primary"
      | "secondary"
      | "inherit"
      | "accent"
      | "glass"
      | "info"
      | "success"
      | "warning"
      | "error";
    indicatorColorOverride?:
      | "primary"
      | "secondary"
      | "accent"
      | "glass"
      | "info"
      | "success"
      | "warning"
      | "error";
  }

  interface TabsPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }

  interface TabPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Stepper" {
  interface StepperPropsColorOverrides {
    accent: true;
    primary: true;
    secondary: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }

  interface StepperOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error"
      | "info";
  }
}

declare module "@mui/material/Step" {
  interface StepPropsColorOverrides {
    accent: true;
    primary: true;
    secondary: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

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

/**
 * ============================================================
 * LIST & LIST ITEM CONTROLS
 * ============================================================
 */

declare module "@mui/material/List" {
  interface ListOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error";
    variant?: "standard" | "glass";
    size?: "small" | "medium" | "large";
  }
}

declare module "@mui/material/ListItemButton" {
  interface ListItemButtonOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error";
    size?: "small" | "medium" | "large";
  }
}

/**
 * ============================================================
 * TABLE CONTROLS
 * ============================================================
 */

declare module "@mui/material/Table" {
  interface TableOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error";
    variant?: "standard" | "glass";
  }
}

/**
 * ============================================================
 * MENU CONTROLS
 * ============================================================
 */

declare module "@mui/material/Menu" {
  interface MenuOwnProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error";
    surface?: "standard" | "glass";
    variant?: "standard" | "glass";
    size?: "small" | "medium";
  }

  interface MenuProps {
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error";
    surface?: "standard" | "glass";
    variant?: "standard" | "glass";
    size?: "small" | "medium";
  }
}
