import { COLORS } from "../colors/index.js";

export const buildDividerPalette = (isDark: boolean) =>
  isDark ? COLORS.divider.dark : COLORS.divider.light;
