import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export type MenuColor = "primary" | "secondary" | "accent" | "premium" | "success" | "warning" | "error";

export type MenuSurface = "standard" | "glass";

export type MenuSize = "compact" | "small" | "medium";

export const getMenuOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => {
  const text = isDark ? "#F6F5F2" : "#111111";

  const secondaryText = isDark ? "rgba(246, 245, 242, 0.62)" : "rgba(17, 17, 17, 0.62)";

  const divider = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)";

  const standardBackground = isDark ? "#1B1B1B" : "#FFFFFF";

  const glassBackground = isDark ? "rgba(255, 255, 255, 0.075)" : "rgba(255, 255, 255, 0.72)";

  const glassBorder = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.78)";

  const glassShadow = isDark ? "0 18px 45px rgba(0, 0, 0, 0.30)" : "0 18px 45px rgba(17, 17, 17, 0.10)";

  const colorMap: Record<MenuColor, string> = {
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    accent: palette.accent.main,
    premium: palette.premium.main,
    success: palette.success.main,
    warning: palette.warning.main,
    error: palette.error.main,
  };

  const sizeMap: Record<
    MenuSize,
    { listPadding: string; itemMinHeight: number; itemPadding: string; itemFontSize: string; iconSize: number; iconGap: number; radius: number; minWidth: number }
  > = {
    compact: { listPadding: "3px", itemMinHeight: 20, itemPadding: "4px 8px", itemFontSize: "0.75rem", iconSize: 15, iconGap: 6, radius: 6, minWidth: 150 },
    small: { listPadding: "4px", itemMinHeight: 24, itemPadding: "6px 10px", itemFontSize: "0.8125rem", iconSize: 18, iconGap: 8, radius: 8, minWidth: 180 },
    medium: { listPadding: "6px", itemMinHeight: 32, itemPadding: "9px 12px", itemFontSize: "0.875rem", iconSize: 20, iconGap: 10, radius: 10, minWidth: 180 },
  };

  return {
    MuiMenu: {
      defaultProps: { surface: "standard", color: "primary", size: "medium" } as any,

      styleOverrides: {
        root: {
          "& .MuiMenu-paper": {
            color: text,
            backgroundColor: standardBackground,
            border: `1px solid ${divider}`,
            borderRadius: 12,
            boxShadow: isDark ? "0 14px 36px rgba(0, 0, 0, 0.28)" : "0 14px 36px rgba(17, 17, 17, 0.10)",
            backgroundImage: "none",
            overflow: "hidden",
          },

          "& .MuiMenu-list": { color: text },
        },

        paper: ({ ownerState }) => {
          const state = (ownerState || {}) as { color?: MenuColor; size?: MenuSize; surface?: MenuSurface };

          const color = colorMap[state.color ?? "primary"] || colorMap.primary;
          const surface: MenuSurface =
            state.surface ??
            (state as any)["data-jivico-surface"] ??
            ((state as any).variant === "glass" ? "glass" : undefined) ??
            ((state as any)["data-jivico-menu-variant"] as MenuSurface | undefined) ??
            "standard";
          const size = sizeMap[state.size ?? "medium"] || sizeMap.medium;
          const isGlass = surface === "glass";

          const standardStyles = {
            backgroundColor: `${standardBackground} !important`,
            border: `1px solid ${divider} !important`,
            borderRadius: `${size.radius + 4}px !important`,
            backgroundImage: "none !important",
            backdropFilter: "none !important",
            WebkitBackdropFilter: "none !important",
            boxShadow: isDark ? "0 14px 36px rgba(0, 0, 0, 0.40) !important" : "0 14px 36px rgba(17, 17, 17, 0.12) !important",
          };

          const glassStyles = {
            backgroundColor: `${glassBackground} !important`,
            border: `1px solid ${glassBorder} !important`,
            borderRadius: `${size.radius + 4}px !important`,
            backdropFilter: "blur(24px) saturate(180%) !important",
            WebkitBackdropFilter: "blur(24px) saturate(180%) !important",
            boxShadow: `${glassShadow} !important`,
            backgroundImage: "none !important",
          };

          return {
            minWidth: size.minWidth,
            color: text,

            ...(isGlass ? glassStyles : standardStyles),

            "&[data-jivico-menu-variant='glass'], &[data-jivico-surface='glass']": glassStyles,

            "&[data-jivico-menu-variant='standard'], &[data-jivico-surface='standard']": standardStyles,

            "&.MuiPopover-paper": { ...(isGlass ? glassStyles : standardStyles) },

            "& .MuiMenu-list": { padding: size.listPadding, color: text, outline: "none" },

            "& .MuiMenuItem-root": {
              minHeight: size.itemMinHeight,
              padding: size.itemPadding,
              borderRadius: size.radius,
              fontSize: size.itemFontSize,
              lineHeight: 1.35,
              color: text,
              gap: size.iconGap,
              transition: "background-color 160ms ease, color 160ms ease",
            },

            "& .MuiMenuItem-root:hover": {
              backgroundColor: isGlass ? (isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.58)") : isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(17, 17, 17, 0.045)",
            },

            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: isGlass ? (isDark ? "rgba(255, 255, 255, 0.13)" : "rgba(255, 255, 255, 0.68)") : isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.065)",
              color: text,
            },

            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor: isGlass ? (isDark ? "rgba(255, 255, 255, 0.17)" : "rgba(255, 255, 255, 0.76)") : isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(17, 17, 17, 0.085)",
            },

            "& .MuiMenuItem-root.Mui-focusVisible": { outline: `2px solid ${color}`, outlineOffset: -2 },

            "& .MuiMenuItem-root.Mui-disabled": { color: secondaryText, opacity: 0.55 },

            "& .MuiMenuItem-root .MuiListItemIcon-root": { minWidth: size.iconSize, width: size.iconSize, color: secondaryText, marginRight: 0 },

            "& .MuiMenuItem-root:hover .MuiListItemIcon-root": { color },

            "& .MuiMenuItem-root.Mui-selected .MuiListItemIcon-root": { color },

            "& .MuiMenuItem-root .MuiListItemText-root": { marginTop: 0, marginBottom: 0 },

            "& .MuiMenuItem-root .MuiListItemText-primary": { color: "inherit", fontSize: "inherit", lineHeight: "inherit" },

            "& .MuiMenuItem-root .MuiListItemText-secondary": {
              color: secondaryText,
              fontSize: size.itemFontSize === "0.75rem" ? "0.6875rem" : size.itemFontSize === "0.8125rem" ? "0.72rem" : "0.75rem",
              lineHeight: 1.35,
            },

            "& .MuiMenuItem-root .MuiSvgIcon-root": { fontSize: size.iconSize, flexShrink: 0 },

            "& .MuiDivider-root": { margin: size.itemFontSize === "0.75rem" ? "2px 0" : "4px 0", borderColor: isGlass ? glassBorder : divider },
          };
        },
      },
    },
  };
};
