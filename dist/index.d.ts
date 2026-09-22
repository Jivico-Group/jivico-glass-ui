import { Theme, Components } from '@mui/material/styles';
import * as _emotion_styled from '@emotion/styled';
import * as react from 'react';
import react__default from 'react';
import * as _mui_system from '@mui/system';
import * as _mui_material from '@mui/material';
import { BoxProps } from '@mui/material';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';

declare const buildBrandPalette: () => {
    charcoal: string;
    stone: string;
    sand: string;
    cream: string;
};

declare const buildPrimaryPalette: (isDark: boolean) => {
    main: string;
    light: string;
    dark: string;
    hover: string;
    active: string;
    disabled: string;
    glow: string;
    contrastText: string;
};

declare const buildSecondaryPalette: (isDark: boolean) => {
    main: string;
    light: string;
    dark: string;
    hover: string;
    active: string;
    disabled: string;
    glow: string;
    contrastText: string;
};

declare const buildAccentPalette: (isDark: boolean) => {
    main: string;
    light: string;
    dark: string;
    hover: string;
    active: string;
    disabled: string;
    glow: string;
    contrastText: string;
};

declare const buildSemanticPalette: (isDark: boolean) => {
    success: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    warning: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    error: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    info: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
};

declare const buildBackgroundPalette: (isDark: boolean) => {
    default: string;
    paper: string;
};

declare const buildTextPalette: (isDark: boolean) => {
    primary: string;
    secondary: string;
    glassSurface: string;
    "glass-surface": string;
};

declare const buildDividerPalette: (isDark: boolean) => string;

declare const buildGlassPalette: (isDark: boolean) => {
    main: string;
    contrastText: string;
    surface: string;
    light: string;
    dark: string;
    hover: string;
    active: string;
    disabled: string;
    glow: string;
    buttonBorder: string;
    buttonBg: string;
    alertBg: string;
    buttonHoverBg: string;
    buttonTextHover: string;
    fabShadow: string;
    inputBorderHover: string;
    inputFocusBg: string;
    paperBg: string;
    paperBorder: string;
    paperShadow: string;
    control: string;
    switchTrack: string;
    switchShadow: string;
    sliderThumbShadow: string;
    sliderRail: string;
    chipBg: string;
    chipBorder: string;
    avatarBorder: string;
    tableBorder: string;
    tableHeadBg: string;
    tooltipBg: string;
    tooltipBorder: string;
    tooltipShadow: string;
    dialogBg: string;
    dialogShadow: string;
    skeletonBg: string;
    progressBg: string;
    cardBg: string;
    cardShadow: string;
    cardHoverShadow: string;
    elevation1: string;
    appBarBg: string;
    accordionBg: string;
    drawerBg: string;
    menuItemHover: string;
};

declare const buildActionPalette: (isDark: boolean) => {
    hover: string;
    selected: string;
};

declare const buildAlertPalette: (isDark: boolean) => {
    success: string;
    warning: string;
    error: string;
    info: string;
};

declare const buildGradientsPalette: () => {
    primary: string;
    primaryHover: string;
    accent: string;
    accentDark: string;
};

declare const buildAliasesPalette: (isDark: boolean) => {
    "glass-surface": {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    glassSurface: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
};

declare const buildPalette: (mode: "light" | "dark") => {
    "glass-surface": {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    glassSurface: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    background: {
        default: string;
        paper: string;
    };
    text: {
        primary: string;
        secondary: string;
        glassSurface: string;
        "glass-surface": string;
    };
    divider: string;
    glass: {
        main: string;
        contrastText: string;
        surface: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        buttonBorder: string;
        buttonBg: string;
        alertBg: string;
        buttonHoverBg: string;
        buttonTextHover: string;
        fabShadow: string;
        inputBorderHover: string;
        inputFocusBg: string;
        paperBg: string;
        paperBorder: string;
        paperShadow: string;
        control: string;
        switchTrack: string;
        switchShadow: string;
        sliderThumbShadow: string;
        sliderRail: string;
        chipBg: string;
        chipBorder: string;
        avatarBorder: string;
        tableBorder: string;
        tableHeadBg: string;
        tooltipBg: string;
        tooltipBorder: string;
        tooltipShadow: string;
        dialogBg: string;
        dialogShadow: string;
        skeletonBg: string;
        progressBg: string;
        cardBg: string;
        cardShadow: string;
        cardHoverShadow: string;
        elevation1: string;
        appBarBg: string;
        accordionBg: string;
        drawerBg: string;
        menuItemHover: string;
    };
    action: {
        hover: string;
        selected: string;
    };
    alert: {
        success: string;
        warning: string;
        error: string;
        info: string;
    };
    gradients: {
        primary: string;
        primaryHover: string;
        accent: string;
        accentDark: string;
    };
    success: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    warning: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    error: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    info: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    brand: {
        charcoal: string;
        stone: string;
        sand: string;
        cream: string;
    };
    primary: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    accent: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        contrastText: string;
    };
};
type JivicoPalette = ReturnType<typeof buildPalette>;

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
    hoverEffect?: boolean;
    variant?: "elevation" | "outlined" | "tonal";
    glass?: boolean;
  }

  interface CardProps {
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
    hoverEffect?: boolean;
    variant?: "elevation" | "outlined" | "tonal";
    glass?: boolean;
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

declare const BRAND_COLORS: {
    charcoal: string;
    stone: string;
    sand: string;
    cream: string;
};

declare const PRIMARY_COLORS: {
    light: string;
    dark: string;
    hoverLight: string;
    hoverDark: string;
    activeLight: string;
    activeDark: string;
    disabledLight: string;
    disabledDark: string;
    glowLight: string;
    glowDark: string;
    textLight: string;
    textDark: string;
};

declare const SECONDARY_COLORS: {
    light: string;
    dark: string;
    hoverLight: string;
    hoverDark: string;
    activeLight: string;
    activeDark: string;
    disabledLight: string;
    disabledDark: string;
    glowLight: string;
    glowDark: string;
    textLight: string;
    textDark: string;
};

declare const ACCENT_COLORS: {
    light: string;
    dark: string;
    hoverLight: string;
    hoverDark: string;
    activeLight: string;
    activeDark: string;
    disabledLight: string;
    disabledDark: string;
    glowLight: string;
    glowDark: string;
    textLight: string;
    textDark: string;
};

declare const SEMANTIC_COLORS: {
    success: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    warning: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    error: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    info: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
};

declare const BACKGROUND_COLORS: {
    light: string;
    dark: string;
    paperLight: string;
    paperDark: string;
};

declare const TEXT_COLORS: {
    primaryLight: string;
    primaryDark: string;
    secondaryLight: string;
    secondaryDark: string;
};

declare const DIVIDER_COLORS: {
    light: string;
    dark: string;
};

declare const ACTION_COLORS: {
    hoverLight: string;
    hoverDark: string;
    selectedLight: string;
    selectedDark: string;
};

declare const GLASS_COLORS: {
    mainLight: string;
    mainDark: string;
    contrastTextLight: string;
    contrastTextDark: string;
    lightLight: string;
    lightDark: string;
    darkLight: string;
    darkDark: string;
    hoverLight: string;
    hoverDark: string;
    activeLight: string;
    activeDark: string;
    disabledLight: string;
    disabledDark: string;
    glowLight: string;
    glowDark: string;
    alertBgLight: string;
    alertBgDark: string;
    buttonBorderLight: string;
    buttonBorderDark: string;
    buttonBgLight: string;
    buttonBgDark: string;
    buttonHoverBgLight: string;
    buttonHoverBgDark: string;
    buttonTextHoverLight: string;
    buttonTextHoverDark: string;
    fabShadowLight: string;
    fabShadowDark: string;
    inputBorderHoverLight: string;
    inputBorderHoverDark: string;
    inputFocusBgDark: string;
    paperBgLight: string;
    paperBgDark: string;
    paperBorderLight: string;
    paperBorderDark: string;
    paperShadowLight: string;
    paperShadowDark: string;
    controlLight: string;
    controlDark: string;
    switchTrackLight: string;
    switchTrackDark: string;
    switchShadow: string;
    sliderThumbShadow: string;
    sliderRailLight: string;
    sliderRailDark: string;
    chipBgLight: string;
    chipBgDark: string;
    chipBorderLight: string;
    chipBorderDark: string;
    avatarBorderLight: string;
    avatarBorderDark: string;
    tableBorderLight: string;
    tableBorderDark: string;
    tableHeadBgLight: string;
    tableHeadBgDark: string;
    tooltipBgLight: string;
    tooltipBgDark: string;
    tooltipBorderLight: string;
    tooltipBorderDark: string;
    tooltipShadow: string;
    dialogBgLight: string;
    dialogBgDark: string;
    dialogShadowLight: string;
    dialogShadowDark: string;
    skeletonBgLight: string;
    skeletonBgDark: string;
    progressBgLight: string;
    progressBgDark: string;
    cardBgLight: string;
    cardBgDark: string;
    cardShadowLight: string;
    cardShadowDark: string;
    cardHoverShadowLight: string;
    cardHoverShadowDark: string;
    elevation1Light: string;
    elevation1Dark: string;
    appBarBgLight: string;
    appBarBgDark: string;
    accordionBgLight: string;
    accordionBgDark: string;
    drawerBgLight: string;
    drawerBgDark: string;
    menuItemHoverLight: string;
    menuItemHoverDark: string;
};

declare const ALERT_RGB: {
    success: string;
    warningDark: string;
    warningLight: string;
    error: string;
    info: string;
};

declare const GRADIENT_COLORS: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentDark: string;
};

declare const COLORS: {
    background: {
        light: string;
        dark: string;
        paperLight: string;
        paperDark: string;
    };
    text: {
        primaryLight: string;
        primaryDark: string;
        secondaryLight: string;
        secondaryDark: string;
    };
    divider: {
        light: string;
        dark: string;
    };
    action: {
        hoverLight: string;
        hoverDark: string;
        selectedLight: string;
        selectedDark: string;
    };
    white: string;
    black: string;
    glass: {
        mainLight: string;
        mainDark: string;
        contrastTextLight: string;
        contrastTextDark: string;
        lightLight: string;
        lightDark: string;
        darkLight: string;
        darkDark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        alertBgLight: string;
        alertBgDark: string;
        buttonBorderLight: string;
        buttonBorderDark: string;
        buttonBgLight: string;
        buttonBgDark: string;
        buttonHoverBgLight: string;
        buttonHoverBgDark: string;
        buttonTextHoverLight: string;
        buttonTextHoverDark: string;
        fabShadowLight: string;
        fabShadowDark: string;
        inputBorderHoverLight: string;
        inputBorderHoverDark: string;
        inputFocusBgDark: string;
        paperBgLight: string;
        paperBgDark: string;
        paperBorderLight: string;
        paperBorderDark: string;
        paperShadowLight: string;
        paperShadowDark: string;
        controlLight: string;
        controlDark: string;
        switchTrackLight: string;
        switchTrackDark: string;
        switchShadow: string;
        sliderThumbShadow: string;
        sliderRailLight: string;
        sliderRailDark: string;
        chipBgLight: string;
        chipBgDark: string;
        chipBorderLight: string;
        chipBorderDark: string;
        avatarBorderLight: string;
        avatarBorderDark: string;
        tableBorderLight: string;
        tableBorderDark: string;
        tableHeadBgLight: string;
        tableHeadBgDark: string;
        tooltipBgLight: string;
        tooltipBgDark: string;
        tooltipBorderLight: string;
        tooltipBorderDark: string;
        tooltipShadow: string;
        dialogBgLight: string;
        dialogBgDark: string;
        dialogShadowLight: string;
        dialogShadowDark: string;
        skeletonBgLight: string;
        skeletonBgDark: string;
        progressBgLight: string;
        progressBgDark: string;
        cardBgLight: string;
        cardBgDark: string;
        cardShadowLight: string;
        cardShadowDark: string;
        cardHoverShadowLight: string;
        cardHoverShadowDark: string;
        elevation1Light: string;
        elevation1Dark: string;
        appBarBgLight: string;
        appBarBgDark: string;
        accordionBgLight: string;
        accordionBgDark: string;
        drawerBgLight: string;
        drawerBgDark: string;
        menuItemHoverLight: string;
        menuItemHoverDark: string;
    };
    alertRgb: {
        success: string;
        warningDark: string;
        warningLight: string;
        error: string;
        info: string;
    };
    gradients: {
        primary: string;
        primaryHover: string;
        accent: string;
        accentDark: string;
    };
    success: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    warning: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    error: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    info: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    brand: {
        charcoal: string;
        stone: string;
        sand: string;
        cream: string;
    };
    primary: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    secondary: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
    accent: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        activeLight: string;
        activeDark: string;
        disabledLight: string;
        disabledDark: string;
        glowLight: string;
        glowDark: string;
        textLight: string;
        textDark: string;
    };
};

/**
 * Jivico Studio Design System — Typography
 *
 * Font stack per Brand Kit:
 *  - Headlines / Logo: Brush Script style (handled by logo asset)
 *  - Subheadings / Accent: Montserrat · Space Grotesk
 *  - Body / UI: SF Pro Display (macOS/iOS native), Google Sans Flex
 */
declare const typography: {
    fontFamily: string;
    h1: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
        fontFamily: string;
    };
    h2: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
        fontFamily: string;
    };
    h3: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
        fontFamily: string;
    };
    h4: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        fontFamily: string;
    };
    h5: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        fontFamily: string;
    };
    h6: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        fontFamily: string;
    };
    body1: {
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        fontWeight: number;
    };
    body2: {
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    button: {
        textTransform: "none";
        fontWeight: number;
        letterSpacing: string;
        fontSize: string;
        fontFamily: string;
    };
    overline: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
        fontFamily: string;
    };
};
/**
 * Google Fonts URL for Montserrat + Space Grotesk.
 * Import this in your <head> or via a FontPreload component.
 */
declare const JIVICO_FONTS_URL = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";

declare const GOOGLE_SANS_FLEX_URL = "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";
/** Montserrat (subheadings/accent) + Space Grotesk (body fallback) — from brand kit */
declare const JIVICO_BRAND_FONTS_URL = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";
declare const JivicoGlassTheme: (mode: "light" | "dark") => Theme;
declare const createJivicoTheme: (mode: "light" | "dark") => Theme;

declare const getControlOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

declare const getDataDisplayOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

declare const getFeedbackOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

declare const getInputOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

declare const getNavigationOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

declare const getSurfaceOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

interface GlassPanelProps extends BoxProps {
    isDark?: boolean;
}
declare const GlassPanel: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassPanelProps, {}, {}>;

interface GlassBoxProps extends BoxProps {
    /**
     * Explicit dark mode override.
     * If omitted, automatically resolves from MUI theme.palette.mode.
     */
    isDark?: boolean;
    /**
     * Corner border radius in px or CSS string.
     * Default: 20
     */
    radius?: number | string;
}
/**
 * GlassBox — Lightweight MUI Box component styled with the signature frosted glass recipe.
 * Accepts all standard Box props, custom `sx`, arbitrary children, and responds to light/dark themes.
 */
declare const GlassBox: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassBoxProps, {}, {}>;
/**
 * GlassSurface — Lightweight wrapper that sets text color to
 * strict #FFFFFF in Dark Mode and strict #000000 in Light Mode for maximum readability.
 */
declare const GlassSurface: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
type GlassSurfaceProps = BoxProps;
declare const GlassContainer: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassBoxProps, {}, {}>;
type GlassContainerProps = GlassBoxProps;

declare const PageRoot: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;

declare const SectionContainer: _emotion_styled.StyledComponent<_mui_material.ContainerOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "sx" | "maxWidth" | "fixed" | "disableGutters"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    largeBottom?: boolean;
    smallBottom?: boolean;
}, {}, {}>;
declare const Section: _emotion_styled.StyledComponent<_mui_material.ContainerOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "sx" | "maxWidth" | "fixed" | "disableGutters"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    largeBottom?: boolean;
    smallBottom?: boolean;
}, {}, {}>;

interface GlassToolbarRootProps {
    isDark: boolean;
    isScrolled?: boolean;
}
declare const GlassToolbarRoot: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassToolbarRootProps, {}, {}>;
declare const GlassNavArrowButton: _emotion_styled.StyledComponent<_mui_material.IconButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.IconButtonOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | keyof _mui_material.IconButtonOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | "color" | "disableFocusRipple" | "loading" | "loadingIndicator" | "size" | "edge"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;
interface GlassEdgeFadeProps {
    side?: 'left' | 'right';
    direction?: 'left' | 'right';
    isDark: boolean;
    visible?: boolean;
    bottomOffset?: number;
}
declare const GlassEdgeFade: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassEdgeFadeProps, {}, {}>;
declare const EdgeFade: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassEdgeFadeProps, {}, {}>;

declare const GlassSectionHeaderRow: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const GlassTitleGroup: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
interface GlassIconGlowProps {
    gradient?: 'amber' | 'pink' | 'cyan' | 'purple' | 'emerald';
}
declare const GlassIconGlow: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassIconGlowProps, {}, {}>;
declare const GlassSectionTitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const GlassSectionSubtitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;
declare const GlassControlsGroup: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const GlassScrollButton: _emotion_styled.StyledComponent<_mui_material.IconButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.IconButtonOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | keyof _mui_material.IconButtonOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | "color" | "disableFocusRipple" | "loading" | "loadingIndicator" | "size" | "edge"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    icon?: react__default.ReactNode;
    iconGradient?: "pink" | "cyan" | "amber" | "emerald" | "purple";
    desktopAction?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
    controls?: react__default.ReactNode;
}
declare const SectionHeader: react__default.FC<SectionHeaderProps>;

interface HeaderAppBarProps {
    isScrolled: boolean;
}
declare const HeaderAppBar: _emotion_styled.StyledComponent<_mui_material.AppBarOwnProps & Omit<_mui_material.PaperOwnProps, "classes" | "color" | "position" | "elevation" | "square"> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "position" | "elevation" | "square" | "enableColorOnDark"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & HeaderAppBarProps, {}, {}>;

declare const HeroSection: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const HeroTitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const HeroDescription: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const HeroActions: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const HeroStatsPanel: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassPanelProps, {}, {}>;
declare const StatValue: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const StatLabel: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const HeroImageFrame: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;
declare const CoverImage: _emotion_styled.StyledComponent<_mui_system.MUIStyledCommonProps<_mui_material.Theme>, react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;

type BlobVariant = 'primary' | 'secondary' | 'warm' | 'blue' | 'cyan' | 'pink' | 'purple' | 'amber';
/**
 * AmbientBlob — slow-floating background orbs.
 *
 * Variant palette updated to brand monochrome:
 *  - 'primary'  → Charcoal/Cream glow (was pink)
 *  - 'secondary'→ Stone glow (was purple)
 *  - 'warm'     → Sand/Cream warmth (was amber)
 *  - 'blue'     → Info blue (retained for depth contrast)
 *  - 'cyan'     → Subtle teal (retained for light-mode freshness)
 *
 * Legacy variants (pink, purple, amber) are aliased to brand colours
 * so existing consumers don't break.
 */
declare const AmbientBlob: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    variant: BlobVariant;
    isDark: boolean;
}, {}, {}>;
declare const DecorativeBlob: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;

declare const GradientText: _emotion_styled.StyledComponent<_mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const GradientContextTitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, {}, {}>;

/**
 * Preloads all Jivico brand fonts:
 *  - Google Sans Flex (primary UI font)
 *  - Montserrat (brand headings/accent per brand kit)
 *  - Space Grotesk (body fallback)
 *
 * Place inside <head> or at the root of your HTML layout.
 */
declare function JivicoFontPreload(): react__default.JSX.Element;
declare const JivicoFontLinks: typeof JivicoFontPreload;

declare const MobileViewAllButton: _emotion_styled.StyledComponent<_mui_material.ButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.ButtonOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | keyof _mui_material.ButtonOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react__default.DetailedHTMLProps<react__default.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "loading" | "loadingIndicator" | "loadingPosition" | "size" | "startIcon" | "variant"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, {}, {}>;
interface MobileViewAllProps {
    href: string;
    label?: string;
    onClick?: () => void;
}
declare function MobileViewAll({ href, label, onClick }: MobileViewAllProps): react__default.JSX.Element;

interface LiquidGlassCardRootProps {
    isDark?: boolean;
}
declare const LiquidGlassCardRoot: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & LiquidGlassCardRootProps, {}, {}>;
interface LiquidSpotlightImageAreaProps {
    isDark?: boolean;
    spotlight?: 'pink' | 'amber' | 'cyan' | 'purple';
}
declare const LiquidSpotlightImageArea: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & LiquidSpotlightImageAreaProps, {}, {}>;
declare const GlassWishlistButton: _emotion_styled.StyledComponent<_mui_material.IconButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.IconButtonOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | keyof _mui_material.IconButtonOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "type" | "color" | "disableFocusRipple" | "loading" | "loadingIndicator" | "size" | "edge"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
    liked?: boolean;
}, {}, {}>;
declare const HolographicBadge: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    tagColor?: string;
    gradient?: string;
}, {}, {}>;
declare const GlassCardBody: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const GlassProductTitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TribeMemberPill: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
    variant?: "pink" | "amber";
}, {}, {}>;
declare const LiquidGlassCard: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & LiquidGlassCardRootProps, {}, {}>;

type ThemeMode = "light" | "dark" | "system";
type ResolvedThemeMode = "light" | "dark";
interface GlassModeContextType {
    /**
     * User-selected appearance preference.
     *
     * - light  → always light
     * - dark   → always dark
     * - system → follows OS/browser preference
     */
    mode: ThemeMode;
    /**
     * The actual appearance currently being used.
     *
     * Always resolves to either light or dark.
     */
    resolvedMode: ResolvedThemeMode;
    /**
     * Toggles between light and dark.
     *
     * If currently using system, it switches from the
     * currently resolved appearance to the opposite.
     */
    toggleGlassMode: () => void;
    /**
     * Sets the user's appearance preference.
     */
    setGlassMode: (mode: ThemeMode) => void;
}
declare const useGlassMode: () => GlassModeContextType;
interface GlassModeProviderProps {
    children: react__default.ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
}
declare function GlassModeProvider({ children, defaultMode, storageKey, }: GlassModeProviderProps): react__default.JSX.Element;

interface JivicoGlassProviderProps {
    children: react__default.ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
    enableCssBaseline?: boolean;
}
declare function JivicoGlassProvider({ children, defaultMode, storageKey, enableCssBaseline, }: JivicoGlassProviderProps): react__default.JSX.Element;

interface GlassThemeScopeProps {
    /**
     * Forces the theme mode ("light" | "dark") for all enclosed components.
     */
    mode: "light" | "dark";
    children: react__default.ReactNode;
}
/**
 * `<GlassThemeScope>` allows forcing a specific theme mode ("light" or "dark")
 * on any subtree or component (e.g. forcing a table, card, or modal to be Dark Mode).
 */
declare function GlassThemeScope({ mode, children }: GlassThemeScopeProps): react__default.JSX.Element;

export { ACCENT_COLORS, ACTION_COLORS, ALERT_RGB, AmbientBlob, BACKGROUND_COLORS, BRAND_COLORS, COLORS, CoverImage, DIVIDER_COLORS, DecorativeBlob, EdgeFade, GLASS_COLORS, GOOGLE_SANS_FLEX_URL, GRADIENT_COLORS, GlassBox, type GlassBoxProps, GlassCardBody, GlassContainer, type GlassContainerProps, GlassControlsGroup, GlassEdgeFade, type GlassEdgeFadeProps, GlassIconGlow, type GlassIconGlowProps, type GlassModeContextType, GlassModeProvider, type GlassModeProviderProps, GlassNavArrowButton, GlassPanel, type GlassPanelProps, GlassProductTitle, GlassScrollButton, GlassSectionHeaderRow, GlassSectionSubtitle, GlassSectionTitle, GlassSurface, type GlassSurfaceProps, GlassThemeScope, type GlassThemeScopeProps, GlassTitleGroup, GlassToolbarRoot, type GlassToolbarRootProps, GlassWishlistButton, GradientContextTitle, GradientText, HeaderAppBar, type HeaderAppBarProps, HeroActions, HeroDescription, HeroImageFrame, HeroSection, HeroStatsPanel, HeroTitle, HolographicBadge, JIVICO_BRAND_FONTS_URL, JIVICO_FONTS_URL, JivicoFontLinks, JivicoFontPreload, JivicoGlassProvider, type JivicoGlassProviderProps, JivicoGlassTheme, type JivicoPalette, LiquidGlassCard, LiquidGlassCardRoot, type LiquidGlassCardRootProps, LiquidSpotlightImageArea, type LiquidSpotlightImageAreaProps, MobileViewAll, MobileViewAllButton, type MobileViewAllProps, PRIMARY_COLORS, PageRoot, type ResolvedThemeMode, SECONDARY_COLORS, SEMANTIC_COLORS, Section, SectionContainer, SectionHeader, type SectionHeaderProps, StatLabel, StatValue, SectionHeader as StudioSectionHeader, type SectionHeaderProps as StudioSectionHeaderProps, TEXT_COLORS, type ThemeMode, TribeMemberPill, buildAccentPalette, buildActionPalette, buildAlertPalette, buildAliasesPalette, buildBackgroundPalette, buildBrandPalette, buildDividerPalette, buildGlassPalette, buildGradientsPalette, buildPalette, buildPrimaryPalette, buildSecondaryPalette, buildSemanticPalette, buildTextPalette, createJivicoTheme, getControlOverrides, getDataDisplayOverrides, getFeedbackOverrides, getInputOverrides, getNavigationOverrides, getSurfaceOverrides, typography, useGlassMode };
