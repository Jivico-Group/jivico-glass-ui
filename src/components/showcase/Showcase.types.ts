import type {
  CSSProperties,
  ComponentType,
  MouseEvent,
  ReactNode,
} from "react";

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
  onClick?: (event?: React.MouseEvent) => void;

  color?: ShowcaseButtonColor;
  variant?: ButtonProps["variant"];

  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  ariaLabel?: string;
}

export interface ShowcaseItem {
  /**
   * Stable identifier for the showcase item.
   */
  id: string;

  /**
   * Main showcase media.
   */
  media: ShowcaseMedia;

  /**
   * Optional destination for the complete media/image area.
   *
   * This should normally come directly from your API.
   *
   * Showcase renders this as a semantic <a href="...">.
   */
  href?: string;

  /**
   * Accessible label for the full media link.
   */
  linkLabel?: string;

  eyebrow?: string;

  title: string;

  description?: string;

  action?: ShowcaseAction;

  content?: ReactNode;

  sideLabel?: string;
}

export interface ShowcaseProps {
  /**
   * Showcase items.
   *
   * These should remain plain API/data objects.
   */
  items: ShowcaseItem[];

  /**
   * Image renderer.
   *
   * Useful for injecting Next/Image or another image implementation.
   */
  ImageComponent?: ShowcaseImageComponent;

  imageSizes?: string;

  imagePriority?: boolean;

  /**
   * Handles navigation for the complete media/image area.
   *
   * Showcase renders a semantic <a href="..."> but prevents
   * native browser navigation and delegates the actual routing
   * to the consuming application.
   *
   * Example with Next.js:
   *
   * const router = useRouter();
   *
   * <Showcase
   *   items={items}
   *   onNavigate={(item) => {
   *     router.push(item.href);
   *   }}
   * />
   */
  onNavigate?: (
    item: ShowcaseItem,
    index: number,
    event: MouseEvent<HTMLAnchorElement>,
  ) => void;

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

  /**
   * Controlled active index.
   */
  activeIndex?: number;

  /**
   * Initial active index for uncontrolled mode.
   */
  defaultActiveIndex?: number;

  onActiveIndexChange?: (index: number, item: ShowcaseItem) => void;

  swipe?: boolean;

  radius?: ShowcaseRadius;

  height?: ShowcaseDimension;

  minHeight?: ShowcaseDimension;

  maxHeight?: ShowcaseDimension;

  aspectRatio?:
    | string
    | {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };

  containerSx?: SxProps<Theme>;

  className?: string;

  "aria-label"?: string;
}
