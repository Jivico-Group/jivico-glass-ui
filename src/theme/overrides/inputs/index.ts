import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

import { getButtonOverrides } from "./button";
import { getButtonGroupOverrides } from "./buttonGroup";
import { getFabOverrides } from "./fab";
import { getOutlinedInputOverrides } from "./outlinedInput";
import { getInputLabelOverrides } from "./inputLabel";
import { getFormHelperTextOverrides } from "./formHelperText";
import { getSelectOverrides } from "./select";
import { getAutocompleteOverrides } from "./autocomplete";

export const getInputOverrides = (
  palette: JivicoPalette,
  isDark: boolean,
): Components<Theme> => ({
  ...getButtonOverrides(palette, isDark),
  ...getButtonGroupOverrides(isDark),
  ...getFabOverrides(palette),
  ...getOutlinedInputOverrides(palette, isDark),
  ...getInputLabelOverrides(palette),
  ...getFormHelperTextOverrides(palette),
  ...getSelectOverrides(palette, isDark),
  ...getAutocompleteOverrides(palette, isDark),
});
