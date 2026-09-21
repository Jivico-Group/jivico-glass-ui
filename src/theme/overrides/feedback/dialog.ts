import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

declare module "@mui/material/Dialog" {
  interface DialogProps {
    /**
     * Enables Jivico glass surface.
     *
     * Default: false
     */
    glass?: boolean;
  }
}

export const getDialogOverrides = (
  _palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiDialog: {
    defaultProps: {
      disableScrollLock: false,
    },

    styleOverrides: {
      root: {
        /**
         * Dialog positioning
         */
        "& .MuiDialog-container": {
          padding: {
            xs: 1.5,
            sm: 2,
            md: 3,
          },
        },
      },

      /**
       * --------------------------------------------------
       * NORMAL + GLASS DIALOG
       * --------------------------------------------------
       */
      paper: ({ ownerState }) => {
        const glass = ownerState.glass === true;

        /**
         * -----------------------------------------------
         * Normal surface
         * -----------------------------------------------
         */
        const normalBackground = isDark ? "#18181B" : "#FFFFFF";

        const normalColor = isDark ? "#F5F5F7" : "#111111";

        /**
         * -----------------------------------------------
         * Glass surface
         * -----------------------------------------------
         */
        const glassBackground = isDark
          ? "rgba(24, 24, 27, 0.72)"
          : "rgba(255, 255, 255, 0.52)";

        const glassColor = isDark ? "#F5F5F7" : "#111111";

        /**
         * -----------------------------------------------
         * Border
         * -----------------------------------------------
         */
        const borderColor = glass
          ? isDark
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(255, 255, 255, 0.85)"
          : isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)";

        /**
         * -----------------------------------------------
         * Shadow
         * -----------------------------------------------
         */
        const shadow = isDark
          ? "0 24px 70px rgba(0, 0, 0, 0.45)"
          : "0 24px 70px rgba(0, 0, 0, 0.14)";

        return {
          position: "relative",

          width: "100%",

          overflow: "hidden",

          /**
           * Simple radius.
           */
          borderRadius: 24,

          /**
           * Normal / Glass surface
           */
          backgroundColor: glass ? glassBackground : normalBackground,

          color: glass ? glassColor : normalColor,

          border: `1px solid ${borderColor}`,

          boxShadow: shadow,

          /**
           * ---------------------------------------------
           * Glass only
           * ---------------------------------------------
           */
          ...(glass && {
            backdropFilter: "blur(32px) saturate(180%)",

            WebkitBackdropFilter: "blur(32px) saturate(180%)",
          }),

          /**
           * ---------------------------------------------
           * Glass highlight
           * ---------------------------------------------
           */
          ...(glass && {
            "&::before": {
              content: '""',

              position: "absolute",

              inset: 0,

              pointerEvents: "none",

              background: isDark
                ? `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.08) 0%,
                    rgba(255,255,255,0.025) 45%,
                    transparent 100%
                  )
                `
                : `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.55) 0%,
                    rgba(255,255,255,0.12) 45%,
                    transparent 100%
                  )
                `,

              zIndex: 0,
            },

            /**
             * Top specular edge.
             */
            "&::after": {
              content: '""',

              position: "absolute",

              top: 0,
              left: 0,
              right: 0,

              height: 1,

              pointerEvents: "none",

              background: isDark
                ? "rgba(255,255,255,0.16)"
                : "rgba(255,255,255,0.95)",

              zIndex: 2,
            },
          }),

          /**
           * ---------------------------------------------
           * Keep Dialog content above glass effects.
           * ---------------------------------------------
           */
          "& > *": {
            position: "relative",
            zIndex: 1,
          },

          /**
           * ---------------------------------------------
           * Dialog title
           * ---------------------------------------------
           */
          "& .MuiDialogTitle-root": {
            color: "inherit",
          },

          /**
           * ---------------------------------------------
           * Dialog content
           * ---------------------------------------------
           */
          "& .MuiDialogContent-root": {
            color: "inherit",
          },

          /**
           * ---------------------------------------------
           * Dialog content text
           * ---------------------------------------------
           */
          "& .MuiDialogContentText-root": {
            color: glass
              ? isDark
                ? "rgba(245,245,247,0.72)"
                : "rgba(17,17,17,0.68)"
              : isDark
                ? "rgba(245,245,247,0.70)"
                : "rgba(17,17,17,0.68)",
          },

          /**
           * ---------------------------------------------
           * Dialog actions
           * ---------------------------------------------
           */
          "& .MuiDialogActions-root": {
            position: "relative",
            zIndex: 1,
          },
        };
      },
    },
  },
});
