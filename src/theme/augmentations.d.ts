import type { JivicoPalette } from "./palette.js";

type JivicoColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info";

/**
 * ============================================================
 * MUI THEME / PALETTE AUGMENTATIONS
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
 * BUTTON
 * ============================================================
 */

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Button/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * BUTTON GROUP
 * ============================================================
 */

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/ButtonGroup/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * ICON BUTTON
 * ============================================================
 */

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/IconButton/IconButton" {
  interface IconButtonPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * CHIP
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
}

declare module "@mui/material/Chip/Chip" {
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
}

/**
 * ============================================================
 * TABS
 * ============================================================
 *
 * Jivico Tabs support:
 *
 * Native MUI:
 *
 *   textColor="primary"
 *   textColor="secondary"
 *   textColor="inherit"
 *
 *   indicatorColor="primary"
 *   indicatorColor="secondary"
 *
 * Jivico:
 *
 *   textColorOverride="accent"
 *   textColorOverride="glass"
 *   textColorOverride="info"
 *   textColorOverride="success"
 *   textColorOverride="warning"
 *   textColorOverride="error"
 *
 *   indicatorColorOverride="accent"
 *   indicatorColorOverride="glass"
 *   indicatorColorOverride="info"
 *   indicatorColorOverride="success"
 *   indicatorColorOverride="warning"
 *   indicatorColorOverride="error"
 *
 * size:
 *
 *   small
 *   medium
 *
 * IMPORTANT:
 *
 * MUI v9 can resolve Tabs through both:
 *
 *   @mui/material/Tabs
 *   @mui/material/Tabs/Tabs
 *
 * Therefore both modules are augmented.
 * ============================================================
 */

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    /**
     * Jivico Tabs size.
     */
    size?: "small" | "medium";

    /**
     * Jivico custom text color.
     *
     * This does NOT replace MUI's native textColor.
     */
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

    /**
     * Jivico custom indicator color.
     *
     * This does NOT replace MUI's native indicatorColor.
     */
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
}

declare module "@mui/material/Tabs/Tabs" {
  interface TabsOwnProps {
    /**
     * Jivico Tabs size.
     */
    size?: "small" | "medium";

    /**
     * Jivico custom text color.
     *
     * This does NOT replace MUI's native textColor.
     */
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

    /**
     * Jivico custom indicator color.
     *
     * This does NOT replace MUI's native indicatorColor.
     */
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
}

/**
 * ============================================================
 * TAB
 * ============================================================
 */

declare module "@mui/material/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}

declare module "@mui/material/Tab/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}

/**
 * ============================================================
 * STEPPER
 * ============================================================
 */

declare module "@mui/material/Stepper" {
  interface StepperOwnProps {
    color?: JivicoColor;
  }
}

declare module "@mui/material/Stepper/Stepper" {
  interface StepperOwnProps {
    color?: JivicoColor;
  }
}

/**
 * ============================================================
 * TEXT FIELD
 * ============================================================
 */

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/TextField/TextField" {
  interface TextFieldPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * SELECT
 * ============================================================
 */

declare module "@mui/material/Select" {
  interface SelectPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Select/Select" {
  interface SelectPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * OUTLINED INPUT
 * ============================================================
 */

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/OutlinedInput/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * INPUT BASE
 * ============================================================
 */

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/InputBase/InputBase" {
  interface InputBasePropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * FORM CONTROL
 * ============================================================
 */

declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormControl/FormControl" {
  interface FormControlPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * FORM LABEL
 * ============================================================
 */

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormLabel/FormLabel" {
  interface FormLabelPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

/**
 * ============================================================
 * SWITCH
 * ============================================================
 */

declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Switch/Switch" {
  interface SwitchPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

/**
 * ============================================================
 * CHECKBOX
 * ============================================================
 */

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Checkbox/Checkbox" {
  interface CheckboxPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

/**
 * ============================================================
 * RADIO
 * ============================================================
 */

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Radio/Radio" {
  interface RadioPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

/**
 * ============================================================
 * SLIDER
 * ============================================================
 */

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    accent: true;
    glass: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

declare module "@mui/material/Slider/Slider" {
  interface SliderPropsColorOverrides {
    accent: true;
    glass: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

/**
 * ============================================================
 * BADGE
 * ============================================================
 */

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Badge/Badge" {
  interface BadgePropsColorOverrides {
    accent: true;
    glass: true;
  }
}

/**
 * ============================================================
 * AVATAR
 * ============================================================
 */

declare module "@mui/material/Avatar" {
  interface AvatarPropsVariantOverrides {
    glass: true;
  }
}

declare module "@mui/material/Avatar/Avatar" {
  interface AvatarPropsVariantOverrides {
    glass: true;
  }
}

/**
 * ============================================================
 * TYPOGRAPHY
 * ============================================================
 */

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
    gradient: true;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
    gradient: true;
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
