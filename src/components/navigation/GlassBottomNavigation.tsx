import { styled } from "@mui/material/styles";
import MuiBottomNavigation from "@mui/material/BottomNavigation";

/**
 * GlassBottomNavigation
 *
 * A styled wrapper around MUI `<BottomNavigation>` that prevents custom theme props
 * (`glass`, `placement`) from leaking down to the HTML DOM element as invalid attributes,
 * while preserving 100% of the frosted glass style overrides and ownerState evaluation.
 */
export const GlassBottomNavigation = styled(MuiBottomNavigation, {
  shouldForwardProp: (prop) => prop !== "glass" && prop !== "placement",
})({});

export const BottomNavigationNav = GlassBottomNavigation;
