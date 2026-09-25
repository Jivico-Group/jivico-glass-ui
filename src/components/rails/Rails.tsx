"use client";

import * as React from "react";

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

import type {
  RailProps,
  RailRenderContext,
  RailNavigationContext,
} from "./Rail.types.js";

const DEFAULT_COLUMNS = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 5,
} as const;

const DEFAULT_GAP = 2;

const DEFAULT_INTERVAL = 5000;

const resolveResponsiveValue = <T,>(
  value: Record<string, T> | undefined,
  fallback: Record<string, T>,
  breakpoint: string,
): T => {
  return value?.[breakpoint] ?? fallback[breakpoint];
};

export function Rails<T>({
  items,

  getKey,
  getImage,
  getTitle,
  getHref,

  renderContent,
  renderImage,
  renderItem,

  ImageComponent,

  columns = DEFAULT_COLUMNS,
  itemWidth,

  gap = DEFAULT_GAP,
  justifyContent = "flex-start",

  navigation = "arrows",
  renderPreviousButton,
  renderNextButton,

  swipe = true,

  autoplay = false,
  interval = DEFAULT_INTERVAL,
  pauseOnHover = true,

  loop = false,
  step = 1,
  snap = true,

  transition = "scale",

  imageAspectRatio = "3 / 4",
  radius = 0,

  itemSx,
  sx,

  className,
  cursor,
  onNavigate,
  "aria-label": ariaLabel = "Content rail",
}: RailProps<T>) {
  const theme = useTheme();

  /*
   * ---------------------------------------------------------
   * Responsive breakpoint
   * ---------------------------------------------------------
   *
   * These values are still used for JS behaviour such as:
   * - autoplay
   * - navigation
   * - priority images
   * - dot calculation
   *
   * Visual item sizing is handled by CSS below so that the
   * first server-rendered frame already has the correct
   * responsive width.
   */

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  const breakpoint = React.useMemo(() => {
    if (isXs) return "xs";

    if (isSm) return "sm";

    if (isMd) return "md";

    if (isLg) return "lg";

    return "xl";
  }, [isXs, isSm, isMd, isLg]);

  const currentColumns = resolveResponsiveValue(
    columns,
    DEFAULT_COLUMNS,
    breakpoint,
  );

  const currentItemWidth = itemWidth?.[breakpoint];

  /*
   * ---------------------------------------------------------
   * Stable responsive item sizing
   * ---------------------------------------------------------
   *
   * IMPORTANT:
   *
   * Do NOT calculate the visual item width exclusively from
   * useMediaQuery.
   *
   * useMediaQuery can resolve differently during SSR and
   * hydration, causing:
   *
   *     tiny/wrong rail
   *          ↓
   *     hydration
   *          ↓
   *     correct rail
   *
   * Instead, CSS receives every breakpoint value up front.
   * The browser chooses the correct one before hydration.
   */

  const getCssItemBasis = React.useCallback(
    (breakpointKey: keyof typeof DEFAULT_COLUMNS) => {
      const explicitWidth = itemWidth?.[breakpointKey];

      if (explicitWidth) {
        return explicitWidth;
      }

      const columnCount =
        columns?.[breakpointKey] ?? DEFAULT_COLUMNS[breakpointKey];

      return `calc((100% - ${(columnCount - 1) * gap}px) / ${columnCount})`;
    },
    [columns, gap, itemWidth],
  );

  const responsiveItemFlex = React.useMemo(
    () => ({
      xs: `0 0 ${getCssItemBasis("xs")}`,
      sm: `0 0 ${getCssItemBasis("sm")}`,
      md: `0 0 ${getCssItemBasis("md")}`,
      lg: `0 0 ${getCssItemBasis("lg")}`,
      xl: `0 0 ${getCssItemBasis("xl")}`,
    }),
    [getCssItemBasis],
  );

  /*
   * ---------------------------------------------------------
   * Viewport
   * ---------------------------------------------------------
   */

  const viewportRef = React.useRef<HTMLDivElement | null>(null);

  /*
   * ---------------------------------------------------------
   * Interaction state
   * ---------------------------------------------------------
   */

  const [isHovered, setIsHovered] = React.useState(false);

  const [canScrollPrevious, setCanScrollPrevious] = React.useState(false);

  const [canScrollNext, setCanScrollNext] = React.useState(false);

  /*
   * ---------------------------------------------------------
   * Reduced motion
   * ---------------------------------------------------------
   */

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  /*
   * ---------------------------------------------------------
   * Transition configuration
   * ---------------------------------------------------------
   */

  const transitionConfig = React.useMemo(() => {
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

    switch (transition) {
      case "fade":
        return {
          item: {
            transition: "box-shadow 300ms ease",
          },

          image: {
            transition: `transform 500ms ${easing}`,
          },

          overlay: {
            transition: "opacity 250ms ease",
          },

          hoverItem: {},

          hoverImage: {},

          hoverOverlay: {
            opacity: 1,
          },
        };

      case "scale":
        return {
          item: {
            transition: `transform 500ms ${easing}, box-shadow 300ms ease`,
          },

          image: {
            transition: `transform 500ms ${easing}`,
          },

          overlay: {
            transition: "opacity 250ms ease",
          },

          hoverItem: {},

          hoverImage: {
            transform: "scale(1.025)",
          },

          hoverOverlay: {
            opacity: 1,
          },
        };

      case "lift":
        return {
          item: {
            transition: `transform 500ms ${easing}, box-shadow 300ms ease`,
          },

          image: {
            transition: `transform 500ms ${easing}`,
          },

          overlay: {
            transition: "opacity 250ms ease",
          },

          hoverItem: {
            transform: "translateY(-4px)",
            boxShadow: theme.shadows[6],
          },

          hoverImage: {
            transform: "scale(1.035)",
          },

          hoverOverlay: {
            opacity: 1,
          },
        };

      case "none":
      default:
        return {
          item: {},

          image: {},

          overlay: {},

          hoverItem: {},

          hoverImage: {},

          hoverOverlay: {},
        };
    }
  }, [theme.shadows, transition]);

  /*
   * ---------------------------------------------------------
   * Scroll state
   * ---------------------------------------------------------
   */

  const updateScrollState = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    setCanScrollPrevious(viewport.scrollLeft > 1);

    setCanScrollNext(viewport.scrollLeft < maxScroll - 1);
  }, []);

  React.useEffect(() => {
    updateScrollState();

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateScrollState);

    resizeObserver.observe(viewport);

    const content = viewport.firstElementChild;

    if (content instanceof HTMLElement) {
      resizeObserver.observe(content);
    }

    viewport.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    return () => {
      resizeObserver.disconnect();

      viewport.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState, items.length, currentColumns, currentItemWidth, gap]);

  /*
   * ---------------------------------------------------------
   * Scroll distance
   * ---------------------------------------------------------
   */

  const getStepDistance = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return 0;
    }

    const firstItem = viewport.querySelector<HTMLElement>("[data-rail-item]");

    if (!firstItem) {
      return viewport.clientWidth;
    }

    const itemRect = firstItem.getBoundingClientRect();

    const parent = firstItem.parentElement;

    const computedStyle = window.getComputedStyle(parent ?? firstItem);

    const gapValue =
      parseFloat(computedStyle.columnGap) ||
      parseFloat(computedStyle.gap) ||
      gap;

    return itemRect.width + gapValue;
  }, [gap]);

  /*
   * ---------------------------------------------------------
   * Scroll by items
   * ---------------------------------------------------------
   */

  const scrollBy = React.useCallback(
    (direction: "previous" | "next") => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      const distance = getStepDistance() * Math.max(1, step);

      const amount = direction === "next" ? distance : -distance;

      viewport.scrollBy({
        left: amount,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [getStepDistance, step, prefersReducedMotion],
  );

  /*
   * ---------------------------------------------------------
   * Scroll to start
   * ---------------------------------------------------------
   */

  const scrollToStart = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  /*
   * ---------------------------------------------------------
   * Scroll to end
   * ---------------------------------------------------------
   */

  const scrollToEnd = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      left: viewport.scrollWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  /*
   * ---------------------------------------------------------
   * Navigation handlers
   * ---------------------------------------------------------
   */

  const handlePrevious = React.useCallback(() => {
    if (canScrollPrevious) {
      scrollBy("previous");

      return;
    }

    if (loop) {
      scrollToEnd();
    }
  }, [canScrollPrevious, loop, scrollBy, scrollToEnd]);

  const handleNext = React.useCallback(() => {
    if (canScrollNext) {
      scrollBy("next");

      return;
    }

    if (loop) {
      scrollToStart();
    }
  }, [canScrollNext, loop, scrollBy, scrollToStart]);

  /*
   * ---------------------------------------------------------
   * Autoplay
   * ---------------------------------------------------------
   */

  React.useEffect(() => {
    if (!autoplay) {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    if (pauseOnHover && isHovered) {
      return;
    }

    if (items.length <= currentColumns) {
      return;
    }

    const safeInterval = Math.max(1000, interval);

    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;

      const isAtEnd = viewport.scrollLeft >= maxScroll - 2;

      if (isAtEnd) {
        if (loop) {
          scrollToStart();
        }

        return;
      }

      scrollBy("next");
    }, safeInterval);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoplay,
    interval,
    pauseOnHover,
    isHovered,
    prefersReducedMotion,
    items.length,
    currentColumns,
    loop,
    scrollBy,
    scrollToStart,
  ]);

  /*
   * ---------------------------------------------------------
   * Built-in image renderer
   * ---------------------------------------------------------
   */

  const renderDefaultImage = React.useCallback(
    ({ src, alt, index }: { src: string; alt: string; index: number }) => {
      /*
       * -----------------------------------------------------
       * Advanced custom renderer
       * -----------------------------------------------------
       */

      if (renderImage) {
        return renderImage({
          item: items[index],
          index,
          src,
        });
      }

      /*
       * -----------------------------------------------------
       * Consumer supplied ImageComponent
       * -----------------------------------------------------
       */

      if (ImageComponent) {
        const CustomImage = ImageComponent;

        return (
          <CustomImage
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 20vw"
            priority={index < currentColumns}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        );
      }

      /*
       * -----------------------------------------------------
       * Native fallback
       * -----------------------------------------------------
       */

      return (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={index < currentColumns ? "eager" : "lazy"}
          draggable={false}
          sx={{
            display: "block",

            width: "100%",

            height: "100%",

            objectFit: "cover",

            objectPosition: "center",

            userSelect: "none",

            ...transitionConfig.image,
          }}
        />
      );
    },
    [
      ImageComponent,
      currentColumns,
      items,
      renderImage,
      transitionConfig.image,
    ],
  );

  /*
   * ---------------------------------------------------------
   * Default item renderer
   * ---------------------------------------------------------
   */

  const defaultRenderItem = React.useCallback(
    ({ item, index }: RailRenderContext<T>) => {
      const image = getImage(item, index);

      const title = getTitle?.(item, index);

      const href = getHref?.(item, index);

      const linkLabel =
        typeof title === "string" && title.trim().length > 0
          ? `View ${title}`
          : "View item";

      const handleItemNavigation = (
        event: React.MouseEvent<HTMLAnchorElement>,
      ) => {
        event.preventDefault();
        event.stopPropagation();

        onNavigate?.(item, index, event);
      };

      const imageContent = (
        <Box
          sx={{
            position: "relative",

            width: "100%",

            aspectRatio: imageAspectRatio,

            overflow: "hidden",

            borderRadius: radius,

            backgroundColor: theme.palette.action.hover,
          }}
        >
          {renderDefaultImage({
            src: image,
            alt: typeof title === "string" ? title : "",
            index,
          })}

          <Box
            className="Rail-image-overlay"
            aria-hidden
            sx={{
              position: "absolute",

              inset: 0,

              pointerEvents: "none",

              background:
                "linear-gradient(to top, rgba(0,0,0,0.22), transparent 45%)",

              opacity: 0,

              ...transitionConfig.overlay,
            }}
          />
        </Box>
      );

      return (
        <Box
          sx={{
            position: "relative",

            width: "100%",

            minWidth: 0,
          }}
        >
          {href && (
            <Box
              component="a"
              href={href}
              aria-label={linkLabel}
              onClick={handleItemNavigation}
              sx={{
                position: "absolute",

                inset: 0,

                zIndex: 3,

                display: "block",

                width: "100%",

                height: "100%",

                textDecoration: "none",

                cursor: "pointer",
              }}
            />
          )}

          {imageContent}

          {title && (
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "space-between",

                gap: 1.5,

                pt: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  minWidth: 0,

                  flex: 1,

                  fontWeight: 600,

                  color: "text.primary",

                  overflow: "hidden",

                  textOverflow: "ellipsis",

                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </Typography>

              <ChevronRight size={18} strokeWidth={1.8} aria-hidden />
            </Box>
          )}

          {renderContent && (
            <Box
              sx={{
                pt: title ? 0.5 : 1.5,
              }}
            >
              {renderContent({
                item,
                index,
              })}
            </Box>
          )}
        </Box>
      );
    },
    [
      getHref,
      getImage,
      getTitle,
      imageAspectRatio,
      onNavigate,
      radius,
      renderContent,
      renderDefaultImage,
      theme.palette.action.hover,
      transitionConfig.overlay,
    ],
  );

  /*
   * ---------------------------------------------------------
   * Navigation button
   * ---------------------------------------------------------
   */

  const renderNavigationButton = (direction: "previous" | "next") => {
    const isPrevious = direction === "previous";

    const disabled = isPrevious
      ? !canScrollPrevious && !loop
      : !canScrollNext && !loop;

    const context: RailNavigationContext = {
      onClick: isPrevious ? handlePrevious : handleNext,

      disabled,
    };

    if (isPrevious && renderPreviousButton) {
      return renderPreviousButton(context);
    }

    if (!isPrevious && renderNextButton) {
      return renderNextButton(context);
    }

    return (
      <IconButton
        aria-label={isPrevious ? "Previous" : "Next"}
        disabled={disabled}
        onClick={context.onClick}
        sx={{
          width: 44,

          height: 44,

          borderRadius: "50%",

          border: `1px solid ${theme.palette.divider}`,

          backgroundColor: theme.palette.background.paper,

          color: "text.primary",

          backdropFilter: "blur(12px)",

          transition: "transform 180ms ease, background-color 180ms ease",

          "&:hover": {
            backgroundColor: theme.palette.action.hover,

            transform: "translateY(-1px)",
          },

          "&.Mui-disabled": {
            opacity: 0.35,
          },
        }}
      >
        {isPrevious ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
      </IconButton>
    );
  };

  /*
   * ---------------------------------------------------------
   * Empty state
   * ---------------------------------------------------------
   */

  if (!items.length) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * Render
   * ---------------------------------------------------------
   */

  return (
    <Box
      component="section"
      className={className}
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
      sx={{
        position: "relative",
        cursor,
        width: "100%",
        minWidth: 0,
        ...sx,
      }}
    >
      {/* ================================================== */}
      {/* Viewport                                           */}
      {/* ================================================== */}

      <Box
        ref={viewportRef}
        sx={{
          width: "100%",

          overflowX: "auto",

          overflowY: "hidden",

          WebkitOverflowScrolling: "touch",

          overscrollBehaviorX: "contain",

          scrollBehavior: prefersReducedMotion ? "auto" : "smooth",

          scrollSnapType: snap ? "x mandatory" : "none",

          scrollbarWidth: "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* ================================================ */}
        {/* Track                                            */}
        {/* ================================================ */}

        <Box
          sx={{
            display: "flex",

            flexWrap: "nowrap",

            gap,

            justifyContent,

            width: "100%",

            minWidth: "100%",

            pb: 0.5,
          }}
        >
          {items.map((item, index) => {
            const key = getKey(item, index);

            /*
             * renderItem completely replaces the default UI.
             */

            const content =
              renderItem?.({
                item,
                index,
              }) ??
              defaultRenderItem({
                item,
                index,
              });

            return (
              <Box
                key={key}
                data-rail-item
                sx={{
                  position: "relative",

                  flex: responsiveItemFlex,

                  flexShrink: 0,

                  minWidth: 0,

                  boxSizing: "border-box",

                  scrollSnapAlign: snap ? "start" : "none",

                  scrollSnapStop: snap ? "normal" : "unset",

                  ...transitionConfig.item,

                  "&:hover": {
                    ...transitionConfig.hoverItem,
                  },

                  "&:hover img": {
                    ...transitionConfig.hoverImage,
                  },

                  "&:hover .Rail-image-overlay": {
                    ...transitionConfig.hoverOverlay,
                  },

                  ...itemSx,
                }}
              >
                {content}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ================================================== */}
      {/* Arrow navigation                                   */}
      {/* ================================================== */}

      {(navigation === "arrows" || navigation === "both") && (
        <>
          <Box
            sx={{
              position: "absolute",

              top: "50%",

              left: 12,

              zIndex: 2,

              transform: "translateY(-50%)",

              display: {
                xs: "none",

                sm: "block",
              },
            }}
          >
            {renderNavigationButton("previous")}
          </Box>

          <Box
            sx={{
              position: "absolute",

              top: "50%",

              right: 12,

              zIndex: 2,

              transform: "translateY(-50%)",

              display: {
                xs: "none",

                sm: "block",
              },
            }}
          >
            {renderNavigationButton("next")}
          </Box>
        </>
      )}

      {/* ================================================== */}
      {/* Dot navigation                                     */}
      {/* ================================================== */}

      {(navigation === "dots" || navigation === "both") && (
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            gap: 0.75,

            mt: 2,
          }}
        >
          {Array.from({
            length: Math.max(
              1,
              Math.ceil(items.length / Math.max(1, currentColumns)),
            ),
          }).map((_, index) => {
            const viewport = viewportRef.current;

            const firstItem =
              viewport?.querySelector<HTMLElement>("[data-rail-item]");

            const firstItemWidth = firstItem?.offsetWidth ?? 0;

            const pageWidth =
              firstItemWidth * currentColumns +
              gap * Math.max(0, currentColumns - 1);

            const activePage =
              pageWidth > 0
                ? Math.round((viewport?.scrollLeft ?? 0) / pageWidth)
                : 0;

            const active = activePage === index;

            return (
              <Box
                key={index}
                component="button"
                type="button"
                aria-label={`Go to page ${index + 1}`}
                onClick={() => {
                  const viewport = viewportRef.current;

                  if (!viewport || !firstItem) {
                    return;
                  }

                  const pageWidth =
                    firstItem.offsetWidth * currentColumns +
                    gap * Math.max(0, currentColumns - 1);

                  viewport.scrollTo({
                    left: pageWidth * index,

                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  });
                }}
                sx={{
                  width: active ? 22 : 6,

                  height: 6,

                  p: 0,

                  border: 0,

                  borderRadius: 999,

                  cursor: "pointer",

                  backgroundColor: active ? "text.primary" : "action.disabled",

                  transition: "all 220ms ease",
                }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default Rails;
