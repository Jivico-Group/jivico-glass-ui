import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getCardOverrides } from "./card";
import { getPaperOverrides } from "./paper";
import { getAccordionOverrides } from "./accordion";

export const getSurfaceOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getCardOverrides(palette, isDark),
  ...getPaperOverrides(palette, isDark),
  ...getAccordionOverrides(palette, isDark),
});
