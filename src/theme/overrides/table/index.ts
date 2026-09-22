import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette/index.js";

import { getTableOverrides } from "./table.js";
import { getTableHeadOverrides } from "./tableHead.js";
import { getTableBodyOverrides } from "./tableBody.js";
import { getTableRowOverrides } from "./tableRow.js";
import { getTableCellOverrides } from "./tableCell.js";
import { getTableContainerOverrides } from "./tableContainer.js";
import { getTableFooterOverrides } from "./tableFooter.js";

export const getTableRootOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getTableOverrides(palette, isDark),
  ...getTableHeadOverrides(palette, isDark),
  ...getTableBodyOverrides(palette, isDark),
  ...getTableRowOverrides(palette, isDark),
  ...getTableCellOverrides(palette, isDark),
  ...getTableContainerOverrides(palette, isDark),
  ...getTableFooterOverrides(palette, isDark),
});

export type { TableColor, TableVariant } from "./table.js";
