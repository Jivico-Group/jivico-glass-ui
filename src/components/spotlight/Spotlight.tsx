"use client";

import React from "react";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ArrowRight } from "lucide-react";

import type {
  SpotlightDimension,
  SpotlightItem,
  SpotlightProps,
  SpotlightSize,
} from "./Spotlight.types.js";

const getResponsiveValue = (value: SpotlightDimension | undefined) => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === "number" || typeof value === "string") {
    return value;
  }

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

type SizeConfig = {
  minHeight: { xs: number; md: number; lg?: number };
  aspectRatio?: { xs?: string; md?: string; lg?: string };
  title: { xs: string; md: string; lg: string };
  description: { xs: string; md: string };
  eyebrow: string;
  buttonSize: "small" | "medium" | "large";
  buttonHeight: number;
  buttonPaddingX: number;
  contentPadding: { xs: number; md: number; lg: number };
};

const sizeConfig: Record<SpotlightSize, SizeConfig> = {
  small: {
    minHeight: { xs: 260, md: 320 },
    aspectRatio: { xs: "16/10", md: "21/9" },
    title: { xs: "1.75rem", md: "2.25rem", lg: "2.75rem" },
    description: { xs: "0.875rem", md: "0.95rem" },
    eyebrow: "0.65rem",
    buttonSize: "small",
    buttonHeight: 38,
    buttonPaddingX: 2,
    contentPadding: { xs: 2.5, md: 4, lg: 5 },
  },
  medium: {
    minHeight: { xs: 320, md: 400 },
    aspectRatio: { xs: "16/10", md: "16/8" },
    title: { xs: "2rem", md: "3rem", lg: "3.5rem" },
    description: { xs: "0.9rem", md: "1rem" },
    eyebrow: "0.68rem",
    buttonSize: "medium",
    buttonHeight: 42,
    buttonPaddingX: 2.5,
    contentPadding: { xs: 3, md: 5, lg: 6 },
  },
  large: {
    minHeight: { xs: 380, md: 480 },
    aspectRatio: { xs: "4/3", md: "16/9" },
    title: { xs: "2.35rem", md: "3.5rem", lg: "4.25rem" },
    description: { xs: "0.95rem", md: "1.05rem" },
    eyebrow: "0.7rem",
    buttonSize: "medium",
    buttonHeight: 44,
    buttonPaddingX: 3,
    contentPadding: { xs: 3.5, md: 6, lg: 8 },
  },
  hero: {
    minHeight: { xs: 440, md: 560 },
    aspectRatio: { xs: "1/1", md: "21/9" },
    title: { xs: "2.75rem", md: "4.5rem", lg: "5.5rem" },
    description: { xs: "1rem", md: "1.1rem" },
    eyebrow: "0.72rem",
    buttonSize: "large",
    buttonHeight: 48,
    buttonPaddingX: 3.25,
    contentPadding: { xs: 4, md: 8, lg: 10 },
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

  if (!item) {
    return null;
  }

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

  const getVariantOverlay = () => {
    switch (variant) {
      case "minimal":
        return {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
        };

      case "glass":
        return {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)",
        };

      case "editorial":

      default:
        return {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.02) 15%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.7) 100%)",
        };
    }
  };

  const renderImage = (spotlightItem: SpotlightItem) => {
    if (ImageComponent) {
      return (
        <ImageComponent
          src={
            isMobile && spotlightItem.media.mobileSrc
              ? spotlightItem.media.mobileSrc
              : spotlightItem.media.src
          }
          alt={spotlightItem.media.alt}
          fill
          sizes={imageSizes}
          priority={imagePriority}
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
            ...getVariantOverlay(),
          }}
        />
      </Box>

      {/* ── Full image link ─────────────────────────────────────────────────── */}

      {item.href && (
        <MediaLink
          href={item.href}
          label={
            item.linkLabel ??
            (item.title
              ? `View ${item.title}`
              : item.media.alt || "View details")
          }
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
          justifyContent: "flex-end",
          alignItems: "flex-start",
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
                  xs: "100%",
                  sm: "85%",
                  md: "70%",
                  lg: "62%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: 1, md: 1.5 },
              },
              ...(Array.isArray(item.contentSx)
                ? item.contentSx
                : [item.contentSx]),
            ]}
          >
            {/* Eyebrow */}

            {item.eyebrow && (
              <Typography
                component="div"
                sx={[
                  {
                    fontSize: currentSize.eyebrow,
                    fontWeight: 550,
                    lineHeight: 1.2,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    opacity: 0.9,
                  },
                  ...(Array.isArray(item.eyebrowSx)
                    ? item.eyebrowSx
                    : [item.eyebrowSx]),
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
                    fontSize: currentSize.title,
                    lineHeight: 1.02,
                    fontWeight: 550,
                    letterSpacing: "-0.025em",
                    maxWidth: { xs: "100%", md: "850px" },
                  },
                  ...(Array.isArray(item.titleSx)
                    ? item.titleSx
                    : [item.titleSx]),
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
                    maxWidth: { xs: "100%", md: "650px" },
                    fontSize: currentSize.description,
                    fontWeight: 400,
                    letterSpacing: "-0.005em",
                    lineHeight: 1.5,
                    opacity: 0.9,
                  },
                  ...(Array.isArray(item.descriptionSx)
                    ? item.descriptionSx
                    : [item.descriptionSx]),
                ]}
              >
                {item.description}
              </Typography>
            )}

            {/* CTA Button */}

            {item.action && (item.action.href || item.action.onClick) && (
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
                    size={currentSize.buttonSize}
                    endIcon={<ArrowRight size={16} />}
                    target={item.action.target}
                    rel={item.action.rel}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      event.preventDefault();

                      item.action?.onClick?.(event);

                      onNavigate?.(item, event);
                    }}
                    aria-label={item.action.ariaLabel}
                    sx={{
                      minHeight: currentSize.buttonHeight,
                      px: currentSize.buttonPaddingX,
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      fontWeight: 550,
                      letterSpacing: "-0.01em",
                      textTransform: "none",
                      lineHeight: 1.2,
                      "& .MuiButton-endIcon": {
                        ml: 0.75,
                      },
                    }}
                  >
                    {item.action.label}
                  </Button>
                ) : (
                  <Button
                    variant={item.action.variant ?? "contained"}
                    color={item.action.color ?? "primary"}
                    size={currentSize.buttonSize}
                    endIcon={<ArrowRight size={16} />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                      item.action?.onClick?.(event);

                      onNavigate?.(item, event as any);
                    }}
                    aria-label={item.action.ariaLabel}
                    sx={{
                      minHeight: currentSize.buttonHeight,
                      px: currentSize.buttonPaddingX,
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      fontWeight: 550,
                      letterSpacing: "-0.01em",
                      textTransform: "none",
                      lineHeight: 1.2,
                      "& .MuiButton-endIcon": {
                        ml: 0.75,
                      },
                    }}
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
              ...(Array.isArray(item.sideLabelSx)
                ? item.sideLabelSx
                : [item.sideLabelSx]),
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
