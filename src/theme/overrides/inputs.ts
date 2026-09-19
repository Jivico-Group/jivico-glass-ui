import type { Components, Theme } from "@mui/material/styles";
import { COLORS } from "../colors.js";
import type { JivicoPalette } from "../palette.js";

/**
 * MUI component overrides — Inputs category:
 * Button, ButtonGroup, Fab, OutlinedInput, InputLabel, Select, Autocomplete
 */
export const getInputOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  // ========================================================================
  // BUTTON
  // ========================================================================
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
        const glowColor = activeColorGroup.glow;
        const isPrimary = colorKey === "primary";
        const isSecondary = colorKey === "secondary";

        let textColor = COLORS.white;
        if (
          isDark &&
          (isSecondary ||
            colorKey === "success" ||
            colorKey === "warning" ||
            colorKey === "info")
        ) {
          textColor = COLORS.black;
        }

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

          // Primary Contained — Luxury Monochrome
          // Light: solid charcoal · Dark: crisp cream on deep black
          ...(variant === "contained" &&
            isPrimary && {
              background: isDark ? COLORS.brand.cream : COLORS.brand.charcoal,
              color: isDark ? COLORS.brand.charcoal : COLORS.white,
              boxShadow: isDark
                ? "0 6px 24px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)"
                : "0 6px 20px rgba(17,17,17,0.22), inset 0 1px 1px rgba(255,255,255,0.15)",

              "&:hover": {
                background: isDark ? COLORS.white : COLORS.brand.charcoal,
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                  : "0 12px 32px rgba(17,17,17,0.3)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: isDark
                  ? "0 0 0 3px rgba(246,245,242,0.4), 0 6px 24px rgba(0,0,0,0.55)"
                  : "0 0 0 3px rgba(17,17,17,0.2), 0 6px 20px rgba(17,17,17,0.22)",
              },
              "&.Mui-disabled": {
                background: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.08)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
                transform: "none",
              },
            }),

          // Primary Outlined — Frosted glass in dark, cream in light
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
                  ? "0 0 0 3px rgba(246,245,242,0.3), 0 6px 24px rgba(0,0,0,0.55)"
                  : "0 0 0 3px rgba(246,245,242,0.6), 0 6px 20px rgba(0,0,0,0.06)",
              },

              "&.Mui-disabled": {
                background: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
                color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
                transform: "none",
              },
            }),

          // Secondary Contained — Soft Glass
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
                transform: "none",
              },
            }),

          // Secondary Outlined
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
                transform: "none",
              },
            }),

          // Other Contained Colors
          ...(variant === "contained" &&
            !isPrimary &&
            !isSecondary && {
              backgroundColor: mainColor,
              color: textColor,
              "&:hover": {
                backgroundColor: hoverColor,
                boxShadow: `0 6px 20px ${glowColor}`,
                transform: "translateY(-1.5px) scale(1.015)",
              },
              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 4px ${glowColor}`,
              },
            }),

          // Other Outlined Colors
          ...(variant === "outlined" &&
            !isPrimary &&
            !isSecondary && {
              borderColor: palette.glass.buttonBorder,
              color: mainColor,
              backgroundColor: palette.glass.buttonBg,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: mainColor,
                backgroundColor: palette.glass.buttonHoverBg,
                boxShadow: `0 0 14px ${glowColor}`,
                transform: "translateY(-1.5px) scale(1.015)",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 4px ${glowColor}`,
              },
            }),

          // Text Button
          ...(variant === "text" && {
            color: isSecondary
              ? isDark
                ? COLORS.brand.cream
                : COLORS.brand.charcoal
              : mainColor,
            padding: "8px 16px",
            minHeight: 40,
            "&:hover": {
              backgroundColor: palette.glass.buttonTextHover,
              transform: "translateY(-1px)",
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${glowColor}`,
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

  // ========================================================================
  // BUTTON GROUP
  // ========================================================================
  MuiButtonGroup: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const isContained = ownerState.variant === "contained";
        const isOutlined = ownerState.variant === "outlined";

        return {
          boxShadow: "none",
          borderRadius: 9999,

          // Contained: clip children inside the pill shape
          ...(isContained && {
            overflow: "hidden",
            "& .MuiButton-root": {
              borderRadius: 0,
              // No individual border — the group clip + bg handles shape
              border: "none !important",
            },
            "& .MuiButton-root + .MuiButton-root": {
              // Subtle divider between contained buttons
              borderLeft: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"} !important`,
            },
          }),

          // Outlined: group gets single border, NO overflow hidden (avoids clip artifacts)
          ...(isOutlined && {
            overflow: "visible",
            border: `1.5px solid ${isDark ? "rgba(255,255,255,0.25)" : "rgba(17,17,17,0.3)"}`,
            "& .MuiButton-root": {
              borderRadius: 0,
              border: "none !important",
              boxShadow: "none !important",
              background: "transparent",
              "&:hover": {
                background: isDark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(17,17,17,0.05)",
                boxShadow: "none !important",
                transform: "none",
              },
              "&:focus-visible": {
                outline: "none",
                boxShadow: "none !important",
              },
            },
            // Pill radius on the first and last button
            "& .MuiButton-root:first-of-type": {
              borderTopLeftRadius: "9999px !important",
              borderBottomLeftRadius: "9999px !important",
            },
            "& .MuiButton-root:last-of-type": {
              borderTopRightRadius: "9999px !important",
              borderBottomRightRadius: "9999px !important",
            },
            // Divider between outlined group buttons
            "& .MuiButton-root + .MuiButton-root": {
              borderLeft: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(17,17,17,0.2)"} !important`,
            },
          }),
        };
      },
    },
  },

  // ========================================================================
  // FAB
  // ========================================================================
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        boxShadow: palette.glass.fabShadow,
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-3px) scale(1.03)",
        },
        "&:active": {
          transform: "translateY(0) scale(0.97)",
        },
      },
    },
  },

  // ========================================================================
  // OUTLINED INPUT
  // ========================================================================
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: palette.glass.buttonBg,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.divider,
          transition: "border-color 0.2s ease",
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.glass.inputBorderHover,
        },

        "&.Mui-focused": {
          backgroundColor: palette.glass.inputFocusBg,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.main,
            borderWidth: "1.5px",
          },
        },

        "&.Mui-error": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.error.main,
          },
        },
      },

      input: {
        fontSize: "0.9375rem",
        color: palette.text.primary,
      },
      multiline: {
        padding: "13px 18px",
      },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          fontSize: "0.85rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 36,
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "6px 14px",
            fontSize: "0.85rem",
          },
          "&.MuiInputBase-multiline": {
            padding: "6px 14px",
            alignItems: "flex-start",
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: "0.9375rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 48,
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "12px 18px",
            fontSize: "0.9375rem",
          },
          "&.MuiInputBase-multiline": {
            padding: "12px 18px",
            alignItems: "flex-start",
          },
        },
      },
      {
        props: { size: "large" as any },
        style: {
          fontSize: "1.1rem",
          "&:not(.MuiInputBase-multiline)": {
            minHeight: 56,
          },
          "& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)": {
            padding: "16px 20px",
            fontSize: "1.1rem",
          },
          "&.MuiInputBase-multiline": {
            padding: "16px 20px",
            alignItems: "flex-start",
          },
        },
      },
    ],
  },

  // ========================================================================
  // INPUT LABEL
  // ========================================================================
  MuiInputLabel: {
    styleOverrides: {
      root: ({ ownerState }) => {
        let translate = "translate(18px, 13px) scale(1)"; // medium
        let shrinkTranslate = "translate(18px, -9px) scale(0.75)";

        if (ownerState.size === "small") {
          translate = "translate(14px, 8px) scale(1)";
          shrinkTranslate = "translate(14px, -9px) scale(0.75)";
        } else if ((ownerState.size as string) === "large") {
          translate = "translate(20px, 17px) scale(1)";
          shrinkTranslate = "translate(20px, -9px) scale(0.75)";
        }

        return {
          fontSize: "0.9375rem",
          color: palette.text.secondary,
          "&.Mui-focused": {
            color: palette.primary.main,
          },
          // Use explicit class targeting and !important to beat MUI's default specificity
          "&.MuiInputLabel-outlined": {
            transform: `${translate} !important`,
            "&.MuiInputLabel-shrink": {
              transform: `${shrinkTranslate} !important`,
            },
          },
          ...(ownerState.variant === "outlined" && {
            // Also ensure that the legend width accommodates the horizontal padding changes
            "& + .MuiOutlinedInput-root > fieldset > legend": {
              marginLeft:
                ownerState.size === "small"
                  ? 0
                  : (ownerState.size as string) === "large"
                    ? 6
                    : 4,
            },
          }),
        };
      },
    },
  },

  // ========================================================================
  // SELECT
  // ========================================================================
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          "& .MuiMenuItem-root": {
            minHeight: "32px !important",
            padding: "4px 12px !important",
            fontSize: "0.85rem !important",
          },
        },
      },
    },
  },

  // ========================================================================
  // AUTOCOMPLETE
  // ========================================================================
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        borderRadius: 18,
        backgroundColor: palette.glass.paperBg,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.paperShadow,
      },
    },
  },
});
