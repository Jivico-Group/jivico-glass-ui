import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ArrowLeft, ArrowRight } from "lucide-react";

import type { ShowcaseProps } from "./Showcase.types.js";

const clampIndex = (index: number, length: number): number => {
  if (length <= 0) {
    return 0;
  }

  return Math.max(0, Math.min(index, length - 1));
};

const radiusStyles = {
  square: 0,
  rounded: 3,
  soft: 6,
} as const;

/**
 * Controls the complete visual scale of the Showcase.
 *
 * Size affects:
 * - Typography
 * - Content spacing
 * - Content width
 * - CTA size
 * - CTA height
 * - CTA horizontal padding
 */
const showcaseSizeStyles = {
  small: {
    aspectRatio: {
      xs: "4 / 5",
      sm: "16 / 10",
      md: "16 / 9",
    },

    titleSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3rem",
    },

    descriptionSize: {
      xs: "0.875rem",
      md: "0.95rem",
    },

    eyebrowSize: {
      xs: "0.65rem",
      md: "0.7rem",
    },

    contentPadding: {
      xs: 2,
      sm: 3,
      md: 4,
    },

    maxWidth: {
      xs: "100%",
      md: "520px",
    },

    contentGap: {
      xs: 1.25,
      md: 1.5,
    },

    buttonSize: "small" as const,

    buttonHeight: {
      xs: 38,
      md: 40,
    },

    buttonPaddingX: {
      xs: 1.75,
      md: 2,
    },
  },

  medium: {
    aspectRatio: {
      xs: "4 / 5",
      sm: "16 / 10",
      md: "16 / 9",
    },

    titleSize: {
      xs: "2.5rem",
      sm: "3rem",
      md: "3.75rem",
    },

    descriptionSize: {
      xs: "0.9rem",
      md: "1rem",
    },

    eyebrowSize: {
      xs: "0.7rem",
      md: "0.75rem",
    },

    contentPadding: {
      xs: 2.5,
      sm: 4,
      md: 5,
    },

    maxWidth: {
      xs: "100%",
      md: "600px",
    },

    contentGap: {
      xs: 1.5,
      md: 1.75,
    },

    buttonSize: "medium" as const,

    buttonHeight: {
      xs: 40,
      md: 44,
    },

    buttonPaddingX: {
      xs: 2,
      md: 2.5,
    },
  },

  large: {
    aspectRatio: {
      xs: "4 / 5",
      sm: "16 / 9",
      md: "16 / 8",
    },

    titleSize: {
      xs: "2.75rem",
      sm: "3.5rem",
      md: "4.5rem",
    },

    descriptionSize: {
      xs: "0.95rem",
      md: "1.05rem",
    },

    eyebrowSize: {
      xs: "0.7rem",
      md: "0.8rem",
    },

    contentPadding: {
      xs: 3,
      sm: 4.5,
      md: 6,
    },

    maxWidth: {
      xs: "100%",
      md: "680px",
    },

    contentGap: {
      xs: 1.5,
      md: 2,
    },

    buttonSize: "medium" as const,

    buttonHeight: {
      xs: 42,
      md: 46,
    },

    buttonPaddingX: {
      xs: 2,
      md: 2.75,
    },
  },

  hero: {
    aspectRatio: {
      xs: "4 / 5",
      sm: "16 / 9",
      md: "16 / 8",
      lg: "16 / 7.5",
    },

    titleSize: {
      xs: "2.75rem",
      sm: "3.5rem",
      md: "4.5rem",
      lg: "5rem",
    },

    descriptionSize: {
      xs: "0.95rem",
      sm: "1rem",
      md: "1.1rem",
    },

    eyebrowSize: {
      xs: "0.7rem",
      md: "0.8rem",
    },

    contentPadding: {
      xs: 3,
      sm: 4.5,
      md: 6,
      lg: 7,
    },

    maxWidth: {
      xs: "100%",
      sm: "650px",
      md: "720px",
      lg: "760px",
    },

    contentGap: {
      xs: 1.5,
      sm: 1.75,
      md: 2,
    },

    buttonSize: "large" as const,

    buttonHeight: {
      xs: 42,
      sm: 44,
      md: 48,
    },

    buttonPaddingX: {
      xs: 2,
      sm: 2.5,
      md: 3,
    },
  },
} as const;

export const Showcase: React.FC<ShowcaseProps> = ({
  items,

  variant = "editorial",
  size = "hero",
  transition = "cinematic",

  autoplay = true,
  interval = 6000,
  loop = true,
  pauseOnHover = true,

  showArrows = true,
  showProgress = true,

  navigation,

  activeIndex: controlledIndex,
  defaultActiveIndex = 0,

  onActiveIndexChange,

  swipe = true,

  radius = "rounded",
  aspectRatio,
  containerSx,

  className,

  "aria-label": ariaLabel = "Showcase",
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  const isControlled = controlledIndex !== undefined;

  const [internalIndex, setInternalIndex] = useState(
    clampIndex(defaultActiveIndex, items.length),
  );

  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const currentIndex = isControlled
    ? clampIndex(controlledIndex ?? 0, items.length)
    : internalIndex;

  const currentItem = items[currentIndex];

  const effectiveNavigation = navigation ?? (isMobile ? "dots" : "vertical");

  const shouldAnimate = !prefersReducedMotion && transition !== "fade";

  /*
   * =========================================================
   * RESPONSIVE SIZE
   * =========================================================
   *
   * Size controls the complete visual scale of the component:
   *
   * - aspect ratio
   * - title
   * - description
   * - eyebrow
   * - content spacing
   * - content width
   * - button size
   * - button dimensions
   */

  const currentSize = showcaseSizeStyles[size];

  /*
   * Allow the consumer to override the default responsive
   * aspect ratio when necessary.
   */
  const resolvedAspectRatio = aspectRatio ?? currentSize.aspectRatio;

  /*
   * =========================================================
   * INDEX
   * =========================================================
   */

  const updateIndex = useCallback(
    (nextIndex: number) => {
      if (!items.length) {
        return;
      }

      let resolvedIndex = nextIndex;

      if (nextIndex >= items.length) {
        resolvedIndex = loop ? 0 : items.length - 1;
      }

      if (nextIndex < 0) {
        resolvedIndex = loop ? items.length - 1 : 0;
      }

      if (!isControlled) {
        setInternalIndex(resolvedIndex);
      }

      onActiveIndexChange?.(resolvedIndex, items[resolvedIndex]);
    },
    [isControlled, items, loop, onActiveIndexChange],
  );

  const next = useCallback(() => {
    updateIndex(currentIndex + 1);
  }, [currentIndex, updateIndex]);

  const previous = useCallback(() => {
    updateIndex(currentIndex - 1);
  }, [currentIndex, updateIndex]);

  /*
   * =========================================================
   * AUTOPLAY
   * =========================================================
   */

  useEffect(() => {
    if (!autoplay || isPaused || prefersReducedMotion || items.length <= 1) {
      return;
    }

    const timer = window.setInterval(next, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoplay, interval, isPaused, next, prefersReducedMotion, items.length]);

  /*
   * =========================================================
   * KEYBOARD NAVIGATION
   * =========================================================
   */

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        next();
        break;

      case "ArrowLeft":
        event.preventDefault();
        previous();
        break;

      case "Home":
        event.preventDefault();
        updateIndex(0);
        break;

      case "End":
        event.preventDefault();
        updateIndex(items.length - 1);
        break;

      default:
        break;
    }
  };

  /*
   * =========================================================
   * TOUCH / SWIPE
   * =========================================================
   */

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!swipe) {
      return;
    }

    touchStartX.current = event.touches[0]?.clientX ?? null;

    touchCurrentX.current = touchStartX.current;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!swipe) {
      return;
    }

    touchCurrentX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (
      !swipe ||
      touchStartX.current === null ||
      touchCurrentX.current === null
    ) {
      return;
    }

    const distance = touchStartX.current - touchCurrentX.current;

    const threshold = 50;

    if (Math.abs(distance) >= threshold) {
      if (distance > 0) {
        next();
      } else {
        previous();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  if (!items.length) {
    return null;
  }

  return (
    <Box
      className={className}
      component="section"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        if (pauseOnHover) {
          setIsPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setIsPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        position: "relative",
        width: "100%",

        /*
         * The frame owns the dimensions.
         *
         * Images never determine the height.
         */
        aspectRatio: resolvedAspectRatio,

        overflow: "hidden",

        borderRadius: radiusStyles[radius],

        outline: "none",

        backgroundColor: theme.palette.background.default,

        ...(variant === "glass" && {
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }),

        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 3,
        },

        /*
         * Consumer override.
         *
         * NOTE:
         * containerSx comes last intentionally, so consumers can
         * override the semantic radius if they explicitly need to.
         */
        ...containerSx,
      }}
    >
      {/* =====================================================
          MEDIA
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {items.map((item, index) => {
          const active = index === currentIndex;

          return (
            <Box
              key={item.id}
              aria-hidden={!active}
              sx={{
                position: "absolute",
                inset: 0,

                width: "100%",
                height: "100%",

                opacity: active ? 1 : 0,

                transform: active
                  ? "scale(1)"
                  : shouldAnimate
                    ? "scale(1.035)"
                    : "scale(1)",

                transition: shouldAnimate
                  ? "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",

                pointerEvents: active ? "auto" : "none",

                zIndex: active ? 1 : 0,
              }}
            >
              <Box
                component="picture"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                {item.media.mobileSrc && (
                  <source
                    media="(max-width:600px)"
                    srcSet={item.media.mobileSrc}
                  />
                )}

                <Box
                  component="img"
                  src={item.media.src}
                  alt={active ? item.media.alt : ""}
                  draggable={false}
                  sx={{
                    display: "block",

                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                    objectPosition: "center",

                    userSelect: "none",

                    verticalAlign: "middle",
                  }}
                />
              </Box>

              {/* Image overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background: isMobile
                    ? "linear-gradient(180deg, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.68) 100%)"
                    : "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.04) 75%)",

                  pointerEvents: "none",
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          zIndex: 3,

          display: "flex",

          /*
           * Mobile keeps content at the bottom.
           *
           * Desktop centers the complete content group.
           * This prevents the CTA from being pushed outside
           * the frame when the title becomes large.
           */
          alignItems: {
            xs: "flex-end",
            md: "center",
          },

          px: currentSize.contentPadding,

          /*
           * Mobile needs bottom breathing room because the
           * navigation dots/arrows may sit near the bottom.
           */
          pb: {
            xs: 5.5,
            sm: 6,
            md: 0,
          },

          /*
           * Reserve space for desktop side navigation.
           */
          pr: {
            md: 14,
            lg: 18,
          },

          color: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            width: "100%",

            maxWidth: currentSize.maxWidth,

            display: "flex",
            flexDirection: "column",

            /*
             * All content elements now scale together.
             */
            gap: currentSize.contentGap,

            /*
             * Never allow the content group to become taller
             * than the available frame.
             */
            maxHeight: {
              xs: "calc(100% - 16px)",
              md: "calc(100% - 32px)",
            },

            /*
             * Smooth transition when changing size in a
             * playground/demo environment.
             */
            transition:
              "opacity 500ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          {currentItem.eyebrow && (
            <Typography
              variant="overline"
              sx={{
                display: "block",

                fontSize: currentSize.eyebrowSize,

                fontWeight: 700,

                letterSpacing: "0.14em",

                lineHeight: 1.2,

                color: "rgba(255,255,255,0.72)",

                /*
                 * Prevent a long eyebrow from affecting
                 * the content height unnecessarily.
                 */
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {currentItem.eyebrow}
            </Typography>
          )}

          {/* =================================================
              TITLE
          ================================================= */}

          <Typography
            component="h2"
            sx={{
              fontSize: currentSize.titleSize,

              /*
               * Tight editorial typography.
               *
               * The previous implementation used values up
               * to 8rem, which could consume most of a short
               * aspect-ratio frame.
               */
              lineHeight: 0.92,

              fontWeight: 700,

              letterSpacing: "-0.055em",

              maxWidth: "100%",

              /*
               * Modern browser line balancing helps avoid
               * awkward title wrapping.
               */
              textWrap: "balance",

              overflowWrap: "break-word",

              margin: 0,
            }}
          >
            {currentItem.title}
          </Typography>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {currentItem.description && (
            <Typography
              sx={{
                width: "100%",

                maxWidth: {
                  xs: "100%",
                  md: "620px",
                },

                fontSize: currentSize.descriptionSize,

                lineHeight: 1.5,

                color: "rgba(255,255,255,0.82)",

                /*
                 * Keep descriptions from becoming huge
                 * content blocks on narrow screens.
                 */
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: {
                  xs: 3,
                  md: 3,
                },
                overflow: "hidden",
              }}
            >
              {currentItem.description}
            </Typography>
          )}

          {/* =================================================
              MUI BUTTON
          ================================================= */}

          {currentItem.action &&
            (currentItem.action.href ? (
              <Button
                variant={currentItem.action.variant ?? "contained"}
                color={currentItem.action.color ?? "primary"}
                size={currentSize.buttonSize}
                endIcon={<ArrowRight size={16} />}
                href={currentItem.action.href}
                target={currentItem.action.target}
                rel={currentItem.action.rel}
                onClick={currentItem.action.onClick}
                sx={{
                  alignSelf: "flex-start",

                  /*
                   * CTA scales with Showcase size.
                   */
                  minHeight: currentSize.buttonHeight,

                  px: currentSize.buttonPaddingX,

                  borderRadius: 999,

                  /*
                   * Keep CTA on one line.
                   */
                  whiteSpace: "nowrap",

                  flexShrink: 0,

                  /*
                   * Prevent the button from being affected
                   * by very large surrounding typography.
                   */
                  lineHeight: 1.2,

                  "& .MuiButton-endIcon": {
                    marginLeft: 0.75,
                  },
                }}
              >
                {currentItem.action.label}
              </Button>
            ) : (
              <Button
                variant={currentItem.action.variant ?? "contained"}
                color={currentItem.action.color ?? "primary"}
                size={currentSize.buttonSize}
                endIcon={<ArrowRight size={16} />}
                onClick={currentItem.action.onClick}
                sx={{
                  alignSelf: "flex-start",

                  minHeight: currentSize.buttonHeight,

                  px: currentSize.buttonPaddingX,

                  borderRadius: 999,

                  whiteSpace: "nowrap",

                  flexShrink: 0,

                  lineHeight: 1.2,

                  "& .MuiButton-endIcon": {
                    marginLeft: 0.75,
                  },
                }}
              >
                {currentItem.action.label}
              </Button>
            ))}
        </Box>
      </Box>

      {/* =====================================================
          DESKTOP SIDE LABEL
      ===================================================== */}

      {!isMobile && currentItem.sideLabel && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 4,

            right: {
              md: 24,
              lg: 36,
            },

            top: "50%",

            transform: "translateY(-50%)",

            writingMode: "vertical-rl",

            textOrientation: "mixed",

            color: "rgba(255,255,255,0.72)",

            fontSize: "0.68rem",

            fontWeight: 700,

            letterSpacing: "0.18em",

            textTransform: "uppercase",
          }}
        >
          {currentItem.sideLabel}
        </Box>
      )}

      {/* =====================================================
          ARROWS
      ===================================================== */}

      {showArrows && !isMobile && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,

            left: {
              md: 28,
              lg: 40,
            },

            bottom: {
              md: 32,
            },

            display: "flex",

            gap: 1,
          }}
        >
          <IconButton
            aria-label="Previous slide"
            onClick={previous}
            disabled={!loop && currentIndex === 0}
            sx={{
              width: 42,
              height: 42,

              color: "#FFFFFF",

              border: "1px solid rgba(255,255,255,0.28)",

              backgroundColor: "rgba(0,0,0,0.16)",

              backdropFilter: "blur(12px)",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.14)",
              },

              "&.Mui-disabled": {
                color: "rgba(255,255,255,0.3)",

                borderColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ArrowLeft size={18} />
          </IconButton>

          <IconButton
            aria-label="Next slide"
            onClick={next}
            disabled={!loop && currentIndex === items.length - 1}
            sx={{
              width: 42,
              height: 42,

              color: "#FFFFFF",

              border: "1px solid rgba(255,255,255,0.28)",

              backgroundColor: "rgba(0,0,0,0.16)",

              backdropFilter: "blur(12px)",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.14)",
              },

              "&.Mui-disabled": {
                color: "rgba(255,255,255,0.3)",

                borderColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ArrowRight size={18} />
          </IconButton>
        </Box>
      )}

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      {effectiveNavigation !== "none" && items.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,

            ...(effectiveNavigation === "vertical"
              ? {
                  right: {
                    md: 58,
                    lg: 76,
                  },

                  top: "50%",

                  transform: "translateY(-50%)",

                  display: "flex",

                  flexDirection: "column",

                  gap: 1.2,
                }
              : {
                  left: "50%",

                  bottom: {
                    xs: 18,
                    sm: 24,
                  },

                  transform: "translateX(-50%)",

                  display: "flex",

                  alignItems: "center",

                  gap: 0.8,
                }),
          }}
        >
          {items.map((item, index) => {
            const active = index === currentIndex;

            return (
              <Box
                key={item.id}
                component="button"
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => updateIndex(index)}
                sx={{
                  appearance: "none",

                  border: 0,

                  padding: 0,

                  margin: 0,

                  minWidth: effectiveNavigation === "vertical" ? 28 : 8,

                  minHeight: effectiveNavigation === "vertical" ? 38 : 8,

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  borderRadius: 999,

                  background: "transparent",

                  cursor: "pointer",

                  "&:focus-visible": {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 3,
                  },
                }}
              >
                {effectiveNavigation === "vertical" ? (
                  <Box
                    sx={{
                      width: active ? 3 : 1,

                      height: active ? 42 : 20,

                      borderRadius: 999,

                      backgroundColor: active
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.45)",

                      transition: "all 300ms ease",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: active ? 24 : 7,

                      height: 7,

                      borderRadius: 999,

                      backgroundColor: active
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.48)",

                      transition: "all 300ms ease",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      {showProgress && autoplay && !prefersReducedMotion && (
        <Box
          sx={{
            position: "absolute",

            zIndex: 6,

            left: 0,
            bottom: 0,

            width: "100%",

            height: 2,

            backgroundColor: "rgba(255,255,255,0.16)",
          }}
        >
          <Box
            key={currentIndex}
            sx={{
              width: "100%",

              height: "100%",

              transformOrigin: "left center",

              backgroundColor: "#FFFFFF",

              animation: isPaused
                ? "none"
                : `jivicoShowcaseProgress ${interval}ms linear`,

              "@keyframes jivicoShowcaseProgress": {
                from: {
                  transform: "scaleX(0)",
                },

                to: {
                  transform: "scaleX(1)",
                },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Showcase;
