import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getDialogContentOverrides = (
  palette: JivicoPalette,
  isDark?: boolean,
): Components<Theme> => ({
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily:
          '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',

        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: 1.3,
        letterSpacing: "-0.025em",

        padding: "20px 24px 10px",

        color: palette.text.primary,

        "& + .MuiDialogContent-root": {
          paddingTop: 8,
        },
        "& .MuiIconButton-root": {
          width: 36,
          height: 36,
          borderRadius: 12,

          color: palette.text.secondary,

          backgroundColor: isDark
            ? "rgba(255,255,255,.055)"
            : "rgba(17,17,17,.045)",

          border: `1px solid ${
            isDark ? "rgba(255,255,255,.08)" : "rgba(17,17,17,.08)"
          }`,

          transition: "all 180ms cubic-bezier(.2,.8,.2,1)",

          "&:hover": {
            color: palette.text.primary,

            backgroundColor: isDark
              ? "rgba(255,255,255,.10)"
              : "rgba(17,17,17,.08)",

            transform: "scale(1.04)",
          },

          "&:active": {
            transform: "scale(.96)",
          },
        },
      },
    },
  },

  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "14px 24px 20px",

        color: palette.text.secondary,

        fontSize: "0.9375rem",
        lineHeight: 1.6,

        "&:first-of-type": {
          paddingTop: 16,
        },

        "&::-webkit-scrollbar": {
          width: 6,
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: isDark
            ? "rgba(255,255,255,.16)"
            : "rgba(17,17,17,.14)",
          borderRadius: 999,
        },

        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      },
    },
  },

  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "14px 24px 20px",

        gap: 10,

        borderTop: `1px solid ${
          isDark ? "rgba(255,255,255,.07)" : "rgba(17,17,17,.07)"
        }`,

        "& .MuiButton-root": {
          minHeight: 42,
          borderRadius: 12,
        },
      },
    },
  },
});
