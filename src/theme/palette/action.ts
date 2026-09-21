import { COLORS } from "../colors/index.js";

export const buildActionPalette = (isDark: boolean) => ({
  hover: isDark ? COLORS.action.hoverDark : COLORS.action.hoverLight,

  selected: isDark
    ? COLORS.action.selectedDark
    : COLORS.action.selectedLight,
});
