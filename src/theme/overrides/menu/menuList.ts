import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getMenuListOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const divider = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(17, 17, 17, 0.08)";

  return {
    MuiMenuList: {
      styleOverrides: {
        root: {
          color: text,
          outline: "none",

          "&:focus": {
            outline: "none",
          },

          "& .MuiDivider-root": {
            borderColor: divider,
          },

          "& .MuiMenuItem-root + .MuiDivider-root": {
            marginTop: 4,
          },

          "& .MuiDivider-root + .MuiMenuItem-root": {
            marginTop: 4,
          },

          "& .MuiMenuItem-root": {
            "&:focus-visible": {
              outline: `2px solid ${palette.primary.main}`,
              outlineOffset: -2,
            },
          },
        },
      },
    },
  };
};
