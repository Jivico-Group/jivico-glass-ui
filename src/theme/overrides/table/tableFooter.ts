import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { TableColor } from "./table.js";

export const getTableFooterOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const secondaryText = isDark
    ? "rgba(246, 245, 242, 0.62)"
    : "rgba(17, 17, 17, 0.62)";

  const divider = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(17, 17, 17, 0.08)";

  const glassBackground = isDark
    ? "rgba(255, 255, 255, 0.025)"
    : "rgba(255, 255, 255, 0.32)";

  const colorMap: Record<TableColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  return {
    MuiTableFooter: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: TableColor;
            variant?: "standard" | "glass";
          };

          const color = colorMap[state.color ?? "primary"];
          const variant = state.variant ?? "standard";
          const isGlass = variant === "glass";

          return {
            backgroundColor: isGlass ? glassBackground : "transparent",

            "& .MuiTableRow-root": {
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: "transparent",
              },
            },

            "& .MuiTableCell-root": {
              color: secondaryText,
              fontWeight: 500,
              verticalAlign: "middle",
              borderTop: `1px solid ${
                isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.10)"
                    : "rgba(17, 17, 17, 0.08)"
                  : divider
              }`,
              borderBottom: 0,

              "&.MuiTableCell-alignLeft": {
                textAlign: "left",
              },

              "&.MuiTableCell-alignCenter": {
                textAlign: "center",
              },

              "&.MuiTableCell-alignRight": {
                textAlign: "right",
                fontVariantNumeric: "tabular-nums",
              },

              "&:first-of-type": {
                paddingLeft: 16,
              },

              "&:last-of-type": {
                paddingRight: 16,
              },
            },

            "& .MuiTablePagination-root": {
              color: secondaryText,
              minHeight: 52,

              "& .MuiTablePagination-toolbar": {
                minHeight: 52,
                paddingLeft: 12,
                paddingRight: 12,
              },

              "& .MuiTablePagination-selectLabel": {
                color: secondaryText,
                margin: 0,
              },

              "& .MuiTablePagination-displayedRows": {
                color: secondaryText,
                margin: 0,
              },

              "& .MuiTablePagination-select": {
                color: text,
              },

              "& .MuiTablePagination-input": {
                color: text,
              },

              "& .MuiTablePagination-actions": {
                marginLeft: 12,
              },

              "& .MuiIconButton-root": {
                color: secondaryText,
                transition: "color 160ms ease, background-color 160ms ease",

                "&:hover": {
                  color,
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(17, 17, 17, 0.05)",
                },

                "&.Mui-disabled": {
                  color: isDark
                    ? "rgba(246, 245, 242, 0.25)"
                    : "rgba(17, 17, 17, 0.25)",
                },

                "&.Mui-focusVisible": {
                  outline: `2px solid ${color}`,
                  outlineOffset: 2,
                },
              },
            },

            "& .MuiSelect-select": {
              color: text,
            },

            "& .MuiInputBase-root": {
              color: text,

              "&:before": {
                borderBottomColor: divider,
              },

              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: color,
              },

              "&.Mui-focused:after": {
                borderBottomColor: color,
              },
            },
          };
        },
      },
    },
  };
};
