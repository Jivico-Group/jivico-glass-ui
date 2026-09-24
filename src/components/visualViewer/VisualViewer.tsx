"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import type {
  VisualViewerImageContext,
  VisualViewerItem,
  VisualViewerProps,
} from "./VisualViewer.types";

const DEFAULT_THUMBNAIL_WIDTH = 112;
const DEFAULT_THUMBNAIL_SIZE = 112;
const DEFAULT_THUMBNAIL_GAP = 1;
const DEFAULT_MEDIA_GAP = 2;
const DEFAULT_MAX_VISIBLE_THUMBNAILS = 5;

const getRadius = (radius: VisualViewerProps["radius"]) => {
  switch (radius) {
    case "square":
      return 0;
    case "soft":
      return 3;
    case "rounded":
    default:
      return 2;
  }
};

const getResponsiveValue = (value: VisualViewerProps["height"]) => {
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

export const VisualViewer = ({
  items,

  activeIndex: controlledActiveIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,

  renderImage,
  renderThumbnail,

  height,
  minHeight,
  maxHeight,
  aspectRatio,

  thumbnailPosition = "auto",

  navigation = "arrows",

  swipe = true,
  mouseDrag = true,
  keyboard = true,

  fullscreen = true,
  zoom = true,

  objectFit = "contain",

  loop = true,

  radius = "rounded",

  thumbnailWidth = DEFAULT_THUMBNAIL_WIDTH,
  thumbnailSize = DEFAULT_THUMBNAIL_SIZE,

  thumbnailGap = DEFAULT_THUMBNAIL_GAP,
  mediaGap = DEFAULT_MEDIA_GAP,

  showFullscreenButton = true,
  showZoomButton = true,

  showRemainingCount = true,

  maxVisibleThumbnails = DEFAULT_MAX_VISIBLE_THUMBNAILS,

  renderPreviousButton,
  renderNextButton,

  renderFullscreenButton,
  renderZoomButton,

  rootRef,

  sx,
  className,

  "aria-label": ariaLabel = "Visual viewer",
}: VisualViewerProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const itemCount = safeItems.length;

  const isControlled = controlledActiveIndex !== undefined;

  const [internalActiveIndex, setInternalActiveIndex] =
    useState(defaultActiveIndex);

  const activeIndex = isControlled
    ? controlledActiveIndex
    : internalActiveIndex;

  const currentIndex =
    itemCount === 0 ? 0 : Math.min(Math.max(activeIndex, 0), itemCount - 1);

  const currentItem = safeItems[currentIndex];

  const [isZoomed, setIsZoomed] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const rootElementRef = useRef<HTMLDivElement | null>(null);

  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  const mediaContainerRef = useRef<HTMLDivElement | null>(null);

  const touchStartX = useRef<number | null>(null);

  const touchStartY = useRef<number | null>(null);

  const isDraggingRef = useRef(false);

  const dragStartX = useRef<number | null>(null);

  const dragStartY = useRef<number | null>(null);

  const dragMovedRef = useRef(false);

  const setRootRef = useCallback(
    (element: HTMLDivElement | null) => {
      rootElementRef.current = element;

      if (typeof rootRef === "function") {
        rootRef(element);
      } else if (rootRef) {
        (rootRef as React.MutableRefObject<HTMLDivElement | null>).current =
          element;
      }
    },
    [rootRef],
  );

  /*
   * =========================================================
   * ACTIVE INDEX
   * =========================================================
   */

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
   * THUMBNAIL SCROLLING
   * =========================================================
   */

  const scrollThumbnailIntoView = useCallback((index: number) => {
    const container = thumbnailContainerRef.current;

    if (!container) {
      return;
    }

    const thumbnail = container.querySelector<HTMLElement>(
      `[data-visual-viewer-thumbnail="${index}"]`,
    );

    thumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, []);

  useEffect(() => {
    scrollThumbnailIntoView(currentIndex);
  }, [currentIndex, scrollThumbnailIntoView]);

  /*
   * =========================================================
   * FULLSCREEN
   * =========================================================
   */

  const enterFullscreen = useCallback(async () => {
    const element = rootElementRef.current;

    if (!element) {
      return;
    }

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen?.();
      }
    } catch {
      // Browser may reject fullscreen.
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen?.();
      }
    } catch {
      // Ignore browser fullscreen errors.
    }
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!fullscreen) {
      return;
    }

    if (document.fullscreenElement) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [fullscreen, exitFullscreen, enterFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  /*
   * =========================================================
   * ZOOM
   * =========================================================
   */

  const toggleZoom = useCallback(() => {
    if (!zoom) {
      return;
    }

    setIsZoomed((previous) => !previous);
  }, [zoom]);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  /*
   * =========================================================
   * KEYBOARD
   * =========================================================
   */

  useEffect(() => {
    if (!keyboard) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          goNext();
          break;

        case "ArrowLeft":
          event.preventDefault();
          goPrevious();
          break;

        case "Escape":
          if (document.fullscreenElement) {
            event.preventDefault();
            exitFullscreen();
          }

          if (isZoomed) {
            setIsZoomed(false);
          }

          break;

        case "+":
        case "=":
          if (zoom) {
            event.preventDefault();
            setIsZoomed(true);
          }
          break;

        case "-":
          if (zoom) {
            event.preventDefault();
            setIsZoomed(false);
          }
          break;

        case "f":
        case "F":
          if (fullscreen) {
            event.preventDefault();
            toggleFullscreen();
          }
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    keyboard,
    goNext,
    goPrevious,
    exitFullscreen,
    toggleFullscreen,
    fullscreen,
    zoom,
    isZoomed,
  ]);

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

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  /*
   * =========================================================
   * MOUSE DRAG
   * =========================================================
   */

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!mouseDrag) {
      return;
    }

    if (event.button !== 0) {
      return;
    }

    dragStartX.current = event.clientX;

    dragStartY.current = event.clientY;

    dragMovedRef.current = false;

    isDraggingRef.current = true;
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (
      !mouseDrag ||
      !isDraggingRef.current ||
      dragStartX.current === null ||
      dragStartY.current === null
    ) {
      return;
    }

    const deltaX = event.clientX - dragStartX.current;

    const deltaY = event.clientY - dragStartY.current;

    if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
      dragMovedRef.current = true;
    }
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (!mouseDrag || !isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;

    const startX = dragStartX.current;

    const startY = dragStartY.current;

    dragStartX.current = null;
    dragStartY.current = null;

    if (startX === null || startY === null) {
      return;
    }

    const deltaX = event.clientX - startX;

    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMouseUp(event);
    }
  };

  /*
   * =========================================================
   * DIMENSIONS
   * =========================================================
   */

  const responsiveHeight = getResponsiveValue(height);

  const responsiveMinHeight = getResponsiveValue(minHeight);

  const responsiveMaxHeight = getResponsiveValue(maxHeight);

  const responsiveAspectRatio =
    typeof aspectRatio === "string"
      ? aspectRatio
      : aspectRatio
        ? {
            xs: aspectRatio.xs,
            sm: aspectRatio.sm,
            md: aspectRatio.md,
            lg: aspectRatio.lg,
            xl: aspectRatio.xl,
          }
        : undefined;

  /*
   * =========================================================
   * THUMBNAIL POSITION
   * =========================================================
   */

  const resolvedThumbnailPosition =
    thumbnailPosition === "auto"
      ? isMobile
        ? "bottom"
        : "left"
      : thumbnailPosition;

  /*
   * =========================================================
   * IMAGE RENDERING
   * =========================================================
   */

  const renderMainImage = (item: VisualViewerItem) => {
    const context: VisualViewerImageContext = {
      item,
      index: currentIndex,
      active: true,
      isThumbnail: false,
      isFullscreen,
    };

    if (renderImage) {
      return renderImage(context);
    }

    const src = isMobile && item.mobileSrc ? item.mobileSrc : item.src;

    return (
      <Box
        component="img"
        src={src}
        alt={item.alt ?? ""}
        draggable={false}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit,
          display: "block",
          userSelect: "none",
          WebkitUserSelect: "none",
          transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
          transform: isZoomed ? "scale(1.12)" : "scale(1)",
        }}
      />
    );
  };

  const renderDefaultThumbnail = (item: VisualViewerItem, index: number) => {
    const active = index === currentIndex;

    const context: VisualViewerImageContext = {
      item,
      index,
      active,
      isThumbnail: true,
      isFullscreen,
    };

    if (renderThumbnail) {
      return renderThumbnail(context);
    }

    return (
      <Box
        component="img"
        src={item.thumbnailSrc ?? item.src}
        alt={item.alt ?? `Thumbnail ${index + 1}`}
        draggable={false}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />
    );
  };

  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (!currentItem) {
    return null;
  }

  const radiusValue = getRadius(radius);

  /*
   * =========================================================
   * THUMBNAIL COUNT
   * =========================================================
   */

  const visibleThumbnailCount = Math.min(maxVisibleThumbnails, itemCount);

  const hasRemainingImages = itemCount > visibleThumbnailCount;

  /*
   * =========================================================
   * ROOT
   * =========================================================
   */

  return (
    <Box
      ref={setRootRef}
      className={className}
      role="region"
      aria-label={ariaLabel}
      tabIndex={keyboard ? 0 : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: responsiveHeight,
        minHeight: responsiveMinHeight,
        maxHeight: responsiveMaxHeight,
        aspectRatio:
          responsiveHeight === undefined ? responsiveAspectRatio : undefined,
        overflow: "hidden",
        isolation: "isolate",
        borderRadius: radiusValue,
        bgcolor: "background.paper",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: swipe ? "pan-y" : "auto",

        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 3,
        },

        ...sx,
      }}
    >
      {/* =====================================================
          THUMBNAILS — LEFT
      ===================================================== */}

      {resolvedThumbnailPosition === "left" && (
        <Box
          sx={{
            flexShrink: 0,
            width: thumbnailWidth,
            height: "100%",
            mr: mediaGap,
            overflow: "hidden",
          }}
        >
          <Box
            ref={thumbnailContainerRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: thumbnailGap,
              width: "100%",
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "none",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {safeItems.slice(0, visibleThumbnailCount).map((item, index) => {
              const active = index === currentIndex;

              const isLastVisible = index === visibleThumbnailCount - 1;

              const showCount =
                showRemainingCount && hasRemainingImages && isLastVisible;

              return (
                <Box
                  key={item.id}
                  data-visual-viewer-thumbnail={index}
                  component="button"
                  type="button"
                  aria-label={`View image ${index + 1}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => updateIndex(index)}
                  sx={{
                    position: "relative",
                    flexShrink: 0,
                    width: "100%",
                    height: thumbnailSize,
                    minHeight: thumbnailSize,
                    p: 0,
                    border: 0,
                    borderRadius: Math.max(0, radiusValue - 2),
                    overflow: "hidden",
                    bgcolor: "background.default",
                    cursor: "pointer",
                    opacity: active ? 1 : 0.68,
                    transition: "opacity 220ms ease, transform 220ms ease",

                    "&:hover": {
                      opacity: 1,
                      transform: "scale(0.97)",
                    },

                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                    },

                    ...(active && {
                      boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
                    }),
                  }}
                >
                  {renderDefaultThumbnail(item, index)}

                  {showCount && (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(0,0,0,0.48)",
                        color: "#FFFFFF",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                      }}
                    >
                      +{itemCount - visibleThumbnailCount + 1}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}

      {/* =====================================================
          MAIN MEDIA
      ===================================================== */}

      <Box
        ref={mediaContainerRef}
        sx={{
          position: "relative",
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          height: "100%",
          overflow: "hidden",
          borderRadius:
            resolvedThumbnailPosition === "bottom" ? radiusValue : radiusValue,
          bgcolor: "background.default",
          cursor: isZoomed ? "zoom-out" : zoom ? "zoom-in" : "default",
        }}
        onClick={() => {
          if (zoom && dragMovedRef.current === false) {
            toggleZoom();
          }
        }}
      >
        {renderMainImage(currentItem)}

        {/* Custom overlay */}

        {currentItem.overlay && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            {currentItem.overlay}
          </Box>
        )}

        {/* ===================================================
            PREVIOUS
        =================================================== */}

        {navigation === "arrows" && itemCount > 1 && (
          <>
            {renderPreviousButton ? (
              <Box
                sx={{
                  position: "absolute",
                  left: {
                    xs: 10,
                    md: 18,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 5,
                }}
              >
                {renderPreviousButton({
                  disabled: !loop && currentIndex === 0,
                  onClick: goPrevious,
                })}
              </Box>
            ) : (
              <IconButton
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrevious();
                }}
                disabled={!loop && currentIndex === 0}
                sx={{
                  position: "absolute",
                  left: {
                    xs: 10,
                    md: 18,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 5,
                  width: {
                    xs: 38,
                    md: 44,
                  },
                  height: {
                    xs: 38,
                    md: 44,
                  },
                  color: theme.palette.text.primary,
                  bgcolor: theme.palette.background.paper,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    bgcolor: theme.palette.background.paper,
                  },
                  "&.Mui-disabled": {
                    opacity: 0.3,
                  },
                }}
              >
                <ArrowLeft size={18} />
              </IconButton>
            )}
          </>
        )}

        {/* ===================================================
            NEXT
        =================================================== */}

        {navigation === "arrows" && itemCount > 1 && (
          <>
            {renderNextButton ? (
              <Box
                sx={{
                  position: "absolute",
                  right: {
                    xs: 10,
                    md: 18,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 5,
                }}
              >
                {renderNextButton({
                  disabled: !loop && currentIndex === itemCount - 1,
                  onClick: goNext,
                })}
              </Box>
            ) : (
              <IconButton
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
                disabled={!loop && currentIndex === itemCount - 1}
                sx={{
                  position: "absolute",
                  right: {
                    xs: 10,
                    md: 18,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 5,
                  width: {
                    xs: 38,
                    md: 44,
                  },
                  height: {
                    xs: 38,
                    md: 44,
                  },
                  color: theme.palette.text.primary,
                  bgcolor: theme.palette.background.paper,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    bgcolor: theme.palette.background.paper,
                  },
                  "&.Mui-disabled": {
                    opacity: 0.3,
                  },
                }}
              >
                <ArrowRight size={18} />
              </IconButton>
            )}
          </>
        )}

        {/* ===================================================
            CONTROLS
        =================================================== */}

        <Box
          sx={{
            position: "absolute",
            right: {
              xs: 12,
              md: 18,
            },
            bottom: {
              xs: 12,
              md: 18,
            },
            zIndex: 6,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {zoom &&
            showZoomButton &&
            (renderZoomButton ? (
              renderZoomButton(toggleZoom, isZoomed)
            ) : (
              <IconButton
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleZoom();
                }}
                sx={{
                  width: 38,
                  height: 38,
                  color: theme.palette.text.primary,
                  bgcolor: theme.palette.background.paper,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  "&:hover": {
                    bgcolor: theme.palette.background.paper,
                  },
                }}
              >
                {isZoomed ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
              </IconButton>
            ))}

          {fullscreen &&
            showFullscreenButton &&
            (renderFullscreenButton ? (
              renderFullscreenButton(toggleFullscreen)
            ) : (
              <IconButton
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "View fullscreen"
                }
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFullscreen();
                }}
                sx={{
                  width: 38,
                  height: 38,
                  color: theme.palette.text.primary,
                  bgcolor: theme.palette.background.paper,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  "&:hover": {
                    bgcolor: theme.palette.background.paper,
                  },
                }}
              >
                {isFullscreen ? (
                  <Minimize2 size={17} />
                ) : (
                  <Maximize2 size={17} />
                )}
              </IconButton>
            ))}
        </Box>
      </Box>

      {/* =====================================================
          THUMBNAILS — BOTTOM
      ===================================================== */}

      {resolvedThumbnailPosition === "bottom" && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 7,
            px: {
              xs: 1.5,
              sm: 2,
            },
            pb: {
              xs: 1.5,
              sm: 2,
            },
            pt: 5,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.48) 100%)",
            pointerEvents: "none",
          }}
        >
          <Box
            ref={thumbnailContainerRef}
            sx={{
              display: "flex",
              gap: thumbnailGap,
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              pointerEvents: "auto",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {safeItems.slice(0, visibleThumbnailCount).map((item, index) => {
              const active = index === currentIndex;

              const isLastVisible = index === visibleThumbnailCount - 1;

              const showCount =
                showRemainingCount && hasRemainingImages && isLastVisible;

              return (
                <Box
                  key={item.id}
                  data-visual-viewer-thumbnail={index}
                  component="button"
                  type="button"
                  aria-label={`View image ${index + 1}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => updateIndex(index)}
                  sx={{
                    position: "relative",
                    flex: `0 0 ${thumbnailSize}px`,
                    width: thumbnailSize,
                    height: thumbnailSize,
                    minWidth: thumbnailSize,
                    p: 0,
                    border: 0,
                    borderRadius: Math.max(0, radiusValue - 2),
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    cursor: "pointer",
                    opacity: active ? 1 : 0.7,
                    transition: "opacity 220ms ease, transform 220ms ease",

                    "&:hover": {
                      opacity: 1,
                      transform: "scale(0.97)",
                    },

                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                    },

                    ...(active && {
                      boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
                    }),
                  }}
                >
                  {renderDefaultThumbnail(item, index)}

                  {showCount && (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(0,0,0,0.48)",
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      +{itemCount - visibleThumbnailCount + 1}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VisualViewer;
