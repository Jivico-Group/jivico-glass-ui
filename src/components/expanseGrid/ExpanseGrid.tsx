"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import type { ExpanseGridProps, ExpanseItem, ExpanseLayout } from "./ExpanseGrid.types";

const getRadius = (r: ExpanseGridProps["radius"]) => {
  if (r === "square") return 0;
  if (r === "corner") return "10px";
  if (r === "rounded") return 2;
  return 16;
};

export const ExpanseGrid = ({ items, ImageComponent, radius = "rounded", gap = 2, onNavigate, className, sx }: ExpanseGridProps) => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const safeItems = useMemo(() => items.filter(Boolean).slice(0, 5), [items]);
  const count = safeItems.length;
  if (!count) return null;
  const layout: ExpanseLayout = useMemo(() => {
    if (count === 1) return "single";
    if (count === 2) return "dual";
    if (count === 3) return "feature-two";
    if (count === 4) return "quad";
    return "feature-four";
  }, [count]);

  const radiusValue = getRadius(radius);
  const featured = safeItems.find((i) => i.isFeatured ?? i.isFeaturedOnHome) ?? safeItems[0];
  const featuredKey = featured.id || featured.value || featured.href || featured.path || featured.name || featured.title || "";
  const rest = safeItems.filter((i) => {
    const itemKey = i.id || i.value || i.href || i.path || i.name || i.title || "";
    return itemKey !== featuredKey;
  });

  const RenderImage = ({ item }: { item: ExpanseItem }) => {
    const src = isMobile && item.mobileCoverImage ? item.mobileCoverImage : item.coverImage;
    const displayName = item.title || item.name || "";
    if (ImageComponent) {
      return (
        <ImageComponent
          src={src}
          alt={displayName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      );
    }
    return <Box component="img" src={src} alt={displayName} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  };

  const Card = ({ item, featured = false }: { item: ExpanseItem; featured?: boolean }) => {
    const displayName = item.title || item.name || "";
    const targetUrl = item.href || item.path;
    const cleanTagline = displayName ? item.tagline?.replace(new RegExp(` Jivico ${displayName}$`, "i"), "") : item.tagline;
    return (
      <Box
        onClick={() => onNavigate?.(item)}
        component={targetUrl ? "a" : "div"}
        href={targetUrl}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: { xs: featured ? 460 : 340, md: featured ? 560 : 380 },
          overflow: "hidden",
          borderRadius: radiusValue,
          isolation: "isolate",
          bgcolor: "#111111",
          cursor: "pointer",
          textDecoration: "none",
          display: "block",
          "& img": { transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)", willChange: "transform" },
          "&:hover img": { transform: "scale(1.05)" },
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <RenderImage item={item} />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: { xs: 3, md: featured ? 5 : 4 },
            color: "#ffffff",
          }}
        >
          {item.badgeText && (
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                mb: 1.5,
                lineHeight: 1,
              }}
            >
              {item.badgeText}
            </Typography>
          )}

          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: featured ? "2rem" : "1.45rem", md: featured ? "2.5rem" : "1.75rem" },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: "14ch",
              textWrap: "balance",
            }}
          >
            {cleanTagline || item.tagline}
          </Typography>

          {item.description && (
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                mt: 1.5,
                fontSize: { xs: "0.85rem", md: "0.90rem" },
                fontWeight: 400,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.75)",
                maxWidth: "34ch",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </Typography>
          )}
          <Button sx={{ width: 100 }} size="large" variant="outlined" color="dark-glass" endIcon={<ArrowRight />}>
            Explore {displayName}
          </Button>
        </Box>
      </Box>
    );
  };

  const getItemKey = (item: ExpanseItem, index: number) =>
    item.id || item.value || item.href || item.path || item.name || item.title || `item-${index}`;
  return (
    <Box className={className} sx={{ width: "100%", mx: "auto", ...sx }}>
      {layout === "single" && <Card item={featured} featured />}
      {layout === "dual" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i, idx) => (
            <Card key={getItemKey(i, idx)} item={i} />
          ))}
        </Box>
      )}
      {layout === "feature-two" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateRows: "1fr 1fr", gap }}>
            {rest.slice(0, 2).map((i, idx) => (
              <Card key={getItemKey(i, idx)} item={i} />
            ))}
          </Box>
        </Box>
      )}
      {layout === "quad" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i, idx) => (
            <Card key={getItemKey(i, idx)} item={i} />
          ))}
        </Box>
      )}
      {layout === "feature-four" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap }}>
            {rest.slice(0, 4).map((i, idx) => (
              <Card key={getItemKey(i, idx)} item={i} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExpanseGrid;
