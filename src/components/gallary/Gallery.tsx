"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { GalleryProps } from "./Gallery.types";

const radiusMap = {
  square: 0,
  rounded: 0.75,
  soft: 1,
} as const;

function renderNativeImage<T>(
  src: string | undefined,
  alt: string | undefined,
  imageFit: GalleryProps<T>["imageFit"],
) {
  if (!src) {
    return null;
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt ?? ""}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: imageFit ?? "cover",
      }}
    />
  );
}

export function Gallery<T>({
  items,
  getKey,
  renderItem,
  renderImage,
  renderOverlay,
  renderBlock,
  renderContent,
  getImage,
  getImageAlt,
  getHref,
  getLinkLabel,
  onNavigate,
  columns = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
  },
  gap = 2,
  rowGap,
  columnGap,
  justifyItems = "stretch",
  alignItems = "stretch",
  imageAspectRatio = "4 / 5",
  imageFit = "cover",
  radius = "soft",
  itemSx,
  imageSx,
  blockSx,
  sx,
  className,
  "aria-label": ariaLabel,
}: GalleryProps<T>) {
  return (
    <Box
      className={className}
      aria-label={ariaLabel}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: columns.xs ? `repeat(${columns.xs}, minmax(0, 1fr))` : undefined,
          sm: columns.sm ? `repeat(${columns.sm}, minmax(0, 1fr))` : undefined,
          md: columns.md ? `repeat(${columns.md}, minmax(0, 1fr))` : undefined,
          lg: columns.lg ? `repeat(${columns.lg}, minmax(0, 1fr))` : undefined,
          xl: columns.xl ? `repeat(${columns.xl}, minmax(0, 1fr))` : undefined,
        },
        gap,
        rowGap: rowGap ?? gap,
        columnGap: columnGap ?? gap,
        justifyItems,
        alignItems,
        width: "100%",
        ...sx,
      }}
    >
      {items.map((item, index) => {
        const key = getKey ? getKey(item, index) : index;
        const src = getImage?.(item, index);
        const alt = getImageAlt?.(item, index);
        const href = getHref?.(item, index);
        const linkLabel =
          getLinkLabel?.(item, index) ?? (typeof alt === "string" ? alt : undefined);
        const isInteractive = Boolean(href || onNavigate);

        const handleItemNavigation = (event: React.MouseEvent<HTMLElement>) => {
          if (onNavigate) {
            event.preventDefault();
          }
          event.stopPropagation();
          onNavigate?.(item, index, event);
        };

        const renderContext = {
          item,
          index,
          href,
          onNavigate: isInteractive ? handleItemNavigation : undefined,
        };

        if (renderItem) {
          return (
            <Box
              key={key}
              sx={{
                minWidth: 0,
                width: "100%",
                ...itemSx,
              }}
            >
              {renderItem(renderContext)}
            </Box>
          );
        }

        return (
          <Box
            key={key}
            sx={{
              minWidth: 0,
              width: "100%",
              overflow: "hidden",
              borderRadius: radiusMap[radius],
              ...itemSx,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: imageAspectRatio,
                overflow: "hidden",
                borderRadius: radiusMap[radius],
                cursor: isInteractive ? "pointer" : undefined,
                ...imageSx,
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
                    zIndex: 2,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                />
              )}

              {!href && onNavigate && (
                <Box
                  role="button"
                  tabIndex={0}
                  aria-label={linkLabel}
                  onClick={handleItemNavigation}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleItemNavigation(e as any);
                    }
                  }}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
              )}

              {renderImage
                ? renderImage({
                    item,
                    index,
                    src,
                    alt,
                    href,
                    onNavigate: isInteractive ? handleItemNavigation : undefined,
                  })
                : renderNativeImage(src, alt, imageFit)}

              {renderOverlay && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      pointerEvents: "auto",
                    }}
                  >
                    {renderOverlay({
                      item,
                      index,
                      src,
                      alt,
                      href,
                      onNavigate: isInteractive ? handleItemNavigation : undefined,
                    })}
                  </Box>
                </Box>
              )}
            </Box>

            {(renderBlock || renderContent) && (
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  ...blockSx,
                }}
              >
                {(renderBlock ?? renderContent)!({
                  item,
                  index,
                  href,
                  onNavigate: isInteractive ? handleItemNavigation : undefined,
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default Gallery;
