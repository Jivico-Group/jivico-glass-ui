import type { ComponentType, CSSProperties, Key, ReactNode } from "react";

import type { SxProps, Theme } from "@mui/material/styles";

/**
 * Number of visible items at each breakpoint.
 */
export type RailColumns = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

/**
 * Explicit item width at each breakpoint.
 *
 * When provided, itemWidth takes precedence
 * over columns.
 */
export type RailItemWidth = {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
};

/**
 * Cursor applied to the rail root.
 */
export type RailCursor = "default" | "pointer" | "grab" | "auto";

/**
 * Navigation controls displayed by the rail.
 */
export type RailNavigation = "arrows" | "dots" | "both" | "none";

/**
 * Hover / interaction transition applied
 * to rail items.
 *
 * - none: no visual interaction
 * - fade: overlay fades in
 * - scale: image gently scales
 * - lift: item lifts and image scales
 */
export type RailTransition = "none" | "fade" | "scale" | "lift";

/**
 * Props supplied to a custom image component.
 *
 * This intentionally exposes only the image
 * capabilities that Rails controls.
 *
 * This makes Rails compatible with:
 *
 * - Next.js Image
 * - lazy image components
 * - custom image components
 * - other React image implementations
 *
 * Rails internally manages the dimensions
 * through `fill` and the image container.
 */
export interface RailImageProps {
  /**
   * Image source.
   */
  src: string;

  /**
   * Alternative text.
   */
  alt: string;

  /**
   * Fill the parent image container.
   *
   * Rails sets this internally.
   */
  fill?: boolean;

  /**
   * Responsive image sizes.
   */
  sizes?: string;

  /**
   * Whether the image should be prioritized.
   */
  priority?: boolean;

  /**
   * Optional loading behavior.
   */
  loading?: "lazy" | "eager";

  /**
   * Inline image styles.
   */
  style?: CSSProperties;

  /**
   * Optional class name.
   */
  className?: string;
}

/**
 * Image component accepted by Rails.
 *
 * Example:
 *
 * import Image from "next/image";
 *
 * <Rails
 *   ImageComponent={Image}
 * />
 */
export type RailImageComponent = ComponentType<RailImageProps>;

/**
 * Context supplied when rendering
 * rail content.
 */
export interface RailRenderContext<T> {
  /**
   * Current item.
   */
  item: T;

  /**
   * Current item index.
   */
  index: number;
}

/**
 * Context supplied to a custom image renderer.
 */
export interface RailImageContext<T> extends RailRenderContext<T> {
  /**
   * Resolved image source.
   */
  src: string;
}

/**
 * Context supplied to custom navigation buttons.
 */
export interface RailNavigationContext {
  /**
   * Navigation action.
   */
  onClick: () => void;

  /**
   * Whether the navigation action
   * is currently unavailable.
   */
  disabled: boolean;
}

/**
 * Generic horizontal content rail.
 *
 * Rails does not know what T represents.
 *
 * It can therefore be used for:
 *
 * - products
 * - categories
 * - collections
 * - brands
 * - editorial cards
 * - campaigns
 * - lookbooks
 * - articles
 * - highlights
 * - any custom data structure
 */
export interface RailProps<T> {
  /**
   * Data consumed by the rail.
   *
   * The rail does not know what T represents.
   */
  items: T[];

  /**
   * Unique key for each item.
   */
  getKey: (item: T, index: number) => Key;

  /**
   * Image resolver used by the built-in renderer.
   *
   * Required when using the built-in item renderer.
   */
  getImage: (item: T, index: number) => string;

  /**
   * Optional title resolver for the built-in renderer.
   *
   * Example:
   *
   * getTitle={(product) => product.name}
   */
  getTitle?: (item: T, index: number) => ReactNode;

  /**
   * Custom image component.
   *
   * Rails manages the image props internally.
   *
   * Example:
   *
   * import Image from "next/image";
   *
   * <Rails
   *   ImageComponent={Image}
   * />
   *
   * This is the recommended way to integrate
   * framework-specific image implementations.
   */
  ImageComponent?: RailImageComponent;

  /**
   * Custom content rendered below
   * the image/title area.
   *
   * Useful for:
   *
   * - price
   * - rating
   * - sale price
   * - badges
   * - metadata
   * - product information
   */
  renderContent?: (context: RailRenderContext<T>) => ReactNode;

  /**
   * Completely replace the default item UI.
   *
   * Use this when the entire card needs
   * to be customized.
   */
  renderItem?: (context: RailRenderContext<T>) => ReactNode;

  /**
   * Advanced custom image renderer.
   *
   * This takes precedence over ImageComponent.
   *
   * Use this when the image requires completely
   * custom rendering logic.
   */
  renderImage?: (context: RailImageContext<T>) => ReactNode;

  /**
   * Number of visible items at each breakpoint.
   *
   * Example:
   *
   * xs: 2
   * sm: 3
   * md: 4
   * lg: 5
   */
  columns?: RailColumns;

  /**
   * Alternative to columns.
   *
   * Useful for editorial layouts where
   * the next item should partially remain visible.
   *
   * When supplied, itemWidth takes precedence
   * over columns.
   */
  itemWidth?: RailItemWidth;

  /**
   * Spacing between items.
   *
   * Uses the same unit as the CSS gap value.
   *
   * Example:
   *
   * gap={2}
   */
  gap?: number;

  /**
   * Horizontal alignment when there is not
   * enough content to fill the rail.
   */
  justifyContent?: "flex-start" | "center" | "flex-end";

  /**
   * Navigation controls.
   *
   * Defaults to "arrows".
   */
  navigation?: RailNavigation;

  /**
   * Custom previous button.
   */
  renderPreviousButton?: (context: RailNavigationContext) => ReactNode;

  /**
   * Custom next button.
   */
  renderNextButton?: (context: RailNavigationContext) => ReactNode;

  /**
   * Enable horizontal touch scrolling.
   *
   * Defaults to true.
   */
  swipe?: boolean;

  /**
   * Automatically advance the rail.
   *
   * Defaults to false.
   */
  autoplay?: boolean;

  /**
   * Time between automatic movements
   * in milliseconds.
   *
   * Defaults to 5000.
   */
  interval?: number;

  /**
   * Pause autoplay while the pointer
   * is over the rail.
   *
   * Defaults to true.
   */
  pauseOnHover?: boolean;

  /**
   * Whether navigation wraps around
   * when reaching the beginning/end.
   *
   * Also controls the end behavior
   * of autoplay.
   *
   * Defaults to false.
   */
  loop?: boolean;

  /**
   * Number of items moved per navigation action.
   *
   * Defaults to one item.
   */
  step?: number;

  /**
   * Snap items into position after movement.
   *
   * Defaults to true.
   */
  snap?: boolean;

  /**
   * Hover / interaction transition.
   *
   * This does not control horizontal scrolling.
   */
  transition?: RailTransition;

  /**
   * Aspect ratio for the built-in image renderer.
   *
   * Examples:
   *
   * "1 / 1"
   * "4 / 5"
   * "3 / 4"
   * "16 / 9"
   */
  imageAspectRatio?: string;

  /**
   * Border radius for the built-in image renderer.
   */
  radius?: number | string;

  /**
   * Optional custom item container styles.
   */
  itemSx?: SxProps<Theme>;

  /**
   * Root styles.
   */
  sx?: SxProps<Theme>;

  /**
   * Root class name.
   */
  className?: string;

  /**
   * Accessibility label.
   */
  "aria-label"?: string;

  /**
   * Cursor applied to the rail.
   */
  cursor?: RailCursor;
}
