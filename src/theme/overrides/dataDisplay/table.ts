import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getTableOverrides = (
  palette: JivicoPalette,
): Components<Theme> => ({
  MuiTable: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        overflow: "hidden",
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${palette.glass.tableBorder}`,
        padding: "14px 20px",
        color: palette.text.primary,
      },

      head: {
        fontWeight: 600,
        color: palette.text.secondary,
        backgroundColor: palette.glass.tableHeadBg,
        textTransform: "uppercase",
        fontSize: "0.75rem",
        letterSpacing: "0.04em",
      },
    },
  },
});
