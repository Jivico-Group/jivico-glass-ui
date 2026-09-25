import type React from 'react';

/* -------------------------------------------------------------------------- */
/* Image                                                                       */
/* -------------------------------------------------------------------------- */

export interface LoadingShowcaseImage {
  src: string;

  alt?: string;

  width?: number;

  height?: number;
}

/* -------------------------------------------------------------------------- */
/* Image Renderer                                                              */
/* -------------------------------------------------------------------------- */

export type LoadingShowcaseImageRenderer = (image: LoadingShowcaseImage) => React.ReactNode;

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface LoadingShowcaseProps {
  /**
   * Product / showcase image displayed in the visual area.
   */
  image?: LoadingShowcaseImage;

  /**
   * Optional custom image renderer.
   *
   * If omitted, the component renders a native img element.
   */
  renderImage?: LoadingShowcaseImageRenderer;

  /**
   * Controls whether the loading experience is still active.
   *
   * While true, the component automatically advances its
   * visual progress.
   *
   * When false, the component completes the remaining progress
   * and reaches 100%.
   *
   * Defaults to true.
   */
  loading?: boolean;

  /**
   * Main loading message.
   */
  title?: React.ReactNode;

  /**
   * Small loading status label.
   */
  loadingLabel?: React.ReactNode;

  /**
   * Optional signature / branding shown at the bottom.
   */
  signature?: React.ReactNode;

  /**
   * Optional root class name.
   */
  className?: string;
}
