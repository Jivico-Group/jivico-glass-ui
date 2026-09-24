# VisualViewer — Usage

`VisualViewer` is a generic responsive media viewer for viewing one item's visual media.

It handles:

- Main image
- Thumbnail navigation
- Desktop left thumbnails
- Mobile bottom thumbnails
- Scrollable thumbnails
- Previous/next navigation
- Zoom
- Fullscreen
- Swipe/drag
- Keyboard navigation
- Autoplay
- Progress/navigation
- Responsive sizing
- Custom image rendering
- Custom thumbnail rendering

It is **framework-agnostic** by default, so it works with native `<img>` and can be integrated with Next.js `Image`.

---

## Import

```tsx
import { VisualViewer } from "jivico-glass-ui";
```

---

# 1. Basic Usage

The simplest version:

```tsx
<VisualViewer
  items={[
    {
      id: "1",
      src: "/images/product-1.jpg",
      alt: "Product front view",
    },
    {
      id: "2",
      src: "/images/product-2.jpg",
      alt: "Product back view",
    },
    {
      id: "3",
      src: "/images/product-3.jpg",
      alt: "Product detail",
    },
  ]}
/>
```

Without any custom renderer, `VisualViewer` uses native HTML images.

```text
Desktop

┌────────┬──────────────────────────────┐
│        │                              │
│ thumb  │                              │
│        │                              │
│ thumb  │        MAIN IMAGE             │
│        │                              │
│ thumb  │                              │
│        │                              │
└────────┴──────────────────────────────┘
```

On smaller screens, thumbnails move below the main image.

```text
Mobile

┌──────────────────────────────┐
│                              │
│         MAIN IMAGE           │
│                              │
└──────────────────────────────┘

[thumb] [thumb] [thumb] [thumb] →
```

---

# 2. Recommended Next.js Usage

`VisualViewer` does not depend on Next.js.

Use `renderImage` when you want `next/image`.

```tsx
import Image from "next/image";
import { VisualViewer } from "jivico-glass-ui";

<VisualViewer
  items={images}
  renderImage={({ item, index }) => (
    <Image
      src={item.src}
      alt={item.alt ?? ""}
      fill
      sizes="(max-width: 768px) 100vw, 70vw"
      priority={index === 0}
      style={{
        objectFit: "contain",
      }}
    />
  )}
/>;
```

This keeps `jivico-glass-ui` completely independent of Next.js.

---

# 3. Next.js Thumbnails

You can separately control the thumbnail renderer.

```tsx
<VisualViewer
  items={images}
  renderImage={({ item, index }) => (
    <Image
      src={item.src}
      alt={item.alt ?? ""}
      fill
      sizes="(max-width: 768px) 100vw, 70vw"
      priority={index === 0}
      style={{
        objectFit: "contain",
      }}
    />
  )}
  renderThumbnail={({ item }) => (
    <Image
      src={item.thumbnailSrc ?? item.src}
      alt={item.alt ?? ""}
      fill
      sizes="112px"
      style={{
        objectFit: "cover",
      }}
    />
  )}
/>
```

So:

```text
renderImage
      ↓
MAIN IMAGE

renderThumbnail
      ↓
THUMBNAILS
```

They are completely independent.

---

# 4. Product Images

Your product data can be adapted into `VisualViewerItem[]`.

For example:

```tsx
const images = [
  {
    id: "front",
    src: product.coverImage,
    alt: `${product.name} front`,
  },
  {
    id: "back",
    src: product.images[1],
    alt: `${product.name} back`,
  },
  {
    id: "detail",
    src: product.images[2],
    alt: `${product.name} detail`,
  },
];
```

Then:

```tsx
<VisualViewer items={images} />
```

The viewer doesn't need to know anything about your product schema.

---

# 5. Thumbnail Images

You can provide a separate thumbnail source:

```tsx
const images = [
  {
    id: "1",
    src: "/products/front-large.jpg",
    thumbnailSrc: "/products/front-thumb.jpg",
    alt: "Front",
  },
  {
    id: "2",
    src: "/products/back-large.jpg",
    thumbnailSrc: "/products/back-thumb.jpg",
    alt: "Back",
  },
];
```

If `thumbnailSrc` isn't provided, the main `src` is used.

---

# 6. Many Images

You don't need to worry about having 10 images.

```tsx
<VisualViewer items={productImages} />
```

The thumbnails are handled as a **scrollable rail**.

Desktop:

```text
┌──────┬───────────────────────┐
│  1   │                       │
│  2   │                       │
│  3   │      MAIN IMAGE       │
│  4   │                       │
│  5   │                       │
│  ↓   │                       │
└──────┴───────────────────────┘
```

Mobile:

```text
┌──────────────────────────────┐
│                              │
│         MAIN IMAGE           │
│                              │
└──────────────────────────────┘

[1] [2] [3] [4] [5] → → →
```

The user can scroll the thumbnails instead of trying to fit every image on screen.

---

# 7. Thumbnail Position

The component supports responsive thumbnail positioning.

For automatic behavior:

```tsx
<VisualViewer items={images} thumbnailPosition="auto" />
```

Conceptually:

```text
Desktop → left
Mobile  → bottom
```

This is the recommended setup for your product pages.

---

# 8. Navigation

Show arrows:

```tsx
<VisualViewer items={images} showArrows />
```

You can also provide custom arrow buttons:

```tsx
<VisualViewer
  items={images}
  renderPreviousButton={({ onClick, disabled }) => (
    <IconButton onClick={onClick} disabled={disabled}>
      <ChevronLeft />
    </IconButton>
  )}
  renderNextButton={({ onClick, disabled }) => (
    <IconButton onClick={onClick} disabled={disabled}>
      <ChevronRight />
    </IconButton>
  )}
/>
```

This allows the application to use its own button styling.

---

# 9. Swipe

Enable touch/swipe interaction:

```tsx
<VisualViewer items={images} swipe />
```

This is particularly useful on mobile.

```text
← swipe             swipe →
     previous      next
```

---

# 10. Zoom

Zoom is handled internally by `VisualViewer`.

```tsx
<VisualViewer items={images} />
```

The user can interact with the main image to zoom according to the component's built-in behavior.

You don't need a separate zoom component.

---

# 11. Fullscreen

Fullscreen is also handled internally.

```tsx
<VisualViewer items={images} />
```

The viewer manages the fullscreen state itself.

Conceptually:

```text
Normal

┌──────────────────────┐
│                      │
│      MAIN IMAGE      │
│                      │
└──────────────────────┘

          ↓

Fullscreen

┌────────────────────────────────┐
│                                │
│                                │
│          LARGE IMAGE            │
│                                │
│                                │
│      thumbnails / controls     │
└────────────────────────────────┘
```

You don't need to create a separate fullscreen gallery just to use this functionality.

---

# 12. Keyboard Navigation

Keyboard interaction is handled internally.

Typical controls include:

```text
←   Previous
→   Next
Esc Exit fullscreen/overlay state
```

So desktop users can navigate without clicking thumbnails.

---

# 13. Autoplay

You can enable autoplay:

```tsx
<VisualViewer items={images} autoplay interval={5000} />
```

For product pages, I would generally keep autoplay **off**.

For editorial/lookbook media:

```tsx
<VisualViewer items={images} autoplay interval={5000} pauseOnHover />
```

---

# 14. Controlled Viewer

You can control the active image from your application.

```tsx
const [activeIndex, setActiveIndex] = useState(0);

<VisualViewer
  items={images}
  activeIndex={activeIndex}
  onActiveIndexChange={(index) => {
    setActiveIndex(index);
  }}
/>;
```

Useful when another part of the page needs to control the gallery.

For example:

```text
Color selection
      ↓
Application changes
      ↓
activeIndex
      ↓
VisualViewer
```

---

# 15. Uncontrolled Viewer

You don't need state if you don't need external control.

```tsx
<VisualViewer items={images} defaultActiveIndex={0} />
```

The component manages its own state.

This should be the normal case.

---

# 16. Responsive Size

You can configure the viewer size:

```tsx
<VisualViewer items={images} size="large" />
```

or:

```tsx
<VisualViewer items={images} size="hero" />
```

For product detail pages, a larger viewer is appropriate.

---

# 17. Aspect Ratio

```tsx
<VisualViewer items={images} aspectRatio="4 / 5" />
```

Other examples:

```tsx
aspectRatio = "1 / 1";
```

```tsx
aspectRatio = "3 / 4";
```

```tsx
aspectRatio = "16 / 9";
```

For fashion products, `4 / 5` is a good starting point.

---

# 18. Radius

The component supports:

```tsx
<VisualViewer items={images} radius="square" />
```

```tsx
<VisualViewer items={images} radius="rounded" />
```

```tsx
<VisualViewer items={images} radius="soft" />
```

---

# 19. Custom Container Styling

```tsx
<VisualViewer
  items={images}
  containerSx={{
    maxWidth: 900,
    mx: "auto",
  }}
/>
```

This lets the application control placement without modifying the component.

---

# 20. Complete Jivico Product Example

For your product detail page, I'd use something close to:

```tsx
"use client";

import Image from "next/image";
import { VisualViewer } from "jivico-glass-ui";

const images = [
  {
    id: "front",
    src: product.coverImage,
    alt: `${product.name} front view`,
  },
  ...product.images.map((src, index) => ({
    id: `image-${index}`,
    src,
    alt: `${product.name} view ${index + 2}`,
  })),
];

export function ProductVisuals() {
  return (
    <VisualViewer
      items={images}
      thumbnailPosition="auto"
      swipe
      showArrows
      radius="soft"
      aspectRatio="4 / 5"
      renderImage={({ item, index }) => (
        <Image
          src={item.src}
          alt={item.alt ?? ""}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 60vw,
            55vw
          "
          priority={index === 0}
          style={{
            objectFit: "contain",
          }}
        />
      )}
      renderThumbnail={({ item }) => (
        <Image
          src={item.thumbnailSrc ?? item.src}
          alt={item.alt ?? ""}
          fill
          sizes="112px"
          style={{
            objectFit: "cover",
          }}
        />
      )}
    />
  );
}
```

The important architecture is:

```text
Next.js
│
├── Product data
│
├── next/image
│
└── VisualViewer
       │
       ├── Main image
       ├── Thumbnail rail
       ├── Zoom
       ├── Fullscreen
       ├── Arrows
       ├── Swipe
       └── Responsive layout
```

So **Next.js owns the image implementation; `VisualViewer` owns the viewing experience.**
