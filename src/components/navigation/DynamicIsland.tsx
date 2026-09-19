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
  | "bottom-right";

export type DynamicIslandSize = "sm" | "md" | "lg";

export interface DynamicIslandProps extends BoxProps {
  placement?: DynamicIslandPlacement;
  size?: DynamicIslandSize;
  offset?: number;
  blur?: number;
  isDark?: boolean;
  interactive?: boolean;
}

const sizeConfig = {
  sm: {
    minHeight: 42,
    px: 1.5,
    py: 0.4,
    fontSize: "0.8125rem",
    gap: 1.25,
  },

  md: {
    minHeight: 52,
    px: 2,
    py: 0.6,
    fontSize: "0.875rem",
    gap: 1.5,
  },

  lg: {
    minHeight: 62,
    px: 2.5,
    py: 0.8,
    fontSize: "0.9375rem",
    gap: 1.75,
  },
} as const;

const getPlacementStyles = (
  placement: DynamicIslandPlacement,
  offset: number,
) => {
  const topOffset = offset;
  const bottomOffset = offset;
  const sideOffset = 20;

  const baseFixed = {
    position: "fixed" as const,
    zIndex: 11000,
  };

  switch (placement) {
    case "top-left":
      return {
        ...baseFixed,
        top: topOffset,
        left: sideOffset,
        right: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
      };

    case "top-center":
      return {
        ...baseFixed,
        top: topOffset,
        left: "50%",
        right: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
        transform: "translateX(-50%)",
      };

    case "top-right":
      return {
        ...baseFixed,
        top: topOffset,
        right: sideOffset,
        left: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
      };

    case "bottom-left":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: sideOffset,
        right: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
      };

    case "bottom-center":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        left: "50%",
        right: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
        transform: "translateX(-50%)",
      };

    case "bottom-right":
      return {
        ...baseFixed,
        bottom: bottomOffset,
        right: sideOffset,
        left: "auto",
        width: "max-content",
        maxWidth: "calc(100vw - 40px)",
      };

    default:
      return baseFixed;
  }
};

interface StyledIslandRootProps {
  $placement: DynamicIslandPlacement;
  $size: DynamicIslandSize;
  $offset: number;
  $blur: number;
  $isDark: boolean;
  $interactive: boolean;
}

const StyledIslandRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    ![
      "$placement",
      "$size",
      "$offset",
      "$blur",
      "$isDark",
      "$interactive",
    ].includes(prop as string),
})<StyledIslandRootProps>(({
  theme,
  $placement,
  $size,
  $offset,
  $blur,
  $isDark,
  $interactive,
}) => {
  const config = sizeConfig[$size];

  const isCentered =
    $placement === "top-center" || $placement === "bottom-center";

  return {
    ...getPlacementStyles($placement, $offset),

    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",

    minHeight: config.minHeight,

    paddingLeft: theme.spacing(config.px),
    paddingRight: theme.spacing(config.px),
    paddingTop: theme.spacing(config.py),
    paddingBottom: theme.spacing(config.py),

    columnGap: theme.spacing(config.gap),
    rowGap: theme.spacing(config.gap),

    fontFamily:
      '"SF Pro Display", "SF Pro Text", "Google Sans Flex", "Google Sans", Montserrat, "Space Grotesk", -apple-system, "system-ui", "Segoe UI", sans-serif',

    fontSize: config.fontSize,
    fontWeight: 400,

    letterSpacing: "-0.01em",
    lineHeight: 1.55,

    boxSizing: "border-box",

    color: $isDark ? "rgba(255, 255, 255, 0.96)" : "rgb(17, 24, 39)",

    backgroundColor: $isDark
      ? "rgba(17, 24, 39, 0.72)"
      : "rgba(255, 255, 255, 0.65)",

    backdropFilter: `blur(${$blur}px) saturate(1.4)`,
    WebkitBackdropFilter: `blur(${$blur}px) saturate(1.4)`,

    border: $isDark
      ? "1px solid rgba(255, 255, 255, 0.10)"
      : "1px solid rgba(0, 0, 0, 0.08)",

    borderRadius: "9999px",

    boxShadow: $isDark
      ? "0 8px 24px rgba(0, 0, 0, 0.22)"
      : "0 8px 24px rgba(0, 0, 0, 0.05)",

    overflow: "hidden",

    willChange: "transform, opacity",

    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",

    WebkitFontSmoothing: "antialiased",

    scrollbarWidth: "thin",

    scrollbarColor: $isDark
      ? "rgba(255, 255, 255, 0.20) rgba(0,0,0,0)"
      : "rgba(0, 0, 0, 0.20) rgba(0,0,0,0)",

    /*
     * Desktop / default hover behavior
     */
    ...($interactive && {
      cursor: "pointer",

      "&:hover": {
        transform: isCentered
          ? "translateX(-50%) translateY(-1.5px)"
          : "translateY(-1.5px)",
      },

      "&:active": {
        transform: isCentered
          ? "translateX(-50%) translateY(0)"
          : "translateY(0)",
      },
    }),

    /*
     * SMALL SCREENS
     *
     * Centered islands remain content-sized.
     *
     * Small content:
     *   width = content
     *
     * Large content:
     *   width grows naturally
     *
     * Very large content:
     *   max-width = viewport - 20px
     *
     * Therefore there is always at least
     * 10px of space on both sides.
     */
    "@media (max-width: 600px)": {
      ...(isCentered && {
        left: "50% !important",
        right: "auto !important",
        width: "max-content !important",
        maxWidth: "calc(100vw - 20px) !important",
        transform: "translateX(-50%) !important",
      }),

      ...($interactive && {
        "&:hover": {
          ...(isCentered
            ? {
                transform: "translateX(-50%) translateY(-1.5px) !important",
              }
            : {
                transform: "translateY(-1.5px)",
              }),
        },

        "&:active": {
          ...(isCentered
            ? {
                transform: "translateX(-50%) translateY(0) !important",
              }
            : {
                transform: "translateY(0)",
              }),
        },
      }),
    },

    /*
     * VERY SMALL PHONES
     */
    "@media (max-width: 380px)": {
      ...(isCentered && {
        left: "50% !important",
        right: "auto !important",
        width: "max-content !important",
        maxWidth: "calc(100vw - 20px) !important",
        transform: "translateX(-50%) !important",
      }),
    },
  };
});

export const DynamicIsland = forwardRef<HTMLDivElement, DynamicIslandProps>(
  function DynamicIsland(
    {
      placement = "top-center",
      size = "md",
      offset = 10,
      blur = 32,
      isDark = false,
      interactive = false,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <StyledIslandRoot
        ref={ref}
        $placement={placement}
        $size={size}
        $offset={offset}
        $blur={blur}
        $isDark={isDark}
        $interactive={interactive}
        {...props}
      >
        {children}
      </StyledIslandRoot>
    );
  },
);

DynamicIsland.displayName = "DynamicIsland";

/* -------------------------------------------------------------------------- */
/* Dynamic Island Pill                                                        */
/* -------------------------------------------------------------------------- */

export interface DynamicIslandPillProps extends ButtonBaseProps {
  isDark?: boolean;
  active?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface StyledIslandPillProps {
  isDark: boolean;
  active: boolean;
}

const StyledIslandPill = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== "isDark" &&
    prop !== "active" &&
    prop !== "startIcon" &&
    prop !== "endIcon",
})<StyledIslandPillProps>(({ isDark, active }) => ({
  height: 36,

  minWidth: 36,

  padding: "0 14px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "0.85rem",

  flexShrink: 0,

  borderRadius: "9999px",

  color: isDark ? "rgba(255, 255, 255, 0.96)" : "rgb(17, 24, 39)",

  backgroundColor: active
    ? isDark
      ? "rgba(255, 255, 255, 0.16)"
      : "rgba(0, 0, 0, 0.08)"
    : isDark
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.55)",

  border: active
    ? isDark
      ? "1px solid rgba(255, 255, 255, 0.16)"
      : "1px solid rgba(0, 0, 0, 0.10)"
    : isDark
      ? "1px solid rgba(255, 255, 255, 0.10)"
      : "1px solid rgba(0, 0, 0, 0.06)",

  font: "inherit",

  whiteSpace: "nowrap",

  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",

  "&:hover": {
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.13)"
      : "rgba(255, 255, 255, 0.78)",

    transform: "translateY(-1px)",
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&:focus-visible": {
    outline: isDark
      ? "2px solid rgba(255, 255, 255, 0.45)"
      : "2px solid rgba(0, 0, 0, 0.25)",

    outlineOffset: 2,
  },
}));

export const DynamicIslandPill = forwardRef<
  HTMLButtonElement,
  DynamicIslandPillProps
>(function DynamicIslandPill(
  { isDark = false, active = false, startIcon, endIcon, children, ...props },
  ref,
) {
  return (
    <StyledIslandPill ref={ref} isDark={isDark} active={active} {...props}>
      {startIcon && (
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            lineHeight: 0,
          }}
        >
          {startIcon}
        </Box>
      )}

      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          minWidth: 0,
        }}
      >
        {children}
      </Box>

      {endIcon && (
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            lineHeight: 0,
          }}
        >
          {endIcon}
        </Box>
      )}
    </StyledIslandPill>
  );
});

DynamicIslandPill.displayName = "DynamicIslandPill";
