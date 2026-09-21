import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette.js";
import React from "react";

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
    glass: true;
    "glass-surface": true;
  }
  interface ChipPropsVariantOverrides {
    tonal: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

// Clean minimalist close cross icon matching the brand kit
const CloseDeleteIcon = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      style: { width: "1em", height: "1em", ...props.style },
    },
    React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  );

export const getChipOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => {
  const chipColor = (
    colorKey: string,
  ): {
    main: string;
    hover: string;
    active: string;
    disabled: string;
    glow: string;
    text: string;
  } => {
    const semanticColors: Record<
      string,
      {
        main: string;
        hover: string;
        active: string;
        disabled: string;
        glow: string;
        text: string;
      }
    > = {
      info: {
        main: "#4285F4",
        hover: isDark ? "#5A95F5" : "#3367D6",
        active: isDark ? "#3367D6" : "#2A56C6",
        disabled: isDark
          ? "rgba(66, 133, 244, 0.3)"
          : "rgba(66, 133, 244, 0.25)",
        glow: "rgba(66, 133, 244, 0.35)",
        text: "#FFFFFF",
      },
      warning: {
        main: "#E67700",
        hover: isDark ? "#EE881E" : "#C96800",
        active: isDark ? "#C96800" : "#A85700",
        disabled: isDark ? "rgba(230, 119, 0, 0.3)" : "rgba(230, 119, 0, 0.25)",
        glow: "rgba(230, 119, 0, 0.35)",
        text: "#FFFFFF",
      },
      error: {
        main: "#EA4335",
        hover: isDark ? "#ED594D" : "#C5221F",
        active: isDark ? "#C5221F" : "#A51D1A",
        disabled: isDark ? "rgba(234, 67, 53, 0.3)" : "rgba(234, 67, 53, 0.25)",
        glow: "rgba(234, 67, 53, 0.35)",
        text: "#FFFFFF",
      },
      success: {
        main: "#34A853",
        hover: isDark ? "#45B463" : "#278A42",
        active: isDark ? "#278A42" : "#1E7034",
        disabled: isDark ? "rgba(52, 168, 83, 0.3)" : "rgba(52, 168, 83, 0.25)",
        glow: "rgba(52, 168, 83, 0.35)",
        text: "#FFFFFF",
      },
    };

    if (semanticColors[colorKey]) {
      return semanticColors[colorKey];
    }

    if (colorKey === "glass") {
      return {
        main: isDark
          ? "rgba(255, 255, 255, 0.12)"
          : "rgba(255, 255, 255, 0.68)",
        hover: isDark
          ? "rgba(255, 255, 255, 0.18)"
          : "rgba(255, 255, 255, 0.88)",
        active: isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.75)",
        disabled: isDark
          ? "rgba(255, 255, 255, 0.04)"
          : "rgba(255, 255, 255, 0.3)",
        glow: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.08)",
        text: isDark ? "#F6F5F2" : "#111111",
      };
    }

    const group = (palette as Record<string, any>)[colorKey] || palette.primary;
    return {
      main: group.main,
      hover: group.hover,
      active: group.active,
      disabled: group.disabled,
      glow: group.glow,
      text: group.contrastText || "#FFFFFF",
    };
  };
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: React.createElement(CloseDeleteIcon),
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            height: 32,
            fontSize: "0.82rem",
            padding: "0 12px",
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before":
              {
                width: 10,
                height: 10,
                borderWidth: "2px",
                marginRight: "7px",
              },
            "& .MuiChip-avatar": {
              width: 24,
              height: 24,
              marginLeft: "-3px",
              marginRight: "6px",
              fontSize: "0.7rem",
            },
            "& .MuiChip-icon": {
              fontSize: "18px",
              marginLeft: "-2px",
              marginRight: "6px",
            },
            "& .MuiChip-deleteIcon": {
              fontSize: "17px",
              marginLeft: "6px",
              marginRight: "-1px",
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => {
          const color = ownerState.color ?? "default";
          const variant = (ownerState.variant as string) ?? "filled";
          const isGlass = (color as string) === "glass";
          const isPrimary = color === "primary";
          const isSecondary = color === "secondary";
          const isSemantic =
            !isPrimary && !isSecondary && !isGlass && color !== "default";
          const cc = chipColor(color === "default" ? "primary" : color);

          return {
            // ── Base ──────────────────────────────────────────────────────
            display: "inline-flex",
            alignItems: "center",
            borderRadius: 9999,
            height: 28, // Medium (default) — brand kit 28px
            fontWeight: 500,
            fontFamily:
              '"Montserrat", "Google Sans Flex", -apple-system, sans-serif',
            fontSize: "0.76rem",
            letterSpacing: "0.02em",
            lineHeight: 1,
            padding: "0 11px",
            cursor: "default",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            userSelect: "none",

            "& .MuiChip-label": {
              color: "inherit",
              display: "inline-flex",
              alignItems: "center",
              padding: 0,
            },

            // ── Brand Kit Signature Circle Indicator Before Label ────────
            // Displayed on all chips unless a custom icon or avatar is provided
            "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before":
              {
                content: '""',
                display: "inline-block",
                width: 8.5,
                height: 8.5,
                borderRadius: "50%",
                border: "1.75px solid currentColor",
                boxSizing: "border-box",
                marginRight: "6px",
                flexShrink: 0,
                opacity: 0.9,
              },

            // Delete icon
            "& .MuiChip-deleteIcon": {
              fontSize: "15px",
              marginLeft: "5px",
              marginRight: "-2px",
              opacity: 0.75,
              transition: "opacity 0.15s ease, transform 0.15s ease",
              color: "inherit",
              cursor: "pointer",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.15)",
                color: "inherit",
              },
            },

            // Avatar inside chip
            "& .MuiChip-avatar": {
              width: 20,
              height: 20,
              marginLeft: "-3px",
              marginRight: "6px",
              fontSize: "0.65rem",
              fontWeight: 700,
            },

            // Icon inside chip
            "& .MuiChip-icon": {
              fontSize: "16px",
              marginLeft: "-2px",
              marginRight: "6px",
              color: "inherit",
              opacity: 0.85,
            },

            // ══════════════════════════════════════════════════════════════
            // FILLED VARIANT
            // ══════════════════════════════════════════════════════════════

            // ── Primary Filled — Solid Charcoal (Light) / Cream (Dark) ────
            ...(variant === "filled" &&
              isPrimary && {
                backgroundColor: isDark ? "#F6F5F2" : "#111111",
                color: isDark ? "#111111" : "#FFFFFF",
                border: "1px solid transparent",
                boxShadow: isDark
                  ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark ? "#E8E7E4" : "#2A2A2A",
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 6px 16px rgba(0,0,0,0.4)"
                    : "0 6px 14px rgba(0,0,0,0.12)",
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: isDark ? "#D9D8D4" : "#1A1A1A",
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "#EBEBEB",
                  color: isDark ? "rgba(255,255,255,0.3)" : "#A0A0A0",
                  boxShadow: "none",
                  opacity: 1,
                },
              }),

            // ── Secondary Filled — Cream (Light) / Dark Stone (Dark) ──────
            ...(variant === "filled" &&
              isSecondary && {
                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#F6F5F2",
                color: isDark ? "#F6F5F2" : "#111111",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: isDark
                  ? "0 2px 8px rgba(0,0,0,0.25)"
                  : "0 2px 6px rgba(0,0,0,0.04)",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.16)"
                    : "#EDECE8",
                  transform: "translateY(-1px)",
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.22)"
                    : "#D9D9CF",
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(246,245,242,0.6)",
                  color: isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(17,17,17,0.3)",
                  boxShadow: "none",
                  opacity: 1,
                },
              }),

            // ── Glass Filled — Pure Frosted Glass Chip ────────────────────
            ...(variant === "filled" &&
              isGlass && {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.68)",
                color: isDark ? "#F6F5F2" : "#111111",
                border: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(255, 255, 255, 0.85)"
                }`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: isDark
                  ? "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"
                  : "0 3px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(255, 255, 255, 0.88)",
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)"
                    : "0 6px 18px rgba(0,0,0,0.08), inset 0 1px 0 #FFFFFF",
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.75)",
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.3)",
                  color: isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.28)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.06)"
                      : "rgba(255, 255, 255, 0.4)"
                  }`,
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                  opacity: 1,
                },
              }),

            // ── Semantic Filled (Info, Warning, Error, Success) ──────────
            ...(variant === "filled" &&
              isSemantic && {
                backgroundColor: cc.main,
                color: cc.text,
                border: "1px solid transparent",
                boxShadow: isDark
                  ? `0 2px 8px rgba(0,0,0,0.3)`
                  : `0 2px 6px ${cc.glow}`,

                "&.MuiChip-clickable:hover": {
                  backgroundColor: cc.hover,
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? `0 6px 16px rgba(0,0,0,0.4)`
                    : `0 6px 14px ${cc.glow}`,
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: cc.active,
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  backgroundColor: cc.disabled,
                  color: isDark
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.5)",
                  boxShadow: "none",
                  opacity: 1,
                },
              }),

            // ── Default Filled — Neutral Glass ───────────────────────────
            ...(variant === "filled" &&
              color === "default" && {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(17,17,17,0.05)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(17,17,17,0.12)"}`,
                color: palette.text.primary,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: isDark
                  ? "0 2px 8px rgba(0,0,0,0.2)"
                  : "0 2px 6px rgba(0,0,0,0.04)",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(17,17,17,0.08)",
                  transform: "translateY(-1px)",
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.16)"
                    : "rgba(17,17,17,0.12)",
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(17,17,17,0.03)",
                  color: isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(17,17,17,0.3)",
                  boxShadow: "none",
                  opacity: 1,
                },
              }),

            // ══════════════════════════════════════════════════════════════
            // OUTLINED VARIANT
            // ══════════════════════════════════════════════════════════════

            // ── Primary Outlined ─────────────────────────────────────────
            ...(variant === "outlined" &&
              isPrimary && {
                backgroundColor: "transparent",
                border: `1.5px solid ${isDark ? "#F6F5F2" : "#111111"}`,
                color: isDark ? "#F6F5F2" : "#111111",
                boxShadow: "none",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(246,245,242,0.08)"
                    : "rgba(17,17,17,0.06)",
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 4px 12px rgba(0,0,0,0.25)"
                    : "0 4px 10px rgba(0,0,0,0.07)",
                },
                "&.Mui-disabled": {
                  borderColor: isDark
                    ? "rgba(246,245,242,0.2)"
                    : "rgba(17,17,17,0.2)",
                  color: isDark
                    ? "rgba(246,245,242,0.3)"
                    : "rgba(17,17,17,0.3)",
                  opacity: 1,
                },
              }),

            // ── Secondary Outlined ───────────────────────────────────────
            ...(variant === "outlined" &&
              isSecondary && {
                backgroundColor: "transparent",
                border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.2)"}`,
                color: isDark ? "#F6F5F2" : "#111111",
                boxShadow: "none",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(17,17,17,0.04)",
                  transform: "translateY(-1px)",
                },
                "&.Mui-disabled": {
                  borderColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(17,17,17,0.1)",
                  color: isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(17,17,17,0.3)",
                  opacity: 1,
                },
              }),

            // ── Glass Outlined — Airy Translucent Border Chip ─────────────
            ...(variant === "outlined" &&
              isGlass && {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(255, 255, 255, 0.28)",
                border: `1.5px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.22)"
                    : "rgba(17, 17, 17, 0.16)"
                }`,
                color: isDark ? "#F6F5F2" : "#111111",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: isDark
                  ? "0 2px 10px rgba(0,0,0,0.25)"
                  : "0 2px 8px rgba(0,0,0,0.03)",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.09)"
                    : "rgba(255, 255, 255, 0.55)",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.35)"
                    : "rgba(17, 17, 17, 0.3)",
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 6px 18px rgba(0,0,0,0.35)"
                    : "0 4px 14px rgba(0,0,0,0.06)",
                },
                "&.MuiChip-clickable:active": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(255, 255, 255, 0.4)",
                  transform: "translateY(0) scale(0.98)",
                },
                "&.Mui-disabled": {
                  borderColor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(17,17,17,0.08)",
                  color: isDark
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(17,17,17,0.25)",
                  backgroundColor: "transparent",
                  opacity: 1,
                },
              }),

            // ── Semantic Outlined (Info, Warning, Error, Success) ────────
            ...(variant === "outlined" &&
              isSemantic && {
                backgroundColor: "transparent",
                border: `1.5px solid ${cc.main}`,
                color: cc.main,
                boxShadow: "none",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"},0.12)`
                    : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"},0.07)`,
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 4px 12px rgba(0,0,0,0.25)"
                    : "0 4px 10px rgba(0,0,0,0.07)",
                },
                "&.Mui-disabled": {
                  borderColor: cc.disabled,
                  color: cc.disabled,
                  opacity: 1,
                },
              }),

            // ── Default Outlined ─────────────────────────────────────────
            ...(variant === "outlined" &&
              color === "default" && {
                backgroundColor: "transparent",
                border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.25)"}`,
                color: palette.text.primary,
                boxShadow: "none",

                "&.MuiChip-clickable:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(17,17,17,0.04)",
                  transform: "translateY(-1px)",
                },
                "&.Mui-disabled": {
                  borderColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(17,17,17,0.1)",
                  color: isDark
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(17,17,17,0.3)",
                  opacity: 1,
                },
              }),

            // ══════════════════════════════════════════════════════════════
            // TONAL VARIANT (Soft background chip from Brand Kit)
            // ══════════════════════════════════════════════════════════════
            ...(variant === "tonal" && {
              backgroundColor: isGlass
                ? isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.45)"
                : isPrimary
                  ? isDark
                    ? "rgba(246, 245, 242, 0.12)"
                    : "rgba(17, 17, 17, 0.07)"
                  : isSecondary
                    ? isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.05)"
                    : isSemantic
                      ? isDark
                        ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.2)`
                        : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.1)`
                      : isDark
                        ? "rgba(255, 255, 255, 0.07)"
                        : "rgba(17, 17, 17, 0.05)",
              color:
                isGlass || isPrimary || isSecondary
                  ? isDark
                    ? "#F6F5F2"
                    : "#111111"
                  : isSemantic
                    ? cc.main
                    : palette.text.primary,
              border: `1px solid ${
                isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.6)"
                  : isDark
                    ? isSemantic
                      ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.25)`
                      : "rgba(255,255,255,0.08)"
                    : isSemantic
                      ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.15)`
                      : "rgba(17,17,17,0.08)"
              }`,
              ...(isGlass && {
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }),
              boxShadow: "none",

              "&.MuiChip-clickable:hover": {
                backgroundColor: isGlass
                  ? isDark
                    ? "rgba(255, 255, 255, 0.14)"
                    : "rgba(255, 255, 255, 0.7)"
                  : isPrimary
                    ? isDark
                      ? "rgba(246, 245, 242, 0.18)"
                      : "rgba(17, 17, 17, 0.12)"
                    : isSecondary
                      ? isDark
                        ? "rgba(255, 255, 255, 0.12)"
                        : "rgba(17, 17, 17, 0.09)"
                      : isSemantic
                        ? isDark
                          ? `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.28)`
                          : `rgba(${color === "info" ? "66,133,244" : color === "warning" ? "230,119,0" : color === "error" ? "234,67,53" : "52,168,83"}, 0.16)`
                        : isDark
                          ? "rgba(255, 255, 255, 0.12)"
                          : "rgba(17, 17, 17, 0.08)",
                transform: "translateY(-1px)",
              },
              "&.MuiChip-clickable:active": {
                transform: "translateY(0) scale(0.98)",
              },
              "&.Mui-disabled": {
                opacity: 0.45,
              },
            }),

            // ── Size: Large (Brand Kit: 32px) ───────────────────────────
            ...((ownerState.size as string) === "large" && {
              height: 32,
              fontSize: "0.82rem",
              padding: "0 12px",
              "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before":
                {
                  width: 10,
                  height: 10,
                  borderWidth: "2px",
                  marginRight: "7px",
                },
              "& .MuiChip-avatar": {
                width: 24,
                height: 24,
                marginLeft: "-3px",
                marginRight: "6px",
                fontSize: "0.7rem",
              },
              "& .MuiChip-icon": {
                fontSize: "18px",
                marginLeft: "-2px",
                marginRight: "6px",
              },
              "& .MuiChip-deleteIcon": {
                fontSize: "17px",
                marginLeft: "6px",
                marginRight: "-1px",
              },
            }),
          };
        },

        // ── Size variants — Brand Kit: Small 24px, Medium 28px, Large 32px ──
        sizeSmall: {
          height: 24,
          fontSize: "0.68rem",
          padding: "0 8px",
          "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before":
            {
              width: 7,
              height: 7,
              borderWidth: "1.5px",
              marginRight: "5px",
            },
          "& .MuiChip-avatar": {
            width: 16,
            height: 16,
            marginLeft: "-3px",
            marginRight: "4px",
            fontSize: "0.55rem",
          },
          "& .MuiChip-icon": {
            fontSize: "14px",
            marginLeft: "-1px",
            marginRight: "4px",
          },
          "& .MuiChip-deleteIcon": {
            fontSize: "14px",
            marginLeft: "4px",
            marginRight: "-1px",
          },
        },

        sizeMedium: {
          height: 28,
          fontSize: "0.76rem",
          padding: "0 11px",
          "&:not(:has(.MuiChip-icon)):not(:has(.MuiChip-avatar)) .MuiChip-label::before":
            {
              width: 8.5,
              height: 8.5,
              borderWidth: "1.75px",
              marginRight: "6px",
            },
        },
      },
    },
  };
};
