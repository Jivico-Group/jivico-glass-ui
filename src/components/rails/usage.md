Yes. The documentation should now reflect the **generic Rails API**, including the new `transition` and **auto-slide/autoplay** capability, and the updated radius model.

I would also change the wording from “slide” to “item/rail movement” where appropriate, because `Rails` is not a hero carousel.

Below is the **full updated `usage.md`**.

````md
# Rails

`Rails` is a generic, responsive horizontal content rail for displaying collections of visual content such as:

- Categories
- Products
- Collections
- Brands
- Editorial cards
- Campaigns
- Lookbooks
- Articles
- Any custom data structure

The component is intentionally independent of any database schema.

---

# Import

```tsx
import { Rails } from "jivico-glass-ui";
```
````

Or, if importing directly from the component:

```tsx
import { Rails } from "./Rails";
```

---

# Basic Usage

The minimum required props are:

- `items`
- `getKey`
- `getImage`

```tsx
<Rails
  items={categories}
  getKey={(category) => category.id}
  getImage={(category) => category.image}
/>
```

The default renderer displays:

```text
┌──────────────────┐
│                  │
│      IMAGE       │
│                  │
└──────────────────┘

Category Name    >
```

---

# With Title

Use `getTitle` to display the item name below the image.

```tsx
<Rails
  items={categories}
  getKey={(category) => category.id}
  getImage={(category) => category.image}
  getTitle={(category) => category.name}
/>
```

---

# Product Rail

`Rails` is generic and does not require a specific product structure.

```tsx
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const products: Product[] = [
  {
    id: "tee-001",
    name: "Originals Tee",
    image: "/products/originals.jpg",
    price: 899,
  },
  {
    id: "tee-002",
    name: "Oversized Essential",
    image: "/products/oversized.jpg",
    price: 999,
  },
];
```

```tsx
<Rails
  items={products}
  getKey={(product) => product.id}
  getImage={(product) => product.image}
  getTitle={(product) => product.name}
  renderContent={({ item }) => (
    <Typography variant="body2">₹{item.price}</Typography>
  )}
/>
```

The resulting structure is:

```text
┌──────────────────┐
│                  │
│      IMAGE       │
│                  │
└──────────────────┘

Originals Tee    >

₹899
```

---

# Custom Content

Use `renderContent` when you need additional information below the title.

Typical use cases:

- Price
- Compare-at price
- Rating
- Product badges
- Availability
- Color count
- Category metadata

```tsx
<Rails
  items={products}
  getKey={(product) => product.id}
  getImage={(product) => product.image}
  getTitle={(product) => product.name}
  renderContent={({ item }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 0.5,
      }}
    >
      <Typography variant="body2">₹{item.price}</Typography>

      <Typography variant="caption" color="text.secondary">
        4 colours
      </Typography>
    </Box>
  )}
/>
```

`renderContent` does not replace the image or title.

It is rendered below them.

---

# Completely Custom Item

Use `renderItem` when you want complete control over the card.

When `renderItem` is provided, the default item renderer is not used.

```tsx
<Rails
  items={products}
  getKey={(product) => product.id}
  getImage={(product) => product.image}
  renderItem={({ item }) => (
    <Box>
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: "100%",
          aspectRatio: "4 / 5",
          objectFit: "cover",
          borderRadius: 2,
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

      <Typography color="text.secondary">₹{item.price}</Typography>
    </Box>
  )}
/>
```

Use `renderItem` when the default structure is not enough.

---

# Custom Image Renderer

Use `renderImage` when the image itself needs custom rendering.

Examples:

- Next.js `Image`
- Optimized image component
- Video
- Image with custom overlays
- Art-directed images
- Custom media component

```tsx
<Rails
  items={products}
  getKey={(product) => product.id}
  getImage={(product) => product.image}
  getTitle={(product) => product.name}
  renderImage={({ item, src }) => (
    <Box
      component="img"
      src={src}
      alt={item.name}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )}
/>
```

The `renderImage` function receives:

```tsx
{
  (item, index, src);
}
```

---

# Responsive Columns

Use `columns` to control how many items are visible at each breakpoint.

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  columns={{
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
  }}
/>
```

Breakpoints:

| Breakpoint | Meaning                |
| ---------- | ---------------------- |
| `xs`       | Mobile                 |
| `sm`       | Small tablet           |
| `md`       | Tablet / small desktop |
| `lg`       | Desktop                |
| `xl`       | Large desktop          |

Example:

```text
Mobile

┌──────┐ ┌──────┐
│  1   │ │  2   │
└──────┘ └──────┘


Desktop

┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │ │ 4  │ │ 5  │
└────┘ └────┘ └────┘ └────┘ └────┘
```

---

# Editorial Partial Cards

`itemWidth` can be used instead of column-based sizing.

This is useful when you want the next item to partially appear.

```tsx
<Rails
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
/>
```

On mobile this creates an editorial layout such as:

```text
┌─────────────────────┐
│                     │
│        IMAGE        │
│                     │
└─────────────────────┘ ┌────
                        │
                        │
```

This is useful for fashion/editorial sections where showing the next card encourages horizontal interaction.

---

# Gap

Control the spacing between items.

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  gap={24}
/>
```

The value follows the same general spacing unit used by MUI's styling system.

---

# Navigation

The `navigation` prop supports:

```tsx
navigation = "arrows";
```

```tsx
navigation = "dots";
```

```tsx
navigation = "both";
```

```tsx
navigation = "none";
```

---

## Arrows

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="arrows"
/>
```

Arrows allow the user to move through the rail using previous/next controls.

---

## Dots

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="dots"
/>
```

Dots provide a compact navigation indicator.

---

## Both

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="both"
/>
```

Displays both arrow navigation and dots.

---

## None

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="none"
/>
```

The user can still use native horizontal touch scrolling when `swipe` is enabled.

---

# Custom Navigation Buttons

The default arrows can be replaced with your own components.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="arrows"
  renderPreviousButton={({ onClick, disabled }) => (
    <IconButton onClick={onClick} disabled={disabled}>
      <ArrowLeft />
    </IconButton>
  )}
  renderNextButton={({ onClick, disabled }) => (
    <IconButton onClick={onClick} disabled={disabled}>
      <ArrowRight />
    </IconButton>
  )}
/>
```

Navigation context:

```tsx
{
  onClick: () => void;
  disabled: boolean;
}
```

---

# Transition

The `transition` prop controls the visual interaction applied to rail items.

Available values:

```tsx
type RailTransition = "none" | "fade" | "scale" | "lift";
```

---

## None

No hover transition is applied.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  transition="none"
/>
```

Useful for minimal layouts.

---

## Fade

Adds a subtle image overlay on interaction.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  transition="fade"
/>
```

---

## Scale

The image gently scales on hover.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  transition="scale"
/>
```

This works particularly well for product and category imagery.

---

## Lift

The entire item visually lifts while the image scales.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  transition="lift"
/>
```

---

# Auto Slide

`Rails` can optionally move automatically through its items.

Use `autoplay` to enable automatic movement.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
/>
```

The rail continues to behave like a horizontal content rail while automatically advancing.

---

## Auto Slide Interval

Use `autoplayInterval` to control the delay between movements.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
  autoplayInterval={4000}
/>
```

Example:

```tsx
autoplayInterval={3000}
```

moves approximately every 3 seconds.

```tsx
autoplayInterval={5000}
```

moves approximately every 5 seconds.

A slower interval is generally useful for editorial or fashion content.

---

## Auto Slide With Loop

For a continuously cycling rail:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
  autoplayInterval={4000}
  loop
/>
```

When the rail reaches the end, it returns to the beginning.

---

## Auto Slide With Navigation

Autoplay can be combined with manual controls.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  navigation="arrows"
  autoplay
  autoplayInterval={5000}
  loop
/>
```

The user can manually navigate while autoplay remains enabled.

---

## Auto Slide and Mobile

Autoplay should be used carefully on mobile.

A typical configuration is:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
  autoplayInterval={6000}
  loop
  swipe
/>
```

Touch interaction should remain available so the user can manually explore the rail.

---

# Swipe

Swipe/touch scrolling is enabled by default.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  swipe
/>
```

Disable it if required:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  swipe={false}
/>
```

On mobile, native horizontal touch scrolling is used.

`swipe` does not imply custom mouse-drag physics. The component uses native horizontal scrolling.

---

# Loop

By default, the rail stops at the beginning and end.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  loop
/>
```

With `loop` enabled:

```text
← [1] [2] [3] [4] →

              ↓

              [1]
```

When the user reaches the end and presses next, the rail returns to the beginning.

Looping can also be combined with autoplay:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
  autoplayInterval={5000}
  loop
/>
```

---

# Scroll Step

Control how many item widths are moved per navigation action.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  step={1}
/>
```

Move multiple items:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  step={2}
/>
```

`step={1}` moves approximately one item width per navigation action.

`step={2}` moves approximately two item widths.

---

# Scroll Snap

Snap scrolling is enabled by default.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  snap
/>
```

Disable it:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  snap={false}
/>
```

---

# Image Aspect Ratio

The default image ratio is:

```tsx
"4 / 5";
```

Change it:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  imageAspectRatio="1 / 1"
/>
```

Landscape:

```tsx
<Rails
  items={collections}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  imageAspectRatio="16 / 9"
/>
```

Portrait:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  imageAspectRatio="3 / 4"
/>
```

---

# Image Radius

The image radius can be controlled with the `radius` prop.

The recommended semantic values are:

```tsx
type RailRadius = "square" | "rounded" | "soft";
```

---

## Square

No corner radius.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  radius="square"
/>
```

---

## Rounded

A subtle corner radius.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  radius="rounded"
/>
```

---

## Soft

A slightly stronger but still restrained corner radius.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  radius="soft"
/>
```

The `rounded` and `soft` values are intentionally kept relatively small so the component remains suitable for fashion/ecommerce layouts.

---

# Item Styling

Use `itemSx` to style every item.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  itemSx={{
    transition: "transform 200ms ease",
  }}
/>
```

---

# Rail Styling

Use `sx` to style the overall rail.

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  sx={{
    mt: 4,
  }}
/>
```

---

# Accessibility

Always provide meaningful image data.

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  aria-label="Shop categories"
/>
```

The component provides accessible labels for navigation buttons.

---

# Generic Data

`Rails` does not require a specific object shape.

## Categories

```tsx
<Rails
  items={categories}
  getKey={(item) => item.slug}
  getImage={(item) => item.cover}
  getTitle={(item) => item.label}
/>
```

## Products

```tsx
<Rails
  items={products}
  getKey={(item) => item.sku}
  getImage={(item) => item.thumbnail}
  getTitle={(item) => item.title}
/>
```

## Collections

```tsx
<Rails
  items={collections}
  getKey={(item) => item.key}
  getImage={(item) => item.heroImage}
  getTitle={(item) => item.displayName}
/>
```

## Articles

```tsx
<Rails
  items={articles}
  getKey={(item) => item.slug}
  getImage={(item) => item.coverImage}
  getTitle={(item) => item.heading}
/>
```

This keeps the component independent from GraphQL, REST, Prisma, MongoDB, or any other backend structure.

---

# Best Sellers

A typical ecommerce Best Sellers section can be implemented directly with `Rails`.

```tsx
<Box>
  <Typography
    variant="h4"
    sx={{
      mb: 3,
      fontWeight: 700,
    }}
  >
    Best Sellers
  </Typography>

  <Rails
    items={products}
    getKey={(product) => product.id}
    getImage={(product) => product.image}
    getTitle={(product) => product.name}
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
    transition="scale"
    imageAspectRatio="4 / 5"
    radius="rounded"
    renderContent={({ item }) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 0.5,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          ₹{item.price}
        </Typography>

        <Rating value={item.rating} precision={0.1} size="small" readOnly />
      </Box>
    )}
  />
</Box>
```

---

# Category Section

Categories can use a more editorial presentation.

```tsx
<Box>
  <Typography
    variant="h4"
    sx={{
      mb: 3,
      fontWeight: 700,
    }}
  >
    Shop Categories
  </Typography>

  <Rails
    items={categories}
    getKey={(category) => category.id}
    getImage={(category) => category.image}
    getTitle={(category) => category.name}
    columns={{
      xs: 2,
      sm: 3,
      md: 4,
      lg: 6,
    }}
    gap={16}
    navigation="arrows"
    swipe
    snap
    transition="scale"
    imageAspectRatio="4 / 5"
    radius="rounded"
  />
</Box>
```

---

# Editorial Rail

For fashion/editorial content, use partial cards.

```tsx
<Rails
  items={stories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.title}
  itemWidth={{
    xs: "82%",
    sm: "48%",
    md: "32%",
  }}
  gap={24}
  navigation="none"
  swipe
  snap
  transition="lift"
  imageAspectRatio="16 / 9"
  radius="soft"
/>
```

---

# Auto-Playing Category Rail

For a category strip that automatically advances:

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  columns={{
    xs: 2,
    sm: 3,
    md: 4,
    lg: 6,
  }}
  gap={16}
  navigation="arrows"
  autoplay
  autoplayInterval={5000}
  loop
  swipe
  snap
  transition="scale"
  imageAspectRatio="4 / 5"
  radius="rounded"
/>
```

---

# Auto-Playing Best Sellers

```tsx
<Rails
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
  autoplay
  autoplayInterval={6000}
  loop
  swipe
  snap
  transition="scale"
  imageAspectRatio="4 / 5"
  radius="rounded"
  renderContent={({ item }) => (
    <Typography variant="body2" fontWeight={600}>
      ₹{item.price}
    </Typography>
  )}
/>
```

---

# Complete Example

```tsx
import { Box, Typography, Rating } from "@mui/material";

import { Rails } from "jivico-glass-ui";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "Originals Tee",
    image: "/products/originals.jpg",
    price: 899,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Oversized Essential",
    image: "/products/oversized.jpg",
    price: 999,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Washed Heavyweight",
    image: "/products/washed.jpg",
    price: 1199,
    rating: 4.9,
  },
];

export function ProductRail() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
        }}
      >
        Best Sellers
      </Typography>

      <Rails
        items={products}
        getKey={(product) => product.id}
        getImage={(product) => product.image}
        getTitle={(product) => product.name}
        columns={{
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        }}
        gap={20}
        navigation="arrows"
        autoplay
        autoplayInterval={6000}
        loop
        swipe
        snap
        transition="scale"
        imageAspectRatio="4 / 5"
        radius="rounded"
        renderContent={({ item }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 0.5,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              ₹{item.price}
            </Typography>

            <Rating value={item.rating} precision={0.1} size="small" readOnly />
          </Box>
        )}
      />
    </Box>
  );
}
```

---

# API Reference

## `RailProps<T>`

```tsx
interface RailProps<T> {
  items: T[];

  getKey: (item: T, index: number) => React.Key;

  getImage: (item: T, index: number) => string;

  getTitle?: (item: T, index: number) => ReactNode;

  renderContent?: (context: RailRenderContext<T>) => ReactNode;

  renderItem?: (context: RailRenderContext<T>) => ReactNode;

  renderImage?: (context: RailImageContext<T>) => ReactNode;

  columns?: RailColumns;

  itemWidth?: RailItemWidth;

  gap?: number;

  justifyContent?: "flex-start" | "center" | "flex-end";

  navigation?: "arrows" | "dots" | "both" | "none";

  renderPreviousButton?: (context: RailNavigationContext) => ReactNode;

  renderNextButton?: (context: RailNavigationContext) => ReactNode;

  swipe?: boolean;

  loop?: boolean;

  step?: number;

  snap?: boolean;

  /**
   * Automatic rail movement.
   */
  autoplay?: boolean;

  /**
   * Delay between automatic movements.
   */
  autoplayInterval?: number;

  /**
   * Item interaction transition.
   */
  transition?: RailTransition;

  imageAspectRatio?: string;

  radius?: RailRadius;

  itemSx?: SxProps<Theme>;

  sx?: SxProps<Theme>;

  className?: string;

  "aria-label"?: string;
}
```

---

# `RailTransition`

```tsx
type RailTransition = "none" | "fade" | "scale" | "lift";
```

### `none`

No visual interaction transition.

### `fade`

Subtle image overlay transition.

### `scale`

Image gently scales on hover.

### `lift`

Item lifts while the image scales.

---

# `RailRadius`

```tsx
type RailRadius = "square" | "rounded" | "soft";
```

Recommended visual behavior:

```text
square
┌──────────────┐
│              │
└──────────────┘

rounded
╭──────────────╮
│              │
╰──────────────╯

soft
╭──────────────╮
│              │
╰──────────────╯
```

`rounded` and `soft` should remain restrained rather than using large card-style radii.

---

# `RailRenderContext<T>`

Used by `renderContent` and `renderItem`.

```tsx
interface RailRenderContext<T> {
  item: T;
  index: number;
}
```

Example:

```tsx
renderContent={({ item, index }) => (
  <Typography>
    {index + 1}. {item.name}
  </Typography>
)}
```

---

# `RailImageContext<T>`

Used by `renderImage`.

```tsx
interface RailImageContext<T> extends RailRenderContext<T> {
  src: string;
}
```

Example:

```tsx
renderImage={({ item, index, src }) => (
  <img
    src={src}
    alt={item.name}
  />
)}
```

---

# `RailNavigationContext`

Used by custom navigation buttons.

```tsx
interface RailNavigationContext {
  onClick: () => void;
  disabled: boolean;
}
```

---

# Recommended Patterns

## Category Rail

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
  columns={{
    xs: 2,
    sm: 3,
    md: 4,
    lg: 6,
  }}
  gap={16}
  navigation="arrows"
  swipe
  snap
  transition="scale"
  radius="rounded"
/>
```

---

## Product Rail

```tsx
<Rails
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
  renderContent={({ item }) => <Typography>₹{item.price}</Typography>}
/>
```

---

## Auto-Playing Product Rail

```tsx
<Rails
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
  navigation="arrows"
  autoplay
  autoplayInterval={6000}
  loop
  swipe
  snap
  transition="scale"
  radius="rounded"
/>
```

---

## Editorial Rail

```tsx
<Rails
  items={stories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.title}
  itemWidth={{
    xs: "82%",
    sm: "48%",
    md: "32%",
  }}
  navigation="none"
  swipe
  snap
  transition="lift"
/>
```

---

## Custom Card Rail

```tsx
<Rails
  items={items}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  renderItem={({ item }) => <CustomCard item={item} />}
/>
```

---

# Design Philosophy

`Rails` should remain a **presentation primitive**, not a database component.

Avoid APIs such as:

```tsx
<Rails products={products} categories={categories} collections={collections} />
```

Prefer:

```tsx
<Rails
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getTitle={(item) => item.name}
/>
```

This allows the same component to work with any future data source.

The architecture is:

```text
Database / GraphQL / API
          ↓
    Application data
          ↓
       Rails<T>
          ↓
   Jivico Glass UI
          ↓
     Visual output
```

The UI library should not know whether the data came from:

- GraphQL
- REST
- Prisma
- MongoDB
- PostgreSQL
- CMS
- Static data
- Local state

It only knows how to present the data supplied by the application.

---

# API Summary

| Prop                   | Purpose                           |
| ---------------------- | --------------------------------- |
| `items`                | Generic data collection           |
| `getKey`               | Unique item key                   |
| `getImage`             | Image resolver                    |
| `getTitle`             | Built-in title resolver           |
| `renderContent`        | Additional content                |
| `renderItem`           | Completely custom item            |
| `renderImage`          | Custom media renderer             |
| `columns`              | Responsive visible item count     |
| `itemWidth`            | Explicit responsive item width    |
| `gap`                  | Space between items               |
| `justifyContent`       | Track alignment                   |
| `navigation`           | Arrows, dots, both, or none       |
| `renderPreviousButton` | Custom previous control           |
| `renderNextButton`     | Custom next control               |
| `swipe`                | Native horizontal touch scrolling |
| `loop`                 | Wrap navigation around            |
| `step`                 | Items moved per navigation        |
| `snap`                 | Scroll snapping                   |
| `autoplay`             | Automatic rail movement           |
| `autoplayInterval`     | Automatic movement interval       |
| `transition`           | Item interaction transition       |
| `imageAspectRatio`     | Built-in image ratio              |
| `radius`               | Image corner style                |
| `itemSx`               | Item-level styling                |
| `sx`                   | Root-level styling                |
| `className`            | Root class                        |
| `aria-label`           | Accessibility label               |

---

# Summary

`Rails` is designed to handle the reusable horizontal content sections found throughout an ecommerce experience.

For Jivico, the same component can power:

```text
Categories
    ↓
New Arrivals
    ↓
Best Sellers
    ↓
Trending
    ↓
Collections
    ↓
Freestyle
    ↓
Editorial
    ↓
Campaigns
```

without requiring separate components for each content type.

The application supplies the data.

`Rails<T>` controls the presentation.

The Jivico theme controls the visual language.

````

### One important implementation note

Because this updated documentation now exposes:

```tsx
autoplay
autoplayInterval
transition
radius="square"
radius="rounded"
radius="soft"
````

your **`Rail.types.ts` and `Rails.tsx` must implement those props before this documentation is published**.

In particular, your current `Rails.tsx` you pasted has `transition` in neither the destructuring nor the rendering logic, and it has **no autoplay implementation yet**. So the docs above represent the API we should build next, rather than pretending the current file already supports it.
