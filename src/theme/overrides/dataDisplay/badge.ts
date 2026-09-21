import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";


export const getBadgeOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiBadge: {
    styleOverrides: {
      badge: ({ ownerState }) => {
        const color = (ownerState.color as string) || "primary";
        const isGlass = color === "glass";
        const isDot = ownerState.variant === "dot";

        const colorGroup =
          (palette as Record<string, any>)[color] || palette.primary;

        if (isDot) {
          const dotColor = isGlass
            ? isDark
              ? "#F6F5F2"
              : "#111111"
            : colorGroup.main;

          return {
            height: 10,
            width: 10,
            minWidth: 10,
            borderRadius: "50%",
            backgroundColor: dotColor,
            border: `2px solid ${isDark ? "#12141A" : "#FFFFFF"}`,
            boxShadow: isGlass
              ? isDark
                ? "0 0 8px rgba(255, 255, 255, 0.5)"
                : "0 0 6px rgba(0, 0, 0, 0.3)"
              : `0 0 8px ${colorGroup.glow || colorGroup.main}`,
          };
        }

        if (isGlass) {
          return {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(255, 255, 255, 0.75)",
            color: isDark ? "#F6F5F2" : "#111111",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.9)"
            }`,
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            boxShadow: isDark
              ? "0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.25)"
              : "0 4px 12px rgba(17, 17, 17, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
            fontWeight: 700,
            fontSize: "0.72rem",
            height: 20,
            minWidth: 20,
            borderRadius: 10,
            padding: "0 6px",
          };
        }

        return {
          backgroundColor: colorGroup.main,
          color: colorGroup.contrastText || "#FFFFFF",
          border: `1.5px solid ${
            isDark ? "rgba(20, 24, 32, 0.9)" : "rgba(255, 255, 255, 0.95)"
          }`,
          boxShadow: `0 2px 8px ${colorGroup.glow || "rgba(0, 0, 0, 0.15)"}`,
          fontWeight: 700,
          fontSize: "0.72rem",
          height: 20,
          minWidth: 20,
          borderRadius: 10,
          padding: "0 6px",
        };
      },
    },
  },
});
