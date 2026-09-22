import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getMenuPaperOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const divider = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(17, 17, 17, 0.08)";

  const standardBackground = isDark ? "#1B1B1B" : "#FFFFFF";

  const glassBackground = isDark
    ? "rgba(255, 255, 255, 0.075)"
    : "rgba(255, 255, 255, 0.72)";

  const glassBorder = isDark
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(255, 255, 255, 0.78)";

  const glassShadow = isDark
    ? "0 18px 45px rgba(0, 0, 0, 0.30)"
    : "0 18px 45px rgba(17, 17, 17, 0.10)";

  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: text,
          backgroundColor: standardBackground,
          backgroundImage: "none",
          border: `1px solid ${divider}`,
          borderRadius: 12,
          boxShadow: isDark
            ? "0 14px 36px rgba(0, 0, 0, 0.28)"
            : "0 14px 36px rgba(17, 17, 17, 0.10)",
          overflow: "hidden",

          "&[data-jivico-menu-variant='glass']": {
            backgroundColor: glassBackground,
            border: `1px solid ${glassBorder}`,
            borderRadius: 14,
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: glassShadow,
          },

          "& .MuiMenu-list": {
            color: text,
          },

          "& .MuiDivider-root": {
            borderColor: glassBorder,
          },
        },
      },
    },
  };
};
