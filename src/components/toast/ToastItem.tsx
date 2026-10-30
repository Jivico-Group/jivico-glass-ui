"use client";

import React from "react";
import { AlertTriangle, Bell, Check, Info, Loader2, Sparkles, X } from "lucide-react";
import { Box, Button, IconButton, keyframes, styled, Typography, useTheme } from "@mui/material";
import { COLORS } from "../../theme/colors/index.js";
import type { ToastColor, ToastItemState, ToastRadius, ToastVariant } from "./Toast.types.js";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export interface ToastItemProps {
  item: ToastItemState;
  onDismiss: (id: string) => void;
  onPause?: (id: string) => void;
  onResume?: (id: string) => void;
}

interface ColorStyleTokens {
  accent: string;
  badgeBg: string;
  badgeColor: string;
  badgeGlow?: string;
  defaultIcon: React.ReactNode;
}

function resolveColorTokens(color: ToastColor, isDark: boolean, loading?: boolean): ColorStyleTokens {
  if (loading) {
    return {
      accent: isDark ? "rgba(148, 163, 184, 0.5)" : "rgba(100, 116, 139, 0.4)",
      badgeBg: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
      badgeColor: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
      defaultIcon: <Loader2 size={18} strokeWidth={2.4} style={{ animation: `${spinAnimation} 1s linear infinite` }} />,
    };
  }

  switch (color) {
    case "success":
      return {
        accent: isDark ? COLORS.success.dark : COLORS.success.light,
        badgeBg: isDark ? "rgba(129, 201, 149, 0.22)" : COLORS.success.light,
        badgeColor: isDark ? COLORS.success.dark : COLORS.success.textLight,
        badgeGlow: isDark ? COLORS.success.glowDark : undefined,
        defaultIcon: <Check size={18} strokeWidth={2.75} />,
      };

    case "info":
      return {
        accent: isDark ? COLORS.info.dark : COLORS.info.light,
        badgeBg: isDark ? "rgba(138, 180, 248, 0.24)" : COLORS.info.light,
        badgeColor: isDark ? COLORS.info.dark : COLORS.info.textLight,
        badgeGlow: isDark ? COLORS.info.glowDark : undefined,
        defaultIcon: <Info size={18} strokeWidth={2.5} />,
      };

    case "warning":
      return {
        accent: isDark ? COLORS.warning.dark : COLORS.warning.light,
        badgeBg: isDark ? "rgba(246, 173, 85, 0.22)" : "rgba(230, 119, 0, 0.16)",
        badgeColor: isDark ? COLORS.warning.dark : COLORS.warning.hoverLight,
        badgeGlow: isDark ? COLORS.warning.glowDark : undefined,
        defaultIcon: <AlertTriangle size={18} strokeWidth={2.3} />,
      };

    case "error":
      return {
        accent: isDark ? COLORS.error.dark : COLORS.error.light,
        badgeBg: isDark ? "rgba(242, 139, 130, 0.22)" : "rgba(224, 67, 53, 0.16)",
        badgeColor: isDark ? COLORS.error.dark : COLORS.error.hoverLight,
        badgeGlow: isDark ? COLORS.error.glowDark : undefined,
        defaultIcon: <X size={18} strokeWidth={2.75} />,
      };

    case "accent":
      return {
        accent: isDark ? COLORS.accent.dark : COLORS.accent.light,
        badgeBg: isDark ? "rgba(212, 183, 122, 0.22)" : "rgba(147, 116, 71, 0.15)",
        badgeColor: isDark ? COLORS.accent.dark : COLORS.accent.light,
        badgeGlow: isDark ? COLORS.accent.glowDark : undefined,
        defaultIcon: <Sparkles size={18} strokeWidth={2.2} />,
      };

    case "secondary":
      return {
        accent: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
        badgeBg: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
        badgeColor: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
        defaultIcon: <Bell size={18} strokeWidth={2.2} />,
      };

    case "glass":
      return {
        accent: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.35)",
        badgeBg: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
        badgeColor: isDark ? "#F8FAFC" : COLORS.primary.light,
        defaultIcon: <Sparkles size={18} strokeWidth={2.2} />,
      };

    case "primary":
    default:
      return {
        accent: isDark ? COLORS.primary.dark : COLORS.primary.light,
        badgeBg: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)",
        badgeColor: isDark ? "#FFFFFF" : COLORS.primary.light,
        defaultIcon: <Bell size={18} strokeWidth={2.2} />,
      };
  }
}

function resolveRadius(radius: ToastRadius): string {
  switch (radius) {
    case "square":
      return "0px";
    case "rounded":
      return "9999px";
    case "soft":
    default:
      return "4px";
  }
}

const ToastContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "radius" && prop !== "isDark" && prop !== "isExiting",
})<{ variant: ToastVariant; radius: ToastRadius; isDark: boolean; isExiting: boolean }>(({ theme, variant, radius, isDark, isExiting }) => {
  const borderRadius = resolveRadius(radius);

  // Default "glass" styling matching Jivico liquid glass recipe
  let background = isDark ? "rgba(20, 24, 33, 0.85)" : "rgba(255, 255, 255, 0.85)";
  let backgroundImage = isDark
    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 250, 252, 0.2) 100%)";
  let border = isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(255, 255, 255, 0.7)";
  let backdropFilter = "blur(20px) saturate(190%)";
  let boxShadow = isDark
    ? "0 16px 36px -4px rgba(0, 0, 0, 0.55), 0 6px 16px -2px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14)"
    : "0 10px 25px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.9)";

  if (variant === "solid") {
    background = isDark ? "#131720" : "#FFFFFF";
    backgroundImage = "none";
    backdropFilter = "none";
    border = isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.08)";
    boxShadow = isDark ? "0 12px 30px rgba(0, 0, 0, 0.5)" : "0 10px 25px rgba(0, 0, 0, 0.08)";
  } else if (variant === "soft") {
    background = isDark ? "rgba(30, 36, 48, 0.92)" : "rgba(248, 250, 252, 0.94)";
    backgroundImage = "none";
    backdropFilter = "none";
    border = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.06)";
  } else if (variant === "outlined") {
    background = isDark ? "rgba(20, 24, 33, 0.4)" : "rgba(255, 255, 255, 0.4)";
    border = isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.16)";
    boxShadow = "none";
  }

  return {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: 400,
    minWidth: 280,
    [theme.breakpoints.down("sm")]: { minWidth: 0, maxWidth: "100%" },
    boxSizing: "border-box",
    padding: "12px 14px 12px 16px",
    borderRadius,
    background,
    backgroundImage,
    border,
    backdropFilter,
    WebkitBackdropFilter: backdropFilter,
    boxShadow,
    overflow: "hidden",
    pointerEvents: "auto",
    outline: "none",
    opacity: isExiting ? 0 : 1,
    transform: isExiting ? "scale(0.96) translateY(-4px)" : "scale(1) translateY(0)",
    transition: "opacity 220ms cubic-bezier(0.16, 1, 0.3, 1), transform 220ms cubic-bezier(0.16, 1, 0.3, 1)",
    "&:focus-visible": { boxShadow: isDark ? "0 0 0 2px #60A5FA" : "0 0 0 2px #3B82F6" },
    "@media (prefers-reduced-motion: reduce)": { transition: "opacity 100ms ease", transform: "none" },
  };
});

const AccentPill = styled("span", { shouldForwardProp: (prop) => prop !== "accentColor" })<{ accentColor: string }>(({ accentColor }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "4.5px",
  backgroundColor: accentColor,
  borderTopLeftRadius: "inherit",
  borderBottomLeftRadius: "inherit",
  borderTopRightRadius: "3px",
  borderBottomRightRadius: "3px",
  pointerEvents: "none",
}));

const IconBadge = styled(Box, { shouldForwardProp: (prop) => prop !== "badgeBg" && prop !== "badgeColor" && prop !== "badgeGlow" })<{
  badgeBg: string;
  badgeColor: string;
  badgeGlow?: string;
}>(({ badgeBg, badgeColor, badgeGlow }) => ({
  width: 36,
  height: 36,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  backgroundColor: badgeBg,
  color: badgeColor,
  boxShadow: badgeGlow ?? "none",
  marginTop: 1,
}));

export const ToastItem: React.FC<ToastItemProps> = ({ item, onDismiss, onPause, onResume }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const colorTokens = resolveColorTokens(item.color, isDark, item.loading);
  const icon = item.icon ?? colorTokens.defaultIcon;
  const isExiting = item.status === "exiting";

  const role = item.color === "error" || item.color === "warning" ? "alert" : "status";
  const ariaLive = item.color === "error" ? "assertive" : "polite";

  return (
    <ToastContainer
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      tabIndex={0}
      variant={item.variant}
      radius={item.radius}
      isDark={isDark}
      isExiting={isExiting}
      onMouseEnter={() => onPause?.(item.id)}
      onMouseLeave={(e) => {
        if (typeof document !== "undefined" && document.activeElement && e.currentTarget.contains(document.activeElement)) return;
        onResume?.(item.id);
      }}
      onFocus={() => onPause?.(item.id)}
      onBlur={(e) => {
        if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget as Node)) return;
        if (typeof e.currentTarget.matches === "function" && e.currentTarget.matches(":hover")) return;
        onResume?.(item.id);
      }}
      data-toast-id={item.id}
    >
      <AccentPill accentColor={colorTokens.accent} aria-hidden="true" />

      <IconBadge badgeBg={colorTokens.badgeBg} badgeColor={colorTokens.badgeColor} badgeGlow={colorTokens.badgeGlow} aria-hidden="true">
        {icon}
      </IconBadge>

      <Box sx={{ flex: 1, minWidth: 0, ml: 1.5, mr: 0.5, display: "flex", flexDirection: "column", gap: 0.35 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          {item.title ? (
            <Typography
              component="span"
              sx={{
                fontWeight: 650,
                fontSize: "0.875rem",
                color: isDark ? COLORS.text.primaryDark : COLORS.text.primaryLight,
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </Typography>
          ) : (
            <span />
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0, ml: "auto" }}>
            {item.timestamp && (
              <Typography
                component="span"
                sx={{
                  fontSize: "0.75rem",
                  color: isDark ? COLORS.text.secondaryDark : COLORS.text.secondaryLight,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {item.timestamp}
              </Typography>
            )}

            {item.dismissible && (
              <IconButton
                size="small"
                aria-label="Dismiss notification"
                onClick={(e) => {
                  e.stopPropagation();
                  onDismiss(item.id);
                }}
                sx={{
                  p: 0.4,
                  color: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.4)",
                  "&:hover": {
                    color: isDark ? "#FFFFFF" : COLORS.primary.light,
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)",
                  },
                  "&:focus-visible": { outline: `2px solid ${isDark ? COLORS.accent.dark : COLORS.accent.light}`, outlineOffset: "2px" },
                }}
              >
                <X size={15} strokeWidth={2.2} />
              </IconButton>
            )}
          </Box>
        </Box>

        <Typography
          component="div"
          sx={{
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: isDark ? COLORS.text.secondaryDark : COLORS.text.secondaryLight,
            lineHeight: 1.4,
            wordBreak: "break-word",
          }}
        >
          {item.message}
        </Typography>

        {item.action && (
          <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-start" }}>
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                item.action?.onClick();
              }}
              sx={{
                py: 0.4,
                px: 1.25,
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "8px",
                color: isDark ? "#FFFFFF" : COLORS.primary.light,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.1)"}`,
                "&:hover": { backgroundColor: isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(0, 0, 0, 0.1)" },
                "&:focus-visible": { outline: `2px solid ${isDark ? COLORS.accent.dark : COLORS.accent.light}`, outlineOffset: "2px" },
              }}
            >
              {item.action.label}
            </Button>
          </Box>
        )}
      </Box>
    </ToastContainer>
  );
};
