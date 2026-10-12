"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import type { ExpanseGridProps, ExpanseLayout } from "./ExpanseGrid.types";

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
  const featured = safeItems.find((i) => i.isFeatured) ?? safeItems[0];
  const rest = safeItems.filter((i) => i.id !== featured.id);

  const RenderImage = ({ item }: { item: any }) => {
    const src = isMobile && item.mobileCoverImage ? item.mobileCoverImage : item.coverImage;
    if (ImageComponent) {
      return (
        <ImageComponent
          src={src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      );
    }
    return <Box component="img" src={src} alt={item.title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  };

  const Card = ({ item, featured = false }: { item: any; featured?: boolean }) => {
    return (
      <Box
        onClick={() => onNavigate?.(item)}
        component={item.href ? "a" : "div"}
        href={item.href}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: { xs: featured ? 460 : 340, md: featured ? 560 : 380 },
          overflow: "hidden",
          borderRadius: radiusValue,
          isolation: "isolate",
          bgcolor: "#111",
          cursor: "pointer",
          textDecoration: "none",
          display: "block",
          "& img": { transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1)", willChange: "transform" },
          "&:hover img": { transform: "scale(1.06)" },
          "&:hover.cta": { bgcolor: "#fff", color: "#111", borderColor: "#fff" },
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <RenderImage item={item} />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.08) 38%, rgba(0,0,0,0.82) 100%)",
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
            p: { xs: 3, md: featured ? 4.5 : 3.5 },
            color: "#fff",
          }}
        >
          {item.badgeText && (
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: "0.70rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B08D57",
                mb: 1.25,
                lineHeight: 1,
              }}
            >
              {item.badgeText}
            </Typography>
          )}
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: featured ? "1.85rem" : "1.35rem", md: featured ? "2.45rem" : "1.6rem" },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: "12ch",
              textWrap: "balance",
            }}
          >
            {item.tagline}
          </Typography>
          {item.description && (
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                mt: 1,
                fontSize: { xs: "0.88rem", md: "0.92rem" },
                fontWeight: 400,
                lineHeight: 1.5,
                opacity: 0.88,
                maxWidth: "32ch",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </Typography>
          )}
          <Box
            className="cta"
            sx={{
              mt: 2.5,
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.2,
              height: 36,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.28)",
              bgcolor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(10px)",
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "all 250ms ease",
            }}
          >
            Explore {item.name} <ArrowRight size={14} />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={className} sx={{ width: "100%", mx: "auto", ...sx }}>
      {layout === "single" && <Card item={featured} featured />}
      {layout === "dual" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i) => (
            <Card key={i.id} item={i} />
          ))}
        </Box>
      )}
      {layout === "feature-two" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateRows: "1fr 1fr", gap }}>
            {rest.slice(0, 2).map((i) => (
              <Card key={i.id} item={i} />
            ))}
          </Box>
        </Box>
      )}
      {layout === "quad" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i) => (
            <Card key={i.id} item={i} />
          ))}
        </Box>
      )}
      {layout === "feature-four" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap }}>
            {rest.slice(0, 4).map((i) => (
              <Card key={i.id} item={i} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExpanseGrid;
