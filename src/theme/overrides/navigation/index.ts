import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getAppBarOverrides } from "./appBar.js";
import { getToolbarOverrides } from "./toolbar.js";
import { getTabsOverrides } from "./tabs.js";
import { getDrawerOverrides } from "./drawer.js";
import { getMenuOverrides } from "./menus.js";
import { getPaginationOverrides } from "./pagination.js";
import { getStepperOverrides } from "./stepper.js";
import { getBottomNavigationOverrides } from "./bottomNavigation.js";
import { getListOverrides } from "./list";

export const getNavigationOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getAppBarOverrides(palette, isDark),
  ...getToolbarOverrides(),
  ...getTabsOverrides(isDark),
  ...getDrawerOverrides(isDark),
  ...getMenuOverrides(palette, isDark),
  ...getPaginationOverrides(palette),
  ...getStepperOverrides(palette, isDark),
  ...getBottomNavigationOverrides(palette, isDark),
  ...getListOverrides(palette, isDark),
});
