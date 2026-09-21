import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";
import { liquidGlassPopupRecipe } from "../glassRecipe.js";

export const getSelectOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          "& .MuiPaper-root": {
            ...liquidGlassPopupRecipe(isDark),
            maxHeight: "320px !important",
            overflowY: "auto !important",
          },
          "& .MuiList-root": {
            backgroundColor: "transparent !important",
            backgroundImage: "none !important",
            padding: "4px !important",
          },
          "& .MuiMenuItem-root": {
            minHeight: "28px",
            padding: "5px 10px",
            fontSize: "0.8125rem",
            borderRadius: "8px",
            color: palette.text.primary,
            transition: "all 0.15s ease",
            gap: "8px",
            "&:hover": {
              backgroundColor: `${palette.glass.menuItemHover} !important`,
            },
            "&.Mui-selected": {
              backgroundColor: `${palette.action.selected} !important`,
              color: `${palette.primary.main} !important`,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: `${palette.glass.menuItemHover} !important`,
              },
            },
          },
        },
      },
    },
    styleOverrides: {
      icon: {
        color: palette.text.secondary,
        transition: "transform 0.2s ease, color 0.2s ease",
      },
    },
  },
});
