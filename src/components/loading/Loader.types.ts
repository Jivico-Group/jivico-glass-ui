import type React from "react";
import type { CircularProgressProps, SxProps, Theme } from "@mui/material";

export type LoaderDimension = number | string;

/**
 * Valid image source representation.
 * Supports standard URL strings (SVG, animated SVG, WebP, GIF, PNG, JPG, data URLs)
 * as well as static asset objects (e.g. Next.js StaticImageData or bundler asset imports).
 */
export type LoaderImageSource =
  | string
  | {
      src: string;
      height?: number;
      width?: number;
      blurDataURL?: string;
      blurWidth?: number;
      blurHeight?: number;
      [key: string]: unknown;
    };

export interface LoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /**
   * Primary image source.
   * Rendered in Light mode, or as fallback in Dark mode when darkSrc is omitted.
   * Supports SVG, animated SVG, WebP, animated WebP, GIF, PNG, JPG/JPEG.
   */
  src?: LoaderImageSource;

  /**
   * Optional Dark mode image source.
   * When provided, automatically rendered when the active theme is Dark mode.
   */
  darkSrc?: LoaderImageSource;

  /**
   * Optional custom image component (e.g. Next.js Image or custom picture element).
   * When omitted, renders a standard native <img> element.
   */
  ImageComponent?: React.ElementType;

  /**
   * Additional properties forwarded directly to the image renderer.
   * (e.g. priority, unoptimized, quality).
   */
  imageProps?: Record<string, unknown>;

  /**
   * Width of the loader. Can be a number (in pixels) or a CSS string (e.g. "4rem", "64px").
   * @default 48
   */
  width?: LoaderDimension;

  /**
   * Height of the loader. Can be a number (in pixels) or a CSS string (e.g. "4rem", "64px").
   * @default 48
   */
  height?: LoaderDimension;

  /**
   * Material UI semantic color for the CircularProgress spinner.
   * In Jivico Glass UI, "info" is configured as the Apple-style blue primary brand accent.
   * @default "info"
   */
  color?: CircularProgressProps["color"];

  /**
   * Material UI CircularProgress variant.
   * @default "indeterminate"
   */
  variant?: CircularProgressProps["variant"];

  /**
   * The value of the progress indicator for the determinate variant (0-100).
   */
  value?: number;

  /**
   * The thickness of the CircularProgress circle stroke.
   */
  thickness?: number;

  /**
   * Explicit size override for the spinner if different from width/height.
   */
  size?: number | string;

  /**
   * Accessible alternative text for the image or screen readers.
   * @default "Loading..."
   */
  alt?: string;

  /**
   * CSS object-fit property for custom image scaling.
   * @default "contain"
   */
  objectFit?: React.CSSProperties["objectFit"];

  /**
   * Optional callback invoked when the image fails to load.
   */
  onImageError?: (error: React.SyntheticEvent<HTMLImageElement, Event> | unknown) => void;

  /**
   * Optional className applied to the root container.
   */
  className?: string;

  /**
   * MUI system styling prop for the root container.
   */
  sx?: SxProps<Theme>;
}
