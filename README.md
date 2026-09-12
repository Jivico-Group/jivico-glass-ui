# Jivico Glass UI (`jivico-glass-ui`)

<p align="center">
  <strong>The Unified Design System & Glassmorphic UI Library for the Jivico Ecosystem</strong>
  <br />
  <em>Powering Jivico Studio, Jivico Admin, Jivico Pets, and Jivico Skyline</em>
</p>

---

## 🌟 Key Features

- 💎 **Apple Precision & Google Antigravity Aesthetics**: Curated dual design system with frosted glass panels, liquid borders, and subtle glow overlays.
- 🌓 **Instant Theme Switching**: Zero-latency in-memory theme caching (`light` / `dark`) with smooth CSS transitions.
- 🔤 **Dynamic Typography Scale**: Pre-configured responsive font hierarchy supporting **Google Sans Flex** (with preconnect helpers) and **SF Pro Display**.
- ⚛️ **Framework Agnostic & Next.js 14/15/16 Ready**: Pre-bundled with dual **ESM (`.mjs`)** and **CommonJS (`.js`)** outputs, full TypeScript type definitions (`.d.ts`), and `'use client'` support.
- 🧩 **Zero-Setup Primitives**: Reusable glass panels, liquid cards, ambient blobs, gradient typography, and polymorphic section headers.

---

## 📦 Required Dependencies

`jivico-glass-ui` is built on top of **React**, **Material UI (MUI)**, **Emotion**, **Framer Motion**, and **Lucide Icons**.

When installing `jivico-glass-ui` into any new project (e.g. `jivico-orbit`, `jivico-pets`), install these peer dependencies:

```bash
# Core Peer Dependencies
npm install @mui/material @emotion/react @emotion/styled framer-motion lucide-react

# If using Next.js App Router, also install MUI's Next.js adapter:
npm install @mui/material-nextjs
```

---

## 📥 Installation

### Option 1: Direct from GitHub (Recommended)
```bash
npm install github:Jivico-Group/jivico-glass-ui
```
*(Or in `package.json`: `"jivico-glass-ui": "github:Jivico-Group/jivico-glass-ui"`)*

### Option 2: Local Monorepo / Workspace Link
```bash
npm install file:../jivico-glass-ui
```

---

## 🚀 Quick Start Guide

### 1. Next.js App Router Setup (`app/layout.tsx` & `Providers.tsx`)

#### `app/layout.tsx` (Root Layout & Font Preloading)
```tsx
import type { Metadata } from 'next';
import { JivicoFontPreload } from 'jivico-glass-ui';
import Providers from '@/components/providers/Providers';

export const metadata: Metadata = {
  title: 'Jivico Platform',
  description: 'Jivico Ecosystem Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnects & preloads Google Sans Flex font */}
        <JivicoFontPreload />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

#### `components/providers/Providers.tsx` (MUI + Jivico Theme Provider)
```tsx
'use client';

import React, { useMemo } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  getAntigravityTheme, 
  ThemeModeProvider, 
  useThemeMode 
} from 'jivico-glass-ui';

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getAntigravityTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <ThemeModeProvider defaultMode="light" storageKey="jivico-theme-mode">
        <MuiThemeWrapper>
          {children}
        </MuiThemeWrapper>
      </ThemeModeProvider>
    </AppRouterCacheProvider>
  );
}
```

---

### 2. Standard React / Vite Setup (`src/main.tsx`)
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { JivicoThemeProvider, JivicoFontPreload } from 'jivico-glass-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JivicoFontPreload />
    <JivicoThemeProvider defaultMode="light" storageKey="jivico-theme-mode">
      <App />
    </JivicoThemeProvider>
  </React.StrictMode>
);
```

---

## 🎨 Component & API Reference

### 1. Theme Engine & Tokens
| Export | Type | Description |
| :--- | :--- | :--- |
| `getAntigravityTheme(mode)` | `(mode: 'light' \| 'dark') => Theme` | Returns the compiled MUI Antigravity theme (cached in memory). |
| `getAppleTheme(mode)` | `(mode: 'light' \| 'dark') => Theme` | Alias for `getAntigravityTheme`. |
| `createJivicoTheme(mode)` | `(mode: 'light' \| 'dark') => Theme` | Alias for `getAntigravityTheme`. |
| `buildPalette(mode)` | `(mode: 'light' \| 'dark') => JivicoPalette` | Returns mode-resolved palette object with `.glass`, `.background`, etc. |
| `COLORS` | `object` | Raw color tokens (`primary`, `neutral`, `darkNeutral`, `accent`, `glass`, etc.). |
| `typography` | `object` | Typography scale rules with `h1` through `h6`, `body1`, `body2`, `button`. |
| `GOOGLE_SANS_FLEX_URL` | `string` | Google's variable font stylesheet URL with optical sizing. |

---

### 2. Context & Hooks
| Export | Description |
| :--- | :--- |
| `ThemeModeProvider` | Context provider managing `'light' \| 'dark'` state with `localStorage` persistence and system preferences. |
| `useThemeMode()` | Hook returning `{ mode: 'light' \| 'dark', toggleTheme: () => void, setMode: (m) => void }`. |
| `JivicoThemeProvider` | All-in-one provider bundling `ThemeModeProvider` + `ThemeProvider` + `CssBaseline`. |

---

### 3. Glassmorphic Layout Components
| Component | Description |
| :--- | :--- |
| `<GlassPanel />` | Core glass container with dynamic backdrop filter blur, specular border, and elevation presets (1-4). |
| `<PageRoot />` | Full-height responsive page wrapper with automatic responsive gutter spacing. |
| `<Section />` | Structural container for content sections with customizable vertical padding. |
| `<GlassToolbar />` | Frosted navigation toolbar with auto blur and sticky scroll support. |
| `<GlassSectionHeader />` | Glass header bar with titles, subtitles, and action slots. |
| `<SectionHeader />` | Clean headline block with category badges, titles, and link/button actions. |
| `<HeaderAppBar />` | Sticky glass AppBar for navigation bars with scroll elevation response. |
| `<Hero />` | Complete hero banner container with background image, gradient overlays, and call-to-actions. |

---

### 4. Cards, Badges & Decorations
| Component | Description |
| :--- | :--- |
| `<LiquidGlassCard />` | Premium product/feature card with hover tilt animations, glass reflections, and glowing borders. |
| `<AmbientBlob />` | Animated ambient color orb for glowing background depth effects. |
| `<GradientText />` | Typography with dynamic background clip gradients (`primary`, `accent`, `sunset`, `cyan`). |
| `<JivicoFontPreload />` | Head component rendering `preconnect` and Google Sans Flex font links. |
| `<ChipSoft />` / `<ChipGlass />` | Themed glass status badges and filter chips with active states. |
| `<MobileViewAll />` | Full-width mobile CTA button with animated right arrow icon. |

---

## 💻 Code Examples

### Glassmorphic Card with Gradient Headline & Theme Toggle
```tsx
import { 
  GlassPanel, 
  GradientText, 
  LiquidGlassCard, 
  ChipSoft,
  useThemeMode,
  COLORS 
} from 'jivico-glass-ui';
import { Button, Typography, Box } from '@mui/material';
import { Sun, Moon, Sparkles } from 'lucide-react';

export function AnalyticsWidget() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <GlassPanel elevation={2} sx={{ p: 4, borderRadius: '24px', maxWidth: 480 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <ChipSoft label="Live Insights" icon={<Sparkles size={14} />} />
        <Button 
          onClick={toggleTheme} 
          startIcon={mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          size="small"
        >
          {mode === 'dark' ? 'Light' : 'Dark'}
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

## 🛠️ Local Development & Contributing

To modify or add new components to `jivico-glass-ui`:

```bash
# Clone the repository
git clone https://github.com/Jivico-Group/jivico-glass-ui.git
cd jivico-glass-ui

# Install dependencies
npm install

# Run build watcher
npm run dev

# Build production bundle
npm run build
```

---

## 📄 License
MIT © [Jivico Group](https://github.com/Jivico-Group)
