import { Theme, Components, SxProps } from '@mui/material/styles';
import * as _emotion_styled from '@emotion/styled';
import * as react from 'react';
import react__default, { ReactNode, ComponentType, CSSProperties, MouseEvent, Key, HTMLAttributeAnchorTarget, ElementType, Ref } from 'react';
import * as _mui_system from '@mui/system';
import * as _mui_material from '@mui/material';
import { BoxProps, SxProps as SxProps$1 } from '@mui/material';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import { ButtonProps } from '@mui/material/Button';
import { BottomNavigationProps } from '@mui/material/BottomNavigation';

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
    glass?: "true" | "false";
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

type ShowcaseTransition = "cinematic" | "fade" | "slide";
type ShowcaseNavigation = "vertical" | "dots" | "none";
type ShowcaseSize = "small" | "medium" | "large" | "hero";
type ShowcaseVariant = "editorial" | "minimal" | "glass";
type ShowcaseRadius = "square" | "rounded" | "soft";
type ShowcaseButtonColor = "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "info" | "glass";
type ShowcaseDimension = number | string | {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
};
interface ShowcaseImageComponentProps {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
    style?: CSSProperties;
    className?: string;
}
type ShowcaseImageComponent = ComponentType<ShowcaseImageComponentProps>;
interface ShowcaseMedia {
    src: string;
    alt: string;
    mobileSrc?: string;
}
interface ShowcaseAction {
    label: string;
    href?: string;
    onClick?: (event?: React.MouseEvent) => void;
    color?: ShowcaseButtonColor;
    variant?: ButtonProps["variant"];
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    ariaLabel?: string;
}
interface ShowcaseItem {
    /**
     * Stable identifier for the showcase item.
     */
    id: string;
    /**
     * Main showcase media.
     */
    media: ShowcaseMedia;
    /**
     * Optional destination for the complete media/image area.
     *
     * This should normally come directly from your API.
     *
     * Showcase renders this as a semantic <a href="...">.
     */
    href?: string;
    /**
     * Accessible label for the full media link.
     */
    linkLabel?: string;
    eyebrow?: string;
    title: string;
    description?: string;
    action?: ShowcaseAction;
    content?: ReactNode;
    sideLabel?: string;
}
interface ShowcaseProps {
    /**
     * Showcase items.
     *
     * These should remain plain API/data objects.
     */
    items: ShowcaseItem[];
    /**
     * Image renderer.
     *
     * Useful for injecting Next/Image or another image implementation.
     */
    ImageComponent?: ShowcaseImageComponent;
    imageSizes?: string;
    imagePriority?: boolean;
    /**
     * Handles navigation for the complete media/image area.
     *
     * Showcase renders a semantic <a href="..."> but prevents
     * native browser navigation and delegates the actual routing
     * to the consuming application.
     *
     * Example with Next.js:
     *
     * const router = useRouter();
     *
     * <Showcase
     *   items={items}
     *   onNavigate={(item) => {
     *     router.push(item.href);
     *   }}
     * />
     */
    onNavigate?: (item: ShowcaseItem, index: number, event: MouseEvent<HTMLAnchorElement>) => void;
    variant?: ShowcaseVariant;
    size?: ShowcaseSize;
    transition?: ShowcaseTransition;
    autoplay?: boolean;
    interval?: number;
    loop?: boolean;
    pauseOnHover?: boolean;
    showArrows?: boolean;
    showProgress?: boolean;
    navigation?: ShowcaseNavigation;
    /**
     * Controlled active index.
     */
    activeIndex?: number;
    /**
     * Initial active index for uncontrolled mode.
     */
    defaultActiveIndex?: number;
    onActiveIndexChange?: (index: number, item: ShowcaseItem) => void;
    swipe?: boolean;
    radius?: ShowcaseRadius;
    height?: ShowcaseDimension;
    minHeight?: ShowcaseDimension;
    maxHeight?: ShowcaseDimension;
    aspectRatio?: string | {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    containerSx?: SxProps<Theme>;
    className?: string;
    "aria-label"?: string;
}

declare const Showcase: ({ items, ImageComponent, imageSizes, imagePriority, variant, size, transition, autoplay, interval, loop, pauseOnHover, showArrows, showProgress, navigation, activeIndex: controlledActiveIndex, defaultActiveIndex, onActiveIndexChange, onNavigate, swipe, radius, height, minHeight, maxHeight, aspectRatio, containerSx, className, "aria-label": ariaLabel, }: ShowcaseProps) => react__default.JSX.Element | null;

/**
 * Number of visible items at each breakpoint.
 */
type RailColumns = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
/**
 * Explicit item width at each breakpoint.
 *
 * When provided, itemWidth takes precedence
 * over columns.
 */
type RailItemWidth = {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
};
/**
 * Cursor applied to the rail root.
 */
type RailCursor = "default" | "pointer" | "grab" | "auto";
/**
 * Navigation controls displayed by the rail.
 */
type RailNavigation = "arrows" | "dots" | "both" | "none";
/**
 * Hover / interaction transition applied
 * to rail items.
 *
 * - none: no visual interaction
 * - fade: overlay fades in
 * - scale: image gently scales
 * - lift: item lifts and image scales
 */
type RailTransition = "none" | "fade" | "scale" | "lift";
/**
 * Props supplied to a custom image component.
 *
 * This intentionally exposes only the image
 * capabilities that Rails controls.
 *
 * This makes Rails compatible with:
 *
 * - Next.js Image
 * - lazy image components
 * - custom image components
 * - other React image implementations
 *
 * Rails internally manages the dimensions
 * through `fill` and the image container.
 */
interface RailImageProps {
    /**
     * Image source.
     */
    src: string;
    /**
     * Alternative text.
     */
    alt: string;
    /**
     * Fill the parent image container.
     *
     * Rails sets this internally.
     */
    fill?: boolean;
    /**
     * Responsive image sizes.
     */
    sizes?: string;
    /**
     * Whether the image should be prioritized.
     */
    priority?: boolean;
    /**
     * Optional loading behavior.
     */
    loading?: "lazy" | "eager";
    /**
     * Inline image styles.
     */
    style?: CSSProperties;
    /**
     * Optional class name.
     */
    className?: string;
}
/**
 * Image component accepted by Rails.
 *
 * Example:
 *
 * import Image from "next/image";
 *
 * <Rails
 *   ImageComponent={Image}
 * />
 */
type RailImageComponent = ComponentType<RailImageProps>;
/**
 * Context supplied when rendering
 * rail content.
 */
interface RailRenderContext<T> {
    /**
     * Current item.
     */
    item: T;
    /**
     * Current item index.
     */
    index: number;
}
/**
 * Context supplied to a custom image renderer.
 */
interface RailImageContext<T> extends RailRenderContext<T> {
    /**
     * Resolved image source.
     */
    src: string;
}
/**
 * Context supplied to custom navigation buttons.
 */
interface RailNavigationContext {
    /**
     * Navigation action.
     */
    onClick: () => void;
    /**
     * Whether the navigation action
     * is currently unavailable.
     */
    disabled: boolean;
}
/**
 * Generic horizontal content rail.
 *
 * Rails does not know what T represents.
 *
 * It can therefore be used for:
 *
 * - products
 * - categories
 * - collections
 * - brands
 * - editorial cards
 * - campaigns
 * - lookbooks
 * - articles
 * - highlights
 * - any custom data structure
 */
interface RailProps<T> {
    /**
     * Data consumed by the rail.
     *
     * The rail does not know what T represents.
     */
    items: T[];
    /**
     * Unique key for each item.
     */
    getKey: (item: T, index: number) => Key;
    /**
     * Image resolver used by the built-in renderer.
     *
     * Required when using the built-in item renderer.
     */
    getImage: (item: T, index: number) => string;
    /**
     * Optional title resolver for the built-in renderer.
     *
     * Example:
     *
     * getTitle={(product) => product.name}
     */
    getTitle?: (item: T, index: number) => ReactNode;
    /**
     * Optional navigation URL resolver.
     *
     * Return undefined when the item should
     * not be clickable.
     *
     * The resolved URL is rendered as the
     * semantic href of the item's anchor.
     *
     * Rails does not perform native navigation.
     *
     * Example:
     *
     * getHref={(product) =>
     *   `/products/${product.slug}`
     * }
     */
    getHref?: (item: T, index: number) => string | undefined;
    /**
     * Handles item navigation.
     *
     * Rails renders a semantic <a href="...">
     * when getHref returns a destination, but
     * prevents the anchor's native navigation.
     *
     * The consuming application owns routing.
     *
     * This keeps Rails framework-agnostic and
     * allows integration with:
     *
     * - Next.js router
     * - React Router
     * - TanStack Router
     * - custom routing
     * - any application-level navigation system
     *
     * Example:
     *
     * onNavigate={(item, index) => {
     *   router.push(`/products/${item.slug}`);
     * }}
     */
    onNavigate?: (item: T, index: number, event: MouseEvent<HTMLAnchorElement>) => void;
    /**
     * Custom image component.
     *
     * Rails manages the image props internally.
     *
     * Example:
     *
     * import Image from "next/image";
     *
     * <Rails
     *   ImageComponent={Image}
     * />
     *
     * This is the recommended way to integrate
     * framework-specific image implementations.
     */
    ImageComponent?: RailImageComponent;
    /**
     * Custom content rendered below
     * the image/title area.
     *
     * Useful for:
     *
     * - price
     * - rating
     * - sale price
     * - badges
     * - metadata
     * - product information
     */
    renderContent?: (context: RailRenderContext<T>) => ReactNode;
    /**
     * Completely replace the default item UI.
     *
     * Use this when the entire card needs
     * to be customized.
     *
     * When renderItem is supplied, the built-in
     * navigation behavior is not applied
     * automatically. The custom renderer owns
     * its own navigation.
     */
    renderItem?: (context: RailRenderContext<T>) => ReactNode;
    /**
     * Advanced custom image renderer.
     *
     * This takes precedence over ImageComponent.
     *
     * Use this when the image requires completely
     * custom rendering logic.
     */
    renderImage?: (context: RailImageContext<T>) => ReactNode;
    /**
     * Number of visible items at each breakpoint.
     *
     * Example:
     *
     * xs: 2
     * sm: 3
     * md: 4
     * lg: 5
     */
    columns?: RailColumns;
    /**
     * Alternative to columns.
     *
     * Useful for editorial layouts where
     * the next item should partially remain visible.
     *
     * When supplied, itemWidth takes precedence
     * over columns.
     */
    itemWidth?: RailItemWidth;
    /**
     * Spacing between items.
     *
     * Uses the same unit as the CSS gap value.
     *
     * Example:
     *
     * gap={16}
     */
    gap?: number;
    /**
     * Horizontal alignment when there is not
     * enough content to fill the rail.
     */
    justifyContent?: "flex-start" | "center" | "flex-end";
    /**
     * Navigation controls.
     *
     * Defaults to "arrows".
     */
    navigation?: RailNavigation;
    /**
     * Custom previous button.
     */
    renderPreviousButton?: (context: RailNavigationContext) => ReactNode;
    /**
     * Custom next button.
     */
    renderNextButton?: (context: RailNavigationContext) => ReactNode;
    /**
     * Enable horizontal touch scrolling.
     *
     * Defaults to true.
     */
    swipe?: boolean;
    /**
     * Automatically advance the rail.
     *
     * Defaults to false.
     */
    autoplay?: boolean;
    /**
     * Time between automatic movements
     * in milliseconds.
     *
     * Defaults to 5000.
     */
    interval?: number;
    /**
     * Pause autoplay while the pointer
     * is over the rail.
     *
     * Defaults to true.
     */
    pauseOnHover?: boolean;
    /**
     * Whether navigation wraps around
     * when reaching the beginning/end.
     *
     * Also controls the end behavior
     * of autoplay.
     *
     * Defaults to false.
     */
    loop?: boolean;
    /**
     * Number of items moved per navigation action.
     *
     * Defaults to one item.
     */
    step?: number;
    /**
     * Snap items into position after movement.
     *
     * Defaults to true.
     */
    snap?: boolean;
    /**
     * Hover / interaction transition.
     *
     * This does not control horizontal scrolling.
     */
    transition?: RailTransition;
    /**
     * Aspect ratio for the built-in image renderer.
     *
     * Examples:
     *
     * "1 / 1"
     * "4 / 5"
     * "3 / 4"
     * "16 / 9"
     */
    imageAspectRatio?: string;
    /**
     * Border radius for the built-in image renderer.
     */
    radius?: number | string;
    /**
     * Optional custom item container styles.
     */
    itemSx?: SxProps<Theme>;
    /**
     * Root styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Root class name.
     */
    className?: string;
    /**
     * Accessibility label.
     */
    "aria-label"?: string;
    /**
     * Cursor applied to the rail.
     */
    cursor?: RailCursor;
}

declare function Rails<T>({ items, getKey, getImage, getTitle, getHref, renderContent, renderImage, renderItem, ImageComponent, columns, itemWidth, gap, justifyContent, navigation, renderPreviousButton, renderNextButton, swipe, autoplay, interval, pauseOnHover, loop, step, snap, transition, imageAspectRatio, radius, itemSx, sx, className, cursor, onNavigate, "aria-label": ariaLabel, }: RailProps<T>): react.JSX.Element | null;

/**
 * Visual layout variant.
 */
type SpotlightVariant = "overlay" | "split" | "minimal";
/**
 * General visual size.
 */
type SpotlightSize = "small" | "medium" | "large";
/**
 * Image cropping position.
 *
 * Supports both named positions and
 * arbitrary CSS object-position values.
 */
type SpotlightImagePosition = "top" | "center" | "bottom" | "left" | "right" | string;
/**
 * Responsive dimension.
 */
type SpotlightDimension = number | string | {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
};
/**
 * Spotlight CTA.
 */
interface SpotlightAction {
    /**
     * Button label.
     */
    label: string;
    /**
     * Optional navigation URL.
     *
     * This remains plain data and does not
     * contain a React routing component.
     */
    href?: string;
    /**
     * Optional click handler.
     *
     * Used for actions that do not navigate.
     */
    onClick?: (event?: React.MouseEvent) => void;
    /**
     * Optional target.
     */
    target?: HTMLAttributeAnchorTarget;
    /**
     * Optional rel attribute.
     */
    rel?: string;
    /**
     * Accessible label.
     */
    ariaLabel?: string;
}
/**
 * Props passed internally to a custom image component.
 *
 * Spotlight manages the image dimensions through
 * `fill` and the surrounding container.
 */
interface SpotlightImageProps {
    /**
     * Image source.
     */
    src: string;
    /**
     * Accessible image description.
     */
    alt: string;
    /**
     * Fill the Spotlight image container.
     *
     * Spotlight manages this internally.
     */
    fill?: boolean;
    /**
     * Responsive image sizes.
     */
    sizes?: string;
    /**
     * Whether the image should be prioritized.
     */
    priority?: boolean;
    /**
     * Optional loading strategy.
     */
    loading?: "lazy" | "eager";
    /**
     * Image styles.
     */
    style?: CSSProperties;
    /**
     * Optional class name.
     */
    className?: string;
}
/**
 * Custom image component.
 *
 * Compatible with:
 *
 * - Next.js Image
 * - lazy image libraries
 * - custom React image components
 */
type SpotlightImageComponent = ComponentType<SpotlightImageProps>;
/**
 * Advanced image renderer context.
 */
interface SpotlightImageContext {
    /**
     * Main image source.
     */
    src: string;
    /**
     * Optional mobile image source.
     */
    mobileImage?: string;
    /**
     * Image alt text.
     */
    alt: string;
    /**
     * Image cropping position.
     */
    imagePosition: SpotlightImagePosition;
}
/**
 * Spotlight component props.
 */
interface SpotlightProps {
    /**
     * Main desktop image.
     */
    image: string;
    /**
     * Optional mobile-specific image.
     */
    mobileImage?: string;
    /**
     * Accessible image description.
     */
    alt?: string;
    /**
     * Custom image component.
     *
     * Example:
     *
     * import Image from "next/image";
     *
     * <Spotlight
     *   ImageComponent={Image}
     * />
     */
    ImageComponent?: SpotlightImageComponent;
    /**
     * Advanced custom image renderer.
     *
     * This takes precedence over ImageComponent.
     */
    renderImage?: (context: SpotlightImageContext) => ReactNode;
    /**
     * Optional destination for the complete Spotlight.
     *
     * Spotlight renders this as a semantic
     * <a href="..."> when provided.
     *
     * Native browser navigation is prevented.
     * Use `onNavigate` for actual routing.
     */
    href?: string;
    /**
     * Accessible label for the complete Spotlight link.
     */
    linkLabel?: string;
    /**
     * Handles navigation for the complete Spotlight.
     *
     * Spotlight renders a semantic <a href="...">,
     * prevents native navigation, and delegates
     * actual routing to the consuming application.
     *
     * Example with Next.js:
     *
     * const router = useRouter();
     *
     * <Spotlight
     *   href="/collections/originals"
     *   onNavigate={() => {
     *     router.push("/collections/originals");
     *   }}
     * />
     */
    onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
    /**
     * Small text above the title.
     */
    eyebrow?: ReactNode;
    /**
     * Main spotlight title.
     */
    title?: ReactNode;
    /**
     * Supporting description.
     */
    description?: ReactNode;
    /**
     * Optional CTA.
     */
    action?: SpotlightAction;
    /**
     * Visual layout.
     *
     * overlay:
     * Content appears over the image.
     *
     * split:
     * Image and content appear side by side.
     *
     * minimal:
     * Image followed by content underneath.
     */
    variant?: SpotlightVariant;
    /**
     * Controls the general visual size.
     */
    size?: SpotlightSize;
    /**
     * Controls the proportional aspect ratio.
     *
     * Examples:
     *
     * "16 / 7"
     * "21 / 9"
     * "4 / 3"
     */
    aspectRatio?: string;
    /**
     * Explicit height.
     *
     * Supports:
     *
     * 100
     * "100px"
     * "60vh"
     * responsive values
     */
    height?: SpotlightDimension;
    /**
     * Minimum height.
     */
    minHeight?: SpotlightDimension;
    /**
     * Maximum height.
     */
    maxHeight?: SpotlightDimension;
    /**
     * Controls image cropping position.
     *
     * Examples:
     *
     * "center"
     * "top"
     * "50% 30%"
     */
    imagePosition?: SpotlightImagePosition;
    /**
     * Responsive image sizes passed to
     * the custom ImageComponent.
     */
    imageSizes?: string;
    /**
     * Whether the main image should be prioritized.
     */
    imagePriority?: boolean;
    /**
     * Border radius.
     *
     * Number values use the theme spacing system.
     * Strings are passed directly to CSS.
     */
    radius?: number | string;
    /**
     * Optional custom content rendered
     * after the action.
     */
    children?: ReactNode;
    /**
     * MUI sx overrides.
     */
    sx?: SxProps<Theme>;
    /**
     * Additional CSS class.
     */
    className?: string;
    /**
     * Accessible label for the Spotlight.
     */
    "aria-label"?: string;
}

declare function Spotlight({ image, mobileImage, alt, ImageComponent, renderImage, href, linkLabel, onNavigate, eyebrow, title, description, action, variant, size, aspectRatio, height, minHeight, maxHeight, imagePosition, imageSizes, imagePriority, radius, children, sx, className, "aria-label": ariaLabel, }: SpotlightProps): react__default.JSX.Element;

type HighlightVariant = "overlay" | "center" | "minimal";
type HighlightSize = "small" | "medium" | "large";
type HighlightImagePosition = "top" | "center" | "bottom" | "left" | "right" | string;
type HighlightDimension = number | string | {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
};
interface HighlightAction {
    label: string;
    href?: string;
    onClick?: (event?: MouseEvent) => void;
}
interface HighlightImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
    style?: CSSProperties;
    className?: string;
}
type HighlightImageComponent = ComponentType<HighlightImageProps>;
interface HighlightProps {
    /**
     * Main image source.
     */
    image: string;
    /**
     * Optional mobile-specific image source.
     */
    mobileImage?: string;
    /**
     * Image alternative text.
     */
    alt?: string;
    radius?: number | string;
    /**
     * Optional custom image implementation.
     *
     * Example:
     * ImageComponent={Image}
     *
     * This can be Next.js Image or another compatible
     * image component.
     */
    ImageComponent?: HighlightImageComponent;
    /**
     * Semantic destination for the Highlight image.
     *
     * The component renders this as a real <a href="...">
     * for semantics, SEO, browser status previews, etc.
     *
     * Native navigation is prevented. Use onNavigate
     * for actual application navigation.
     */
    href?: string;
    /**
     * Accessible label for the Highlight image link.
     */
    linkLabel?: string;
    /**
     * Handles Highlight image navigation.
     *
     * The component prevents native anchor navigation
     * and delegates navigation to the consuming application.
     */
    onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
    eyebrow?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    action?: HighlightAction;
    variant?: HighlightVariant;
    size?: HighlightSize;
    height?: HighlightDimension;
    minHeight?: HighlightDimension;
    maxHeight?: HighlightDimension;
    aspectRatio?: string;
    imagePosition?: HighlightImagePosition;
    imageSizes?: string;
    imagePriority?: boolean;
    children?: ReactNode;
    sx?: SxProps<Theme>;
    className?: string;
    "aria-label"?: string;
}

declare const Highlight: ({ image, mobileImage, alt, ImageComponent, imageSizes, eyebrow, title, description, action, variant, size, height, minHeight, maxHeight, aspectRatio, imagePosition, radius, imagePriority, href, linkLabel, onNavigate, children, sx, className, "aria-label": ariaLabel, }: HighlightProps) => react__default.JSX.Element;

interface BottomNavigationItemProps {
    /**
     * Component type to render (e.g. Box, Button, IconButton, InputBase, Link).
     * @default Box
     */
    component?: ElementType;
    /**
     * Children nodes
     */
    children?: ReactNode;
    /**
     * Custom styling override
     */
    sx?: SxProps$1;
    [key: string]: any;
}
/**
 * BottomNavigationItem
 *
 * A helper wrapper for custom elements placed inside MUI `<BottomNavigation>`.
 *
 * MUI's `<BottomNavigation>` automatically passes `showLabel`, `selected`, `value`,
 * and `onChange` to all direct children. This component intercepts and consumes those props
 * so they are NOT leaked down as invalid attributes to underlying HTML DOM elements.
 */
declare const DynamicIslandItem: react__default.ForwardRefExoticComponent<Omit<BottomNavigationItemProps, "ref"> & react__default.RefAttributes<any>>;

type DynamicIslandProps = BottomNavigationProps;
declare const DynamicIsland: react__default.ForwardRefExoticComponent<Omit<DynamicIslandProps, "ref"> & react__default.RefAttributes<HTMLDivElement>>;

declare const DynamicIslandAction: _mui_material.ExtendButtonBase<_mui_material.BottomNavigationActionTypeMap<{}, "button">>;

type VisualViewerRadius = "square" | "rounded" | "soft";
type VisualViewerNavigation = "arrows" | "none";
type VisualViewerThumbnailPosition = "left" | "bottom" | "auto";
type VisualViewerObjectFit = "cover" | "contain";
interface VisualViewerDimension {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
}
interface VisualViewerItem {
    id: string;
    src: string;
    alt?: string;
    /** Optional mobile-specific image. */
    mobileSrc?: string;
    /** Optional thumbnail source. Falls back to src. */
    thumbnailSrc?: string;
    /** Optional custom content rendered over the image. */
    overlay?: ReactNode;
    /** Optional metadata. */
    title?: string;
    /** Optional custom data. */
    [key: string]: unknown;
}
interface VisualViewerImageContext {
    item: VisualViewerItem;
    index: number;
    active: boolean;
    isThumbnail: boolean;
    isFullscreen: boolean;
}
interface VisualViewerNavigationContext {
    disabled: boolean;
    onClick: () => void;
}
interface VisualViewerProps {
    /** Images / visual items. */
    items: VisualViewerItem[];
    /** Controlled active item. */
    activeIndex?: number;
    /** Initial active item for uncontrolled mode. */
    defaultActiveIndex?: number;
    /** Called whenever active item changes. */
    onActiveIndexChange?: (index: number, item: VisualViewerItem) => void;
    /**
     * Custom image renderer.
     * Useful for Next.js Image.
     */
    renderImage?: (context: VisualViewerImageContext) => ReactNode;
    /** Optional custom thumbnail renderer. */
    renderThumbnail?: (context: VisualViewerImageContext) => ReactNode;
    /** Responsive component height. */
    height?: VisualViewerDimension | string | number;
    /** Responsive minimum height. */
    minHeight?: VisualViewerDimension | string | number;
    /** Responsive maximum height. */
    maxHeight?: VisualViewerDimension | string | number;
    /**
     * Aspect ratio when height is not supplied.
     */
    aspectRatio?: string | VisualViewerDimension;
    /**
     * Desktop thumbnail position.
     * "auto" means: desktop → left, mobile → bottom.
     */
    thumbnailPosition?: VisualViewerThumbnailPosition;
    /** Show navigation arrows. */
    navigation?: VisualViewerNavigation;
    /** Enable swipe. */
    swipe?: boolean;
    /** Enable mouse drag. */
    mouseDrag?: boolean;
    /** Enable keyboard navigation. */
    keyboard?: boolean;
    /** Enable fullscreen. */
    fullscreen?: boolean;
    /** Enable zoom. */
    zoom?: boolean;
    /** Object fit for the main image. */
    objectFit?: VisualViewerObjectFit;
    /** Allow wrapping from last image to first. */
    loop?: boolean;
    /** Radius style. */
    radius?: VisualViewerRadius;
    /** Width of the thumbnail rail on desktop. */
    thumbnailWidth?: number | string;
    /** Thumbnail size. */
    thumbnailSize?: number | string;
    /** Gap between thumbnails. */
    thumbnailGap?: number;
    /** Gap between thumbnail rail and image. */
    mediaGap?: number;
    /** Show fullscreen button. */
    showFullscreenButton?: boolean;
    /** Show zoom button. */
    showZoomButton?: boolean;
    /**
     * Show thumbnail count overlay on final thumbnail.
     * Example: 5 visible thumbnails + "+6"
     */
    showRemainingCount?: boolean;
    /**
     * Maximum visible thumbnails.
     * Desktop default: 5, Mobile default: 5
     */
    maxVisibleThumbnails?: number;
    /** Custom previous button. */
    renderPreviousButton?: (context: VisualViewerNavigationContext) => ReactNode;
    /** Custom next button. */
    renderNextButton?: (context: VisualViewerNavigationContext) => ReactNode;
    /** Custom fullscreen button. */
    renderFullscreenButton?: (onClick: () => void) => ReactNode;
    /** Custom zoom button. */
    renderZoomButton?: (onClick: () => void, zoomed: boolean) => ReactNode;
    /** Root ref. */
    rootRef?: Ref<HTMLDivElement>;
    /** Root sx. */
    sx?: SxProps<Theme>;
    /** CSS class. */
    className?: string;
    /** Accessibility label. */
    "aria-label"?: string;
}

declare const VisualViewer: ({ items, activeIndex: controlledActiveIndex, defaultActiveIndex, onActiveIndexChange, renderImage, renderThumbnail, height, minHeight, maxHeight, aspectRatio, thumbnailPosition, navigation, swipe, mouseDrag, keyboard, fullscreen, zoom, objectFit, loop, radius, thumbnailWidth, thumbnailSize, thumbnailGap, mediaGap, showFullscreenButton, showZoomButton, showRemainingCount, maxVisibleThumbnails, renderPreviousButton, renderNextButton, renderFullscreenButton, renderZoomButton, rootRef, sx, className, "aria-label": ariaLabel, }: VisualViewerProps) => react__default.JSX.Element | null;

type GalleryColumns = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
type GalleryJustify = "start" | "center" | "end" | "stretch";
type GalleryAlign = "start" | "center" | "end" | "stretch";
type GalleryImageFit = "cover" | "contain" | "fill" | "none";
type GalleryRadius = "square" | "rounded" | "soft";
interface GalleryRenderContext<T> {
    item: T;
    index: number;
}
interface GalleryImageContext<T> extends GalleryRenderContext<T> {
    src?: string;
    alt?: string;
}
interface GalleryOverlayContext<T> extends GalleryRenderContext<T> {
    src?: string;
    alt?: string;
}
interface GalleryProps<T> {
    /**
     * Items to arrange in the gallery.
     */
    items: T[];
    /**
     * Key used for each gallery item.
     */
    getKey?: (item: T, index: number) => React.Key;
    /**
     * Complete item override.
     *
     * When supplied, Gallery does not render its built-in
     * image / overlay / block structure.
     */
    renderItem?: (context: GalleryRenderContext<T>) => ReactNode;
    /**
     * Custom image renderer.
     *
     * If omitted, Gallery falls back to a native HTML <img>
     * using getImage().
     */
    renderImage?: (context: GalleryImageContext<T>) => ReactNode;
    /**
     * Optional content rendered over the image.
     */
    renderOverlay?: (context: GalleryOverlayContext<T>) => ReactNode;
    /**
     * Optional content rendered below the image.
     */
    renderBlock?: (context: GalleryRenderContext<T>) => ReactNode;
    /**
     * Image source used by the native <img> fallback.
     */
    getImage?: (item: T, index: number) => string | undefined;
    /**
     * Alt text used by the native <img> fallback.
     */
    getImageAlt?: (item: T, index: number) => string | undefined;
    /**
     * Responsive number of columns.
     */
    columns?: GalleryColumns;
    /**
     * Grid gap.
     */
    gap?: number | string;
    /**
     * Optional row-specific gap.
     */
    rowGap?: number | string;
    /**
     * Optional column-specific gap.
     */
    columnGap?: number | string;
    justifyItems?: GalleryJustify;
    alignItems?: GalleryAlign;
    /**
     * Aspect ratio of the built-in image area.
     *
     * Examples:
     * "4 / 5"
     * "1 / 1"
     * "16 / 9"
     */
    imageAspectRatio?: string;
    /**
     * object-fit used by the native <img> fallback.
     */
    imageFit?: GalleryImageFit;
    /**
     * Radius applied to the built-in image/item structure.
     */
    radius?: GalleryRadius;
    /**
     * Styles applied to each gallery item.
     */
    itemSx?: SxProps<Theme>;
    /**
     * Styles applied to the image area.
     */
    imageSx?: SxProps<Theme>;
    /**
     * Styles applied to the block below the image.
     */
    blockSx?: SxProps<Theme>;
    /**
     * Styles applied to the gallery root.
     */
    sx?: SxProps<Theme>;
    className?: string;
    "aria-label"?: string;
}

declare function Gallery<T>({ items, getKey, renderItem, renderImage, renderOverlay, renderBlock, getImage, getImageAlt, columns, gap, rowGap, columnGap, justifyItems, alignItems, imageAspectRatio, imageFit, radius, itemSx, imageSx, blockSx, sx, className, "aria-label": ariaLabel, }: GalleryProps<T>): react.JSX.Element;

type ResponsiveBreakpoint = "xs" | "sm" | "md" | "lg" | "xl";
interface ResponsiveState {
    breakpoint: ResponsiveBreakpoint;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
}
declare function useResponsive(): ResponsiveState;

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

export { ACCENT_COLORS, ACTION_COLORS, ALERT_RGB, AmbientBlob, BACKGROUND_COLORS, BRAND_COLORS, type BottomNavigationItemProps, COLORS, CoverImage, DIVIDER_COLORS, DecorativeBlob, DynamicIsland, DynamicIslandAction, DynamicIslandItem, type DynamicIslandProps, EdgeFade, GLASS_COLORS, GOOGLE_SANS_FLEX_URL, GRADIENT_COLORS, Gallery, type GalleryAlign, type GalleryColumns, type GalleryImageContext, type GalleryImageFit, type GalleryJustify, type GalleryOverlayContext, type GalleryProps, type GalleryRadius, type GalleryRenderContext, GlassBox, type GlassBoxProps, GlassCardBody, GlassContainer, type GlassContainerProps, GlassControlsGroup, GlassEdgeFade, type GlassEdgeFadeProps, GlassIconGlow, type GlassIconGlowProps, type GlassModeContextType, GlassModeProvider, type GlassModeProviderProps, GlassNavArrowButton, GlassPanel, type GlassPanelProps, GlassProductTitle, GlassScrollButton, GlassSectionHeaderRow, GlassSectionSubtitle, GlassSectionTitle, GlassSurface, type GlassSurfaceProps, GlassThemeScope, type GlassThemeScopeProps, GlassTitleGroup, GlassToolbarRoot, type GlassToolbarRootProps, GlassWishlistButton, GradientContextTitle, GradientText, HeaderAppBar, type HeaderAppBarProps, HeroActions, HeroDescription, HeroImageFrame, HeroSection, HeroStatsPanel, HeroTitle, Highlight, type HighlightAction, type HighlightDimension, type HighlightImageProps, type HighlightProps, type HighlightSize, type HighlightVariant, HolographicBadge, JIVICO_BRAND_FONTS_URL, JIVICO_FONTS_URL, JivicoFontLinks, JivicoFontPreload, JivicoGlassProvider, type JivicoGlassProviderProps, JivicoGlassTheme, type JivicoPalette, LiquidGlassCard, LiquidGlassCardRoot, type LiquidGlassCardRootProps, LiquidSpotlightImageArea, type LiquidSpotlightImageAreaProps, MobileViewAll, MobileViewAllButton, type MobileViewAllProps, PRIMARY_COLORS, PageRoot, type RailColumns, type RailItemWidth, type RailNavigation, type RailNavigationContext, type RailProps, type RailRenderContext, Rails, type ResolvedThemeMode, type ResponsiveBreakpoint, type ResponsiveState, SECONDARY_COLORS, SEMANTIC_COLORS, Section, SectionContainer, SectionHeader, type SectionHeaderProps, Showcase, type ShowcaseAction, type ShowcaseItem, type ShowcaseMedia, type ShowcaseNavigation, type ShowcaseProps, type ShowcaseSize, type ShowcaseTransition, type ShowcaseVariant, Spotlight, type SpotlightAction, type SpotlightImagePosition, type SpotlightProps, type SpotlightSize, type SpotlightVariant, StatLabel, StatValue, SectionHeader as StudioSectionHeader, type SectionHeaderProps as StudioSectionHeaderProps, TEXT_COLORS, type ThemeMode, TribeMemberPill, VisualViewer, type VisualViewerDimension, type VisualViewerImageContext, type VisualViewerItem, type VisualViewerNavigation, type VisualViewerNavigationContext, type VisualViewerObjectFit, type VisualViewerProps, type VisualViewerRadius, type VisualViewerThumbnailPosition, buildAccentPalette, buildActionPalette, buildAlertPalette, buildAliasesPalette, buildBackgroundPalette, buildBrandPalette, buildDividerPalette, buildGlassPalette, buildGradientsPalette, buildPalette, buildPrimaryPalette, buildSecondaryPalette, buildSemanticPalette, buildTextPalette, createJivicoTheme, getControlOverrides, getDataDisplayOverrides, getFeedbackOverrides, getInputOverrides, getNavigationOverrides, getSurfaceOverrides, typography, useGlassMode, useResponsive, useResponsive as useResponsiveHook };
