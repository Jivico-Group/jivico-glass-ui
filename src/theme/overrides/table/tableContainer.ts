import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getTableContainerOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const glassBackground = isDark
    ? "rgba(255, 255, 255, 0.055)"
    : "rgba(255, 255, 255, 0.62)";

  const glassBorder = isDark
    ? "rgba(255, 255, 255, 0.10)"
    : "rgba(255, 255, 255, 0.72)";

  const glassShadow = isDark
    ? "0 14px 40px rgba(0, 0, 0, 0.24)"
    : "0 14px 40px rgba(17, 17, 17, 0.07)";

  const scrollbarTrack = isDark
    ? "rgba(255, 255, 255, 0.04)"
    : "rgba(17, 17, 17, 0.04)";

  const scrollbarThumb = isDark
    ? "rgba(255, 255, 255, 0.18)"
    : "rgba(17, 17, 17, 0.16)";

  const scrollbarThumbHover = isDark
    ? "rgba(255, 255, 255, 0.28)"
    : "rgba(17, 17, 17, 0.24)";

  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",

          scrollbarWidth: "thin",
          scrollbarColor: `${scrollbarThumb} ${scrollbarTrack}`,

          "&::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },

          "&::-webkit-scrollbar-track": {
            background: scrollbarTrack,
            borderRadius: 999,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: scrollbarThumb,
            borderRadius: 999,
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            transition: "background-color 160ms ease",

            "&:hover": {
              backgroundColor: scrollbarThumbHover,
            },
          },

          "&::-webkit-scrollbar-corner": {
            background: "transparent",
          },

          "&.MuiTableContainer-root": {
            "& .MuiTable-root": {
              minWidth: "100%",
            },
          },

          "&[data-sticky-header='true']": {
            "& .MuiTableHead-root": {
              position: "sticky",
              top: 0,
              zIndex: 2,
            },

            "& .MuiTableHead-root .MuiTableCell-root": {
              position: "sticky",
              top: 0,
              zIndex: 2,
            },
          },

          "&[data-glass='true']": {
            backgroundColor: glassBackground,
            border: `1px solid ${glassBorder}`,
            borderRadius: 18,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow: glassShadow,
            overflow: "auto",

            "& .MuiTable-root": {
              backgroundColor: "transparent",
            },
          },

          "&[data-glass='true'] .MuiTableHead-root": {
            backgroundColor: "transparent",
          },

          "&[data-glass='true'] .MuiTableHead-root .MuiTableCell-root": {
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          },
        },
      },
    },
  };
};
