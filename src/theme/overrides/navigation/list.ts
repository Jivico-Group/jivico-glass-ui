import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export type ListColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error";

export type ListVariant = "standard" | "glass";

declare module "@mui/material/List" {
  interface ListOwnProps {
    /**
     * Jivico semantic color.
     *
     * Controls selected and active states.
     *
     * Defaults to primary.
     */
    color?: ListColor;

    /**
     * Jivico List visual variant.
     *
     * - standard: clean theme-aware surface
     * - glass: frosted glass surface
     */
    variant?: ListVariant;
  }
}

export const getListOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const normalText = isDark ? "#F6F5F2" : "#111111";

  const secondaryText = isDark
    ? "rgba(246, 245, 242, 0.62)"
    : "rgba(17, 17, 17, 0.62)";

  const iconColor = isDark
    ? "rgba(246, 245, 242, 0.72)"
    : "rgba(17, 17, 17, 0.68)";

  const glassBackground = isDark
    ? "rgba(255, 255, 255, 0.06)"
    : "rgba(255, 255, 255, 0.62)";

  const glassBorder = isDark
    ? "rgba(255, 255, 255, 0.10)"
    : "rgba(255, 255, 255, 0.72)";

  const glassShadow = isDark
    ? "0 12px 40px rgba(0, 0, 0, 0.28)"
    : "0 12px 40px rgba(17, 17, 17, 0.08)";

  const colorMap: Record<
    ListColor,
    {
      main: string;
      soft: string;
      hover: string;
      active: string;
    }
  > = {
    primary: {
      main: palette.primary.main,
      soft: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)",
      hover: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.045)",
      active: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.09)",
    },

    secondary: {
      main: palette.secondary.main,
      soft: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)",
      hover: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.045)",
      active: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.09)",
    },

    accent: {
      main: palette.accent.main,
      soft: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.07)",
      hover: isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(17, 17, 17, 0.05)",
      active: isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.10)",
    },

    success: {
      main: palette.success.main,
      soft: isDark ? "rgba(16, 185, 129, 0.16)" : "rgba(16, 185, 129, 0.10)",
      hover: isDark ? "rgba(16, 185, 129, 0.10)" : "rgba(16, 185, 129, 0.06)",
      active: isDark ? "rgba(16, 185, 129, 0.22)" : "rgba(16, 185, 129, 0.14)",
    },

    warning: {
      main: palette.warning.main,
      soft: isDark ? "rgba(245, 158, 11, 0.16)" : "rgba(245, 158, 11, 0.10)",
      hover: isDark ? "rgba(245, 158, 11, 0.10)" : "rgba(245, 158, 11, 0.06)",
      active: isDark ? "rgba(245, 158, 11, 0.22)" : "rgba(245, 158, 11, 0.14)",
    },

    error: {
      main: palette.error.main,
      soft: isDark ? "rgba(239, 68, 68, 0.16)" : "rgba(239, 68, 68, 0.10)",
      hover: isDark ? "rgba(239, 68, 68, 0.10)" : "rgba(239, 68, 68, 0.06)",
      active: isDark ? "rgba(239, 68, 68, 0.22)" : "rgba(239, 68, 68, 0.14)",
    },
  };

  return {
    // ============================================================
    // LIST
    // ============================================================

    MuiList: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: ListColor;
            variant?: ListVariant;
          };

          const color = colorMap[state.color ?? "primary"];
          const variant = state.variant ?? "standard";

          const isGlass = variant === "glass";

          return {
            width: "100%",
            padding: 4,
            boxSizing: "border-box",
            color: normalText,

            ...(isGlass
              ? {
                  backgroundColor: glassBackground,
                  border: `1px solid ${glassBorder}`,
                  borderRadius: 18,
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: glassShadow,
                }
              : {
                  backgroundColor: "transparent",
                  border: "1px solid transparent",
                }),
          };
        },
      },
    },

    // ============================================================
    // LIST ITEM
    // ============================================================

    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 2,
          paddingBottom: 2,

          "&.MuiListItem-divider": {
            borderBottom: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
            }`,
          },
        },
      },
    },

    // ============================================================
    // LIST ITEM BUTTON
    // ============================================================

    MuiListItemButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          padding: "9px 12px",
          borderRadius: 12,

          color: normalText,

          transition:
            "background-color 160ms ease, color 160ms ease, transform 160ms ease",

          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(17, 17, 17, 0.045)",
          },

          "&:active": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(17, 17, 17, 0.09)",
          },

          "&:focus-visible": {
            outline: `2px solid ${palette.primary.main}`,
            outlineOffset: -2,
          },

          "&.Mui-selected": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(17, 17, 17, 0.06)",

            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(17, 17, 17, 0.09)",
            },

            "& .MuiListItemText-primary": {
              color: normalText,
              fontWeight: 650,
            },
          },

          "&.Mui-disabled": {
            opacity: 0.45,
          },
        },
      },
    },

    // ============================================================
    // LIST ITEM ICON
    // ============================================================

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
          color: iconColor,

          "& svg": {
            fontSize: 20,
          },
        },
      },
    },

    // ============================================================
    // LIST ITEM TEXT
    // ============================================================

    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 2,
          marginBottom: 2,
        },

        primary: {
          color: normalText,
          fontSize: "0.925rem",
          fontWeight: 500,
          lineHeight: 1.4,
        },

        secondary: {
          color: secondaryText,
          fontSize: "0.8125rem",
          lineHeight: 1.4,
          marginTop: 2,
        },
      },
    },

    // ============================================================
    // LIST ITEM AVATAR
    // ============================================================

    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 48,

          "& .MuiAvatar-root": {
            width: 36,
            height: 36,
            fontSize: "0.875rem",

            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.08)"
            }`,
          },
        },
      },
    },

    // ============================================================
    // LIST ITEM SECONDARY ACTION
    // ============================================================

    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 12,

          "& .MuiIconButton-root": {
            color: secondaryText,

            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(17, 17, 17, 0.06)",

              color: normalText,
            },

            "&:focus-visible": {
              outline: `2px solid ${palette.primary.main}`,
              outlineOffset: 2,
            },
          },
        },
      },
    },

    // ============================================================
    // LIST SUBHEADER
    // ============================================================

    MuiListSubheader: {
      styleOverrides: {
        root: {
          minHeight: 32,
          padding: "8px 12px 6px",

          backgroundColor: "transparent",

          color: isDark
            ? "rgba(246, 245, 242, 0.52)"
            : "rgba(17, 17, 17, 0.52)",

          fontSize: "0.7rem",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "0.12em",
          textTransform: "uppercase",

          "&.MuiListSubheader-sticky": {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",

            backgroundColor: isDark
              ? "rgba(17, 17, 17, 0.72)"
              : "rgba(246, 245, 242, 0.72)",
          },
        },
      },
    },
  };
};
