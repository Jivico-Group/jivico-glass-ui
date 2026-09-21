import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getPaginationOverrides = (
  palette: JivicoPalette,
): Components<Theme> => ({
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,

        "&.Mui-selected": {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,

          "&:hover": {
            backgroundColor: palette.secondary.hover,
          },
        },
      },
    },
  },
});
