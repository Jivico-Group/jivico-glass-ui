import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";
import { COLORS } from "../../colors/index.js";

type AlertColor = "primary" | "secondary" | "accent" | "glass";
type AlertAppearance = "solid" | "tonal" | "glass" | "outlined";
type AlertRadius = "square" | "small" | "medium" | "large" | "rounded" | "pill";
type GlassIntensity = "subtle" | "medium" | "strong" | "ultra";
type AlertSeverity = "success" | "info" | "warning" | "error";

export const getAlertOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const radiusMap: Record<AlertRadius, number> = {
    square: 0,
    small: 8,
    medium: 12,
    large: 18,
    rounded: 24,
    pill: 9999,
  };

  const blurMap: Record<GlassIntensity, string> = {
    subtle: "blur(8px)",
    medium: "blur(14px)",
    strong: "blur(20px)",
    ultra: "blur(28px)",
  };

  /*
   * Resolve semantic severity colors from the Jivico palette.
   */
  const getSeverityColor = (severity: AlertSeverity) => {
    switch (severity) {
      case "success":
        return palette.success;

      case "warning":
        return palette.warning;

      case "error":
        return palette.error;

      case "info":
      default:
        return palette.info;
    }
  };

  /*
   * Resolve RGB values for the translucent glass background.
   *
   * Uses the existing Jivico alert RGB tokens.
   */
  const getSeverityRgb = (severity: AlertSeverity) => {
    switch (severity) {
      case "success":
        return COLORS.alertRgb.success;

      case "warning":
        return isDark
          ? COLORS.alertRgb.warningDark
          : COLORS.alertRgb.warningLight;

      case "error":
        return COLORS.alertRgb.error;

      case "info":
      default:
        return COLORS.alertRgb.info;
    }
  };

  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const severity = (ownerState.severity ?? "info") as AlertSeverity;

          const color = (ownerState.color ?? "glass") as AlertColor;

          const appearance = (ownerState.appearance ??
            "glass") as AlertAppearance;

          const radius = (ownerState.radius ?? "large") as AlertRadius;

          const glassIntensity = (ownerState.glassIntensity ??
            "strong") as GlassIntensity;

          const glow = ownerState.glow ?? true;

          const severityPalette = getSeverityColor(severity);

          /*
           * When using a Jivico semantic color,
           * use that color instead of severity.
           */
          const alertColor =
            color === "glass" ? severityPalette : palette[color];

          const mainColor = alertColor.main;

          const rgb = getSeverityRgb(severity);

          const bgOpacity = isDark ? 0.12 : 0.08;

          let backgroundColor = palette.glass.alertBg;

          /*
           * SOLID
           */
          if (appearance === "solid") {
            backgroundColor = mainColor;
          }

          /*
           * TONAL
           */
          if (appearance === "tonal") {
            backgroundColor = `rgba(${rgb}, ${isDark ? 0.18 : 0.1})`;
          }

          /*
           * GLASS
           */
          if (appearance === "glass") {
            backgroundColor = `rgba(${rgb}, ${bgOpacity})`;
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

            padding: "10px 16px",

            fontWeight: 500,

            fontSize: "0.9375rem",

            lineHeight: 1.5,

            color: appearance === "solid" ? alertColor.contrastText : mainColor,

            backgroundColor,

            border: "1px solid",

            borderColor:
              appearance === "outlined"
                ? mainColor
                : appearance === "glass"
                  ? `rgba(${rgb}, ${isDark ? 0.32 : 0.22})`
                  : appearance === "tonal"
                    ? `rgba(${rgb}, ${isDark ? 0.3 : 0.2})`
                    : "transparent",

            /*
             * Glass treatment.
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
             * Subtle depth.
             */
            boxShadow:
              appearance === "glass"
                ? isDark
                  ? "inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "inset 0 1px 0 rgba(255,255,255,0.65)"
                : glow && appearance !== "outlined"
                  ? `0 4px 18px rgba(${rgb}, ${isDark ? 0.16 : 0.08})`
                  : "none",

            /*
             * Glass highlight.
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
                      "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 55%)",

                    opacity: isDark ? 0.8 : 1,
                  }
                : undefined,

            /*
             * Keep all content above the glass layer.
             */
            "& > *": {
              position: "relative",
              zIndex: 1,
            },

            /*
             * Alert icon.
             */
            "& .MuiAlert-icon": {
              color:
                appearance === "solid" ? alertColor.contrastText : mainColor,

              opacity: 1,

              paddingTop: 2,
            },

            /*
             * Alert message.
             */
            "& .MuiAlert-message": {
              padding: "2px 0",
            },

            /*
             * Close button.
             */
            "& .MuiAlert-action": {
              paddingTop: 0,
              paddingRight: 0,

              "& .MuiIconButton-root": {
                color:
                  appearance === "solid" ? alertColor.contrastText : mainColor,

                transition: "background-color 180ms ease, transform 180ms ease",

                "&:hover": {
                  backgroundColor:
                    appearance === "solid"
                      ? "rgba(255,255,255,0.12)"
                      : `rgba(${rgb}, ${isDark ? 0.12 : 0.08})`,
                },

                "&:active": {
                  transform: "scale(0.94)",
                },
              },
            },

            /*
             * Alert title.
             */
            "& .MuiAlertTitle-root": {
              marginBottom: 2,

              fontWeight: 700,

              color:
                appearance === "solid" ? alertColor.contrastText : mainColor,
            },
          };
        },
      },
    },
  };
};
