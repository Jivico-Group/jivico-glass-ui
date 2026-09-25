import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import type {
  StatusShowcaseImage,
  StatusShowcaseProps,
} from "./StatusShowcase.types.js";

const SIZE_CONFIG = {
  small: {
    maxWidth: 560,

    image: {
      xs: 180,
      sm: 220,
      md: 250,
    },

    code: {
      xs: "0.66rem",
      sm: "0.7rem",
    },

    title: {
      xs: "1.8rem",
      sm: "2.25rem",
      md: "2.75rem",
    },

    description: {
      xs: "0.875rem",
      sm: "0.9375rem",
    },

    imageBottom: {
      xs: 24,
      sm: 28,
    },

    buttonHeight: 42,
    buttonMinWidth: 132,

    signatureTop: 38,
  },

  medium: {
    maxWidth: 720,

    image: {
      xs: 230,
      sm: 300,
      md: 370,
    },

    code: {
      xs: "0.7rem",
      sm: "0.74rem",
    },

    title: {
      xs: "2.1rem",
      sm: "2.8rem",
      md: "3.5rem",
    },

    description: {
      xs: "0.925rem",
      sm: "1rem",
    },

    imageBottom: {
      xs: 28,
      sm: 34,
    },

    buttonHeight: 44,
    buttonMinWidth: 145,

    signatureTop: 46,
  },

  large: {
    maxWidth: 1120,

    image: {
      xs: 270,
      sm: 370,
      md: 470,
    },

    code: {
      xs: "0.72rem",
      sm: "0.78rem",
    },

    title: {
      xs: "2.4rem",
      sm: "3.2rem",
      md: "4rem",
    },

    description: {
      xs: "1rem",
      sm: "1.075rem",
    },

    imageBottom: {
      xs: 32,
      sm: 42,
    },

    buttonHeight: 48,
    buttonMinWidth: 155,

    signatureTop: 54,
  },
} as const;

export const StatusShowcase: React.FC<StatusShowcaseProps> = ({
  image,
  renderImage,
  code,
  title,
  description,
  children,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  signature,
  size = "medium",
  surface = "standard",
  className,
  sx,
}) => {
  const config = SIZE_CONFIG[size];

  const isGlass = surface === "glass";

  const renderStatusImage = (imageProps: StatusShowcaseImage) => {
    if (renderImage) {
      return renderImage(imageProps);
    }

    return (
      <Box
        component="img"
        src={imageProps.src}
        alt={imageProps.alt ?? ""}
        width={imageProps.width}
        height={imageProps.height}
        sx={{
          display: "block",
          width: imageProps.width ?? "100%",
          height: imageProps.height ?? "auto",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
    );
  };

  return (
    <Box
      className={className}
      sx={{
        width: "100%",
        minWidth: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        boxSizing: "border-box",

        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        py: {
          xs: 5,
          sm: 7,
          md: 9,
        },

        ...(isGlass && {
          position: "relative",
          overflow: "hidden",

          borderRadius: {
            xs: 4,
            sm: 5,
          },

          backgroundColor: "background.paper",

          border: "1px solid",
          borderColor: "divider",

          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",

          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",

          "&::before": {
            content: '""',

            position: "absolute",
            inset: 0,

            pointerEvents: "none",

            background:
              "linear-gradient(135deg, rgba(255,255,255,0.10), transparent 45%, rgba(255,255,255,0.04))",

            opacity: 0.7,
          },
        }),

        ...sx,
      }}
    >
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,

          width: "100%",

          maxWidth: config.maxWidth,

          alignItems: "center",

          textAlign: "center",
        }}
      >
        {/* -------------------------------------------------- */}
        {/* IMAGE */}
        {/* -------------------------------------------------- */}

        {image && (
          <Box
            sx={{
              width: config.image,

              maxWidth: {
                xs: "82%",
                sm: "78%",
                md: "100%",
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              mb: config.imageBottom,

              flexShrink: 0,

              "& img": {
                display: "block",
                maxWidth: "100%",
                height: "auto",
              },
            }}
          >
            {renderStatusImage(image)}
          </Box>
        )}

        {/* -------------------------------------------------- */}
        {/* CODE */}
        {/* -------------------------------------------------- */}

        {code && (
          <Typography
            component="div"
            sx={{
              m: 0,

              mb: {
                xs: 1.25,
                sm: 1.5,
              },

              color: "text.secondary",

              fontSize: config.code,

              fontWeight: 700,

              letterSpacing: "0.18em",

              lineHeight: 1.2,

              textTransform: "uppercase",
            }}
          >
            {code}
          </Typography>
        )}

        {/* -------------------------------------------------- */}
        {/* TITLE */}
        {/* -------------------------------------------------- */}

        <Typography
          component="h2"
          sx={{
            m: 0,

            width: "100%",

            maxWidth: {
              xs: "100%",
              sm: 760,
              md: 850,
            },

            color: "text.primary",

            fontSize: config.title,

            fontWeight: 700,

            letterSpacing: "-0.045em",

            lineHeight: 1.02,

            textWrap: "balance",
          }}
        >
          {title}
        </Typography>

        {/* -------------------------------------------------- */}
        {/* DESCRIPTION */}
        {/* -------------------------------------------------- */}

        {description && (
          <Typography
            component="p"
            sx={{
              m: 0,

              mt: {
                xs: 2,
                sm: 2.5,
              },

              maxWidth: 590,

              color: "text.secondary",

              fontSize: config.description,

              fontWeight: 400,

              lineHeight: 1.55,

              textWrap: "pretty",
            }}
          >
            {description}
          </Typography>
        )}

        {/* -------------------------------------------------- */}
        {/* CUSTOM CONTENT */}
        {/* -------------------------------------------------- */}

        {children && (
          <Box
            sx={{
              width: "100%",

              mt: {
                xs: 2.5,
                sm: 3,
              },
            }}
          >
            {children}
          </Box>
        )}

        {/* -------------------------------------------------- */}
        {/* ACTIONS */}
        {/* -------------------------------------------------- */}

        {(actionLabel || secondaryActionLabel) && (
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.25}
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },

              alignItems: "center",
              justifyContent: "center",

              mt: {
                xs: 2.5,
                sm: 3,
              },
            }}
          >
            {actionLabel && (
              <Button
                variant="contained"
                onClick={onAction}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },

                  minWidth: config.buttonMinWidth,

                  minHeight: config.buttonHeight,

                  px: 2.5,

                  flexShrink: 0,
                }}
              >
                {actionLabel}
              </Button>
            )}

            {secondaryActionLabel && (
              <Button
                variant="outlined"
                onClick={onSecondaryAction}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },

                  minWidth: config.buttonMinWidth,

                  minHeight: config.buttonHeight,

                  px: 2.5,

                  flexShrink: 0,
                }}
              >
                {secondaryActionLabel}
              </Button>
            )}
          </Stack>
        )}

        {/* -------------------------------------------------- */}
        {/* SIGNATURE */}
        {/* -------------------------------------------------- */}

        {signature && (
          <Box
            sx={{
              mt: config.signatureTop,

              display: "flex",

              alignItems: "center",
              justifyContent: "center",

              maxWidth: "100%",

              color: "text.secondary",
            }}
          >
            {signature}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default StatusShowcase;
