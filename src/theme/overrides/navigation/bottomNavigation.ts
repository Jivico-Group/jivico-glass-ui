import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getBottomNavigationOverrides = (_palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiBottomNavigation: {
    defaultProps: {
      glass: "true",
      size: "medium",
      placement: "inline",
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const glass = ownerState.glass === "true" || ownerState.glass === true;
        const placement = ownerState.placement || "inline";
        const size = ownerState.size || "medium";

        /**
         * Surfaces
         */
        const normalBackground = isDark ? "#18181B" : "#FFFFFF";
        const normalColor = isDark ? "#F5F5F7" : "#111111";

        const glassBackground = isDark ? "rgba(18, 20, 26, 0.52)" : "rgba(255, 255, 255, 0.48)";
        const glassColor = isDark ? "#F5F5F7" : "#111111";

        /**
         * Borders
         */
        const borderColor = glass
          ? isDark
            ? "rgba(255, 255, 255, 0.16)"
            : "rgba(255, 255, 255, 0.75)"
          : isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)";

        /**
         * Shadow
         */
        const shadow = glass
          ? isDark
            ? "0 24px 60px rgba(0, 0, 0, 0.75), 0 8px 24px rgba(0, 0, 0, 0.45), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)"
            : "0 22px 50px -4px rgba(15, 23, 42, 0.18), 0 8px 20px -2px rgba(15, 23, 42, 0.08), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)"
          : isDark
            ? "0 16px 48px rgba(0, 0, 0, 0.5)"
            : "0 12px 36px rgba(0, 0, 0, 0.1)";

        /**
         * Sizes
         */
        const heightMap = {
          small: 48,
          medium: 64,
        };

        const paddingMap = {
          small: "5px 8px",
          medium: "6px 10px",
        };

        /**
         * Placement Map
         */
        const placementStyles: Record<string, any> = {
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
          height: heightMap[size] || 64,
          padding: paddingMap[size] || "6px 10px",
          borderRadius: 9999,
          boxSizing: "border-box",

          backgroundColor: glass ? glassBackground : normalBackground,
          color: glass ? glassColor : normalColor,
          border: `1px solid ${borderColor}`,
          boxShadow: shadow,

          ...(placementStyles[placement] || placementStyles.inline),

          /**
           * Glass Treatment
           */
          ...(glass && {
            backdropFilter: "blur(28px) saturate(220%) contrast(102%)",
            WebkitBackdropFilter: "blur(28px) saturate(220%) contrast(102%)",
            backgroundImage: isDark
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.3) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.20) 45%, rgba(240, 245, 252, 0.35) 100%)",
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",

            "&::before": {
              display: "none",
            },

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 20,
              right: 20,
              height: 1,
              pointerEvents: "none",
              background: isDark
                ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)"
                : "linear-gradient(90deg, transparent, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, transparent)",
              zIndex: 2,
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
        // MUI passes showLabel (singular) to BottomNavigationAction ownerState
        const showLabelProp = ownerState.showLabel ?? (ownerState as any).showLabels;
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
          padding: showLabels ? (isSmall ? "3px 8px" : "6px 12px") : 0,
          borderRadius: !showLabels ? "50%" : 9999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDark ? "rgba(245, 245, 247, 0.6)" : "rgba(17, 17, 17, 0.6)",
          transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",

          "&:hover": {
            color: isDark ? "#F5F5F7" : "#111111",
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)",
          },

          "&.Mui-selected": {
            color: isDark ? "#F5F5F7" : "#111111",
            fontWeight: 700,
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.08)",
            boxShadow: isDark
              ? isSmall
                ? "inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 2px 8px rgba(0,0,0,0.25)"
                : "inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 4px 14px rgba(0,0,0,0.3)"
              : isSmall
                ? "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(0,0,0,0.05)"
                : "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 4px 12px rgba(0,0,0,0.05)",

            "& .MuiSvgIcon-root, & svg": {
              transform: isSmall ? "scale(1.05)" : "scale(1.1)",
            },
          },

          "& .MuiBottomNavigationAction-label": {
            display: !showLabels ? "none !important" : "block",
            fontSize: isSmall ? "0.6875rem" : "0.75rem",
            fontWeight: 600,
            lineHeight: 1.2,
            mt: isSmall ? 0.1 : 0.25,
            transition: "all 0.2s ease",
          },
        };
      },
    },
  },
});
