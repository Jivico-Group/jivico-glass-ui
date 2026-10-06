import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";
import { COLORS } from "../../colors/index.js";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const TRANSITION = [
  `background-color 180ms ${EASE}`,
  `border-color 180ms ${EASE}`,
  `box-shadow 220ms ${EASE}`,
  `color 180ms ${EASE}`,
  `transform 180ms ${EASE}`,
  `backdrop-filter 220ms ${EASE}`,
].join(", ");

const GLASS = {
  light: {
    contained: "rgba(255, 255, 255, 0.72)",
    containedHover: "rgba(255, 255, 255, 0.92)",
    containedActive: "rgba(255, 255, 255, 0.78)",
    containedDisabled: "rgba(255, 255, 255, 0.3)",
    containedBorder: "rgba(255, 255, 255, 0.85)",
    containedShadow: "0 6px 22px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
    containedHoverShadow: "0 10px 28px rgba(0, 0, 0, 0.1), inset 0 1px 1px #FFFFFF",
    outlined: "rgba(255, 255, 255, 0.28)",
    outlinedHover: "rgba(255, 255, 255, 0.55)",
    outlinedActive: "rgba(255, 255, 255, 0.4)",
    outlinedBorder: "rgba(17, 17, 17, 0.16)",
    outlinedHoverBorder: "rgba(17, 17, 17, 0.3)",
    outlinedShadow: "0 4px 14px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
    outlinedHoverShadow: "0 6px 20px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
  },

  dark: {
    contained: "rgba(255, 255, 255, 0.12)",
    containedHover: "rgba(255, 255, 255, 0.2)",
    containedActive: "rgba(255, 255, 255, 0.09)",
    containedDisabled: "rgba(255, 255, 255, 0.04)",
    containedBorder: "rgba(255, 255, 255, 0.16)",
    containedShadow: "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.22)",
    containedHoverShadow: "0 14px 40px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
    outlined: "rgba(255, 255, 255, 0.04)",
    outlinedHover: "rgba(255, 255, 255, 0.09)",
    outlinedActive: "rgba(255, 255, 255, 0.06)",
    outlinedBorder: "rgba(255, 255, 255, 0.22)",
    outlinedHoverBorder: "rgba(255, 255, 255, 0.35)",
    outlinedShadow: "0 4px 18px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.06)",
    outlinedHoverShadow: "0 8px 24px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
  },
};

export const getButtonOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const variant = ownerState.variant || "text";
        const requestedColor = ownerState.color ?? "primary";
        const colorKey = requestedColor === "inherit" ? "primary" : requestedColor;

        const activeColorGroup = (palette[colorKey as keyof typeof palette] || palette.primary) as Record<
          string,
          string
        >;

        const mainColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover;
        const activeColor = activeColorGroup.active;
        const disabledColor = activeColorGroup.disabled;
        const glowColor = activeColorGroup.glow;
        const textColor = activeColorGroup.contrastText || COLORS.white;

        const isPrimary = colorKey === "primary";
        const isSecondary = colorKey === "secondary";
        const isDarkGlass = colorKey === "dark-glass";
        const isGlass = colorKey === "glass" || isDarkGlass;
        const isSemantic = !isPrimary && !isSecondary && !isGlass;

        const glassDark = isDarkGlass || isDark;
        const glass = glassDark ? GLASS.dark : GLASS.light;

        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",

          minHeight: 38,

          borderRadius: 9999,
          padding: "9px 22px",

          fontFamily: '"Google Sans Flex", "Google Sans", sans-serif',
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",

          textTransform: "none",
          whiteSpace: "nowrap",
          boxSizing: "border-box",

          position: "relative",
          overflow: "hidden",

          cursor: "pointer",

          transition: TRANSITION,

          "&:active": {
            transform: "translateY(0) scale(0.985)",
          },

          "&:focus-visible": {
            outline: "none",
          },

          "&.Mui-disabled": {
            cursor: "default",
            pointerEvents: "none",
            transform: "none",
          },

          // ------------------------------------------------------------
          // CONTAINED — PRIMARY
          // ------------------------------------------------------------

          ...(variant === "contained" &&
            isPrimary && {
              backgroundColor: mainColor,
              color: textColor,

              boxShadow: isDark
                ? "0 6px 24px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)"
                : "0 6px 20px rgba(17,17,17,0.22), inset 0 1px 1px rgba(255,255,255,0.15)",

              "&:hover": {
                backgroundColor: hoverColor,
                transform: "translateY(-1px)",

                boxShadow: isDark
                  ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                  : "0 12px 32px rgba(17,17,17,0.3)",
              },

              "&:active": {
                backgroundColor: activeColor,
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: isDark
                  ? `0 0 0 3px ${glowColor}, 0 6px 24px rgba(0,0,0,0.55)`
                  : `0 0 0 3px ${glowColor}, 0 6px 20px rgba(17,17,17,0.22)`,
              },

              "&.Mui-disabled": {
                backgroundColor: disabledColor,
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
              },
            }),

          // ------------------------------------------------------------
          // OUTLINED — PRIMARY
          // ------------------------------------------------------------

          ...(variant === "outlined" &&
            isPrimary && {
              border: "none",

              background: isDark ? "rgba(255, 255, 255, 0.1)" : COLORS.brand.cream,

              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              boxShadow: isDark
                ? "0 6px 20px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.15)"
                : "0 6px 20px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(17,17,17,0.08)",

              "&:hover": {
                background: isDark ? "rgba(255, 255, 255, 0.15)" : COLORS.white,

                transform: "translateY(-1px)",

                boxShadow: isDark
                  ? "0 12px 32px rgba(0,0,0,0.6), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                  : "0 12px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(17,17,17,0.15)",
              },

              "&:active": {
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: isDark
                  ? `0 0 0 3px ${glowColor}, 0 6px 24px rgba(0,0,0,0.55)`
                  : "0 0 0 3px rgba(246,245,242,0.6), 0 6px 20px rgba(0,0,0,0.06)",
              },

              "&.Mui-disabled": {
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",

                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",

                boxShadow: "none",

                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              },
            }),

          // ------------------------------------------------------------
          // CONTAINED — SECONDARY
          // ------------------------------------------------------------

          ...(variant === "contained" &&
            isSecondary && {
              background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.04)",

              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              boxShadow: isDark ? "inset 0 0 0 1px rgba(255,255,255,0.05)" : "inset 0 0 0 1px rgba(17,17,17,0.05)",

              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              "&:hover": {
                background: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",

                transform: "translateY(-1px)",

                boxShadow: isDark
                  ? "0 4px 14px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)"
                  : "0 4px 14px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(17,17,17,0.1)",
              },

              "&:active": {
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: isDark ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",

                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",

                boxShadow: "none",

                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              },
            }),

          // ------------------------------------------------------------
          // OUTLINED — SECONDARY
          // ------------------------------------------------------------

          ...(variant === "outlined" &&
            isSecondary && {
              border: "none",
              background: "transparent",

              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              boxShadow: isDark ? "inset 0 0 0 1.5px rgba(255,255,255,0.15)" : "inset 0 0 0 1.5px rgba(17,17,17,0.15)",

              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              "&:hover": {
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",

                transform: "translateY(-1px)",

                boxShadow: isDark
                  ? "0 4px 14px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                  : "0 4px 14px rgba(0,0,0,0.04), inset 0 0 0 1.5px rgba(17,17,17,0.25)",
              },

              "&:active": {
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: isDark ? "0 0 0 3px rgba(246,245,242,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                boxShadow: isDark ? "inset 0 0 0 1px rgba(255,255,255,0.1)" : "inset 0 0 0 1px rgba(17,17,17,0.1)",

                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",

                background: "transparent",

                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              },
            }),

          // ------------------------------------------------------------
          // CONTAINED — GLASS
          // ------------------------------------------------------------

          ...(variant === "contained" &&
            isGlass && {
              background: glass.contained,

              color: glassDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",

              border: `1px solid ${glass.containedBorder}`,

              boxShadow: glass.containedShadow,

              "&:hover": {
                background: glass.containedHover,
                transform: "translateY(-1px)",
                boxShadow: glass.containedHoverShadow,
              },

              "&:active": {
                background: glass.containedActive,
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: glassDark
                  ? "0 0 0 3px rgba(255,255,255,0.35), 0 8px 32px rgba(0,0,0,0.45)"
                  : "0 0 0 3px rgba(17,17,17,0.2), 0 6px 22px rgba(0,0,0,0.08)",
              },

              "&.Mui-disabled": {
                background: glass.containedDisabled,

                color: glassDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.28)",

                border: `1px solid ${glassDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)"}`,

                boxShadow: "none",

                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              },
            }),

          // ------------------------------------------------------------
          // OUTLINED — GLASS
          // ------------------------------------------------------------

          ...(variant === "outlined" &&
            isGlass && {
              background: glass.outlined,

              color: glassDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              border: `1.5px solid ${glass.outlinedBorder}`,

              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",

              boxShadow: glass.outlinedShadow,

              "&:hover": {
                background: glass.outlinedHover,

                borderColor: glass.outlinedHoverBorder,

                transform: "translateY(-1px)",

                boxShadow: glass.outlinedHoverShadow,
              },

              "&:active": {
                background: glass.outlinedActive,
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: glassDark ? "0 0 0 3px rgba(255,255,255,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                borderColor: glassDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)",

                color: glassDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",

                background: "transparent",

                boxShadow: "none",

                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              },
            }),

          // ------------------------------------------------------------
          // CONTAINED — SEMANTIC
          // ------------------------------------------------------------

          ...(variant === "contained" &&
            isSemantic && {
              backgroundColor: mainColor,
              color: textColor,

              boxShadow: "none",

              border: "1px solid transparent",

              "&:hover": {
                backgroundColor: hoverColor,

                boxShadow: `0 6px 20px ${glowColor}`,

                transform: "translateY(-1px)",
              },

              "&:active": {
                backgroundColor: activeColor,
                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                backgroundColor: disabledColor,

                color: isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.4)",

                boxShadow: "none",
              },
            }),

          // ------------------------------------------------------------
          // OUTLINED — SEMANTIC
          // ------------------------------------------------------------

          ...(variant === "outlined" &&
            isSemantic && {
              border: `1.5px solid ${mainColor}`,

              color: mainColor,

              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",

                borderColor: hoverColor,

                boxShadow: `0 4px 14px ${glowColor}`,

                transform: "translateY(-1px)",
              },

              "&:active": {
                borderColor: activeColor,

                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",

                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                borderColor: disabledColor,

                color: disabledColor,

                backgroundColor: "transparent",

                boxShadow: "none",
              },
            }),

          // ------------------------------------------------------------
          // TEXT — GLASS
          // ------------------------------------------------------------

          ...(variant === "text" &&
            isGlass && {
              background: "transparent",

              color: glassDark ? COLORS.brand.cream : COLORS.brand.charcoal,

              padding: "8px 18px",

              minHeight: 40,

              border: "1px solid transparent",

              transition: TRANSITION,

              "&:hover": {
                background: glassDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.55)",

                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",

                border: `1px solid ${glassDark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)"}`,

                boxShadow: glassDark ? "0 4px 16px rgba(0,0,0,0.25)" : "0 4px 14px rgba(0,0,0,0.04)",

                transform: "translateY(-1px)",
              },

              "&:active": {
                background: glassDark ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.75)",

                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: glassDark ? "0 0 0 3px rgba(255,255,255,0.3)" : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                color: glassDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",

                background: "transparent",

                border: "1px solid transparent",
              },
            }),

          // ------------------------------------------------------------
          // TEXT — NORMAL
          // ------------------------------------------------------------

          ...(variant === "text" &&
            !isGlass && {
              color: isPrimary || isSecondary ? (isDark ? COLORS.brand.cream : COLORS.brand.charcoal) : mainColor,

              padding: "8px 16px",

              minHeight: 40,

              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",

                transform: "translateY(-1px)",
              },

              "&:active": {
                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",

                transform: "translateY(0) scale(0.985)",
              },

              "&:focus-visible": {
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                color:
                  isPrimary || isSecondary ? (isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)") : disabledColor,

                backgroundColor: "transparent",

                boxShadow: "none",
              },
            }),

          // ------------------------------------------------------------
          // REDUCED MOTION
          // ------------------------------------------------------------

          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",

            "&:hover": {
              transform: "none",
            },

            "&:active": {
              transform: "none",
            },
          },
        };
      },

      // --------------------------------------------------------------
      // SIZES — ORIGINAL JIVICO SIZING
      // --------------------------------------------------------------

      sizeSmall: {
        minHeight: 30,
        padding: "5px 14px",
        fontSize: "0.78rem",
      },

      sizeMedium: {
        minHeight: 36,
        padding: "7px 18px",
        fontSize: "0.85rem",
      },

      sizeLarge: {
        minHeight: 44,
        padding: "11px 26px",
        fontSize: "0.9375rem",
      },
    },
  },
});
