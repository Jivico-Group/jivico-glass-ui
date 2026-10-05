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
  ShowcaseContentAlign,
  ShowcaseButtonSize,
} from "../showcase/Showcase.types.js";

// ─── Re-exported Spotlight Types (Exact 1:1 match with Showcase) ─────────────

export type SpotlightSize = ShowcaseSize;
export type SpotlightVariant = ShowcaseVariant;
export type SpotlightRadius = ShowcaseRadius;
export type SpotlightButtonColor = ShowcaseButtonColor;
export type SpotlightButtonSize = ShowcaseButtonSize;
export type SpotlightDimension = ShowcaseDimension;
export type SpotlightImageComponentProps = ShowcaseImageComponentProps;
export type SpotlightImageComponent = ShowcaseImageComponent;
export type SpotlightMedia = ShowcaseMedia;
export type SpotlightAction = ShowcaseAction;
export type SpotlightItem = ShowcaseItem;
export type SpotlightContentAlign = ShowcaseContentAlign;

export interface SpotlightProps {
  /**
   * Spotlight item (exact same data structure as ShowcaseItem).
   */
  item: SpotlightItem;

  /**
   * Custom image renderer (e.g. Next/Image).
   */
  ImageComponent?: SpotlightImageComponent;

  imageSizes?: string;
  imagePriority?: boolean;

  /**
   * Handles navigation for the complete media / CTA button area.
   */
  onNavigate?: (
    item: SpotlightItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => void;

  variant?: SpotlightVariant;
  size?: SpotlightSize;
  radius?: SpotlightRadius;

  height?: SpotlightDimension;
  minHeight?: SpotlightDimension;
  maxHeight?: SpotlightDimension;
  aspectRatio?: AspectRatio | ResponsiveAspectRatio;

  containerSx?: SxProps<Theme>;
  className?: string;
  "aria-label"?: string;
}
