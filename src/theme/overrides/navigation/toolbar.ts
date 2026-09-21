import type { Components, Theme } from "@mui/material/styles";

export const getToolbarOverrides = (): Components<Theme> => ({
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "56px !important",
        paddingLeft: "24px !important",
        paddingRight: "24px !important",
      },
    },
  },
});
