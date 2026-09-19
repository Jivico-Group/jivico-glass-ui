import React, { forwardRef } from "react";
import {
  Box,
  BoxProps,
  ButtonBase,
  ButtonBaseProps,
  styled,
} from "@mui/material";

export type DynamicIslandPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "none";

export type DynamicIslandSize = "sm" | "md" | "lg";

export interface DynamicIslandOffset {
  x?: number | string;
  y?: number | string;
}

export interface DynamicIslandProps extends BoxProps {
  /**
   * Floating viewport placement.
   * If 'none' (default), renders as an inline-flex pill container.
   * If set to a position (e.g. 'top-center'), pins the island using fixed positioning.
   */
  placement?: DynamicIslandPlacement;
  /**
   * Sizing scale for the island.
   * 'sm' ~38px height, 'md' ~48px (standard Dries Van Noten scale), 'lg' ~58px height
   * Default: 'md'
   */
  size?: DynamicIslandSize;
  /**
   * Custom offset distance from viewport edges when placement is active.
   * Default: { x: 24, y: 20 }
   */
  offset?: DynamicIslandOffset;
  /**
   * Custom blur radius in px (default: 40px for ultra-frosted liquid diffusion)
   */
  blur?: number;
  /**
   * Explicit dark mode override. If omitted, automatically detects theme.palette.mode.
   */
  isDark?: boolean;
  /**
   * If true, applies subtle elevation and glint lift on hover.
   */
  interactive?: boolean;
}

const sizeConfig: Record<
  DynamicIslandSize,
  { minHeight: number; px: number; py: number; fontSize: string; gap: number }
> = {
  sm: { minHeight: 42, px: 1.5, py: 0.4, fontSize: "0.8125rem", gap: 1.25 },
  md: { minHeight: 52, px: 2, py: 0.6, fontSize: "0.875rem", gap: 1.5 },
  lg: { minHeight: 62, px: 2.5, py: 0.8, fontSize: "0.9375rem", gap: 1.75 },
};

const getPlacementStyles = (
  placement: DynamicIslandPlacement = "none",
  offset?: DynamicIslandOffset,
) => {
  if (placement === "none") {
    return {
      position: "relative" as const,
      display: "inline-flex" as const,
    };
  }

  const defaultY = 10;
  const defaultX = 20;

  const topOffset = offset?.y ?? defaultY;
  const bottomOffset = offset?.y ?? defaultY;
  const leftOffset = offset?.x ?? defaultX;
  const rightOffset = offset?.x ?? defaultX;

  const baseFixed = {
    position: "fixed" as const,
    display: "inline-flex" as const,
    zIndex: 11000,
    willChange: "transform, opacity",
  };

  switch (placement) {
    case "top-center":
      return {
        ...baseFixed,
        top: topOffset,
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "top-left":
      return {
        ...baseFixed,
        top: topOffset,
        left: leftOffset,
      };
    case "top-right":
      return {
        ...baseFixed,
        top: topOffset,
        right: rightOffset,
      };
    case "bottom-center":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "bottom-left":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: leftOffset,
      };
    case "bottom-right":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        right: rightOffset,
      };
    default:
      return {
        position: "relative" as const,
        display: "inline-flex" as const,
      };
  }
};

const StyledIslandRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "placement" &&
    prop !== "size" &&
    prop !== "offset" &&
    prop !== "blur" &&
    prop !== "isDark" &&
    prop !== "interactive",
})<{
  placement?: DynamicIslandPlacement;
  size?: DynamicIslandSize;
  offset?: DynamicIslandOffset;
  blur?: number;
  isDark?: boolean;
  interactive?: boolean;
}>(({
  theme,
  placement = "none",
  size = "md",
  offset,
  blur = 40,
  isDark: explicitDark,
  interactive,
}) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  const { minHeight, px, py, fontSize, gap } = sizeConfig[size];
  const placementStyles = getPlacementStyles(placement, offset);

  return {
    ...placementStyles,
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: 9999,
    minHeight,
    padding: theme.spacing(py, px),
    gap: theme.spacing(gap),
    fontSize,
    fontFamily: theme.typography.fontFamily,

    // Quiet Luxury Frosted Mist Glass (Authentic Cosmos / Dries Van Noten)
    backdropFilter: `blur(${blur}px) saturate(140%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(140%)`,

    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.65)",

    border: `1px solid ${
      isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
    }`,

    boxShadow: isDark
      ? "0 8px 24px 0 rgba(0, 0, 0, 0.30)"
      : "0 8px 24px 0 rgba(0, 0, 0, 0.05)",

    color: isDark ? "#FFFFFF" : "#111827",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",

    ...(interactive && {
      cursor: "pointer",
      "&:hover": {
        transform:
          placement === "top-center" || placement === "bottom-center"
            ? "translateX(-50%) translateY(-1.5px)"
            : "translateY(-1.5px)",
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.10)"
          : "rgba(255, 255, 255, 0.80)",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.14)"
          : "rgba(0, 0, 0, 0.12)",
        boxShadow: isDark
          ? "0 12px 32px 0 rgba(0, 0, 0, 0.40)"
          : "0 12px 32px 0 rgba(0, 0, 0, 0.08)",
      },
    }),
  };
});

/**
 * DynamicIsland — Liquid Glass floating capsule island component inspired by Apple & Dries Van Noten Cosmos.
 *
 * Accepts arbitrary children and supports viewport edge placement ('top-center', 'bottom-center', etc.)
 * or standard inline-flex flow ('none'). Automatically adapts to Light and Dark modes.
 */
export const DynamicIsland = forwardRef<HTMLDivElement, DynamicIslandProps>(
  (
    {
      children,
      placement = "none",
      size = "md",
      offset,
      blur,
      isDark,
      interactive = false,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledIslandRoot
        ref={ref}
        placement={placement}
        size={size}
        offset={offset}
        blur={blur}
        isDark={isDark}
        interactive={interactive}
        {...props}
      >
        {children}
      </StyledIslandRoot>
    );
  },
);

DynamicIsland.displayName = "DynamicIsland";

/* ==========================================================================
   Companion Nested Sub-Pill Component (DynamicIslandPill)
   Replicates the nested sub-pills like "⚪ Dries Van Noten" or "+ Create"
   ========================================================================== */

export interface DynamicIslandPillProps extends ButtonBaseProps {
  /**
   * Leading icon or avatar element
   */
  startIcon?: React.ReactNode;
  /**
   * Trailing icon or chevron element
   */
  endIcon?: React.ReactNode;
  /**
   * Explicit dark mode override
   */
  isDark?: boolean;
  /**
   * Active state (solid subtle highlight)
   */
  active?: boolean;
}

const StyledPillButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "isDark" && prop !== "active",
})<{ isDark?: boolean; active?: boolean }>(({
  theme,
  isDark: explicitDark,
  active,
}) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";

  return {
    borderRadius: 9999,
    height: 36,
    padding: "0 14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(0.85),
    fontSize: "0.8125rem",
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1,
    color: isDark ? "#FFFFFF" : "#111827",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    backgroundColor: active
      ? isDark
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(255, 255, 255, 0.95)"
      : isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(255, 255, 255, 0.75)",

    border: `1px solid ${
      active
        ? isDark
          ? "rgba(255, 255, 255, 0.24)"
          : "rgba(0, 0, 0, 0.16)"
        : isDark
          ? "rgba(255, 255, 255, 0.14)"
          : "rgba(0, 0, 0, 0.08)"
    }`,

    boxShadow: isDark ? "none" : "0 1px 3px rgba(0, 0, 0, 0.04)",

    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",

    "&:hover": {
      backgroundColor: isDark
        ? "rgba(255, 255, 255, 0.14)"
        : "rgba(255, 255, 255, 0.95)",
      borderColor: isDark ? "rgba(255, 255, 255, 0.24)" : "rgba(0, 0, 0, 0.15)",
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  };
});

export const DynamicIslandPill = forwardRef<
  HTMLButtonElement,
  DynamicIslandPillProps
>(({ children, startIcon, endIcon, isDark, active, ...props }, ref) => {
  return (
    <StyledPillButton ref={ref} isDark={isDark} active={active} {...props}>
      {startIcon && (
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          {startIcon}
        </Box>
      )}
      {children}
      {endIcon && (
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.9rem",
          }}
        >
          {endIcon}
        </Box>
      )}
    </StyledPillButton>
  );
});

DynamicIslandPill.displayName = "DynamicIslandPill";
