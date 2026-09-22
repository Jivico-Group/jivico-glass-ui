import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import type { MenuColor, MenuSize, MenuSurface } from "./menu.js";

export const getMenuItemOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const secondaryText = isDark
    ? "rgba(246, 245, 242, 0.62)"
    : "rgba(17, 17, 17, 0.62)";

  const colorMap: Record<MenuColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  const sizeMap: Record<
    MenuSize,
    {
      minHeight: number;
      padding: string;
      fontSize: string;
      radius: number;
      iconSize: number;
      gap: number;
    }
  > = {
    small: {
      minHeight: 34,
      padding: "6px 10px",
      fontSize: "0.8125rem",
      radius: 8,
      iconSize: 18,
      gap: 8,
    },
    medium: {
      minHeight: 42,
      padding: "9px 12px",
      fontSize: "0.875rem",
      radius: 10,
      iconSize: 20,
      gap: 10,
    },
  };

  return {
    MuiMenuItem: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const state = ownerState as {
            color?: MenuColor;
            surface?: MenuSurface;
            size?: MenuSize;
          };

          const color = colorMap[state.color ?? "primary"];
          const size = sizeMap[state.size ?? "medium"];

          return {
            minHeight: size.minHeight,
            padding: size.padding,
            borderRadius: size.radius,
            fontSize: size.fontSize,
            lineHeight: 1.35,
            color: text,
            gap: size.gap,

            transition: "background-color 160ms ease, color 160ms ease",

            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.07)"
                : "rgba(17, 17, 17, 0.045)",
            },

            "&.Mui-focusVisible": {
              outline: `2px solid ${color}`,
              outlineOffset: -2,
            },

            "&.Mui-selected": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.10)"
                : "rgba(17, 17, 17, 0.065)",
              color: text,
            },

            "&.Mui-selected:hover": {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.14)"
                : "rgba(17, 17, 17, 0.085)",
            },

            "&.Mui-disabled": {
              color: secondaryText,
              opacity: 0.55,
            },

            "& .MuiListItemIcon-root": {
              minWidth: size.iconSize,
              width: size.iconSize,
              color: secondaryText,
              marginRight: 0,
              flexShrink: 0,
            },

            "&:hover .MuiListItemIcon-root": {
              color,
            },

            "&.Mui-selected .MuiListItemIcon-root": {
              color,
            },

            "& .MuiListItemText-root": {
              marginTop: 0,
              marginBottom: 0,
            },

            "& .MuiListItemText-primary": {
              color: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
            },

            "& .MuiListItemText-secondary": {
              color: secondaryText,
              fontSize: size.fontSize === "0.8125rem" ? "0.72rem" : "0.75rem",
              lineHeight: 1.35,
            },

            "& .MuiSvgIcon-root": {
              fontSize: size.iconSize,
              flexShrink: 0,
            },
          };
        },
      },
    },
  };
};
