import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";
import { liquidGlassPopupRecipe } from "../glassRecipe";

export const getPaperOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,

        backgroundColor: isDark ? "#161616" : "#FFFFFF",

        backgroundImage: "none",

        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
        }`,

        boxShadow: "none",

        /*
         * Floating surfaces keep the dedicated
         * Jivico glass treatment.
         */
        "&.MuiPopover-paper, &.MuiMenu-paper, &.MuiAutocomplete-paper": {
          ...liquidGlassPopupRecipe(isDark),
        },

        /*
         * Remove MUI elevation from Paper.
         */
        "&.MuiPaper-elevation": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation0": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation1": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation2": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation3": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation4": {
          boxShadow: "none",
        },

        "&.MuiPaper-elevation5": {
          boxShadow: "none",
        },

        /*
         * Native MUI square prop.
         */
        "&.MuiPaper-square": {
          borderRadius: 0,
        },
      },
    },

    variants: [
      {
        props: {
          variant: "glassFooter" as any,
        },

        style: {
          backgroundColor: palette.glass.appBarBg,

          backgroundImage: "none",

          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          borderTop: `1px solid ${palette.glass.chipBorder}`,
          borderRight: "none",
          borderBottom: "none",
          borderLeft: "none",

          borderRadius: 0,

          paddingTop: "64px",
          paddingBottom: "32px",

          marginTop: "auto",

          color: palette.text.primary,

          boxShadow: "none",
        },
      },
    ],
  },
});
