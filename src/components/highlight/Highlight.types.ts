import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

export type HighlightVariant = "overlay" | "bottom" | "center" | "minimal";

export type HighlightSize = "small" | "medium" | "large";

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

/**
 * Props required by a custom image component.
 *
 * This keeps Highlight independent from Next.js while allowing
 * consumers to provide an image implementation such as Next/Image.
 */
export interface HighlightImageProps {
  src: string;
  alt: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  style?: CSSProperties;
  className?: string;
  fill?: boolean;
}

export interface HighlightProps {
  /**
   * Main image source.
   */
  image: string;

  /**
   * Optional mobile image source.
   */
  mobileImage?: string;

  /**
   * Image alt text.
   */
  alt?: string;

  /**
   * Custom image component.
   *
   * Example:
   *
   * ImageComponent={Image}
   *
   * The library itself remains framework independent.
   */
  ImageComponent?: ComponentType<HighlightImageProps>;

  /**
   * Responsive image sizes hint.
   */
  imageSizes?: string;

  /**
   * Small supporting label.
   */
  eyebrow?: ReactNode;

  /**
   * Main title.
   */
  title?: ReactNode;

  /**
   * Supporting description.
   */
  description?: ReactNode;

  /**
   * Optional CTA.
   */
  action?: HighlightAction;

  /**
   * Visual presentation variant.
   */
  variant?: HighlightVariant;

  /**
   * Preset component size.
   */
  size?: HighlightSize;

  /**
   * Explicit height.
   */
  height?: HighlightDimension;

  /**
   * Minimum height.
   */
  minHeight?: HighlightDimension;

  /**
   * Maximum height.
   */
  maxHeight?: HighlightDimension;

  /**
   * Aspect ratio used when height is not explicitly defined.
   */
  aspectRatio?: string;

  /**
   * CSS object-position.
   */
  imagePosition?: string;

  /**
   * Border radius.
   *
   * Numbers are resolved using theme.spacing().
   */
  radius?: number | string;

  /**
   * Whether the image should be loaded with priority.
   */
  imagePriority?: boolean;

  /**
   * Additional custom content.
   */
  children?: ReactNode;

  /**
   * MUI sx overrides.
   */
  sx?: SxProps<Theme>;

  /**
   * Optional CSS class name.
   */
  className?: string;

  /**
   * Accessible label.
   */

  "aria-label"?: string;
}
