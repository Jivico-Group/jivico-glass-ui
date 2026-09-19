import { Box, BoxProps, styled } from "@mui/material";
import { glassRecipe } from "../../theme/overrides/glassRecipe.js";

export interface GlassBoxProps extends BoxProps {
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
export const GlassBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDark" && prop !== "radius",
})<GlassBoxProps>(({ theme, isDark: explicitDark, radius = 20 }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const recipe = glassRecipe(isDark);

  return {
    ...recipe,
    borderRadius: radius,
    boxSizing: "border-box",
    color: isDark ? "#fff" : "#000",
  };
});

/**
 * GlassSurface — Lightweight wrapper that sets text color to
 * strict #FFFFFF in Dark Mode and strict #000000 in Light Mode for maximum readability.
 */
export const GlassSurface = styled(Box)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
}));

export type GlassSurfaceProps = BoxProps;

// Alias for layout container workflows
export const GlassContainer = GlassBox;
export type GlassContainerProps = GlassBoxProps;
