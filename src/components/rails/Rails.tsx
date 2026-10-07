"use client";

import * as React from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import type { RailProps, RailRenderContext, RailNavigationContext } from "./Rail.types.js";

const DEFAULT_COLUMNS = { xs: 2, sm: 3, md: 4, lg: 5, xl: 5 } as const;
const DEFAULT_GAP = 2;
const DEFAULT_INTERVAL = 5000;

const resolveResponsiveValue = <T,>(
  value: Record<string, T> | undefined,
  fallback: Record<string, T>,
  breakpoint: string,
): T => value?.[breakpoint] ?? fallback[breakpoint];

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

  const currentColumns = resolveResponsiveValue(columns, DEFAULT_COLUMNS, breakpoint);
  const currentItemWidth = itemWidth?.[breakpoint];
  const viewportRef = React.useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = React.useState(false);
  const [canScrollPrevious, setCanScrollPrevious] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [activePage, setActivePage] = React.useState(0);

  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const getCssItemBasis = React.useCallback(
    (breakpointKey: keyof typeof DEFAULT_COLUMNS) => {
      const explicitWidth = itemWidth?.[breakpointKey];
      if (explicitWidth) return explicitWidth;
      const columnCount = columns?.[breakpointKey] ?? DEFAULT_COLUMNS[breakpointKey];
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

  const pageCount = React.useMemo(
    () => Math.max(1, Math.ceil(items.length / Math.max(1, currentColumns))),
    [items.length, currentColumns],
  );

  const transitionConfig = React.useMemo(() => {
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

    switch (transition) {
      case "fade":
        return {
          item: { transition: "box-shadow 300ms ease" },
          image: { transition: `transform 500ms ${easing}` },
          overlay: { transition: "opacity 250ms ease" },
          hoverItem: {},
          hoverImage: {},
          hoverOverlay: { opacity: 1 },
        };

      case "scale":
        return {
          item: {
            transition: `transform 500ms ${easing}, box-shadow 300ms ease`,
          },
          image: { transition: `transform 500ms ${easing}` },
          overlay: { transition: "opacity 250ms ease" },
          hoverItem: {},
          hoverImage: { transform: "scale(1.025)" },
          hoverOverlay: { opacity: 1 },
        };
      case "lift":
        return {
          item: {
            transition: `transform 500ms ${easing}, box-shadow 300ms ease`,
          },
          image: { transition: `transform 500ms ${easing}` },
          overlay: { transition: "opacity 250ms ease" },
          hoverItem: {
            transform: "translateY(-4px)",
            boxShadow: theme.shadows[6],
          },
          hoverImage: { transform: "scale(1.035)" },
          hoverOverlay: { opacity: 1 },
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

  const updateScrollState = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const scrollLeft = viewport.scrollLeft;

    setCanScrollPrevious(scrollLeft > 1);
    setCanScrollNext(scrollLeft < maxScroll - 1);

    const firstItem = viewport.querySelector<HTMLElement>("[data-rail-item]");

    if (!firstItem) {
      setActivePage(0);
      return;
    }

    const parent = firstItem.parentElement;
    const computedStyle = window.getComputedStyle(parent ?? firstItem);

    const gapValue = parseFloat(computedStyle.columnGap) || parseFloat(computedStyle.gap) || gap;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const columnsCount = Math.max(1, currentColumns);

    const pageWidth = itemWidth * columnsCount + gapValue * Math.max(0, columnsCount - 1);

    if (pageWidth <= 0) {
      setActivePage(0);
      return;
    }

    if (maxScroll > 0 && scrollLeft >= maxScroll - 2) {
      setActivePage(pageCount - 1);
      return;
    }

    const calculatedPage = Math.round(scrollLeft / pageWidth);

    setActivePage(Math.min(Math.max(calculatedPage, 0), pageCount - 1));
  }, [currentColumns, gap, pageCount]);

  React.useEffect(() => {
    updateScrollState();

    const viewport = viewportRef.current;

    if (!viewport) return;

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

  const getStepDistance = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;

    const firstItem = viewport.querySelector<HTMLElement>("[data-rail-item]");
    if (!firstItem) return viewport.clientWidth;

    const itemRect = firstItem.getBoundingClientRect();
    const parent = firstItem.parentElement;
    const computedStyle = window.getComputedStyle(parent ?? firstItem);
    const gapValue = parseFloat(computedStyle.columnGap) || parseFloat(computedStyle.gap) || gap;

    return itemRect.width + gapValue;
  }, [gap]);

  const scrollBy = React.useCallback(
    (direction: "previous" | "next") => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const distance = getStepDistance() * Math.max(1, step);
      const amount = direction === "next" ? distance : -distance;

      viewport.scrollBy({
        left: amount,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [getStepDistance, step, prefersReducedMotion],
  );

  const scrollToStart = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  const scrollToEnd = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);

    viewport.scrollTo({
      left: maxScroll,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  const handlePrevious = React.useCallback(() => {
    if (canScrollPrevious) {
      scrollBy("previous");
      return;
    }
    if (loop) scrollToEnd();
  }, [canScrollPrevious, loop, scrollBy, scrollToEnd]);

  const handleNext = React.useCallback(() => {
    if (canScrollNext) {
      scrollBy("next");
      return;
    }

    if (loop) scrollToStart();
  }, [canScrollNext, loop, scrollBy, scrollToStart]);

  React.useEffect(() => {
    if (!autoplay || prefersReducedMotion || (pauseOnHover && isHovered) || items.length <= currentColumns) {
      return;
    }

    const safeInterval = Math.max(1000, interval);

    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const isAtEnd = viewport.scrollLeft >= maxScroll - 2;
      if (isAtEnd) {
        if (loop) scrollToStart();
        return;
      }
      scrollBy("next");
    }, safeInterval);

    return () => window.clearInterval(timer);
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

  const renderDefaultImage = React.useCallback(
    ({ src, alt, index }: { src: string; alt: string; index: number }) => {
      if (renderImage) {
        return renderImage({ item: items[index], index, src });
      }

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
    [ImageComponent, currentColumns, items, renderImage, transitionConfig.image],
  );

  const defaultRenderItem = React.useCallback(
    ({ item, index }: RailRenderContext<T>) => {
      const image = getImage(item, index);
      const title = getTitle?.(item, index);
      const href = getHref?.(item, index);

      const linkLabel = typeof title === "string" && title.trim().length > 0 ? `View ${title}` : "View item";

      const handleItemNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
              background: "linear-gradient(to top, rgba(0,0,0,0.22), transparent 45%)",
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
                  fontWeight: 450,
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

          {renderContent && <Box sx={{ pt: title ? 0.5 : 1.5 }}>{renderContent({ item, index })}</Box>}
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

  const renderNavigationButton = (direction: "previous" | "next") => {
    const isPrevious = direction === "previous";

    const disabled = isPrevious ? !canScrollPrevious && !loop : !canScrollNext && !loop;

    const handleAction = (event?: React.MouseEvent) => {
      event?.preventDefault();
      event?.stopPropagation();

      if (disabled) return;

      if (isPrevious) {
        handlePrevious();
      } else {
        handleNext();
      }
    };

    const context: RailNavigationContext = {
      onClick: handleAction,
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
        onClick={handleAction}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          color: theme.palette.mode === "dark" ? "#fff" : theme.palette.text.primary,
          bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          border:
            theme.palette.mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.28)"
              : "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow:
            theme.palette.mode === "dark" ? "0 4px 20px rgba(0, 0, 0, 0.25)" : "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
          "&:hover": {
            bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.85)",
            transform: "translateY(-1px)",
          },
          "&.Mui-disabled": {
            opacity: 0.35,
            pointerEvents: "auto",
            cursor: "not-allowed",
          },
        }}
      >
        {isPrevious ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
      </IconButton>
    );
  };

  if (!items.length) return null;

  return (
    <Box
      component="section"
      className={className}
      aria-label={ariaLabel}
      onMouseEnter={() => {
        if (pauseOnHover) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (pauseOnHover) setIsHovered(false);
      }}
      sx={{
        position: "relative",
        cursor,
        width: "100%",
        minWidth: 0,
        ...sx,
      }}
    >
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
          touchAction: swipe ? "pan-x" : "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
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

            const content = renderItem?.({ item, index }) ?? defaultRenderItem({ item, index });

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

      {(navigation === "arrows" || navigation === "both") && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 12,
              zIndex: 10,
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
              zIndex: 10,
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

      {(navigation === "dots" || navigation === "both") && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.25,
            mt: 2,
          }}
        >
          {Array.from({ length: pageCount }).map((_, index) => {
            const active = activePage === index;

            return (
              <Box
                key={index}
                component="button"
                type="button"
                aria-label={`Go to page ${index + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => {
                  const viewport = viewportRef.current;

                  if (!viewport) return;

                  const firstItem = viewport.querySelector<HTMLElement>("[data-rail-item]");

                  if (!firstItem) return;

                  const parent = firstItem.parentElement;
                  const computedStyle = window.getComputedStyle(parent ?? firstItem);

                  const gapValue = parseFloat(computedStyle.columnGap) || parseFloat(computedStyle.gap) || gap;

                  const itemWidth = firstItem.getBoundingClientRect().width;

                  const columnsCount = Math.max(1, currentColumns);

                  const pageWidth = itemWidth * columnsCount + gapValue * Math.max(0, columnsCount - 1);

                  const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);

                  const target = index === pageCount - 1 ? maxScroll : Math.min(pageWidth * index, maxScroll);

                  setActivePage(index);

                  viewport.scrollTo({
                    left: target,
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  });
                }}
                sx={{
                  width: 24,
                  height: 24,
                  minWidth: 24,
                  minHeight: 24,
                  p: 0,
                  m: 0,
                  border: 0,
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: active ? 22 : 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: active ? "text.primary" : "action.disabled",
                    transition: "width 220ms ease",
                  },
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: 1,
                  },
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
