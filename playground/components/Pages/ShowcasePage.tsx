import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Showcase } from "../../../src/components/showcase/Showcase.js";
import type {
  ShowcaseItem,
  ShowcaseVariant,
  ShowcaseSize,
  ShowcaseTransition,
  ShowcaseNavigation,
  ShowcaseRadius,
  ShowcaseButtonColor,
  ShowcaseImageComponentProps,
} from "../../../src/components/showcase/Showcase.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

/**
 * Mock image component
 *
 * In a real Next.js application this would be:
 *
 * import Image from "next/image";
 *
 * <Showcase
 *   items={items}
 *   ImageComponent={Image}
 * />
 *
 * Image rendering remains injectable because it is a rendering concern,
 * not a routing concern.
 */
const MockImage = ({
  src,
  alt,
  fill,
  sizes,
  priority,
  style,
  className,
}: ShowcaseImageComponentProps) => (
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

// Mock Showcase Items
const heroShowcaseItems: ShowcaseItem[] = [
  {
    id: "originals",
    media: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
      alt: "Originals Collection",
    },

    // API-safe navigation data.
    // No React component is stored here.
    href: "#originals",
    linkLabel: "Explore Originals",

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

    href: "#freestyle",
    linkLabel: "Explore Freestyle",

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

    href: "#setup",
    linkLabel: "View Documentation",

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

// Minimal Image-Only Items
const imageOnlyItems: ShowcaseItem[] = [
  {
    id: "img-1",
    media: {
      src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract Geometry 1",
    },
    title: "",
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

// Title & Description Only Items
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

  const [radius, setRadius] = useState<ShowcaseRadius>("rounded");

  const [actionColor, setActionColor] =
    useState<ShowcaseButtonColor>("primary");

  const [autoplay, setAutoplay] = useState(true);

  const [showArrows, setShowArrows] = useState(true);

  const [showProgress, setShowProgress] = useState(true);

  const [interval, setInterval] = useState(5000);

  // Dynamic Items with customized action button colors
  //
  // Notice that we are NOT injecting a Link component
  // into the items. The data remains plain.
  const activeItems = useMemo(() => {
    return heroShowcaseItems.map((item) => ({
      ...item,
      action: item.action
        ? {
            ...item.action,
            color: actionColor,
          }
        : undefined,
    }));
  }, [actionColor]);

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
      {/* ============================================================
          1. Interactive Showcase Playground
          ============================================================ */}

      <DemoBlock
        id="interactive-showcase"
        title="Interactive Showcase Playground"
        description="Customize variant, size, transition mode, navigation style, radius, and action button color live."
        code={`import { Showcase, type ShowcaseItem } from 'jivico-glass-ui';

const items: ShowcaseItem[] = [
  {
    id: "originals",
    media: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600",
      alt: "Originals Collection",
      mobileSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
    },

    href: "/collections/originals",
    linkLabel: "Explore Jivico Originals",

    eyebrow: "STUDIO EXCLUSIVE",
    title: "Originals by Studio",
    description: "Limited-edition luxury glassmorphic collections.",

    action: {
      label: "Discover Originals",
      href: "/collections/originals",
      color: "${actionColor}",
      variant: "contained",
    },

    sideLabel: "FALL / WINTER 2026",
  },

  {
    id: "freestyle",
    media: {
      src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600",
      alt: "Freestyle Designer",
    },

    href: "/freestyle",
    linkLabel: "Explore Freestyle",

    eyebrow: "DESIGN STUDIO",
    title: "Create Your Freestyle",
    description: "Upload your artwork and print 1-of-1 pieces.",

    action: {
      label: "Explore Freestyle",
      href: "/freestyle",
      color: "${actionColor}",
      variant: "contained",
    },
  },
];

const handleNavigate = (item: ShowcaseItem) => {
  // The consuming application owns routing.
  // Example in Next.js:
  // router.push(item.href);
};

<Showcase
  items={items}
  onNavigate={handleNavigate}
  variant="${variant}"
  size="${size}"
  radius="${radius}"
  transition="${transition}"
  navigation="${navigation}"
  autoplay={${autoplay}}
  interval={${interval}}
  showArrows={${showArrows}}
  showProgress={${showProgress}}
/>`}
      >
        <Stack
          sx={{
            width: "100%",
            alignItems: "stretch",
          }}
          spacing={3}
        >
          {/* Controls Bar */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: 0,
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
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
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
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
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
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
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
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
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

            {/* Radius Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
              >
                Radius:
              </Typography>

              {(["square", "rounded", "soft"] as ShowcaseRadius[]).map((r) => (
                <Button
                  key={r}
                  size="small"
                  variant={radius === r ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setRadius(r)}
                >
                  {r}
                </Button>
              ))}
            </Stack>

            {/* Action Color Selector */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  minWidth: 90,
                }}
              >
                CTA Color:
              </Typography>

              {(
                [
                  "primary",
                  "secondary",
                  "accent",
                  "glass",
                ] as ShowcaseButtonColor[]
              ).map((c) => (
                <Button
                  key={c}
                  size="small"
                  variant={actionColor === c ? "contained" : "outlined"}
                  color="accent"
                  onClick={() => setActionColor(c)}
                >
                  {c}
                </Button>
              ))}
            </Stack>

            {/* Boolean Toggles */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                flexWrap: "wrap",
                pt: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={autoplay}
                    onChange={(e) => setAutoplay(e.target.checked)}
                  />
                }
                label={
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
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
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
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
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Progress Bar
                  </Typography>
                }
              />
            </Stack>
          </Box>

          {/* Render Active Showcase */}
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Showcase
              items={activeItems}
              onNavigate={(item) => {
                if (item.href) {
                  window.location.href = item.href;
                }
              }}
              variant={variant}
              size={size}
              transition={transition}
              navigation={navigation}
              radius={radius}
              autoplay={autoplay}
              interval={interval}
              showArrows={showArrows}
              showProgress={showProgress}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Pure Image-Only Showcase
          ============================================================ */}

      <DemoBlock
        id="image-only-showcase"
        title="1. Pure Image-Only Carousel Mode"
        description="Used for photo galleries, portfolio banners, or minimalist media sliders where only images and navigation controls are rendered."
        code={`import { Showcase, type ShowcaseItem } from 'jivico-glass-ui';

const imageOnlyItems: ShowcaseItem[] = [
  {
    id: "img-1",
    media: {
      src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200",
      alt: "Abstract Geometry 1",
    },
    title: "",
  },
  {
    id: "img-2",
    media: {
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200",
      alt: "Abstract Geometry 2",
    },
    title: "",
  },
];

<Showcase
  items={imageOnlyItems}
  size="medium"
  navigation="dots"
  transition="fade"
/>`}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Showcase
            items={imageOnlyItems}
            size="medium"
            navigation="dots"
            transition="fade"
            interval={4000}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          3. Title & Description Only
          ============================================================ */}

      <DemoBlock
        id="title-desc-showcase"
        title="2. Title & Description Only Mode"
        description="Clean presentation slides showcasing headings and descriptive text overlays without action buttons."
        code={`import { Showcase, type ShowcaseItem } from 'jivico-glass-ui';

const titleDescItems: ShowcaseItem[] = [
  {
    id: "td-1",
    media: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
      alt: "Microchip Hardware",
    },
    title: "Next-Gen Performance",
    description: "Zero layout shift, 60 FPS transitions, and native browser hardware acceleration.",
  },
  {
    id: "td-2",
    media: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
      alt: "Global Data Network",
    },
    title: "Global Distribution",
    description: "Seamlessly distributed assets optimized for ultra-fast CDN response times.",
  },
];

<Showcase
  items={titleDescItems}
  size="medium"
  navigation="vertical"
  transition="cinematic"
/>`}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Showcase
            items={titleDescItems}
            size="medium"
            navigation="vertical"
            transition="cinematic"
            interval={5000}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          4. Glass Surface Banner Variant
          ============================================================ */}

      <DemoBlock
        id="glass-variant-showcase"
        title="3. Frosted Glass Variant (variant='glass')"
        description="Applies backdrop filter blur layers across the carousel surface for modern elevated UI sections."
        code={`import { Showcase, type ShowcaseItem } from 'jivico-glass-ui';

<Showcase
  items={items}
  variant="glass"
  size="small"
  navigation="dots"
  radius="soft"
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
            onNavigate={(item) => {
              if (item.href) {
                window.location.href = item.href;
              }
            }}
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          5. Next.js Integration
          ============================================================ */}

      <DemoBlock
        id="nextjs-integration"
        title="4. Next.js Integration"
        description="Keep your API data framework-agnostic. Showcase renders semantic links, while the consuming Next.js application owns client-side routing."
        code={`// app/components/ShowcaseClient.tsx

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Showcase,
  type ShowcaseItem,
} from "jivico-glass-ui";

interface ShowcaseClientProps {
  items: ShowcaseItem[];
}

export function ShowcaseClient({
  items,
}: ShowcaseClientProps) {
  const router = useRouter();

  return (
    <Showcase
      items={items}
      onNavigate={(item) => {
        if (item.href) {
          router.push(item.href);
        }
      }}
      ImageComponent={Image}
    />
  );
}`}
      >
        <Stack spacing={3}>
          {/* ----------------------------------------------------------
              Explanation
              ---------------------------------------------------------- */}

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
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 1,
              }}
            >
              How it works
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                lineHeight: 1.8,
              }}
            >
              Showcase does not know about Next.js routing. Your API returns
              framework-agnostic data, while the Next.js application provides
              the routing implementation and optional image renderer.
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body2">
                <strong>1. API</strong> → Returns plain Showcase data.
              </Typography>

              <Typography variant="body2">
                <strong>2. Showcase</strong> → Renders a semantic{" "}
                <code>&lt;a href="..."&gt;</code>.
              </Typography>

              <Typography variant="body2">
                <strong>3. onNavigate</strong> → Showcase prevents native
                navigation and gives the application the navigation event.
              </Typography>

              <Typography variant="body2">
                <strong>4. Next.js</strong> → Calls <code>router.push()</code>{" "}
                for client-side navigation.
              </Typography>

              <Typography variant="body2">
                <strong>5. ImageComponent</strong> → Can optionally receive{" "}
                <code>next/image</code>.
              </Typography>
            </Stack>
          </Box>

          {/* ----------------------------------------------------------
              API Data
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              01 — API DATA
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              Your backend only needs to return serializable data. There is no{" "}
              <code>Link</code>, <code>Image</code>, or other React component
              inside the response.
            </Typography>

            <Typography
              component="pre"
              variant="body2"
              sx={{
                m: 0,
                overflowX: "auto",
                fontFamily: "monospace",
                lineHeight: 1.7,
                whiteSpace: "pre",
              }}
            >
              {`
{
  "id": "originals",
  "media": {
    "src": "/images/originals.jpg",
    "mobileSrc": "/images/originals-mobile.jpg",
    "alt": "Jivico Originals"
  },
  "href": "/collections/originals",
  "linkLabel": "Explore Jivico Originals",
  "title": "Originals"
}
`}
            </Typography>
          </Box>

          {/* ----------------------------------------------------------
              Flow
              ---------------------------------------------------------- */}

          <Box
            sx={{
              textAlign: "center",
              py: 0.5,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              ↓ plain JSON
            </Typography>
          </Box>

          {/* ----------------------------------------------------------
              Showcase Layer
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              02 — SHOWCASE
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              Showcase always renders the full media area as a semantic{" "}
              <code>&lt;a href="..."&gt;</code>. It prevents the browser's
              default navigation and calls <code>onNavigate</code> instead.
            </Typography>

            <Typography
              component="pre"
              variant="body2"
              sx={{
                m: 0,
                overflowX: "auto",
                fontFamily: "monospace",
                lineHeight: 1.7,
                whiteSpace: "pre",
              }}
            >
              {`<Showcase
  items={items}
  onNavigate={(item) => {
    // Application owns routing.
  }}
/>`}
            </Typography>
          </Box>

          {/* ----------------------------------------------------------
              Next.js Layer
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              03 — NEXT.JS CLIENT ADAPTER
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              The client adapter owns the actual Next.js navigation. This keeps
              routing concerns outside the reusable UI component.
            </Typography>

            <Typography
              component="pre"
              variant="body2"
              sx={{
                m: 0,
                overflowX: "auto",
                fontFamily: "monospace",
                lineHeight: 1.8,
                whiteSpace: "pre",
              }}
            >
              {`"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const router = useRouter();

<Showcase
  items={items}
  onNavigate={(item) => {
    if (item.href) {
      router.push(item.href);
    }
  }}
  ImageComponent={Image}
/>`}
            </Typography>
          </Box>

          {/* ----------------------------------------------------------
              Why this architecture
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              04 — WHY
            </Typography>

            <Stack spacing={1.25}>
              <Typography variant="body2">
                <strong>Reusable:</strong> Showcase remains independent from
                Next.js and other routing frameworks.
              </Typography>

              <Typography variant="body2">
                <strong>API-friendly:</strong> Backend responses contain only
                serializable data.
              </Typography>

              <Typography variant="body2">
                <strong>Semantic:</strong> The media area remains a real{" "}
                <code>&lt;a href="..."&gt;</code> element.
              </Typography>

              <Typography variant="body2">
                <strong>Framework-safe:</strong> Next.js, React Router, Remix,
                or another application can provide its own navigation logic.
              </Typography>

              <Typography variant="body2">
                <strong>Application-owned routing:</strong> The reusable
                component does not need to know which router the application
                uses.
              </Typography>
            </Stack>
          </Box>

          {/* ----------------------------------------------------------
              Architecture
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              05 — ARCHITECTURE
            </Typography>

            <Typography
              component="pre"
              variant="body2"
              sx={{
                m: 0,
                overflowX: "auto",
                fontFamily: "monospace",
                lineHeight: 1.8,
                whiteSpace: "pre",
              }}
            >
              {`Jivico API
    ↓
plain JSON
    ↓
Next.js application
    ↓
ShowcaseClient
    ├── onNavigate
    │      ↓
    │   router.push()
    │
    └── ImageComponent={Image}
    ↓
<Showcase />
    ↓
<a href="...">
    ↓
preventDefault()
    ↓
onNavigate(item, index, event)
    ↓
Next.js router
`}
            </Typography>
          </Box>

          {/* ----------------------------------------------------------
              Minimal version
              ---------------------------------------------------------- */}

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
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              MINIMAL USAGE
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              The reusable component only needs the data and navigation
              callback. Next.js-specific routing stays at the application
              boundary.
            </Typography>

            <Typography
              component="pre"
              variant="body2"
              sx={{
                m: 0,
                overflowX: "auto",
                fontFamily: "monospace",
                lineHeight: 1.7,
                whiteSpace: "pre",
              }}
            >
              {`<Showcase
  items={items}
  onNavigate={(item) => {
    if (item.href) {
      router.push(item.href);
    }
  }}
  ImageComponent={Image}
/>`}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              textAlign: "center",
              px: 2,
              lineHeight: 1.7,
            }}
          >
            Keep API responses framework-agnostic. Let Showcase provide semantic
            links while the consuming application owns actual navigation.
          </Typography>
        </Stack>
      </DemoBlock>
    </ComponentPage>
  );
};
