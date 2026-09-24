import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

export type GalleryColumns = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type GalleryJustify = "start" | "center" | "end" | "stretch";

export type GalleryAlign = "start" | "center" | "end" | "stretch";

export type GalleryImageFit = "cover" | "contain" | "fill" | "none";

export type GalleryRadius = "square" | "rounded" | "soft";

export interface GalleryRenderContext<T> {
  item: T;
  index: number;
}

export interface GalleryImageContext<T> extends GalleryRenderContext<T> {
  src?: string;
  alt?: string;
}

export interface GalleryOverlayContext<T> extends GalleryRenderContext<T> {
  src?: string;
  alt?: string;
}

export interface GalleryProps<T> {
  /**
   * Items to arrange in the gallery.
   */
  items: T[];

  /**
   * Key used for each gallery item.
   */
  getKey?: (item: T, index: number) => React.Key;

  /**
   * Complete item override.
   *
   * When supplied, Gallery does not render its built-in
   * image / overlay / block structure.
   */
  renderItem?: (context: GalleryRenderContext<T>) => ReactNode;

  /**
   * Custom image renderer.
   *
   * If omitted, Gallery falls back to a native HTML <img>
   * using getImage().
   */
  renderImage?: (context: GalleryImageContext<T>) => ReactNode;

  /**
   * Optional content rendered over the image.
   */
  renderOverlay?: (context: GalleryOverlayContext<T>) => ReactNode;

  /**
   * Optional content rendered below the image.
   */
  renderBlock?: (context: GalleryRenderContext<T>) => ReactNode;

  /**
   * Image source used by the native <img> fallback.
   */
  getImage?: (item: T, index: number) => string | undefined;

  /**
   * Alt text used by the native <img> fallback.
   */
  getImageAlt?: (item: T, index: number) => string | undefined;

  /**
   * Responsive number of columns.
   */
  columns?: GalleryColumns;

  /**
   * Grid gap.
   */
  gap?: number | string;

  /**
   * Optional row-specific gap.
   */
  rowGap?: number | string;

  /**
   * Optional column-specific gap.
   */
  columnGap?: number | string;

  justifyItems?: GalleryJustify;
  alignItems?: GalleryAlign;

  /**
   * Aspect ratio of the built-in image area.
   *
   * Examples:
   * "4 / 5"
   * "1 / 1"
   * "16 / 9"
   */
  imageAspectRatio?: string;

  /**
   * object-fit used by the native <img> fallback.
   */
  imageFit?: GalleryImageFit;

  /**
   * Radius applied to the built-in image/item structure.
   */
  radius?: GalleryRadius;

  /**
   * Styles applied to each gallery item.
   */
  itemSx?: SxProps<Theme>;

  /**
   * Styles applied to the image area.
   */
  imageSx?: SxProps<Theme>;

  /**
   * Styles applied to the block below the image.
   */
  blockSx?: SxProps<Theme>;

  /**
   * Styles applied to the gallery root.
   */
  sx?: SxProps<Theme>;

  className?: string;

  "aria-label"?: string;
}
