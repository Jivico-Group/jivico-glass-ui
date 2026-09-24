"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Slider,
  Switch,
  Tooltip,
} from "@mui/material";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Gallery } from "../../../src/components/gallary/Gallery.js";
import type {
  GalleryColumns,
  GalleryRadius,
  GalleryImageFit,
} from "../../../src/components/gallary/Gallery.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

// ─── Mock Data ────────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
}

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Oversized Drop Tee",
    category: "ORIGINALS",
    price: 899,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    badge: "SALE",
    rating: 4.8,
  },
  {
    id: "p2",
    name: "Graphic Wave Hoodie",
    category: "STUDIO",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
    rating: 4.6,
  },
  {
    id: "p3",
    name: "Cargo Wide Leg",
    category: "ORIGINALS",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1588117305388-c2631a279f82?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: "p4",
    name: "Washed Denim Jacket",
    category: "FREESTYLE",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=800&q=80",
    badge: "BESTSELLER",
    rating: 4.9,
  },
  {
    id: "p5",
    name: "Streetwear Parka",
    category: "ORIGINALS",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: "p6",
    name: "Essential White Tee",
    category: "STUDIO",
    price: 599,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=800&q=80",
    badge: "SALE",
    rating: 4.5,
  },
  {
    id: "p7",
    name: "Track Jacket",
    category: "FREESTYLE",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
    rating: 4.3,
  },
  {
    id: "p8",
    name: "Linen Overshirt",
    category: "ORIGINALS",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
];

const ARCHITECTURE: { id: string; src: string; label: string }[] = [
  {
    id: "a1",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    label: "Glass Facade",
  },
  {
    id: "a2",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    label: "Interior",
  },
  {
    id: "a3",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    label: "Living Room",
  },
  {
    id: "a4",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    label: "Kitchen",
  },
  {
    id: "a5",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    label: "Dining",
  },
  {
    id: "a6",
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    label: "Bedroom",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const GalleryPage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Playground state
  const [columns, setColumns] = useState<GalleryColumns>({
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  const [gap, setGap] = useState(2);
  const [radius, setRadius] = useState<GalleryRadius>("soft");
  const [imageFit, setImageFit] = useState<GalleryImageFit>("cover");
  const [aspectRatio, setAspectRatio] = useState("4 / 5");
  const [showOverlay, setShowOverlay] = useState(true);
  const [showBlock, setShowBlock] = useState(true);

  // Wishlist demo
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const controlsBox = {
    p: 3,
    borderRadius: "20px",
    bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
  };

  const labelSx = {
    fontSize: "0.72rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    mb: 0.5,
  };

  const badgeColor: Record<string, string> = {
    SALE: "#E53935",
    NEW: "#43A047",
    BESTSELLER: "#FB8C00",
  };

  return (
    <ComponentPage
      title="Gallery"
      description="A generic, fully typed responsive grid layout for any collection of items. Provides three independent rendering layers — image, overlay, and block — so applications stay in full control of their content while Gallery handles the grid, responsive columns, radius, gap, and aspect ratios."
      category="Layout"
      badges={["Grid", "Responsive", "Generic", "E-Commerce"]}
    >
      {/* ============================================================
          1. Interactive Playground
      ============================================================ */}

      <DemoBlock
        id="gallery-playground"
        title="Interactive Playground"
        description="Customize columns, gap, radius, aspect ratio, object-fit, and toggle the overlay and block render layers live."
        code={`import { Gallery } from 'jivico-glass-ui';

<Gallery
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getImageAlt={(item) => item.name}
  columns={{ xs: ${columns.xs}, sm: ${columns.sm}, md: ${columns.md}, lg: ${columns.lg} }}
  gap={${gap}}
  imageAspectRatio="${aspectRatio}"
  radius="${radius}"
  imageFit="${imageFit}"
/>`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Controls */}
          <Box sx={controlsBox}>
            <Stack spacing={3}>
              {/* Row 1: columns */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                {(["xs", "sm", "md", "lg"] as const).map((bp) => (
                  <Box key={bp} sx={{ minWidth: 120 }}>
                    <Typography sx={{ ...labelSx, mb: 1 }}>
                      Cols ({bp.toUpperCase()}): {columns[bp]}
                    </Typography>
                    <Slider
                      value={columns[bp] ?? 2}
                      onChange={(_, v) =>
                        setColumns((prev) => ({ ...prev, [bp]: v as number }))
                      }
                      min={1}
                      max={6}
                      step={1}
                      marks
                      size="small"
                    />
                  </Box>
                ))}
              </Stack>

              {/* Row 2: radius + fit + ratio + gap */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{ alignItems: "flex-start" }}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={labelSx}>
                    Radius
                  </FormLabel>
                  <RadioGroup
                    row
                    value={radius}
                    onChange={(e) => setRadius(e.target.value as GalleryRadius)}
                  >
                    {(["square", "rounded", "soft"] as const).map((v) => (
                      <FormControlLabel
                        key={v}
                        value={v}
                        control={<Radio size="small" />}
                        label={v.charAt(0).toUpperCase() + v.slice(1)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 140 }}>
                  <FormLabel sx={labelSx}>Aspect Ratio</FormLabel>
                  <Select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                  >
                    <MenuItem value="1 / 1">Square (1:1)</MenuItem>
                    <MenuItem value="4 / 5">Portrait (4:5)</MenuItem>
                    <MenuItem value="3 / 4">Tall (3:4)</MenuItem>
                    <MenuItem value="16 / 9">Wide (16:9)</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 130 }}>
                  <FormLabel sx={labelSx}>Image Fit</FormLabel>
                  <Select
                    value={imageFit}
                    onChange={(e) =>
                      setImageFit(e.target.value as GalleryImageFit)
                    }
                  >
                    <MenuItem value="cover">Cover</MenuItem>
                    <MenuItem value="contain">Contain</MenuItem>
                  </Select>
                </FormControl>

                <Box sx={{ minWidth: 140 }}>
                  <Typography sx={{ ...labelSx, mb: 1 }}>Gap: {gap}</Typography>
                  <Slider
                    value={gap}
                    onChange={(_, v) => setGap(v as number)}
                    min={0}
                    max={6}
                    step={0.5}
                    size="small"
                  />
                </Box>
              </Stack>

              {/* Row 3: layer toggles */}
              <Stack direction="row" spacing={3}>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={showOverlay}
                      onChange={(e) => setShowOverlay(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Overlay
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={showBlock}
                      onChange={(e) => setShowBlock(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Block
                    </Typography>
                  }
                />
              </Stack>
            </Stack>
          </Box>

          {/* Gallery */}
          <Gallery
            items={PRODUCTS}
            getKey={(item) => item.id}
            getImage={(item) => item.image}
            getImageAlt={(item) => item.name}
            columns={columns}
            gap={gap}
            imageAspectRatio={aspectRatio}
            radius={radius}
            imageFit={imageFit}
            renderOverlay={
              showOverlay
                ? ({ item }) => (
                    <>
                      {item.badge && (
                        <Box sx={{ position: "absolute", top: 10, left: 10 }}>
                          <Chip
                            label={item.badge}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: "0.6rem",
                              fontWeight: 700,
                              bgcolor: badgeColor[item.badge] ?? "#333",
                              color: "#fff",
                              "& .MuiChip-label": { px: 0.75 },
                            }}
                          />
                        </Box>
                      )}
                      <Tooltip title="Add to wishlist" placement="left">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setWishlist((prev) => {
                              const next = new Set(prev);
                              if (next.has(item.id)) next.delete(item.id);
                              else next.add(item.id);
                              return next;
                            });
                          }}
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            width: 32,
                            height: 32,
                            bgcolor: "rgba(0,0,0,0.35)",
                            backdropFilter: "blur(8px)",
                            color: wishlist.has(item.id) ? "#EF5350" : "#fff",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
                          }}
                        >
                          <Heart
                            size={14}
                            fill={
                              wishlist.has(item.id) ? "currentColor" : "none"
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    </>
                  )
                : undefined
            }
            renderBlock={
              showBlock
                ? ({ item }) => (
                    <Box sx={{ pt: 1, pb: 0.5, px: 0.25 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          fontSize: "0.6rem",
                          color: "text.secondary",
                          lineHeight: 1,
                        }}
                      >
                        {item.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          lineHeight: 1.3,
                          mt: 0.25,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 0.5, alignItems: "center" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 700, fontSize: "0.88rem" }}
                        >
                          ₹{item.price.toLocaleString()}
                        </Typography>
                        {item.originalPrice && (
                          <Typography
                            variant="caption"
                            sx={{
                              textDecoration: "line-through",
                              color: "text.secondary",
                            }}
                          >
                            ₹{item.originalPrice.toLocaleString()}
                          </Typography>
                        )}
                      </Stack>
                    </Box>
                  )
                : undefined
            }
          />
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Simple Image Grid — No Block
      ============================================================ */}

      <DemoBlock
        id="gallery-image-only"
        title="1. Image-Only Grid"
        description="The most minimal setup — just images in a responsive grid. No block, no overlay. Uses getImage / getImageAlt for zero boilerplate."
        code={`<Gallery
  items={photos}
  getKey={(item) => item.id}
  getImage={(item) => item.src}
  getImageAlt={(item) => item.label}
  columns={{ xs: 2, sm: 3, md: 3, lg: 3 }}
  gap={1.5}
  imageAspectRatio="4 / 5"
  radius="square"
  imageFit="cover"
/>`}
      >
        <Gallery
          items={ARCHITECTURE}
          getKey={(item) => item.id}
          getImage={(item) => item.src}
          getImageAlt={(item) => item.label}
          columns={{ xs: 2, sm: 3, md: 3, lg: 3 }}
          gap={1.5}
          imageAspectRatio="4 / 5"
          radius="square"
          imageFit="cover"
        />
      </DemoBlock>

      {/* ============================================================
          3. Full E-Commerce Product Card
      ============================================================ */}

      <DemoBlock
        id="gallery-ecommerce"
        title="2. E-Commerce Product Card (Image + Overlay + Block)"
        description="The canonical Jivico product grid layout. Badge chips and wishlist button sit in the overlay layer; product name, category, and price live in the block layer below. Gallery handles zero business logic."
        code={`<Gallery
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getImageAlt={(item) => item.name}
  columns={{ xs: 2, md: 3, lg: 4 }}
  imageAspectRatio="4 / 5"
  radius="soft"
  renderOverlay={({ item }) => (
    <>
      <Chip label={item.badge} ... />
      <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
        <Heart size={14} />
      </IconButton>
    </>
  )}
  renderBlock={({ item }) => (
    <Box sx={{ pt: 1 }}>
      <Typography variant="overline">{item.category}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.name}</Typography>
      <Typography>₹{item.price}</Typography>
    </Box>
  )}
/>`}
      >
        <Gallery
          items={PRODUCTS}
          getKey={(item) => item.id}
          getImage={(item) => item.image}
          getImageAlt={(item) => item.name}
          columns={{ xs: 2, md: 3, lg: 4 }}
          gap={2}
          imageAspectRatio="4 / 5"
          radius="soft"
          imageFit="cover"
          renderOverlay={({ item }) => (
            <>
              {item.badge && (
                <Box sx={{ position: "absolute", top: 10, left: 10 }}>
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      bgcolor: badgeColor[item.badge] ?? "#333",
                      color: "#fff",
                      "& .MuiChip-label": { px: 0.75 },
                    }}
                  />
                </Box>
              )}
              <Stack
                direction="row"
                spacing={0.5}
                sx={{ position: "absolute", bottom: 10, right: 10 }}
              >
                <IconButton
                  size="small"
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                  }}
                >
                  <Eye size={13} />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                  }}
                >
                  <ShoppingBag size={13} />
                </IconButton>
              </Stack>
            </>
          )}
          renderBlock={({ item }) => (
            <Box sx={{ pt: 1, pb: 0.5 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: "0.6rem",
                  color: "text.secondary",
                  lineHeight: 1,
                }}
              >
                {item.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  mt: 0.25,
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </Typography>
              <Stack
                direction="row"
                spacing={0.75}
                sx={{ mt: 0.5, alignItems: "center" }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>
                  ₹{item.price.toLocaleString()}
                </Typography>
                {item.originalPrice && (
                  <Typography
                    variant="caption"
                    sx={{
                      textDecoration: "line-through",
                      color: "text.secondary",
                    }}
                  >
                    ₹{item.originalPrice.toLocaleString()}
                  </Typography>
                )}
              </Stack>
              <Stack
                direction="row"
                spacing={0.25}
                sx={{ mt: 0.5, alignItems: "center" }}
              >
                <Star size={11} fill="currentColor" color="#FFA726" />
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                >
                  {item.rating}
                </Typography>
              </Stack>
            </Box>
          )}
        />
      </DemoBlock>

      {/* ============================================================
          4. renderItem — Full Custom Card
      ============================================================ */}

      <DemoBlock
        id="gallery-render-item"
        title="3. Full Custom Card via renderItem"
        description="When you need complete control over each cell — including layout, interaction, and animation — use renderItem to bypass the built-in image/overlay/block structure entirely."
        code={`<Gallery
  items={products}
  columns={{ xs: 1, sm: 2, md: 3 }}
  gap={2.5}
  renderItem={({ item }) => <ProductCard product={item} />}
/>`}
      >
        <Gallery
          items={PRODUCTS.slice(0, 6)}
          getKey={(item) => item.id}
          columns={{ xs: 1, sm: 2, md: 3 }}
          gap={2.5}
          renderItem={({ item }) => (
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
                bgcolor: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(17,17,17,0.02)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: isDark
                    ? "0 12px 32px rgba(0,0,0,0.4)"
                    : "0 12px 32px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "3 / 2",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      height: 20,
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      bgcolor: badgeColor[item.badge] ?? "#333",
                      color: "#fff",
                      "& .MuiChip-label": { px: 0.75 },
                    }}
                  />
                )}
              </Box>
              <Box sx={{ p: 1.5 }}>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{ fontSize: "0.6rem", color: "text.secondary" }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={0.25}
                    sx={{ alignItems: "center", mt: 1 }}
                  >
                    <Star size={11} fill="currentColor" color="#FFA726" />
                    <Typography variant="caption">{item.rating}</Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={0.75}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>
                      ₹{item.price.toLocaleString()}
                    </Typography>
                    {item.originalPrice && (
                      <Typography
                        variant="caption"
                        sx={{
                          textDecoration: "line-through",
                          color: "text.secondary",
                        }}
                      >
                        ₹{item.originalPrice.toLocaleString()}
                      </Typography>
                    )}
                  </Stack>
                  <IconButton
                    size="small"
                    sx={{
                      width: 32,
                      height: 32,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.15)"}`,
                    }}
                  >
                    <ShoppingBag size={14} />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          )}
        />
      </DemoBlock>

      {/* ============================================================
          5. Masonry-like Square Grid
      ============================================================ */}

      <DemoBlock
        id="gallery-square"
        title="4. Square Grid (1:1)"
        description="A tight square grid works well for avatar galleries, lookbooks, and minimal fashion editorial layouts."
        code={`<Gallery
  items={photos}
  getImage={(item) => item.src}
  columns={{ xs: 3, sm: 4, md: 5, lg: 6 }}
  gap={0.5}
  imageAspectRatio="1 / 1"
  radius="square"
  imageFit="cover"
/>`}
      >
        <Gallery
          items={[...PRODUCTS, ...PRODUCTS.slice(0, 4)]}
          getKey={(item, index) => `${item.id}-${index}`}
          getImage={(item) => item.image}
          getImageAlt={(item) => item.name}
          columns={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          gap={0.5}
          imageAspectRatio="1 / 1"
          radius="square"
          imageFit="cover"
        />
      </DemoBlock>

      {/* ============================================================
          6. Next.js Integration Note
      ============================================================ */}

      <DemoBlock
        id="gallery-nextjs"
        title="5. Next.js Image Integration"
        description="Gallery is fully framework-agnostic. Pass a renderImage function to inject next/image with fill, sizes, and priority — Gallery handles the rest."
        code={`import Image from "next/image";

<Gallery
  items={products}
  getKey={(item) => item.id}
  columns={{ xs: 2, md: 3, lg: 4 }}
  imageAspectRatio="4 / 5"
  radius="soft"
  renderImage={({ item }) => (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="
        (max-width: 600px) 50vw,
        (max-width: 1200px) 33vw,
        25vw
      "
      style={{ objectFit: "cover" }}
    />
  )}
  renderOverlay={({ item }) => <WishlistButton product={item} />}
  renderBlock={({ item }) => <ProductCardInfo product={item} />}
/>`}
      >
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(17,17,17,0.10)"}`,
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: "block", mb: 1.5, fontWeight: 700 }}
          >
            Rendering Layers — Architecture
          </Typography>
          <Stack spacing={1.5}>
            {[
              {
                title: "getImage / getImageAlt",
                desc: "Fastest setup — Gallery renders a native <img>. No renderImage needed.",
              },
              {
                title: "renderImage({ item, index, src, alt })",
                desc: "Inject next/image with fill + sizes. Gallery wraps it in the correct aspect-ratio container.",
              },
              {
                title: "renderOverlay({ item, index, src, alt })",
                desc: "Renders over the image with position: absolute inset 0. Use for badges, wishlist, quick-add.",
              },
              {
                title: "renderBlock({ item, index })",
                desc: "Renders below the image in normal document flow. Use for name, price, ratings, CTA.",
              },
              {
                title: "renderItem({ item, index })",
                desc: "Full override — bypasses image/overlay/block. Use when you need a completely custom card layout.",
              },
            ].map(({ title, desc }) => (
              <Box key={title}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "monospace",
                    fontSize: "0.78rem",
                    mb: 0.25,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, fontSize: "0.8rem" }}
                >
                  {desc}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};

export default GalleryPage;
