# Spotlight

`Spotlight` is a responsive visual feature component for presenting a single highlighted piece of content, campaign, hero section, or product launch.

It is intentionally generic and independent of any database, routing, product, category, or CMS schema.

Use it for:

- Promotional campaigns
- New collections
- Product launches
- Editorial content
- Customization experiences
- Seasonal campaigns
- Offers & announcement banners
- Brand storytelling
- Featured categories

---

## Import

```tsx
import { Spotlight } from "jivico-glass-ui";
```

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

# Props Overview

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `image` | `string` | **Required** | Main desktop image URL |
| `mobileImage` | `string` | `undefined` | Mobile-specific image URL |
| `alt` | `string` | `""` | Accessible image description |
| `variant` | `"overlay" \| "split" \| "minimal"` | `"overlay"` | Layout mode |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Visual scale and spacing |
| `eyebrow` | `ReactNode` | `undefined` | Small supporting label above title |
| `title` | `ReactNode` | `undefined` | Primary heading |
| `description` | `ReactNode` | `undefined` | Supporting paragraph |
| `action` | `SpotlightAction` | `undefined` | CTA button configuration |
| `href` | `string` | `undefined` | Semantic link destination for the full card |
| `linkLabel` | `string` | `undefined` | Accessible label for full card anchor |
| `onNavigate` | `(event) => void` | `undefined` | Navigation handler for full card click |
| `ImageComponent` | `SpotlightImageComponent` | `undefined` | Custom image component (e.g. Next.js `next/image`) |
| `renderImage` | `(context) => ReactNode` | `undefined` | Advanced custom image renderer |
| `aspectRatio` | `string` | `"16 / 7"` | Proportional aspect ratio |
| `height` | `number \| string \| Dimension` | `undefined` | Explicit height |
| `minHeight` | `number \| string \| Dimension` | `undefined` | Minimum height boundary |
| `maxHeight` | `number \| string \| Dimension` | `undefined` | Maximum height boundary |
| `imagePosition` | `SpotlightImagePosition` | `"center"` | CSS object-position cropping |
| `radius` | `number \| string` | Theme spacing | Border radius |

---

# Image Props

## `image`

```ts
image: string;
```

Main image displayed by the Spotlight. Required.

```tsx
<Spotlight image="/images/originals.jpg" title="ORIGINALS" />
```

---

## `mobileImage`

```ts
mobileImage?: string;
```

Optional image specifically for smaller screens. The component uses a responsive `<picture>` element so the browser loads the appropriate source.

```tsx
<Spotlight
  image="/images/originals-desktop.jpg"
  mobileImage="/images/originals-mobile.jpg"
  title="ORIGINALS"
/>
```

---

## `alt`

```ts
alt?: string;
```

Accessible description for the image.

```tsx
<Spotlight
  image="/images/originals.jpg"
  alt="Model wearing a Jivico Originals T-shirt"
  title="ORIGINALS"
/>
```

---

# Content Props

## `eyebrow`

```ts
eyebrow?: ReactNode;
```

Small supporting label displayed above the title.

```tsx
<Spotlight
  image="/images/drop.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="THE NEW ESSENTIALS"
/>
```

---

## `title`

```ts
title?: ReactNode;
```

Primary Spotlight heading. Accepts `string` or custom React elements.

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
description?: ReactNode;
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

# Action & Navigation

## `action`

Adds a CTA button inside the Spotlight.

```ts
interface SpotlightAction {
  label: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}
```

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

---

## Full Card Navigation (`href` & `onNavigate`)

Spotlight renders a semantic HTML `<a>` element when `href` is provided, ensuring accessibility, browser status bar previews, and SEO.

Native browser navigation is automatically prevented via `event.preventDefault()`, and actual routing is delegated to `onNavigate`.

```tsx
<Spotlight
  image="/images/originals.jpg"
  eyebrow="STUDIO EXCLUSIVE"
  title="Originals Collection"
  href="/collections/originals"
  linkLabel="View Originals Collection"
  onNavigate={() => {
    router.push("/collections/originals");
  }}
/>
```

---

# Variants

`Spotlight` supports three visual layout variants: `overlay`, `split`, and `minimal`.

```ts
variant?: "overlay" | "split" | "minimal";
```

Default: `"overlay"`.

---

## `overlay`

Content is positioned over the image with a subtle cinematic gradient overlay.

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
- Homepage hero features
- Major campaigns
- Product launches & seasonal drops
- Brand storytelling

---

## `split`

Image and content are displayed side-by-side in a balanced grid layout. On mobile screens, the layout automatically stacks vertically.

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
- Customization tools & interactive features
- Editorial sections
- Feature explanations

---

## `minimal`

Clean vertical stacked flow with image on top and typography below.

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

---

# Size

```ts
size?: "small" | "medium" | "large";
```

Default: `"medium"`.

Controls the general scale of typography, spacing, and default minimum height.

- `small`: Compact sections and supporting cards.
- `medium`: Standard feature sections.
- `large`: Prominent hero banners.

---

# Dimension Control

## `height`

Controls explicit container height.

```tsx
<Spotlight image="/images/offer.jpg" height={300} />
<Spotlight image="/images/offer.jpg" height="50vh" />
```

Responsive height:

```tsx
<Spotlight
  image="/images/offer.jpg"
  height={{
    xs: 200,
    md: 360,
    lg: 480,
  }}
/>
```

---

## `aspectRatio`

Controls the proportional relationship between width and height.

```tsx
<Spotlight image="/images/campaign.jpg" aspectRatio="21 / 9" />
<Spotlight image="/images/campaign.jpg" aspectRatio="16 / 9" />
<Spotlight image="/images/campaign.jpg" aspectRatio="4 / 3" />
```

---

## `minHeight` & `maxHeight`

Set lower and upper boundary limits:

```tsx
<Spotlight
  image="/images/offer.jpg"
  eyebrow="LIMITED TIME"
  title="20% OFF YOUR FIRST ORDER"
  maxHeight={140}
/>
```

---

# Next.js Integration

Spotlight remains 100% framework-agnostic. Framework-specific image renderers (such as `next/image`) can be passed via `ImageComponent`:

```tsx
// app/components/SpotlightHero.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Spotlight } from "jivico-glass-ui";

export function SpotlightHero({ data }) {
  const router = useRouter();

  return (
    <Spotlight
      image={data.image}
      mobileImage={data.mobileImage}
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
}
```

---

# Recommended Application Architecture

```text
Application API / Data (JSON)
            ↓
    Next.js Client Adapter
            ↓
      <Spotlight /> (UI Component)
            ↓
Semantic <a href="..."> + onNavigate() + ImageComponent={Image}
```

This ensures that `Spotlight` remains clean, portable, and accessible across all web applications.
