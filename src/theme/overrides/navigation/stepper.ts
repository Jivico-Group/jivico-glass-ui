import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getStepperOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiStepper: {
    variants: [
      {
        props: { color: "primary" },
        style: {
          "--jivico-stepper-color": palette.primary.main,
          "--jivico-stepper-contrast": palette.primary.contrastText,
        },
      },
      {
        props: { color: "secondary" },
        style: {
          "--jivico-stepper-color": palette.secondary.main,
          "--jivico-stepper-contrast": palette.secondary.contrastText,
        },
      },
      {
        props: { color: "accent" },
        style: {
          "--jivico-stepper-color": palette.accent.main,
          "--jivico-stepper-contrast": palette.accent.contrastText,
        },
      },
      {
        props: { color: "info" },
        style: {
          "--jivico-stepper-color": palette.info.main,
          "--jivico-stepper-contrast": palette.info.contrastText,
        },
      },
      {
        props: { color: "success" },
        style: {
          "--jivico-stepper-color": palette.success.main,
          "--jivico-stepper-contrast": palette.success.contrastText,
        },
      },
    ],
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

      root: {
        "&.Mui-active .MuiStepConnector-line": {
          borderColor: "var(--jivico-stepper-color)",
        },

        "&.Mui-completed .MuiStepConnector-line": {
          borderColor: "var(--jivico-stepper-color)",
        },
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(17, 17, 17, 0.14)",

        transition: "all 0.2s ease",

        "&.Mui-active": {
          color: "var(--jivico-stepper-color)",
          filter:
            "drop-shadow(0 0 6px color-mix(in srgb, var(--jivico-stepper-color) 25%, transparent))",

          "& .MuiStepIcon-text": {
            fill: "var(--jivico-stepper-contrast)",
          },
        },

        "&.Mui-completed": {
          color: "var(--jivico-stepper-color)",

          "& .MuiStepIcon-text": {
            fill: "var(--jivico-stepper-contrast)",
          },
        },
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.875rem",
        fontWeight: 500,

        color: isDark ? "rgba(255, 255, 255, 0.72)" : "rgba(17, 17, 17, 0.72)",

        "&.Mui-active": {
          color: "var(--jivico-stepper-color)",
          fontWeight: 700,
        },

        "&.Mui-completed": {
          color: "var(--jivico-stepper-color)",
          fontWeight: 600,
        },
      },
    },
  },
});
