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

import type { SxProps, Theme } from "@mui/material/styles";

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
   * ------------------------------------------------------------
   * INDEX CONTROL
   * ------------------------------------------------------------
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
   * ------------------------------------------------------------
   * AUTOPLAY
   * ------------------------------------------------------------
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
   * ------------------------------------------------------------
   * KEYBOARD NAVIGATION
   * ------------------------------------------------------------
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
   * ------------------------------------------------------------
   * TOUCH / SWIPE
   * ------------------------------------------------------------
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

  /*
   * ------------------------------------------------------------
   * RESPONSIVE SHOWCASE HEIGHT
   * ------------------------------------------------------------
   */

  const sizeStyles = useMemo(() => {
    switch (size) {
      case "small":
        return {
          minHeight: {
            xs: 380,
            sm: 400,
            md: 440,
          },
        };

      case "medium":
        return {
          minHeight: {
            xs: 440,
            sm: 500,
            md: 560,
          },
        };

      case "large":
        return {
          minHeight: {
            xs: 500,
            sm: 600,
            md: 680,
          },
        };

      case "hero":
      default:
        return {
          minHeight: {
            xs: 560,
            sm: 620,
            md: "clamp(560px, 72vh, 780px)",
          },
        };
    }
  }, [size]);

  /*
   * ------------------------------------------------------------
   * EMPTY STATE
   * ------------------------------------------------------------
   */

  if (!items.length) {
    return null;
  }

  /*
   * ------------------------------------------------------------
   * SHOWCASE
   * ------------------------------------------------------------
   */

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
        minHeight: sizeStyles.minHeight,

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
         * containerSx is intentionally last.
         *
         * This allows consumers to override:
         * - borderRadius
         * - background
         * - boxShadow
         * - border
         * - spacing
         * - any other MUI sx property
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
                    userSelect: "none",
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
          position: "relative",
          zIndex: 3,

          minHeight: sizeStyles.minHeight,

          display: "flex",

          alignItems: {
            xs: "flex-end",
            md: "center",
          },

          px: {
            xs: 2.5,
            sm: 4,
            md: 7,
            lg: 10,
          },

          pb: {
            xs: 5,
            sm: 6,
            md: 0,
          },

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
            maxWidth: 720,

            transition:
              "opacity 500ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {currentItem.eyebrow && (
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {currentItem.eyebrow}
            </Typography>
          )}

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "clamp(3rem, 15vw, 4.8rem)",
                sm: "clamp(4rem, 9vw, 6.5rem)",
                md: "clamp(4.5rem, 8vw, 8rem)",
              },

              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: "-0.055em",

              mb: {
                xs: 1.5,
                md: 2,
              },
            }}
          >
            {currentItem.title}
          </Typography>

          {currentItem.description && (
            <Typography
              sx={{
                maxWidth: 520,

                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                },

                lineHeight: 1.55,

                color: "rgba(255,255,255,0.82)",

                mb: 3,
              }}
            >
              {currentItem.description}
            </Typography>
          )}

          {/* =================================================
              JIVICO BUTTON
          ================================================= */}

          {currentItem.action &&
            (currentItem.action.href ? (
              <Button
                variant={currentItem.action.variant ?? "contained"}
                color={currentItem.action.color ?? "primary"}
                endIcon={<ArrowRight size={16} />}
                href={currentItem.action.href}
                target={currentItem.action.target}
                rel={currentItem.action.rel}
                onClick={currentItem.action.onClick}
              >
                {currentItem.action.label}
              </Button>
            ) : (
              <Button
                variant={currentItem.action.variant ?? "contained"}
                color={currentItem.action.color ?? "primary"}
                endIcon={<ArrowRight size={16} />}
                onClick={currentItem.action.onClick}
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

            bottom: "50%",

            transform: "translateY(50%)",

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
