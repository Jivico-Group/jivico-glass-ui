import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getAlertOverrides } from "./alert";
import { getTooltipOverrides } from "./tooltip";
import { getDialogOverrides } from "./dialog";
import { getDialogContentOverrides } from "./dailogContent";
import { getLinearProgressOverrides } from "./linearProgress";
import { getSkeletonOverrides } from "./skeleton";

export const getFeedbackOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getAlertOverrides(palette, isDark),
  ...getTooltipOverrides(palette, isDark),
  ...getDialogOverrides(palette, isDark),
  ...getDialogContentOverrides(palette, isDark),
  ...getLinearProgressOverrides(palette, isDark),
  ...getSkeletonOverrides(palette, isDark),
});
