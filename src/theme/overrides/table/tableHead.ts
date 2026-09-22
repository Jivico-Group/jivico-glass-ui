import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { TableColor } from "./table.js";

export const getTableHeadOverrides = (
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
    ? "rgba(255, 255, 255, 0.045)"
    : "rgba(255, 255, 255, 0.42)";

  const colorMap: Record<TableColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  return {
    MuiTableHead: {
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
            "& .MuiTableRow-root": {
              backgroundColor: isGlass
                ? glassBackground
                : isDark
                  ? "rgba(255, 255, 255, 0.045)"
                  : "rgba(17, 17, 17, 0.035)",
            },

            "& .MuiTableCell-root": {
              position: "relative",
              color: text,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              borderBottom: `1px solid ${
                isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.10)"
                    : "rgba(255, 255, 255, 0.64)"
                  : divider
              }`,

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

              "&.MuiTableCell-paddingCheckbox": {
                width: 48,
                paddingLeft: 8,
                paddingRight: 8,
              },

              "& .MuiTableSortLabel-root": {
                color: secondaryText,
                transition: "color 160ms ease, opacity 160ms ease",

                "&:hover": {
                  color: text,
                },

                "&.Mui-active": {
                  color: color,
                },

                "& .MuiTableSortLabel-icon": {
                  color: color,
                  opacity: 0.75,
                  transition: "color 160ms ease, opacity 160ms ease",
                },

                "&.Mui-active .MuiTableSortLabel-icon": {
                  color: color,
                  opacity: 1,
                },

                "&:focus-visible": {
                  outline: `2px solid ${color}`,
                  outlineOffset: 2,
                  borderRadius: 4,
                },
              },
            },

            "& .MuiTableCell-root:first-of-type": {
              paddingLeft: 16,
            },

            "& .MuiTableCell-root:last-of-type": {
              paddingRight: 16,
            },
          };
        },
      },
    },
  };
};
