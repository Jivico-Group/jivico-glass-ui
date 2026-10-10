import { glassAppBarRecipe } from "../glassRecipe.js";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";

export const getAppBarOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => {
  const standardBackground = isDark ? "#12141A" : "#FFFFFF";
  const standardBorder = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)";
  const standardShadow = isDark ? "0 4px 20px -2px rgba(0, 0, 0, 0.45)" : "0 2px 12px -2px rgba(17, 17, 17, 0.06)";

  return {
    MuiAppBar: {
      defaultProps: {
        // elevation: 0,
        surface: "glass",
      },

      styleOverrides: {
        root: ({ ownerState }) => {
          const isExplicitStandard =
            ownerState.surface === "standard" || ownerState.glass === false || ownerState.glass === "false";

          if (isExplicitStandard) {
            return {
              backgroundColor: standardBackground,
              backgroundImage: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: `1px solid ${standardBorder}`,
              boxShadow: standardShadow,
              borderRadius: 0,
              color: palette.text.primary,
              transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            };
          }

          return {
            ...glassAppBarRecipe(isDark),
            color: palette.text.primary,
            transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          };
        },

        colorTransparent: ({ ownerState }) => {
          if (ownerState.surface === "standard" || ownerState.glass === false || ownerState.glass === "false") {
            return {
              backgroundColor: "transparent",
              backgroundImage: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              boxShadow: "none",
              borderBottom: "none",
            };
          }

          return {
            ...glassAppBarRecipe(isDark),
          };
        },

        colorDefault: ({ ownerState }) => {
          if (ownerState.surface === "standard" || ownerState.glass === false || ownerState.glass === "false") {
            return {
              backgroundColor: standardBackground,
              backgroundImage: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              borderBottom: `1px solid ${standardBorder}`,
              boxShadow: standardShadow,
            };
          }

          return {
            ...glassAppBarRecipe(isDark),
          };
        },

        colorInherit: ({ ownerState }) => {
          if (ownerState.surface === "standard" || ownerState.glass === false || ownerState.glass === "false") {
            return {
              backgroundColor: "inherit",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            };
          }

          return {
            ...glassAppBarRecipe(isDark),
          };
        },
      },
    },
  };
};
