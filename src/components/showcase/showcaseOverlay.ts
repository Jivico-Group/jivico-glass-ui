import type { CSSProperties } from "react";
import type { ShowcaseVariant } from "./Showcase.types.js";

/**
 * Returns CSS properties (gradients, visibility) for dark gradient overlay veils.
 * Shared across Showcase (carousels) and Spotlight (static feature banners).
 */
export const getVariantOverlay = (variant: ShowcaseVariant = "editorial"): CSSProperties => {
  switch (variant) {
    case "none":
      return {
        display: "none",
      };

    case "minimal":
      return {
        background: "linear-gradient(90deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.14) 44%, rgba(0,0,0,0.02) 72%)",
      };

    case "glass":
      return {
        background: "linear-gradient(90deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.20) 46%, rgba(0,0,0,0.03) 75%)",
      };

    case "editorial-soft":
      return {
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.20) 34%, rgba(0,0,0,0.06) 58%, rgba(0,0,0,0.00) 78%), linear-gradient(180deg, rgba(0,0,0,0.02) 55%, rgba(0,0,0,0.18) 100%)",
      };

    case "spotlight":
    case "editorial-center":
      return {
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.48) 42%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.02) 100%), linear-gradient(180deg, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.32) 100%)",
      };

    case "spotlight-soft":
    case "editorial-center-soft":
      return {
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.26) 42%, rgba(0,0,0,0.08) 72%, rgba(0,0,0,0.00) 100%), linear-gradient(180deg, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.18) 100%)",
      };

    case "cinematic-soft":
    case "editorial-full-soft":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.44) 100%), linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.12) 100%)",
      };

    case "cinematic-deep":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.80) 100%), linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.32) 100%)",
      };

    case "cinematic":
    case "editorial-full":
      return {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.68) 100%), linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.22) 100%)",
      };

    case "editorial":
    default:
      return {
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.34) 34%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0.02) 78%), linear-gradient(180deg, rgba(0,0,0,0.04) 55%, rgba(0,0,0,0.28) 100%)",
      };
  }
};
