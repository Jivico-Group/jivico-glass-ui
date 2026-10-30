"use client";

import React from "react";
import { createPortal } from "react-dom";
import { Box, styled } from "@mui/material";
import { ToastItem } from "./ToastItem.js";
import type { ToastItemState, ToastPosition, ToastState } from "./Toast.types.js";
import { ALL_POSITIONS } from "./toastReducer.js";

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

const ViewportBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "toastPosition" && prop !== "gap",
})<{ toastPosition: ToastPosition; gap?: number }>(({
  theme,
  toastPosition,
  gap = 12,
}) => {
  const isTop = toastPosition.startsWith("top");
  const isBottom = toastPosition.startsWith("bottom");
  const isCenter = toastPosition.endsWith("center");
  const isLeft = toastPosition.endsWith("left");
  const isRight = toastPosition.endsWith("right");

  return {
    position: "fixed",
    zIndex: (theme.zIndex?.snackbar ?? 1400) + 10,
    display: "flex",
    flexDirection: isBottom ? "column-reverse" : "column",
    gap: `${gap}px`,
    pointerEvents: "none",
    boxSizing: "border-box",
    maxWidth: "100%",
    padding: 0,
    margin: 0,
    listStyle: "none",

    // Vertical placement
    ...(isTop && { top: 20 }),
    ...(isBottom && { bottom: 20 }),

    // Horizontal placement
    ...(isCenter && {
      left: "50%",
      transform: "translateX(-50%)",
      alignItems: "center",
    }),
    ...(isLeft && {
      left: 20,
      alignItems: "flex-start",
    }),
    ...(isRight && {
      right: 20,
      alignItems: "flex-end",
    }),

    // Mobile responsive adjustments (< 600px)
    [theme.breakpoints.down("sm")]: {
      left: 12,
      right: 12,
      width: "calc(100% - 24px)",
      transform: "none",
      alignItems: "center",
      ...(isTop && { top: 12 }),
      ...(isBottom && { bottom: 12 }),
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

  if (items.length === 0) {
    return null;
  }

  const content = (
    <ViewportBox
      toastPosition={position}
      gap={gap}
      role="region"
      aria-label={`Notifications ${position}`}
      data-toast-position={position}
    >
      {items.map((item) => (
        <ToastItem
          key={item.id}
          item={item}
          onDismiss={onDismiss}
          onPause={onPause}
          onResume={onResume}
        />
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
 * ToastAllViewports — Renders all 6 positional viewports for a given global ToastState.
 */
export const ToastAllViewports: React.FC<ToastAllViewportsProps> = ({
  state,
  onDismiss,
  onPause,
  onResume,
  gap = 12,
  portal = true,
  container,
}) => {
  return (
    <>
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
    </>
  );
};
