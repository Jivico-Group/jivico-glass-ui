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

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Select" {
  interface SelectPropsColorOverrides {
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
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * SURFACES & FEEDBACK (CARD, DIALOG, DRAWER, TOOLTIP, ALERT, PROGRESS)
 * ============================================================
 */

declare module "@mui/material/Card" {
  interface CardOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Dialog" {
  interface DialogOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Drawer" {
  interface DrawerOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Tooltip" {
  interface TooltipOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface AlertOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }

  interface LinearProgressOwnProps {
    glass?: boolean;
  }
}

declare module "@mui/material/Skeleton" {
  interface SkeletonOwnProps {
    glass?: boolean;
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
    placement?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "inline";
  }

  interface TabsPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Tab" {
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
