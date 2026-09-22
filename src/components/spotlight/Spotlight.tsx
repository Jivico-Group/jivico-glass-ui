"use client";

import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import type { SxProps, Theme } from "@mui/material/styles";

import type {
  SpotlightAction,
  SpotlightDimension,
  SpotlightImageContext,
  SpotlightImageProps,
  SpotlightProps,
  SpotlightSize,
} from "./Spotlight.types.js";

const sizeStyles: Record<
  SpotlightSize,
  {
    minHeight: number;
    padding: number;
    titleVariant: "h4" | "h3" | "h2";
  }
> = {
  small: {
    minHeight: 220,
    padding: 3,
    titleVariant: "h4",
  },

  medium: {
    minHeight: 320,
    padding: 4,
    titleVariant: "h3",
  },

  large: {
    minHeight: 440,
    padding: 5,
    titleVariant: "h2",
  },
};

const getRadius = (
  radius: number | string | undefined,
  theme: Theme,
): number | string => {
  if (radius === undefined) {
    return theme.shape.borderRadius;
  }

  if (typeof radius === "number") {
    return theme.spacing(radius);
  }

  return radius;
};

const getDimension = (
  value: SpotlightDimension | undefined,
): SpotlightDimension | undefined => {
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

interface SpotlightActionButtonProps {
  action: SpotlightAction;
}

function SpotlightActionButton({ action }: SpotlightActionButtonProps) {
  if (action.href) {
    return (
      <Button
        component="a"
        href={action.href}
        target={action.target}
        rel={action.rel}
        aria-label={action.ariaLabel}
        onClick={(event) => {
          /*
           * The CTA is inside the Spotlight anchor.
           *
           * Stop the event here so clicking the CTA does not
           * also trigger the parent Spotlight navigation.
           */
          event.stopPropagation();
        }}
        variant="contained"
        size="medium"
        sx={{
          alignSelf: "flex-start",
          borderRadius: 999,
          px: 2.5,
          py: 1.1,
          whiteSpace: "nowrap",
        }}
      >
        {action.label}
      </Button>
    );
  }

  return (
    <Button
      onClick={action.onClick}
      aria-label={action.ariaLabel}
      variant="contained"
      size="medium"
      sx={{
        alignSelf: "flex-start",
        borderRadius: 999,
        px: 2.5,
        py: 1.1,
        whiteSpace: "nowrap",
      }}
    >
      {action.label}
    </Button>
  );
}

/**
 * Native image fallback.
 */
function NativeSpotlightImage({
  src,
  alt,
  imagePosition,
  imagePriority,
  imageSizes,
}: {
  src: string;
  alt: string;
  imagePosition: string;
  imagePriority: boolean;
  imageSizes?: string;
}) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={imagePriority ? "eager" : "lazy"}
      sizes={imageSizes}
      draggable={false}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: imagePosition,
        userSelect: "none",
        transition: "transform 700ms cubic-bezier(0.2, 0.65, 0.3, 1)",
      }}
    />
  );
}

interface SpotlightImageRendererProps {
  image: string;
  mobileImage?: string;
  alt: string;
  imagePosition: string;
  imageSizes?: string;
  imagePriority: boolean;
  ImageComponent?: SpotlightProps["ImageComponent"];
  renderImage?: SpotlightProps["renderImage"];
}

function SpotlightImage({
  image,
  mobileImage,
  alt,
  imagePosition,
  imageSizes,
  imagePriority,
  ImageComponent,
  renderImage,
}: SpotlightImageRendererProps) {
  /*
   * ---------------------------------------------------------
   * Advanced custom renderer
   * ---------------------------------------------------------
   */

  if (renderImage) {
    const context: SpotlightImageContext = {
      src: image,
      mobileImage,
      alt,
      imagePosition,
    };

    return renderImage(context);
  }

  /*
   * ---------------------------------------------------------
   * Custom image component
   * ---------------------------------------------------------
   */

  if (ImageComponent) {
    const CustomImage = ImageComponent;

    const imageProps: SpotlightImageProps = {
      src: image,
      alt,
      fill: true,
      sizes: imageSizes,
      priority: imagePriority,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: imagePosition,
        transition: "transform 700ms cubic-bezier(0.2, 0.65, 0.3, 1)",
      },
    };

    return (
      <picture
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        {mobileImage && (
          <source media="(max-width: 767px)" srcSet={mobileImage} />
        )}

        <CustomImage {...imageProps} />
      </picture>
    );
  }

  /*
   * ---------------------------------------------------------
   * Native fallback
   * ---------------------------------------------------------
   */

  return (
    <picture
      style={{
        position: "absolute",
        inset: 0,
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {mobileImage && (
        <source media="(max-width: 767px)" srcSet={mobileImage} />
      )}

      <NativeSpotlightImage
        src={image}
        alt={alt}
        imagePosition={imagePosition}
        imagePriority={imagePriority}
        imageSizes={imageSizes}
      />
    </picture>
  );
}

export function Spotlight({
  image,
  mobileImage,
  alt = "",

  ImageComponent,
  renderImage,

  href,
  linkLabel,
  onNavigate,

  eyebrow,
  title,
  description,
  action,

  variant = "overlay",
  size = "medium",

  aspectRatio = "16 / 7",

  height,
  minHeight,
  maxHeight,

  imagePosition = "center",

  imageSizes = "(max-width: 767px) 100vw, 100vw",

  imagePriority = false,

  radius,

  children,

  sx,
  className,

  "aria-label": ariaLabel,
}: SpotlightProps) {
  const theme = useTheme();

  const resolvedRadius = getRadius(radius, theme);

  const dimensions = {
    height: getDimension(height),
    minHeight: getDimension(minHeight),
    maxHeight: getDimension(maxHeight),
  };

  const currentSize = sizeStyles[size];

  /*
   * ---------------------------------------------------------
   * Navigation
   * ---------------------------------------------------------
   */

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    /*
     * IMPORTANT:
     *
     * href exists for:
     *
     * - semantic HTML
     * - SEO
     * - accessibility
     * - browser status bar
     * - link discovery
     *
     * But Spotlight itself must NOT perform native navigation.
     */
    event.preventDefault();

    onNavigate?.(event);
  };

  /*
   * ---------------------------------------------------------
   * Shared image
   * ---------------------------------------------------------
   */

  const imageElement = (
    <SpotlightImage
      image={image}
      mobileImage={mobileImage}
      alt={alt}
      imagePosition={imagePosition}
      imageSizes={imageSizes}
      imagePriority={imagePriority}
      ImageComponent={ImageComponent}
      renderImage={renderImage}
    />
  );

  /*
   * ---------------------------------------------------------
   * Shared content
   * ---------------------------------------------------------
   */

  const content = (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        cursor: "pointer",
        gap: 1.5,
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.12em",
          }}
        >
          {eyebrow}
        </Typography>
      )}

      {title && (
        <Typography
          variant={currentSize.titleVariant}
          component="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
          }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            opacity: 0.85,
          }}
        >
          {description}
        </Typography>
      )}

      {action && <SpotlightActionButton action={action} />}

      {children}
    </Box>
  );

  /*
   * ---------------------------------------------------------
   * Shared root styles
   * ---------------------------------------------------------
   */

  const baseRootSx: SxProps<Theme> = {
    position: "relative",

    width: "100%",

    overflow: "hidden",

    borderRadius: resolvedRadius,

    ...(dimensions.height !== undefined && {
      height: dimensions.height,
    }),

    ...(dimensions.minHeight !== undefined && {
      minHeight: dimensions.minHeight,
    }),

    ...(dimensions.maxHeight !== undefined && {
      maxHeight: dimensions.maxHeight,
    }),

    "&:hover img": {
      transform: "scale(1.025)",
    },
  };

  /*
   * =========================================================
   * Root renderer
   * =========================================================
   *
   * When href exists:
   *
   * <a href="...">
   *
   * When href does not exist:
   *
   * <section>
   *
   * This keeps Spotlight semantic without forcing
   * every Spotlight to become a link.
   */

  const renderRoot = (children: React.ReactNode) => {
    if (href) {
      return (
        <Box
          component="a"
          href={href}
          aria-label={
            linkLabel ?? (typeof title === "string" ? title : ariaLabel)
          }
          onClick={handleNavigate}
          className={className}
          sx={[
            baseRootSx,
            {
              display: "block",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        >
          {children}
        </Box>
      );
    }

    return (
      <Box
        component="section"
        className={className}
        aria-label={ariaLabel}
        sx={[baseRootSx, ...(Array.isArray(sx) ? sx : [sx])]}
      >
        {children}
      </Box>
    );
  };

  /*
   * =========================================================
   * OVERLAY
   * =========================================================
   */

  if (variant === "overlay") {
    return renderRoot(
      <>
        {imageElement}

        <Box
          sx={{
            position: "relative",

            zIndex: 2,

            width: "100%",

            p: {
              xs: 2.5,

              sm: currentSize.padding,

              md: currentSize.padding + 1,
            },

            display: "flex",

            alignItems: "flex-end",

            minHeight:
              minHeight === undefined
                ? {
                    xs: currentSize.minHeight * 0.75,

                    md: currentSize.minHeight,
                  }
                : dimensions.minHeight,

            aspectRatio: height === undefined ? aspectRatio : undefined,

            isolation: "isolate",

            backgroundColor: "background.default",

            color: "#fff",

            "&::after": {
              content: '""',

              position: "absolute",

              inset: 0,

              zIndex: -1,

              background:
                "linear-gradient(180deg, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0.68) 100%)",

              pointerEvents: "none",
            },
          }}
        >
          {content}
        </Box>
      </>,
    );
  }

  /*
   * =========================================================
   * SPLIT
   * =========================================================
   */

  if (variant === "split") {
    return renderRoot(
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",

            md: "1.15fr 0.85fr",
          },

          aspectRatio: height === undefined ? aspectRatio : undefined,

          minHeight:
            minHeight === undefined
              ? {
                  xs: currentSize.minHeight,

                  md: currentSize.minHeight + 40,
                }
              : dimensions.minHeight,

          backgroundColor: "background.paper",

          color: "text.primary",
        }}
      >
        {/* Image */}

        <Box
          sx={{
            position: "relative",

            minHeight: {
              xs: 220,

              md: "100%",
            },

            overflow: "hidden",
          }}
        >
          {imageElement}
        </Box>

        {/* Content */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            p: {
              xs: 3,

              md: currentSize.padding + 1,
            },
          }}
        >
          {content}
        </Box>
      </Box>,
    );
  }

  /*
   * =========================================================
   * MINIMAL
   * =========================================================
   */

  return renderRoot(
    <>
      {/* Image */}

      <Box
        sx={{
          position: "relative",

          width: "100%",

          aspectRatio: height === undefined ? aspectRatio : undefined,

          height: height !== undefined ? dimensions.height : undefined,

          minHeight: height !== undefined ? dimensions.minHeight : undefined,

          maxHeight: height !== undefined ? dimensions.maxHeight : undefined,

          overflow: "hidden",
        }}
      >
        {imageElement}
      </Box>

      {/* Content */}

      <Box
        sx={{
          p: {
            xs: 2.5,

            md: currentSize.padding,
          },
        }}
      >
        {content}
      </Box>
    </>,
  );
}

export default Spotlight;
