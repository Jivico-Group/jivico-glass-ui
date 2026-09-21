import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

declare module "@mui/material/Tooltip" {
  interface TooltipProps {
    /**
     * Enables Jivico glass surface.
     *
     * Default: false
     */
    glass?: boolean;
  }
}

export const getTooltipOverrides = (
  _palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      placement: "top",
      enterDelay: 100,
      leaveDelay: 50,
    },

    styleOverrides: {
      tooltip: ({ ownerState }) => {
        const glass = ownerState.glass === true;

        /**
         * Inverted Tooltip Surfaces:
         * - Light Theme -> Dark Background & Light Text
         * - Dark Theme  -> Light Background & Dark Text
         */

        /**
         * Normal surface
         */
        const normalBackground = isDark ? "#F5F5F7" : "#111111";
        const normalColor = isDark ? "#111111" : "#FFFFFF";

        /**
         * Glass surface
         */
        const glassBackground = isDark
          ? "rgba(245, 245, 247, 0.82)"
          : "rgba(17, 17, 17, 0.78)";
        const glassColor = isDark ? "#111111" : "#FFFFFF";

        /**
         * Border
         */
        const borderColor = glass
          ? isDark
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0.18)"
          : isDark
            ? "rgba(0, 0, 0, 0.12)"
            : "rgba(255, 255, 255, 0.12)";

        /**
         * Shadow
         */
        const shadow = isDark
          ? "0 8px 28px rgba(0, 0, 0, 0.18)"
          : "0 12px 36px rgba(0, 0, 0, 0.45)";

        return {
          position: "relative",
          overflow: "hidden",
          borderRadius: 10,
          padding: "7px 13px",
          fontSize: "0.8125rem",
          fontWeight: 600,
          lineHeight: 1.35,

          backgroundColor: glass ? glassBackground : normalBackground,
          color: glass ? glassColor : normalColor,
          border: `1px solid ${borderColor}`,
          boxShadow: shadow,

          ...(glass && {
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: isDark
                ? "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 45%, transparent 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 45%, transparent 100%)",
              zIndex: 0,
            },

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              pointerEvents: "none",
              background: isDark
                ? "rgba(255,255,255,0.95)"
                : "rgba(255,255,255,0.22)",
              zIndex: 2,
            },
          }),

          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        };
      },

      arrow: ({ ownerState }) => {
        const glass = ownerState.glass === true;
        const arrowBackground = glass
          ? isDark
            ? "rgba(245, 245, 247, 0.82)"
            : "rgba(17, 17, 17, 0.78)"
          : isDark
            ? "#F5F5F7"
            : "#111111";

        const arrowBorder = glass
          ? isDark
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0.18)"
          : isDark
            ? "rgba(0, 0, 0, 0.12)"
            : "rgba(255, 255, 255, 0.12)";

        return {
          color: arrowBackground,
          "&::before": {
            backgroundColor: arrowBackground,
            border: `1px solid ${arrowBorder}`,
          },
        };
      },

      popper: {
        "&[data-popper-placement*='top'] .MuiTooltip-tooltip": {
          transformOrigin: "bottom center",
        },
        "&[data-popper-placement*='bottom'] .MuiTooltip-tooltip": {
          transformOrigin: "top center",
        },
        "&[data-popper-placement*='left'] .MuiTooltip-tooltip": {
          transformOrigin: "right center",
        },
        "&[data-popper-placement*='right'] .MuiTooltip-tooltip": {
          transformOrigin: "left center",
        },
      },
    },
  },
});
