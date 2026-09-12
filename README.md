# Jivico Glass UI (`jivico-glass-ui`)

> **Jivico Ecosystem Shared Design System, Apple Precision & Google Antigravity Glassmorphic UI Components.**

---

## 📦 Installation

### From GitHub (Direct)
```bash
npm install git+https://github.com/Jivico-Group/jivico-glass-ui.git
```

### For Local Workspace Development
```bash
npm install file:../jivico-glass-ui
```

---

## 🚀 Quick Start

### 1. Wrap your Next.js / React application with `JivicoThemeProvider`:

```tsx
import { JivicoThemeProvider } from 'jivico-glass-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JivicoThemeProvider>
          {children}
        </JivicoThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Use Glassmorphic Primitives & Themes in your Components:

```tsx
import { 
  GlassPanel, 
  GradientText, 
  LiquidGlassCard, 
  useThemeMode, 
  COLORS 
} from 'jivico-glass-ui';

export function ExampleCard() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <GlassPanel elevation={2} sx={{ p: 4, borderRadius: '24px' }}>
      <GradientText variant="h3">
        Antigravity Streetwear
      </GradientText>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </GlassPanel>
  );
}
```

---

## 🛠️ Components & Primitives Included

- **Theme Engine**: `COLORS`, `buildPalette`, `typography`, `getAntigravityTheme`, `createJivicoTheme`
- **Layout Primitives**: `GlassPanel`, `PageRoot`, `Section`, `SectionHeader`, `GlassSectionHeader`, `GlassToolbar`, `HeaderAppBar`, `Hero`
- **Cards & Displays**: `LiquidGlassCard`, `AmbientBlob`, `GradientText`, `Chips` (`PremiumChip`, `StockChip`), `MobileViewAllButton`
- **Context & Providers**: `ThemeModeProvider`, `useThemeMode`, `JivicoThemeProvider`
