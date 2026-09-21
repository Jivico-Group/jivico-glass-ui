import { buildBrandPalette } from "./brand.js";
import { buildPrimaryPalette } from "./primary.js";
import { buildSecondaryPalette } from "./secondary.js";
import { buildAccentPalette } from "./accent.js";
import { buildSemanticPalette } from "./semantic.js";
import { buildBackgroundPalette } from "./background.js";
import { buildTextPalette } from "./text.js";
import { buildDividerPalette } from "./divider.js";
import { buildGlassPalette } from "./glass.js";
import { buildActionPalette } from "./action.js";
import { buildAlertPalette } from "./alert.js";
import { buildGradientsPalette } from "./gradients.js";
import { buildAliasesPalette } from "./aliases.js";

export * from "./brand.js";
export * from "./primary.js";
export * from "./secondary.js";
export * from "./accent.js";
export * from "./semantic.js";
export * from "./background.js";
export * from "./text.js";
export * from "./divider.js";
export * from "./glass.js";
export * from "./action.js";
export * from "./alert.js";
export * from "./gradients.js";
export * from "./aliases.js";

export const buildPalette = (mode: "light" | "dark") => {
  const isDark = mode === "dark";

  return {
    brand: buildBrandPalette(),
    primary: buildPrimaryPalette(isDark),
    accent: buildAccentPalette(isDark),
    secondary: buildSecondaryPalette(isDark),
    ...buildSemanticPalette(isDark),
    background: buildBackgroundPalette(isDark),
    text: buildTextPalette(isDark),
    divider: buildDividerPalette(isDark),
    glass: buildGlassPalette(isDark),
    action: buildActionPalette(isDark),
    alert: buildAlertPalette(isDark),
    gradients: buildGradientsPalette(),
    ...buildAliasesPalette(isDark),
  };
};

export type JivicoPalette = ReturnType<typeof buildPalette>;
