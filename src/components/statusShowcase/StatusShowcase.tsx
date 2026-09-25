import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import type {
  StatusShowcaseImage,
  StatusShowcaseProps,
} from "./StatusShowcase.types.js";

const SIZE_CONFIG = {
  small: {
    maxWidth: 1180,
    minHeight: {
      xs: 620,
      sm: 640,
      md: 660,
    },

    contentMaxWidth: {
      xs: 520,
      md: 470,
    },

    visualMaxWidth: {
      xs: 360,
      sm: 460,
      md: 560,
      lg: 620,
    },

    code: {
      xs: "0.66rem",
      sm: "0.7rem",
    },

    title: {
      xs: "2.35rem",
      sm: "2.9rem",
      md: "3.35rem",
      lg: "3.6rem",
    },

    description: {
      xs: "0.875rem",
      sm: "0.9375rem",
    },

    titleBottom: {
      xs: 6,
      sm: 8,
    },

    actionTop: {
      xs: 3,
      sm: 3.5,
    },

    buttonHeight: 44,
    buttonMinWidth: 145,

    signatureTop: {
      xs: 4,
      sm: 5,
    },
  },

  medium: {
    maxWidth: 1320,

    minHeight: {
      xs: 650,
      sm: 690,
      md: 710,
    },

    contentMaxWidth: {
      xs: 540,
      md: 520,
    },

    visualMaxWidth: {
      xs: 400,
      sm: 520,
      md: 650,
      lg: 720,
    },

    code: {
      xs: "0.68rem",
      sm: "0.74rem",
    },

    title: {
      xs: "2.55rem",
      sm: "3.2rem",
      md: "3.8rem",
      lg: "4.15rem",
    },

    description: {
      xs: "0.925rem",
      sm: "1rem",
      md: "1.025rem",
    },

    titleBottom: {
      xs: 17,
      sm: 19,
    },

    actionTop: {
      xs: 3,
      sm: 3.5,
    },

    buttonHeight: 46,
    buttonMinWidth: 150,

    signatureTop: {
      xs: 4.5,
      sm: 5.5,
    },
  },

  large: {
    maxWidth: 1440,

    minHeight: {
      xs: 680,
      sm: 720,
      md: 740,
      lg: 760,
    },

    contentMaxWidth: {
      xs: 520,
      md: 560,
    },

    visualMaxWidth: {
      xs: 420,
      sm: 540,
      md: 700,
      lg: 800,
    },

    code: {
      xs: "0.7rem",
      sm: "0.76rem",
    },

    title: {
      xs: "2.8rem",
      sm: "3.5rem",
      md: "4.1rem",
      lg: "4.5rem",
    },

    description: {
      xs: "0.92rem",
      sm: "1rem",
      md: "1.05rem",
    },

    titleBottom: {
      xs: 16,
      sm: 18,
      md: 20,
    },

    actionTop: {
      xs: 3,
      sm: 3.5,
    },

    buttonHeight: 48,
    buttonMinWidth: 160,

    signatureTop: {
      xs: 4.5,
      sm: 5.5,
    },
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
          width: "100%",
          height: "auto",
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
        boxSizing: "border-box",

        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        },

        py: {
          xs: 3,
          sm: 4,
          md: 5,
          lg: 6,
        },

        ...(isGlass && {
          position: "relative",
          overflow: "hidden",

          borderRadius: {
            xs: 3,
            sm: 4,
          },

          backgroundColor: "background.paper",

          border: "1px solid",
          borderColor: "divider",

          backdropFilter: "blur(24px) saturate(180%)",

          WebkitBackdropFilter: "blur(24px) saturate(180%)",

          boxShadow: {
            xs: "0 12px 40px rgba(0, 0, 0, 0.06)",
            md: "0 20px 60px rgba(0, 0, 0, 0.08)",
          },

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
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          width: "100%",
          maxWidth: config.maxWidth,

          minHeight: config.minHeight,

          mx: "auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
          },

          alignItems: "center",

          columnGap: {
            xs: 0,
            md: 5,
            lg: 8,
          },

          rowGap: {
            xs: 4,
            sm: 5,
            md: 0,
          },
        }}
      >
        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <Stack
          sx={{
            width: "100%",
            maxWidth: config.contentMaxWidth,

            justifySelf: {
              xs: "center",
              md: "start",
            },

            alignSelf: "center",

            alignItems: "flex-start",

            textAlign: "left",
          }}
        >
          {/* CODE */}

          {code && (
            <Typography
              component="div"
              sx={{
                mb: {
                  xs: 1.5,
                  sm: 1.75,
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

          {/* TITLE */}

          <Typography
            component="h1"
            sx={{
              width: "100%",

              color: "text.primary",

              fontSize: config.title,

              fontWeight: 700,

              letterSpacing: "-0.055em",

              lineHeight: {
                xs: 1.02,
                sm: 1,
                md: 0.99,
                lg: 0.98,
              },

              textWrap: "balance",

              maxWidth: "100%",
            }}
          >
            {title}
          </Typography>

          {/* DESCRIPTION */}

          {description && (
            <Typography
              component="p"
              sx={{
                maxWidth: 570,
                mt: config.titleBottom,
                mb: 0,

                color: "text.secondary",

                fontSize: config.description,

                fontWeight: 400,

                lineHeight: 1.65,

                textWrap: "pretty",
              }}
            >
              {description}
            </Typography>
          )}

          {/* CUSTOM CONTENT */}

          {children && (
            <Box
              sx={{
                width: "100%",
                mt: 3,
              }}
            >
              {children}
            </Box>
          )}

          {/* ACTIONS */}

          {(actionLabel || secondaryActionLabel) && (
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{
                xs: 1.25,
                sm: 1.5,
              }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },

                alignItems: {
                  xs: "stretch",
                  sm: "center",
                },

                justifyContent: "flex-start",

                mt: config.actionTop,
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

                    px: 2.75,

                    whiteSpace: "nowrap",
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

                    px: 2.75,

                    whiteSpace: "nowrap",
                  }}
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </Stack>
          )}

          {/* SIGNATURE */}

          {signature && (
            <Box
              sx={{
                mt: config.signatureTop,

                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",

                maxWidth: "100%",

                color: "text.secondary",
              }}
            >
              {signature}
            </Box>
          )}
        </Stack>

        {/* ================================================== */}
        {/* IMAGE */}
        {/* ================================================== */}

        {image && (
          <Box
            sx={{
              width: "100%",

              maxWidth: config.visualMaxWidth,

              justifySelf: {
                xs: "center",
                md: "end",
              },

              alignSelf: "center",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              order: {
                xs: -1,
                md: 0,
              },

              px: {
                xs: 2,
                sm: 3,
                md: 0,
              },

              "& img": {
                display: "block",

                width: "100%",

                height: "auto",

                maxWidth: "100%",

                objectFit: "contain",
              },
            }}
          >
            {renderStatusImage(image)}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StatusShowcase;
