import { BRAND_COLORS } from "./brand.js";
import { PRIMARY_COLORS } from "./primary.js";
import { SECONDARY_COLORS } from "./secondary.js";
import { ACCENT_COLORS } from "./accent.js";
import { SEMANTIC_COLORS } from "./semantic.js";
import { BACKGROUND_COLORS } from "./background.js";
import { TEXT_COLORS } from "./text.js";
import { DIVIDER_COLORS } from "./divider.js";
import { ACTION_COLORS } from "./action.js";
import { GLASS_COLORS } from "./glass.js";
import { ALERT_RGB } from "./alerts.js";
import { GRADIENT_COLORS } from "./gradients.js";

export * from "./brand.js";
export * from "./primary.js";
export * from "./secondary.js";
export * from "./accent.js";
export * from "./semantic.js";
export * from "./background.js";
export * from "./text.js";
export * from "./divider.js";
export * from "./action.js";
export * from "./glass.js";
export * from "./alerts.js";
export * from "./gradients.js";

export const COLORS = {
  brand: BRAND_COLORS,
  primary: PRIMARY_COLORS,
  secondary: SECONDARY_COLORS,
  accent: ACCENT_COLORS,
  ...SEMANTIC_COLORS,
  background: BACKGROUND_COLORS,
  text: TEXT_COLORS,
  divider: DIVIDER_COLORS,
  action: ACTION_COLORS,
  white: "#FFFFFF",
  black: "#0A0A0A",
  glass: GLASS_COLORS,
  alertRgb: ALERT_RGB,
  gradients: GRADIENT_COLORS,
};
