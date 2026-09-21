import { COLORS } from "../colors/index.js";

export const buildAlertPalette = (isDark: boolean) => ({
  success: COLORS.alertRgb.success,

  warning: isDark
    ? COLORS.alertRgb.warningDark
    : COLORS.alertRgb.warningLight,

  error: COLORS.alertRgb.error,
  info: COLORS.alertRgb.info,
});
