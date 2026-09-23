import type {
  ComponentType,
  CSSProperties,
  HTMLAttributeAnchorTarget,
  MouseEvent,
  ReactNode,
} from "react";

import type { SxProps, Theme } from "@mui/material/styles";

/**
 * Visual layout variant.
 */
export type SpotlightVariant = "overlay" | "split" | "minimal";

/**
 * General visual size.
 */
export type SpotlightSize = "small" | "medium" | "large";

/**
 * Image cropping position.
 *
 * Supports both named positions and
 * arbitrary CSS object-position values.
 */
export type SpotlightImagePosition =
  | "top"
  | "center"
  | "bottom"
  | "left"
  | "right"
  | string;

/**
 * Responsive dimension.
 */
export type SpotlightDimension =
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
 * Spotlight CTA.
 */
export interface SpotlightAction {
  /**
   * Button label.
   */
  label: string;

  /**
   * Optional navigation URL.
   *
   * This remains plain data and does not
   * contain a React routing component.
   */
  href?: string;

  /**
   * Optional click handler.
   *
   * Used for actions that do not navigate.
   */
  onClick?: (event?: React.MouseEvent) => void;

  /**
   * Optional target.
   */
  target?: HTMLAttributeAnchorTarget;

  /**
   * Optional rel attribute.
   */
  rel?: string;

  /**
   * Accessible label.
   */
  ariaLabel?: string;
}

/**
 * Props passed internally to a custom image component.
 *
 * Spotlight manages the image dimensions through
 * `fill` and the surrounding container.
 */
export interface SpotlightImageProps {
  /**
   * Image source.
   */
  src: string;

  /**
   * Accessible image description.
   */
  alt: string;

  /**
   * Fill the Spotlight image container.
   *
   * Spotlight manages this internally.
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
   * Optional loading strategy.
   */
  loading?: "lazy" | "eager";

  /**
   * Image styles.
   */
  style?: CSSProperties;

  /**
   * Optional class name.
   */
  className?: string;
}

/**
 * Custom image component.
 *
 * Compatible with:
 *
 * - Next.js Image
 * - lazy image libraries
 * - custom React image components
 */
export type SpotlightImageComponent = ComponentType<SpotlightImageProps>;

/**
 * Advanced image renderer context.
 */
export interface SpotlightImageContext {
  /**
   * Main image source.
   */
  src: string;

  /**
   * Optional mobile image source.
   */
  mobileImage?: string;

  /**
   * Image alt text.
   */
  alt: string;

  /**
   * Image cropping position.
   */
  imagePosition: SpotlightImagePosition;
}

/**
 * Spotlight component props.
 */
export interface SpotlightProps {
  /**
   * Main desktop image.
   */
  image: string;

  /**
   * Optional mobile-specific image.
   */
  mobileImage?: string;

  /**
   * Accessible image description.
   */
  alt?: string;

  /**
   * Custom image component.
   *
   * Example:
   *
   * import Image from "next/image";
   *
   * <Spotlight
   *   ImageComponent={Image}
   * />
   */
  ImageComponent?: SpotlightImageComponent;

  /**
   * Advanced custom image renderer.
   *
   * This takes precedence over ImageComponent.
   */
  renderImage?: (context: SpotlightImageContext) => ReactNode;

  /**
   * Optional destination for the complete Spotlight.
   *
   * Spotlight renders this as a semantic
   * <a href="..."> when provided.
   *
   * Native browser navigation is prevented.
   * Use `onNavigate` for actual routing.
   */
  href?: string;

  /**
   * Accessible label for the complete Spotlight link.
   */
  linkLabel?: string;

  /**
   * Handles navigation for the complete Spotlight.
   *
   * Spotlight renders a semantic <a href="...">,
   * prevents native navigation, and delegates
   * actual routing to the consuming application.
   *
   * Example with Next.js:
   *
   * const router = useRouter();
   *
   * <Spotlight
   *   href="/collections/originals"
   *   onNavigate={() => {
   *     router.push("/collections/originals");
   *   }}
   * />
   */
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;

  /**
   * Small text above the title.
   */
  eyebrow?: ReactNode;

  /**
   * Main spotlight title.
   */
  title?: ReactNode;

  /**
   * Supporting description.
   */
  description?: ReactNode;

  /**
   * Optional CTA.
   */
  action?: SpotlightAction;

  /**
   * Visual layout.
   *
   * overlay:
   * Content appears over the image.
   *
   * split:
   * Image and content appear side by side.
   *
   * minimal:
   * Image followed by content underneath.
   */
  variant?: SpotlightVariant;

  /**
   * Controls the general visual size.
   */
  size?: SpotlightSize;

  /**
   * Controls the proportional aspect ratio.
   *
   * Examples:
   *
   * "16 / 7"
   * "21 / 9"
   * "4 / 3"
   */
  aspectRatio?: string;

  /**
   * Explicit height.
   *
   * Supports:
   *
   * 100
   * "100px"
   * "60vh"
   * responsive values
   */
  height?: SpotlightDimension;

  /**
   * Minimum height.
   */
  minHeight?: SpotlightDimension;

  /**
   * Maximum height.
   */
  maxHeight?: SpotlightDimension;

  /**
   * Controls image cropping position.
   *
   * Examples:
   *
   * "center"
   * "top"
   * "50% 30%"
   */
  imagePosition?: SpotlightImagePosition;

  /**
   * Responsive image sizes passed to
   * the custom ImageComponent.
   */
  imageSizes?: string;

  /**
   * Whether the main image should be prioritized.
   */
  imagePriority?: boolean;

  /**
   * Border radius.
   *
   * Number values use the theme spacing system.
   * Strings are passed directly to CSS.
   */
  radius?: number | string;

  /**
   * Optional custom content rendered
   * after the action.
   */
  children?: ReactNode;

  /**
   * MUI sx overrides.
   */
  sx?: SxProps<Theme>;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Accessible label for the Spotlight.
   */
  "aria-label"?: string;
}
