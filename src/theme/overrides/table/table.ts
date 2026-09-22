import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export type TableColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error";

export type TableVariant = "standard" | "glass";

export const getTableOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const normalText = isDark ? "#F6F5F2" : "#111111";

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

  const glassBackground = isDark
    ? "rgba(255, 255, 255, 0.055)"
    : "rgba(255, 255, 255, 0.62)";

  const glassBorder = isDark
    ? "rgba(255, 255, 255, 0.10)"
    : "rgba(255, 255, 255, 0.72)";

  const glassShadow = isDark
    ? "0 14px 40px rgba(0, 0, 0, 0.24)"
    : "0 14px 40px rgba(17, 17, 17, 0.07)";

  const colorMap: Record<
    TableColor,
    {
      main: string;
      header: string;
      hover: string;
      selected: string;
    }
  > = {
    primary: {
      main: palette.primary.main,
      header: isDark ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
      hover: isDark ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
      selected: isDark ? "rgba(255, 255, 255, 0.11)" : "rgba(17, 17, 17, 0.08)",
    },

    secondary: {
      main: palette.secondary.main,
      header: isDark ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
      hover: isDark ? "rgba(255, 255, 255, 0.055)" : "rgba(17, 17, 17, 0.045)",
      selected: isDark ? "rgba(255, 255, 255, 0.11)" : "rgba(17, 17, 17, 0.08)",
    },

    accent: {
      main: palette.accent.main,
      header: isDark ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.055)",
      hover: isDark ? "rgba(255, 255, 255, 0.065)" : "rgba(17, 17, 17, 0.055)",
      selected: isDark
        ? "rgba(255, 255, 255, 0.13)"
        : "rgba(17, 17, 17, 0.095)",
    },

    success: {
      main: palette.success.main,
      header: isDark ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.065)",
      hover: isDark ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.065)",
      selected: isDark
        ? "rgba(16, 185, 129, 0.17)"
        : "rgba(16, 185, 129, 0.10)",
    },

    warning: {
      main: palette.warning.main,
      header: isDark ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.065)",
      hover: isDark ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.065)",
      selected: isDark
        ? "rgba(245, 158, 11, 0.17)"
        : "rgba(245, 158, 11, 0.10)",
    },

    error: {
      main: palette.error.main,
      header: isDark ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.065)",
      hover: isDark ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.065)",
      selected: isDark ? "rgba(239, 68, 68, 0.17)" : "rgba(239, 68, 68, 0.10)",
    },
  };

  const sizeMap: Record<
    "small" | "medium",
    {
      cellPadding: string;
      headerPadding: string;
      fontSize: string;
      headerFontSize: string;
    }
  > = {
    small: {
      cellPadding: "7px 10px",
      headerPadding: "8px 10px",
      fontSize: "0.8125rem",
      headerFontSize: "0.72rem",
    },

    medium: {
      cellPadding: "11px 14px",
      headerPadding: "12px 14px",
      fontSize: "0.875rem",
      headerFontSize: "0.75rem",
    },
  };

  return {
    MuiTable: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: TableColor;
            variant?: TableVariant;
            size?: "small" | "medium";
          };

          const color = colorMap[state.color ?? "primary"];
          const size = sizeMap[state.size ?? "medium"];
          const variant = state.variant ?? "standard";

          const isGlass = variant === "glass";

          return {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            color: normalText,

            ...(isGlass
              ? {
                  backgroundColor: glassBackground,
                  border: `1px solid ${glassBorder}`,
                  borderRadius: 18,
                  overflow: "hidden",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: glassShadow,
                }
              : {
                  backgroundColor: "transparent",
                }),

            "& .MuiTableCell-root": {
              padding: size.cellPadding,
              fontSize: size.fontSize,
              color: normalText,
              borderBottom: `1px solid ${divider}`,
            },

            "& .MuiTableHead-root .MuiTableCell-root": {
              padding: size.headerPadding,
              backgroundColor: isGlass
                ? "rgba(255, 255, 255, 0.04)"
                : color.header,
              color: normalText,
              fontSize: size.headerFontSize,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            },

            "& .MuiTableBody-root .MuiTableRow-root": {
              transition: "background-color 160ms ease",

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
                    : color.selected,
                },
              },
            },

            "& .MuiTableFooter-root": {
              "& .MuiTableCell-root": {
                color: secondaryText,
                fontWeight: 500,
                backgroundColor: isGlass
                  ? "rgba(255, 255, 255, 0.025)"
                  : "transparent",
              },
            },

            "& .MuiTableCell-head": {
              borderBottom: `1px solid ${isGlass ? glassBorder : divider}`,
            },

            "& .MuiTableCell-footer": {
              borderBottom: 0,
              borderTop: `1px solid ${isGlass ? glassBorder : divider}`,
            },

            "& .MuiTableCell-alignRight": {
              fontVariantNumeric: "tabular-nums",
            },

            "& .MuiTableCell-alignCenter": {
              verticalAlign: "middle",
            },

            "& .MuiTableRow-root:last-child .MuiTableCell-body": {
              borderBottom: 0,
            },

            "& .MuiTableRow-root:focus-visible": {
              outline: `2px solid ${color.main}`,
              outlineOffset: -2,
            },
          };
        },
      },
    },
  };
};
