import type {
  ComponentType,
  CSSProperties,
  MouseEvent,
  ReactNode,
} from "react";

import type { SxProps, Theme } from "@mui/material/styles";

export type HighlightVariant = "overlay" | "center" | "minimal";

export type HighlightSize = "small" | "medium" | "large";

export type HighlightImagePosition =
  | "top"
  | "center"
  | "bottom"
  | "left"
  | "right"
  | string;

export type HighlightDimension =
  | number
  | string
  | {
      xs?: number | string;
      sm?: number | string;
      md?: number | string;
      lg?: number | string;
      xl?: number | string;
    };

export interface HighlightAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface HighlightImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  style?: CSSProperties;
  className?: string;
}

export type HighlightImageComponent = ComponentType<HighlightImageProps>;

export interface HighlightProps {
  /**
   * Main image source.
   */
  image: string;

  /**
   * Optional mobile-specific image source.
   */
  mobileImage?: string;

  /**
   * Image alternative text.
   */
  alt?: string;
  radius?: number | string;

  /**
   * Optional custom image implementation.
   *
   * Example:
   * ImageComponent={Image}
   *
   * This can be Next.js Image or another compatible
   * image component.
   */
  ImageComponent?: HighlightImageComponent;

  /**
   * Semantic destination for the Highlight image.
   *
   * The component renders this as a real <a href="...">
   * for semantics, SEO, browser status previews, etc.
   *
   * Native navigation is prevented. Use onNavigate
   * for actual application navigation.
   */
  href?: string;

  /**
   * Accessible label for the Highlight image link.
   */
  linkLabel?: string;

  /**
   * Handles Highlight image navigation.
   *
   * The component prevents native anchor navigation
   * and delegates navigation to the consuming application.
   */
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;

  eyebrow?: ReactNode;

  title?: ReactNode;

  description?: ReactNode;

  action?: HighlightAction;

  variant?: HighlightVariant;

  size?: HighlightSize;

  height?: HighlightDimension;

  minHeight?: HighlightDimension;

  maxHeight?: HighlightDimension;

  aspectRatio?: string;

  imagePosition?: HighlightImagePosition;

  imageSizes?: string;

  imagePriority?: boolean;

  children?: ReactNode;

  sx?: SxProps<Theme>;

  className?: string;

  "aria-label"?: string;
}
