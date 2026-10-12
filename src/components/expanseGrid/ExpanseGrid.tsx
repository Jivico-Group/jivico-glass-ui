"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { ExpanseGridProps, ExpanseLayout } from "./ExpanseGrid.types";

const getRadius = (r: ExpanseGridProps["radius"]) => {
  if (r === "square") return 0;
  if (r === "corner") return "10px";
  if (r === "rounded") return 2;
  return 16;
};

export const ExpanseGrid = ({ items, ImageComponent, radius = "rounded", gap = 2, onNavigate, className, sx }: ExpanseGridProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

  const Card = ({ item, size = "default", featured = false }: { item: any; size?: "default" | "small"; featured?: boolean }) => {
    return (
      <Box
        onClick={() => onNavigate?.(item)}
        component={item.href ? "a" : "div"}
        href={item.href}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: { xs: featured ? 420 : 280, md: featured ? 520 : 320 },
          overflow: "hidden",
          borderRadius: radiusValue,
          isolation: "isolate",
          bgcolor: "background.default",
          cursor: "pointer",
          textDecoration: "none",
          display: "block",
          "& img": { transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), filter 800ms ease", willChange: "transform" },
          "&:hover img": { transform: "scale(1.06)" },
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
          {ImageComponent ? (
            <ImageComponent
              src={item.coverImage}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              component="img"
              src={isMobile && item.mobileCoverImage ? item.mobileCoverImage : item.coverImage}
              alt={item.title}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.72) 100%)",
              transition: "opacity 600ms ease",
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
            p: { xs: 2.5, md: featured ? 4 : 3 },
            color: "#fff",
          }}
        >
          {item.badgeText && (
            <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFF", mb: 0.75 }}>
              {item.badgeText}
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: { xs: featured ? "1.6rem" : "1.15rem", md: featured ? "2.1rem" : "1.25rem" },
              fontWeight: 550,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              mb: 0.5,
            }}
          >
            {item.tagline ?? item.title}
          </Typography>
          {item.description && (
            <Typography
              sx={{ fontSize: "0.85rem", opacity: 0.85, lineHeight: 1.4, maxWidth: 380, display: { xs: featured ? "block" : "none", md: "block" } }}
            >
              {item.description}
            </Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: 1.5, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em" }}>
            EXPLORE {item.title.toUpperCase()} <ArrowRight size={14} />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={className} sx={{ width: "100%", mx: "auto", ...sx }}>
      {/* 1 ITEM */}
      {layout === "single" && <Card item={featured} featured />}
      {/* 2 ITEMS */}
      {layout === "dual" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i) => (
            <Card key={i.id} item={i} />
          ))}
        </Box>
      )}

      {/* 3 ITEMS - 60% + 2 stacked */}
      {layout === "feature-two" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateRows: "1fr 1fr", gap }}>
            {rest.slice(0, 2).map((i) => (
              <Card key={i.id} item={i} size="small" />
            ))}
          </Box>
        </Box>
      )}

      {/* 4 ITEMS - 2x2 */}
      {layout === "quad" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap }}>
          {safeItems.map((i) => (
            <Card key={i.id} item={i} />
          ))}
        </Box>
      )}

      {/* 5 ITEMS - 52% + 2x2 */}
      {layout === "feature-four" && (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, gap }}>
          <Card item={featured} featured />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap }}>
            {rest.slice(0, 4).map((i) => (
              <Card key={i.id} item={i} size="small" />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExpanseGrid;
