import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export type StatusShowcaseSize = "small" | "medium" | "large";

export type StatusShowcaseSurface = "standard" | "glass";

export interface StatusShowcaseImage {
  /**
   * Image source.
   */
  src: string;

  /**
   * Accessible image description.
   */
  alt?: string;

  /**
   * Intrinsic image width.
   *
   * Used by renderImage implementations such as
   * Next.js Image.
   */
  width?: number;

  /**
   * Intrinsic image height.
   *
   * Used by renderImage implementations such as
   * Next.js Image.
   */
  height?: number;
}

export interface StatusShowcaseProps {
  /**
   * Editorial / visual illustration.
   */
  image?: StatusShowcaseImage;

  /**
   * Optional custom image renderer.
   *
   * Useful for Next.js Image, optimized image
   * components, CDN loaders, etc.
   */
  renderImage?: (image: StatusShowcaseImage) => ReactNode;

  /**
   * Small eyebrow/status text.
   *
   * Example:
   * "404 — PAGE NOT FOUND"
   */
  code?: ReactNode;

  /**
   * Main heading.
   */
  title: ReactNode;

  /**
   * Supporting description.
   */
  description?: ReactNode;

  /**
   * Optional custom content between description
   * and actions.
   */
  children?: ReactNode;

  /**
   * Primary CTA label.
   */
  actionLabel?: ReactNode;

  /**
   * Primary CTA handler.
   */
  onAction?: () => void;

  /**
   * Secondary CTA label.
   */
  secondaryActionLabel?: ReactNode;

  /**
   * Secondary CTA handler.
   */
  onSecondaryAction?: () => void;

  /**
   * Optional signature / brand message.
   */
  signature?: ReactNode;

  /**
   * Overall component scale.
   *
   * @default "medium"
   */
  size?: StatusShowcaseSize;

  /**
   * Surface treatment.
   *
   * @default "standard"
   */
  surface?: StatusShowcaseSurface;

  /**
   * Additional MUI styles.
   */
  sx?: SxProps<Theme>;

  /**
   * Optional class name.
   */
  className?: string;
}
