import type { Components, Theme } from "@mui/material/styles";
import { JivicoPalette } from "../../palette";

export const getOutlinedInputOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = (
          ownerState.color ? ownerState.color : "primary"
        ) as keyof typeof palette;
        const activeColorGroup = (palette[colorKey] ||
          palette.primary) as Record<string, string>;
        const activeColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover || activeColor;
        const glowColor = activeColorGroup.glow;
        const isGlass = (colorKey as string) === "glass";
        const isSemantic =
          colorKey === "success" ||
          colorKey === "warning" ||
          colorKey === "error" ||
          colorKey === "info";

        return {
          borderRadius: 12,
          backgroundColor: isGlass
            ? isDark
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.55)"
            : palette.glass.buttonBg,
          backdropFilter: isGlass ? "blur(20px) saturate(190%)" : "blur(8px)",
          WebkitBackdropFilter: isGlass
            ? "blur(20px) saturate(190%)"
            : "blur(8px)",
          boxShadow: isGlass
            ? isDark
              ? "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 14px rgba(0, 0, 0, 0.2)"
              : "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0, 0, 0, 0.04)"
            : "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isGlass
              ? isDark
                ? "rgba(255, 255, 255, 0.20)"
                : "rgba(17, 17, 17, 0.16)"
              : isSemantic
                ? activeColor
                : palette.divider,
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          },

          "&:hover": {
            ...(isGlass && {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(255, 255, 255, 0.70)",
            }),
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: isGlass
              ? isDark
                ? "rgba(255, 255, 255, 0.35)"
                : "rgba(17, 17, 17, 0.32)"
              : isSemantic
                ? hoverColor
                : palette.glass.inputBorderHover,
          },

          "&.Mui-focused": {
            backgroundColor: isGlass
              ? isDark
                ? "rgba(24, 26, 32, 0.65)"
                : "rgba(255, 255, 255, 0.90)"
              : palette.glass.inputFocusBg,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isGlass
                ? isDark
                  ? "#F6F5F2"
                  : "#111111"
                : activeColor,
              borderWidth: "1.5px",
            },
          },

          "&.Mui-error": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.error.main,
            },
          },
        };
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
});
