# Gallery — Usage

`Gallery` is a generic responsive collection layout for `jivico-glass-ui`.

It does **not** know about products, categories, database models, GraphQL, routing, or business logic.

It provides three rendering levels:

1. `renderImage` — image area
2. `renderOverlay` — content over the image
3. `renderBlock` — content below the image
4. `renderItem` — complete custom item override

---

## Import

```tsx
import { Gallery } from "jivico-glass-ui";
```

---

# 1. Basic Gallery

Use `getImage` and let `Gallery` render the native HTML `<img>`.

```tsx
<Gallery
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getImageAlt={(item) => item.name}
/>
```

Default layout:

```text
┌────────────┐ ┌────────────┐
│            │ │            │
│   IMAGE    │ │   IMAGE    │
│            │ │            │
├────────────┤ ├────────────┤
│            │ │            │
│   BLOCK    │ │   BLOCK    │
└────────────┘ └────────────┘
```

Default columns:

```text
xs: 2
sm: 2
md: 3
lg: 4
```

---

# 2. Responsive Columns

```tsx
<Gallery
  items={products}
  columns={{
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  }}
  getImage={(item) => item.image}
/>
```

For example:

```text
Mobile       2
Tablet       3
Desktop      4
Large        4
```

---

# 3. Image + `renderBlock`

This is probably the most useful setup for your Jivico product catalog.

```tsx
<Gallery
  items={products}
  getKey={(item) => item.id}
  getImage={(item) => item.image}
  getImageAlt={(item) => item.name}
  renderBlock={({ item }) => (
    <>
      <Typography variant="overline">{item.category}</Typography>

      <Typography variant="h6">{item.name}</Typography>

      <Typography>₹{item.price}</Typography>
    </>
  )}
/>
```

`Gallery` handles the image area and places the block underneath it.

```text
┌────────────────────┐
│                    │
│                    │
│       IMAGE        │
│                    │
│                    │
└────────────────────┘
  CATEGORY
  Product Name
  ₹899
```

---

# 4. Custom `renderImage`

Use this when you want something other than the native `<img>`.

For example, with Next.js:

```tsx
import Image from "next/image";

<Gallery
  items={products}
  getKey={(item) => item.id}
  renderImage={({ item }) => (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="
        (max-width: 600px) 50vw,
        (max-width: 1200px) 33vw,
        25vw
      "
      style={{
        objectFit: "cover",
      }}
    />
  )}
  renderBlock={({ item }) => <ProductInfo product={item} />}
/>;
```

This is the preferred approach when using Next.js `Image`.

---

# 5. `renderOverlay`

You can put things over the image.

For example, wishlist:

```tsx
<Gallery
  items={products}
  getImage={(item) => item.image}
  renderOverlay={({ item }) => (
    <IconButton
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
      }}
      onClick={() => addToWishlist(item)}
    >
      <Heart size={18} />
    </IconButton>
  )}
  renderBlock={({ item }) => <ProductInfo product={item} />}
/>
```

Result:

```text
┌────────────────────┐
│                ♡   │
│                    │
│                    │
│       IMAGE        │
│                    │
└────────────────────┘
  Product Name
  ₹899
```

`renderOverlay` is useful for:

- Wishlist
- Sale badges
- New badges
- Quick actions
- Product labels
- Favorite buttons

---

# 6. Full `renderImage` + `renderOverlay` + `renderBlock`

This gives you a complete ready-made product-card structure while still letting the application control the content.

```tsx
<Gallery
  items={products}
  columns={{
    xs: 2,
    md: 3,
    lg: 4,
  }}
  imageAspectRatio="4 / 5"
  radius="soft"
  renderImage={({ item }) => (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      style={{
        objectFit: "cover",
      }}
    />
  )}
  renderOverlay={({ item }) => (
    <IconButton
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
      }}
    >
      <Heart size={18} />
    </IconButton>
  )}
  renderBlock={({ item }) => (
    <Box sx={{ pt: 1.5 }}>
      <Typography variant="overline">{item.category}</Typography>

      <Typography variant="h6">{item.name}</Typography>

      <Typography variant="body2">₹{item.price}</Typography>
    </Box>
  )}
/>
```

---

# 7. Complete Custom `renderItem`

When you don't want Gallery's image/block structure at all, use `renderItem`.

```tsx
<Gallery
  items={products}
  columns={{
    xs: 2,
    md: 4,
  }}
  renderItem={({ item, index }) => <ProductCard product={item} index={index} />}
/>
```

When `renderItem` is supplied, it becomes the **complete item renderer**.

```text
Gallery
│
├── ProductCard
├── ProductCard
├── ProductCard
└── ProductCard
```

`renderImage`, `renderOverlay`, and `renderBlock` are not used for those items.

---

# 8. Image Aspect Ratio

```tsx
<Gallery
  items={products}
  imageAspectRatio="4 / 5"
  ...
/>
```

Common values:

```tsx
imageAspectRatio = "1 / 1";
```

```tsx
imageAspectRatio = "4 / 5";
```

```tsx
imageAspectRatio = "3 / 4";
```

```tsx
imageAspectRatio = "16 / 9";
```

For fashion product cards, `4 / 5` or `3 / 4` works well.

---

# 9. Image Fit

The native `<img>` fallback supports:

```tsx
<Gallery items={products} getImage={(item) => item.image} imageFit="cover" />
```

Available:

```ts
"cover";
"contain";
"fill";
"none";
```

For fashion photography:

```tsx
imageFit = "cover";
```

For product cutouts:

```tsx
imageFit = "contain";
```

---

# 10. Radius

```tsx
radius = "square";
```

```tsx
radius = "rounded";
```

```tsx
radius = "soft";
```

Example:

```tsx
<Gallery
  items={products}
  radius="soft"
  ...
/>
```

---

# 11. Gap

```tsx
<Gallery
  items={products}
  gap={2}
  ...
/>
```

You can separately control them:

```tsx
<Gallery
  items={products}
  rowGap={3}
  columnGap={2}
  ...
/>
```

---

# 12. Styling

### Gallery root

```tsx
<Gallery
  items={products}
  sx={{
    mt: 4,
  }}
  ...
/>
```

### Individual item

```tsx
<Gallery
  items={products}
  itemSx={{
    minWidth: 0,
  }}
  ...
/>
```

### Image area

```tsx
<Gallery
  items={products}
  imageSx={{
    bgcolor: "background.paper",
  }}
  ...
/>
```

### Content block

```tsx
<Gallery
  items={products}
  blockSx={{
    pt: 1.5,
  }}
  ...
/>
```

---

# 13. Native `<img>` vs Next.js `Image`

### Native fallback

```tsx
<Gallery
  items={products}
  getImage={(item) => item.image}
  getImageAlt={(item) => item.name}
/>
```

No `renderImage` required.

Gallery uses:

```html
<img />
```

### Next.js

```tsx
<Gallery
  items={products}
  renderImage={({ item }) => (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  )}
/>
```

So the UI library stays framework-agnostic.

---

# 14. Recommended Jivico Product Gallery

For your current Jivico Originals catalog, I'd use:

```tsx
<Gallery
  items={products}
  getKey={(item) => item.id}
  columns={{
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
  }}
  gap={2}
  imageAspectRatio="4 / 5"
  radius="soft"
  renderImage={({ item }) => (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="
        (max-width: 600px) 50vw,
        (max-width: 1200px) 33vw,
        25vw
      "
      style={{
        objectFit: "cover",
      }}
    />
  )}
  renderOverlay={({ item }) => <WishlistButton product={item} />}
  renderBlock={({ item }) => <ProductCardInfo product={item} />}
/>
```

That gives you:

```text
                    GALLERY
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Product        Product        Product
        │              │              │
    ┌───────┐      ┌───────┐      ┌───────┐
    │   ♡   │      │   ♡   │      │   ♡   │
    │       │      │       │      │       │
    │ IMAGE │      │ IMAGE │      │ IMAGE │
    │       │      │       │      │       │
    └───────┘      └───────┘      └───────┘
      INFO           INFO           INFO
```

This keeps **`Gallery` generic**, while your Next.js app controls the actual Jivico product presentation.
