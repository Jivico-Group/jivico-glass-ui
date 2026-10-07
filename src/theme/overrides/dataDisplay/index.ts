import { getAvatarOverrides } from "./avatar";
import { getBadgeOverrides } from "./badge";
import { getChipOverrides } from "./chip";
import { getDividerOverrides } from "./divider";
import { getTypographyOverrides } from "./typography";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getDataDisplayOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  ...getChipOverrides(palette, isDark),
  ...getAvatarOverrides(palette, isDark),
  ...getDividerOverrides(palette),
  ...getBadgeOverrides(palette, isDark),
  ...getTypographyOverrides(isDark),
});
