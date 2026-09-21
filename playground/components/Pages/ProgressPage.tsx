import React, { useState, useEffect } from "react";
import {
  Box,
  LinearProgress,
  Skeleton,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import {
  Sparkles,
  RefreshCw,
  Layers,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const ProgressPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [progress, setProgress] = useState(45);
  const [buffer, setBuffer] = useState(70);

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
            <LinearProgress
              color="glass"
              appearance="glass"
              variant="determinate"
              value={progress}
              size="medium"
            />
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
            <LinearProgress
              color="primary"
              appearance="tonal"
              variant="determinate"
              value={progress}
              size="medium"
            />
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
            <LinearProgress
              color="accent"
              appearance="solid"
              variant="determinate"
              value={progress}
              size="medium"
            />
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
            <LinearProgress
              color="info"
              appearance="outlined"
              variant="determinate"
              value={progress}
              size="medium"
            />
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
              <Skeleton
                variant="circular"
                width={48}
                height={48}
                appearance="glass"
                animation="wave"
              />
              <Box sx={{ flex: 1 }}>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={22}
                  appearance="glass"
                  animation="wave"
                  sx={{ mb: 0.5 }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  height={16}
                  appearance="glass"
                  animation="wave"
                />
              </Box>
            </Box>

            <Skeleton
              variant="rectangular"
              width="100%"
              height={120}
              radius="large"
              appearance="glass"
              animation="wave"
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: "flex", gap: 1 }}>
              <Skeleton
                variant="rounded"
                width={80}
                height={28}
                radius="pill"
                appearance="glass"
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={100}
                height={28}
                radius="pill"
                appearance="glass"
                animation="wave"
              />
            </Box>
          </Box>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
