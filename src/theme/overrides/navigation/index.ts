import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getAppBarOverrides } from "./appBar";
import { getToolbarOverrides } from "./toolbar";
import { getTabsOverrides } from "./tabs";
import { getDrawerOverrides } from "./drawer";
import { getMenuOverrides } from "./menus";
import { getListOverrides } from "./lists";
import { getPaginationOverrides } from "./pagination";
import { getStepperOverrides } from "./stepper";

export const getNavigationOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getAppBarOverrides(palette, isDark),
  ...getToolbarOverrides(),
  ...getTabsOverrides(isDark),
  ...getDrawerOverrides,
  ...getMenuOverrides(palette, isDark),
  ...getListOverrides(palette, isDark),
  ...getPaginationOverrides(palette),
  ...getStepperOverrides(palette, isDark),
});
