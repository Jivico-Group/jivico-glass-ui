import type { Components, Theme } from "@mui/material/styles";
import { COLORS } from "../colors.js";
import type { JivicoPalette } from "../palette.js";

/**
 * MUI component overrides — Selection Controls:
 * Checkbox, Radio, Switch, Slider, ToggleButton
 */
export const getControlOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiCheckbox: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        color: palette.glass.inputBorderHover,
        "&.Mui-checked": {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: palette.glass.inputBorderHover,
        "&.Mui-checked": {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        // Resolve the correct color from the palette, fallback to primary
        const colorName = ownerState.color && ownerState.color !== "default" ? ownerState.color : "primary";
        const trackColor = (theme.palette as any)[colorName]?.main || palette.primary.main;

        return {
          width: 40,
          height: 20,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: isDark ? "#1D1D1F" : COLORS.white,
              "& + .MuiSwitch-track": {
                backgroundColor: trackColor,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled": {
                color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                "& + .MuiSwitch-track": {
                  opacity: 0.3,
                },
              },
            },
            "&.Mui-disabled": {
              "& + .MuiSwitch-track": {
                opacity: 0.3,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
            boxShadow: palette.glass.switchShadow,
          },
          "& .MuiSwitch-track": {
            borderRadius: 20 / 2,
            backgroundColor: palette.glass.switchTrack,
            opacity: 1,
          },
        };
      },
      sizeSmall: {
        width: 32,
        height: 18,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(14px)",
          },
        },
        "& .MuiSwitch-thumb": {
          width: 14,
          height: 14,
        },
        "& .MuiSwitch-track": {
          borderRadius: 18 / 2,
        },
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        color: palette.primary.main,
        height: 6,
        padding: "13px 0",
      },
      thumb: {
        height: 14,
        width: 14,
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        "&:hover, &.Mui-focusVisible": {
          boxShadow: `0px 0px 0px 6px ${palette.primary.glow}`,
        },
        "&::before": {
          display: "none",
        },
      },
      track: {
        border: "none",
        height: 6,
        borderRadius: 3,
      },
      rail: {
        opacity: 0.2,
        backgroundColor: isDark ? "#fff" : "#000",
        height: 6,
        borderRadius: 3,
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
