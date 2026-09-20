import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../palette.js";
import {
  glassAppBarRecipe,
  LiquidDialogDrawerRecipe,
  liquidGlassPopupRecipe,
} from "./glassRecipe.js";

/**
 * MUI component overrides — Navigation:
 * AppBar, Toolbar, Tabs, Tab, Drawer, Menu, MenuItem, PaginationItem
 */
export const getNavigationOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  // ========================================================================
  // APP BAR — luxury glassmorphism (recipe shared via glassRecipe.ts)
  // ========================================================================
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        ...glassAppBarRecipe(isDark),
        color: palette.text.primary,
        transition:
          "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      },
      colorTransparent: {
        ...glassAppBarRecipe(isDark),
      },
      colorDefault: {
        ...glassAppBarRecipe(isDark),
      },
      colorInherit: {
        ...glassAppBarRecipe(isDark),
      },
    },
  },

  // ========================================================================
  // TOOLBAR
  // ========================================================================
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "56px !important",
        paddingLeft: "24px !important",
        paddingRight: "24px !important",
      },
    },
  },

  MuiTabs: {
    defaultProps: {
      textColor: "primary",
      indicatorColor: "primary",
      size: "medium",
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const isSmall = (ownerState as any).size === "small";
        const isScrollable = ownerState.variant === "scrollable";
        return {
          minHeight: isSmall ? 32 : 44,
          height: isSmall ? 32 : "auto",
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "#ECEAE5", // Brand Kit Sand #D9D9CF warm tinted track
          borderRadius: 9999, // Brand Kit fully rounded pill track
          padding: isSmall ? "3px" : "4px",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.04)"
          }`,
          display: ownerState.variant === "fullWidth" ? "flex" : "inline-flex",
          width: ownerState.variant === "fullWidth" ? "100%" : "fit-content",
          maxWidth: "100%",
          boxShadow: isDark
            ? "inset 0 1px 3px rgba(0,0,0,0.35)"
            : "inset 0 1px 2px rgba(0,0,0,0.04)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxSizing: "border-box",
          position: "relative",
          isolation: "isolate",
          overflow: isScrollable ? "hidden" : "visible",
          "& .MuiTabs-scroller": {
            position: "relative",
            borderRadius: 9999,
            overflow: isScrollable ? "auto !important" : "visible !important",
            height: "100%",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
          "& .MuiTabs-flexContainer": {
            position: "relative",
            zIndex: 2,
            gap: 0,
            height: "100%",
            alignItems: "center",
          },
          "& .MuiTabs-scrollButtons": {
            color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 17, 17, 0.7)",
            borderRadius: 9999,
            width: isSmall ? 24 : 32,
            height: isSmall ? 24 : 32,
            minWidth: isSmall ? 24 : 32,
            alignSelf: "center",
            zIndex: 3,
            "&.Mui-disabled": {
              opacity: 0.3,
            },
          },
          ...(isSmall && {
            "& .MuiTab-root": {
              minHeight: 26,
              height: 26,
              fontSize: "0.78rem",
              padding: "4px 14px",
              minWidth: 64,
            },
          }),
        };
      },
      indicator: ({ ownerState }) => {
        const isGlass = (ownerState.indicatorColor as string) === "glass";
        return {
          height: "100%",
          top: 0,
          bottom: 0,
          borderRadius: 9999, // Brand Kit fully rounded floating pill
          backgroundColor: isGlass
            ? isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(255, 255, 255, 0.75)"
            : isDark
              ? "#F6F5F2"
              : "#FFFFFF",
          border: isGlass
            ? `1px solid ${isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.9)"}`
            : isDark
              ? "none"
              : "1px solid rgba(0, 0, 0, 0.03)",
          boxShadow: isGlass
            ? isDark
              ? "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)"
              : "0 3px 12px rgba(0,0,0,0.06), inset 0 1px 0 #FFFFFF"
            : isDark
              ? "0 4px 16px rgba(0, 0, 0, 0.45)"
              : "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)", // Exact drop shadow sampled from Brand Kit image
          ...(isGlass && {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }),
          zIndex: 1,
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        };
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
      size: "medium",
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const isGlass = (ownerState.textColor as string) === "secondary";
        const isSmall = (ownerState as any).size === "small";
        return {
          position: "relative",
          zIndex: 2,
          textTransform: "none",
          fontFamily:
            '"Montserrat", "Google Sans Flex", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: isSmall ? "0.78rem" : "0.84rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.2,
          minHeight: isSmall ? 26 : 36,
          height: isSmall ? 26 : 36,
          minWidth: isSmall ? 64 : 80,
          borderRadius: 9999,
          padding: isSmall ? "4px 14px" : "8px 22px",
          color: isDark ? "rgba(255, 255, 255, 0.62)" : "#686868", // Brand Stone #686868
          transition:
            "color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          userSelect: "none",

          "&:hover": {
            color: isDark ? "#F6F5F2" : "#111111",
            backgroundColor: "transparent",
          },

          "&:active": {
            transform: "scale(0.98)",
          },

          "&.Mui-selected": {
            fontWeight: 600,
            color: isDark ? (isGlass ? "#F6F5F2" : "#111111") : "#111111", // High contrast Charcoal #111111 on Cream / White floating pill!
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },

          "&.Mui-disabled": {
            color: isDark
              ? "rgba(255, 255, 255, 0.25)"
              : "rgba(104, 104, 104, 0.35)",
            opacity: 0.6,
          },
        };
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        ...LiquidDialogDrawerRecipe(isDark),
        ...(ownerState.anchor === "bottom" && {
          borderBottom: "none",
          borderLeft: "none",
          borderRight: "none",
          borderTopLeftRadius: "28px !important",
          borderTopRightRadius: "28px !important",
          borderBottomLeftRadius: "0 !important",
          borderBottomRightRadius: "0 !important",
        }),
        ...(ownerState.anchor === "top" && {
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderTopLeftRadius: "0 !important",
          borderTopRightRadius: "0 !important",
          borderBottomLeftRadius: "28px !important",
          borderBottomRightRadius: "28px !important",
        }),
        ...(ownerState.anchor === "left" && {
          borderLeft: "none",
          borderTop: "none",
          borderBottom: "none",
          borderTopLeftRadius: "0 !important",
          borderBottomLeftRadius: "0 !important",
          borderTopRightRadius: "10px !important",
          borderBottomRightRadius: "10px !important",
        }),
        ...(ownerState.anchor === "right" && {
          borderRight: "none",
          borderTop: "none",
          borderBottom: "none",
          borderTopRightRadius: "0 !important",
          borderBottomRightRadius: "0 !important",
          borderTopLeftRadius: "10px !important",
          borderBottomLeftRadius: "10px !important",
        }),
      }),
    },
  },

  MuiPopover: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark),
      },
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        ...liquidGlassPopupRecipe(isDark),
        maxHeight: "400px",
        overflowY: "auto",
      },
      list: {
        backgroundColor: "transparent !important",
        backgroundImage: "none !important",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: "5px 10px",
        minHeight: "28px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        transition: "all 0.15s ease",
        gap: "8px",
        "&.MuiMenuItem-dense": {
          minHeight: "24px",
          padding: "3px 8px",
          fontSize: "0.775rem",
        },
        "&:hover": {
          backgroundColor: palette.glass.menuItemHover,
        },
        "&.Mui-selected": {
          backgroundColor: palette.action.selected,
          color: palette.primary.main,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: palette.glass.menuItemHover,
          },
        },
      },
    },
  },
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
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        "&.Mui-selected": {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
          "&:hover": {
            backgroundColor: palette.secondary.hover,
          },
        },
      },
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        padding: "24px 0",
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.18)"
          : "rgba(17, 17, 17, 0.16)",
        borderTopWidth: 2,
        borderRadius: 1,
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(17, 17, 17, 0.14)",
        transition: "all 0.2s ease",
        "&.Mui-active": {
          color: palette.text.primary,
          filter: isDark
            ? `drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))`
            : `drop-shadow(0 0 6px rgba(17, 17, 17, 0.18))`,
          "& .MuiStepIcon-text": {
            fill: isDark ? "#111111" : "#FFFFFF",
          },
        },
        "&.Mui-completed": {
          color: palette.text.primary,
          "& .MuiStepIcon-text": {
            fill: isDark ? "#111111" : "#FFFFFF",
          },
        },
      },
      text: {
        fill: isDark ? "#FFFFFF" : "#111111",
        fontWeight: 700,
        fontSize: "0.75rem",
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: isDark ? "rgba(255, 255, 255, 0.72)" : "rgba(17, 17, 17, 0.72)",
        transition: "all 0.2s ease",
        "&.Mui-active": {
          color: palette.text.primary,
          fontWeight: 700,
        },
        "&.Mui-completed": {
          color: palette.text.primary,
          fontWeight: 600,
        },
      },
    },
  },
});
