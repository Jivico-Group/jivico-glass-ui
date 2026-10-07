import { getAppBarOverrides } from "./appBar.js";
import { getBottomNavigationOverrides } from "./bottomNavigation.js";
import { getDrawerOverrides } from "./drawer.js";
import { getListOverrides } from "./list";
import { getMenuOverrides } from "./menus.js";
import { getPaginationOverrides } from "./pagination.js";
import { getStepperOverrides } from "./stepper.js";
import { getTabsOverrides } from "./tabs.js";
import { getToolbarOverrides } from "./toolbar.js";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getNavigationOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
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
