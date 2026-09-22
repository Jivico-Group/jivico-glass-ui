import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { TableColor } from "./table.js";

export const getTableCellOverrides = (
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

  const colorMap: Record<TableColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  return {
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: TableColor;
            variant?: "standard" | "glass";
            size?: "small" | "medium";
          };

          const color = colorMap[state.color ?? "primary"];
          const variant = state.variant ?? "standard";
          const isGlass = variant === "glass";

          const size = state.size ?? "medium";

          const padding = size === "small" ? "7px 10px" : "11px 14px";

          const fontSize = size === "small" ? "0.8125rem" : "0.875rem";

          return {
            padding,
            fontSize,
            color: text,
            borderBottom: `1px solid ${
              isGlass
                ? isDark
                  ? "rgba(255, 255, 255, 0.065)"
                  : "rgba(17, 17, 17, 0.065)"
                : divider
            }`,
            verticalAlign: "middle",
            lineHeight: 1.45,

            "&.MuiTableCell-head": {
              fontSize: size === "small" ? "0.72rem" : "0.75rem",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: text,
            },

            "&.MuiTableCell-body": {
              fontWeight: 400,
            },

            "&.MuiTableCell-footer": {
              fontWeight: 500,
              color: secondaryText,
              borderBottom: 0,
              borderTop: `1px solid ${
                isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.10)"
                    : "rgba(17, 17, 17, 0.08)"
                  : divider
              }`,
            },

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

            "&.MuiTableCell-paddingNone": {
              padding: 0,
            },

            "&.MuiTableCell-paddingCheckbox": {
              width: 48,
              paddingLeft: 8,
              paddingRight: 8,
            },

            "&:first-of-type": {
              paddingLeft: size === "small" ? 12 : 16,
            },

            "&:last-of-type": {
              paddingRight: size === "small" ? 12 : 16,
            },

            "& .MuiTypography-root": {
              color: "inherit",
            },

            "& .MuiTypography-colorTextSecondary": {
              color: secondaryText,
            },

            "& .MuiLink-root": {
              color,
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 160ms ease",

              "&:hover": {
                textDecoration: "underline",
              },

              "&:focus-visible": {
                outline: `2px solid ${color}`,
                outlineOffset: 2,
                borderRadius: 4,
              },
            },

            "& .MuiIconButton-root": {
              color: secondaryText,

              "&:hover": {
                color,
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(17, 17, 17, 0.05)",
              },

              "&.Mui-focusVisible": {
                outline: `2px solid ${color}`,
                outlineOffset: 2,
              },
            },

            "& .MuiCheckbox-root": {
              color: secondaryText,

              "&.Mui-checked": {
                color,
              },

              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(17, 17, 17, 0.05)",
              },

              "&.Mui-focusVisible": {
                outline: `2px solid ${color}`,
                outlineOffset: 2,
              },
            },

            "& .MuiTableSortLabel-root": {
              color: secondaryText,

              "&:hover": {
                color: text,
              },

              "&.Mui-active": {
                color,
              },

              "& .MuiTableSortLabel-icon": {
                color,
              },
            },
          };
        },
      },
    },
  };
};
