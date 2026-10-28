import type React from "react";
import type { BackdropProps, TypographyProps } from "@mui/material";
import type { LoaderProps } from "./Loader.types.js";

export interface BackdropLoaderProps extends LoaderProps {
  /**
   * Controls the open/visibility state of the backdrop overlay.
   */
  open: boolean;

  /**
   * Optional loading message displayed beneath the loader.
   */
  message?: React.ReactNode;

  /**
   * Optional props forwarded to the Typography component rendering the message.
   */
  messageProps?: Partial<TypographyProps>;

  /**
   * Optional z-index override.
   * Defaults to theme.zIndex.drawer + 1 (layering cleanly above headers and drawers).
   */
  zIndex?: number;

  /**
   * If true, constrains the backdrop to its parent container using absolute positioning
   * instead of fixing across the entire viewport.
   * Note: The parent container must have `position: relative`.
   * @default false
   */
  contained?: boolean;

  /**
   * Optional blur radius for the glassmorphic backdrop.
   * @default "12px"
   */
  blur?: number | string;

  /**
   * Optional custom backdrop background color override.
   * By default, automatically resolves theme-appropriate translucent glass colors.
   */
  backgroundColor?: string;

  /**
   * Additional properties forwarded directly to the Material UI Backdrop component.
   */
  backdropProps?: Partial<BackdropProps>;
}
