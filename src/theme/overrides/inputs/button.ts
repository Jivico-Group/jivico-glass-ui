import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";
import { COLORS } from "../../colors";

export const getButtonOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const variant = ownerState.variant || "text";

        const colorKey = (
          ownerState.color && ownerState.color !== "inherit"
            ? ownerState.color
            : "primary"
        ) as keyof typeof palette;

        const activeColorGroup = (palette[colorKey] ||
          palette.primary) as Record<string, string>;

        const mainColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover;
        const activeColor = activeColorGroup.active;
        const disabledColor = activeColorGroup.disabled;
        const glowColor = activeColorGroup.glow;
        const textColor = activeColorGroup.contrastText || COLORS.white;

        const isPrimary = colorKey === "primary";
        const isSecondary = colorKey === "secondary";
        const isGlass = colorKey === "glass";
        const isSemantic = !isPrimary && !isSecondary && !isGlass;

        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 38,
          borderRadius: 9999,
          padding: "9px 22px",
          fontWeight: 600,
          fontSize: "0.875rem",
          lineHeight: 1.2,
          textTransform: "none",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          fontFamily:
            '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
          letterSpacing: "-0.01em",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",

          "&:active": {
            transform: "translateY(0) scale(0.98)",
          },

          ...(variant === "contained" &&
            isPrimary && {
              backgroundColor: mainColor,
              color: textColor,
              boxShadow: isDark
                ? "0 6px 24px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)"
                : "0 6px 20px rgba(17,17,17,0.22), inset 0 1px 1px rgba(255,255,255,0.15)",

              "&:hover": {
                backgroundColor: hoverColor,
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                  : "0 12px 32px rgba(17,17,17,0.3)",
              },

              "&:active": {
                backgroundColor: activeColor,
                transform: "translateY(0) scale(0.98)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 3px ${glowColor}, ${
                  isDark
                    ? "0 6px 24px rgba(0,0,0,0.55)"
                    : "0 6px 20px rgba(17,17,17,0.22)"
                }`,
              },

              "&.Mui-disabled": {
                backgroundColor: disabledColor,
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
                transform: "none",
              },
            }),

          ...(variant === "outlined" &&
            isPrimary && {
              border: "none",
              background: isDark
                ? "rgba(255, 255, 255, 0.1)"
                : COLORS.brand.cream,
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: isDark
                ? "0 6px 20px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.15)"
                : "0 6px 20px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(17,17,17,0.08)",

              "&:hover": {
                background: isDark ? "rgba(255, 255, 255, 0.15)" : COLORS.white,
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 12px 32px rgba(0,0,0,0.6), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                  : "0 12px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(17,17,17,0.15)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? `0 0 0 3px ${glowColor}, 0 6px 24px rgba(0,0,0,0.55)`
                  : `0 0 0 3px rgba(246,245,242,0.6), 0 6px 20px rgba(0,0,0,0.06)`,
              },

              "&.Mui-disabled": {
                background: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transform: "none",
              },
            }),

          ...(variant === "contained" &&
            isSecondary && {
              background: isDark
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(17, 17, 17, 0.04)",
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              boxShadow: isDark
                ? "inset 0 0 0 1px rgba(255,255,255,0.05)"
                : "inset 0 0 0 1px rgba(17,17,17,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              "&:hover": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(17, 17, 17, 0.08)",
                transform: "translateY(-1.5px)",
                boxShadow: isDark
                  ? "0 4px 14px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)"
                  : "0 4px 14px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(17,17,17,0.1)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(246,245,242,0.3)"
                  : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(17,17,17,0.02)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transform: "none",
              },
            }),

          ...(variant === "outlined" &&
            isSecondary && {
              border: "none",
              background: "transparent",
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              boxShadow: isDark
                ? "inset 0 0 0 1.5px rgba(255,255,255,0.15)"
                : "inset 0 0 0 1.5px rgba(17,17,17,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              "&:hover": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(17, 17, 17, 0.03)",
                transform: "translateY(-1.5px)",
                boxShadow: isDark
                  ? "0 4px 14px rgba(0,0,0,0.3), inset 0 0 0 1.5px rgba(255,255,255,0.25)"
                  : "0 4px 14px rgba(0,0,0,0.04), inset 0 0 0 1.5px rgba(17,17,17,0.25)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(246,245,242,0.3)"
                  : "0 0 0 3px rgba(17,17,17,0.2)",
              },

              "&.Mui-disabled": {
                boxShadow: isDark
                  ? "inset 0 0 0 1px rgba(255,255,255,0.1)"
                  : "inset 0 0 0 1px rgba(17,17,17,0.1)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.3)",
                background: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transform: "none",
              },
            }),

          ...(variant === "contained" &&
            isGlass && {
              background: isDark
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(255, 255, 255, 0.72)",
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: `1px solid ${
                isDark
                  ? "rgba(255, 255, 255, 0.16)"
                  : "rgba(255, 255, 255, 0.85)"
              }`,
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.22)"
                : "0 6px 22px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",

              "&:hover": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.92)",
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 14px 40px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                  : "0 10px 28px rgba(0, 0, 0, 0.1), inset 0 1px 1px #FFFFFF",
              },

              "&:active": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.09)"
                  : "rgba(255, 255, 255, 0.78)",
                transform: "translateY(0) scale(0.98)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(255, 255, 255, 0.35), 0 8px 32px rgba(0, 0, 0, 0.45)"
                  : "0 0 0 3px rgba(17, 17, 17, 0.2), 0 6px 22px rgba(0, 0, 0, 0.08)",
              },

              "&.Mui-disabled": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(255, 255, 255, 0.3)",
                color: isDark
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 0, 0, 0.28)",
                border: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(255, 255, 255, 0.4)"
                }`,
                boxShadow: "none",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                transform: "none",
              },
            }),

          ...(variant === "outlined" &&
            isGlass && {
              background: isDark
                ? "rgba(255, 255, 255, 0.04)"
                : "rgba(255, 255, 255, 0.28)",
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              border: `1.5px solid ${
                isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(17, 17, 17, 0.16)"
              }`,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: isDark
                ? "0 4px 18px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.06)"
                : "0 4px 14px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.6)",

              "&:hover": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.09)"
                  : "rgba(255, 255, 255, 0.55)",
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.35)"
                  : "rgba(17, 17, 17, 0.3)",
                transform: "translateY(-1.5px)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.12)"
                  : "0 6px 20px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
              },

              "&:active": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(255, 255, 255, 0.4)",
                transform: "translateY(0) scale(0.98)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(255, 255, 255, 0.3)"
                  : "0 0 0 3px rgba(17, 17, 17, 0.2)",
              },

              "&.Mui-disabled": {
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(17, 17, 17, 0.08)",
                color: isDark
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 0, 0, 0.25)",
                background: "transparent",
                boxShadow: "none",
                backdropFilter: "none",
                transform: "none",
              },
            }),

          ...(variant === "contained" &&
            isSemantic && {
              backgroundColor: mainColor,
              color: textColor,
              boxShadow: "none",
              border: "1px solid transparent",

              "&:hover": {
                backgroundColor: hoverColor,
                boxShadow: `0 6px 20px ${glowColor}`,
                transform: "translateY(-1.5px)",
              },

              "&:active": {
                backgroundColor: activeColor,
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                backgroundColor: disabledColor,
                color: isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.4)",
                boxShadow: "none",
                transform: "none",
              },
            }),

          ...(variant === "outlined" &&
            isSemantic && {
              border: `1.5px solid ${mainColor}`,
              color: mainColor,
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.04)",
                borderColor: hoverColor,
                boxShadow: `0 4px 14px ${glowColor}`,
                transform: "translateY(-1.5px)",
              },

              "&:active": {
                borderColor: activeColor,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                borderColor: disabledColor,
                color: disabledColor,
                backgroundColor: "transparent",
                boxShadow: "none",
                transform: "none",
              },
            }),

          ...(variant === "text" &&
            isGlass && {
              background: "transparent",
              color: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              padding: "8px 18px",
              minHeight: 40,
              border: "1px solid transparent",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",

              "&:hover": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.7)"
                }`,
                boxShadow: isDark
                  ? "0 4px 16px rgba(0, 0, 0, 0.25)"
                  : "0 4px 14px rgba(0, 0, 0, 0.04)",
                transform: "translateY(-1px)",
              },

              "&:active": {
                background: isDark
                  ? "rgba(255, 255, 255, 0.16)"
                  : "rgba(255, 255, 255, 0.75)",
                transform: "translateY(0) scale(0.98)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(255, 255, 255, 0.3)"
                  : "0 0 0 3px rgba(17, 17, 17, 0.2)",
              },

              "&.Mui-disabled": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 0, 0, 0.25)",
                background: "transparent",
                border: "1px solid transparent",
                transform: "none",
              },
            }),

          ...(variant === "text" &&
            !isGlass && {
              color:
                isPrimary || isSecondary
                  ? isDark
                    ? COLORS.brand.cream
                    : COLORS.brand.charcoal
                  : mainColor,

              padding: "8px 16px",
              minHeight: 40,
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.04)",
                transform: "translateY(-1px)",
              },

              "&:active": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 3px ${glowColor}`,
              },

              "&.Mui-disabled": {
                color:
                  isPrimary || isSecondary
                    ? isDark
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(17,17,17,0.3)"
                    : disabledColor,

                backgroundColor: "transparent",
                boxShadow: "none",
                transform: "none",
              },
            }),
        };
      },

      sizeSmall: {
        minHeight: 30,
        padding: "5px 14px",
        fontSize: "0.78rem",
      },

      sizeMedium: {
        minHeight: 36,
        padding: "7px 18px",
        fontSize: "0.85rem",
      },

      sizeLarge: {
        minHeight: 44,
        padding: "11px 26px",
        fontSize: "0.9375rem",
      },
    },
  },
});
