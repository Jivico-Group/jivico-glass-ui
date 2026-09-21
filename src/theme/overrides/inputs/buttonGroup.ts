import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
}

export const getButtonGroupOverrides = (
  isDark: boolean,
): Components<Theme> => ({
  MuiButtonGroup: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const isContained = ownerState.variant === "contained";
        const isOutlined = ownerState.variant === "outlined";
        return {
          boxShadow: "none",
          borderRadius: 9999,
          ...(isContained && {
            overflow: "hidden",
            "& .MuiButton-root": {
              borderRadius: 0,
              border: "none !important",
            },
            "& .MuiButton-root + .MuiButton-root": {
              borderLeft: `1px solid ${
                isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"
              } !important`,
            },
          }),

          ...(isOutlined && {
            overflow: "visible",
            border: `1.5px solid ${
              isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.3)"
            }`,
            "& .MuiButton-root": {
              borderRadius: 0,
              border: "none !important",
              boxShadow: "none !important",
              background: "transparent",

              "&:hover": {
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(17,17,17,0.05)",
                boxShadow: "none !important",
                transform: "none",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: "none !important",
              },
            },

            "& .MuiButton-root:first-of-type": {
              borderTopLeftRadius: "9999px !important",
              borderBottomLeftRadius: "9999px !important",
            },

            "& .MuiButton-root:last-of-type": {
              borderTopRightRadius: "9999px !important",
              borderBottomRightRadius: "9999px !important",
            },

            "& .MuiButton-root + .MuiButton-root": {
              borderLeft: `1px solid ${
                isDark ? "rgba(255,255,255,0.2)" : "rgba(17,17,17,0.2)"
              } !important`,
            },
          }),
        };
      },
    },
  },
});
