"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { VisualViewer } from "../../../src/components/visualViewer/VisualViewer.js";
import type {
  VisualViewerItem,
  VisualViewerRadius,
  VisualViewerNavigation,
  VisualViewerThumbnailPosition,
  VisualViewerObjectFit,
} from "../../../src/components/visualViewer/VisualViewer.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

// ─── Sample items ─────────────────────────────────────────────────────────────

const FASHION_ITEMS: VisualViewerItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    alt: "Black oversized hoodie",
    title: "Oversized Hoodie",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    alt: "White graphic tee",
    title: "Graphic Tee",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?auto=format&fit=crop&w=1200&q=80",
    alt: "Beige cargo pants",
    title: "Cargo Pants",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=1200&q=80",
    alt: "Denim jacket",
    title: "Denim Jacket",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80",
    alt: "Streetwear collection",
    title: "Streetwear Drop",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal white t-shirt",
    title: "Essential White Tee",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    alt: "Sports jacket",
    title: "Track Jacket",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
    alt: "Summer linen shirt",
    title: "Linen Overshirt",
  },
];

const ARCHITECTURE_ITEMS: VisualViewerItem[] = [
  {
    id: "a1",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    alt: "Glass building facade",
    title: "Glass Facade",
  },
  {
    id: "a2",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern interior",
    title: "Interior Space",
  },
  {
    id: "a3",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    alt: "Luxury living room",
    title: "Living Room",
  },
  {
    id: "a4",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    alt: "Minimalist kitchen",
    title: "Kitchen",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const VisualViewerPage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Interactive Playground state
  const [thumbnailPosition, setThumbnailPosition] =
    useState<VisualViewerThumbnailPosition>("auto");
  const [navigation, setNavigation] = useState<VisualViewerNavigation>("arrows");
  const [radius, setRadius] = useState<VisualViewerRadius>("rounded");
  const [objectFit, setObjectFit] = useState<VisualViewerObjectFit>("contain");
  const [loop, setLoop] = useState(true);
  const [zoom, setZoom] = useState(true);
  const [fullscreen, setFullscreen] = useState(true);
  const [swipe, setSwipe] = useState(true);
  const [showRemainingCount, setShowRemainingCount] = useState(true);
  const [maxVisible, setMaxVisible] = useState(5);
  const [thumbnailSize, setThumbnailSize] = useState(80);

  // Controlled index demo state
  const [controlledIndex, setControlledIndex] = useState(0);

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

  return (
    <ComponentPage
      title="VisualViewer"
      description="A zero-dependency, fully accessible product image viewer with thumbnails, swipe, zoom, fullscreen, and keyboard navigation. Designed for e-commerce product pages, editorial galleries, and media-rich layouts."
      category="Media"
      badges={["Gallery", "Zoom", "Fullscreen", "Swipe", "Keyboard"]}
    >
      {/* ============================================================
          1. Interactive Playground
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-playground"
        title="Interactive Playground"
        description="Fully customize thumbnail position, navigation style, zoom, fullscreen, object-fit, radius, and more — live."
        code={`import { VisualViewer } from 'jivico-glass-ui';

<VisualViewer
  items={items}
  thumbnailPosition="${thumbnailPosition}"
  navigation="${navigation}"
  radius="${radius}"
  objectFit="${objectFit}"
  loop={${loop}}
  zoom={${zoom}}
  fullscreen={${fullscreen}}
  swipe={${swipe}}
  maxVisibleThumbnails={${maxVisible}}
  thumbnailSize={${thumbnailSize}}
  showRemainingCount={${showRemainingCount}}
  height={{ xs: "360px", md: "520px" }}
/>`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Controls */}
          <Box sx={controlsBox}>
            <Stack spacing={3}>
              {/* Row 1 */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ alignItems: { md: "flex-start" } }}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={labelSx}>
                    Thumbnail Position
                  </FormLabel>
                  <RadioGroup
                    row
                    value={thumbnailPosition}
                    onChange={(e) =>
                      setThumbnailPosition(
                        e.target.value as VisualViewerThumbnailPosition,
                      )
                    }
                  >
                    {(["auto", "left", "bottom"] as const).map((v) => (
                      <FormControlLabel
                        key={v}
                        value={v}
                        control={<Radio size="small" />}
                        label={v.charAt(0).toUpperCase() + v.slice(1)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={labelSx}>
                    Navigation
                  </FormLabel>
                  <RadioGroup
                    row
                    value={navigation}
                    onChange={(e) =>
                      setNavigation(e.target.value as VisualViewerNavigation)
                    }
                  >
                    {(["arrows", "none"] as const).map((v) => (
                      <FormControlLabel
                        key={v}
                        value={v}
                        control={<Radio size="small" />}
                        label={v.charAt(0).toUpperCase() + v.slice(1)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={labelSx}>
                    Radius
                  </FormLabel>
                  <RadioGroup
                    row
                    value={radius}
                    onChange={(e) =>
                      setRadius(e.target.value as VisualViewerRadius)
                    }
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
              </Stack>

              {/* Row 2 */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{ alignItems: { sm: "flex-end" } }}
              >
                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <FormLabel sx={labelSx}>Object Fit</FormLabel>
                  <Select
                    value={objectFit}
                    onChange={(e) =>
                      setObjectFit(e.target.value as VisualViewerObjectFit)
                    }
                  >
                    <MenuItem value="contain">Contain</MenuItem>
                    <MenuItem value="cover">Cover</MenuItem>
                  </Select>
                </FormControl>

                <Box sx={{ minWidth: 180 }}>
                  <Typography sx={{ ...labelSx, mb: 1 }}>
                    Max Visible Thumbnails: {maxVisible}
                  </Typography>
                  <Slider
                    value={maxVisible}
                    onChange={(_, v) => setMaxVisible(v as number)}
                    min={1}
                    max={8}
                    step={1}
                    marks
                    size="small"
                  />
                </Box>

                <Box sx={{ minWidth: 180 }}>
                  <Typography sx={{ ...labelSx, mb: 1 }}>
                    Thumbnail Size: {thumbnailSize}px
                  </Typography>
                  <Slider
                    value={thumbnailSize}
                    onChange={(_, v) => setThumbnailSize(v as number)}
                    min={48}
                    max={140}
                    step={8}
                    size="small"
                  />
                </Box>
              </Stack>

              {/* Row 3: Toggles */}
              <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                {[
                  { label: "Loop", value: loop, set: setLoop },
                  { label: "Zoom", value: zoom, set: setZoom },
                  { label: "Fullscreen", value: fullscreen, set: setFullscreen },
                  { label: "Swipe", value: swipe, set: setSwipe },
                  {
                    label: "+N Count",
                    value: showRemainingCount,
                    set: setShowRemainingCount,
                  },
                ].map(({ label, value, set }) => (
                  <FormControlLabel
                    key={label}
                    control={
                      <Switch
                        size="small"
                        checked={value}
                        onChange={(e) => set(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {label}
                      </Typography>
                    }
                  />
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* Viewer */}
          <VisualViewer
            items={FASHION_ITEMS}
            thumbnailPosition={thumbnailPosition}
            navigation={navigation}
            radius={radius}
            objectFit={objectFit}
            loop={loop}
            zoom={zoom}
            fullscreen={fullscreen}
            swipe={swipe}
            mouseDrag
            keyboard
            maxVisibleThumbnails={maxVisible}
            thumbnailSize={thumbnailSize}
            showRemainingCount={showRemainingCount}
            height={{ xs: "340px", sm: "440px", md: "540px" }}
          />
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Left Thumbnail Rail — E-Commerce PDP
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-left-thumbnail"
        title="1. Left Thumbnail Rail (E-Commerce PDP)"
        description="The canonical product detail page layout. Vertical thumbnail rail on the left with the main media area occupying the remaining width. Ideal for apparel, furniture, and multi-angle product photography."
        code={`<VisualViewer
  items={productImages}
  thumbnailPosition="left"
  objectFit="contain"
  radius="soft"
  zoom
  fullscreen
  height={{ xs: "380px", md: "560px" }}
/>`}
      >
        <VisualViewer
          items={FASHION_ITEMS}
          thumbnailPosition="left"
          objectFit="contain"
          radius="soft"
          zoom
          fullscreen
          showRemainingCount
          maxVisibleThumbnails={5}
          height={{ xs: "380px", md: "560px" }}
        />
      </DemoBlock>

      {/* ============================================================
          3. Bottom Thumbnail Strip — Immersive Gallery
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-bottom-thumbnail"
        title="2. Bottom Thumbnail Strip (Immersive Gallery)"
        description="Thumbnails float over a dark gradient at the bottom of the image for an immersive, edge-to-edge gallery feel. Ideal for editorial photography, lookbooks, and architectural showcases."
        code={`<VisualViewer
  items={galleryImages}
  thumbnailPosition="bottom"
  objectFit="cover"
  radius="rounded"
  zoom
  fullscreen
  height={{ xs: "320px", md: "480px" }}
/>`}
      >
        <VisualViewer
          items={ARCHITECTURE_ITEMS}
          thumbnailPosition="bottom"
          objectFit="cover"
          radius="rounded"
          zoom
          fullscreen
          thumbnailSize={72}
          height={{ xs: "320px", md: "480px" }}
        />
      </DemoBlock>

      {/* ============================================================
          4. Controlled Mode
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-controlled"
        title="3. Controlled Active Index"
        description="Drive the active image externally — useful when syncing the viewer with a size picker, color swatch, or any other product variant selector. The external buttons below control the active index."
        code={`const [activeIndex, setActiveIndex] = useState(0);

<VisualViewer
  items={items}
  activeIndex={activeIndex}
  onActiveIndexChange={(index) => setActiveIndex(index)}
  thumbnailPosition="left"
  navigation="arrows"
  zoom={false}
  fullscreen={false}
/>`}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          {/* External controls */}
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {FASHION_ITEMS.map((item, index) => (
              <Box
                key={item.id}
                component="button"
                onClick={() => setControlledIndex(index)}
                sx={{
                  width: 48,
                  height: 48,
                  p: 0,
                  border: `2px solid ${
                    index === controlledIndex
                      ? isDark
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(17,17,17,0.8)"
                      : isDark
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(17,17,17,0.12)"
                  }`,
                  borderRadius: 1.5,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform:
                    index === controlledIndex ? "scale(1.08)" : "scale(1)",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Active: <strong>{FASHION_ITEMS[controlledIndex]?.title}</strong> (
            index {controlledIndex})
          </Typography>
          <VisualViewer
            items={FASHION_ITEMS}
            activeIndex={controlledIndex}
            onActiveIndexChange={(index) => setControlledIndex(index)}
            thumbnailPosition="left"
            navigation="arrows"
            zoom={false}
            fullscreen={false}
            thumbnailSize={72}
            height={{ xs: "320px", md: "480px" }}
          />
        </Stack>
      </DemoBlock>

      {/* ============================================================
          5. Minimal — No Thumbnails, No Arrows
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-minimal"
        title="4. Minimal — Swipe Only"
        description="Strip away all chrome for a clean, swipe-first experience. Ideal for mobile-first layouts, story-like flows, and inline product carousels."
        code={`<VisualViewer
  items={items}
  thumbnailPosition="bottom"
  navigation="none"
  showFullscreenButton={false}
  showZoomButton={false}
  maxVisibleThumbnails={4}
  thumbnailSize={56}
  radius="soft"
  objectFit="cover"
  height="300px"
/>`}
      >
        <Box sx={{ maxWidth: 480, mx: "auto", width: "100%" }}>
          <VisualViewer
            items={FASHION_ITEMS.slice(0, 4)}
            thumbnailPosition="bottom"
            navigation="none"
            showFullscreenButton={false}
            showZoomButton={false}
            maxVisibleThumbnails={4}
            thumbnailSize={56}
            radius="soft"
            objectFit="cover"
            height={{ xs: "280px", md: "340px" }}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          6. No Thumbnails — Arrows Only
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-arrows-only"
        title="5. Arrows Only — No Thumbnail Rail"
        description="A pure arrow-navigation layout that uses the full container width for media. Pairs well with hero sections and split layouts where thumbnail rails would eat too much space."
        code={`<VisualViewer
  items={items}
  thumbnailPosition="bottom"  // bottom with maxVisibleThumbnails={0}
  navigation="arrows"
  maxVisibleThumbnails={0}
  objectFit="cover"
  radius="rounded"
  height={{ xs: "260px", md: "420px" }}
/>`}
      >
        <VisualViewer
          items={ARCHITECTURE_ITEMS}
          thumbnailPosition="bottom"
          navigation="arrows"
          maxVisibleThumbnails={0}
          showRemainingCount={false}
          objectFit="cover"
          radius="rounded"
          zoom
          fullscreen
          height={{ xs: "260px", md: "420px" }}
        />
      </DemoBlock>

      {/* ============================================================
          7. Next.js Integration
      ============================================================ */}

      <DemoBlock
        id="visual-viewer-nextjs"
        title="6. Next.js Integration (renderImage)"
        description="Use the renderImage prop to inject a Next.js <Image> component for automatic image optimization, LCP improvements, and CDN-based resizing."
        code={`import Image from "next/image";

<VisualViewer
  items={product.images}
  renderImage={({ item, isFullscreen }) => (
    <Image
      src={item.src}
      alt={item.alt ?? ""}
      fill
      sizes="(max-width: 768px) 100vw, 60vw"
      priority={isFullscreen}
      style={{ objectFit: "contain" }}
    />
  )}
  thumbnailPosition="left"
  zoom
  fullscreen
  height={{ xs: "380px", md: "560px" }}
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
            sx={{ display: "block", mb: 1, fontWeight: 700 }}
          >
            Architecture notes
          </Typography>
          <Stack spacing={1.5}>
            {[
              {
                title: "renderImage prop",
                desc: "Receives { item, index, active, isThumbnail, isFullscreen } — use it to inject next/image with fill, sizes, and priority.",
              },
              {
                title: "renderThumbnail prop",
                desc: "Same context object, but for the thumbnail slots. Lets you use a lower-quality thumbnail source automatically.",
              },
              {
                title: "thumbnailSrc on items",
                desc: 'Set item.thumbnailSrc to a smaller image URL (e.g. "?w=200"). Falls back to item.src automatically.',
              },
              {
                title: "Controlled vs Uncontrolled",
                desc: "Pass activeIndex + onActiveIndexChange for controlled mode (colour swatch sync), or rely on defaultActiveIndex for self-managed state.",
              },
            ].map(({ title, desc }) => (
              <Box key={title}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, mb: 0.25 }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65 }}
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

export default VisualViewerPage;
