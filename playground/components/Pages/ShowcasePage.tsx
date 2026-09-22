import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";

import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Showcase } from "../../../src/components/showcase/Showcase.js";
import type {
  ShowcaseItem,
  ShowcaseVariant,
  ShowcaseSize,
  ShowcaseTransition,
  ShowcaseNavigation,
} from "../../../src/components/showcase/Showcase.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

// Mock Showcase Items
const heroShowcaseItems: ShowcaseItem[] = [
  {
    id: "originals",
    media: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
      alt: "Originals Collection",
    },
    eyebrow: "STUDIO EXCLUSIVE",
    title: "Originals by Studio",
    description:
      "Limited-edition luxury glassmorphic collections. Crafted with physics, designed for perfection.",
    action: {
      label: "Discover Originals",
      href: "#originals",
    },
    sideLabel: "FALL / WINTER 2026",
  },
  {
    id: "freestyle",
    media: {
      src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80",
      alt: "Freestyle Designer",
    },
    eyebrow: "DESIGN STUDIO",
    title: "Create Your Freestyle",
    description:
      "Upload your artwork, pick your canvas, and print 1-of-1 pieces on 280 GSM heavyweight cotton.",
    action: {
      label: "Explore Freestyle",
      href: "#freestyle",
    },
    sideLabel: "CUSTOM BUILDER",
  },
  {
    id: "liquid-glass",
    media: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      alt: "Liquid Glass Architecture",
    },
    eyebrow: "MATERIAL UI V9",
    title: "Liquid Glass System",
    description:
      "Real-time backdrop blur filters with ambient dynamic lighting for modern React interfaces.",
    action: {
      label: "View Documentation",
      href: "#setup",
    },
    sideLabel: "V0.1.1 RELEASE",
  },
];

// Minimal Image-Only Items (No text, title, or buttons)
const imageOnlyItems: ShowcaseItem[] = [
  {
    id: "img-1",
    media: {
      src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract Geometry 1",
    },
    title: "", // Empty for pure image mode
  },
  {
    id: "img-2",
    media: {
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract Geometry 2",
    },
    title: "",
  },
  {
    id: "img-3",
    media: {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract Beach Vista",
    },
    title: "",
  },
];

// Title & Description Only Items (No eyebrow or CTA buttons)
const titleDescItems: ShowcaseItem[] = [
  {
    id: "td-1",
    media: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Microchip Hardware",
    },
    title: "Next-Gen Performance",
    description:
      "Zero layout shift, 60 FPS transitions, and native browser hardware acceleration.",
  },
  {
    id: "td-2",
    media: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Global Data Network",
    },
    title: "Global Distribution",
    description:
      "Seamlessly distributed assets optimized for ultra-fast CDN response times.",
  },
];

export const ShowcasePage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Interactive Playground Controls
  const [variant, setVariant] = useState<ShowcaseVariant>("editorial");
  const [size, setSize] = useState<ShowcaseSize>("hero");
  const [transition, setTransition] = useState<ShowcaseTransition>("cinematic");
  const [navigation, setNavigation] = useState<ShowcaseNavigation>("vertical");
  const [autoplay, setAutoplay] = useState(true);
  const [showArrows, setShowArrows] = useState(true);
  const [showProgress, setShowProgress] = useState(true);
  const [interval, setInterval] = useState(5000);

  return (
    <ComponentPage
      title="Showcase Carousel Component"
      description="A high-performance, cinematic glassmorphic slider/carousel primitive with touch swipe, vertical/dot navigation, autoplay progress timers, and versatile layout modes."
      category="Navigation"
      badges={[
        "<Showcase />",
        "Cinematic & Fade",
        "Touch Swipe",
        "Keyboard Nav",
      ]}
    >
      {/* 1. Interactive Showcase Playground */}
      <DemoBlock
        id="interactive-showcase"
        title="Interactive Showcase Playground"
        description="Customize variant, size, transition mode, navigation style, and autoplay controls live."
        code={`import { Showcase, type ShowcaseItem } from 'jivico-glass-ui';

              // Define your slider items array
              const items: ShowcaseItem[] = [
                {
                  id: "originals",
                  media: {
                    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600",
                    alt: "Originals Collection",
                    mobileSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
                  },
                  eyebrow: "STUDIO EXCLUSIVE",
                  title: "Originals by Studio",
                  description: "Limited-edition luxury glassmorphic collections.",
                  action: {
                    label: "Discover Originals",
                    href: "/originals",
                  },
                  sideLabel: "FALL / WINTER 2026",
                },
                {
                  id: "freestyle",
                  media: {
                    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600",
                    alt: "Freestyle Designer",
                  },
                  eyebrow: "DESIGN STUDIO",
                  title: "Create Your Freestyle",
                  description: "Upload your artwork and print 1-of-1 pieces.",
                  action: {
                    label: "Explore Freestyle",
                    href: "/freestyle",
                  },
                },
              ];

              // Render Showcase component
              <Showcase
                items={items}
                variant="${variant}"
                size="${size}"
                transition="${transition}"
                navigation="${navigation}"
                autoplay={${autoplay}}
                interval={${interval}}
                showArrows={${showArrows}}
                showProgress={${showProgress}}
              />`}
      >
        <Stack spacing={3}>
          {/* Controls Bar */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: "18px",
              bgcolor: isDark
                ? "rgba(255, 255, 255, 0.04)"
                : "rgba(17, 17, 17, 0.03)",
              border: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.1)"
              }`,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Variant Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, minWidth: 90 }}
              >
                Variant:
              </Typography>
              {(["editorial", "minimal", "glass"] as ShowcaseVariant[]).map(
                (v) => (
                  <Button
                    key={v}
                    size="small"
                    variant={variant === v ? "contained" : "outlined"}
                    color="accent"
                    onClick={() => setVariant(v)}
                  >
                    {v}
                  </Button>
                ),
              )}
            </Stack>

            {/* Size Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, minWidth: 90 }}
              >
                Size:
              </Typography>
              {(["small", "medium", "large", "hero"] as ShowcaseSize[]).map(
                (s) => (
                  <Button
                    key={s}
                    size="small"
                    variant={size === s ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </Button>
                ),
              )}
            </Stack>

            {/* Transition Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, minWidth: 90 }}
              >
                Transition:
              </Typography>
              {(["cinematic", "fade", "slide"] as ShowcaseTransition[]).map(
                (t) => (
                  <Button
                    key={t}
                    size="small"
                    variant={transition === t ? "contained" : "outlined"}
                    color="secondary"
                    onClick={() => setTransition(t)}
                  >
                    {t}
                  </Button>
                ),
              )}
            </Stack>

            {/* Navigation Style Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, minWidth: 90 }}
              >
                Navigation:
              </Typography>
              {(["vertical", "dots", "none"] as ShowcaseNavigation[]).map(
                (n) => (
                  <Button
                    key={n}
                    size="small"
                    variant={navigation === n ? "contained" : "outlined"}
                    color="accent"
                    onClick={() => setNavigation(n)}
                  >
                    {n}
                  </Button>
                ),
              )}
            </Stack>

            {/* Boolean Toggles */}
            <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", pt: 1 }}>
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={autoplay}
                    onChange={(e) => setAutoplay(e.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Autoplay
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={showArrows}
                    onChange={(e) => setShowArrows(e.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Arrows
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={showProgress}
                    onChange={(e) => setShowProgress(e.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Progress Bar
                  </Typography>
                }
              />
            </Stack>
          </Box>

          {/* Render Active Showcase */}
          <Box sx={{ width: "100%", borderRadius: "24px", overflow: "hidden" }}>
            <Showcase
              items={heroShowcaseItems}
              variant={variant}
              size={size}
              transition={transition}
              navigation={navigation}
              autoplay={autoplay}
              interval={interval}
              showArrows={showArrows}
              showProgress={showProgress}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* 2. Pure Image-Only Showcase (No Text / Buttons) */}
      <DemoBlock
        id="image-only-showcase"
        title="1. Pure Image-Only Carousel Mode"
        description="Used for photo galleries, portfolio banners, or minimalist media sliders where only images and navigation controls are rendered."
        code={`const imageItems: ShowcaseItem[] = [
  { id: '1', media: { src: '/img-1.jpg', alt: 'Vista 1' }, title: '' },
  { id: '2', media: { src: '/img-2.jpg', alt: 'Vista 2' }, title: '' },
];

<Showcase
  items={imageItems}
  size="medium"
  navigation="dots"
  transition="fade"
/>`}
      >
        <Box sx={{ width: "100%", borderRadius: "20px", overflow: "hidden" }}>
          <Showcase
            items={imageOnlyItems}
            size="medium"
            navigation="dots"
            transition="fade"
            interval={4000}
          />
        </Box>
      </DemoBlock>

      {/* 3. Title & Description Only (No Eyebrow or CTA Action Button) */}
      <DemoBlock
        id="title-desc-showcase"
        title="2. Title & Description Only Mode"
        description="Clean presentation slides showcasing headings and descriptive text overlays without action buttons."
        code={`const textItems: ShowcaseItem[] = [
  {
    id: 'feature-1',
    media: { src: '/hardware.jpg', alt: 'Hardware' },
    title: 'Next-Gen Performance',
    description: 'Zero layout shift, 60 FPS transitions, and native browser acceleration.',
  }
];

<Showcase
  items={textItems}
  size="medium"
  navigation="vertical"
  transition="cinematic"
/>`}
      >
        <Box sx={{ width: "100%", borderRadius: "20px", overflow: "hidden" }}>
          <Showcase
            items={titleDescItems}
            size="medium"
            navigation="vertical"
            transition="cinematic"
            interval={5000}
          />
        </Box>
      </DemoBlock>

      {/* 4. Glass Surface Banner Variant */}
      <DemoBlock
        id="glass-variant-showcase"
        title="3. Frosted Glass Variant (variant='glass')"
        description="Applies backdrop filter blur layers across the carousel surface for modern elevated UI sections."
        code={`<Showcase
  items={items}
  variant="glass"
  size="small"
  navigation="dots"
/>`}
      >
        <Box
          sx={{
            p: 3,
            borderRadius: "24px",
            backgroundImage:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.4) 100%)",
          }}
        >
          <Showcase
            items={heroShowcaseItems}
            variant="glass"
            size="small"
            navigation="dots"
            interval={5000}
          />
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
