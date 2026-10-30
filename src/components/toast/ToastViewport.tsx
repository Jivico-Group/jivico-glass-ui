"use client";

import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { ToastItem } from "./ToastItem.js";
import { ALL_POSITIONS } from "./toastReducer.js";
import type { ToastItemState, ToastPosition, ToastState } from "./Toast.types.js";

export interface ToastViewportProps {
  position: ToastPosition;
  items: ToastItemState[];
  onDismiss: (id: string) => void;
  onPause?: (id: string) => void;
  onResume?: (id: string) => void;
  gap?: number;
  portal?: boolean;
  container?: HTMLElement | null;
}

const ViewportBox = styled(Box, { shouldForwardProp: (prop) => prop !== "toastPosition" && prop !== "gap" })<{
  toastPosition: ToastPosition;
  gap?: number;
}>(({ theme, toastPosition, gap = 12 }) => {
  const isTop = toastPosition.startsWith("top");
  const isBottom = toastPosition.startsWith("bottom");
  const isCenter = toastPosition.endsWith("center");
  const isLeft = toastPosition.endsWith("left");
  const isRight = toastPosition.endsWith("right");

  return {
    position: "fixed",
    zIndex: (theme.zIndex?.snackbar ?? 1400) + 10,
    display: "flex",
    flexDirection: "column",
    gap: `${gap}px`,
    pointerEvents: "none",
    boxSizing: "border-box",
    maxWidth: "100%",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& > *": {
      pointerEvents: "auto",
    },

    // Vertical placement with safe-area insets
    ...(isTop && { top: "calc(20px + env(safe-area-inset-top, 0px))" }),
    ...(isBottom && { bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }),

    // Horizontal placement
    ...(isCenter && { left: "50%", transform: "translateX(-50%)", alignItems: "center" }),
    ...(isLeft && { left: "calc(20px + env(safe-area-inset-left, 0px))", alignItems: "flex-start" }),
    ...(isRight && { right: "calc(20px + env(safe-area-inset-right, 0px))", alignItems: "flex-end" }),

    // Mobile responsive adjustments (< 600px)
    [theme.breakpoints.down("sm")]: {
      left: "calc(12px + env(safe-area-inset-left, 0px))",
      right: "calc(12px + env(safe-area-inset-right, 0px))",
      width: "calc(100% - 24px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px))",
      maxWidth: "calc(100% - 24px)",
      maxHeight: "calc(48vh - 24px - env(safe-area-inset-top, 0px))",
      overflowY: "auto",
      overscrollBehavior: "contain",
      transform: "none",
      alignItems: "center",
      ...(isTop && { top: "calc(12px + env(safe-area-inset-top, 0px))" }),
      ...(isBottom && { bottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }),
    },
  };
});

/**
 * ToastViewport — Renders a single positional stack of toast notifications.
 * Supports SSR-safe portal mounting to document.body and mobile responsive docking.
 */
export const ToastViewport: React.FC<ToastViewportProps> = ({
  position,
  items,
  onDismiss,
  onPause,
  onResume,
  gap = 12,
  portal = true,
  container,
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (items.length === 0) return null;

  const content = (
    <ViewportBox toastPosition={position} gap={gap} role="region" aria-label={`Notifications ${position}`} data-toast-position={position}>
      {items.map((item) => (
        <ToastItem key={item.id} item={item} onDismiss={onDismiss} onPause={onPause} onResume={onResume} />
      ))}
    </ViewportBox>
  );

  if (!portal) {
    return content;
  }

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  const targetContainer = container ?? document.body;
  return createPortal(content, targetContainer);
};

export interface ToastAllViewportsProps {
  state: ToastState;
  onDismiss: (id: string) => void;
  onPause?: (id: string) => void;
  onResume?: (id: string) => void;
  gap?: number;
  portal?: boolean;
  container?: HTMLElement | null;
}

/**
 * ToastAllViewports — Renders all active viewports for a given global ToastState.
 * On desktop (>= 600px), renders independent viewports for each active logical position.
 * On mobile (< 600px), consolidates active top positions into a shared top stack and
 * bottom positions into a shared bottom stack, eliminating positional collisions while
 * preserving exact chronological ordering and notification IDs.
 */
export const ToastAllViewports: React.FC<ToastAllViewportsProps> = ({ state, onDismiss, onPause, onResume, gap = 12, portal = true, container }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true, defaultMatches: false });

  if (isMobile) {
    // Mobile Viewport Consolidation:
    // Gather all active top toasts into a single top stack, and bottom toasts into a bottom stack
    // while preserving each notification's logical position and chronological ordering.
    const topItems: ToastItemState[] = [
      ...(state["top-left"]?.visible ?? []),
      ...(state["top-center"]?.visible ?? []),
      ...(state["top-right"]?.visible ?? []),
    ].sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id));

    const bottomItems: ToastItemState[] = [
      ...(state["bottom-left"]?.visible ?? []),
      ...(state["bottom-center"]?.visible ?? []),
      ...(state["bottom-right"]?.visible ?? []),
    ].sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id));

    return (
      <Fragment>
        {topItems.length > 0 && (
          <ToastViewport
            key="mobile-top-stack"
            position="top-center"
            items={topItems}
            onDismiss={onDismiss}
            onPause={onPause}
            onResume={onResume}
            gap={gap}
            portal={portal}
            container={container}
          />
        )}
        {bottomItems.length > 0 && (
          <ToastViewport
            key="mobile-bottom-stack"
            position="bottom-center"
            items={bottomItems}
            onDismiss={onDismiss}
            onPause={onPause}
            onResume={onResume}
            gap={gap}
            portal={portal}
            container={container}
          />
        )}
      </Fragment>
    );
  }

  // Desktop: Render independent viewports for each active position
  return (
    <Fragment>
      {ALL_POSITIONS.map((pos) => {
        const posState = state[pos];
        if (!posState || posState.visible.length === 0) {
          return null;
        }

        return (
          <ToastViewport
            key={pos}
            position={pos}
            items={posState.visible}
            onDismiss={onDismiss}
            onPause={onPause}
            onResume={onResume}
            gap={gap}
            portal={portal}
            container={container}
          />
        );
      })}
    </Fragment>
  );
};
