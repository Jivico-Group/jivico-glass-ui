# Jivico Glass UI — Theme, Palette & Props Cheat Sheet

> **Developer Reference Guide** for building applications with `@jivico-glass-ui`.
> Contains complete details on **Brand Kit Colors**, **Color Palettes**, **Theme Providers**, **Extended Component Props**, and **MUI Overrides**.

> [!IMPORTANT]
> **DEVELOPMENT RULE: PREFER THEMED COMPONENT PROPS DIRECTLY**
>
> **DO NOT** write custom `sx={{ ... }}` or `styled(...)` overrides for colors, background glass, borders, shadows, or border-radii **UNLESS** you are building an exceptional custom design layout.
> Prefer "accent" color for actions, CTA, etc.
> `@jivico-glass-ui` is a fully themed system. Use component props directly (e.g. `<Button color="accent">`, `<Card color="glass" radius="large" hoverEffect>`, `<Table variant="glass" color="accent">`, `<Alert appearance="glass">`). This guarantees 100% theme consistency across Light/Dark modes and prevents CSS bloat.

---

## 🎨 1. Brand Kit & Color System

### Brand Color Tokens (`BRAND_COLORS`)

The foundational brand color palette defined in `src/theme/colors/brand.ts`:

| Token      | Hex       | Role & Description                                                  |
| :--------- | :-------- | :------------------------------------------------------------------ |
| `charcoal` | `#111111` | Bold dark primary in Light Mode; background anchor in Dark Mode     |
| `stone`    | `#686868` | Neutral text, unselected icon states, and subtle metadata accents   |
| `sand`     | `#D9D9CF` | Warm secondary tone used in segmented control tracks & pill borders |
| `cream`    | `#F6F5F2` | Primary high-contrast text/surface in Dark Mode; base light canvas  |

---

### Extended Color Palette (`theme.palette`)

In addition to standard MUI colors (`primary`, `secondary`, `success`, `warning`, `error`, `info`), `jivico-glass-ui` extends the palette with custom channels:

```tsx
// Accessing palette in styled components or sx prop
theme.palette.accent.main; // #686868 (Stone)
theme.palette.accent.contrastText; // #FFFFFF / #111111
theme.palette.glass.main; // rgba(255, 255, 255, 0.72) / rgba(255, 255, 255, 0.12)
theme.palette.gradients.primary; // "linear-gradient(135deg, #111111 0%, #686868 100%)"
```

#### Palette Summary

- **`accent`**: `main`, `light`, `dark`, `hover`, `contrastText`
- **`glass`**: `main`, `light`, `dark`, `hover`, `contrastText`
- **`glass-surface` / `glassSurface`**: Elevated translucent surface background
- **`gradients`**:
  - `primary`: `linear-gradient(135deg, #111111 0%, #686868 100%)`
  - `primaryHover`: `linear-gradient(135deg, #000000 0%, #4A4A4A 100%)`
  - `accent`: `linear-gradient(135deg, #686868 0%, #D9D9CF 100%)`
  - `accentDark`: `linear-gradient(135deg, #F6F5F2 0%, #686868 100%)`

---

## 🛠️ 2. Theme Providers & Context Helpers

### `<JivicoGlassProvider>` (Global Root Provider)

Wrap your root application with `JivicoGlassProvider` to enable automatic light/dark theme switching, local storage persistence, and MUI v9 theme baseline overrides.

```tsx
import { JivicoGlassProvider } from "jivico-glass-ui";

<JivicoGlassProvider defaultMode="system" storageKey="jivico-theme-mode">
  <App />
</JivicoGlassProvider>;
```

| Prop                | Type                            | Default               | Description                                          |
| :------------------ | :------------------------------ | :-------------------- | :--------------------------------------------------- |
| `defaultMode`       | `"system" \| "light" \| "dark"` | `"system"`            | Initial appearance mode preference                   |
| `storageKey`        | `string`                        | `"jivico-theme-mode"` | LocalStorage key for persisting user choice          |
| `enableCssBaseline` | `boolean`                       | `true`                | Injects global scrollbar & body background overrides |

---

### `<GlassThemeScope>` (Subtree Mode Isolator)

Force specific sections (Modals, Tables, Cards, Action Bars) to strictly stay in `dark` or `light` mode regardless of global app header toggles.

```tsx
import { GlassThemeScope } from "jivico-glass-ui";

<GlassThemeScope mode="dark">
  <Card variant="glass">Scoped Dark Card</Card>
</GlassThemeScope>;
```

| Prop   | Type                | Description                                    |
| :----- | :------------------ | :--------------------------------------------- |
| `mode` | `"light" \| "dark"` | Forces all child MUI components into this mode |

---

### `useGlassMode()` Hook

Access or modify theme mode programmatically.

```tsx
import { useGlassMode } from "jivico-glass-ui";

const { mode, resolvedMode, setGlassMode, toggleGlassMode } = useGlassMode();
```

- `mode`: User preference (`"light" | "dark" | "system"`)
- `resolvedMode`: Active computed mode (`"light" | "dark"`)
- `setGlassMode(mode)`: Sets explicit mode preference
- `toggleGlassMode()`: Toggles between light and dark with native browser View Transitions

---

## 🎛️ 3. Component Overrides & Extended Props

### A. Buttons & Inputs

#### `<Button>` & `<IconButton>`

```tsx
<Button variant="contained" color="accent">Accent Action</Button>
<Button variant="outlined" color="glass">Frosted Button</Button>
```

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `glass-surface` | `info` | `success` | `warning` | `error`
- **Variants**: `contained` | `outlined` | `text`

#### `<ButtonGroup>`

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `glass-surface`

#### `<TextField>` & `<OutlinedInput>`

```tsx
<TextField placeholder="Search..." color="accent" size="small" />
```

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `glass-surface`
- **Sizes**: `small` (36px) | `medium` (48px) | `large` (56px)

---

### B. Controls (`Switch`, `Checkbox`, `Radio`, `Slider`)

#### `<Switch>`, `<Checkbox>`, `<Radio>`, `<Slider>`

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `glass-surface`

---

### C. Data Display (`Chip`, `Badge`, `Avatar`, `Typography`)

#### `<Chip>`

```tsx
<Chip label="Featured" color="glass" size="small" />
<Chip label="Tonal" variant="tonal" color="accent" />
```

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `glass-surface`
- **Variants**: `filled` | `outlined` | `tonal`
- **Sizes**: `small` (24px) | `medium` (28px) | `large` (32px)

#### `<Avatar>`

- **Variants**: `circular` | `rounded` | `square` | `glass`

#### `<Typography>`

```tsx
<Typography variant="h3" color="gradient">
  Gradient Heading
</Typography>
```

- **Color Accents**: `primary` | `secondary` | `accent` | `glass` | `gradient`

---

### D. Surfaces (`Card`, `Paper`, `Accordion`, `Dialog`, `Drawer`)

#### `<Card>`

```tsx
<Card color="glass" radius="large" hoverEffect>
  <CardContent>Frosted Glass Card</CardContent>
</Card>
```

- **Colors**: `primary` | `secondary` | `accent` | `glass` | `info` | `success` | `warning` | `error`
- **Variants**: `elevation` | `outlined` | `tonal`
- **`radius`**: `none` | `small` (6px) | `medium` (10px) | `large` (16px) | `full` (9999px)
- **`hoverEffect`**: `boolean` (Enables hover lift translation & glowing shadow)

#### `<Dialog>`

```tsx
<Dialog open={open} color="glass" variant="glass" radius="rounded">
  ...
</Dialog>
```

- **Variants**: `glass` | `solid` | `tonal` | `outlined`
- **`radius`**: `square` | `small` | `medium` | `large` | `rounded` | `pill`
- **`glassIntensity`**: `subtle` | `medium` | `strong` | `ultra`

---

### E. Tables & Data Grids

#### `<Table>` & `<TableContainer>`

```tsx
<TableContainer variant="glass">
  <Table variant="glass" color="accent">
    <TableHead>
      <TableRow>
        <TableCell>Metric</TableCell>
        <TableCell align="right">Value</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow selected>
        <TableCell>Selected Row</TableCell>
        <TableCell align="right">Active</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
```

- **Table Variants**: `standard` | `glass`
- **Table Colors**: `primary` | `secondary` | `accent` | `success` | `warning` | `error`

---

### F. Menus & Dropdowns

#### `<Menu>` & `<MenuItem>`

```tsx
<Menu surface="glass" color="accent" size="small">
  <MenuItem selected>Active Item</MenuItem>
</Menu>
```

- **`surface`**: `standard` | `glass`
- **`color`**: `primary` | `secondary` | `accent` | `success` | `warning` | `error`
- **`size`**: `small` | `medium`

---

### G. Feedback (`Alert`, `Tooltip`, `LinearProgress`, `Skeleton`)

#### `<Alert>`

```tsx
<Alert severity="info" appearance="glass" glow>
  Frosted Glass Notification Alert
</Alert>
```

- **`appearance`**: `solid` | `tonal` | `glass` | `outlined`
- **`glow`**: `boolean` (Adds subtle ambient glow aura)

#### `<Tooltip>`

```tsx
<Tooltip title="Details" glass>
  <IconButton color="glass">
    <Info />
  </IconButton>
</Tooltip>
```

#### `<LinearProgress>` & `<Skeleton>`

- **`appearance`**: `solid` | `tonal` | `glass` | `outlined`
- **`size`**: `thin` | `small` | `medium` | `large`
- **`glow`**: `boolean`

---

### H. Navigation (`BottomNavigation`, `Tabs`, `List`, `Stepper`)

#### `<BottomNavigation>` & `<BottomNavigationItem>`

```tsx
import { BottomNavigation, BottomNavigationItem } from "jivico-glass-ui";
import { Button, InputBase } from "@mui/material";

<BottomNavigation glass={true} placement="top-center">
  <BottomNavigationItem component={Button} href="/originals">
    Originals
  </BottomNavigationItem>
  <BottomNavigationItem component={InputBase} placeholder="Search..." />
</BottomNavigation>
```

- **`BottomNavigation` Props**:
  - **`glass`**: `boolean` (Enables 32px optical backdrop blur & specular lighting glint)
  - **`placement`**: `"inline"` | `"top-center"` | `"top-left"` | `"top-right"` | `"bottom-center"` | `"bottom-left"` | `"bottom-right"`
  - **`size`**: `"small"` (48px) | `"medium"` (64px)

- **`<BottomNavigationItem>`**:
  - Helper wrapper for embedding custom components (Logos, Search fields, Buttons, Icons) inside `<BottomNavigation>`.
  - Automatically consumes and filters out MUI-injected props (`showLabel`, `selected`, `value`, `onChange`) so invalid attributes are not leaked to HTML DOM elements.
  - Accepts `component` prop (`component={Button}`, `component={InputBase}`, `component={Link}`, etc.).

- **`size`**: `small` | `medium`
- **`showLabels={false}`**: Hides text labels cleanly for floating dynamic island docks.

#### `<List>` & `<ListItemButton>`

```tsx
<List size="small">
  <ListItemButton selected color="accent">
    <ListItemText primary="Navigation Link" />
  </ListItemButton>
</List>
```

- **List Sizes**: `small` | `medium` | `large`
- **ListItemButton Colors**: `primary` | `secondary` | `accent` | `success` | `warning` | `error`

#### `<AppBar>` & `<Toolbar>`

- Translucent frosted header surface automatically styled with theme background blur and subtle bottom glass border.

#### `<Drawer>`

```tsx
<Drawer open={open} glass>
  ...
</Drawer>
```

- **`glass`**: `boolean` (Enables 20px backdrop filter blur with translucent drawer paper surface)

#### `<Pagination>`

- Custom pill scale and rounded hover states tuned to `accent` and `primary` brand tokens.

---

## 🚀 9. Premium Components (`<Showcase>`)

### `<Showcase>` (Cinematic Glass Hero Slider & Carousel)

```tsx
import { Showcase, type ShowcaseItem } from "jivico-glass-ui";

const items: ShowcaseItem[] = [
  {
    id: "slide-1",
    media: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600",
      alt: "Originals Collection",
      mobileSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
    },
    eyebrow: "STUDIO EXCLUSIVE",
    title: "Originals by Studio",
    description: "Limited-edition luxury glassmorphic collections.",
    action: {
      label: "Discover Originals",
      href: "/originals",
    },
    sideLabel: "FALL / WINTER 2026",
  },
];

<Showcase
  items={items}
  variant="editorial"
  size="hero"
  transition="cinematic"
  navigation="vertical"
  autoplay={true}
  interval={6000}
  showArrows={true}
  showProgress={true}
/>;
```

#### `ShowcaseItem` Interface
- `id`: `string` (Unique slide key)
- `media`: `{ src: string; alt: string; mobileSrc?: string }`
- `eyebrow?`: `string` (Top tracking category badge text)
- `title`: `string` (Main slide heading)
- `description?`: `string` (Subheading details)
- `action?`: `{ label: string; href?: string; onClick?: () => void }` (CTA button)
- `sideLabel?`: `string` (Desktop side vertical text accent)

#### `<Showcase>` Props
- `variant`: `"editorial" | "minimal" | "glass"`
- `size`: `"small" | "medium" | "large" | "hero"`
- `transition`: `"cinematic" | "fade" | "slide"`
- `navigation`: `"vertical" | "dots" | "none"`
- `autoplay`: `boolean` (Default: `true`)
- `interval`: `number` (Default: `6000` ms)
- `loop`: `boolean` (Default: `true`)
- `pauseOnHover`: `boolean` (Default: `true`)
- `showArrows`: `boolean` (Default: `true`)
- `showProgress`: `boolean` (Default: `true`)


