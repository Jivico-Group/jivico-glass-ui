import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getFabOverrides = (palette: JivicoPalette): Components<Theme> => ({
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        boxShadow: palette.glass.fabShadow,
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-3px) scale(1.03)",
        },
        "&:active": {
          transform: "translateY(0) scale(0.97)",
        },
      },
    },
  },
});
