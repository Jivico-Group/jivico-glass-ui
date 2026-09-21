import type { Components, Theme } from "@mui/material/styles";
import { LiquidDialogDrawerRecipe } from "../glassRecipe.js";

export const getDrawerOverrides = (isDark: boolean): Components<Theme> => ({
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        ...LiquidDialogDrawerRecipe(isDark),

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
      }),
    },
  },
});
