import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

type CardColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "glass";

type CardRadius = "none" | "small" | "medium" | "large" | "full";

interface JivicoCardOwnerState {
  color?: CardColor;
  radius?: CardRadius;
  hover?: boolean;
  variant?: "elevation" | "outlined" | "tonal";
}

interface CardColors {
  background: string;
  border: string;
  hoverBackground: string;
  hoverBorder: string;
}

const getCardColor = (
  palette: JivicoPalette,
  color: CardColor,
  isDark: boolean,
): CardColors => {
  const colors: Record<CardColor, CardColors> = {
    /*
     * -----------------------------------------
     * PRIMARY
     * -----------------------------------------
     *
     * Theme-aware neutral surface.
     *
     * Light → white
     * Dark  → dark surface
     */
    primary: {
      background: isDark ? "#161616" : "#FFFFFF",

      border: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.10)",

      hoverBackground: isDark ? "#1C1C1C" : "#FAFAFA",

      hoverBorder: isDark
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(17, 17, 17, 0.16)",
    },

    /*
     * -----------------------------------------
     * SECONDARY
     * -----------------------------------------
     *
     * Slightly differentiated neutral surface.
     */
    secondary: {
      background: isDark ? "#202020" : "#F6F5F2",

      border: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)",

      hoverBackground: isDark ? "#262626" : "#F0EFEC",

      hoverBorder: isDark
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(17, 17, 17, 0.14)",
    },

    /*
     * -----------------------------------------
     * ACCENT
     * -----------------------------------------
     */
    accent: {
      background: palette.accent.main,

      border: palette.accent.main,

      hoverBackground: palette.accent.hover,

      hoverBorder: palette.accent.hover,
    },

    /*
     * -----------------------------------------
     * INFO
     * -----------------------------------------
     */
    info: {
      background: palette.info.main,

      border: palette.info.main,

      hoverBackground: palette.info.hover,

      hoverBorder: palette.info.hover,
    },

    /*
     * -----------------------------------------
     * SUCCESS
     * -----------------------------------------
     */
    success: {
      background: palette.success.main,

      border: palette.success.main,

      hoverBackground: palette.success.hover,

      hoverBorder: palette.success.hover,
    },

    /*
     * -----------------------------------------
     * WARNING
     * -----------------------------------------
     */
    warning: {
      background: palette.warning.main,

      border: palette.warning.main,

      hoverBackground: palette.warning.hover,

      hoverBorder: palette.warning.hover,
    },

    /*
     * -----------------------------------------
     * ERROR
     * -----------------------------------------
     */
    error: {
      background: palette.error.main,

      border: palette.error.main,

      hoverBackground: palette.error.hover,

      hoverBorder: palette.error.hover,
    },

    /*
     * -----------------------------------------
     * GLASS
     * -----------------------------------------
     *
     * Glass remains an explicit Card choice.
     * It is not used by default.
     */
    glass: {
      background: isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(255, 255, 255, 0.72)",

      border: isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.10)",

      hoverBackground: isDark
        ? "rgba(255, 255, 255, 0.11)"
        : "rgba(255, 255, 255, 0.86)",

      hoverBorder: isDark
        ? "rgba(255, 255, 255, 0.20)"
        : "rgba(17, 17, 17, 0.14)",
    },
  };

  return colors[color];
};

export const getCardOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiCard: {
    /*
     * -----------------------------------------
     * DEFAULT PROPS
     * -----------------------------------------
     */
    defaultProps: {
      elevation: 0,

      color: "primary",

      radius: "medium",

      hover: false,
    },

    /*
     * -----------------------------------------
     * STYLE OVERRIDES
     * -----------------------------------------
     */
    styleOverrides: {
      root: ({ ownerState }) => {
        const state = ownerState as JivicoCardOwnerState;

        const cardColor = state.color || "primary";

        const radius = state.radius || "medium";

        const hover = state.hover === true;

        const variant = state.variant || "elevation";

        const colors = getCardColor(palette, cardColor, isDark);

        /*
         * -----------------------------------------
         * RADIUS
         * -----------------------------------------
         */
        const radiusMap: Record<CardRadius, number> = {
          none: 0,
          small: 6,
          medium: 10,
          large: 16,
          full: 9999,
        };

        /*
         * Semantic colors need tonal treatment.
         */
        const isSemantic =
          cardColor === "accent" ||
          cardColor === "info" ||
          cardColor === "success" ||
          cardColor === "warning" ||
          cardColor === "error";

        const styles: Record<string, any> = {
          position: "relative",

          overflow: "hidden",

          /*
           * -----------------------------------------
           * RADIUS
           * -----------------------------------------
           */
          borderRadius: radiusMap[radius],

          /*
           * -----------------------------------------
           * SURFACE
           * -----------------------------------------
           */
          backgroundColor: colors.background,

          backgroundImage: "none",

          /*
           * Keep Card from inheriting
           * Paper elevation.
           */
          boxShadow: "none",

          /*
           * -----------------------------------------
           * BORDER
           * -----------------------------------------
           */
          border: `1px solid ${colors.border}`,

          /*
           * -----------------------------------------
           * TRANSITION
           * -----------------------------------------
           *
           * Only add a transition when the
           * Card explicitly supports hover.
           */
          transition: hover
            ? [
                "background-color 180ms ease",
                "border-color 180ms ease",
                "transform 180ms ease",
                "box-shadow 180ms ease",
              ].join(", ")
            : "none",

          /*
           * -----------------------------------------
           * MUI PAPER ELEVATION RESET
           * -----------------------------------------
           *
           * Card extends Paper internally.
           * Explicitly remove its elevation.
           */
          "&.MuiPaper-elevation": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation0": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation1": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation2": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation3": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation4": {
            boxShadow: "none",
          },

          "&.MuiPaper-elevation5": {
            boxShadow: "none",
          },

          /*
           * -----------------------------------------
           * NATIVE MUI SQUARE
           * -----------------------------------------
           *
           * <Card square />
           */
          "&.MuiPaper-square": {
            borderRadius: 0,
          },
        };

        /*
         * -----------------------------------------
         * OPTIONAL HOVER
         * -----------------------------------------
         *
         * Nothing happens by default.
         *
         * <Card />
         *     → no hover
         *
         * <Card hover />
         *     → hover enabled
         */
        if (hover) {
          styles.cursor = "pointer";

          styles["&:hover"] = {
            backgroundColor: colors.hoverBackground,

            borderColor: colors.hoverBorder,

            transform: "translateY(-2px)",

            boxShadow: isDark
              ? "0 8px 24px rgba(0, 0, 0, 0.28)"
              : "0 8px 24px rgba(0, 0, 0, 0.08)",
          };

          styles["&:active"] = {
            transform: "translateY(-1px)",
          };
        }

        /*
         * -----------------------------------------
         * TONAL VARIANT
         * -----------------------------------------
         *
         * <Card variant="tonal" />
         *
         * Semantic colors become softer versions
         * of their base color.
         */
        if (variant === "tonal") {
          styles.backgroundColor = isSemantic
            ? isDark
              ? `color-mix(in srgb, ${colors.background} 16%, transparent)`
              : `color-mix(in srgb, ${colors.background} 8%, white)`
            : colors.background;

          styles.borderColor = isSemantic
            ? isDark
              ? `color-mix(in srgb, ${colors.border} 35%, transparent)`
              : `color-mix(in srgb, ${colors.border} 20%, white)`
            : colors.border;

          styles.boxShadow = "none";
        }

        /*
         * -----------------------------------------
         * GLASS
         * -----------------------------------------
         *
         * Glass is intentionally opt-in:
         *
         * <Card color="glass" />
         */
        if (cardColor === "glass") {
          styles.backdropFilter = "blur(14px)";

          styles.WebkitBackdropFilter = "blur(14px)";
        }

        return styles;
      },
    },

    /*
     * -----------------------------------------
     * VARIANTS
     * -----------------------------------------
     */
    variants: [
      {
        props: {
          variant: "tonal",
        },

        style: {
          boxShadow: "none",
        },
      },
    ],
  },
});
