"use client";

import React from "react";
import { Backdrop, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Loader } from "./Loader.js";
import type { BackdropLoaderProps } from "./BackdropLoader.types.js";

export const BackdropLoader = React.forwardRef<HTMLDivElement, BackdropLoaderProps>(function BackdropLoader(
  {
    open,
    message,
    messageProps,
    zIndex,
    contained = false,
    blur = "12px",
    backgroundColor,
    backdropProps,
    // Loader props passed through
    src,
    darkSrc,
    ImageComponent,
    imageProps,
    width = 56,
    height = 56,
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
  ref,
) {
  const theme = useTheme();
  const isDark = theme.palette?.mode === "dark";

  // Resolve glassmorphic backdrop background
  const resolvedBg = backgroundColor ?? (isDark ? "rgba(10, 10, 12, 0.49)" : "rgba(255, 255, 255, 0.57)");

  const resolvedBlur = typeof blur === "number" ? `${blur}px` : blur;

  return (
    <Backdrop
      ref={ref}
      open={open}
      className={className}
      sx={{
        zIndex: zIndex ?? ((t) => t.zIndex.drawer + 1),
        position: contained ? "absolute" : "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: message ? 2.5 : 0,
        backgroundColor: resolvedBg,
        backdropFilter: `blur(${resolvedBlur})`,
        WebkitBackdropFilter: `blur(${resolvedBlur})`,
        color: isDark ? "#F5F5F7" : "#111111",
        transition: theme.transitions.create(["opacity", "background-color"], { duration: theme.transitions.duration.shorter }),
        ...backdropProps?.sx,
      }}
      {...backdropProps}
      {...rest}
    >
      <Loader
        src={src}
        darkSrc={darkSrc}
        ImageComponent={ImageComponent}
        imageProps={imageProps}
        width={width}
        height={height}
        color={color}
        variant={variant}
        value={value}
        thickness={thickness}
        size={size}
        alt={alt}
        objectFit={objectFit}
        onImageError={onImageError}
        sx={sx}
      />
      {message && (
        <Typography variant="body2" {...messageProps} sx={{ color: "inherit", fontWeight: 500, letterSpacing: "0.01em", textAlign: "center", maxWidth: 380, px: 2, ...messageProps?.sx }}>
          {message}
        </Typography>
      )}
    </Backdrop>
  );
});

BackdropLoader.displayName = "BackdropLoader";
