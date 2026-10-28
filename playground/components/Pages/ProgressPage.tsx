import React, { useEffect, useState } from "react";
import { Activity, CheckCircle2, Layers, RefreshCw, Sparkles, Zap } from "lucide-react";
import { Avatar, Box, Button, Card, CardContent, Chip, LinearProgress, Skeleton, Stack, Typography } from "@mui/material";
import { useGlassMode } from "../../../src/context/ThemeContext.js";
import { Loader, BackdropLoader } from "../../../src/components/loading/index.js";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

export const ProgressPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [progress, setProgress] = useState(45);
  const [buffer, setBuffer] = useState(70);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [containedBackdropOpen, setContainedBackdropOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 0;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
      setBuffer((oldBuffer) => {
        if (oldBuffer === 100) return 10;
        const diff = Math.random() * 10;
        return Math.min(oldBuffer + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <ComponentPage
      title="Linear Progress & Skeleton Loaders"
      description="Frosted glass loading indicators, glow progress bars, and shimmer placeholder skeletons for fluid loading states."
      category="Feedback"
      badges={["Progress", "Skeleton", "Glow Physics", "Glass Surface"]}
    >
      {/* 1. Linear Progress Appearances */}
      <DemoBlock
        id="linear-progress-appearances"
        title="Linear Progress Appearances (Glass, Tonal, Solid, Outlined)"
        description="LinearProgress supports four visual appearances via `appearance='glass' | 'tonal' | 'solid' | 'outlined'` with custom `size` and `glow` options."
        code={`<LinearProgress color="glass" appearance="glass" value={progress} variant="determinate" />
<LinearProgress color="primary" appearance="tonal" value={progress} variant="determinate" />
<LinearProgress color="accent" appearance="solid" value={progress} variant="determinate" />
<LinearProgress color="info" appearance="outlined" value={progress} variant="determinate" />`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Glass Appearance (Signature Frosted Track)
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress color="glass" appearance="glass" variant="determinate" value={progress} size="medium" />
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Tonal Appearance (Soft Translucent Tint)
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress color="primary" appearance="tonal" variant="determinate" value={progress} size="medium" />
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Solid Appearance (High Contrast Fill)
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress color="accent" appearance="solid" variant="determinate" value={progress} size="medium" />
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Outlined Appearance (Framed Vector Track)
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress color="info" appearance="outlined" variant="determinate" value={progress} size="medium" />
          </Box>
        </Box>
      </DemoBlock>

      {/* 2. Color Palette & Glow */}
      <DemoBlock
        id="linear-progress-colors"
        title="Palette Colors & Glowing Aura"
        description="LinearProgress renders vibrant semantic palette colors (`success`, `info`, `warning`, `error`, `accent`, `glass`) with subtle glowing aura reflections."
        code={`<LinearProgress color="success" glow value={75} variant="determinate" />
<LinearProgress color="info" glow value={60} variant="determinate" />
<LinearProgress color="warning" glow value={85} variant="determinate" />
<LinearProgress color="error" glow value={30} variant="determinate" />`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, width: "100%" }}>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: "block" }}>
              Success (Vibrant Emerald)
            </Typography>
            <LinearProgress color="success" variant="determinate" value={85} glow size="medium" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: "block" }}>
              Info (Google Blue)
            </Typography>
            <LinearProgress color="info" variant="determinate" value={65} glow size="medium" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: "block" }}>
              Warning (Amber Glow)
            </Typography>
            <LinearProgress color="warning" variant="determinate" value={90} glow size="medium" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: "block" }}>
              Error (Crimson Red)
            </Typography>
            <LinearProgress color="error" variant="determinate" value={40} glow size="medium" />
          </Box>
        </Box>
      </DemoBlock>

      {/* 3. Progress Track Sizes */}
      <DemoBlock
        id="linear-progress-sizes"
        title="Progress Track Scale (Thin, Small, Medium, Large)"
        description="Select heights using `size='thin' | 'small' | 'medium' | 'large'` paired with custom corner radiuses (`radius='pill' | 'medium' | 'square'`)."
        code={`<LinearProgress size="thin" color="glass" />
<LinearProgress size="small" color="glass" />
<LinearProgress size="medium" color="glass" />
<LinearProgress size="large" color="glass" />`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, width: "100%" }}>
          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              Thin Track (3px)
            </Typography>
            <LinearProgress size="thin" color="glass" appearance="glass" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              Small Track (4px)
            </Typography>
            <LinearProgress size="small" color="glass" appearance="glass" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              Medium Track (6px)
            </Typography>
            <LinearProgress size="medium" color="glass" appearance="glass" />
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              Large Track (8px)
            </Typography>
            <LinearProgress size="large" color="glass" appearance="glass" />
          </Box>
        </Box>
      </DemoBlock>

      {/* 4. Glass Skeleton Loading Placeholders */}
      <DemoBlock
        id="skeleton-placeholders"
        title="Glass Skeleton Shimmer Loading"
        description="Skeletons feature translucent frosted glass surfaces (`appearance='glass' | 'tonal' | 'solid'`) with wave light sheen animation."
        code={`<Skeleton variant="text" width={240} height={24} appearance="glass" animation="wave" />
<Skeleton variant="circular" width={44} height={44} appearance="glass" animation="wave" />
<Skeleton variant="rectangular" width="100%" height={120} radius="large" appearance="glass" animation="wave" />`}
      >
        <Box sx={{ width: "100%", maxWidth: 540 }}>
          {/* Card Loading Mockup */}
          <Box
            sx={{
              p: 3,
              borderRadius: "20px",
              bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
              backdropFilter: "blur(16px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
              <Skeleton variant="circular" width={48} height={48} appearance="glass" animation="wave" />
              <Box sx={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" height={22} appearance="glass" animation="wave" sx={{ mb: 0.5 }} />
                <Skeleton variant="text" width="40%" height={16} appearance="glass" animation="wave" />
              </Box>
            </Box>

            <Skeleton variant="rectangular" width="100%" height={120} radius="large" appearance="glass" animation="wave" sx={{ mb: 2 }} />

            <Box sx={{ display: "flex", gap: 1 }}>
              <Skeleton variant="rounded" width={80} height={28} radius="pill" appearance="glass" animation="wave" />
              <Skeleton variant="rounded" width={100} height={28} radius="pill" appearance="glass" animation="wave" />
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 5. Reusable Loader (Apple Blue & Colors) */}
      <DemoBlock
        id="loader-spinners"
        title="Reusable Loader (Apple-Blue & Semantic Palette)"
        description="Standalone loading indicator defaulting to Jivico's signature Apple-style blue (`color='info'`). Supports custom width, height, thickness, and determinate variants."
        code={`<Loader />
<Loader color="info" width={48} height={48} />
<Loader color="success" width={40} height={40} />
<Loader color="warning" width={32} height={32} />
<Loader color="error" variant="determinate" value={75} />`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Stack direction="row" sx={{ alignItems: "center", flexWrap: "wrap" }} spacing={3}>
            <Box sx={{ textAlign: "center" }}>
              <Loader color="info" width={56} height={56} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Default (info)
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Loader color="primary" width={48} height={48} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Primary
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Loader color="success" width={44} height={44} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Success
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Loader color="warning" width={40} height={40} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Warning
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Loader color="error" width={36} height={36} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Error
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Loader variant="determinate" value={Math.round(progress)} color="info" width={48} height={48} />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
          </Stack>
        </Box>
      </DemoBlock>

      {/* 6. Theme-Aware Image Loader */}
      <DemoBlock
        id="loader-custom-images"
        title="Theme-Aware Custom Image Loader"
        description="When custom image sources (`src` / `darkSrc`) are supplied, the spinner is seamlessly replaced with browser-compatible SVG, WebP, GIF, or PNG assets. If an image fails, it automatically reverts to the themed spinner."
        code={`// Separate assets for Light and Dark modes:
<Loader
  src="data:image/svg+xml,..." // Dark icon for light background
  darkSrc="data:image/svg+xml,..." // White icon for dark background
  width={64}
  height={64}
/>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Stack direction="row" spacing={4} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            {/* Theme-aware SVG mock */}
            <Box sx={{ textAlign: "center" }}>
              <Loader
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='%23111111' stroke-width='8' fill='none'/><circle cx='50' cy='20' r='8' fill='%230071E3'/></svg>"
                darkSrc="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='%23F5F5F7' stroke-width='8' fill='none'/><circle cx='50' cy='20' r='8' fill='%232997FF'/></svg>"
                width={56}
                height={56}
                alt="Theme-aware Jivico Logo"
              />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Theme Adaptive SVG ({isDark ? "Dark Asset" : "Light Asset"})
              </Typography>
            </Box>

            {/* Injected Component Mock (Next.js Image) */}
            <Box sx={{ textAlign: "center" }}>
              <Loader
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,15 90,85 10,85' fill='%230071E3'/></svg>"
                ImageComponent={({ src, alt, style }: { src?: unknown; alt?: string; style?: React.CSSProperties }) => (
                  <img src={typeof src === "object" && src !== null && "src" in src ? (src as { src: string }).src : String(src ?? "")} alt={alt} style={{ ...style, filter: "drop-shadow(0 0 8px rgba(0,113,227,0.5))" }} />
                )}
                width={56}
                height={56}
                alt="Injected ImageComponent"
              />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600 }}>
                Injected ImageComponent (Next.js)
              </Typography>
            </Box>

            {/* Error Fallback Demo */}
            <Box sx={{ textAlign: "center" }}>
              <Loader src="/non-existent-broken-image.png" width={56} height={56} color="info" />
              <Typography variant="caption" sx={{ display: "block", mt: 1, fontWeight: 600, color: "text.secondary" }}>
                Auto Fallback on Error
              </Typography>
            </Box>
          </Stack>
        </Box>
      </DemoBlock>

      {/* 7. BackdropLoader Overlay */}
      <DemoBlock
        id="backdrop-loader"
        title="BackdropLoader (Glassmorphic Overlay with Messages)"
        description="Full-screen or container-level overlay composing `<Loader>` inside Material UI's `<Backdrop>` with frosted glass blur and optional centered typography caption."
        code={`<BackdropLoader
  open={loading}
  message="Processing your order..."
  color="info"
  blur="12px"
/>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="accent" onClick={() => setBackdropOpen(true)}>
              Launch Fullscreen Backdrop (3s)
            </Button>
            <Button variant="outlined" color="glass" onClick={() => setContainedBackdropOpen(!containedBackdropOpen)}>
              Toggle Contained Card Overlay
            </Button>
          </Stack>

          {/* Contained overlay card preview */}
          <Box
            sx={{
              position: "relative",
              height: 200,
              borderRadius: "20px",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
              bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.5)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Parent Card Content (Container-level loading area)
            </Typography>

            <BackdropLoader
              open={containedBackdropOpen}
              contained={true}
              message="Syncing inventory..."
              color="info"
              width={48}
              height={48}
            />
          </Box>

          <BackdropLoader
            open={backdropOpen}
            message="Processing your request with Apple-precision physics..."
            color="info"
            blur="16px"
            onClick={() => setBackdropOpen(false)}
          />
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
