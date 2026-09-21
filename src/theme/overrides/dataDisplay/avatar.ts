import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getAvatarOverrides = (
  _palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiAvatar: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const isGlass = (ownerState as any).variant === "glass";
        const isRounded = ownerState.variant === "rounded";

        return {
          fontFamily:
            '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
          fontWeight: 700,
          fontSize: "0.9375rem",
          letterSpacing: "-0.01em",
          border: `1.5px solid ${
            isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.85)"
          }`,
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(255, 255, 255, 0.65)",
          color: isDark ? "#F6F5F2" : "#111111",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: isDark
            ? "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.18)"
            : "0 4px 16px rgba(17, 17, 17, 0.06), inset 0 1px 1.5px rgba(255, 255, 255, 0.95)",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",

          ...(isRounded && {
            borderRadius: "28%",
          }),

          ...(isGlass && {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.08) !important"
              : "rgba(255, 255, 255, 0.45) !important",
            backdropFilter: "blur(20px) saturate(190%) !important",
            WebkitBackdropFilter: "blur(20px) saturate(190%) !important",
            border: `1.5px solid ${
              isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.95)"
            } !important`,
          }),

          "& .MuiAvatar-img": {
            borderRadius: "inherit",
          },
        };
      },
    },
  },

  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        "& .MuiAvatar-root": {
          border: `2px solid ${
            isDark ? "rgba(20, 24, 32, 0.85)" : "rgba(255, 255, 255, 0.95)"
          }`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: isDark
            ? "0 2px 8px rgba(0, 0, 0, 0.4)"
            : "0 2px 8px rgba(0, 0, 0, 0.06)",
          marginLeft: -8,

          "&:first-of-type": {
            marginLeft: 0,
          },
        },

        "& .MuiAvatar-root:last-child": {
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(17, 17, 17, 0.08)",
          color: isDark ? "#F6F5F2" : "#111111",
          fontWeight: 700,
          fontSize: "0.82rem",
        },
      },
    },
  },
});
