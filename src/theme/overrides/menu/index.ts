import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import { getMenuOverrides } from "./menu.js";
import { getMenuItemOverrides } from "./menuItem.js";
import { getMenuListOverrides } from "./menuList.js";
import { getMenuPaperOverrides } from "./menuPaper.js";

export const getMenuRootOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getMenuOverrides(palette, isDark),
  ...getMenuItemOverrides(palette, isDark),
  ...getMenuListOverrides(palette, isDark),
  ...getMenuPaperOverrides(palette, isDark),
});

export type { MenuColor, MenuSurface, MenuSize } from "./menu.js";
