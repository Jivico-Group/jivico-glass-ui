"use client";

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

import type {
  ShowcaseDimension,
  ShowcaseItem,
  ShowcaseProps,
  ShowcaseSize,
} from "./Showcase.types";

const DEFAULT_INTERVAL = 5000;

const getResponsiveValue = (value: ShowcaseDimension | undefined) => {
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

/**
 * Showcase frame radius.
 *
 * The navigation styling is intentionally independent
 * from the frame radius.
 */
const getRadius = (radius: ShowcaseProps["radius"]) => {
  switch (radius) {
    case "square":
      return 0;

    case "soft":
      return 14;

    case "rounded":
    default:
      return 2;
  }
};

const sizeConfig: Record<
  ShowcaseSize,
  {
    minHeight: {
      xs: number;
      md: number;
      lg?: number;
    };

    aspectRatio?: {
      xs?: string;
      md?: string;
      lg?: string;
    };

    title: {
      xs: string;
      md: string;
      lg: string;
    };

    description: {
      xs: string;
      md: string;
    };

    eyebrow: string;

    buttonSize: "small" | "medium" | "large";

    buttonHeight: number;

    buttonPaddingX: number;

    contentPadding: {
      xs: number;
      md: number;
      lg: number;
    };

    arrowSize: number;

    navigationGap: number;
  }
> = {
  small: {
    minHeight: {
      xs: 260,
      md: 320,
    },

    aspectRatio: {
      xs: "16/10",
      md: "21/9",
    },

    title: {
      xs: "1.75rem",
      md: "2.25rem",
      lg: "2.75rem",
    },

    description: {
      xs: "0.875rem",
      md: "0.95rem",
    },

    eyebrow: "0.65rem",

    buttonSize: "small",

    buttonHeight: 38,

    buttonPaddingX: 2,

    contentPadding: {
      xs: 2.5,
      md: 4,
      lg: 5,
    },

    arrowSize: 36,

    navigationGap: 1,
  },

  medium: {
    minHeight: {
      xs: 320,
      md: 400,
    },

    aspectRatio: {
      xs: "16/10",
      md: "16/8",
    },

    title: {
      xs: "2rem",
      md: "3rem",
      lg: "3.5rem",
    },

    description: {
      xs: "0.9rem",
      md: "1rem",
    },

    eyebrow: "0.68rem",

    buttonSize: "medium",

    buttonHeight: 42,

    buttonPaddingX: 2.5,

    contentPadding: {
      xs: 3,
      md: 5,
      lg: 6,
    },

    arrowSize: 40,

    navigationGap: 1.25,
  },

  large: {
    minHeight: {
      xs: 380,
      md: 480,
    },

    aspectRatio: {
      xs: "4/3",
      md: "16/9",
    },

    title: {
      xs: "2.35rem",
      md: "3.5rem",
      lg: "4.25rem",
    },

    description: {
      xs: "0.95rem",
      md: "1.05rem",
    },

    eyebrow: "0.7rem",

    buttonSize: "medium",

    buttonHeight: 44,

    buttonPaddingX: 3,

    contentPadding: {
      xs: 3.5,
      md: 6,
      lg: 8,
    },

    arrowSize: 44,

    navigationGap: 1.5,
  },

  hero: {
    minHeight: {
      xs: 440,
      md: 560,
    },

    aspectRatio: {
      xs: "1/1",
      md: "21/9",
    },

    title: {
      xs: "2.75rem",
      md: "4.5rem",
      lg: "5.5rem",
    },

    description: {
      xs: "1rem",
      md: "1.1rem",
    },

    eyebrow: "0.72rem",

    buttonSize: "large",

    buttonHeight: 48,

    buttonPaddingX: 3.25,

    contentPadding: {
      xs: 4,
      md: 8,
      lg: 10,
    },

    arrowSize: 48,

    navigationGap: 1.75,
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

export const Showcase = ({
  items,
  ImageComponent,
  imageSizes = "100vw",
  imagePriority = false,

  variant = "editorial",
  size = "hero",
  transition = "cinematic",

  autoplay = false,
  interval = DEFAULT_INTERVAL,
  loop = true,
  pauseOnHover = true,

  showArrows = true,
  showProgress = true,
  navigation = "dots",

  activeIndex: controlledActiveIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,

  onNavigate,

  swipe = true,

  radius = "rounded",

  height,
  minHeight,
  maxHeight,

  aspectRatio,

  containerSx,
  className,

  "aria-label": ariaLabel = "Showcase",
}: ShowcaseProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [internalActiveIndex, setInternalActiveIndex] =
    useState(defaultActiveIndex);

  const isControlled = controlledActiveIndex !== undefined;

  const activeIndex = isControlled
    ? controlledActiveIndex
    : internalActiveIndex;

  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const touchStartY = useRef<number | null>(null);

  const touchMoved = useRef(false);

  const currentSize = sizeConfig[size] ?? sizeConfig.hero;

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const itemCount = safeItems.length;

  const currentIndex =
    itemCount === 0 ? 0 : Math.min(Math.max(activeIndex, 0), itemCount - 1);

  const currentItem = safeItems[currentIndex];

  const updateIndex = useCallback(
    (nextIndex: number) => {
      if (!itemCount) {
        return;
      }

      let normalizedIndex = nextIndex;

      if (loop) {
        normalizedIndex = (nextIndex + itemCount) % itemCount;
      } else {
        normalizedIndex = Math.max(0, Math.min(nextIndex, itemCount - 1));
      }

      if (!isControlled) {
        setInternalActiveIndex(normalizedIndex);
      }

      const item = safeItems[normalizedIndex];

      if (item) {
        onActiveIndexChange?.(normalizedIndex, item);
      }
    },
    [itemCount, loop, isControlled, onActiveIndexChange, safeItems],
  );

  const goNext = useCallback(() => {
    if (!itemCount) {
      return;
    }

    if (!loop && currentIndex >= itemCount - 1) {
      return;
    }

    updateIndex(currentIndex + 1);
  }, [currentIndex, itemCount, loop, updateIndex]);

  const goPrevious = useCallback(() => {
    if (!itemCount) {
      return;
    }

    if (!loop && currentIndex <= 0) {
      return;
    }

    updateIndex(currentIndex - 1);
  }, [currentIndex, itemCount, loop, updateIndex]);

  /*
   * =========================================================
   * AUTOPLAY
   * =========================================================
   */

  useEffect(() => {
    if (!autoplay || itemCount <= 1) {
      return;
    }

    if (pauseOnHover && isHovered) {
      return;
    }

    const timer = window.setInterval(goNext, Math.max(interval, 1000));

    return () => {
      window.clearInterval(timer);
    };
  }, [autoplay, interval, itemCount, pauseOnHover, isHovered, goNext]);

  /*
   * =========================================================
   * KEYBOARD NAVIGATION
   * =========================================================
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrevious]);

  /*
   * =========================================================
   * TOUCH / SWIPE
   * =========================================================
   */

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!swipe) {
      return;
    }

    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchMoved.current = false;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (
      !swipe ||
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.touches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      touchMoved.current = true;
    }
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (
      !swipe ||
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  if (!currentItem) {
    return null;
  }

  const radiusValue = getRadius(radius);

  /*
   * =========================================================
   * RESPONSIVE DIMENSIONS
   * =========================================================
   *
   * Priority:
   *
   * 1. Explicit height
   * 2. Explicit minHeight
   * 3. Size defaults
   *
   * When explicit height is supplied, the default size
   * minHeight is not allowed to override it.
   *
   * Likewise, when explicit height is supplied, the
   * default aspectRatio is disabled because height is
   * now the controlling dimension.
   */

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

  /*
   * =========================================================
   * TRANSITIONS
   * =========================================================
   */

  const getTransition = (index: number) => {
    const isActive = index === currentIndex;

    if (transition === "fade") {
      return {
        opacity: isActive ? 1 : 0,

        transform: "none",

        transition: "opacity 700ms ease",
      };
    }

    if (transition === "slide") {
      return {
        opacity: isActive ? 1 : 0,

        transform: isActive
          ? "translateX(0)"
          : index < currentIndex
            ? "translateX(-4%)"
            : "translateX(4%)",

        transition: "opacity 700ms ease, transform 700ms ease",
      };
    }

    return {
      opacity: isActive ? 1 : 0,

      transform: isActive ? "scale(1)" : "scale(1.035)",

      transition:
        "opacity 900ms ease, transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  /*
   * =========================================================
   * VARIANT OVERLAY
   * =========================================================
   */

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

  /*
   * =========================================================
   * IMAGE
   * =========================================================
   */

  const renderImage = (item: ShowcaseItem, active: boolean) => {
    if (ImageComponent) {
      return (
        <ImageComponent
          src={
            isMobile && item.media.mobileSrc
              ? item.media.mobileSrc
              : item.media.src
          }
          alt={item.media.alt}
          fill
          sizes={imageSizes}
          priority={imagePriority && active}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      );
    }

    if (isMobile && item.media.mobileSrc) {
      return (
        <Box
          component="img"
          src={item.media.mobileSrc}
          alt={item.media.alt}
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
        src={item.media.src}
        alt={item.media.alt}
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
      onMouseEnter={() => {
        if (pauseOnHover) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setIsHovered(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        position: "relative",

        width: "100%",

        overflow: "hidden",

        /*
         * Explicit height wins.
         */
        height: containerHeight,

        /*
         * If no explicit minHeight was supplied,
         * use the selected size's responsive defaults.
         */
        minHeight: containerMinHeight,

        maxHeight: containerMaxHeight,

        /*
         * If no explicit height is supplied,
         * use the selected size's responsive aspect ratio.
         */
        aspectRatio: responsiveAspectRatio,

        borderRadius: radiusValue,

        bgcolor: "background.default",

        touchAction: swipe ? "pan-y" : "auto",

        ...containerSx,
      }}
    >
      {/* =====================================================
          SLIDES
      ===================================================== */}

      {safeItems.map((item, index) => {
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

              overflow: "hidden",

              pointerEvents: active ? "auto" : "none",

              ...getTransition(index),
            }}
          >
            {/* =================================================
                MEDIA
            ================================================= */}

            <Box
              sx={{
                position: "absolute",

                inset: 0,

                zIndex: 1,

                width: "100%",
                height: "100%",
              }}
            >
              {renderImage(item, active)}

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

            {/* =================================================
                FULL IMAGE / MEDIA LINK
            ================================================= */}

            {active && item.href && (
              <MediaLink
                href={item.href}
                label={item.linkLabel ?? `View ${item.title}`}
                onClick={(event) => {
                  event.preventDefault();

                  onNavigate?.(item, currentIndex, event);
                }}
              />
            )}

            {/* =================================================
                CONTENT
            ================================================= */}

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
              }}
            >
              {item.content ? (
                item.content
              ) : (
                <Box
                  sx={{
                    maxWidth: {
                      xs: "100%",
                      sm: "85%",
                      md: "70%",
                      lg: "62%",
                    },

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "flex-start",

                    gap: {
                      xs: 1,
                      md: 1.5,
                    },
                  }}
                >
                  {/* Eyebrow */}
                  {item.eyebrow && (
                    <Typography
                      component="div"
                      sx={{
                        fontSize: currentSize.eyebrow,

                        fontWeight: 700,

                        letterSpacing: "0.14em",

                        textTransform: "uppercase",

                        opacity: 0.9,
                      }}
                    >
                      {item.eyebrow}
                    </Typography>
                  )}

                  {/* Title */}
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: currentSize.title,

                      lineHeight: 0.98,

                      fontWeight: 700,

                      letterSpacing: "-0.04em",

                      maxWidth: {
                        xs: "100%",
                        md: "850px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  {item.description && (
                    <Typography
                      component="p"
                      sx={{
                        m: 0,

                        maxWidth: {
                          xs: "100%",
                          md: "650px",
                        },

                        fontSize: currentSize.description,

                        lineHeight: 1.5,

                        opacity: 0.9,
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}

                  {/* CTA */}
                  {item.action && (item.action.href || item.action.onClick) && (
                    <Box
                      sx={{
                        pointerEvents: "auto",

                        mt: {
                          xs: 0.5,
                          md: 1,
                        },
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
                          onClick={item.action.onClick}
                          aria-label={item.action.ariaLabel}
                          sx={{
                            minHeight: currentSize.buttonHeight,

                            px: currentSize.buttonPaddingX,

                            borderRadius: 999,

                            whiteSpace: "nowrap",

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
                          onClick={item.action.onClick}
                          aria-label={item.action.ariaLabel}
                          sx={{
                            minHeight: currentSize.buttonHeight,

                            px: currentSize.buttonPaddingX,

                            borderRadius: 999,

                            whiteSpace: "nowrap",

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

            {/* =================================================
                SIDE LABEL
            ================================================= */}

            {item.sideLabel && (
              <Box
                sx={{
                  position: "absolute",

                  top: "50%",

                  right: {
                    xs: 12,
                    md: 24,
                  },

                  zIndex: 4,

                  transform: "translateY(-50%) rotate(-90deg)",

                  transformOrigin: "center",

                  pointerEvents: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",

                    fontWeight: 700,

                    letterSpacing: "0.18em",

                    textTransform: "uppercase",

                    color: "#fff",

                    opacity: 0.75,

                    whiteSpace: "nowrap",
                  }}
                >
                  {item.sideLabel}
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}

      {/* =====================================================
          ARROWS
      ===================================================== */}

      {showArrows && itemCount > 1 && (
        <>
          <IconButton
            aria-label="Previous slide"
            onClick={goPrevious}
            disabled={!loop && currentIndex === 0}
            sx={{
              position: "absolute",

              zIndex: 5,

              left: {
                xs: 12,
                md: 20,
              },

              top: "50%",

              transform: "translateY(-50%)",

              width: currentSize.arrowSize,

              height: currentSize.arrowSize,

              color: "#fff",

              bgcolor: "rgba(0,0,0,0.28)",

              backdropFilter: "blur(12px)",

              border: "1px solid rgba(255,255,255,0.2)",

              "&:hover": {
                bgcolor: "rgba(0,0,0,0.45)",
              },

              "&.Mui-disabled": {
                opacity: 0.35,
              },
            }}
          >
            <ArrowLeft size={isMobile ? 18 : 20} />
          </IconButton>

          <IconButton
            aria-label="Next slide"
            onClick={goNext}
            disabled={!loop && currentIndex === itemCount - 1}
            sx={{
              position: "absolute",

              zIndex: 5,

              right: {
                xs: 12,
                md: 20,
              },

              top: "50%",

              transform: "translateY(-50%)",

              width: currentSize.arrowSize,

              height: currentSize.arrowSize,

              color: "#fff",

              bgcolor: "rgba(0,0,0,0.28)",

              backdropFilter: "blur(12px)",

              border: "1px solid rgba(255,255,255,0.2)",

              "&:hover": {
                bgcolor: "rgba(0,0,0,0.45)",
              },

              "&.Mui-disabled": {
                opacity: 0.35,
              },
            }}
          >
            <ArrowRight size={isMobile ? 18 : 20} />
          </IconButton>
        </>
      )}

      {/* =====================================================
          NAVIGATION

          RESTORED:
          - No glass container
          - No visible rail
          - Soft rounded hit areas
          - Thin liquid-clay indicators
          - Tall active indicator
          - Subtle expansion on hover
          ===================================================== */}

      {navigation !== "none" && itemCount > 1 && (
        <Box
          sx={{
            position: "absolute",

            zIndex: 5,

            ...(navigation === "vertical"
              ? {
                  right: {
                    xs: 14,
                    md: 58,
                    lg: 76,
                  },

                  top: "50%",

                  transform: "translateY(-50%)",

                  display: "flex",

                  flexDirection: "column",

                  gap: currentSize.navigationGap,

                  alignItems: "center",

                  justifyContent: "center",
                }
              : {
                  left: "50%",

                  bottom: {
                    xs: 16,
                    sm: 24,
                  },

                  transform: "translateX(-50%)",

                  display: "flex",

                  flexDirection: "row",

                  gap: currentSize.navigationGap,

                  alignItems: "center",

                  justifyContent: "center",
                }),
          }}
        >
          {safeItems.map((item, index) => {
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

                  minWidth: navigation === "vertical" ? 28 : 8,

                  minHeight: navigation === "vertical" ? 38 : 8,

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  borderRadius: 999,

                  background: "transparent",

                  cursor: "pointer",

                  transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",

                  "&:focus-visible": {
                    outline: `2px solid ${theme.palette.primary.main}`,

                    outlineOffset: 3,
                  },

                  "&:hover": {
                    transform:
                      navigation === "vertical" ? "scale(1.08)" : "none",
                  },
                }}
              >
                {navigation === "vertical" ? (
                  <Box
                    sx={{
                      width: active ? 3 : 1,

                      height: active ? 42 : 20,

                      borderRadius: 999,

                      backgroundColor: active
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.45)",

                      transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",

                      boxShadow: active
                        ? "0 0 10px rgba(255,255,255,0.18)"
                        : "none",
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

                      transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",

                      boxShadow: active
                        ? "0 0 10px rgba(255,255,255,0.16)"
                        : "none",
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

      {showProgress && itemCount > 1 && (
        <Box
          sx={{
            position: "absolute",

            left: 0,

            right: 0,

            bottom: 0,

            zIndex: 6,

            height: 2,

            bgcolor: "rgba(255,255,255,0.18)",
          }}
        >
          <Box
            sx={{
              height: "100%",

              width: `${((currentIndex + 1) / itemCount) * 100}%`,

              bgcolor: "#fff",

              transition: "width 400ms ease",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Showcase;
