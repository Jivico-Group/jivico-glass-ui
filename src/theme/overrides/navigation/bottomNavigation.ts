
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getBottomNavigationOverrides = (
  _palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiBottomNavigation: {
    defaultProps: {
      glass: "true",
      size: "medium",
      placement: "inline",
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const glass =
          ownerState.glass === "true" || ownerState.glass === true;
        const placement = ownerState.placement || "inline";
        const size = ownerState.size || "medium";

        const normalBackground = isDark ? "#18181B" : "#FFFFFF";
        const normalColor = isDark ? "#F5F5F7" : "#111111";

        const glassBackground = isDark
          ? "rgba(18, 20, 26, 0.55)"
          : "rgba(255, 255, 255, 0.58)";

        const glassColor = isDark ? "#F5F5F7" : "#111111";

        const heightMap: Record<string, number> = {
          small: 48,
          medium: 64,
        };

        const paddingMap: Record<string, string> = {
          small: "5px 8px",
          medium: "6px 10px",
        };

        const placementStyles: Record<string, object> = {
          "top-left": {
            position: "fixed",
            top: 20,
            left: 24,
            zIndex: 1100,
          },
          "top-center": {
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1100,
          },
          "top-right": {
            position: "fixed",
            top: 20,
            right: 24,
            zIndex: 1100,
          },
          "bottom-left": {
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 1100,
          },
          "bottom-center": {
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1100,
          },
          "bottom-right": {
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1100,
          },
          inline: {
            position: "relative",
          },
        };

        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: heightMap[String(size)] ?? 64,
          padding: paddingMap[String(size)] ?? "6px 10px",
          borderRadius: 9999,
          boxSizing: "border-box",

          backgroundColor: glass ? glassBackground : normalBackground,
          color: glass ? glassColor : normalColor,

          // No visible border or heavy shadow.
          border: "none",
          boxShadow: "none",

          ...(placementStyles[String(placement)] ??
            placementStyles.inline),

          ...(glass && {
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",

            backgroundImage: isDark
              ? "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.01) 65%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.02) 70%)",

            isolation: "isolate",
            overflow: "hidden",

            // A very subtle glass reflection, not a border.
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "12%",
              right: "12%",
              height: "1px",
              background: isDark
                ? "rgba(255,255,255,0.16)"
                : "rgba(255,255,255,0.65)",
              pointerEvents: "none",
            },

            "&::after": {
              display: "none",
            },
          }),
        };
      },
    },
  },

  MuiBottomNavigationAction: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const isSmall = (ownerState as any).size === "small";
        const showLabelProp =
          ownerState.showLabel ?? (ownerState as any).showLabels;
        const showLabels = showLabelProp !== false;

        const actionSize = isSmall ? 28 : 46;

        return {
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          boxSizing: "border-box",
          height: actionSize,
          minWidth: !showLabels ? actionSize : isSmall ? 36 : 52,
          maxWidth: !showLabels ? actionSize : isSmall ? 100 : 140,
          width: !showLabels ? actionSize : "auto",
          aspectRatio: !showLabels ? "1 / 1" : "unset",
          padding: showLabels
            ? isSmall
              ? "3px 8px"
              : "6px 12px"
            : 0,
          borderRadius: !showLabels ? "50%" : 9999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",

          color: isDark
            ? "rgba(245,245,247,0.65)"
            : "rgba(17,17,17,0.65)",

          transition: "color 180ms ease, background-color 180ms ease",

          "&:hover": {
            color: isDark ? "#F5F5F7" : "#111111",
            backgroundColor: isDark
              ? "rgba(255,255,255,0.05)"
              : "rgba(17,17,17,0.035)",
          },

          "&.Mui-selected": {
            color: isDark ? "#F5F5F7" : "#111111",
            fontWeight: 700,
            backgroundColor: isDark
              ? "rgba(255,255,255,0.09)"
              : "rgba(17,17,17,0.055)",

            // Selected state stays flat and understated.
            boxShadow: "none",

            "& .MuiSvgIcon-root, & svg": {
              transform: isSmall ? "scale(1.05)" : "scale(1.08)",
            },
          },

          "& .MuiBottomNavigationAction-label": {
            display: !showLabels ? "none !important" : "block",
            fontSize: isSmall ? "0.6875rem" : "0.75rem",
            fontWeight: 600,
            lineHeight: 1.2,
            mt: isSmall ? 0.1 : 0.25,
            transition: "all 180ms ease",
          },
        };
      },
    },
  },
});