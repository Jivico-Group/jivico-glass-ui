import { liquidGlassPopupRecipe } from "../glassRecipe.js";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getSelectOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          "& .MuiPaper-root": { ...liquidGlassPopupRecipe(isDark), maxHeight: "320px !important", overflowY: "auto !important" },
          "& .MuiList-root": { backgroundColor: "transparent !important", backgroundImage: "none !important", padding: "4px !important" },
          "& .MuiMenuItem-root": {
            minHeight: "28px",
            padding: "5px 10px",
            fontSize: "0.8125rem",
            borderRadius: "8px",
            color: palette.text.primary,
            transition: "all 0.15s ease",
            gap: "8px",
            "&:hover": { backgroundColor: `${palette.glass.menuItemHover} !important` },
            "&.Mui-selected": {
              backgroundColor: `${palette.action.selected} !important`,
              color: `${palette.primary.main} !important`,
              fontWeight: 600,
              "&:hover": { backgroundColor: `${palette.glass.menuItemHover} !important` },
            },
          },
        },
      },
    },
    styleOverrides: {
      select: {
        borderRadius: 9999,
        "&.MuiSelect-outlined": {
          paddingLeft: "16px !important",
          paddingRight: "36px !important",
        },
        "&.MuiSelect-outlined.MuiInputBase-inputSizeSmall": {
          paddingLeft: "14px !important",
          paddingRight: "32px !important",
          paddingTop: "6px !important",
          paddingBottom: "6px !important",
        },
      },
      icon: {
        color: palette.text.secondary,
        right: "12px",
        transition: "transform 0.2s ease, color 0.2s ease",
      },
      iconOpen: {
        transform: "rotate(180deg)",
      },
    },
  },
});
