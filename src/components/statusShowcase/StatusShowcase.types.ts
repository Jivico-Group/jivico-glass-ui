import type { MouseEventHandler, ReactNode } from "react";

export type StatusShowcaseSize = "small" | "medium" | "large";

export type StatusShowcaseSurface = "standard" | "glass";

export interface StatusShowcaseImage {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export interface StatusShowcaseProps {
  /**
   * Optional illustration / image.
   */
  image?: StatusShowcaseImage;

  /**
   * Custom image renderer.
   *
   * Recommended for Next.js applications so the component
   * does not depend on next/image.
   */
  renderImage?: (image: StatusShowcaseImage) => ReactNode;

  /**
   * Small status/code displayed above the heading.
   *
   * Example: 404, 500, COMING SOON.
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
   * Optional content between description and actions.
   */
  children?: ReactNode;

  /**
   * Primary CTA.
   */
  actionLabel?: ReactNode;

  /**
   * Primary CTA handler.
   */
  onAction?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Secondary CTA.
   */
  secondaryActionLabel?: ReactNode;

  /**
   * Secondary CTA handler.
   */
  onSecondaryAction?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Optional logo, signature, text, or custom React content.
   */
  signature?: ReactNode;

  /**
   * Overall visual scale.
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
   * Optional class name.
   */
  className?: string;

  /**
   * MUI sx overrides.
   */
  sx?: Record<string, unknown>;
}
