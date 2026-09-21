import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getListOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiList: {
    styleOverrides: {
      root: {
        padding: "3px",
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "2px 4px",
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "6px 10px",
        minHeight: "36px",
        transition: "all 0.2s ease",

        "&:hover": {
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.04)",
        },
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 34,
        color: palette.text.secondary,
      },
    },
  },

  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: 0,
      },

      primary: {
        fontSize: "0.875rem",
        fontWeight: 500,
      },

      secondary: {
        fontSize: "0.75rem",
      },
    },
  },
});
