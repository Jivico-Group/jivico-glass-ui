import { getAlertOverrides } from "./alert";
import { getDialogContentOverrides } from "./dailogContent";
import { getDialogOverrides } from "./dialog";
import { getLinearProgressOverrides } from "./linearProgress";
import { getSkeletonOverrides } from "./skeleton";
import { getTooltipOverrides } from "./tooltip";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getFeedbackOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  ...getAlertOverrides(palette, isDark),
  ...getTooltipOverrides(palette, isDark),
  ...getDialogOverrides(palette, isDark),
  ...getDialogContentOverrides(palette, isDark),
  ...getLinearProgressOverrides(palette, isDark),
  ...getSkeletonOverrides(palette, isDark),
});
