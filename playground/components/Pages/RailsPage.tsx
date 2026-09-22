"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Switch,
  Rating,
} from "@mui/material";

import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

import { Rails } from "../../../src/components/rails/Rails.js";
import { Highlight } from "../../../src/components/highlight/Highlight.js";

import type {
  RailColumns,
  RailNavigation,
  RailTransition,
} from "../../../src/components/rails/Rail.types.js";

/* =========================================================
 * Sample Types
 * ======================================================= */

interface SampleCategory {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface SampleProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  colors: number;
}

interface SampleHighlight {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

/* =========================================================
 * Sample Categories
 * ======================================================= */

const CATEGORIES: SampleCategory[] = [
  {
    id: "cat-1",
    name: "Heavyweight Tees",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    count: 24,
  },
  {
    id: "cat-2",
    name: "Luxury Hoodies",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "cat-3",
    name: "Overalls & Denim",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "cat-4",
    name: "Glass Outerwear",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
  {
    id: "cat-5",
    name: "Footwear & Boots",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    count: 30,
  },
  {
    id: "cat-6",
    name: "Studio Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    count: 42,
  },
];

/* =========================================================
 * Sample Products
 * ======================================================= */

const PRODUCTS: SampleProduct[] = [
  {
    id: "prod-1",
    name: "Originals Oversized Tee",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    price: 899,
    rating: 4.8,
    colors: 4,
  },
  {
    id: "prod-2",
    name: "Freestyle Heavy Hoodie",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    price: 1499,
    rating: 4.9,
    colors: 3,
  },
  {
    id: "prod-3",
    name: "Liquid Glass Bomber",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: 2499,
    rating: 4.7,
    colors: 2,
  },
  {
    id: "prod-4",
    name: "Washed Cargo Trousers",
    image:
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    price: 1299,
    rating: 4.6,
    colors: 5,
  },
  {
    id: "prod-5",
    name: "Minimalist Cap",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    price: 499,
    rating: 4.5,
    colors: 6,
  },
];

/* =========================================================
 * Sample Highlights
 * ======================================================= */

const HIGHLIGHTS: SampleHighlight[] = [
  {
    id: "highlight-1",
    eyebrow: "JIVICO ORIGINALS",
    title: "Graphic Tees",
    description: "Bold graphics. Everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85",
    href: "/collections/graphic-tees",
  },
  {
    id: "highlight-2",
    eyebrow: "JIVICO ORIGINALS",
    title: "Oversized Tees",
    description: "Relaxed silhouettes made for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",
    href: "/collections/oversized-tees",
  },
  {
    id: "highlight-3",
    eyebrow: "THE ESSENTIALS",
    title: "Minimal Tees",
    description: "Clean lines. Quiet confidence.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85",
    href: "/collections/minimal-tees",
  },
  {
    id: "highlight-4",
    eyebrow: "THE EDIT",
    title: "Streetwear",
    description: "Built for the city.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    href: "/collections/streetwear",
  },
  {
    id: "highlight-5",
    eyebrow: "JUST DROPPED",
    title: "New Arrivals",
    description: "Fresh pieces. New energy.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85",
    href: "/collections/new-arrivals",
  },
  {
    id: "highlight-6",
    eyebrow: "CREATE YOURS",
    title: "Freestyle",
    description: "Turn your idea into something wearable.",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=85",
    href: "/freestyle",
  },
];

/* =========================================================
 * Page
 * ======================================================= */

export const RailsPage: React.FC = () => {
  /*
   * ---------------------------------------------------------
   * Playground state
   * ---------------------------------------------------------
   */

  const [navigation, setNavigation] = useState<RailNavigation>("arrows");

  const [columnsXs, setColumnsXs] = useState(2);

  const [columnsMd, setColumnsMd] = useState(4);

  const [gap, setGap] = useState(2);

  const [swipe, setSwipe] = useState(true);

  const [loop, setLoop] = useState(false);

  const [snap, setSnap] = useState(true);

  const [autoplay, setAutoplay] = useState(false);

  const [interval, setInterval] = useState(4000);

  const [transition, setTransition] = useState<RailTransition>("scale");

  const [imageAspectRatio, setImageAspectRatio] = useState("4 / 5");

  const [radius, setRadius] = useState<number>(3);

  /*
   * ---------------------------------------------------------
   * Responsive columns
   * ---------------------------------------------------------
   */

  const responsiveColumns: RailColumns = {
    xs: columnsXs,
    sm: 3,
    md: columnsMd,
    lg: columnsMd + 1,
  };

  return (
    <ComponentPage
      title="Rails Component"
      description="A responsive horizontal content rail for categories, products, editorial cards, highlights, and other generic data."
      category="Navigation"
      badges={[
        "<Rails />",
        "Generic Data",
        "Touch Swipe",
        "Snap Scrolling",
        "Autoplay",
      ]}
    >
      {/* ================================================== */}
      {/* 1. Interactive Playground                         */}
      {/* ================================================== */}
      <DemoBlock
        id="interactive-rails"
        title="Interactive Rails Playground"
        description="Configure the rail behavior, responsive columns, spacing, autoplay, image ratio, radius, and transition."
        code={`import { Rails } from "jivico-glass-ui";

<Rails<Category>
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  columns={{
    xs: ${columnsXs},
    sm: 3,
    md: ${columnsMd},
    lg: ${columnsMd + 1},
  }}
  gap={${gap}}
  navigation="${navigation}"
  swipe={${swipe}}
  autoplay={${autoplay}}
  interval={${interval}}
  loop={${loop}}
  snap={${snap}}
  transition="${transition}"
  imageAspectRatio="${imageAspectRatio}"
  radius={${radius}}
  renderContent={({ item }) => (
    <Typography
      variant="caption"
      color="text.secondary"
    >
      {item.count} items
    </Typography>
  )}
/>`}
      >
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {/* Controls */}

          <Box
            sx={{
              p: 2.5,
              borderRadius: 0,
              bgcolor: "action.hover",
              border: 1,
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Navigation */}

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
                  minWidth: 110,
                }}
              >
                Navigation:
              </Typography>

              {(["arrows", "dots", "both", "none"] as RailNavigation[]).map(
                (nav) => (
                  <Button
                    key={nav}
                    size="small"
                    variant={navigation === nav ? "contained" : "outlined"}
                    color="accent"
                    onClick={() => setNavigation(nav)}
                  >
                    {nav}
                  </Button>
                ),
              )}
            </Stack>

            {/* Mobile columns */}

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
                  minWidth: 110,
                }}
              >
                Mobile Columns:
              </Typography>

              {[1, 2, 3].map((value) => (
                <Button
                  key={value}
                  size="small"
                  variant={columnsXs === value ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setColumnsXs(value)}
                >
                  {value}
                </Button>
              ))}
            </Stack>

            {/* Desktop columns */}

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
                  minWidth: 110,
                }}
              >
                Desktop Columns:
              </Typography>

              {[3, 4, 5, 6].map((value) => (
                <Button
                  key={value}
                  size="small"
                  variant={columnsMd === value ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setColumnsMd(value)}
                >
                  {value}
                </Button>
              ))}
            </Stack>

            {/* Gap */}

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
                  minWidth: 110,
                }}
              >
                Gap:
              </Typography>

              {[2, 4, 8, 12, 16, 20, 24, 32].map((value) => (
                <Button
                  key={value}
                  size="small"
                  variant={gap === value ? "contained" : "outlined"}
                  color="accent"
                  onClick={() => setGap(value)}
                >
                  {value}px
                </Button>
              ))}
            </Stack>

            {/* Aspect ratio */}

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
                  minWidth: 110,
                }}
              >
                Aspect Ratio:
              </Typography>

              {["4 / 5", "1 / 1", "16 / 9", "3 / 4"].map((ratio) => (
                <Button
                  key={ratio}
                  size="small"
                  variant={
                    imageAspectRatio === ratio ? "contained" : "outlined"
                  }
                  color="accent"
                  onClick={() => setImageAspectRatio(ratio)}
                >
                  {ratio}
                </Button>
              ))}
            </Stack>

            {/* Radius */}

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
                  minWidth: 110,
                }}
              >
                Radius:
              </Typography>

              {[
                {
                  label: "Square",
                  value: 0,
                },
                {
                  label: "Rounded",
                  value: 1,
                },
                {
                  label: "Soft",
                  value: 3,
                },
              ].map((option) => (
                <Button
                  key={option.label}
                  size="small"
                  variant={radius === option.value ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setRadius(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </Stack>

            {/* Transition */}

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
                  minWidth: 110,
                }}
              >
                Transition:
              </Typography>

              {(["none", "fade", "scale", "lift"] as RailTransition[]).map(
                (value) => (
                  <Button
                    key={value}
                    size="small"
                    variant={transition === value ? "contained" : "outlined"}
                    color="accent"
                    onClick={() => setTransition(value)}
                  >
                    {value}
                  </Button>
                ),
              )}
            </Stack>

            {/* Boolean controls */}

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
                    checked={swipe}
                    onChange={(event) => setSwipe(event.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Swipe / Touch
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={snap}
                    onChange={(event) => setSnap(event.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Snap Scrolling
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={loop}
                    onChange={(event) => setLoop(event.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Loop Wrap
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={autoplay}
                    onChange={(event) => setAutoplay(event.target.checked)}
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Autoplay
                  </Typography>
                }
              />
            </Stack>

            {/* Autoplay interval */}

            {autoplay && (
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                  pt: 0.5,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    minWidth: 110,
                  }}
                >
                  Autoplay Interval:
                </Typography>

                {[2000, 3000, 4000, 5000].map((value) => (
                  <Button
                    key={value}
                    size="small"
                    variant={interval === value ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setInterval(value)}
                  >
                    {value / 1000}s
                  </Button>
                ))}
              </Stack>
            )}
          </Box>

          {/* Rail */}

          <Box
            sx={{
              width: "100%",
            }}
          >
            <Rails<SampleCategory>
              items={CATEGORIES}
              getKey={(item) => item.id}
              getImage={(item) => item.image}
              getTitle={(item) => item.name}
              columns={responsiveColumns}
              gap={gap}
              navigation={navigation}
              swipe={swipe}
              autoplay={autoplay}
              interval={interval}
              loop={loop}
              snap={snap}
              transition={transition}
              imageAspectRatio={imageAspectRatio}
              radius={radius}
              renderContent={({ item }) => (
                <Typography variant="caption" color="text.secondary">
                  {item.count} items
                </Typography>
              )}
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ================================================== */}
      {/* 2. Highlight Rail                                */}
      {/* ================================================== */}

      <DemoBlock
        id="highlight-rail"
        title="1. Highlight Cards"
        description="Image-first visual cards designed to work independently or inside Rails. Ideal for categories, collections, campaigns, offers, and editorial content."
        code={`import { Rails, Highlight } from "jivico-glass-ui";

<Rails<HighlightItem>
  items={highlights}
  getKey={(item) => item.id}
  renderItem={({ item }) => (
    <Highlight
      image={item.image}
      eyebrow={item.eyebrow}
      title={item.title}
      description={item.description}
      action={{
        label: "Shop Now",
        href: item.href,
      }}
      variant="overlay"
      aspectRatio="4 / 5"
      radius={3}
    />
  )}
  columns={{
    xs: 1.5,
    sm: 2.5,
    md: 4,
    lg: 5,
  }}
  gap={20}
  navigation="arrows"
  swipe
  snap
/>`}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Rails<SampleHighlight>
            items={HIGHLIGHTS}
            getImage={(item) => item.image}
            getKey={(item) => item.id}
            renderItem={({ item }) => (
              <Highlight
                image={item.image}
                eyebrow={item.eyebrow}
                title={item.title}
                description={item.description}
                action={{
                  label: "Shop Now",
                  href: item.href,
                }}
                variant="overlay"
                aspectRatio="4 / 5"
                radius={3}
              />
            )}
            columns={{
              xs: 1.5,
              sm: 2.5,
              md: 4,
              lg: 4,
            }}
            gap={1}
            navigation="arrows"
            swipe
            snap
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 3. Standalone Highlight                           */}
      {/* ================================================== */}

      <DemoBlock
        id="standalone-highlight"
        title="2. Standalone Highlight"
        description="Highlight can also be used independently when a single visual card is needed."
        code={`<Highlight
  image="/images/graphic-tees.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="Graphic Tees"
  description="Bold graphics. Everyday essentials."
  action={{
    label: "Shop Now",
    href: "/collections/graphic-tees",
  }}
  variant="overlay"
  aspectRatio="16 / 7"
  radius={3}
/>`}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
          }}
        >
          <Highlight
            image={HIGHLIGHTS[0].image}
            eyebrow={HIGHLIGHTS[0].eyebrow}
            title={HIGHLIGHTS[0].title}
            description={HIGHLIGHTS[0].description}
            action={{
              label: "Shop Now",
              href: HIGHLIGHTS[0].href,
            }}
            variant="overlay"
            aspectRatio="16 / 7"
            radius={3}
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 4. Highlight Variants                             */}
      {/* ================================================== */}

      <DemoBlock
        id="highlight-variants"
        title="3. Highlight Variants"
        description="Choose how the content is positioned relative to the image."
        code={`<Stack spacing={4}>
  <Highlight
    image="/images/graphic-tees.jpg"
    title="Graphic Tees"
    variant="overlay"
  />

  <Highlight
    image="/images/oversized-tees.jpg"
    title="Oversized Tees"
    variant="bottom"
  />

  <Highlight
    image="/images/minimal-tees.jpg"
    title="Minimal Tees"
    variant="center"
  />

  <Highlight
    image="/images/streetwear.jpg"
    title="Streetwear"
    variant="minimal"
  />
</Stack>`}
      >
        <Stack
          spacing={4}
          sx={{
            width: "100%",
          }}
        >
          <Highlight
            image={HIGHLIGHTS[0].image}
            eyebrow={HIGHLIGHTS[0].eyebrow}
            title={HIGHLIGHTS[0].title}
            description={HIGHLIGHTS[0].description}
            action={{
              label: "Shop Now",
              href: HIGHLIGHTS[0].href,
            }}
            variant="overlay"
            aspectRatio="4 / 5"
            radius={3}
          />

          <Highlight
            image={HIGHLIGHTS[1].image}
            eyebrow={HIGHLIGHTS[1].eyebrow}
            title={HIGHLIGHTS[1].title}
            description={HIGHLIGHTS[1].description}
            action={{
              label: "Shop Now",
              href: HIGHLIGHTS[1].href,
            }}
            variant="bottom"
            aspectRatio="4 / 5"
            radius={3}
          />

          <Highlight
            image={HIGHLIGHTS[2].image}
            eyebrow={HIGHLIGHTS[2].eyebrow}
            title={HIGHLIGHTS[2].title}
            description={HIGHLIGHTS[2].description}
            action={{
              label: "Shop Now",
              href: HIGHLIGHTS[2].href,
            }}
            variant="center"
            aspectRatio="4 / 5"
            radius={3}
          />

          <Highlight
            image={HIGHLIGHTS[3].image}
            eyebrow={HIGHLIGHTS[3].eyebrow}
            title={HIGHLIGHTS[3].title}
            description={HIGHLIGHTS[3].description}
            action={{
              label: "Shop Now",
              href: HIGHLIGHTS[3].href,
            }}
            variant="minimal"
            aspectRatio="4 / 5"
            radius={3}
          />
        </Stack>
      </DemoBlock>

      {/* ================================================== */}
      {/* 5. Product Rail                                  */}
      {/* ================================================== */}

      <DemoBlock
        id="product-rail"
        title="4. E-Commerce Product Rail"
        description="Use renderContent to add product metadata without replacing the built-in image and title presentation."
        code={`<Rails<Product>
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  columns={{
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
  }}
  gap={20}
  navigation="arrows"
  imageAspectRatio="4 / 5"
  radius={3}
  renderContent={({ item }) => (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body2"
          fontWeight={700}
        >
          ₹{item.price}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {item.colors} colors
        </Typography>
      </Box>

      <Rating
        value={item.rating}
        precision={0.1}
        size="small"
        readOnly
      />
    </Box>
  )}
/>`}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Rails<SampleProduct>
            items={PRODUCTS}
            getKey={(item) => item.id}
            getImage={(item) => item.image}
            getTitle={(item) => item.name}
            columns={{
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            }}
            gap={20}
            navigation="arrows"
            imageAspectRatio="4 / 5"
            radius={3}
            renderContent={({ item }) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  mt: 0.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    ₹{item.price}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {item.colors} colors
                  </Typography>
                </Box>

                <Rating
                  value={item.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                />
              </Box>
            )}
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 6. Editorial Peek Rail                           */}
      {/* ================================================== */}

      <DemoBlock
        id="editorial-item-width"
        title="5. Editorial Peek Rail"
        description="Use itemWidth when you want the next item to remain partially visible and encourage horizontal interaction."
        code={`<Rails<SampleCategory>
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  itemWidth={{
    xs: "78%",
    sm: "45%",
    md: "30%",
    lg: "22%",
  }}
  gap={24}
  navigation="none"
  imageAspectRatio="16 / 9"
  renderContent={({ item }) => (
    <Typography
      variant="caption"
      color="text.secondary"
    >
      {item.count} items
    </Typography>
  )}
/>`}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Rails<SampleCategory>
            items={CATEGORIES}
            getKey={(item) => item.id}
            getImage={(item) => item.image}
            getTitle={(item) => item.name}
            itemWidth={{
              xs: "78%",
              sm: "45%",
              md: "30%",
              lg: "22%",
            }}
            gap={24}
            navigation="none"
            imageAspectRatio="16 / 9"
            renderContent={({ item }) => (
              <Typography variant="caption" color="text.secondary">
                {item.count} items
              </Typography>
            )}
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 7. Completely Custom Item                        */}
      {/* ================================================== */}

      <DemoBlock
        id="custom-item"
        title="6. Completely Custom Item"
        description="Use renderItem when the default image, title, arrow, and content structure isn't enough."
        code={`<Rails<SampleCategory>
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  renderItem={({ item }) => (
    <Box>
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          display: "block",
          width: "100%",
          aspectRatio: "4 / 5",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Typography
        sx={{
          mt: 1.5,
          fontWeight: 600,
        }}
      >
        {item.name}
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
      >
        {item.count} items
      </Typography>
    </Box>
  )}
/>`}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Rails<SampleCategory>
            items={CATEGORIES}
            getKey={(item) => item.id}
            getImage={(item) => item.image}
            renderItem={({ item }) => (
              <Box>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />

                <Typography
                  sx={{
                    mt: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {item.count} items
                </Typography>
              </Box>
            )}
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 8. Custom Image Renderer                         */}
      {/* ================================================== */}

      <DemoBlock
        id="custom-image"
        title="7. Custom Image Renderer"
        description="Use renderImage when the library's default image element needs to be replaced by your own media implementation."
        code={`<Rails<SampleCategory>
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  renderImage={({ item, src }) => (
    <Box
      component="img"
      src={src}
      alt={item.name}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )}
/>`}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Rails<SampleCategory>
            items={CATEGORIES}
            getKey={(item) => item.id}
            getImage={(item) => item.image}
            getTitle={(item) => item.name}
            renderImage={({ item, src }) => (
              <Box
                component="img"
                src={src}
                alt={item.name}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          />
        </Box>
      </DemoBlock>

      {/* ================================================== */}
      {/* 9. Next.js Integration                            */}
      {/* ================================================== */}

      <DemoBlock
        id="nextjs-integration"
        title="8. Next.js Integration"
        description="Rails stays framework-agnostic. Next.js handles navigation through onNavigate, while ImageComponent can still be used for next/image."
        code={`// app/categories/CategoriesRail.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Rails } from "jivico-glass-ui";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface CategoriesRailProps {
  categories: Category[];
}

export function CategoriesRail({
  categories,
}: CategoriesRailProps) {
  const router = useRouter();

  return (
    <Rails<Category>
      items={categories}
      getKey={(item) => item.id}
      getImage={(item) => item.image}
      getTitle={(item) => item.name}
      getHref={(item) =>
        \\\`/collections/\\\${item.slug}\\\`
      }
      onNavigate={(item) => {
        router.push(
          \\\`/collections/\\\${item.slug}\\\`,
        );
      }}
      ImageComponent={Image}
      columns={{
        xs: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
      gap={20}
      navigation="arrows"
      swipe
      snap
      imageAspectRatio="4 / 5"
      radius={3}
    />
  );
}

// API data remains plain JSON.
// No React components are stored in the API response.`}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Architecture overview */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "action.hover",
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                }}
              >
                Framework-agnostic architecture
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Rails does not import Next.js or depend on any routing
                framework. The application owns routing through the onNavigate
                callback, while framework-specific image rendering can still be
                injected through ImageComponent.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={1}
                sx={{
                  alignItems: {
                    xs: "stretch",
                    sm: "center",
                  },
                }}
              >
                {[
                  "API JSON",
                  "Next.js Page",
                  "onNavigate",
                  "ImageComponent",
                  "Rails",
                ].map((label, index) => (
                  <React.Fragment key={label}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>

                    {index < 4 && (
                      <Typography
                        sx={{
                          display: {
                            xs: "none",
                            sm: "block",
                          },
                          color: "text.secondary",
                        }}
                      >
                        →
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* API data */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                }}
              >
                1. API returns plain JSON
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Your backend only needs to return serializable data such as IDs,
                titles, images, and slugs. No React components, router objects,
                or Next.js objects are included.
              </Typography>

              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  overflow: "auto",
                  borderRadius: 2,
                  bgcolor: "action.hover",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                {`{
  "id": "tshirts",
  "name": "T-Shirts",
  "image": "/images/tshirts.jpg",
  "slug": "t-shirts"
}`}
              </Box>
            </Stack>
          </Box>

          {/* Navigation */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                }}
              >
                2. Application owns navigation
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Rails renders a real anchor with the resolved href, but it
                prevents the anchor's native navigation. The consuming
                application receives the item through onNavigate and decides how
                routing should happen.
              </Typography>

              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  overflow: "auto",
                  borderRadius: 2,
                  bgcolor: "action.hover",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                {`getHref={(item) =>
  \\\`/collections/\\\${item.slug}\\\`
}

onNavigate={(item) => {
  router.push(
    \\\`/collections/\\\${item.slug}\\\`,
  );
}}`}
              </Box>
            </Stack>
          </Box>

          {/* Full image navigation */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                }}
              >
                3. Full image remains clickable
              </Typography>

              <Typography variant="body2" color="text.secondary">
                When getHref returns a URL, Rails places a full-size semantic
                anchor over the image. The href remains available in the DOM,
                while onNavigate controls the actual application navigation.
              </Typography>

              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  overflow: "auto",
                  borderRadius: 2,
                  bgcolor: "action.hover",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                {`getHref={(item) =>
  \\\`/collections/\\\${item.slug}\\\`
}

onNavigate={(item) => {
  router.push(
    \\\`/collections/\\\${item.slug}\\\`,
  );
}}`}
              </Box>
            </Stack>
          </Box>

          {/* Image integration */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                }}
              >
                4. Next.js Image integration
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ImageComponent remains available when the application wants
                Rails to use next/image. This is independent from routing.
              </Typography>

              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  overflow: "auto",
                  borderRadius: 2,
                  bgcolor: "action.hover",
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                {`import Image from "next/image";

<Rails
  ImageComponent={Image}
/>`}
              </Box>
            </Stack>
          </Box>

          {/* Architecture rule */}

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "action.hover",
            }}
          >
            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                }}
              >
                Recommended architecture
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Keep the API framework-independent. Keep Rails
                framework-independent. Let the consuming application own routing
                and optionally provide framework-specific image rendering.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                }}
              >
                API → JSON → Next.js → Rails → onNavigate / ImageComponent
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </DemoBlock>
    </ComponentPage>
  );
};

export default RailsPage;
