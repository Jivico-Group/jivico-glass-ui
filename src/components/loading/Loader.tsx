"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { LoaderDimension, LoaderImageSource, LoaderProps } from "./Loader.types.js";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const resolveDimension = (dim: LoaderDimension | undefined, fallback: number): string | number => {
  if (dim === undefined) return fallback;
  return typeof dim === "number" ? dim : dim;
};

const toNumericDimension = (dim: LoaderDimension | undefined): number | undefined => {
  if (typeof dim === "number") return dim;
  if (typeof dim === "string") {
    const trimmed = dim.trim();
    if (trimmed.endsWith("px")) {
      const parsed = parseFloat(trimmed);
      if (!Number.isNaN(parsed)) return parsed;
    }
    const parsed = parseFloat(trimmed);
    if (!Number.isNaN(parsed) && String(parsed) === trimmed) return parsed;
  }
  return undefined;
};

/* -------------------------------------------------------------------------- */
/* Loader Component                                                           */
/* -------------------------------------------------------------------------- */

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(function Loader(
  {
    src,
    darkSrc,
    ImageComponent,
    imageProps,
    width = 48,
    height = 48,
    color = "info",
    variant = "indeterminate",
    value,
    thickness,
    size,
    alt = "Loading...",
    objectFit = "contain",
    onImageError,
    className,
    sx,
    ...rest
  },
  ref
) {
  const theme = useTheme();
  const isDark = theme.palette?.mode === "dark";

  /**
   * Mandatory Theme-Aware Image Selection Rules:
   *
   * | src          | darkSrc      | Light mode  | Dark mode  |
   * | ------------ | ------------ | ----------- | ---------- |
   * | Not provided | Not provided | MUI spinner | MUI spinner|
   * | Provided     | Not provided | src         | src        |
   * | Provided     | Provided     | src         | darkSrc    |
   * | Not provided | Provided     | MUI spinner | darkSrc    |
   */
  const activeSource: LoaderImageSource | undefined = isDark ? (darkSrc ?? src) : src;

  // Track image load failures to gracefully fall back to CircularProgress
  const [hasImageError, setHasImageError] = useState(false);

  // Extract source key to detect when source or active theme changes
  const activeSourceKey = useMemo(() => {
    if (!activeSource) return "";
    if (typeof activeSource === "string") return activeSource;
    if (typeof activeSource === "object" && "src" in activeSource) 
      return String((activeSource as { src: unknown }).src);
    return String(activeSource);
  }, [activeSource]);

  // Reset error state on source or theme mode change
  useEffect(() => {
    setHasImageError(false);
  }, [activeSourceKey, isDark]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event> | unknown) => {
    setHasImageError(true);
    onImageError?.(e);
  };

  // Dimensions
  const resolvedWidth = resolveDimension(width, 48);
  const resolvedHeight = resolveDimension(height, 48);
  const numericWidth = toNumericDimension(width);
  const numericHeight = toNumericDimension(height);

  // Calculate spinner size
  const spinnerSize = useMemo(() => {
    if (size !== undefined) return size;
    if (numericWidth !== undefined && numericHeight !== undefined) {
      return Math.min(numericWidth, numericHeight);
    }
    if (numericWidth !== undefined) return numericWidth;
    if (numericHeight !== undefined) return numericHeight;
    if (typeof width === "string") return width;
    return 48;
  }, [size, numericWidth, numericHeight, width]);

  // Determine whether to render custom image or spinner
  const shouldRenderImage = Boolean(activeSource && !hasImageError);

  return (
    <Box
      ref={ref}
      role="status"
      aria-live="polite"
      aria-label={alt}
      className={className}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: resolvedWidth,
        height: resolvedHeight,
        flexShrink: 0,
        verticalAlign: "middle",
        ...sx,
      }}
      {...rest}
    >
      {shouldRenderImage ? (
        ImageComponent ? (
          <ImageComponent
            src={activeSource}
            alt={alt}
            width={numericWidth}
            height={numericHeight}
            onError={handleImageError}
            style={{
              width: resolvedWidth,
              height: resolvedHeight,
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit,
              display: "block",
            }}
            {...imageProps}
          />
        ) : (
          <Box
            component="img"
            src={typeof activeSource === "string" ? activeSource : (activeSource as { src: string }).src}
            alt={alt}
            onError={handleImageError}
            sx={{
              width: resolvedWidth,
              height: resolvedHeight,
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit,
              display: "block",
            }}
            {...imageProps}
          />
        )
      ) : (
        <CircularProgress
          color={color}
          variant={variant}
          value={value}
          thickness={thickness}
          size={spinnerSize}
          aria-label={alt}
        />
      )}
    </Box>
  );
});

Loader.displayName = "Loader";
