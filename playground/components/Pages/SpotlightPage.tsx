"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  Switch,
} from "@mui/material";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Spotlight } from "../../../src/components/spotlight/Spotlight.js";
import type {
  SpotlightVariant,
  SpotlightSize,
  SpotlightImagePosition,
  SpotlightImageProps,
} from "../../../src/components/spotlight/Spotlight.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

/**
 * Mock image renderer component for demonstration
 */
const MockImage = ({
  src,
  alt,
  fill,
  sizes,
  priority,
  style,
  className,
}: SpotlightImageProps) => (
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

export const SpotlightPage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Interactive Playground State
  const [variant, setVariant] = useState<SpotlightVariant>("overlay");
  const [size, setSize] = useState<SpotlightSize>("medium");
  const [imagePosition, setImagePosition] =
    useState<SpotlightImagePosition>("center");
  const [radius, setRadius] = useState<number>(6);
  const [showEyebrow, setShowEyebrow] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showAction, setShowAction] = useState(true);
  const [enableHref, setEnableHref] = useState(true);

  const mockNavigation = (href?: string) => {
    if (href) {
      console.log(`[Spotlight onNavigate] Navigating to: ${href}`);
    }
  };

  return (
    <ComponentPage
      title="Spotlight Component"
      description="Feature heroes, editorial banners, and high-impact promo blocks with responsive layout modes, full-image semantic links, and Next.js integration."
      category="Surfaces"
      badges={["Banner", "Hero", "Glass", "Editorial"]}
    >
      {/* ============================================================
          1. Interactive Playground
          ============================================================ */}

      <DemoBlock
        id="interactive-spotlight"
        title="Interactive Spotlight Playground"
        description="Customize variant, size, image cropping position, typography layers, and navigation behaviors live."
        code={`import { Spotlight } from 'jivico-glass-ui';

<Spotlight
  image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600"
  variant="${variant}"
  size="${size}"
  imagePosition="${imagePosition}"
  radius={${radius}}
${showEyebrow ? '  eyebrow="STUDIO EXCLUSIVE"\n' : ""}\
  title="Originals Collection 2026"
${showDescription ? '  description="Limited-edition luxury glassmorphic pieces crafted with real-time physics."\n' : ""}\
${showAction ? '  action={{ label: "Explore Collection", href: "#originals" }}\n' : ""}\
${enableHref ? '  href="#originals"\n  onNavigate={() => router.push("#originals")}\n' : ""}\
/>`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Controls Panel */}

          <Box
            sx={{
              p: 3,
              borderRadius: "20px",
              bgcolor: isDark
                ? "rgba(255, 255, 255, 0.03)"
                : "rgba(17, 17, 17, 0.02)",
              border: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
              }`,
            }}
          >
            <Stack spacing={3}>
              {/* Row 1: Layout & Size */}

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

                  <RadioGroup
                    row
                    value={variant}
                    onChange={(e) =>
                      setVariant(e.target.value as SpotlightVariant)
                    }
                  >
                    <FormControlLabel
                      value="overlay"
                      control={<Radio size="small" />}
                      label="Overlay"
                    />
                    <FormControlLabel
                      value="split"
                      control={<Radio size="small" />}
                      label="Split"
                    />
                    <FormControlLabel
                      value="minimal"
                      control={<Radio size="small" />}
                      label="Minimal"
                    />
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

                  <RadioGroup
                    row
                    value={size}
                    onChange={(e) => setSize(e.target.value as SpotlightSize)}
                  >
                    <FormControlLabel
                      value="small"
                      control={<Radio size="small" />}
                      label="Small"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio size="small" />}
                      label="Medium"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio size="small" />}
                      label="Large"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>

              {/* Row 2: Image Position & Radius */}

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
                    Image Crop Position
                  </FormLabel>

                  <Select
                    value={imagePosition}
                    onChange={(e) =>
                      setImagePosition(e.target.value as SpotlightImagePosition)
                    }
                  >
                    <MenuItem value="center">Center</MenuItem>
                    <MenuItem value="top">Top</MenuItem>
                    <MenuItem value="bottom">Bottom</MenuItem>
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                  </Select>
                </FormControl>

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

                  <Select
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                  >
                    <MenuItem value={0}>Square (0px)</MenuItem>
                    <MenuItem value={12}>Soft (12px)</MenuItem>
                    <MenuItem value={24}>Rounded (24px)</MenuItem>
                    <MenuItem value={40}>Pill (40px)</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Row 3: Content Toggles */}

              <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={showEyebrow}
                      onChange={(e) => setShowEyebrow(e.target.checked)}
                    />
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
                    <Switch
                      size="small"
                      checked={showAction}
                      onChange={(e) => setShowAction(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      CTA Button
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={enableHref}
                      onChange={(e) => setEnableHref(e.target.checked)}
                    />
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
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
              alt="Originals Collection"
              variant={variant}
              size={size}
              imagePosition={imagePosition}
              radius={radius}
              eyebrow={showEyebrow ? "STUDIO EXCLUSIVE" : undefined}
              title="Originals Collection 2026"
              description={
                showDescription
                  ? "Limited-edition luxury glassmorphic items crafted with real-time physics and liquid depth."
                  : undefined
              }
              action={
                showAction
                  ? {
                      label: "Explore Originals",
                      href: "#originals",
                      onClick: () => console.log("CTA Clicked"),
                    }
                  : undefined
              }
              href={enableHref ? "#originals" : undefined}
              linkLabel="View Originals Collection"
              onNavigate={() => mockNavigation("#originals")}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Overlay Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-overlay"
        title="1. Overlay Variant (variant='overlay')"
        description="High-impact hero banners with full background media, dark gradient overlays, and legibility-optimized typography."
        code={`import { Spotlight } from 'jivico-glass-ui';

<Spotlight
  image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600"
  alt="Freestyle Design Studio"
  variant="overlay"
  size="large"
  eyebrow="DESIGN STUDIO"
  title="Create Your Freestyle"
  description="Upload custom artwork and print 1-of-1 heavyweight apparel with studio finish."
  action={{
    label: "Start Customizer",
    href: "/customizer",
  }}
  href="/customizer"
  radius={24}
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <Spotlight
            image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80"
            alt="Freestyle Design Studio"
            variant="overlay"
            size="large"
            eyebrow="DESIGN STUDIO"
            title="Create Your Freestyle"
            description="Upload custom artwork and print 1-of-1 heavyweight apparel with studio finish."
            action={{
              label: "Start Customizer",
              href: "#customizer",
            }}
            href="#customizer"
            radius={24}
            onNavigate={() => mockNavigation("#customizer")}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          3. Split Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-split"
        title="2. Split Grid Variant (variant='split')"
        description="Side-by-side balanced layouts pairing rich media with clean editorial content and action triggers."
        code={`import { Spotlight } from 'jivico-glass-ui';

<Spotlight
  image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
  alt="Liquid Glass Architecture"
  variant="split"
  size="medium"
  eyebrow="MATERIAL UI V9"
  title="Liquid Glass System"
  description="Real-time backdrop blur filters with ambient dynamic lighting for modern React interfaces."
  action={{
    label: "View Architecture",
    href: "/docs/architecture",
  }}
  href="/docs/architecture"
  radius={20}
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <Spotlight
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Liquid Glass Architecture"
            variant="split"
            size="medium"
            eyebrow="MATERIAL UI V9"
            title="Liquid Glass System"
            description="Real-time backdrop blur filters with ambient dynamic lighting for modern React interfaces."
            action={{
              label: "View Architecture",
              href: "#architecture",
            }}
            href="#architecture"
            radius={20}
            onNavigate={() => mockNavigation("#architecture")}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          4. Minimal Variant
          ============================================================ */}

      <DemoBlock
        id="spotlight-minimal"
        title="3. Minimal Stacked Variant (variant='minimal')"
        description="Clean vertical flow featuring stacked media header and crisp content block beneath."
        code={`import { Spotlight } from 'jivico-glass-ui';

<Spotlight
  image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
  alt="Microchip Hardware"
  variant="minimal"
  size="small"
  eyebrow="HARDWARE ENGINE"
  title="Next-Gen Engine"
  description="Zero layout shift, 60 FPS GPU-accelerated transitions."
  action={{
    label: "Benchmark Test",
    href: "/benchmarks",
  }}
  href="/benchmarks"
  radius={16}
/>`}
      >
        <Box sx={{ width: "100%", maxWidth: 640, mx: "auto" }}>
          <Spotlight
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Microchip Hardware"
            variant="minimal"
            size="small"
            eyebrow="HARDWARE ENGINE"
            title="Next-Gen Engine"
            description="Zero layout shift, 60 FPS GPU-accelerated transitions."
            action={{
              label: "Benchmark Test",
              href: "#benchmarks",
            }}
            href="#benchmarks"
            radius={16}
            onNavigate={() => mockNavigation("#benchmarks")}
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

export function SpotlightHero({ data }) {
  const router = useRouter();

  return (
    <Spotlight
      image={data.image}
      alt={data.title}
      eyebrow={data.eyebrow}
      title={data.title}
      description={data.description}
      action={{
        label: data.actionLabel,
        href: data.href,
      }}
      href={data.href}
      onNavigate={() => {
        router.push(data.href);
      }}
      ImageComponent={Image}
    />
  );
}`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: isDark
                ? "rgba(255, 255, 255, 0.04)"
                : "rgba(17, 17, 17, 0.03)",
              border: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(17, 17, 17, 0.10)"
              }`,
            }}
          >
            <Typography
              variant="overline"
              sx={{ display: "block", mb: 1, fontWeight: 700 }}
            >
              ARCHITECTURE & ACCESSIBILITY
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.7 }}
            >
              Spotlight remains completely decoupled from framework routers. The
              component renders standard HTML5 <code>&lt;a href="..."&gt;</code>{" "}
              anchors, enabling browser status previews and search engine
              indexing, while <code>onNavigate</code> triggers client-side
              router navigation.
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body2">
                <strong>1. Semantic HTML:</strong> Renders real{" "}
                <code>href</code> attributes on card boundaries.
              </Typography>
              <Typography variant="body2">
                <strong>2. Application Routing:</strong> Consuming app controls
                routing with <code>router.push()</code>.
              </Typography>
              <Typography variant="body2">
                <strong>3. Injectable Media:</strong> Optionally pass Next.js{" "}
                <code>next/image</code> via <code>ImageComponent</code>.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </DemoBlock>
    </ComponentPage>
  );
};

export default SpotlightPage;
