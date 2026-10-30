import React from "react";

/**
 * Supported semantic and branded toast colors.
 * Maps directly to existing Jivico theme palette tokens.
 */
export type ToastColor =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "accent"
  | "info"
  | "warning"
  | "glass";

/**
 * Supported screen positioning anchors.
 * Supports 6 distinct positions plus 'bottom' as an alias for 'bottom-center'.
 */
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastPositionInput = ToastPosition | "bottom";

/**
 * Border radius styling:
 * - 'rounded': Pill-inspired (9999px)
 * - 'soft': Exactly 4 CSS px (default)
 * - 'square': Exactly 0 CSS px
 */
export type ToastRadius = "rounded" | "soft" | "square";

/**
 * Visual surface variants.
 */
export type ToastVariant = "soft" | "solid" | "outlined" | "glass";

/**
 * Internal notification lifecycle status.
 */
export type ToastStatus = "queued" | "visible" | "exiting";

/**
 * Optional interactive CTA action on the toast.
 */
export interface ToastAction {
  label: string;
  onClick: () => void;
}

/**
 * Public configuration options for creating or showing a toast.
 */
export interface ToastOptions {
  message: React.ReactNode;
  title?: string;
  color?: ToastColor;
  position?: ToastPositionInput;
  radius?: ToastRadius;
  variant?: ToastVariant;
  duration?: number;
  dismissible?: boolean;
  timestamp?: string;
  loading?: boolean;
  action?: ToastAction;
  id?: string;
  icon?: React.ReactNode;
}

/**
 * Options accepted by shortcut convenience methods (e.g. toast.success(msg, options)).
 */
export type ToastShortcutOptions = Omit<ToastOptions, "message" | "color">;

/**
 * Complete immutable internal record of a toast notification.
 */
export interface ToastItemState {
  id: string;
  message: React.ReactNode;
  title?: string;
  color: ToastColor;
  position: ToastPosition;
  radius: ToastRadius;
  variant: ToastVariant;
  duration: number;
  dismissible: boolean;
  timestamp?: string;
  loading?: boolean;
  action?: ToastAction;
  status: ToastStatus;
  createdAt: number;
  icon?: React.ReactNode;
  revision?: number;
}

/**
 * State for a single positional stack containing visible items and pending queue.
 */
export interface ToastPositionState {
  visible: ToastItemState[];
  queue: ToastItemState[];
}

/**
 * Global reducer state: 6 independent position groups.
 */
export type ToastState = Record<ToastPosition, ToastPositionState>;

/**
 * Configuration props for the root ToastProvider component.
 */
export interface ToastProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPositionInput;
  defaultRadius?: ToastRadius;
  defaultDuration?: number;
  defaultColor?: ToastColor;
  defaultVariant?: ToastVariant;
  maxVisible?: number;
  maxPending?: number;
  gap?: number;
}

/**
 * Public stable action API exposed via useToast() hook.
 */
export interface ToastApi {
  show(options: ToastOptions): string;
  success(message: React.ReactNode, options?: ToastShortcutOptions): string;
  error(message: React.ReactNode, options?: ToastShortcutOptions): string;
  warning(message: React.ReactNode, options?: ToastShortcutOptions): string;
  info(message: React.ReactNode, options?: ToastShortcutOptions): string;
  primary(message: React.ReactNode, options?: ToastShortcutOptions): string;
  secondary(message: React.ReactNode, options?: ToastShortcutOptions): string;
  accent(message: React.ReactNode, options?: ToastShortcutOptions): string;
  glass(message: React.ReactNode, options?: ToastShortcutOptions): string;
  update(id: string, options: Partial<ToastOptions>): void;
  dismiss(id: string): void;
  dismissAll(): void;
}

/**
 * Default semantic duration map in milliseconds.
 */
export const DEFAULT_TOAST_DURATIONS: Record<ToastColor, number> = {
  success: 3000,
  error: 6000,
  warning: 5000,
  info: 4000,
  primary: 4000,
  secondary: 4000,
  accent: 4000,
  glass: 4000,
};

/**
 * Normalizes position string, translating aliases like 'bottom' to 'bottom-center'.
 */
export function normalizePosition(position?: ToastPositionInput): ToastPosition {
  if (position === "bottom") return "bottom-center";
  if (
    position === "top-left" ||
    position === "top-center" ||
    position === "top-right" ||
    position === "bottom-left" ||
    position === "bottom-center" ||
    position === "bottom-right"
  ) {
    return position;
  }
  return "top-right";
}
