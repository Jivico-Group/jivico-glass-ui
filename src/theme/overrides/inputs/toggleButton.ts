import { COLORS } from "../../colors/index.js";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const TRANSITION = [
  `background-color 180ms ${EASE}`,
  `border-color 180ms ${EASE}`,
  `box-shadow 220ms ${EASE}`,
  `color 180ms ${EASE}`,
  `transform 180ms ${EASE}`,
].join(", ");

type ColorGroup = {
  main: string;
  hover?: string;
  active?: string;
  disabled?: string;
  contrastText?: string;
  glow?: string;
};

const getColorGroup = (palette: JivicoPalette, color: unknown): ColorGroup => {
  const colorKey =
    typeof color === "string" && color !== "standard" && color !== "inherit" && color in palette ? color : "primary";

  return (palette[colorKey as keyof JivicoPalette] as ColorGroup) || (palette.primary as ColorGroup);
};

export const getToggleButtonOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = typeof ownerState.color === "string" ? ownerState.color : "primary";

        const color = getColorGroup(palette, colorKey);

        const mainColor = color.main;
        const hoverColor = color.hover || mainColor;
        const activeColor = color.active || hoverColor;
        const disabledColor = color.disabled || mainColor;
        const contrastText = color.contrastText || COLORS.white;
        const glowColor = color.glow || (isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.1)");
        const isGlass = colorKey === "glass" || colorKey === "dark-glass";
        const isDarkGlass = colorKey === "dark-glass" || isDark;

        return {
          backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.04)",
          borderRadius: 8,
          padding: 4,
          gap: 4,
          boxShadow: isDark ? "inset 0 1px 1px rgba(255,255,255,0.05)" : "inset 0 1px 2px rgba(17,17,17,0.05)",

          "& .MuiToggleButtonGroup-grouped": {
            margin: 0,
            border: "none",
            borderRadius: "6px !important",
            transition: TRANSITION,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(17,17,17,0.65)",

            "&:not(:first-of-type)": {
              border: "none",
              borderRadius: "6px !important",
            },

            "&:first-of-type": {
              borderRadius: "6px !important",
            },

            "&:last-of-type": {
              borderRadius: "6px !important",
            },

            "&:hover": {
              backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.06)",
              color: mainColor,
              transform: "translateY(-1px)",
              zIndex: 1,
            },

            "&:active": {
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.08)",
              transform: "translateY(0) scale(0.985)",
            },

            "&.Mui-selected": {
              backgroundColor: isGlass
                ? isDarkGlass
                  ? "rgba(255,255,255,0.14)"
                  : "rgba(255,255,255,0.72)"
                : mainColor,

              color: isGlass ? (isDarkGlass ? COLORS.brand.cream : COLORS.brand.charcoal) : contrastText,

              boxShadow: isGlass
                ? isDarkGlass
                  ? "0 6px 20px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.18)"
                  : "0 6px 18px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.9)"
                : `0 4px 14px ${glowColor}, inset 0 1px 1px rgba(255,255,255,0.2)`,

              zIndex: 1,

              "&:hover": {
                backgroundColor: isGlass
                  ? isDarkGlass
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.9)"
                  : hoverColor,

                color: isGlass ? (isDarkGlass ? COLORS.brand.cream : COLORS.brand.charcoal) : contrastText,

                transform: "translateY(-1px)",
              },

              "&:active": {
                backgroundColor: isGlass
                  ? isDarkGlass
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.78)"
                  : activeColor,

                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 3px ${glowColor}`,
              },
            },

            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`,
              zIndex: 2,
            },

            "&.Mui-disabled": {
              color: isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.3)",
              backgroundColor: "transparent",
              boxShadow: "none",
              transform: "none",
              cursor: "default",

              "&.Mui-selected": {
                backgroundColor: isGlass ? (isDark ? "rgba(255,255,255,0.05)" : "rgba(17,17,17,0.04)") : disabledColor,

                color: isGlass
                  ? isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(17,17,17,0.3)"
                  : isDark
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.7)",

                boxShadow: "none",
                transform: "none",
              },
            },
          },

          "@media (prefers-reduced-motion: reduce)": {
            "& .MuiToggleButtonGroup-grouped": {
              transition: "none",

              "&:hover": {
                transform: "none",
              },

              "&:active": {
                transform: "none",
              },

              "&.Mui-selected:hover": {
                transform: "none",
              },

              "&.Mui-selected:active": {
                transform: "none",
              },
            },
          },
        };
      },
    },
  },

  MuiToggleButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.875rem",
        lineHeight: 1.2,
        padding: "6px 12px",
        minHeight: 32,
        boxSizing: "border-box",
        border: "none",
        borderRadius: 6,
        backgroundColor: "transparent",
        transition: TRANSITION,
        position: "relative",
      },
    },
  },
});
