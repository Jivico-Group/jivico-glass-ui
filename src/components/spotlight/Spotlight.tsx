"use client";

import React from "react";

import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import { ArrowRight } from "lucide-react";

import type {
  SpotlightDimension,
  SpotlightItem,
  SpotlightProps,
  SpotlightSize,
  SpotlightVariant,
} from "./Spotlight.types.js";
import { getVariantOverlay as resolveVariantOverlay } from "../showcase/showcaseOverlay.js";

const getResponsiveValue = (value: SpotlightDimension | undefined) => {
  if (value === undefined) return undefined;
  if (typeof value === "number" || typeof value === "string") return value;
  return {
    xs: value.xs,
    sm: value.sm,
    md: value.md,
    lg: value.lg,
    xl: value.xl,
  };
};

const getRadius = (radius: SpotlightProps["radius"]) => {
  switch (radius) {
    case "square":
      return 0;
    case "soft":
      return 4;
    case "rounded":
    default:
      return 2;
  }
};

const hasCustomFontSize = (sx: unknown): boolean => {
  if (!sx) return false;
  if (Array.isArray(sx)) return sx.some(hasCustomFontSize);
  if (typeof sx === "object" && sx !== null) {
    return "fontSize" in sx && (sx as Record<string, unknown>).fontSize !== undefined;
  }
  return false;
};

type SizeConfig = {
  minHeight: { xs: number; md: number; lg?: number };
  aspectRatio?: { xs?: string; md?: string; lg?: string };
  title: { xs: string; md: string; lg: string };
  description: { xs: string; md: string };
  eyebrow: string;
  buttonSize: "small" | "medium" | "large";
  contentPadding: { xs: number; md: number; lg: number };
};

const sizeConfig: Record<SpotlightSize, SizeConfig> = {
  small: {
    minHeight: { xs: 240, md: 290 },
    aspectRatio: { xs: "16/10", md: "21/9" },
    title: { xs: "1.5rem", md: "1.5rem", lg: "1.7rem" },
    description: { xs: "0.8rem", md: "0.86rem" },
    eyebrow: "0.6rem",
    buttonSize: "small",
    contentPadding: { xs: 2.25, md: 3.25, lg: 4 },
  },
  medium: {
    minHeight: { xs: 300, md: 360 },
    aspectRatio: { xs: "16/10", md: "16/8" },
    title: { xs: "1.5rem", md: "1.9rem", lg: "2.2rem" },
    description: { xs: "0.84rem", md: "0.9rem" },
    eyebrow: "0.62rem",
    buttonSize: "small",
    contentPadding: { xs: 2.5, md: 4, lg: 4.75 },
  },
  large: {
    minHeight: { xs: 360, md: 440 },
    aspectRatio: { xs: "4/3", md: "16/9" },
    title: { xs: "1.75rem", md: "2.25rem", lg: "2.65rem" },
    description: { xs: "0.88rem", md: "0.94rem" },
    eyebrow: "0.64rem",
    buttonSize: "medium",
    contentPadding: { xs: 3, md: 4.5, lg: 5.5 },
  },
  hero: {
    minHeight: { xs: 410, md: 520 },
    aspectRatio: { xs: "1/1", md: "21/9" },
    title: { xs: "2rem", md: "2.8rem", lg: "3.25rem" },
    description: { xs: "0.9rem", md: "0.98rem" },
    eyebrow: "0.65rem",
    buttonSize: "medium",
    contentPadding: { xs: 3.25, md: 5, lg: 6.25 },
  },
};

interface MediaLinkProps {
  href: string;
  label?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MediaLink = ({ href, label, target, rel, onClick }: MediaLinkProps) => {
  return (
    <Box
      component="a"
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      onClick={onClick}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "block",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        cursor: "pointer",
      }}
    />
  );
};

export const Spotlight: React.FC<SpotlightProps> = ({
  item,
  ImageComponent,
  imageSizes = "100vw",
  imagePriority = false,
  variant = "editorial",
  size = "medium",
  radius = "rounded",
  height,
  minHeight,
  maxHeight,
  aspectRatio,
  containerSx,
  className,
  "aria-label": ariaLabel = "Spotlight",
  onNavigate,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!item) return null;
  const currentSize = sizeConfig[size] ?? sizeConfig.medium;
  const radiusValue = getRadius(radius);
  const containerHeight = getResponsiveValue(height);
  const containerMinHeight = getResponsiveValue(
    minHeight ?? (height === undefined ? currentSize.minHeight : undefined),
  );
  const containerMaxHeight = getResponsiveValue(maxHeight);
  const responsiveAspectRatio =
    height === undefined
      ? aspectRatio !== undefined
        ? typeof aspectRatio === "string"
          ? aspectRatio
          : {
              xs: aspectRatio.xs,
              sm: aspectRatio.sm,
              md: aspectRatio.md,
              lg: aspectRatio.lg,
              xl: aspectRatio.xl,
            }
        : currentSize.aspectRatio
      : undefined;

  const contentAlign = item.contentAlign ?? "left";
  const contentAlignItems = contentAlign === "center" ? "center" : contentAlign === "right" ? "flex-end" : "flex-start";
  const contentTextAlign = contentAlign === "center" ? "center" : contentAlign === "right" ? "right" : "left";
  const contentJustifyContent = contentAlign === "center" ? "center" : "flex-end";

  const getVariantOverlay = (itemVariant?: SpotlightVariant) => {
    return resolveVariantOverlay(itemVariant ?? variant);
  };

  const renderImage = (spotlightItem: SpotlightItem) => {
    const isPriority = Boolean(imagePriority);
    if (ImageComponent) {
      return (
        <ImageComponent
          src={isMobile && spotlightItem.media.mobileSrc ? spotlightItem.media.mobileSrc : spotlightItem.media.src}
          alt={spotlightItem.media.alt}
          fill
          sizes={imageSizes}
          priority={isPriority}
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      );
    }

    if (isMobile && spotlightItem.media.mobileSrc) {
      return (
        <Box
          component="img"
          src={spotlightItem.media.mobileSrc}
          alt={spotlightItem.media.alt}
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      );
    }

    return (
      <Box
        component="img"
        src={spotlightItem.media.src}
        alt={spotlightItem.media.alt}
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={isPriority ? "high" : "auto"}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    );
  };

  return (
    <Box
      className={className}
      role="region"
      aria-label={ariaLabel}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        isolation: "isolate",
        userSelect: "none",
        WebkitUserSelect: "none",
        height: containerHeight,
        minHeight: containerMinHeight,
        maxHeight: containerMaxHeight,
        aspectRatio: responsiveAspectRatio,
        borderRadius: radiusValue,
        bgcolor: "background.default",
        ...containerSx,
      }}
    >
      {/* ── Media ───────────────────────────────────────────────────────────── */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        {renderImage(item)}

        {/* Overlay */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            ...getVariantOverlay(item.variant),
          }}
        />
      </Box>

      {/* ── Full image link ─────────────────────────────────────────────────── */}

      {item.href && (
        <MediaLink
          href={item.href}
          label={item.linkLabel ?? (item.title ? `View ${item.title}` : item.media.alt || "View details")}
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.(item, event);
          }}
        />
      )}

      {/* ── Content ─────────────────────────────────────────────────────────── */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: contentJustifyContent,
          alignItems: contentAlignItems,
          p: currentSize.contentPadding,
          pointerEvents: "none",
          color: "#fff",
          fontKerning: "normal",
          fontOpticalSizing: "auto",
        }}
      >
        {item.content ? (
          item.content
        ) : (
          <Box
            sx={[
              {
                maxWidth: {
                  xs: "92%",
                  sm: "78%",
                  md: contentAlign === "center" ? "70%" : "58%",
                  lg: contentAlign === "center" ? "60%" : "50%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: contentAlignItems,
                textAlign: contentTextAlign,
                gap: { xs: 0.9, md: 1.15 },
              },
              ...(Array.isArray(item.contentSx) ? item.contentSx : [item.contentSx]),
            ]}
          >
            {/* Eyebrow */}

            {item.eyebrow && (
              <Typography
                component="div"
                sx={[
                  {
                    ...(!hasCustomFontSize(item.eyebrowSx) && { fontSize: currentSize.eyebrow }),
                    fontWeight: 550,
                    lineHeight: 1.2,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    opacity: 0.9,
                  },
                  ...(Array.isArray(item.eyebrowSx) ? item.eyebrowSx : [item.eyebrowSx]),
                ]}
              >
                {item.eyebrow}
              </Typography>
            )}

            {/* Title */}

            {item.title && (
              <Typography
                component="h2"
                sx={[
                  {
                    ...(!hasCustomFontSize(item.titleSx) && { fontSize: currentSize.title }),
                    lineHeight: 1.02,
                    fontWeight: 550,
                    letterSpacing: "-0.025em",
                    maxWidth: { xs: "100%", md: "620px" },
                  },
                  ...(Array.isArray(item.titleSx) ? item.titleSx : [item.titleSx]),
                ]}
              >
                {item.title}
              </Typography>
            )}

            {/* Description */}

            {item.description && (
              <Typography
                component="p"
                sx={[
                  {
                    m: 0,
                    maxWidth: { xs: "100%", md: "560px" },
                    ...(!hasCustomFontSize(item.descriptionSx) && { fontSize: currentSize.description }),
                    fontWeight: 400,
                    letterSpacing: "-0.005em",
                    lineHeight: 1.5,
                    opacity: 0.9,
                  },
                  ...(Array.isArray(item.descriptionSx) ? item.descriptionSx : [item.descriptionSx]),
                ]}
              >
                {item.description}
              </Typography>
            )}

            {/* CTA Button */}

            {item.action && (item.action.label || item.action.href || item.action.onClick) && (
              <Box
                sx={{
                  pointerEvents: "auto",
                  mt: { xs: 0.5, md: 1 },
                }}
              >
                {item.action.href ? (
                  <Button
                    href={item.action.href}
                    variant={item.action.variant ?? "contained"}
                    color={item.action.color ?? "primary"}
                    size={item.action.size ?? currentSize.buttonSize}
                    endIcon={item.action.showArrow !== false ? <ArrowRight size={16} /> : undefined}
                    target={item.action.target}
                    rel={item.action.rel}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      event.preventDefault();
                      item.action?.onClick?.(event);
                      onNavigate?.(item, event);
                    }}
                    aria-label={item.action.ariaLabel}
                    sx={[
                      {
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                        fontWeight: 550,
                        letterSpacing: "-0.01em",
                        textTransform: "none",
                        lineHeight: 1.2,
                        "& .MuiButton-endIcon": {
                          ml: 0.75,
                        },
                      },
                      ...(Array.isArray(item.action.sx) ? item.action.sx : [item.action.sx]),
                    ]}
                  >
                    {item.action.label}
                  </Button>
                ) : (
                  <Button
                    variant={item.action.variant ?? "contained"}
                    color={item.action.color ?? "primary"}
                    size={item.action.size ?? currentSize.buttonSize}
                    endIcon={item.action.showArrow !== false ? <ArrowRight size={16} /> : undefined}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                      item.action?.onClick?.(event);
                      onNavigate?.(item, event as any);
                    }}
                    aria-label={item.action.ariaLabel}
                    sx={[
                      {
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                        fontWeight: 550,
                        letterSpacing: "-0.01em",
                        textTransform: "none",
                        lineHeight: 1.2,
                        "& .MuiButton-endIcon": {
                          ml: 0.75,
                        },
                      },
                      ...(Array.isArray(item.action.sx) ? item.action.sx : [item.action.sx]),
                    ]}
                  >
                    {item.action.label}
                  </Button>
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* ── Rotated Side Label ─────────────────────────────────────────────── */}

      {item.sideLabel && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 12, md: 24 },
            zIndex: 4,
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={[
              {
                fontSize: "0.65rem",
                fontWeight: 550,
                lineHeight: 1.2,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fff",
                opacity: 0.75,
                whiteSpace: "nowrap",
              },
              ...(Array.isArray(item.sideLabelSx) ? item.sideLabelSx : [item.sideLabelSx]),
            ]}
          >
            {item.sideLabel}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Spotlight;
