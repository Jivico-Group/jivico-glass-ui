import type { Components, Theme } from "@mui/material/styles";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import type { JivicoPalette } from "../../palette/index.js";


type ProgressColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "glass";

type ProgressAppearance = "solid" | "tonal" | "glass" | "outlined";

type ProgressRadius =
  | "square"
  | "small"
  | "medium"
  | "large"
  | "rounded"
  | "pill";

type ProgressSize = "thin" | "small" | "medium" | "large";

type GlassIntensity = "subtle" | "medium" | "strong" | "ultra";

export const getLinearProgressOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  /*
   * -----------------------------------------
   * RADIUS
   * -----------------------------------------
   */

  const radiusMap: Record<ProgressRadius, number> = {
    square: 0,
    small: 4,
    medium: 8,
    large: 12,
    rounded: 18,
    pill: 9999,
  };

  /*
   * -----------------------------------------
   * SIZE
   * -----------------------------------------
   */

  const heightMap: Record<ProgressSize, number> = {
    thin: 3,
    small: 4,
    medium: 6,
    large: 8,
  };

  /*
   * -----------------------------------------
   * GLASS BLUR
   * -----------------------------------------
   */

  const blurMap: Record<GlassIntensity, string> = {
    subtle: "blur(8px)",
    medium: "blur(14px)",
    strong: "blur(20px)",
    ultra: "blur(28px)",
  };

  /*
   * -----------------------------------------
   * COLORS
   * -----------------------------------------
   */

  const colors: Record<
    ProgressColor,
    {
      main: string;
      contrastText: string;
    }
  > = {
    primary: {
      main: palette.primary.main,
      contrastText: palette.primary.contrastText,
    },

    secondary: {
      main: palette.secondary.main,
      contrastText: palette.secondary.contrastText,
    },

    accent: {
      main: palette.accent.main,
      contrastText: palette.accent.contrastText,
    },

    success: {
      main: palette.success.main,
      contrastText: palette.success.contrastText,
    },

    info: {
      main: palette.info.main,
      contrastText: palette.info.contrastText,
    },

    warning: {
      main: palette.warning.main,
      contrastText: palette.warning.contrastText,
    },

    error: {
      main: palette.error.main,
      contrastText: palette.error.contrastText,
    },

    glass: {
      main: palette.glass.main,
      contrastText: palette.glass.contrastText,
    },
  };

  /*
   * -----------------------------------------
   * TRACK
   * -----------------------------------------
   */

  const defaultTrack = isDark
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(0, 0, 0, 0.08)";

  const glassTrack = isDark
    ? "rgba(255, 255, 255, 0.10)"
    : "rgba(255, 255, 255, 0.70)";

  /*
   * -----------------------------------------
   * GLASS BORDER
   * -----------------------------------------
   */

  const glassBorder = isDark
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(0, 0, 0, 0.08)";

  /*
   * -----------------------------------------
   * COMPONENT
   * -----------------------------------------
   */

  return {
    MuiLinearProgress: {
      defaultProps: {
        color: "glass",
      },

      styleOverrides: {
        /*
         * =====================================
         * ROOT
         * =====================================
         */

        root: ({ ownerState }) => {
          const color = (ownerState.color ?? "glass") as ProgressColor;

          const appearance = (ownerState.appearance ??
            "glass") as ProgressAppearance;

          const radius = (ownerState.radius ?? "pill") as ProgressRadius;

          const size = (ownerState.size ?? "medium") as ProgressSize;

          const glassIntensity = (ownerState.glassIntensity ??
            "strong") as GlassIntensity;

          const selected = colors[color];

          let trackBackground = defaultTrack;

          /*
           * SOLID
           */

          if (appearance === "solid") {
            trackBackground = isDark
              ? "rgba(255,255,255,0.12)"
              : "rgba(0,0,0,0.08)";
          }

          /*
           * TONAL
           */

          if (appearance === "tonal") {
            trackBackground =
              color === "glass"
                ? defaultTrack
                : isDark
                  ? `color-mix(
                      in srgb,
                      ${selected.main} 16%,
                      rgba(255,255,255,0.06)
                    )`
                  : `color-mix(
                      in srgb,
                      ${selected.main} 10%,
                      rgba(0,0,0,0.045)
                    )`;
          }

          /*
           * GLASS
           */

          if (appearance === "glass") {
            trackBackground = glassTrack;
          }

          /*
           * OUTLINED
           */

          if (appearance === "outlined") {
            trackBackground = "transparent";
          }

          return {
            position: "relative",

            width: "100%",

            height: heightMap[size],

            minHeight: heightMap[size],

            borderRadius: radiusMap[radius],

            overflow: "hidden",

            boxSizing: "border-box",

            backgroundColor: trackBackground,

            /*
             * Outlined border.
             */

            border:
              appearance === "outlined"
                ? `1px solid ${selected.main}`
                : appearance === "glass"
                  ? `1px solid ${glassBorder}`
                  : "none",

            /*
             * Glass blur.
             */

            backdropFilter:
              appearance === "glass"
                ? `saturate(180%) ${blurMap[glassIntensity]}`
                : undefined,

            WebkitBackdropFilter:
              appearance === "glass"
                ? `saturate(180%) ${blurMap[glassIntensity]}`
                : undefined,

            /*
             * Glass surface.
             */

            backgroundImage:
              appearance === "glass"
                ? isDark
                  ? "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))"
                  : "linear-gradient(90deg, rgba(255,255,255,0.72), rgba(255,255,255,0.40))"
                : undefined,

            /*
             * ---------------------------------
             * CRITICAL BAR SELECTOR
             * ---------------------------------
             *
             * MUI renders the actual progress
             * indicator as:
             *
             * .MuiLinearProgress-bar
             *
             * We explicitly style it here.
             */

            [`& > .${linearProgressClasses.bar}`]: {
              display: "block",

              position: "absolute",

              top: 0,

              bottom: 0,

              left: 0,

              /*
               * DO NOT SET TRANSFORM.
               *
               * MUI controls transform based
               * on the value prop.
               */

              opacity: 1,

              visibility: "visible",

              borderRadius: radiusMap[radius],
            },

            /*
             * Determinate bar.
             */

            [`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar}`]:
              {
                opacity: 1,

                visibility: "visible",

                display: "block",
              },

            /*
             * Indeterminate bar.
             */

            [`&.${linearProgressClasses.indeterminate} > .${linearProgressClasses.bar}`]:
              {
                opacity: 1,

                visibility: "visible",

                display: "block",
              },

            /*
             * Query bar.
             */

            [`&.${linearProgressClasses.query} > .${linearProgressClasses.bar}`]:
              {
                opacity: 1,

                visibility: "visible",

                display: "block",
              },

            /*
             * ---------------------------------
             * GLASS HIGHLIGHT
             * ---------------------------------
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
                      "linear-gradient(90deg, rgba(255,255,255,0.12), transparent 50%)",

                    zIndex: 2,
                  }
                : undefined,

            /*
             * Keep MUI bar above the glass
             * surface highlight.
             */

            [`& > .${linearProgressClasses.bar}`]: {
              zIndex: 1,

              display: "block",

              position: "absolute",

              top: 0,

              bottom: 0,

              left: 0,

              opacity: 1,

              visibility: "visible",

              borderRadius: radiusMap[radius],
            },
          };
        },

        /*
         * =====================================
         * BAR
         * =====================================
         */

        bar: ({ ownerState }) => {
          const color = (ownerState.color ?? "glass") as ProgressColor;
          const appearance = (ownerState.appearance ??
            "glass") as ProgressAppearance;
          const radius = (ownerState.radius ?? "pill") as ProgressRadius;
          const glow = ownerState.glow ?? true;

          const selected = colors[color];

          const barColor =
            color === "glass"
              ? isDark
                ? "#F5F5F5"
                : "#111111"
              : selected.main;

          const glowColor =
            color === "glass"
              ? isDark
                ? "rgba(255,255,255,0.35)"
                : "rgba(0,0,0,0.20)"
              : `${selected.main}55`;

          return {
            position: "relative",
            display: "block",
            minWidth: "2px",

            borderRadius: radiusMap[radius],

            /*
             * IMPORTANT:
             * Do not set transform here.
             * MUI uses transform to calculate the actual percentage.
             */
            backgroundColor: barColor,

            opacity: 1,
            visibility: "visible",

            backgroundImage:
              appearance === "glass"
                ? isDark
                  ? "linear-gradient(90deg, rgba(255,255,255,0.30), rgba(255,255,255,0.12))"
                  : "linear-gradient(90deg, rgba(0,0,0,0.16), rgba(0,0,0,0.07))"
                : "none",

            boxShadow: glow
              ? `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`
              : "none",

            transition:
              "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), width 300ms cubic-bezier(0.22, 1, 0.36, 1)",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                appearance === "glass"
                  ? isDark
                    ? "linear-gradient(90deg, rgba(255,255,255,0.24), rgba(255,255,255,0))"
                    : "linear-gradient(90deg, rgba(255,255,255,0.55), rgba(255,255,255,0))"
                  : "none",
              pointerEvents: "none",
            },

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              borderRadius: "inherit",
              background:
                appearance === "glass"
                  ? isDark
                    ? "rgba(255,255,255,0.28)"
                    : "rgba(255,255,255,0.70)"
                  : "transparent",
              pointerEvents: "none",
            },
          };
        },

        /*
         * =====================================
         * DASHED / BUFFER
         * =====================================
         */

        dashed: ({ ownerState }) => {
          const radius = (ownerState.radius ?? "pill") as ProgressRadius;

          return {
            borderRadius: radiusMap[radius],

            opacity: 0.5,
          };
        },
      },
    },
  };
};
