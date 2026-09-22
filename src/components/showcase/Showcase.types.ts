import type { CSSProperties, ComponentType, ReactNode } from "react";

import type { ButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

export type ShowcaseTransition = "cinematic" | "fade" | "slide";

export type ShowcaseNavigation = "vertical" | "dots" | "none";

export type ShowcaseSize = "small" | "medium" | "large" | "hero";

export type ShowcaseVariant = "editorial" | "minimal" | "glass";

export type ShowcaseRadius = "square" | "rounded" | "soft";

export type ShowcaseButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "glass";

/**
 * Responsive dimension value.
 *
 * Numeric values follow MUI spacing-compatible CSS
 * behavior when used through the component's sx system.
 *
 * Strings may be used for values such as:
 * - "500px"
 * - "70vh"
 * - "clamp(420px, 60vh, 760px)"
 * - "auto"
 */
export type ShowcaseDimension =
  | number
  | string
  | {
      xs?: number | string;
      sm?: number | string;
      md?: number | string;
      lg?: number | string;
      xl?: number | string;
    };

/**
 * Props expected by an injected image component.
 *
 * Designed to work with:
 * - Next.js Image
 * - Native img wrappers
 * - Custom image components
 * - Image optimization libraries
 *
 * Showcase owns the image frame dimensions,
 * therefore `fill` is the preferred mode.
 */
export interface ShowcaseImageComponentProps {
  src: string;

  alt: string;

  fill?: boolean;

  sizes?: string;

  priority?: boolean;

  style?: CSSProperties;

  className?: string;
}

export type ShowcaseImageComponent = ComponentType<ShowcaseImageComponentProps>;

export interface ShowcaseMedia {
  src: string;

  alt: string;

  mobileSrc?: string;
}

export interface ShowcaseAction {
  label: string;

  href?: string;

  onClick?: () => void;

  color?: ShowcaseButtonColor;

  variant?: ButtonProps["variant"];

  target?: React.HTMLAttributeAnchorTarget;

  rel?: string;
}

export interface ShowcaseItem {
  id: string;

  media: ShowcaseMedia;

  eyebrow?: string;

  title: string;

  description?: string;

  action?: ShowcaseAction;

  content?: ReactNode;

  sideLabel?: string;
}

export interface ShowcaseProps {
  items: ShowcaseItem[];

  /**
   * Optional image component.
   *
   * Example:
   *
   * <Showcase
   *   items={items}
   *   ImageComponent={Image}
   * />
   *
   * If omitted, Showcase falls back to a native
   * image implementation.
   */
  ImageComponent?: ShowcaseImageComponent;

  /**
   * Image sizes attribute.
   *
   * Defaults to 100vw.
   */
  imageSizes?: string;

  /**
   * Whether the active image should receive
   * priority loading.
   *
   * Useful for an above-the-fold hero.
   */
  imagePriority?: boolean;

  variant?: ShowcaseVariant;

  size?: ShowcaseSize;

  transition?: ShowcaseTransition;

  autoplay?: boolean;

  interval?: number;

  loop?: boolean;

  pauseOnHover?: boolean;

  showArrows?: boolean;

  showProgress?: boolean;

  navigation?: ShowcaseNavigation;

  activeIndex?: number;

  defaultActiveIndex?: number;

  onActiveIndexChange?: (index: number, item: ShowcaseItem) => void;

  swipe?: boolean;

  radius?: ShowcaseRadius;

  /**
   * Explicit responsive height.
   *
   * When supplied, height takes precedence over
   * aspectRatio for determining the frame height.
   */
  height?: ShowcaseDimension;

  /**
   * Minimum responsive height.
   */
  minHeight?: ShowcaseDimension;

  /**
   * Maximum responsive height.
   */
  maxHeight?: ShowcaseDimension;

  /**
   * Optional responsive aspect-ratio override.
   *
   * Used when an explicit height is not provided.
   *
   * If omitted, the ratio is automatically selected
   * from the Showcase size.
   */
  aspectRatio?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };

  /**
   * Allows consumers to override the Showcase
   * container styling.
   */
  containerSx?: SxProps<Theme>;

  className?: string;

  "aria-label"?: string;
}
