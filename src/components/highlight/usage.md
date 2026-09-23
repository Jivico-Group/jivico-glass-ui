# Highlight

`Highlight` is a responsive visual card component for showcasing featured categories, campaign graphics, promotional offers, and editorial cards.

It can be used as a standalone visual card or embedded inside `Rails<T>` to build horizontal scrollable card feeds.

Use it for:

- Collection & category feature cards
- Standalone campaign banners
- Editorial image cards
- Special offer blocks
- Product highlights inside `Rails`

---

## Import

```tsx
import { Highlight } from "jivico-glass-ui";
```

---

## Basic Usage

```tsx
<Highlight
  image="/images/graphic-tees.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="Graphic Tees"
  description="Bold graphics. Everyday essentials."
  href="/collections/graphic-tees"
/>
```

---

# Props Overview

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `image` | `string` | **Required** | Main image URL |
| `mobileImage` | `string` | `undefined` | Mobile-specific image URL |
| `alt` | `string` | `""` | Accessible image description |
| `variant` | `"overlay" \| "center" \| "minimal"` | `"overlay"` | Visual presentation layout |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Typography scale and content spacing |
| `eyebrow` | `ReactNode` | `undefined` | Small supporting label above title |
| `title` | `ReactNode` | `undefined` | Primary heading |
| `description` | `ReactNode` | `undefined` | Supporting paragraph |
| `action` | `HighlightAction` | `undefined` | Optional CTA button |
| `href` | `string` | `undefined` | Semantic link destination for full image navigation |
| `linkLabel` | `string` | `undefined` | Accessible label for the image link |
| `onNavigate` | `(event) => void` | `undefined` | Navigation handler for full image click |
| `ImageComponent` | `HighlightImageComponent` | `undefined` | Custom image component (e.g. Next.js `next/image`) |
| `aspectRatio` | `string` | `"4 / 5"` | Proportional container aspect ratio |
| `height` | `number \| string \| Dimension` | `undefined` | Explicit height |
| `minHeight` | `number \| string \| Dimension` | `undefined` | Minimum height boundary |
| `maxHeight` | `number \| string \| Dimension` | `undefined` | Maximum height boundary |
| `imagePosition` | `HighlightImagePosition` | `"center"` | CSS object-position cropping |
| `radius` | `number \| string` | `16` | Corner border radius |

---

# Variants

`Highlight` supports three layout variants:

```ts
variant?: "overlay" | "center" | "minimal";
```

Default: `"overlay"`.

- `"overlay"`: Bottom-aligned text content over full image with a dark gradient overlay.
- `"center"`: Center-aligned text content over full image with an ambient dark gradient.
- `"minimal"`: Clean text content positioned below the image card.

```tsx
<Highlight
  image="/images/streetwear.jpg"
  title="Streetwear Essentials"
  variant="overlay"
/>
```

---

# Full Image Navigation (`href` & `onNavigate`)

When `href` is provided, `Highlight` renders a semantic HTML `<a>` link over the image container.

Native browser navigation is automatically prevented via `event.preventDefault()`, delegating client-side routing to `onNavigate`:

```tsx
<Highlight
  image="/images/graphic-tees.jpg"
  eyebrow="JIVICO ORIGINALS"
  title="Graphic Tees"
  description="Bold graphics. Everyday essentials."
  href="/collections/graphic-tees"
  linkLabel="View Graphic Tees"
  onNavigate={() => {
    router.push("/collections/graphic-tees");
  }}
/>
```

---

# Using Highlight Inside Rails

`Highlight` is designed to work inside `Rails<T>` to build visual card carousels:

```tsx
<Rails<CategoryHighlight>
  items={highlights}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  renderItem={({ item }) => (
    <Highlight
      image={item.image}
      eyebrow={item.eyebrow}
      title={item.title}
      description={item.description}
      href={item.href}
      linkLabel={`View ${item.title}`}
      onNavigate={() => {
        router.push(item.href);
      }}
      variant="overlay"
      aspectRatio="4 / 5"
    />
  )}
/>
```

---

# Next.js Integration

Pass Next.js `next/image` via `ImageComponent` and delegate routing via `onNavigate`:

```tsx
// app/components/CategoryHighlightCard.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Highlight } from "jivico-glass-ui";

export function CategoryHighlightCard({ category }) {
  const router = useRouter();

  return (
    <Highlight
      image={category.image}
      alt={category.name}
      eyebrow="FEATURED COLLECTION"
      title={category.name}
      description={category.description}
      href={`/collections/${category.slug}`}
      onNavigate={() => {
        router.push(`/collections/${category.slug}`);
      }}
      ImageComponent={Image}
      aspectRatio="16 / 9"
    />
  );
}
```

---

# Recommended Application Architecture

```text
API JSON Response
       ↓
Next.js Client Component
       ↓
<Highlight /> (UI Component)
       ↓
Semantic <a href="..."> + onNavigate() + ImageComponent={Image}
```

This keeps your API data clean, serializable, and independent of Next.js or any routing framework.
