import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { TableColor } from "./table.js";

export const getTableBodyOverrides = (
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
    MuiTableBody: {
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
              position: "relative",
              transition: "background-color 160ms ease, box-shadow 160ms ease",

              "& .MuiTableCell-root": {
                color: text,
                borderBottom: `1px solid ${
                  isGlass
                    ? isDark
                      ? "rgba(255, 255, 255, 0.065)"
                      : "rgba(17, 17, 17, 0.065)"
                    : divider
                }`,
                verticalAlign: "middle",
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
            },

            "& .MuiTableCell-body": {
              color: text,
              fontWeight: 400,

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

              "&:first-of-type": {
                paddingLeft: 16,
              },

              "&:last-of-type": {
                paddingRight: 16,
              },
            },

            "& .MuiTableCell-body .MuiTypography-root": {
              color: "inherit",
            },

            "& .MuiTableCell-body .MuiTypography-colorTextSecondary": {
              color: secondaryText,
            },

            "& .MuiTableCell-body .MuiLink-root": {
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

            "& .MuiTableCell-body .MuiCheckbox-root": {
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
          };
        },
      },
    },
  };
};
