import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getChipOverrides } from "./chip";
import { getAvatarOverrides } from "./avatar";
import { getDividerOverrides } from "./divider";
import { getTableOverrides } from "./table";
import { getBadgeOverrides } from "./badge";
import { getTypographyOverrides } from "./typography";

export const getDataDisplayOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getChipOverrides(palette, isDark),
  ...getAvatarOverrides(palette, isDark),
  ...getDividerOverrides(palette),
  ...getTableOverrides(palette),
  ...getBadgeOverrides(palette, isDark),
  ...getTypographyOverrides(isDark),
});
