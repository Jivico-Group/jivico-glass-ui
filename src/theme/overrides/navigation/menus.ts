import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";
import { liquidGlassPopupRecipe } from "../glassRecipe.js";

export const getMenuOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiPopover: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark),
      },
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark),
        maxHeight: "400px",
        overflowY: "auto",
      },

      list: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: "5px 10px",
        minHeight: "28px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        transition: "all 0.15s ease",
        gap: "8px",

        "&.MuiMenuItem-dense": {
          minHeight: "24px",
          padding: "3px 8px",
          fontSize: "0.775rem",
        },

        "&:hover": {
          backgroundColor: palette.glass.menuItemHover,
        },

        "&.Mui-selected": {
          backgroundColor: palette.action.selected,
          color: palette.primary.main,
          fontWeight: 600,

          "&:hover": {
            backgroundColor: palette.glass.menuItemHover,
          },
        },
      },
    },
  },
});
