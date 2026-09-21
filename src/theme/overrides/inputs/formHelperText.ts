import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getFormHelperTextOverrides = (
  palette: JivicoPalette,
): Components<Theme> => ({
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = ownerState?.color as keyof typeof palette;
        const isSemantic =
          colorKey === "success" ||
          colorKey === "warning" ||
          colorKey === "error" ||
          colorKey === "info";
        const semanticColor =
          isSemantic && palette[colorKey]
            ? (palette[colorKey] as Record<string, string>).main
            : palette.text.secondary;

        return {
          fontSize: "0.78rem",
          marginLeft: 14,
          marginTop: 4,
          color: semanticColor,
          "&.Mui-error": {
            color: palette.error.main,
          },
        };
      },
    },
  },
});
