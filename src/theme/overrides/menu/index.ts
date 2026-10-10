import { getMenuOverrides } from "./menu.js";
import { getMenuItemOverrides } from "./menuItem.js";
import { getMenuListOverrides } from "./menuList.js";
import { getMenuPaperOverrides } from "./menuPaper.js";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

export const getMenuRootOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  ...getMenuItemOverrides(palette, isDark),
  ...getMenuListOverrides(palette, isDark),
  ...getMenuOverrides(palette, isDark),
});

export type { MenuColor, MenuSurface, MenuSize } from "./menu.js";
