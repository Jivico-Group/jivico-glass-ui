import { COLORS } from "../colors/index.js";

export const buildTextPalette = (isDark: boolean) => ({
  primary: isDark ? COLORS.text.primaryDark : COLORS.text.primaryLight,
  secondary: isDark
    ? COLORS.text.secondaryDark
    : COLORS.text.secondaryLight,

  glassSurface: isDark ? "#FFFFFF" : "#000000",
  "glass-surface": isDark ? "#FFFFFF" : "#000000",
});
