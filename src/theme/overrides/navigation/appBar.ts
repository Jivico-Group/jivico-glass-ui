import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";
import { glassAppBarRecipe } from "../glassRecipe.js";

export const getAppBarOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
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
});
