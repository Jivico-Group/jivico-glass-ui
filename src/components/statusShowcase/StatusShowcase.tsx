import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import type {
  StatusShowcaseImage,
  StatusShowcaseProps,
} from "./StatusShowcase.types.js";

/* -------------------------------------------------------------------------- */
/* SIZE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

const SIZE_CONFIG = {
  small: {
    maxWidth: 1180,

    sectionMinHeight: {
      xs: 620,
      sm: 650,
      md: 680,
    },

    contentMaxWidth: {
      xs: 520,
      md: 540,
    },

    visualMaxWidth: {
      xs: 380,
      sm: 480,
      md: 600,
      lg: 680,
    },

    code: {
      xs: "0.66rem",
      sm: "0.7rem",
    },

    title: {
      xs: "3rem",
      sm: "3.8rem",
      md: "4.4rem",
      lg: "4.8rem",
    },

    description: {
      xs: "0.875rem",
      sm: "0.95rem",
      md: "1rem",
    },

    contentGap: {
      xs: 2.5,
      sm: 3,
    },

    actionTop: {
      xs: 3,
      sm: 3.5,
    },

    signatureTop: {
      xs: 5,
      sm: 6,
    },

    buttonHeight: 44,

    buttonMinWidth: 145,
  },

  medium: {
    maxWidth: 1320,

    sectionMinHeight: {
      xs: 680,
      sm: 720,
      md: 740,
      lg: 760,
    },

    contentMaxWidth: {
      xs: 560,
      md: 600,
    },

    visualMaxWidth: {
      xs: 420,
      sm: 540,
      md: 680,
      lg: 780,
    },

    code: {
      xs: "0.68rem",
      sm: "0.73rem",
    },

    title: {
      xs: "3.2rem",
      sm: "4.2rem",
      md: "5rem",
      lg: "5.4rem",
    },

    description: {
      xs: "0.9rem",
      sm: "0.98rem",
      md: "1.05rem",
    },

    contentGap: {
      xs: 2.5,
      sm: 3,
    },

    actionTop: {
      xs: 3.25,
      sm: 3.75,
    },

    signatureTop: {
      xs: 5.5,
      sm: 6.5,
    },

    buttonHeight: 46,

    buttonMinWidth: 155,
  },

  large: {
    maxWidth: 1440,

    sectionMinHeight: {
      xs: 720,
      sm: 760,
      md: 780,
      lg: 820,
    },

    contentMaxWidth: {
      xs: 580,
      md: 640,
    },

    visualMaxWidth: {
      xs: 440,
      sm: 580,
      md: 740,
      lg: 860,
    },

    code: {
      xs: "0.7rem",
      sm: "0.76rem",
    },

    title: {
      xs: "3.5rem",
      sm: "4.8rem",
      md: "5.7rem",
      lg: "6.2rem",
    },

    description: {
      xs: "0.92rem",
      sm: "1rem",
      md: "1.08rem",
    },

    contentGap: {
      xs: 2.75,
      sm: 3.25,
    },

    actionTop: {
      xs: 3.5,
      sm: 4,
    },

    signatureTop: {
      xs: 6,
      sm: 7,
    },

    buttonHeight: 48,

    buttonMinWidth: 160,
  },
} as const;

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                   */
/* -------------------------------------------------------------------------- */

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

  /* ------------------------------------------------------------------------ */
  /* IMAGE RENDERER                                                           */
  /* ------------------------------------------------------------------------ */

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

  /* ------------------------------------------------------------------------ */
  /* COMPONENT                                                                */
  /* ------------------------------------------------------------------------ */

  return (
    <Box
      className={className}
      sx={{
        position: "relative",

        width: "100%",

        minHeight: config.sectionMinHeight,

        boxSizing: "border-box",

        display: "flex",
        alignItems: "center",

        overflow: "hidden",

        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        },

        py: {
          xs: 6,
          sm: 7,
          md: 8,
          lg: 9,
        },

        ...(isGlass && {
          borderRadius: {
            xs: 3,
            sm: 4,
            md: 5,
          },

          backgroundColor: "background.paper",

          border: "1px solid",
          borderColor: "divider",

          backdropFilter: "blur(24px) saturate(180%)",

          WebkitBackdropFilter: "blur(24px) saturate(180%)",

          boxShadow: {
            xs: "0 12px 40px rgba(0,0,0,0.06)",
            md: "0 20px 60px rgba(0,0,0,0.08)",
          },

          "&::before": {
            content: '""',

            position: "absolute",

            inset: 0,

            pointerEvents: "none",

            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 42%, rgba(255,255,255,0.04))",

            opacity: 0.7,
          },
        }),

        ...sx,
      }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* MAIN EDITORIAL GRID                                                */}
      {/* ------------------------------------------------------------------ */}

      <Box
        sx={{
          position: "relative",

          zIndex: 1,

          width: "100%",

          maxWidth: config.maxWidth,

          mx: "auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
          },

          alignItems: "center",

          columnGap: {
            xs: 0,
            md: 5,
            lg: 7,
          },

          rowGap: {
            xs: 5,
            sm: 6,
            md: 0,
          },
        }}
      >
        {/* ================================================================ */}
        {/* CONTENT                                                          */}
        {/* ================================================================ */}

        <Box
          sx={{
            order: {
              xs: 2,
              md: 1,
            },

            width: "100%",

            maxWidth: config.contentMaxWidth,

            justifySelf: {
              xs: "center",
              md: "start",
            },

            textAlign: {
              xs: "center",
              md: "left",
            },

            display: "flex",

            flexDirection: "column",

            alignItems: {
              xs: "center",
              md: "flex-start",
            },
          }}
        >
          {/* -------------------------------------------------------------- */}
          {/* CODE / EYEBROW                                                  */}
          {/* -------------------------------------------------------------- */}

          {code && (
            <Typography
              component="div"
              sx={{
                color: "text.secondary",

                fontSize: config.code,

                fontWeight: 700,

                letterSpacing: "0.22em",

                lineHeight: 1.2,

                textTransform: "uppercase",

                mb: {
                  xs: 1.75,
                  sm: 2,
                },
              }}
            >
              {code}
            </Typography>
          )}

          {/* -------------------------------------------------------------- */}
          {/* TITLE                                                          */}
          {/* -------------------------------------------------------------- */}

          <Typography
            component="h1"
            sx={{
              width: "100%",

              maxWidth: config.contentMaxWidth,

              color: "text.primary",

              fontSize: config.title,

              fontWeight: 700,

              letterSpacing: "-0.055em",

              lineHeight: {
                xs: 0.98,
                sm: 0.96,
                md: 0.94,
              },

              textWrap: "balance",
            }}
          >
            {title}
          </Typography>

          {/* -------------------------------------------------------------- */}
          {/* DESCRIPTION                                                    */}
          {/* -------------------------------------------------------------- */}

          {description && (
            <Typography
              component="p"
              sx={{
                width: "100%",

                maxWidth: 500,

                mt: config.contentGap,

                mb: 0,

                color: "text.secondary",

                fontSize: config.description,

                fontWeight: 400,

                lineHeight: 1.7,

                textWrap: "pretty",
              }}
            >
              {description}
            </Typography>
          )}

          {/* -------------------------------------------------------------- */}
          {/* CUSTOM CONTENT                                                 */}
          {/* -------------------------------------------------------------- */}

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

          {/* -------------------------------------------------------------- */}
          {/* ACTIONS                                                        */}
          {/* -------------------------------------------------------------- */}

          {(actionLabel || secondaryActionLabel) && (
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{
                xs: 1.5,
                sm: 2,
              }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },

                mt: config.actionTop,

                alignItems: "center",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              {actionLabel && (
                <Button
                  variant="contained"
                  onClick={onAction}
                  sx={{
                    minWidth: config.buttonMinWidth,

                    minHeight: config.buttonHeight,

                    px: 3,

                    borderRadius: 999,

                    boxShadow: "none",

                    width: {
                      xs: "100%",
                      sm: "auto",
                    },

                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                >
                  {actionLabel}
                </Button>
              )}

              {secondaryActionLabel && (
                <Button
                  variant="text"
                  onClick={onSecondaryAction}
                  sx={{
                    minHeight: config.buttonHeight,

                    px: 1,

                    borderRadius: 999,

                    width: {
                      xs: "100%",
                      sm: "auto",
                    },

                    color: "text.primary",

                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    },
                  }}
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </Stack>
          )}

          {/* -------------------------------------------------------------- */}
          {/* SIGNATURE                                                      */}
          {/* -------------------------------------------------------------- */}

          {signature && (
            <Box
              sx={{
                mt: config.signatureTop,

                display: "flex",

                alignItems: "center",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },

                maxWidth: "100%",

                color: "text.secondary",
              }}
            >
              {signature}
            </Box>
          )}
        </Box>

        {/* ================================================================ */}
        {/* VISUAL                                                           */}
        {/* ================================================================ */}

        {image && (
          <Box
            sx={{
              order: {
                xs: 1,
                md: 2,
              },

              width: "100%",

              display: "flex",

              alignItems: "center",

              justifyContent: {
                xs: "center",
                md: "flex-end",
              },

              minWidth: 0,

              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",

                maxWidth: config.visualMaxWidth,

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                "& img": {
                  display: "block",

                  width: "100%",

                  maxWidth: "100%",

                  height: "auto",

                  objectFit: "contain",
                },
              }}
            >
              {renderStatusImage(image)}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StatusShowcase;
