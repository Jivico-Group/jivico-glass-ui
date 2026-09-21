import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

declare module "@mui/material/Dialog" {
  interface DialogProps {
    variant?: "glass" | "solid" | "tonal" | "outlined";

    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";

    elevation?: "none" | "low" | "medium" | "high" | "floating";

    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";

    border?: "none" | "subtle" | "strong";
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

type DialogColor = "primary" | "secondary" | "accent" | "glass";

type DialogVariant = "glass" | "solid" | "tonal" | "outlined";

type DialogRadius =
  | "square"
  | "small"
  | "medium"
  | "large"
  | "rounded"
  | "pill";

type DialogElevation = "none" | "low" | "medium" | "high" | "floating";
type GlassIntensity = "subtle" | "medium" | "strong" | "ultra";
type DialogBorder = "none" | "subtle" | "strong";

export const getDialogOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiDialog: {
    defaultProps: {
      disableScrollLock: false,

      color: "glass",
      variant: "glass",
      radius: "large",
      elevation: "floating",
      glassIntensity: "strong",
      border: "subtle",
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const color = (ownerState.color ?? "glass") as DialogColor;
        const variant = (ownerState.variant ?? "glass") as DialogVariant;
        const radius = (ownerState.radius ?? "large") as DialogRadius;
        const elevation = (ownerState.elevation ??
          "floating") as DialogElevation;
        const glassIntensity = (ownerState.glassIntensity ??
          "strong") as GlassIntensity;
        const border = (ownerState.border ?? "subtle") as DialogBorder;

        /**
         * ----------------------------------------
         * Radius
         * ----------------------------------------
         */

        const radiusMap: Record<DialogRadius, number> = {
          square: 0,
          small: 12,
          medium: 18,
          large: 24,
          rounded: 32,
          pill: 48,
        };

        /**
         * ----------------------------------------
         * Elevation
         * ----------------------------------------
         */

        const elevationMap: Record<DialogElevation, string> = {
          none: "none",

          low: isDark
            ? "0 8px 24px rgba(0,0,0,.22)"
            : "0 8px 24px rgba(0,0,0,.08)",

          medium: isDark
            ? "0 16px 40px rgba(0,0,0,.32)"
            : "0 16px 40px rgba(0,0,0,.12)",

          high: isDark
            ? "0 24px 60px rgba(0,0,0,.42)"
            : "0 24px 60px rgba(0,0,0,.16)",

          floating: isDark
            ? "0 32px 90px rgba(0,0,0,.52), 0 8px 32px rgba(0,0,0,.28)"
            : "0 32px 90px rgba(0,0,0,.18), 0 8px 32px rgba(0,0,0,.10)",
        };

        /**
         * ----------------------------------------
         * Glass blur
         * ----------------------------------------
         */

        const glassBlurMap: Record<GlassIntensity, string> = {
          subtle: "blur(12px)",
          medium: "blur(20px)",
          strong: "blur(32px)",
          ultra: "blur(48px)",
        };

        /**
         * ----------------------------------------
         * Dialog colors
         *
         * IMPORTANT:
         *
         * Do not use palette.primary.light/dark.
         *
         * palette.primary.main is already resolved
         * for the current light/dark theme.
         * ----------------------------------------
         */

        const colors: Record<
          DialogColor,
          {
            main: string;
            border: string;
          }
        > = {
          primary: {
            main: palette.primary.main,
            border: palette.primary.main,
          },

          secondary: {
            main: palette.secondary.main,
            border: palette.secondary.main,
          },

          accent: {
            main: palette.accent.main,
            border: palette.accent.main,
          },

          glass: {
            main: palette.glass.surface,
            border: palette.glass.paperBorder,
          },
        };

        const selected = colors[color];

        /**
         * ----------------------------------------
         * Surface
         * ----------------------------------------
         */

        let background: string;
        let borderColor: string;

        switch (variant) {
          /**
           * SOLID
           *
           * Uses the resolved palette color directly.
           */
          case "solid": {
            background = selected.main;

            borderColor = border === "none" ? "transparent" : selected.border;

            break;
          }

          /**
           * TONAL
           *
           * Uses a subtle tint of the current
           * resolved palette color.
           */
          case "tonal": {
            if (color === "glass") {
              background = palette.glass.surface;
            } else {
              background = isDark
                ? `color-mix(
                    in srgb,
                    ${selected.main} 13%,
                    transparent
                  )`
                : `color-mix(
                    in srgb,
                    ${selected.main} 8%,
                    transparent
                  )`;
            }

            borderColor =
              border === "none"
                ? "transparent"
                : isDark
                  ? `color-mix(
                      in srgb,
                      ${selected.border} 34%,
                      transparent
                    )`
                  : `color-mix(
                      in srgb,
                      ${selected.border} 22%,
                      transparent
                    )`;

            break;
          }

          /**
           * OUTLINED
           */
          case "outlined": {
            background = "transparent";

            borderColor = border === "none" ? "transparent" : selected.border;

            break;
          }

          /**
           * GLASS
           *
           * Default Jivico Dialog treatment.
           */
          case "glass":
          default: {
            background = palette.glass.paperBg;

            borderColor =
              border === "none" ? "transparent" : palette.glass.paperBorder;

            break;
          }
        }

        /**
         * ----------------------------------------
         * Border strength
         * ----------------------------------------
         */

        const resolvedBorder =
          border === "none"
            ? "transparent"
            : border === "strong"
              ? selected.border
              : borderColor;

        /**
         * ----------------------------------------
         * Root
         * ----------------------------------------
         */

        return {
          "& .MuiDialog-container": {
            padding: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },
          },

          /**
           * --------------------------------------
           * Dialog paper
           * --------------------------------------
           */

          "& .MuiDialog-paper": {
            position: "relative",

            overflow: "hidden",

            width: "100%",

            borderRadius: radiusMap[radius],

            background,

            border: `1px solid ${resolvedBorder}`,

            boxShadow: elevation === "none" ? "none" : elevationMap[elevation],

            /**
             * ------------------------------------
             * Glass treatment
             * ------------------------------------
             */

            ...(variant === "glass" && {
              backdropFilter: glassBlurMap[glassIntensity],

              WebkitBackdropFilter: glassBlurMap[glassIntensity],

              backgroundImage: isDark
                ? `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,.075),
                    rgba(255,255,255,.025)
                  )
                `
                : `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,.92),
                    rgba(255,255,255,.68)
                  )
                `,
            }),

            /**
             * ------------------------------------
             * Smooth premium transitions
             * ------------------------------------
             */

            transition:
              "transform 220ms cubic-bezier(.2,.8,.2,1), " +
              "box-shadow 220ms ease, " +
              "border-color 220ms ease",

            /**
             * ------------------------------------
             * Glass highlight
             * ------------------------------------
             */

            "&::before": {
              content: '""',

              position: "absolute",

              inset: 0,

              pointerEvents: "none",

              background: isDark
                ? `
                  radial-gradient(
                    circle at 0% 0%,
                    rgba(255,255,255,.08),
                    transparent 38%
                  )
                `
                : `
                  radial-gradient(
                    circle at 0% 0%,
                    rgba(255,255,255,.85),
                    transparent 38%
                  )
                `,

              opacity: variant === "glass" ? 1 : 0,
            },

            /**
             * ------------------------------------
             * Inner highlight
             * ------------------------------------
             */

            "&::after": {
              content: '""',

              position: "absolute",

              inset: 0,

              pointerEvents: "none",

              borderRadius: "inherit",

              boxShadow:
                variant === "glass"
                  ? `inset 0 1px 0 ${
                      isDark ? "rgba(255,255,255,.10)" : "rgba(255,255,255,.75)"
                    }`
                  : "none",
            },

            /**
             * ------------------------------------
             * Keep actual Dialog content above
             * decorative pseudo-elements.
             * ------------------------------------
             */

            "& > *": {
              position: "relative",

              zIndex: 1,
            },
          },
        };
      },
    },
  },
});
