import type { Components, Theme } from "@mui/material/styles";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const TRANSITION = [`border-color 180ms ${EASE}`, `box-shadow 220ms ${EASE}`, `transform 180ms ${EASE}`].join(", ");

export const getButtonGroupOverrides = (isDark: boolean): Components<Theme> => ({
  MuiButtonGroup: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const variant = ownerState.variant || "outlined";

        return {
          boxShadow: "none",
          borderRadius: 9999,

          "& .MuiButtonGroup-grouped": {
            position: "relative",
            zIndex: 0,

            /*
             * Keep the exact Button dimensions and visual styling
             * from MuiButton.
             */
            borderRadius: 0,

            transition: TRANSITION,

            "&:focus-visible": {
              zIndex: 3,
            },

            "&:hover": {
              zIndex: 2,
            },

            "&:active": {
              zIndex: 2,
            },

            "&.Mui-disabled": {
              zIndex: 0,
            },
          },

          /*
           * CONTAINED
           */
          ...(variant === "contained" && {
            "& .MuiButtonGroup-grouped": {
              boxShadow: "none",

              "&:first-of-type": {
                borderTopLeftRadius: 9999,
                borderBottomLeftRadius: 9999,
              },

              "&:last-of-type": {
                borderTopRightRadius: 9999,
                borderBottomRightRadius: 9999,
                borderRight: "none",
              },

              "&:not(:last-of-type)": {
                borderRight: isDark ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(255,255,255,0.35)",
              },

              "&:hover": {
                zIndex: 2,
              },

              "&.Mui-selected": {
                zIndex: 2,
              },
            },
          }),

          /*
           * OUTLINED
           */
          ...(variant === "outlined" && {
            "& .MuiButtonGroup-grouped": {
              "&:first-of-type": {
                borderTopLeftRadius: 9999,
                borderBottomLeftRadius: 9999,
              },

              "&:last-of-type": {
                borderTopRightRadius: 9999,
                borderBottomRightRadius: 9999,
              },

              "&:not(:first-of-type)": {
                marginLeft: -1,
              },

              "&:hover": {
                zIndex: 2,
              },

              "&.Mui-selected": {
                zIndex: 2,
              },

              "&.Mui-selected + .MuiButtonGroup-grouped": {
                borderLeftColor: "transparent",
              },
            },
          }),

          /*
           * TEXT
           */
          ...(variant === "text" && {
            "& .MuiButtonGroup-grouped": {
              borderRadius: 9999,

              "&:not(:last-of-type)": {
                marginRight: 2,
              },

              "&:hover": {
                zIndex: 2,
              },

              "&.Mui-selected": {
                zIndex: 2,
              },
            },
          }),

          /*
           * REDUCED MOTION
           */
          "@media (prefers-reduced-motion: reduce)": {
            "& .MuiButtonGroup-grouped": {
              transition: "none",
              transform: "none",

              "&:hover": {
                transform: "none",
              },

              "&:active": {
                transform: "none",
              },
            },
          },
        };
      },
    },
  },
});
