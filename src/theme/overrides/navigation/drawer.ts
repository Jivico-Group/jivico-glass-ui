import type { Components, Theme } from "@mui/material/styles";

export const getDrawerOverrides = (isDark: boolean): Components<Theme> => ({
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => {
        const glass = ownerState.glass === true;

        /**
         * Normal surface
         */
        const normalBackground = isDark ? "#18181B" : "#FFFFFF";
        const normalColor = isDark ? "#F5F5F7" : "#111111";

        /**
         * Glass surface
         */
        const glassBackground = isDark
          ? "rgba(24, 24, 27, 0.72)"
          : "rgba(255, 255, 255, 0.72)";
        const glassColor = isDark ? "#F5F5F7" : "#111111";

        /**
         * Border
         */
        const borderColor = glass
          ? isDark
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(255, 255, 255, 0.85)"
          : isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)";

        /**
         * Shadow
         */
        const shadow = isDark
          ? "0 24px 70px rgba(0, 0, 0, 0.45)"
          : "0 24px 70px rgba(0, 0, 0, 0.14)";

        return {
          position: "relative",
          overflow: "hidden",

          backgroundColor: glass ? glassBackground : normalBackground,
          color: glass ? glassColor : normalColor,
          border: `1px solid ${borderColor}`,
          boxShadow: shadow,

          /**
           * Glass treatment
           */
          ...(glass && {
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: isDark
                ? `linear-gradient(
                    135deg,
                    rgba(255,255,255,0.08) 0%,
                    rgba(255,255,255,0.025) 45%,
                    transparent 100%
                  )`
                : `linear-gradient(
                    135deg,
                    rgba(255,255,255,0.55) 0%,
                    rgba(255,255,255,0.12) 45%,
                    transparent 100%
                  )`,
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
                ? "rgba(255,255,255,0.16)"
                : "rgba(255,255,255,0.95)",
              zIndex: 2,
            },
          }),

          "& > *": {
            position: "relative",
            zIndex: 1,
          },

          ...(ownerState.anchor === "bottom" && {
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
            borderTopLeftRadius: "28px !important",
            borderTopRightRadius: "28px !important",
            borderBottomLeftRadius: "0 !important",
            borderBottomRightRadius: "0 !important",
          }),

          ...(ownerState.anchor === "top" && {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderTopLeftRadius: "0 !important",
            borderTopRightRadius: "0 !important",
            borderBottomLeftRadius: "28px !important",
            borderBottomRightRadius: "28px !important",
          }),

          ...(ownerState.anchor === "left" && {
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
            borderTopLeftRadius: "0 !important",
            borderBottomLeftRadius: "0 !important",
            borderTopRightRadius: "10px !important",
            borderBottomRightRadius: "10px !important",
          }),

          ...(ownerState.anchor === "right" && {
            borderRight: "none",
            borderTop: "none",
            borderBottom: "none",
            borderTopRightRadius: "0 !important",
            borderBottomRightRadius: "0 !important",
            borderTopLeftRadius: "10px !important",
            borderBottomLeftRadius: "10px !important",
          }),
        };
      },
    },
  },
});
