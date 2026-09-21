import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";
import { liquidGlassPopupRecipe } from "../glassRecipe";

export const getAutocompleteOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiAutocomplete: {
    defaultProps: {
      slotProps: {
        paper: {
          elevation: 0,
        },
      },
    },
    styleOverrides: {
      popper: {
        zIndex: 1400,
      },
      paper: {
        ...liquidGlassPopupRecipe(isDark),
      },
      listbox: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",
        padding: "4px !important",
      },
      option: {
        borderRadius: 10,
        padding: "7px 12px",
        margin: "1px 0",
        fontSize: "0.875rem",
        color: palette.text.primary,
        transition: "all 0.15s ease",
        '&[data-focus="true"]': {
          backgroundColor: `${palette.glass.menuItemHover} !important`,
        },
        '&[aria-selected="true"]': {
          backgroundColor: `${palette.action.selected} !important`,
          color: `${palette.primary.main} !important`,
          fontWeight: 600,
          '&[data-focus="true"]': {
            backgroundColor: `${palette.action.selected} !important`,
          },
        },
      },
      noOptions: {
        color: palette.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important",
      },
      loading: {
        color: palette.text.secondary,
        fontSize: "0.875rem",
        padding: "12px 16px",
        backgroundColor: "transparent !important",
      },
      tag: {
        margin: "3px",
      },
      clearIndicator: {
        color: palette.text.secondary,
        "&:hover": {
          color: palette.text.primary,
        },
      },
      popupIndicator: {
        color: palette.text.secondary,
        "&:hover": {
          color: palette.text.primary,
        },
      },
    },
  },
});
