"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Spotlight } from "../../../src/components/spotlight/Spotlight.js";
import type {
  SpotlightItem,
  SpotlightVariant,
  SpotlightSize,
  SpotlightRadius,
  SpotlightImageComponentProps,
} from "../../../src/components/spotlight/Spotlight.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

/**
 * Mock image renderer component for demonstration.
 * In a Next.js application, pass `import Image from "next/image"`.
 */
const MockImage = ({ src, alt, fill, sizes, priority, style, className }: SpotlightImageComponentProps) => (
  <img
    src={src}
    alt={alt}
    sizes={sizes}
    loading={priority ? "eager" : "lazy"}
    className={className}
    style={{
      display: "block",
      width: fill ? "100%" : undefined,
      height: fill ? "100%" : undefined,
      objectFit: fill ? "cover" : undefined,
      ...style,
    }}
  />
);

const sampleSpotlightItem: SpotlightItem = {
  id: "spotlight-hero-1",
  media: {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    alt: "Originals Collection 2026",
  },
  href: "#originals",
  linkLabel: "Explore Originals",
  eyebrow: "STUDIO EXCLUSIVE",
  title: "Originals Collection 2026",
  description: "Limited-edition luxury glassmorphic pieces crafted with real-time physics and liquid depth.",
  action: {
    label: "Discover Originals",
    href: "#originals",
  },
  sideLabel: "FALL / WINTER 2026",
};

export const SpotlightPage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Interactive Playground State
  const [variant, setVariant] = useState<SpotlightVariant>("editorial");
  const [size, setSize] = useState<SpotlightSize>("large");
  const [radius, setRadius] = useState<SpotlightRadius>("rounded");
  const [showEyebrow, setShowEyebrow] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showAction, setShowAction] = useState(true);
  const [showSideLabel, setShowSideLabel] = useState(true);
  const [enableHref, setEnableHref] = useState(true);

  const activeItem: SpotlightItem = useMemo(
    () => ({
      id: "interactive-spotlight",
      media: {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
        alt: "Originals Collection",
      },
      href: enableHref ? "#originals" : undefined,
      linkLabel: enableHref ? "View Originals Collection" : undefined,
      eyebrow: showEyebrow ? "STUDIO EXCLUSIVE" : undefined,
      title: "Originals Collection 2026",
      description: showDescription
        ? "Limited-edition luxury glassmorphic items crafted with real-time physics and liquid depth."
        : undefined,
      action: showAction
        ? {
            label: "Explore Originals",
            href: "#originals",
          }
        : undefined,
      sideLabel: showSideLabel ? "LIMITED RELEASE" : undefined,
    }),
    [enableHref, showEyebrow, showDescription, showAction, showSideLabel],
  );

  const mockNavigation = (item: SpotlightItem) => {
    if (item.href) {
      console.log(`[Spotlight onNavigate] Navigating to: ${item.href}`);
    }
  };

  return (
    <ComponentPage
      title="Spotlight Component"
      description="Feature single heroes, editorial banners, and high-impact promo blocks with responsive sizing, frosted glass cards, and Next.js integration."
      category="Surfaces"
      badges={["Banner", "Hero", "Glass", "Editorial"]}
    >
      {/* ============================================================
          1. Interactive Playground
          ============================================================ */}

      <DemoBlock
        id="interactive-spotlight"
        title="Interactive Spotlight Playground"
        description="Customize variant, size, corner radius, typography layers, and navigation behaviors live."
        code={`import { Spotlight } from 'jivico-glass-ui';

const item = {
  id: "originals-2026",
  media: {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600",
    alt: "Originals Collection",
  },
${showEyebrow ? '  eyebrow: "STUDIO EXCLUSIVE",\n' : ""}\
  title: "Originals Collection 2026",
${showDescription ? '  description: "Limited-edition luxury glassmorphic pieces crafted with real-time physics.",\n' : ""}\
${showAction ? '  action: { label: "Explore Originals", href: "#originals" },\n' : ""}\
${showSideLabel ? '  sideLabel: "LIMITED RELEASE",\n' : ""}\
${enableHref ? '  href: "#originals",\n' : ""}\
};

<Spotlight
  item={item}
  variant="${variant}"
  size="${size}"
  radius="${radius}"
${enableHref ? "  onNavigate={(item) => router.push(item.href)}\n" : ""}\
/>`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Controls Panel */}
          <Box
            sx={{
              p: 3,
              borderRadius: "20px",
              bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(17, 17, 17, 0.02)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"}`,
            }}
          >
            <Stack spacing={3}>
              {/* Row 1: Variant & Size */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ alignItems: { xs: "stretch", md: "center" } }}
              >
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      mb: 0.5,
                    }}
                  >
                    Variant
                  </FormLabel>
                  <RadioGroup row value={variant} onChange={(e) => setVariant(e.target.value as SpotlightVariant)}>
                    <FormControlLabel value="editorial" control={<Radio size="small" />} label="Editorial" />
                    <FormControlLabel value="glass" control={<Radio size="small" />} label="Glass" />
                    <FormControlLabel value="minimal" control={<Radio size="small" />} label="Minimal" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      mb: 0.5,
                    }}
                  >
                    Size
                  </FormLabel>
                  <RadioGroup row value={size} onChange={(e) => setSize(e.target.value as SpotlightSize)}>
                    <FormControlLabel value="small" control={<Radio size="small" />} label="Small" />
                    <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
                    <FormControlLabel value="large" control={<Radio size="small" />} label="Large" />
                    <FormControlLabel value="hero" control={<Radio size="small" />} label="Hero" />
                  </RadioGroup>
                </FormControl>
              </Stack>

              {/* Row 2: Radius & Toggles */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{ alignItems: { xs: "stretch", md: "center" } }}
              >
                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <FormLabel
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      mb: 0.5,
                    }}
                  >
                    Corner Radius
                  </FormLabel>
                  <Select value={radius} onChange={(e) => setRadius(e.target.value as SpotlightRadius)}>
                    <MenuItem value="square">Square</MenuItem>
                    <MenuItem value="rounded">Rounded</MenuItem>
                    <MenuItem value="soft">Soft</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Row 3: Content Toggles */}
              <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
                <FormControlLabel
                  control={
                    <Switch size="small" checked={showEyebrow} onChange={(e) => setShowEyebrow(e.target.checked)} />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Eyebrow
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={showDescription}
                      onChange={(e) => setShowDescription(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Description
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch size="small" checked={showAction} onChange={(e) => setShowAction(e.target.checked)} />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      CTA Button
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch size="small" checked={showSideLabel} onChange={(e) => setShowSideLabel(e.target.checked)} />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Side Label
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch size="small" checked={enableHref} onChange={(e) => setEnableHref(e.target.checked)} />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Full Card Link (href)
                    </Typography>
                  }
                />
              </Stack>
            </Stack>
          </Box>

          {/* Render Active Spotlight */}
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Spotlight
              item={activeItem}
              variant={variant}
              size={size}
              radius={radius}
              ImageComponent={MockImage}
              onNavigate={mockNavigation}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Editorial Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-editorial"
        title="1. Editorial Variant (variant='editorial')"
        description="Full-bleed visual hero banner with cinematic vignette gradients and modern editorial typography."
        code={`import { Spotlight } from 'jivico-glass-ui';

const item = {
  id: "freestyle-hero",
  media: {
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600",
    alt: "Freestyle Design Studio",
  },
  eyebrow: "DESIGN STUDIO",
  title: "Create Your Freestyle",
  description: "Upload custom artwork and print 1-of-1 heavyweight apparel with studio finish.",
  action: {
    label: "Start Customizer",
    href: "/customizer",
  },
  href: "/customizer",
  sideLabel: "STUDIO 2026",
};

<Spotlight
  item={item}
  variant="editorial"
  size="large"
  radius="rounded"
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <Spotlight
            item={{
              id: "freestyle-hero",
              media: {
                src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80",
                alt: "Freestyle Design Studio",
              },
              eyebrow: "DESIGN STUDIO",
              title: "Create Your Freestyle",
              description: "Upload custom artwork and print 1-of-1 heavyweight apparel with studio finish.",
              action: {
                label: "Start Customizer",
                href: "#customizer",
              },
              href: "#customizer",
              sideLabel: "STUDIO 2026",
            }}
            variant="editorial"
            size="large"
            radius="rounded"
            ImageComponent={MockImage}
            onNavigate={mockNavigation}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          3. Glass Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-glass"
        title="2. Glassmorphic Card Variant (variant='glass')"
        description="Features an elevated frosted glass overlay panel with real-time backdrop blur, ambient borders, and vibrant CTA triggers."
        code={`import { Spotlight } from 'jivico-glass-ui';

const item = {
  id: "liquid-glass-hero",
  media: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    alt: "Liquid Glass Architecture",
  },
  eyebrow: "MATERIAL UI V9",
  title: "Liquid Glass System",
  description: "Real-time backdrop blur filters with ambient dynamic lighting for modern React interfaces.",
  action: {
    label: "View Architecture",
    href: "#architecture",
    color: "glass",
  },
  href: "#architecture",
  sideLabel: "V0.1.1 RELEASE",
};

<Spotlight
  item={item}
  variant="glass"
  size="medium"
  radius="soft"
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <Spotlight
            item={{
              id: "liquid-glass-hero",
              media: {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
                alt: "Liquid Glass Architecture",
              },
              eyebrow: "MATERIAL UI V9",
              title: "Liquid Glass System",
              description: "Real-time backdrop blur filters with ambient dynamic lighting for modern React interfaces.",
              action: {
                label: "View Architecture",
                href: "#architecture",
                color: "glass",
              },
              href: "#architecture",
              sideLabel: "V0.1.1 RELEASE",
            }}
            variant="glass"
            size="medium"
            radius="soft"
            ImageComponent={MockImage}
            onNavigate={mockNavigation}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          4. Minimal Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-minimal"
        title="3. Minimal Variant (variant='minimal')"
        description="Crisp and streamlined visual block with subtle typography and clean button treatments."
        code={`import { Spotlight } from 'jivico-glass-ui';

const item = {
  id: "hardware-hero",
  media: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    alt: "Microchip Hardware",
  },
  eyebrow: "HARDWARE ENGINE",
  title: "Next-Gen Engine",
  description: "Zero layout shift, 60 FPS GPU-accelerated transitions.",
  action: {
    label: "Benchmark Test",
    href: "#benchmarks",
  },
  href: "#benchmarks",
};

<Spotlight
  item={item}
  variant="minimal"
  size="small"
  radius="rounded"
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <Spotlight
            item={{
              id: "hardware-hero",
              media: {
                src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                alt: "Microchip Hardware",
              },
              eyebrow: "HARDWARE ENGINE",
              title: "Next-Gen Engine",
              description: "Zero layout shift, 60 FPS GPU-accelerated transitions.",
              action: {
                label: "Benchmark Test",
                href: "#benchmarks",
              },
              href: "#benchmarks",
            }}
            variant="minimal"
            size="small"
            radius="rounded"
            ImageComponent={MockImage}
            onNavigate={mockNavigation}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          5. Next.js Integration Architecture
          ============================================================ */}

      <DemoBlock
        id="nextjs-integration"
        title="4. Next.js Integration & Framework-Agnostic Routing"
        description="Spotlight renders semantic anchor elements for full accessibility and SEO, while delegating client-side routing to your Next.js app via onNavigate."
        code={`// app/components/SpotlightHero.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Spotlight } from "jivico-glass-ui";

export function SpotlightHero({ item }) {
  const router = useRouter();

  return (
    <Spotlight
      item={item}
      variant="editorial"
      size="hero"
      radius="rounded"
      ImageComponent={Image}
      onNavigate={(item) => {
        if (item.href) router.push(item.href);
      }}
    />
  );
}`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(17, 17, 17, 0.03)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.10)"}`,
            }}
          >
            <Typography variant="overline" sx={{ display: "block", mb: 1, fontWeight: 700 }}>
              ARCHITECTURE & ACCESSIBILITY
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
              Spotlight remains completely decoupled from framework routers. The component renders standard HTML5{" "}
              <code>&lt;a href="..."&gt;</code> anchors, enabling browser status previews and search engine indexing,
              while <code>onNavigate</code> triggers client-side router navigation.
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body2">
                <strong>1. Semantic HTML:</strong> Renders real <code>href</code> attributes on card boundaries.
              </Typography>
              <Typography variant="body2">
                <strong>2. Application Routing:</strong> Consuming app controls routing with <code>router.push()</code>.
              </Typography>
              <Typography variant="body2">
                <strong>3. Injectable Media:</strong> Optionally pass Next.js <code>next/image</code> via{" "}
                <code>ImageComponent</code>.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </DemoBlock>
    </ComponentPage>
  );
};

export default SpotlightPage;
