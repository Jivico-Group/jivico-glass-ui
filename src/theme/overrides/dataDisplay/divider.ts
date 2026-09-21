import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getDividerOverrides = (
  palette: JivicoPalette,
): Components<Theme> => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.divider,
      },
    },
  },
});
