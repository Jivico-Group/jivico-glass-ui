# Showcase

`Showcase` is a responsive hero carousel and banner slider for multi-slide storytelling, featured product campaigns, photo carousels, and landing page banners.

It keeps application data framework-agnostic while supporting framework-specific image components (`next/image`) and client-side routing (`onNavigate`).

Use it for:

- Homepage hero carousels
- Featured collection sliders
- Product release campaigns
- Minimal photo carousels
- Editorial storytelling banners
- Frosted glass promotional sliders

---

## Import

```tsx
import { Showcase, type ShowcaseItem } from "jivico-glass-ui";
```

---

## Basic Usage

```tsx
const items: ShowcaseItem[] = [
  {
    id: "originals",
    media: {
      src: "/images/originals.jpg",
      alt: "Originals Collection",
    },
    eyebrow: "STUDIO EXCLUSIVE",
    title: "Originals by Studio",
    description: "Limited-edition luxury glassmorphic collections.",
    action: {
      label: "Discover Originals",
      href: "/collections/originals",
    },
    href: "/collections/originals",
  },
  {
    id: "freestyle",
    media: {
      src: "/images/freestyle.jpg",
      alt: "Freestyle Designer",
    },
    eyebrow: "DESIGN STUDIO",
    title: "Create Your Freestyle",
    description: "Custom heavyweight 1-of-1 pieces.",
    action: {
      label: "Explore Freestyle",
      href: "/freestyle",
    },
    href: "/freestyle",
  },
];

<Showcase items={items} autoplay />
```

---

# Props Overview

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `ShowcaseItem[]` | **Required** | Plain data items array |
| `variant` | `"editorial" \| "minimal" \| "glass"` | `"editorial"` | Visual presentation overlay style |
| `size` | `"hero" \| "large" \| "medium" \| "small"` | `"hero"` | Scale, padding, button, and typography size |
| `transition` | `"cinematic" \| "fade" \| "slide"` | `"cinematic"` | Slide transition animation |
| `navigation` | `"vertical" \| "dots" \| "none"` | `"dots"` | Indicator navigation style |
| `radius` | `"rounded" \| "soft" \| "square"` | `"rounded"` | Frame corner radius |
| `autoplay` | `boolean` | `false` | Automatic slide advancement |
| `interval` | `number` | `5000` | Autoplay interval in milliseconds |
| `loop` | `boolean` | `true` | Wrap around from last slide to first |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay on hover |
| `showArrows` | `boolean` | `true` | Previous/Next arrow navigation buttons |
| `showProgress` | `boolean` | `true` | Bottom autoplay progress bar |
| `swipe` | `boolean` | `true` | Touch swipe gestures |
| `onNavigate` | `(item, index, event) => void` | `undefined` | Custom routing callback for full-slide links |
| `ImageComponent` | `ShowcaseImageComponent` | `undefined` | Custom image renderer (e.g. Next.js `next/image`) |
| `imageSizes` | `string` | `"100vw"` | Image sizes hint |
| `imagePriority` | `boolean` | `false` | Prioritize active image loading |
| `activeIndex` | `number` | `undefined` | Controlled active slide index |
| `defaultActiveIndex`| `number` | `0` | Initial active index (uncontrolled) |
| `onActiveIndexChange`| `(index, item) => void` | `undefined` | Slide change listener |
| `height` | `number \| string \| Dimension` | `undefined` | Explicit container height |
| `minHeight` | `number \| string \| Dimension` | Size default | Minimum height boundary |
| `maxHeight` | `number \| string \| Dimension` | `undefined` | Maximum height boundary |
| `aspectRatio` | `string \| ResponsiveObject` | Size default | Proportional container aspect ratio |

---

# Item Data Schema (`ShowcaseItem`)

Each slide item remains a plain API data object:

```ts
interface ShowcaseItem {
  id: string;
  media: {
    src: string;
    alt: string;
    mobileSrc?: string;
  };
  title: string;
  eyebrow?: string;
  description?: string;
  sideLabel?: string;
  href?: string;
  linkLabel?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
    color?: ShowcaseButtonColor;
    variant?: "contained" | "outlined" | "text";
  };
  content?: ReactNode;
}
```

---

# Variants

`Showcase` provides 3 visual presentation variants:

- `"editorial"` (Default): Rich multi-stop gradient for maximum contrast and legibility.
- `"minimal"`: Subtle gradient overlay ideal for photography-first slides.
- `"glass"`: Heavy glassmorphic backdrop overlay for floating banner surfaces.

```tsx
<Showcase items={items} variant="glass" />
```

---

# Size Variants

`Showcase` supports 4 scale sizes:

- `"hero"` (Default): High-impact landing page hero sliders.
- `"large"`: Large collection feature sections.
- `"medium"`: Standard page banners.
- `"small"`: Compact promotional blocks.

```tsx
<Showcase items={items} size="medium" />
```

Each size includes responsive `minHeight` and `aspectRatio` defaults so the container never collapses to 0 height.

---

# Transitions

Three smooth 60 FPS transitions are available:

- `"cinematic"` (Default): Subtle smooth scale-down fade effect.
- `"fade"`: Clean cross-fade transition.
- `"slide"`: Horizontal slide movement.

```tsx
<Showcase items={items} transition="slide" />
```

---

# Navigation & Indicators

- `navigation`: `"dots"` (horizontal pill indicators), `"vertical"` (right-aligned vertical indicators), or `"none"`.
- `showArrows`: Toggle previous / next navigation arrow buttons.
- `showProgress`: Toggle bottom progress bar during autoplay.

```tsx
<Showcase
  items={items}
  navigation="vertical"
  showArrows={true}
  showProgress={true}
/>
```

---

# Navigation Callback (`onNavigate`)

Showcase renders a semantic `<a href="...">` on active slides when `href` is present on the item.

Native browser navigation is automatically prevented via `event.preventDefault()`, and client-side routing is passed to `onNavigate`:

```tsx
<Showcase
  items={items}
  onNavigate={(item, index, event) => {
    if (item.href) {
      router.push(item.href);
    }
  }}
/>
```

---

# Next.js Integration

Showcase supports Next.js `next/image` through `ImageComponent` while delegating routing through `onNavigate`:

```tsx
// app/components/HeroShowcase.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Showcase, type ShowcaseItem } from "jivico-glass-ui";

interface HeroShowcaseProps {
  items: ShowcaseItem[];
}

export function HeroShowcase({ items }: HeroShowcaseProps) {
  const router = useRouter();

  return (
    <Showcase
      items={items}
      autoplay
      interval={6000}
      onNavigate={(item) => {
        if (item.href) {
          router.push(item.href);
        }
      }}
      ImageComponent={Image}
    />
  );
}
```

---

# Recommended Application Architecture

```text
API JSON Response
       ↓
Next.js Client Adapter
       ↓
<Showcase /> (UI Component)
       ↓
Semantic <a href="..."> + onNavigate() + ImageComponent={Image}
```

This keeps your API data clean, serializable, and independent of Next.js or any routing framework.
