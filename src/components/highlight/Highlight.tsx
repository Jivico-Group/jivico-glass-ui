import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import type { Theme } from "@mui/material/styles";

import type {
  HighlightDimension,
  HighlightImageProps,
  HighlightProps,
} from "./Highlight.types.js";

const getDimension = (
  value: HighlightDimension | undefined,
): HighlightDimension | undefined => value;

const getRadius = (radius: number | string | undefined, theme: Theme) => {
  if (radius === undefined) {
    return theme.shape.borderRadius;
  }

  if (typeof radius === "number") {
    return theme.spacing(radius);
  }

  return radius;
};

const HighlightActionButton = ({ action }: Pick<HighlightProps, "action">) => {
  if (!action) {
    return null;
  }

  if (action.href) {
    return (
      <Button
        component="a"
        href={action.href}
        variant="contained"
        size="small"
        onClick={action.onClick}
        sx={{
          width: "fit-content",
          minWidth: 0,
          px: 2,
          py: 1,
          borderRadius: 999,
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {action.label}
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      size="small"
      onClick={action.onClick}
      sx={{
        width: "fit-content",
        minWidth: 0,
        px: 2,
        py: 1,
        borderRadius: 999,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {action.label}
    </Button>
  );
};

interface HighlightImageRendererProps {
  image: string;
  mobileImage?: string;
  alt: string;
  imagePosition: string;
  imageSizes?: string;
  imagePriority?: boolean;
  ImageComponent?: HighlightProps["ImageComponent"];
}

const DefaultImage = ({
  src,
  alt,
  imagePosition,
  imageSizes,
  imagePriority,
}: {
  src: string;
  alt: string;
  imagePosition: string;
  imageSizes?: string;
  imagePriority?: boolean;
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={imagePriority ? "eager" : "lazy"}
      sizes={imageSizes}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: imagePosition,
        transition: "transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1)",
      }}
    />
  );
};

const HighlightImage = ({
  image,
  mobileImage,
  alt,
  imagePosition,
  imageSizes,
  imagePriority = false,
  ImageComponent,
}: HighlightImageRendererProps) => {
  /*
   * Native <img> fallback.
   */
  if (!ImageComponent) {
    if (mobileImage) {
      return (
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />

          <DefaultImage
            src={image}
            alt={alt}
            imagePosition={imagePosition}
            imageSizes={imageSizes}
            imagePriority={imagePriority}
          />
        </picture>
      );
    }

    return (
      <DefaultImage
        src={image}
        alt={alt}
        imagePosition={imagePosition}
        imageSizes={imageSizes}
        imagePriority={imagePriority}
      />
    );
  }

  /*
   * Custom image implementation.
   *
   * This can be Next.js Image or another compatible
   * image component.
   */
  const CustomImage = ImageComponent;

  const imageProps: HighlightImageProps = {
    src: image,
    alt,
    sizes: imageSizes,
    priority: imagePriority,
    fill: true,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: imagePosition,
      transition: "transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1)",
    },
  };

  return <CustomImage {...imageProps} />;
};

interface HighlightMediaLinkProps {
  href: string;
  label: string;
  onNavigate?: HighlightProps["onNavigate"];
}

const HighlightMediaLink = ({
  href,
  label,
  onNavigate,
}: HighlightMediaLinkProps) => {
  return (
    <Box
      component="a"
      href={href}
      aria-label={label}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.(event);
      }}
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

export const Highlight = ({
  image,
  mobileImage,
  alt = "",
  ImageComponent,
  imageSizes,
  eyebrow,
  title,
  description,
  action,
  variant = "overlay",
  size = "medium",
  height,
  minHeight,
  maxHeight,
  aspectRatio = "4 / 5",
  imagePosition = "center",
  radius,
  imagePriority = false,
  href,
  linkLabel,
  onNavigate,
  children,
  sx,
  className,
  "aria-label": ariaLabel,
}: HighlightProps) => {
  const theme = useTheme();

  const resolvedRadius = getRadius(radius, theme);

  const sizeStyles = {
    small: {
      minHeight: 220,
      padding: 2,
      titleVariant: "h6" as const,
      descriptionVariant: "body2" as const,
    },

    medium: {
      minHeight: 300,
      padding: 3,
      titleVariant: "h5" as const,
      descriptionVariant: "body2" as const,
    },

    large: {
      minHeight: 400,
      padding: 4,
      titleVariant: "h4" as const,
      descriptionVariant: "body1" as const,
    },
  }[size];

  const resolvedHeight = getDimension(height);
  const resolvedMinHeight = getDimension(minHeight);
  const resolvedMaxHeight = getDimension(maxHeight);

  const resolvedLinkLabel =
    linkLabel || (alt ? `View ${alt}` : "View highlight");

  const mediaLink = href ? (
    <HighlightMediaLink
      href={href}
      label={resolvedLinkLabel}
      onNavigate={onNavigate}
    />
  ) : null;

  const content = (
    <>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            display: "block",
            mb: 0.5,
            fontWeight: 600,
            letterSpacing: "0.12em",
          }}
        >
          {eyebrow}
        </Typography>
      )}

      {title && (
        <Typography
          component="h3"
          variant={sizeStyles.titleVariant}
          sx={{
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant={sizeStyles.descriptionVariant}
          sx={{
            mt: 1,
            maxWidth: 420,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          {description}
        </Typography>
      )}

      {action && (
        <Box sx={{ mt: 2 }}>
          <HighlightActionButton action={action} />
        </Box>
      )}

      {children && <Box sx={{ mt: 2 }}>{children}</Box>}
    </>
  );

  /*
   * MINIMAL
   */
  if (variant === "minimal") {
    return (
      <Box
        component="article"
        className={className}
        aria-label={ariaLabel}
        sx={[
          {
            width: "100%",
            overflow: "hidden",
            borderRadius: resolvedRadius,

            "&:hover img": {
              transform: "scale(1.03)",
            },
          },

          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio,
            height: resolvedHeight,
            minHeight: resolvedMinHeight,
            maxHeight: resolvedMaxHeight,
            overflow: "hidden",
          }}
        >
          <HighlightImage
            image={image}
            mobileImage={mobileImage}
            alt={alt}
            imagePosition={imagePosition}
            imageSizes={imageSizes}
            imagePriority={imagePriority}
            ImageComponent={ImageComponent}
          />

          {mediaLink}
        </Box>

        {(eyebrow || title || description || action || children) && (
          <Box
            sx={{
              pt: 2,
              px: 0.5,
            }}
          >
            {content}
          </Box>
        )}
      </Box>
    );
  }

  const contentPosition =
    variant === "center"
      ? {
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center" as const,
        }
      : {
          alignItems: "flex-start",
          justifyContent: "flex-end",
          textAlign: "left" as const,
        };

  /*
   * OVERLAY / CENTER
   */
  return (
    <Box
      component="article"
      className={className}
      aria-label={ariaLabel}
      sx={[
        {
          position: "relative",
          width: "100%",
          minHeight: resolvedMinHeight ?? sizeStyles.minHeight,
          height: resolvedHeight,
          maxHeight: resolvedMaxHeight,
          aspectRatio: resolvedHeight ? undefined : aspectRatio,
          overflow: "hidden",
          borderRadius: resolvedRadius,
          isolation: "isolate",
          color: "#fff",
          backgroundColor: theme.palette.grey[900],

          "&:hover img": {
            transform: "scale(1.035)",
          },
        },

        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <HighlightImage
          image={image}
          mobileImage={mobileImage}
          alt={alt}
          imagePosition={imagePosition}
          imageSizes={imageSizes}
          imagePriority={imagePriority}
          ImageComponent={ImageComponent}
        />

        {mediaLink}
      </Box>

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            variant === "center"
              ? "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          ...contentPosition,
          p: sizeStyles.padding,
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default Highlight;
