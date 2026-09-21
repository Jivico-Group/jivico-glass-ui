import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

declare module "@mui/material/Skeleton" {
  interface SkeletonPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    success: true;
    info: true;
    warning: true;
    error: true;
    glass: true;
  }

  interface SkeletonOwnProps {
    appearance?: "solid" | "tonal" | "glass" | "outlined";
    radius?: "square" | "small" | "medium" | "large" | "rounded" | "pill";
    glassIntensity?: "subtle" | "medium" | "strong" | "ultra";
    glow?: boolean;
  }
}

type SkeletonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "glass";

type SkeletonAppearance = "solid" | "tonal" | "glass" | "outlined";

type SkeletonRadius =
  | "square"
  | "small"
  | "medium"
  | "large"
  | "rounded"
  | "pill";

type GlassIntensity = "subtle" | "medium" | "strong" | "ultra";

export const getSkeletonOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const radiusMap: Record<SkeletonRadius, number> = {
    square: 0,
    small: 6,
    medium: 10,
    large: 14,
    rounded: 20,
    pill: 9999,
  };

  const blurMap: Record<GlassIntensity, string> = {
    subtle: "blur(8px)",
    medium: "blur(14px)",
    strong: "blur(20px)",
    ultra: "blur(28px)",
  };

  const colors: Record<
    SkeletonColor,
    {
      main: string;
    }
  > = {
    primary: {
      main: palette.primary.main,
    },

    secondary: {
      main: palette.secondary.main,
    },

    accent: {
      main: palette.accent.main,
    },

    success: {
      main: palette.success.main,
    },

    info: {
      main: palette.info.main,
    },

    warning: {
      main: palette.warning.main,
    },

    error: {
      main: palette.error.main,
    },

    glass: {
      main: palette.glass.main,
    },
  };

  return {
    MuiSkeleton: {
      /*
       * Only native MUI props are placed here.
       *
       * Custom Jivico props receive their defaults
       * inside styleOverrides.
       */
      defaultProps: {
        animation: "wave",
      },

      styleOverrides: {
        root: ({ ownerState }) => {
          const color = (ownerState.color ?? "glass") as SkeletonColor;

          const appearance = (ownerState.appearance ??
            "glass") as SkeletonAppearance;

          const radius = (ownerState.radius ?? "medium") as SkeletonRadius;

          const glassIntensity = (ownerState.glassIntensity ??
            "strong") as GlassIntensity;

          const glow = ownerState.glow ?? true;

          const selected = colors[color];

          let backgroundColor = palette.glass.skeletonBg;

          /*
           * SOLID
           */
          if (appearance === "solid") {
            backgroundColor = isDark
              ? "rgba(255,255,255,0.10)"
              : "rgba(0,0,0,0.07)";
          }

          /*
           * TONAL
           */
          if (appearance === "tonal") {
            backgroundColor =
              color === "glass"
                ? palette.glass.skeletonBg
                : `color-mix(in srgb, ${selected.main} ${
                    isDark ? "16%" : "9%"
                  }, transparent)`;
          }

          /*
           * GLASS
           */
          if (appearance === "glass") {
            backgroundColor = palette.glass.skeletonBg;
          }

          /*
           * OUTLINED
           */
          if (appearance === "outlined") {
            backgroundColor = "transparent";
          }

          return {
            position: "relative",

            overflow: "hidden",

            borderRadius: radiusMap[radius],

            backgroundColor,

            border:
              appearance === "outlined"
                ? `1px solid ${selected.main}`
                : appearance === "glass"
                  ? `1px solid ${
                      isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)"
                    }`
                  : "none",

            backdropFilter:
              appearance === "glass"
                ? `saturate(180%) ${blurMap[glassIntensity]}`
                : undefined,

            WebkitBackdropFilter:
              appearance === "glass"
                ? `saturate(180%) ${blurMap[glassIntensity]}`
                : undefined,

            boxShadow:
              appearance === "glass"
                ? isDark
                  ? "inset 0 1px 0 rgba(255,255,255,0.07)"
                  : "inset 0 1px 0 rgba(255,255,255,0.55)"
                : "none",

            /*
             * Remove MUI's default background blending
             * so the Jivico surface controls the appearance.
             */
            backgroundImage:
              appearance === "glass"
                ? isDark
                  ? "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015))"
                  : "linear-gradient(135deg, rgba(255,255,255,0.70), rgba(255,255,255,0.32))"
                : undefined,

            /*
             * Premium glass highlight.
             */
            "&::before":
              appearance === "glass"
                ? {
                    content: '""',

                    position: "absolute",

                    inset: 0,

                    pointerEvents: "none",

                    borderRadius: "inherit",

                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.16), transparent 50%)",

                    opacity: 0.9,
                  }
                : undefined,

            /*
             * Subtle glow for semantic colors.
             */
            ...(glow && appearance !== "outlined" && color !== "glass"
              ? {
                  boxShadow: `0 0 18px color-mix(
                    in srgb,
                    ${selected.main} ${isDark ? "18%" : "10%"},
                    transparent
                  )`,
                }
              : {}),

            /*
             * Make the native wave animation work
             * with the Jivico glass surface.
             */
            "&.MuiSkeleton-wave::after": {
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",

              opacity: appearance === "glass" ? 1 : 0.65,
            },

            /*
             * Text skeletons should inherit the same
             * radius system while retaining MUI's
             * natural height behavior.
             */
            "&.MuiSkeleton-text": {
              borderRadius: radiusMap[radius],
            },

            /*
             * Rounded / rectangular skeletons.
             */
            "&.MuiSkeleton-rounded": {
              borderRadius: radiusMap[radius],
            },

            "&.MuiSkeleton-rectangular": {
              borderRadius: radiusMap[radius],
            },
          };
        },
      },
    },
  };
};
