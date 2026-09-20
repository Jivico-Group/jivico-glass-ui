# Jivico Glass UI (`jivico-glass-ui`)

<p align="center">
  <strong>The Unified Design System & Glassmorphic UI Library for the Jivico Ecosystem</strong>
  <br />
  <em>Powering Jivico Studio, Jivico Orbit, Jivico Pets, and Jivico Skyline</em>
</p>

---

## 🌟 Key Features

- 💎 **Apple Precision & Google Antigravity Aesthetics**  
  A curated design system featuring frosted glass surfaces, liquid borders, subtle glow layers, ambient effects, and premium motion.

- 🎨 **Luxury Monochrome Brand Palette**  
  Primary Charcoal (`#111111`), Stone (`#686868`), Sand (`#D9D9CF`), and Cream (`#F6F5F2`) palette across light and dark modes with complete MUI component overrides.

- 🌈 **Native Gradient Typography**  
  `color="gradient"` on `<Typography>` with mode-aware `gradientLight` (`linear-gradient(135deg, #111111 0%, #686868 100%)`) and `gradientDark` (`linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)`).

- 🌓 **Unified Theme System & Theme Toggle**  
  Supports `light`, `dark`, and `system` appearance modes with `useGlassMode()` exposing `resolvedMode`, `toggleGlassMode`, and `toggleTheme` alias.

- ⚡ **Cached Theme Engine & Component Overrides**  
  Compiled MUI themes cached by mode. Standardized component overrides for Inputs, Controls, DataDisplay, Feedback, Surfaces, and Navigation (including tight scrollable pill track wrapping for `<Tabs>`).

- 🔄 **Live System Theme Detection**  
  When using `system`, the library follows the browser/OS `prefers-color-scheme` setting and automatically reacts when the system appearance changes.

- 🔤 **Dynamic Typography Scale**  
  Responsive typography with support for **Google Sans Flex**, **Montserrat**, **Space Grotesk**, and the Jivico typography system.

- ⚛️ **React + Next.js Ready**  
  Designed for React applications including Next.js App Router and Vite-based applications.

- 🧩 **Zero-Setup UI Primitives**  
  Reusable glass panels (`GlassPanel` with crisp light border `rgba(17, 17, 17, 0.08)`), liquid cards, ambient blobs, gradient typography, section headers, toolbars, navigation surfaces, and more.

- 📦 **TypeScript First**  
  Full TypeScript declarations with ESM and CommonJS package outputs.

---

# 📦 Required Dependencies

`jivico-glass-ui` is built on top of:

- React
- Material UI
- Emotion
- Framer Motion
- Lucide React

Install the peer dependencies in your application:

```bash
npm install @mui/material @emotion/react @emotion/styled framer-motion lucide-react
```

For Next.js App Router applications, also install:

```bash
npm install @mui/material-nextjs
```

---

# 📥 Installation

## Option 1 — GitHub

Recommended during active Jivico development:

```bash
npm install github:Jivico-Group/jivico-glass-ui
```

Or in `package.json`:

```json
{
  "dependencies": {
    "jivico-glass-ui": "github:Jivico-Group/jivico-glass-ui"
  }
}
```

## Option 2 — Local Workspace

For local development:

```bash
npm install file:../jivico-glass-ui
```

---

# 🚀 Quick Start

The recommended integration is to use:

```tsx
<JivicoGlassProvider>
```

This provider internally handles:

- Glass mode state
- `light` / `dark` / `system`
- localStorage persistence
- system theme detection
- system theme change listeners
- MUI `ThemeProvider`
- `CssBaseline`
- Jivico theme creation

Applications therefore do not need to manually create or wrap a MUI theme.

---

# 1. Next.js App Router

## `app/layout.tsx`

The root layout can remain a Server Component.

```tsx
import type { Metadata } from "next";
import { JivicoFontPreload } from "jivico-glass-ui";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Jivico Platform",
  description: "Jivico Ecosystem Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JivicoFontPreload />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## `components/providers/Providers.tsx`

Use `JivicoGlassProvider` as the single Jivico theme entry point.

```tsx
"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { JivicoGlassProvider } from "jivico-glass-ui";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <JivicoGlassProvider defaultMode="system">{children}</JivicoGlassProvider>
    </AppRouterCacheProvider>
  );
}
```

---

## Next.js SSR

`JivicoGlassProvider` is designed to work with the Next.js App Router.

The library separates the user's selected preference from the actual resolved appearance:

```text
User Preference
      │
      ├── light
      ├── dark
      └── system
             │
             ▼
      System Preference
             │
             ├── light
             └── dark
             │
             ▼
       Resolved Mode
             │
             ▼
      Jivico MUI Theme
```

The system preference is accessed only in the browser.

This keeps browser-only APIs such as `window.matchMedia()` out of the server-rendering path.

The root Next.js layout does not need to become a Client Component.

---

# 2. React / Vite

For standard React applications such as **Jivico Orbit**, use the same provider.

## `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { JivicoGlassProvider, JivicoFontPreload } from "jivico-glass-ui";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JivicoFontPreload />

    <JivicoGlassProvider defaultMode="system">
      <App />
    </JivicoGlassProvider>
  </React.StrictMode>,
);
```

The application itself does not need its own MUI `ThemeProvider`.

---

# 🎨 Theme & Glass Mode System

The Jivico Glass UI theme system supports three appearance modes:

```ts
type ThemeMode = "light" | "dark" | "system";
```

---

## Light Mode

Always use the light Jivico theme.

```tsx
<JivicoGlassProvider defaultMode="light">{children}</JivicoGlassProvider>
```

---

## Dark Mode

Always use the dark Jivico theme.

```tsx
<JivicoGlassProvider defaultMode="dark">{children}</JivicoGlassProvider>
```

---

## System Mode

Follow the operating system/browser appearance.

```tsx
<JivicoGlassProvider defaultMode="system">{children}</JivicoGlassProvider>
```

When `system` is selected, the library uses:

```text
prefers-color-scheme
```

to determine whether the current appearance should be light or dark.

The library also listens for changes to the system preference.

For example:

```text
Mac currently in Light Mode
        │
        ▼
resolvedMode = "light"
        │
        ▼
Mac switches to Dark Mode
        │
        ▼
resolvedMode = "dark"
```

No application-level theme logic is required.

---

# 🌓 Glass Mode API

The recommended hook is:

```tsx
import { useGlassMode } from "jivico-glass-ui";
```

Example:

```tsx
const { mode, resolvedMode, setGlassMode, toggleGlassMode } = useGlassMode();
```

---

## `mode`

`mode` represents the user's selected preference.

```ts
"light" | "dark" | "system";
```

For example:

```text
mode = "system"
```

means the user has selected automatic system-based appearance.

---

## `resolvedMode`

`resolvedMode` represents the actual appearance currently being used.

```ts
"light" | "dark";
```

For example:

```text
mode         = "system"
resolvedMode = "dark"
```

This means the user selected system mode and the operating system is currently dark.

---

## `setGlassMode()`

Change the user's appearance preference.

### Light

```tsx
setGlassMode("light");
```

### Dark

```tsx
setGlassMode("dark");
```

### System

```tsx
setGlassMode("system");
```

Selecting `"system"` restores automatic operating-system theme detection.

---

## `toggleGlassMode()`

Toggle between light and dark:

```tsx
const { toggleGlassMode } = useGlassMode();

<Button onClick={toggleGlassMode}>Toggle Theme</Button>;
```

If the current mode is `system`, the toggle uses the currently resolved appearance and explicitly switches to the opposite mode.

For example:

```text
mode = system
resolvedMode = dark

toggleGlassMode()

mode = light
resolvedMode = light
```

The user is now explicitly using light mode.

---

# 💾 Theme Persistence

The selected appearance is persisted using `localStorage`.

The default storage key is:

```text
jivico-theme-mode
```

You can provide a custom key:

```tsx
<JivicoGlassProvider defaultMode="system" storageKey="my-app-theme">
  {children}
</JivicoGlassProvider>
```

Stored values are:

```text
light
dark
system
```

---

# 🎨 Theme Engine

The Jivico theme engine produces the MUI theme used internally by `JivicoGlassProvider`.

Applications normally do not need to call the theme factory directly.

## `JivicoGlassTheme`

```ts
JivicoGlassTheme(
  mode: "light" | "dark",
): Theme
```

Example:

```tsx
const theme = JivicoGlassTheme("dark");
```

The generated theme includes:

- Jivico palette
- Glass palette
- Typography
- Shape
- Component overrides
- Surface styles
- Navigation styles
- Feedback styles
- Input styles
- Data display styles

Themes are cached by appearance mode.

---

# Theme Tokens

## `buildPalette()`

```ts
buildPalette(mode);
```

Returns the mode-specific Jivico palette.

Example:

```tsx
const palette = buildPalette("dark");

palette.primary;
palette.background;
palette.text;
palette.glass;
```

---

## `COLORS`

Raw Jivico design tokens.

```tsx
import { COLORS } from "jivico-glass-ui";
```

Includes tokens for:

- Primary
- Secondary
- Neutral
- Dark neutral
- Accent
- Glass surfaces
- Brand colors

---

## Typography

```tsx
import { typography } from "jivico-glass-ui";
```

Includes the Jivico typography hierarchy:

```text
h1
h2
h3
h4
h5
h6
body1
body2
button
```

---

## Google Sans Flex

The library exposes:

```ts
GOOGLE_SANS_FLEX_URL;
```

for applications that need direct access to the Google Sans Flex stylesheet URL.

---

# 🧩 Component API

## Glass Layout Components

| Component            | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| `GlassPanel`         | Core glass container with backdrop blur, specular borders, and elevation presets. |
| `PageRoot`           | Full-height responsive page wrapper with responsive gutters.                      |
| `Section`            | Structural content container with configurable vertical spacing.                  |
| `GlassToolbar`       | Frosted toolbar with blur and optional sticky behavior.                           |
| `GlassSectionHeader` | Glass header surface with title, subtitle, and action slots.                      |
| `SectionHeader`      | Clean headline block with badges, titles, and actions.                            |
| `HeaderAppBar`       | Sticky glass AppBar with scroll-aware elevation.                                  |
| `Hero`               | Hero section with background imagery, overlays, and actions.                      |

---

# 🪟 Cards, Badges & Decorations

| Component         | Description                                                             |
| :---------------- | :---------------------------------------------------------------------- |
| `LiquidGlassCard` | Premium glass card with hover motion, reflections, and glowing borders. |
| `AmbientBlob`     | Animated ambient orb for background depth.                              |
| `GradientText`    | Gradient-filled typography component.                                   |
| `ChipSoft`        | Soft themed status/filter chip.                                         |
| `ChipGlass`       | Glass-styled chip with active states.                                   |
| `MobileViewAll`   | Responsive full-width mobile CTA.                                       |

---

# 🔤 Font Utilities

## `JivicoFontPreload`

Adds the required font preconnect and stylesheet resources.

```tsx
import { JivicoFontPreload } from "jivico-glass-ui";
```

### Next.js

```tsx
<head>
  <JivicoFontPreload />
</head>
```

### React / Vite

```tsx
<JivicoFontPreload />
```

---

# 💻 Example

## Glass Card + Theme Control

```tsx
import {
  GlassPanel,
  GradientText,
  ChipSoft,
  useGlassMode,
} from "jivico-glass-ui";

import { Button, Typography, Box } from "@mui/material";

import { Sun, Moon, Sparkles } from "lucide-react";

export function AnalyticsWidget() {
  const { mode, resolvedMode, toggleGlassMode } = useGlassMode();

  return (
    <GlassPanel
      elevation={2}
      sx={{
        p: 4,
        borderRadius: "24px",
        maxWidth: 480,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ChipSoft label="Live Insights" icon={<Sparkles size={14} />} />

        <Button
          onClick={toggleGlassMode}
          startIcon={
            resolvedMode === "dark" ? <Sun size={16} /> : <Moon size={16} />
          }
          size="small"
        >
          {resolvedMode === "dark" ? "Light" : "Dark"}
        </Button>
      </Box>

      <GradientText variant="h4" gradient="primary" sx={{ mb: 1 }}>
        Realtime Admin Pulse
      </GradientText>

      <Typography variant="body2" color="text.secondary">
        Experience seamless design fidelity powered by Jivico Glass UI.
      </Typography>
    </GlassPanel>
  );
}
```

---

# 🏗️ Recommended Application Architecture

All Jivico applications should use the same design-system provider.

```text
                    jivico-glass-ui
                           │
                  JivicoGlassProvider
                           │
              ┌────────────┴────────────┐
              │                         │
       GlassModeProvider          MUI ThemeProvider
              │                         │
       light/dark/system          JivicoGlassTheme
              │                         │
              └────────────┬────────────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
          Studio         Orbit          Pets
          Next.js        Vite          Future
                           │
                        Skyline
                         Future
```

Applications should not manually create another Jivico MUI theme when `JivicoGlassProvider` is being used.

---

# 📚 Public API

## Providers

```ts
JivicoGlassProvider;
GlassModeProvider;
```

## Hooks

```ts
useGlassMode;
```

## Theme Types

```ts
ThemeMode;
ResolvedThemeMode;
GlassModeContextType;
GlassModeProviderProps;
JivicoGlassProviderProps;
```

## Theme Engine

```ts
JivicoGlassTheme;
createJivicoTheme;
buildPalette;
COLORS;
typography;
GOOGLE_SANS_FLEX_URL;
```

## Layout Components

```ts
GlassPanel;
PageRoot;
Section;
GlassToolbar;
GlassSectionHeader;
SectionHeader;
HeaderAppBar;
Hero;
```

## Cards & Decorative Components

```ts
LiquidGlassCard;
AmbientBlob;
GradientText;
ChipSoft;
ChipGlass;
MobileViewAll;
```

## Utilities

```ts
JivicoFontPreload;
```

---

# 🔌 Using `useGlassMode` in Application Components

Any component inside `JivicoGlassProvider` can access the glass mode:

```tsx
import { useGlassMode } from "jivico-glass-ui";

export function ThemeControls() {
  const { mode, resolvedMode, setGlassMode, toggleGlassMode } = useGlassMode();

  return (
    <>
      <button onClick={() => setGlassMode("light")}>Light</button>

      <button onClick={() => setGlassMode("dark")}>Dark</button>

      <button onClick={() => setGlassMode("system")}>System</button>

      <button onClick={toggleGlassMode}>Toggle</button>

      <p>Preference: {mode}</p>

      <p>Active mode: {resolvedMode}</p>
    </>
  );
}
```

---

# 🧱 Provider Structure

The internal provider architecture is:

```text
JivicoGlassProvider
│
├── GlassModeProvider
│   │
│   ├── mode
│   │
│   ├── resolvedMode
│   │
│   ├── setGlassMode()
│   │
│   └── toggleGlassMode()
│
└── MUI ThemeProvider
    │
    └── JivicoGlassTheme(resolvedMode)
        │
        └── CssBaseline
```

This keeps theme management centralized inside `jivico-glass-ui`.

Applications only need to consume the public API.

---

# 🛠️ Local Development

Clone the repository:

```bash
git clone https://github.com/Jivico-Group/jivico-glass-ui.git
cd jivico-glass-ui
```

Install dependencies:

```bash
npm install
```

Run the development build watcher:

```bash
npm run dev
```

Build the production library:

```bash
npm run build
```

Build the documentation/playground:

```bash
npm run build:docs
```

Run the playground:

```bash
npm run playground
```

---

# 📦 Package Outputs

The production library generates:

```text
dist/
├── index.js
├── index.mjs
└── index.d.ts
```

The package supports:

- ESM
- CommonJS
- TypeScript declarations
- React 18+
- React 19
- MUI 5+
- Next.js App Router
- Vite / standard React applications

---

# 🌐 Jivico Ecosystem

`jivico-glass-ui` is designed as the shared visual foundation for the Jivico ecosystem.

```text
Jivico
│
├── Jivico Studio
│   └── Customer-facing commerce
│
├── Jivico Orbit
│   └── Internal administration
│
├── Jivico Pets
│   └── Future vertical
│
└── Jivico Skyline
    └── Future vertical
```

All applications share the same:

- Design language
- Glass surfaces
- Typography
- Color tokens
- Theme system
- Responsive primitives
- Motion language
- Component behavior

This keeps the Jivico ecosystem visually consistent while allowing each application to build its own product-specific UI.

---

# 📄 License

MIT © Jivico Studio
