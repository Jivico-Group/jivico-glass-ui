import type { ReactNode } from "react";
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
   * Optional responsive aspect-ratio override.
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
