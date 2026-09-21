import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getAccordionOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        position: "relative",

        borderRadius: 12,

        backgroundColor: isDark ? "#161616" : "#FFFFFF",

        backgroundImage: "none",

        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.09)"
        }`,

        boxShadow: "none",

        overflow: "hidden",

        transition: "background-color 180ms ease, border-color 180ms ease",

        /*
         * Remove MUI's default Accordion divider.
         */
        "&:before": {
          display: "none",
        },

        /*
         * Very subtle interaction.
         * No transform and no shadow.
         */
        "&:hover": {
          backgroundColor: isDark ? "#191919" : "#FCFCFC",

          borderColor: isDark
            ? "rgba(255, 255, 255, 0.13)"
            : "rgba(17, 17, 17, 0.13)",
        },

        /*
         * Expanded state.
         */
        "&.Mui-expanded": {
          margin: "8px 0",

          backgroundColor: isDark ? "#181818" : "#FAFAFA",

          borderColor: isDark
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(17, 17, 17, 0.14)",
        },

        /*
         * Keep the outer corners clean when
         * multiple accordions are stacked.
         */
        "&:first-of-type": {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },

        "&:last-of-type": {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        },
      },
    },
  },
});
