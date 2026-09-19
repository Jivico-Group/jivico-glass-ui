import type { Components, Theme } from "@mui/material/styles";
import { COLORS } from "../colors.js";
import type { JivicoPalette } from "../palette.js";
import {
  LiquidDialogDrawerRecipe,
  liquidGlassPopupRecipe,
} from "./glassRecipe.js";

/**
 * MUI component overrides — Feedback:
 * Alert, Dialog, Skeleton, LinearProgress, Tooltip
 */
export const getFeedbackOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiAlert: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const severity = ownerState.severity || "info";
        const alertColor = (palette[
          severity === "warning"
            ? "warning"
            : severity === "error"
              ? "error"
              : severity === "success"
                ? "success"
                : "info"
        ] || palette.info) as Record<string, string>;
        const bgOpacity = isDark ? 0.12 : 0.08;

        return {
          borderRadius: 18,
          backdropFilter: "blur(16px)",
          fontWeight: 500,
          fontSize: "0.9375rem",
          border: "1px solid",
          backgroundColor: isDark
            ? `rgba(${severity === "success" ? COLORS.alertRgb.success : severity === "warning" ? COLORS.alertRgb.warningDark : severity === "error" ? COLORS.alertRgb.error : COLORS.alertRgb.info}, ${bgOpacity})`
            : `rgba(${severity === "success" ? COLORS.alertRgb.success : severity === "warning" ? COLORS.alertRgb.warningLight : severity === "error" ? COLORS.alertRgb.error : COLORS.alertRgb.info}, ${bgOpacity})`,
          borderColor: alertColor.main,
          color: alertColor.main,
        };
      },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        "&.MuiModal-root": {
          overflow: "hidden",
        },
      },
    },
  },

  MuiDialog: {
    defaultProps: {
      disableScrollLock: false,
    },
    styleOverrides: {
      paper: {
        ...LiquidDialogDrawerRecipe(isDark),
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily:
          '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
        fontWeight: 700,
        fontSize: "1.25rem",
        letterSpacing: "-0.02em",
        padding: "16px 20px 8px",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "12px 20px",
        color: palette.text.secondary,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "12px 20px 16px",
        gap: "10px",
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        backgroundColor: palette.glass.skeletonBg,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        height: 6,
        backgroundColor: palette.glass.progressBg,
      },
      bar: {
        borderRadius: 9999,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palette.glass.tooltipBg,
        backdropFilter: "saturate(180%) blur(32px)",
        WebkitBackdropFilter: "saturate(180%) blur(32px)",
        border: `1px solid ${palette.glass.tooltipBorder}`,
        boxShadow: palette.glass.tooltipShadow,
        color: isDark ? "#1D1D1F" : "#F5F5F7",
        borderRadius: 12,
        padding: "8px 12px",
        fontSize: "0.8125rem",
        fontWeight: 600,
      },
      arrow: {
        color: palette.glass.tooltipBg,
        "&::before": {
          border: `1px solid ${palette.glass.tooltipBorder}`,
          backgroundColor: palette.glass.tooltipBg,
          boxSizing: "border-box",
        },
      },
    },
  },
});
