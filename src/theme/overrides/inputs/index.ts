import { getAutocompleteOverrides } from "./autocomplete";
import { getButtonOverrides } from "./button";
import { getButtonGroupOverrides } from "./buttonGroup";
import { getFabOverrides } from "./fab";
import { getFormHelperTextOverrides } from "./formHelperText";
import { getInputLabelOverrides } from "./inputLabel";
import { getOutlinedInputOverrides } from "./outlinedInput";
import { getSelectOverrides } from "./select";
import { getToggleButtonOverrides } from "./toggleButton";
import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getInputOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  ...getButtonOverrides(palette, isDark),
  ...getButtonGroupOverrides(isDark),
  ...getToggleButtonOverrides(palette, isDark),
  ...getFabOverrides(palette),
  ...getOutlinedInputOverrides(palette, isDark),
  ...getInputLabelOverrides(palette),
  ...getFormHelperTextOverrides(palette),
  ...getSelectOverrides(palette, isDark),
  ...getAutocompleteOverrides(palette, isDark),
});
