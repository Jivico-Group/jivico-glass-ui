Yes. I’d update the documentation to include the new `height`, `minHeight`, and `maxHeight` APIs, and also correct the default `size` to **`medium`** because that is what the current component implementation uses.

I’d also clarify that `height` takes precedence over `aspectRatio`, while `maxHeight` only caps the resulting height.

Here is the complete updated `usage.md`:

````md
# Spotlight

`Spotlight` is a responsive visual feature component for presenting a single highlighted piece of content.

It is intentionally generic and independent of any database, routing, product, category, or CMS schema.

Use it for:

- Promotional campaigns
- New collections
- Product launches
- Editorial content
- Customization experiences
- Seasonal campaigns
- Offers
- Brand storytelling
- Featured categories
- Any other single highlighted visual

---

## Import

```tsx
import { Spotlight } from "jivico-glass-ui";
```
````

---

## Basic Usage

```tsx
<Spotlight
  image="/images/new-drop.jpg"
  title="NEW DROP"
  description="Fresh pieces, made to stand out."
  action={{
    label: "SHOP NOW",
    href: "/collections/new-drop",
  }}
/>
```

The default variant is `overlay` and the default size is `medium`.

---

# Props

## `image`

```ts
image: string;
```

Main image displayed by the Spotlight.

```tsx
<Spotlight image="/images/originals.jpg" title="ORIGINALS" />
```

This prop is required.

---

## `mobileImage`

```ts
mobileImage?: string
```

Optional image specifically for smaller screens.

```tsx
<Spotlight
  image="/images/originals-desktop.jpg"
  mobileImage="/images/originals-mobile.jpg"
  title="ORIGINALS"
/>
```

The component uses a `<picture>` element so the browser can select the appropriate image.

---

## `alt`

```ts
alt?: string
```

Accessible description for the image.

```tsx
<Spotlight
  image="/images/originals.jpg"
  alt="Model wearing a Jivico Originals T-shirt"
  title="ORIGINALS"
/>
```

If the image is purely decorative, the default empty value can be used.

---

## `eyebrow`

```ts
eyebrow?: ReactNode
```

Small supporting label displayed above the title.

```tsx
<Spotlight
  image="/images/drop.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="THE NEW ESSENTIALS"
/>
```

It can also contain custom React content:

```tsx
<Spotlight
  image="/images/drop.jpg"
  eyebrow={
    <span>
      NEW <strong>DROP</strong>
    </span>
  }
  title="THE NEW ESSENTIALS"
/>
```

---

## `title`

```ts
title?: ReactNode
```

Primary Spotlight heading.

```tsx
<Spotlight image="/images/drop.jpg" title="WEAR YOUR ORIGINAL" />
```

Because the prop accepts `ReactNode`, custom markup can also be used:

```tsx
<Spotlight
  image="/images/drop.jpg"
  title={
    <>
      WEAR YOUR
      <br />
      <strong>ORIGINAL</strong>
    </>
  }
/>
```

---

## `description`

```ts
description?: ReactNode
```

Supporting text displayed below the title.

```tsx
<Spotlight
  image="/images/drop.jpg"
  title="NEW DROP"
  description="Fresh pieces made for everyday expression."
/>
```

---

# Action

## `action`

```ts
action?: SpotlightAction
```

Adds a CTA button.

```ts
interface SpotlightAction {
  label: string;
  href?: string;
  onClick?: () => void;
}
```

### Link

```tsx
<Spotlight
  image="/images/drop.jpg"
  title="NEW DROP"
  action={{
    label: "SHOP NOW",
    href: "/collections/new-drop",
  }}
/>
```

### Click handler

```tsx
<Spotlight
  image="/images/freestyle.jpg"
  title="MAKE IT YOURS"
  action={{
    label: "CUSTOMIZE NOW",
    onClick: () => {
      console.log("Open customization");
    },
  }}
/>
```

When `href` is provided, the action behaves as a link.

When `href` is omitted, `onClick` is used.

---

# Variants

`Spotlight` supports three visual variants.

```ts
variant?: "overlay" | "split" | "minimal"
```

---

## Overlay

The default variant.

Content is positioned over the image with a cinematic gradient.

```tsx
<Spotlight
  image="/images/originals.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="SAME SOUL. NEW ESSENTIALS."
  description="A new generation of everyday pieces."
  action={{
    label: "EXPLORE ORIGINALS",
    href: "/originals",
  }}
  variant="overlay"
/>
```

### Best for

- Homepage features
- Campaigns
- Product launches
- Promotional content
- Brand storytelling
- Large visual sections

---

## Split

Image and content are displayed separately.

```tsx
<Spotlight
  image="/images/freestyle.jpg"
  eyebrow="JIVICO FREESTYLE"
  title="MAKE IT YOURS."
  description="Turn your image into something uniquely yours."
  action={{
    label: "START CUSTOMIZING",
    href: "/freestyle",
  }}
  variant="split"
/>
```

### Best for

- Customization
- Editorial sections
- Product storytelling
- Feature explanations
- Brand content

On smaller screens, the layout automatically becomes stacked.

---

## Minimal

Image-focused presentation with content below the image.

```tsx
<Spotlight
  image="/images/originals.jpg"
  eyebrow="ORIGINALS"
  title="ESSENTIALS, REDEFINED."
  description="Built for everyday expression."
  action={{
    label: "EXPLORE",
    href: "/originals",
  }}
  variant="minimal"
/>
```

### Best for

- Editorial cards
- Collection highlights
- Smaller content sections
- Magazine-style layouts

---

# Size

```ts
size?: "small" | "medium" | "large"
```

Default:

```ts
"medium";
```

Size controls the general visual scale of the Spotlight, including its default minimum height, content spacing, and title scale.

It does **not** force a fixed height.

---

## Small

```tsx
<Spotlight image="/images/drop.jpg" title="NEW DROP" size="small" />
```

Useful for smaller sections and supporting content.

---

## Medium

```tsx
<Spotlight image="/images/drop.jpg" title="NEW DROP" size="medium" />
```

Useful for standard feature sections.

---

## Large

```tsx
<Spotlight image="/images/drop.jpg" title="NEW DROP" size="large" />
```

Useful for prominent homepage sections.

---

# Height

Spotlight supports explicit height control.

```ts
height?: number | string | ResponsiveDimension
```

A numeric value is interpreted as pixels.

```tsx
<Spotlight image="/images/offer.jpg" height={100} />
```

This creates a Spotlight with a height of approximately `100px`.

A CSS value can also be provided:

```tsx
<Spotlight image="/images/offer.jpg" height="300px" />
```

Other CSS units can be used:

```tsx
<Spotlight image="/images/offer.jpg" height="60vh" />
```

---

## Responsive Height

Height can be configured responsively.

```tsx
<Spotlight
  image="/images/offer.jpg"
  height={{
    xs: 180,
    md: 300,
    lg: 400,
  }}
/>
```

Available breakpoints:

```ts
{
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
}
```

---

# Maximum Height

Use `maxHeight` when the Spotlight should be able to size naturally but should never exceed a specific height.

```ts
maxHeight?: number | string | ResponsiveDimension
```

For example:

```tsx
<Spotlight image="/images/offer.jpg" maxHeight={100} />
```

This is useful when you want a very compact promotional strip.

For example:

```tsx
<Spotlight
  image="/images/offer.jpg"
  eyebrow="LIMITED TIME"
  title="20% OFF YOUR FIRST ORDER"
  action={{
    label: "SHOP NOW",
    href: "/offers",
  }}
  maxHeight={100}
/>
```

A CSS value can also be used:

```tsx
<Spotlight image="/images/offer.jpg" maxHeight="400px" />
```

Responsive maximum height is supported:

```tsx
<Spotlight
  image="/images/offer.jpg"
  maxHeight={{
    xs: 100,
    md: 180,
    lg: 240,
  }}
/>
```

---

# Minimum Height

Use `minHeight` when the Spotlight should never become smaller than a specific height.

```ts
minHeight?: number | string | ResponsiveDimension
```

Example:

```tsx
<Spotlight image="/images/drop.jpg" minHeight={300} title="NEW DROP" />
```

Responsive values are supported:

```tsx
<Spotlight
  image="/images/drop.jpg"
  minHeight={{
    xs: 220,
    md: 320,
    lg: 420,
  }}
/>
```

---

# Height vs Aspect Ratio

`height` and `aspectRatio` serve different purposes.

### `aspectRatio`

Controls the proportional relationship between width and height.

```tsx
<Spotlight image="/images/campaign.jpg" aspectRatio="16 / 7" />
```

The height changes as the available width changes.

---

### `height`

Controls the actual height.

```tsx
<Spotlight image="/images/campaign.jpg" height={300} />
```

The Spotlight uses the specified height rather than calculating it from the aspect ratio.

---

### `maxHeight`

Places an upper limit on the height.

```tsx
<Spotlight image="/images/campaign.jpg" maxHeight={300} />
```

---

### Combining Them

You can combine `aspectRatio` with `maxHeight`.

```tsx
<Spotlight image="/images/campaign.jpg" aspectRatio="16 / 7" maxHeight={300} />
```

This is useful when you want proportional sizing on smaller containers but don't want the Spotlight to become excessively tall.

---

## Height Priority

When controlling the Spotlight dimensions:

```text
height
   ↓
explicit height

aspectRatio
   ↓
proportional sizing when height is not explicitly provided

minHeight
   ↓
minimum allowed height

maxHeight
   ↓
maximum allowed height
```

For example:

```tsx
<Spotlight image="/images/campaign.jpg" aspectRatio="16 / 7" height={300} />
```

Here, the explicit `height` controls the Spotlight rather than the `aspectRatio`.

---

# Aspect Ratio

```ts
aspectRatio?: string
```

Default:

```ts
"16 / 7";
```

Any valid CSS aspect ratio can be provided.

### Wide

```tsx
<Spotlight
  image="/images/campaign.jpg"
  aspectRatio="21 / 9"
  title="THE NEXT ORIGINAL"
/>
```

### Standard Landscape

```tsx
<Spotlight
  image="/images/campaign.jpg"
  aspectRatio="16 / 9"
  title="THE NEXT ORIGINAL"
/>
```

### Portrait

```tsx
<Spotlight
  image="/images/campaign.jpg"
  aspectRatio="4 / 5"
  title="THE NEXT ORIGINAL"
/>
```

### Square

```tsx
<Spotlight
  image="/images/campaign.jpg"
  aspectRatio="1 / 1"
  title="THE NEXT ORIGINAL"
/>
```

---

# Image Position

```ts
imagePosition?: string
```

Controls the CSS `object-position` of the image.

Default:

```ts
"center";
```

Examples:

```tsx
<Spotlight
  image="/images/model.jpg"
  imagePosition="center top"
  title="ORIGINALS"
/>
```

```tsx
<Spotlight
  image="/images/model.jpg"
  imagePosition="50% 30%"
  title="ORIGINALS"
/>
```

This is especially useful when the subject of an image is not centered.

---

# Radius

```ts
radius?: number | string
```

Controls the corner radius of the Spotlight.

A numeric value uses the MUI theme spacing system.

```tsx
<Spotlight image="/images/drop.jpg" radius={3} title="NEW DROP" />
```

A CSS value can also be provided:

```tsx
<Spotlight image="/images/drop.jpg" radius="24px" title="NEW DROP" />
```

The default value uses the theme's `shape.borderRadius`.

### Square

```tsx
<Spotlight image="/images/drop.jpg" radius={0} />
```

### Custom

```tsx
<Spotlight image="/images/drop.jpg" radius="32px" />
```

> If the shared Jivico radius system is later standardized across components, semantic values such as `square`, `rounded`, and `soft` can be added consistently to `Spotlight`, `Rails`, and other components.

---

# Custom Content

`children` can be used to add additional content after the standard description and action.

```tsx
<Spotlight
  image="/images/drop.jpg"
  title="NEW DROP"
  description="Fresh pieces for the new season."
>
  <Typography variant="caption">Limited collection</Typography>
</Spotlight>
```

A more complex example:

```tsx
<Spotlight
  image="/images/drop.jpg"
  title="NEW DROP"
  description="Fresh pieces for the new season."
>
  <Stack direction="row" spacing={1}>
    <Chip label="Limited" size="small" />
    <Chip label="New" size="small" />
  </Stack>
</Spotlight>
```

---

# Styling

Use `sx` for instance-specific customization.

```tsx
<Spotlight
  image="/images/drop.jpg"
  title="NEW DROP"
  sx={{
    maxWidth: 1200,
    mx: "auto",
  }}
/>
```

Responsive styling is supported:

```tsx
<Spotlight
  image="/images/drop.jpg"
  sx={{
    mt: {
      xs: 2,
      md: 4,
    },
  }}
/>
```

---

# E-Commerce Example

A Jivico collection feature:

```tsx
<Spotlight
  image="/images/originals.jpg"
  mobileImage="/images/originals-mobile.jpg"
  alt="Jivico Originals collection"
  eyebrow="JIVICO ORIGINALS"
  title="SAME SOUL. NEW ESSENTIALS."
  description="Premium everyday pieces designed to become your originals."
  action={{
    label: "SHOP ORIGINALS",
    href: "/collections/originals",
  }}
  variant="overlay"
  size="large"
  aspectRatio="16 / 7"
  radius="24px"
/>
```

---

# Offer Example

For a compact promotional strip:

```tsx
<Spotlight
  image="/images/offer.jpg"
  eyebrow="LIMITED TIME"
  title="20% OFF YOUR FIRST ORDER"
  description="Start your Jivico collection with something original."
  action={{
    label: "SHOP NOW",
    href: "/collections/originals",
  }}
  variant="overlay"
  height={100}
  radius="16px"
/>
```

For a responsive offer:

```tsx
<Spotlight
  image="/images/offer.jpg"
  eyebrow="LIMITED TIME"
  title="20% OFF YOUR FIRST ORDER"
  action={{
    label: "SHOP NOW",
    href: "/offers",
  }}
  variant="overlay"
  height={{
    xs: 140,
    md: 180,
    lg: 220,
  }}
  radius="soft"
/>
```

> If using `radius="soft"`, make sure the shared semantic radius API has been implemented in the component type.

---

# Freestyle Example

```tsx
<Spotlight
  image="/images/freestyle.jpg"
  mobileImage="/images/freestyle-mobile.jpg"
  alt="Custom Jivico Freestyle T-shirt"
  eyebrow="JIVICO FREESTYLE"
  title="MAKE IT YOURS."
  description="Upload your image. Create your piece. Make it an Original."
  action={{
    label: "CUSTOMIZE NOW",
    href: "/freestyle",
  }}
  variant="split"
  size="large"
  radius="24px"
/>
```

---

# Editorial Example

```tsx
<Spotlight
  image="/images/editorial.jpg"
  eyebrow="THE JIVICO EDIT"
  title="WEAR YOUR STORY."
  description="Pieces inspired by the people who make them their own."
  action={{
    label: "DISCOVER",
    href: "/stories",
  }}
  variant="minimal"
  size="medium"
/>
```

---

# Compact Promotional Spotlight

Spotlight can also be used as a compact horizontal promotional element.

```tsx
<Spotlight
  image="/images/promo.jpg"
  title="FREE SHIPPING"
  action={{
    label: "SHOP NOW",
    href: "/shop",
  }}
  height={100}
  maxHeight={100}
  radius="16px"
/>
```

This is useful for:

- Offers
- Shipping promotions
- Limited-time campaigns
- Announcement-style visual sections
- Short promotional messages

---

# Using Application Data

`Spotlight` should remain independent from application/database models.

For example, your application might have:

```ts
const campaign = {
  id: "campaign-01",
  slug: "originals",
  image: "/images/originals.jpg",
  title: "SAME SOUL. NEW ESSENTIALS.",
  description: "Premium everyday pieces.",
};
```

Map the application data into the component:

```tsx
<Spotlight
  image={campaign.image}
  title={campaign.title}
  description={campaign.description}
  action={{
    label: "EXPLORE",
    href: `/collections/${campaign.slug}`,
  }}
/>
```

The `Spotlight` component itself does not need to know what a `slug` is.

---

# Homepage Composition

A Jivico homepage can combine `Showcase`, `Rails`, and `Spotlight`.

```tsx
<>
  <Showcase items={heroItems} autoplay navigation="dots" />

  <CategoriesSection>
    <Rails
      items={categories}
      getKey={(item) => item.id}
      getImage={(item) => item.image}
      getTitle={(item) => item.name}
    />
  </CategoriesSection>

  <Spotlight
    image="/images/offer.jpg"
    eyebrow="LIMITED TIME"
    title="20% OFF YOUR FIRST ORDER"
    action={{
      label: "SHOP NOW",
      href: "/offers",
    }}
    maxHeight={180}
  />

  <BestSellersSection>
    <Rails
      items={bestSellers}
      getKey={(item) => item.id}
      getImage={(item) => item.image}
      getTitle={(item) => item.name}
    />
  </BestSellersSection>

  <TrendingSection>
    <Rails
      items={trending}
      getKey={(item) => item.id}
      getImage={(item) => item.image}
      getTitle={(item) => item.name}
    />
  </TrendingSection>

  <Spotlight
    image="/images/freestyle.jpg"
    eyebrow="JIVICO FREESTYLE"
    title="MAKE IT YOURS."
    description="Create a T-shirt from your own image."
    action={{
      label: "CUSTOMIZE NOW",
      href: "/freestyle",
    }}
    variant="split"
  />
</>
```

This keeps the responsibilities clear:

```text
Showcase
    Hero / storytelling
         ↓
Rails
    Collections / categories
         ↓
Spotlight
    Highlighted campaign
         ↓
Rails
    Best sellers
         ↓
Rails
    Trending
         ↓
Spotlight
    Freestyle / editorial
```

---

# Accessibility

Always provide meaningful `alt` text when the image conveys information.

```tsx
<Spotlight
  image="/images/originals.jpg"
  alt="Model wearing a black Jivico Originals T-shirt"
  title="ORIGINALS"
/>
```

For decorative imagery:

```tsx
<Spotlight image="/images/background.jpg" alt="" title="NEW DROP" />
```

Use `aria-label` when the Spotlight itself needs an explicit accessible label:

```tsx
<Spotlight
  image="/images/drop.jpg"
  aria-label="Jivico Originals new collection"
  title="NEW DROP"
/>
```

---

# Recommended Usage

For Jivico, the recommended pattern is:

### Homepage Hero

Use `Showcase`.

### Categories

Use `Rails`.

### Best Sellers

Use `Rails`.

### Trending Products

Use `Rails`.

### Promotional Campaign

Use `Spotlight`.

### Freestyle Customization

Use `Spotlight`.

### Editorial Story

Use `Spotlight`.

### Single Featured Collection

Use `Spotlight`.

### Compact Promotion

Use `Spotlight` with `height` or `maxHeight`.

---

# Design Principle

`Spotlight` is intentionally a **single-content component**.

It should not become responsible for:

- Routing
- Database models
- Product logic
- Collection logic
- CMS logic
- Slugs
- API calls
- Carousel behavior
- Pagination
- Horizontal scrolling

Those responsibilities belong to the application or to more specialized components.

The intended architecture is:

```text
Application Data

       ↓

   Mapping Layer

       ↓

 ┌───────────────┐
 │   Showcase    │  ← multiple stories
 ├───────────────┤
 │    Rails      │  ← multiple items
 ├───────────────┤
 │   Spotlight   │  ← one highlighted story
 └───────────────┘

       ↓

    UI Output
```

This keeps `Spotlight` reusable across Jivico Studio, future Jivico verticals, and other projects using `jivico-glass-ui`.

```

One thing I intentionally corrected: the documentation no longer claims `radius="soft"` is currently supported, because the current `SpotlightProps` type only supports `number | string`. That should be added to the component API when we implement the shared semantic radius system.
```
