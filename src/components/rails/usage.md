# Rails

`Rails` is a generic, responsive horizontal content rail for displaying collections of visual items such as:

- Categories
- E-Commerce products & best sellers
- Collections
- Brands
- Editorial & highlight cards
- Promotional campaigns
- Lookbooks
- Custom data items

The component is generic (`Rails<T>`) and intentionally independent of any specific database or application schema.

---

## Import

```tsx
import { Rails } from "jivico-glass-ui";
```

---

## Basic Usage

The minimum required props are `items`, `getKey`, and `getImage`.

```tsx
<Rails
  items={categories}
  getKey={(category) => category.id}
  getImage={(category) => category.image}
/>
```

---

# Props Overview

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `T[]` | **Required** | Data items array |
| `getKey` | `(item, index) => Key` | **Required** | Unique item key resolver |
| `getImage` | `(item, index) => string` | **Required** | Image URL resolver for built-in renderer |
| `getTitle` | `(item, index) => ReactNode` | `undefined` | Title resolver for built-in renderer |
| `getHref` | `(item, index) => string \| undefined` | `undefined` | URL resolver for semantic item anchor link |
| `onNavigate` | `(item, index, event) => void` | `undefined` | Item navigation callback for client routing |
| `ImageComponent` | `RailImageComponent` | `undefined` | Custom image component (e.g. Next.js `next/image`) |
| `columns` | `RailColumns` | `{ xs: 2, sm: 3, md: 4, lg: 5 }` | Visible items count per breakpoint |
| `itemWidth` | `RailItemWidth` | `undefined` | Explicit item width per breakpoint (overrides `columns`) |
| `gap` | `number` | `16` | Spacing between items in pixels |
| `justifyContent` | `"flex-start" \| "center" \| "flex-end"` | `"flex-start"` | Horizontal alignment when items don't fill track |
| `navigation` | `"arrows" \| "dots" \| "both" \| "none"` | `"arrows"` | Navigation controls style |
| `transition` | `"none" \| "fade" \| "scale" \| "lift"` | `"scale"` | Hover/interaction animation style |
| `autoplay` | `boolean` | `false` | Automatic rail advancement |
| `interval` | `number` | `5000` | Autoplay interval in milliseconds |
| `loop` | `boolean` | `false` | Wrap navigation around at boundaries |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay while hovering over the rail |
| `step` | `number` | `1` | Number of items moved per navigation action |
| `snap` | `boolean` | `true` | Snap items into position after scrolling |
| `swipe` | `boolean` | `true` | Enable horizontal touch scrolling |
| `imageAspectRatio` | `string` | `"4 / 5"` | Built-in image aspect ratio |
| `radius` | `number \| string` | `16` | Built-in image border radius |
| `renderContent` | `(context) => ReactNode` | `undefined` | Custom content below title (price, rating, badges) |
| `renderItem` | `(context) => ReactNode` | `undefined` | Completely replace built-in item card renderer |
| `renderImage` | `(context) => ReactNode` | `undefined` | Advanced custom image renderer |

---

# Built-in Item Renderer & Navigation

`Rails` provides a built-in card renderer. When `getHref` and `onNavigate` are provided:
- The item image is wrapped in a semantic HTML `<a>` tag with the resolved `href`.
- Native browser navigation is prevented via `event.preventDefault()`.
- Client-side routing is passed to `onNavigate`.

```tsx
<Rails<Category>
  items={categories}
  getKey={(category) => category.id}
  getImage={(category) => category.image}
  getTitle={(category) => category.name}
  getHref={(category) => `/collections/${category.slug}`}
  onNavigate={(category) => {
    router.push(`/collections/${category.slug}`);
  }}
/>
```

---

# E-Commerce Product Rail Example

Use `renderContent` to display price, badges, rating, or color options underneath the item title:

```tsx
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
}

<Rails<Product>
  items={products}
  getKey={(product) => product.id}
  getImage={(product) => product.image}
  getTitle={(product) => product.name}
  getHref={(product) => `/products/${product.slug}`}
  onNavigate={(product) => {
    router.push(`/products/${product.slug}`);
  }}
  renderContent={({ item }) => (
    <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>
      ₹{item.price}
    </Typography>
  )}
/>
```

---

# Columns vs Item Width

## Responsive Columns (`columns`)

Controls how many items fill the rail width at each breakpoint.

```tsx
<Rails
  items={categories}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  columns={{
    xs: 1.5,
    sm: 2.5,
    md: 4,
    lg: 5,
  }}
/>
```

## Explicit Item Width (`itemWidth`)

Useful for editorial "peek" rails where the next card is partially visible off-screen.

```tsx
<Rails
  items={highlights}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  itemWidth={{
    xs: "240px",
    md: "320px",
  }}
/>
```

---

# Custom Item Rendering (`renderItem`)

When complete control over the item UI is needed (e.g. rendering `<Highlight />` inside `Rails`), supply `renderItem`:

```tsx
<Rails<HighlightItem>
  items={highlights}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  renderItem={({ item }) => (
    <Highlight
      image={item.image}
      title={item.title}
      description={item.description}
      href={item.href}
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

# Autoplay & Interaction Transitions

- `autoplay`: Automatically moves the rail forward every `interval` milliseconds.
- `pauseOnHover`: Pauses autoplay when the user hovers over the rail.
- `transition`: Hover animation applied to items (`"scale"`, `"lift"`, `"fade"`, `"none"`).

```tsx
<Rails
  items={items}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  autoplay
  interval={4000}
  pauseOnHover
  transition="lift"
/>
```

---

# Next.js Integration Architecture

`Rails` remains framework-agnostic. Inject Next.js `next/image` via `ImageComponent` and delegate routing via `onNavigate`:

```tsx
// app/components/CategoriesRail.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Rails } from "jivico-glass-ui";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export function CategoriesRail({ categories }: { categories: Category[] }) {
  const router = useRouter();

  return (
    <Rails<Category>
      items={categories}
      getKey={(category) => category.id}
      getImage={(category) => category.image}
      getTitle={(category) => category.name}
      getHref={(category) => `/collections/${category.slug}`}
      onNavigate={(category) => {
        router.push(`/collections/${category.slug}`);
      }}
      ImageComponent={Image}
    />
  );
}
```

```text
API JSON Response
       ↓
Next.js Client Component
       ↓
<Rails<T> />
       ↓
Semantic <a href="..."> + onNavigate() + ImageComponent={Image}
```
