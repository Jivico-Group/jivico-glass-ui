import type { Components, Theme } from "@mui/material/styles";
import { COLORS } from "../colors/index.js";
import type { JivicoPalette } from "../palette/index.js";

declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    accent: true;
    glass: true;
  }
}

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    accent: true;
    glass: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

/**
 * MUI component overrides — Selection Controls:
 * Checkbox, Radio, Switch, Slider, ToggleButton
 */
// Helper to resolve control colors across primary, secondary (stone), glass, and semantics
const resolveControlColors = (
  colorName: string,
  isDark: boolean,
  palette: JivicoPalette,
  theme: any,
) => {
  if (colorName === "glass") {
    return {
      active: isDark ? "#F6F5F2" : "#111111",
      glow: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.08)",
      track: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.45)",
    };
  }
  if (colorName === "secondary") {
    return {
      active: isDark ? "#A0A09B" : COLORS.brand.stone, // #686868 Warm Stone
      glow: isDark ? "rgba(160, 160, 155, 0.3)" : "rgba(104, 104, 104, 0.25)",
      track: isDark ? "#8A8A82" : COLORS.brand.stone, // #686868 Warm Stone
    };
  }
  if (colorName === "default") {
    return {
      active: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 17, 17, 0.65)",
      glow: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.08)",
      track: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(17, 17, 17, 0.45)",
    };
  }
  const pal = (theme.palette as any)[colorName];
  return {
    active: pal?.main || palette.primary.main,
    glow: pal?.glow || palette.primary.glow,
    track: pal?.main || palette.primary.main,
  };
};

export const getControlOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiCheckbox: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = (ownerState.color as string) || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(
          colorName,
          isDark,
          palette,
          theme,
        );

        return {
          borderRadius: 8,
          color: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
          padding: 8,
          transition:
            "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(17, 17, 17, 0.04)",
          },
          "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            color: resolved.active,
            ...(isGlass && {
              filter: isDark
                ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))"
                : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))",
            }),
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${resolved.glow}`,
          },
          "&.Mui-disabled": {
            color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
          },
        };
      },
    },
  },

  MuiRadio: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = (ownerState.color as string) || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(
          colorName,
          isDark,
          palette,
          theme,
        );

        return {
          color: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 17, 17, 0.3)",
          padding: 8,
          transition:
            "color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(17, 17, 17, 0.04)",
          },
          "&.Mui-checked": {
            color: resolved.active,
            ...(isGlass && {
              filter: isDark
                ? "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.25))"
                : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18))",
            }),
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${resolved.glow}`,
          },
          "&.Mui-disabled": {
            color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
          },
        };
      },
    },
  },

  MuiSwitch: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = (ownerState.color as string) || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(
          colorName,
          isDark,
          palette,
          theme,
        );

        const thumbCheckedColor = isGlass
          ? "#FFFFFF"
          : colorName === "primary"
            ? isDark
              ? "#1D1D1F"
              : COLORS.white
            : COLORS.white;

        return {
          width: 44,
          height: 24,
          padding: 0,
          display: "flex",
          "& .MuiSwitch-switchBase": {
            padding: 3,
            color: isDark ? "#F6F5F2" : COLORS.white,
            transitionDuration: "200ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: thumbCheckedColor,
              "& + .MuiSwitch-track": {
                backgroundColor: resolved.track,
                opacity: 1,
                border: isGlass
                  ? `1px solid ${isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.2)"}`
                  : 0,
                ...(isGlass && {
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }),
              },
              "&.Mui-disabled": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(0, 0, 0, 0.3)",
                "& + .MuiSwitch-track": {
                  opacity: 0.3,
                },
              },
            },
            "&.Mui-disabled": {
              color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
              "& + .MuiSwitch-track": {
                opacity: 0.3,
              },
            },
            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(17, 17, 17, 0.04)",
            },
          },
          "& .MuiSwitch-thumb": {
            width: 18,
            height: 18,
            borderRadius: 9,
            boxShadow: isDark
              ? "0 2px 6px rgba(0, 0, 0, 0.6)"
              : "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            ...(isGlass && {
              border: isDark
                ? "1px solid rgba(255, 255, 255, 0.4)"
                : "1px solid rgba(255, 255, 255, 0.8)",
            }),
          },
          "& .MuiSwitch-track": {
            borderRadius: 24 / 2,
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(17, 17, 17, 0.14)",
            opacity: 1,
            border: isDark
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(0, 0, 0, 0.06)",
            transition:
              "background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          },
        };
      },
      sizeSmall: {
        width: 34,
        height: 18,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(16px)",
          },
        },
        "& .MuiSwitch-thumb": {
          width: 14,
          height: 14,
          borderRadius: 7,
        },
        "& .MuiSwitch-track": {
          borderRadius: 18 / 2,
        },
      },
    },
  },

  MuiSlider: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const colorName = (ownerState.color as string) || "primary";
        const isGlass = colorName === "glass";
        const resolved = resolveControlColors(
          colorName,
          isDark,
          palette,
          theme,
        );

        return {
          color: resolved.active,
          height: 6,
          padding: "13px 0",
          "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: isDark ? "#1E2025" : "#FFFFFF",
            border: `2px solid ${resolved.active}`,
            boxShadow: isDark
              ? "0 2px 6px rgba(0, 0, 0, 0.5)"
              : "0 2px 6px rgba(0, 0, 0, 0.15)",
            transition: "box-shadow 0.15s ease",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 6px ${resolved.glow}`,
            },
            "&.Mui-active": {
              boxShadow: `0px 0px 0px 9px ${resolved.glow}`,
            },
            "&::before": {
              display: "none",
            },
          },
          "& .MuiSlider-track": {
            border: "none",
            height: 6,
            borderRadius: 3,
            backgroundColor: resolved.track,
          },
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.15)"
              : "rgba(17, 17, 17, 0.12)",
            height: 6,
            borderRadius: 3,
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: isDark
              ? "rgba(30, 32, 38, 0.9)"
              : "rgba(17, 17, 17, 0.9)",
            borderRadius: 6,
            fontSize: "0.75rem",
            fontWeight: 600,
            backdropFilter: "blur(8px)",
          },
        };
      },
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        gap: "10px",
        userSelect: "none",
        "& .MuiFormControlLabel-label": {
          fontSize: "0.875rem",
          fontWeight: 500,
          color: palette.text.primary,
        },
      },
    },
  },

  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        padding: "6px 16px",
        border: `1px solid ${palette.glass.paperBorder}`,
        color: palette.text.secondary,
        transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
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
});
