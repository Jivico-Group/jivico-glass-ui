import { COLORS } from "../colors/index.js";

export const buildBackgroundPalette = (isDark: boolean) => ({
  default: isDark ? COLORS.background.dark : COLORS.background.light,
  paper: isDark
    ? COLORS.background.paperDark
    : COLORS.background.paperLight,
});
