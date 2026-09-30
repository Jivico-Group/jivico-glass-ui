import type {
  MouseEvent,
} from "react";

import type { SxProps, Theme } from "@mui/material/styles";
import type { AspectRatio, ResponsiveAspectRatio } from "../../types/aspectRatio.js";
import type {
  ShowcaseAction,
  ShowcaseButtonColor,
  ShowcaseDimension,
  ShowcaseImageComponent,
  ShowcaseImageComponentProps,
  ShowcaseItem,
  ShowcaseMedia,
  ShowcaseRadius,
  ShowcaseSize,
  ShowcaseVariant,
} from "../showcase/Showcase.types.js";

// ─── Re-exported Spotlight Types (Exact 1:1 match with Showcase) ─────────────

export type SpotlightSize = ShowcaseSize;
export type SpotlightVariant = ShowcaseVariant;
export type SpotlightRadius = ShowcaseRadius;
export type SpotlightButtonColor = ShowcaseButtonColor;
export type SpotlightDimension = ShowcaseDimension;
export type SpotlightImageComponentProps = ShowcaseImageComponentProps;
export type SpotlightImageComponent = ShowcaseImageComponent;
export type SpotlightMedia = ShowcaseMedia;
export type SpotlightAction = ShowcaseAction;
export type SpotlightItem = ShowcaseItem;

export interface SpotlightProps {
  /**
   * Spotlight item (exact same data structure as ShowcaseItem).
   */
  item: ShowcaseItem;

  /**
   * Custom image renderer (e.g. Next/Image).
   */
  ImageComponent?: ShowcaseImageComponent;

  imageSizes?: string;
  imagePriority?: boolean;

  /**
   * Handles navigation for the complete media / CTA button area.
   */
  onNavigate?: (
    item: ShowcaseItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => void;

  variant?: ShowcaseVariant;
  size?: ShowcaseSize;
  radius?: ShowcaseRadius;

  height?: ShowcaseDimension;
  minHeight?: ShowcaseDimension;
  maxHeight?: ShowcaseDimension;
  aspectRatio?: AspectRatio | ResponsiveAspectRatio;

  containerSx?: SxProps<Theme>;
  className?: string;
  "aria-label"?: string;
}
