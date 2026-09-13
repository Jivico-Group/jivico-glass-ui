import { Theme, Components } from '@mui/material/styles';
import * as _emotion_styled from '@emotion/styled';
import * as react from 'react';
import react__default from 'react';
import * as _mui_system from '@mui/system';
import * as _mui_material from '@mui/material';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';

/**
 * Jivico Comprehensive Design System: Apple Precision + Google Antigravity
 * Raw Color Constants
 */
declare const COLORS: {
    primary: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
    secondary: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
    success: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
    warning: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
    error: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
    info: {
        light: string;
        dark: string;
        hoverLight: string;
        hoverDark: string;
        glowLight: string;
        glowDark: string;
    };
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
    };
};

/**
 * Builds a mode-resolved palette from the raw COLORS constants.
 * Every value is already resolved for the given mode so consumers
 * never need to branch on `isDark` themselves.
 */
declare const buildPalette: (mode: "light" | "dark") => {
    primary: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    success: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    warning: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    error: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    info: {
        main: string;
        hover: string;
        glow: string;
        contrastText: string;
    };
    background: {
        default: string;
        paper: string;
    };
    text: {
        primary: string;
        secondary: string;
    };
    divider: string;
    glass: {
        buttonBorder: string;
        buttonBg: string;
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
    };
};
type JivicoPalette = ReturnType<typeof buildPalette>;

/**
 * Shared typography configuration for the Jivico design system.
 */
declare const typography: {
    fontFamily: string;
    h1: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h2: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h3: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h4: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
    };
    h5: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
    };
    h6: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
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
    };
};

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
declare const GOOGLE_SANS_FLEX_URL = "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";
declare const getHybridTheme: (mode: "light" | "dark") => Theme;
declare const getAppleTheme: (mode: "light" | "dark") => Theme;
declare const getAntigravityTheme: (mode: "light" | "dark") => Theme;
declare const createJivicoTheme: (mode: "light" | "dark") => Theme;

/**
 * MUI component overrides — Selection Controls:
 * Checkbox, Radio, Switch, Slider, ToggleButton
 */
declare const getControlOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

/**
 * MUI component overrides — Data Display:
 * Chip, Avatar, Divider, Table, TableCell, Tooltip
 */
declare const getDataDisplayOverrides: (palette: JivicoPalette, _isDark: boolean) => Components<Theme>;

/**
 * MUI component overrides — Feedback:
 * Alert, Dialog, Skeleton, LinearProgress, Tooltip
 */
declare const getFeedbackOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

/**
 * MUI component overrides — Inputs category:
 * Button, ButtonGroup, Fab, OutlinedInput, InputLabel, Select, Autocomplete
 */
declare const getInputOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

/**
 * MUI component overrides — Navigation:
 * Tabs, Tab, Drawer, Menu, MenuItem, PaginationItem
 */
declare const getNavigationOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

/**
 * MUI component overrides — Surfaces:
 * Card, Paper, AppBar, Accordion
 */
declare const getSurfaceOverrides: (palette: JivicoPalette, isDark: boolean) => Components<Theme>;

interface GlassPanelProps {
    isDark?: boolean;
}
declare const GlassPanel: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & GlassPanelProps, {}, {}>;

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
    iconGradient?: 'pink' | 'cyan' | 'amber' | 'emerald' | 'purple';
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

declare const AmbientBlob: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    variant: "pink" | "blue" | "purple" | "amber" | "cyan";
    isDark: boolean;
}, {}, {}>;
declare const DecorativeBlob: _emotion_styled.StyledComponent<_mui_system.BoxOwnProps<_mui_material.Theme> & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof _mui_system.BoxOwnProps<_mui_material.Theme>> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark: boolean;
}, {}, {}>;

declare const GradientText: _emotion_styled.StyledComponent<_mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const GradientContextTitle: _emotion_styled.StyledComponent<_mui_material.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "className" | "style" | "classes" | "children" | "sx" | "color" | "variant" | "align" | "noWrap" | "gutterBottom" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;

/**
 * Preloads Google Sans Flex font with high priority preconnect links.
 * Place inside <head> or at the root of your HTML layout.
 */
declare function JivicoFontPreload(): react__default.JSX.Element;
declare const JivicoFontLinks: typeof JivicoFontPreload;

declare const FreestyleBadge: _emotion_styled.StyledComponent<_mui_material.ChipOwnProps & _mui_material.ChipSlotsAndSlotProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "disabled" | "nativeButton" | "sx" | "tabIndex" | "color" | "size" | "variant" | "label" | "icon" | "slotProps" | "slots" | "clickable" | "avatar" | "deleteIcon" | "onDelete" | "skipFocusWhenDisabled"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, {}, {}>;
declare const BannerChip: _emotion_styled.StyledComponent<_mui_material.ChipOwnProps & _mui_material.ChipSlotsAndSlotProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "disabled" | "nativeButton" | "sx" | "tabIndex" | "color" | "size" | "variant" | "label" | "icon" | "slotProps" | "slots" | "clickable" | "avatar" | "deleteIcon" | "onDelete" | "skipFocusWhenDisabled"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, {}, {}>;
declare const SupportedTypeChip: _emotion_styled.StyledComponent<_mui_material.ChipOwnProps & _mui_material.ChipSlotsAndSlotProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "disabled" | "nativeButton" | "sx" | "tabIndex" | "color" | "size" | "variant" | "label" | "icon" | "slotProps" | "slots" | "clickable" | "avatar" | "deleteIcon" | "onDelete" | "skipFocusWhenDisabled"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isDark?: boolean;
}, {}, {}>;
declare const FilterChip: _emotion_styled.StyledComponent<_mui_material.ChipOwnProps & _mui_material.ChipSlotsAndSlotProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className" | "style" | "classes" | "children" | "disabled" | "nativeButton" | "sx" | "tabIndex" | "color" | "size" | "variant" | "label" | "icon" | "slotProps" | "slots" | "clickable" | "avatar" | "deleteIcon" | "onDelete" | "skipFocusWhenDisabled"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & {
    isSelected?: boolean;
}, {}, {}>;

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

type ThemeMode = 'light' | 'dark';
interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setMode: (mode: ThemeMode) => void;
}
declare const useThemeMode: () => ThemeContextType;
interface ThemeModeProviderProps {
    children: react__default.ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
}
declare function ThemeModeProvider({ children, defaultMode, storageKey, }: ThemeModeProviderProps): react__default.JSX.Element;

interface JivicoThemeProviderProps {
    children: react__default.ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
    enableCssBaseline?: boolean;
}
declare function JivicoThemeProvider({ children, defaultMode, storageKey, enableCssBaseline, }: JivicoThemeProviderProps): react__default.JSX.Element;

export { AmbientBlob, BannerChip, COLORS, CoverImage, DecorativeBlob, EdgeFade, FilterChip, FreestyleBadge, GOOGLE_SANS_FLEX_URL, GlassCardBody, GlassControlsGroup, GlassEdgeFade, type GlassEdgeFadeProps, GlassIconGlow, type GlassIconGlowProps, GlassNavArrowButton, GlassPanel, type GlassPanelProps, GlassProductTitle, GlassScrollButton, GlassSectionHeaderRow, GlassSectionSubtitle, GlassSectionTitle, GlassTitleGroup, GlassToolbarRoot, type GlassToolbarRootProps, GlassWishlistButton, GradientContextTitle, GradientText, HeaderAppBar, type HeaderAppBarProps, HeroActions, HeroDescription, HeroImageFrame, HeroSection, HeroStatsPanel, HeroTitle, HolographicBadge, JivicoFontLinks, JivicoFontPreload, type JivicoPalette, JivicoThemeProvider, type JivicoThemeProviderProps, LiquidGlassCard, LiquidGlassCardRoot, type LiquidGlassCardRootProps, LiquidSpotlightImageArea, type LiquidSpotlightImageAreaProps, MobileViewAll, MobileViewAllButton, type MobileViewAllProps, PageRoot, Section, SectionContainer, SectionHeader, type SectionHeaderProps, StatLabel, StatValue, SectionHeader as StudioSectionHeader, type SectionHeaderProps as StudioSectionHeaderProps, SupportedTypeChip, type ThemeContextType, type ThemeMode, ThemeModeProvider, type ThemeModeProviderProps, TribeMemberPill, buildPalette, createJivicoTheme, getAntigravityTheme, getAppleTheme, getControlOverrides, getDataDisplayOverrides, getFeedbackOverrides, getHybridTheme, getInputOverrides, getNavigationOverrides, getSurfaceOverrides, typography, useThemeMode };
