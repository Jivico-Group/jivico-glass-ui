"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import "../../../src/theme/augmentations.d.ts";
import { ExpanseGrid } from "../../../src/components/expanseGrid/ExpanseGrid.js";
import type { ExpanseItem, ExpanseGridProps } from "../../../src/components/expanseGrid/ExpanseGrid.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

// Mock Expanse Items with premium fashion & design imagery
const SAMPLE_EXPANSE_ITEMS: ExpanseItem[] = [
  {
    id: "originals",
    title: "Originals",
    tagline: "Crafted Without Compromise",
    badgeText: "JIVICO ORIGINALS",
    description: "Signature luxury heavyweight streetwear & capsule drops engineered with 240+ GSM custom textiles.",
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
    mobileCoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    href: "#originals",
    isFeatured: true,
  },
  {
    id: "freestyle",
    title: "Freestyle",
    tagline: "Your Canvas, Unlimited Expression",
    badgeText: "3D STUDIO ENGINE",
    description: "Custom print-on-demand studio with live 3D mockup previews and zero minimum order restrictions.",
    coverImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=85",
    mobileCoverImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=85",
    href: "#freestyle",
  },
  {
    id: "lehengas",
    title: "Lehengas",
    tagline: "Timeless Heritage, Modern Grandeur",
    badgeText: "HAUTE COUTURE",
    description: "Luxury bridal and heritage ethnic couture handcrafted by master artisans across India.",
    coverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85",
    mobileCoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85",
    href: "#lehengas",
  },
  {
    id: "ethinix",
    title: "Ethinix",
    tagline: "Everyday Ethnic, Refined Aesthetics",
    badgeText: "FUSION SILHOUETTES",
    description: "Contemporary silhouettes blending structured streetwear tailoring with rich Indian motifs.",
    coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    mobileCoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
    href: "#ethinix",
  },
  {
    id: "pets",
    title: "Pets",
    tagline: "Canine & Feline Luxury Loungewear",
    badgeText: "COMPANION WEAR",
    description: "Waterproof, hyper-soft fleece jackets and bespoke hardware collars for modern pets.",
    coverImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85",
    mobileCoverImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85",
    href: "#pets",
  },
];

export const ExpanseGridPage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Interactive Playground State
  const [itemCount, setItemCount] = useState<number>(5);
  const [radius, setRadius] = useState<ExpanseGridProps["radius"]>("rounded");
  const [gap, setGap] = useState<number>(2);
  const [customFeaturedIndex, setCustomFeaturedIndex] = useState<number>(0);

  // Computed playground items
  const playgroundItems: ExpanseItem[] = useMemo(() => {
    return SAMPLE_EXPANSE_ITEMS.slice(0, itemCount).map((item, idx) => ({
      ...item,
      isFeatured: idx === customFeaturedIndex,
    }));
  }, [itemCount, customFeaturedIndex]);

  return (
    <ComponentPage
      title="ExpanseGrid"
      description="Adaptive editorial layout engine supporting 1, 2, 3, 4, and 5 item configurations with automatic responsive bento sizing, parallax image zoom, gradient glass scrim, and micro-interactions."
    >
      {/* ─── INTERACTIVE PLAYGROUND ─── */}
      <DemoBlock
        id="interactive-expanse-grid"
        title="Interactive Playground"
        description="Select item counts (1 to 5), change corner radius, gap spacing, and toggle the featured hero card."
        code={`<ExpanseGrid
  items={items.slice(0, ${itemCount})}
  radius="${radius}"
  gap={${gap}}
  onNavigate={(item) => router.push(item.href)}
/>`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Controls Panel */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: "16px",
              bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(17, 17, 17, 0.02)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"}`,
            }}
          >
            <Stack spacing={2.5}>
              {/* Item Count Selection */}
              <FormControl size="small">
                <FormLabel sx={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                  Item Count & Responsive Layout
                </FormLabel>
                <RadioGroup
                  row
                  value={itemCount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setItemCount(val);
                    if (customFeaturedIndex >= val) setCustomFeaturedIndex(0);
                  }}
                >
                  {[1, 2, 3, 4, 5].map((count) => {
                    const labels: Record<number, string> = {
                      1: "1 (Single Hero)",
                      2: "2 (Dual 50/50)",
                      3: "3 (Feature + 2 Stacked)",
                      4: "4 (Quad 2x2)",
                      5: "5 (Feature + 4 Grid)",
                    };
                    return (
                      <FormControlLabel
                        key={count}
                        value={count}
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">{labels[count]}</Typography>}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center" }}>
                {/* Corner Radius */}
                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <FormLabel sx={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                    Corner Radius
                  </FormLabel>
                  <Select
                    value={radius}
                    onChange={(e) => setRadius(e.target.value as any)}
                    size="small"
                  >
                    <MenuItem value="square">Square (0px)</MenuItem>
                    <MenuItem value="soft">Soft (14px)</MenuItem>
                    <MenuItem value="rounded">Rounded (16px)</MenuItem>
                  </Select>
                </FormControl>

                {/* Grid Gap */}
                <Box sx={{ minWidth: 180 }}>
                  <FormLabel sx={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                    Grid Gap: {gap * 8}px ({gap})
                  </FormLabel>
                  <Slider
                    value={gap}
                    min={1}
                    max={4}
                    step={0.5}
                    valueLabelDisplay="auto"
                    onChange={(_, val) => setGap(val as number)}
                    size="small"
                  />
                </Box>

                {/* Featured Card Selector */}
                {itemCount > 1 && (
                  <FormControl size="small" sx={{ minWidth: 180 }}>
                    <FormLabel sx={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                      Anchor Featured Card
                    </FormLabel>
                    <Select
                      value={customFeaturedIndex}
                      onChange={(e) => setCustomFeaturedIndex(Number(e.target.value))}
                      size="small"
                    >
                      {SAMPLE_EXPANSE_ITEMS.slice(0, itemCount).map((item, idx) => (
                        <MenuItem key={item.id} value={idx}>
                          Card {idx + 1}: {item.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Box>
            </Stack>
          </Box>

          <Box sx={{ width: "100%", py: 1 }}>
            <ExpanseGrid
              items={playgroundItems}
              radius={radius}
              gap={gap}
              onNavigate={(item) => console.log("Navigate to:", item)}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ─── 1. SINGLE HERO LAYOUT (1 ITEM) ─── */}
      <DemoBlock
        id="single-layout"
        title="1. Single Item (Full Editorial Banner)"
        description="Ideal for focused promotional drops, solo seasonal capsules, or single-vertical storefront hero takeovers."
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <ExpanseGrid items={SAMPLE_EXPANSE_ITEMS.slice(0, 1)} />
        </Box>
      </DemoBlock>

      {/* ─── 2. DUAL LAYOUT (2 ITEMS) ─── */}
      <DemoBlock
        id="dual-layout"
        title="2. Dual Items (Balanced 50/50 Split)"
        description="Clean side-by-side comparison grid on desktop, gracefully collapsing to stacked cards on mobile devices."
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <ExpanseGrid items={SAMPLE_EXPANSE_ITEMS.slice(0, 2)} />
        </Box>
      </DemoBlock>

      {/* ─── 3. FEATURE-TWO LAYOUT (3 ITEMS) ─── */}
      <DemoBlock
        id="feature-two-layout"
        title="3. Three Items (60% Hero Feature + 2 Stacked Cards)"
        description="Asymmetrical bento hierarchy highlighting the primary anchor vertical alongside two complementary sub-categories."
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <ExpanseGrid items={SAMPLE_EXPANSE_ITEMS.slice(0, 3)} />
        </Box>
      </DemoBlock>

      {/* ─── 4. QUAD LAYOUT (4 ITEMS) ─── */}
      <DemoBlock
        id="quad-layout"
        title="4. Four Items (2x2 Balanced Matrix)"
        description="Perfect for four commercial pillars (e.g. Originals, Freestyle, Lehengas, Ethinix) with uniform visual weight."
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <ExpanseGrid items={SAMPLE_EXPANSE_ITEMS.slice(0, 4)} />
        </Box>
      </DemoBlock>

      {/* ─── 5. FEATURE-FOUR LAYOUT (5 ITEMS) ─── */}
      <DemoBlock
        id="feature-four-layout"
        title="5. Five Items (Dominant Anchor Hero + 2x2 Subgrid)"
        description="Flagship 5-item showcase giving 52% proportional weight to the featured hero card and 48% to a four-card secondary grid."
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <ExpanseGrid items={SAMPLE_EXPANSE_ITEMS.slice(0, 5)} />
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};

export default ExpanseGridPage;
