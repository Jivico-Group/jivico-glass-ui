import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

declare module "@mui/material/Tooltip" {
  interface TooltipPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    glass: true;
  }

  interface TooltipProps {
    color?: "primary" | "secondary" | "accent" | "glass";
    variant?: "glass" | "solid" | "tonal" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    elevation?: "none" | "low" | "medium" | "high" | "floating";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    border?: "none" | "subtle" | "strong";
  }
}

type TooltipColor = "primary" | "secondary" | "accent" | "glass";

type TooltipVariant = "glass" | "solid" | "tonal" | "outlined";

type TooltipRadius =
  | "square"
  | "small"
  | "medium"
  | "large"
  | "rounded"
  | "pill";

type TooltipElevation = "none" | "low" | "medium" | "high" | "floating";

type GlassIntensity = "subtle" | "medium" | "strong" | "ultra";

type TooltipBorder = "none" | "subtle" | "strong";

export const getTooltipOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  /*
   * -----------------------------------------
   * RADIUS
   * -----------------------------------------
   */

  const radiusMap: Record<TooltipRadius, number> = {
    square: 0,
    small: 6,
    medium: 10,
    large: 12,
    rounded: 18,
    pill: 999,
  };

  /*
   * -----------------------------------------
   * ELEVATION
   * -----------------------------------------
   */

  const elevationMap: Record<TooltipElevation, string> = {
    none: "none",

    low: isDark
      ? "0 2px 8px rgba(0, 0, 0, 0.18)"
      : "0 2px 8px rgba(0, 0, 0, 0.08)",

    medium: isDark
      ? "0 6px 20px rgba(0, 0, 0, 0.28)"
      : "0 6px 20px rgba(0, 0, 0, 0.12)",

    high: isDark
      ? "0 12px 32px rgba(0, 0, 0, 0.36)"
      : "0 12px 32px rgba(0, 0, 0, 0.16)",

    floating: isDark
      ? "0 18px 48px rgba(0, 0, 0, 0.46)"
      : "0 18px 48px rgba(0, 0, 0, 0.20)",
  };

  /*
   * -----------------------------------------
   * GLASS BLUR
   * -----------------------------------------
   */

  const glassBlurMap: Record<GlassIntensity, string> = {
    subtle: "blur(12px)",
    medium: "blur(20px)",
    strong: "blur(32px)",
    ultra: "blur(48px)",
  };

  /*
   * -----------------------------------------
   * COLOR IDENTITY
   * -----------------------------------------
   *
   * The semantic colors are used to identify
   * the tooltip.
   *
   * They are NOT used directly as the surface
   * for solid / tonal variants.
   *
   * This is intentional:
   *
   * LIGHT MODE
   *   dark surface + light text
   *
   * DARK MODE
   *   light surface + dark text
   */

  const colors: Record<
    TooltipColor,
    {
      main: string;
      contrast: string;
      border: string;
    }
  > = {
    primary: {
      main: palette.primary.main,
      contrast: palette.primary.contrastText,
      border: palette.primary.main,
    },

    secondary: {
      main: palette.secondary.main,
      contrast: palette.secondary.contrastText,
      border: palette.secondary.main,
    },

    accent: {
      main: palette.accent.main,
      contrast: palette.accent.contrastText,
      border: palette.accent.main,
    },

    glass: {
      main: palette.glass.tooltipBg,
      contrast: isDark ? "#1D1D1F" : "#F5F5F7",
      border: palette.glass.tooltipBorder,
    },
  };

  /*
   * -----------------------------------------
   * THEME SURFACES
   * -----------------------------------------
   *
   * All semantic solid/tonal tooltips follow
   * the same theme rule.
   *
   * Light:
   *   dark surface
   *   light text
   *
   * Dark:
   *   light surface
   *   dark text
   */

  const semanticSurface = isDark ? "#F5F5F7" : "#111111";

  const semanticText = isDark ? "#111111" : "#F5F5F7";

  /*
   * Slightly transparent tonal version of the
   * same theme surface.
   *
   * It remains visually close to the solid
   * surface rather than switching to the
   * individual semantic color.
   */

  const tonalSurface = isDark
    ? "rgba(245, 245, 247, 0.88)"
    : "rgba(17, 17, 17, 0.88)";

  const tonalText = isDark ? "#111111" : "#F5F5F7";

  /*
   * -----------------------------------------
   * COMPONENT
   * -----------------------------------------
   */

  return {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: "top",

        color: "glass",
        variant: "glass",
        radius: "large",
        elevation: "floating",
        glassIntensity: "strong",
        border: "subtle",

        enterDelay: 100,
        leaveDelay: 50,
        enterNextDelay: 50,
      },

      styleOverrides: {
        /*
         * -----------------------------------------
         * TOOLTIP
         * -----------------------------------------
         */

        tooltip: ({ ownerState }) => {
          const color = (ownerState.color ?? "glass") as TooltipColor;

          const variant = (ownerState.variant ?? "glass") as TooltipVariant;

          const radius = (ownerState.radius ?? "large") as TooltipRadius;

          const elevation = (ownerState.elevation ??
            "floating") as TooltipElevation;

          const glassIntensity = (ownerState.glassIntensity ??
            "strong") as GlassIntensity;

          const border = (ownerState.border ?? "subtle") as TooltipBorder;

          const selected = colors[color];

          let backgroundColor = selected.main;

          let borderColor = "transparent";

          /*
           * -----------------------------------------
           * GLASS
           * -----------------------------------------
           */

          if (variant === "glass") {
            backgroundColor = palette.glass.tooltipBg;

            if (border === "subtle") {
              borderColor = palette.glass.tooltipBorder;
            } else if (border === "strong") {
              borderColor = selected.border;
            }
          }

          /*
           * -----------------------------------------
           * SOLID
           * -----------------------------------------
           *
           * THEME RULE:
           *
           * Light → dark background / light text
           * Dark  → light background / dark text
           */

          if (variant === "solid") {
            backgroundColor = semanticSurface;

            if (border === "subtle") {
              borderColor = selected.border;
            } else if (border === "strong") {
              borderColor = selected.border;
            }
          }

          /*
           * -----------------------------------------
           * TONAL
           * -----------------------------------------
           *
           * Same theme direction as solid, but
           * slightly transparent.
           *
           * Light → dark tonal surface
           * Dark  → light tonal surface
           */

          if (variant === "tonal") {
            backgroundColor = tonalSurface;

            if (border === "subtle") {
              borderColor = selected.border;
            } else if (border === "strong") {
              borderColor = selected.border;
            }
          }

          /*
           * -----------------------------------------
           * OUTLINED
           * -----------------------------------------
           *
           * Outlined remains semantic:
           * color identity = text/border.
           */

          if (variant === "outlined") {
            backgroundColor = isDark
              ? "rgba(255, 255, 255, 0.035)"
              : "rgba(255, 255, 255, 0.72)";

            if (border === "subtle") {
              borderColor = isDark
                ? "rgba(255, 255, 255, 0.24)"
                : "rgba(0, 0, 0, 0.16)";
            } else if (border === "strong") {
              borderColor = selected.main;
            }
          }

          /*
           * -----------------------------------------
           * TEXT COLOR
           * -----------------------------------------
           */

          let textColor: string;

          if (variant === "solid") {
            /*
             * Light mode:
             *   dark background → light text
             *
             * Dark mode:
             *   light background → dark text
             */
            textColor = semanticText;
          } else if (variant === "tonal") {
            textColor = tonalText;
          } else if (variant === "outlined") {
            /*
             * Outlined keeps its semantic color.
             */
            textColor = selected.main;
          } else {
            /*
             * Glass has its own contrast system.
             */
            textColor =
              color === "glass"
                ? isDark
                  ? "#1D1D1F"
                  : "#1D1D1F"
                : semanticText;
          }

          /*
           * -----------------------------------------
           * GLASS
           * -----------------------------------------
           */

          const isGlass = variant === "glass";

          const glassBackground = isDark
            ? "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))"
            : "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.20))";

          return {
            position: "relative",

            boxSizing: "border-box",

            backgroundColor,

            color: textColor,

            border: border === "none" ? "none" : `1px solid ${borderColor}`,

            borderRadius: radiusMap[radius],

            boxShadow: elevationMap[elevation],

            padding: "8px 12px",

            minHeight: 34,

            display: "flex",

            alignItems: "center",

            fontSize: "0.8125rem",

            lineHeight: 1.35,

            fontWeight: 600,

            letterSpacing: "0.01em",

            backdropFilter: isGlass
              ? `saturate(180%) ${glassBlurMap[glassIntensity]}`
              : undefined,

            WebkitBackdropFilter: isGlass
              ? `saturate(180%) ${glassBlurMap[glassIntensity]}`
              : undefined,

            backgroundImage: isGlass ? glassBackground : undefined,

            overflow: "hidden",

            transition:
              "opacity 160ms ease, transform 160ms ease, box-shadow 160ms ease",

            /*
             * -----------------------------------------
             * GLASS HIGHLIGHT
             * -----------------------------------------
             */

            "&::before": {
              content: '""',

              position: "absolute",

              top: 1,
              right: 1,
              bottom: 1,
              left: 1,

              borderRadius: "inherit",

              pointerEvents: "none",

              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 42%)",

              opacity: isGlass ? 1 : 0,
            },

            /*
             * -----------------------------------------
             * GLASS TOP HIGHLIGHT
             * -----------------------------------------
             */

            "&::after": {
              content: '""',

              position: "absolute",

              top: 1,
              left: 1,
              right: 1,

              height: 1,

              pointerEvents: "none",

              borderRadius: "999px",

              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",

              opacity: isGlass ? 1 : 0,
            },

            "& > *": {
              position: "relative",
              zIndex: 1,
            },
          };
        },

        /*
         * -----------------------------------------
         * ARROW
         * -----------------------------------------
         */

        arrow: ({ ownerState }) => {
          const color = (ownerState.color ?? "glass") as TooltipColor;

          const variant = (ownerState.variant ?? "glass") as TooltipVariant;

          const border = (ownerState.border ?? "subtle") as TooltipBorder;

          const selected = colors[color];

          /*
           * GLASS
           */

          if (variant === "glass") {
            return {
              color: palette.glass.tooltipBg,

              "&::before": {
                boxSizing: "border-box",

                backgroundColor: palette.glass.tooltipBg,

                border:
                  border === "none"
                    ? "none"
                    : `1px solid ${
                        border === "strong"
                          ? selected.border
                          : palette.glass.tooltipBorder
                      }`,

                backdropFilter: "saturate(180%) blur(32px)",

                WebkitBackdropFilter: "saturate(180%) blur(32px)",
              },
            };
          }

          /*
           * OUTLINED
           */

          if (variant === "outlined") {
            const arrowBackground = isDark
              ? "rgba(255, 255, 255, 0.035)"
              : "rgba(255, 255, 255, 0.72)";

            const arrowBorder =
              border === "strong"
                ? selected.main
                : isDark
                  ? "rgba(255, 255, 255, 0.24)"
                  : "rgba(0, 0, 0, 0.16)";

            return {
              color: arrowBackground,

              "&::before": {
                boxSizing: "border-box",

                backgroundColor: arrowBackground,

                border: border === "none" ? "none" : `1px solid ${arrowBorder}`,
              },
            };
          }

          /*
           * SOLID / TONAL
           *
           * Must match the tooltip surface.
           */

          const arrowBackground =
            variant === "tonal" ? tonalSurface : semanticSurface;

          return {
            color: arrowBackground,

            "&::before": {
              boxSizing: "border-box",

              backgroundColor: arrowBackground,

              border:
                border === "none" ? "none" : `1px solid ${selected.border}`,
            },
          };
        },

        /*
         * -----------------------------------------
         * POPPER
         * -----------------------------------------
         */

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
  };
};
