import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { TableColor } from "./table.js";

export const getTableRowOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const divider = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(17, 17, 17, 0.08)";

  const hoverBackground = isDark
    ? "rgba(255, 255, 255, 0.045)"
    : "rgba(17, 17, 17, 0.035)";

  const selectedBackground = isDark
    ? "rgba(255, 255, 255, 0.09)"
    : "rgba(17, 17, 17, 0.07)";

  const colorMap: Record<TableColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  return {
    MuiTableRow: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: TableColor;
            variant?: "standard" | "glass";
            hover?: boolean;
            selected?: boolean;
          };

          const color = colorMap[state.color ?? "primary"];
          const variant = state.variant ?? "standard";
          const isGlass = variant === "glass";

          return {
            color: text,
            transition:
              "background-color 160ms ease, box-shadow 160ms ease, border-color 160ms ease",

            "& .MuiTableCell-root": {
              borderBottom: `1px solid ${
                isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.065)"
                    : "rgba(17, 17, 17, 0.065)"
                  : divider
              }`,
            },

            "&:hover": {
              backgroundColor: isGlass
                ? isDark
                  ? "rgba(255, 255, 255, 0.055)"
                  : "rgba(255, 255, 255, 0.46)"
                : hoverBackground,
            },

            "&.Mui-selected": {
              backgroundColor: isGlass
                ? isDark
                  ? "rgba(255, 255, 255, 0.10)"
                  : "rgba(255, 255, 255, 0.52)"
                : selectedBackground,

              "&:hover": {
                backgroundColor: isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.14)"
                    : "rgba(255, 255, 255, 0.62)"
                  : isDark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(17, 17, 17, 0.095)",
              },
            },

            "&:focus-visible": {
              outline: `2px solid ${color}`,
              outlineOffset: -2,
            },

            "&:last-child .MuiTableCell-body": {
              borderBottom: 0,
            },

            "&.MuiTableRow-hover:hover": {
              backgroundColor: isGlass
                ? isDark
                  ? "rgba(255, 255, 255, 0.055)"
                  : "rgba(255, 255, 255, 0.46)"
                : hoverBackground,
            },

            "& .MuiTableCell-root:first-of-type": {
              borderTopLeftRadius: 0,
            },

            "& .MuiTableCell-root:last-of-type": {
              borderTopRightRadius: 0,
            },
          };
        },

        head: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },

        footer: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
};
