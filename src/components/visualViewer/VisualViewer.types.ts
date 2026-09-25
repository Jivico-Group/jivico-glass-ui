import type { ReactNode, Ref } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import type { AspectRatio } from "../../types/aspectRatio.js";

export type VisualViewerRadius = "square" | "rounded" | "soft";

export type VisualViewerNavigation = "arrows" | "none";

export type VisualViewerThumbnailPosition = "left" | "bottom" | "auto";

export type VisualViewerObjectFit = "cover" | "contain";

export interface VisualViewerDimension {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

export interface VisualViewerItem {
  id: string;
  src: string;
  alt?: string;
  /** Optional mobile-specific image. */
  mobileSrc?: string;
  /** Optional thumbnail source. Falls back to src. */
  thumbnailSrc?: string;
  /** Optional custom content rendered over the image. */
  overlay?: ReactNode;
  /** Optional metadata. */
  title?: string;
  /** Optional custom data. */
  [key: string]: unknown;
}

export interface VisualViewerImageContext {
  item: VisualViewerItem;
  index: number;
  active: boolean;
  isThumbnail: boolean;
  isFullscreen: boolean;
}

export interface VisualViewerNavigationContext {
  disabled: boolean;
  onClick: () => void;
}

export interface VisualViewerProps {
  /** Images / visual items. */
  items: VisualViewerItem[];
  /** Controlled active item. */
  activeIndex?: number;
  /** Initial active item for uncontrolled mode. */
  defaultActiveIndex?: number;
  /** Called whenever active item changes. */
  onActiveIndexChange?: (index: number, item: VisualViewerItem) => void;
  /**
   * Custom image renderer.
   * Useful for Next.js Image.
   */
  renderImage?: (context: VisualViewerImageContext) => ReactNode;
  /** Optional custom thumbnail renderer. */
  renderThumbnail?: (context: VisualViewerImageContext) => ReactNode;
  /** Responsive component height. */
  height?: VisualViewerDimension | string | number;
  /** Responsive minimum height. */
  minHeight?: VisualViewerDimension | string | number;
  /** Responsive maximum height. */
  maxHeight?: VisualViewerDimension | string | number;
  /**
   * Aspect ratio when height is not supplied.
   */
  aspectRatio?: AspectRatio | VisualViewerDimension;
  /**
   * Desktop thumbnail position.
   * "auto" means: desktop → left, mobile → bottom.
   */
  thumbnailPosition?: VisualViewerThumbnailPosition;
  /** Show navigation arrows. */
  navigation?: VisualViewerNavigation;
  /** Enable swipe. */
  swipe?: boolean;
  /** Enable mouse drag. */
  mouseDrag?: boolean;
  /** Enable keyboard navigation. */
  keyboard?: boolean;
  /** Enable fullscreen. */
  fullscreen?: boolean;
  /** Enable zoom. */
  zoom?: boolean;
  /** Object fit for the main image. */
  objectFit?: VisualViewerObjectFit;
  /** Allow wrapping from last image to first. */
  loop?: boolean;
  /** Radius style. */
  radius?: VisualViewerRadius;
  /** Width of the thumbnail rail on desktop. */
  thumbnailWidth?: number | string;
  /** Thumbnail size. */
  thumbnailSize?: number | string;
  /** Gap between thumbnails. */
  thumbnailGap?: number;
  /** Gap between thumbnail rail and image. */
  mediaGap?: number;
  /** Show fullscreen button. */
  showFullscreenButton?: boolean;
  /** Show zoom button. */
  showZoomButton?: boolean;
  /**
   * Show thumbnail count overlay on final thumbnail.
   * Example: 5 visible thumbnails + "+6"
   */
  showRemainingCount?: boolean;
  /**
   * Maximum visible thumbnails.
   * Desktop default: 5, Mobile default: 5
   */
  maxVisibleThumbnails?: number;
  /** Custom previous button. */
  renderPreviousButton?: (context: VisualViewerNavigationContext) => ReactNode;
  /** Custom next button. */
  renderNextButton?: (context: VisualViewerNavigationContext) => ReactNode;
  /** Custom fullscreen button. */
  renderFullscreenButton?: (onClick: () => void) => ReactNode;
  /** Custom zoom button. */
  renderZoomButton?: (onClick: () => void, zoomed: boolean) => ReactNode;

  /** Root ref. */
  rootRef?: Ref<HTMLDivElement>;
  /** Root sx. */
  sx?: SxProps<Theme>;
  /** CSS class. */
  className?: string;
  /** Accessibility label. */
  "aria-label"?: string;
}
