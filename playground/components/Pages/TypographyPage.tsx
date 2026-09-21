import React from "react";
import { Box, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { GradientText, GradientContextTitle } from "../../../src/components/index.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";
import { COLORS } from "../../../src/theme/colors/index.js";

export const TypographyPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Color tokens showcase grid data
  const textColors = [
    {
      name: "Text Primary",
      prop: "text.primary",
      hex: isDark ? COLORS.text.primaryDark : COLORS.text.primaryLight,
      desc: "High contrast primary body & heading typography",
      sample: "Jivico Glass Primary Text",
    },
    {
      name: "Text Secondary",
      prop: "text.secondary",
      hex: isDark ? COLORS.text.secondaryDark : COLORS.text.secondaryLight,
      desc: "Muted secondary labels, subtitles & descriptions",
      sample: "Secondary auxiliary metadata text",
    },
    {
      name: "Brand Charcoal",
      prop: "brand.charcoal",
      hex: COLORS.brand.charcoal,
      desc: "Signature deep obsidian brand accent",
      sample: "Deep Charcoal Brand Typography",
    },
    {
      name: "Brand Stone",
      prop: "brand.stone",
      hex: COLORS.brand.stone,
      desc: "Sophisticated editorial stone gray",
      sample: "Refined Stone Gray Typography",
    },
    {
      name: "Brand Sand",
      prop: "brand.sand",
      hex: COLORS.brand.sand,
      desc: "Warm tactile sand token",
      sample: "Warm Sand Accent Text",
    },
    {
      name: "Brand Cream",
      prop: "brand.cream",
      hex: COLORS.brand.cream,
      desc: "Ultra-clean luminous cream white",
      sample: "Luminous Cream Typography",
    },
    {
      name: "Primary Main",
      prop: "primary.main",
      hex: isDark ? COLORS.primary.dark : COLORS.primary.light,
      desc: "Main brand interactive color token",
      sample: "Primary Interactive Typography",
    },
    {
      name: "Secondary Main",
      prop: "secondary.main",
      hex: isDark ? COLORS.secondary.dark : COLORS.secondary.light,
      desc: "Balanced secondary tone",
      sample: "Secondary Accent Typography",
    },
    {
      name: "Accent Gold",
      prop: "accent.main",
      hex: isDark ? COLORS.accent.dark : COLORS.accent.light,
      desc: "Luxury metallic champagne gold",
      sample: "Champagne Gold Accent Text",
    },
    {
      name: "Semantic Success",
      prop: "success.main",
      hex: isDark ? COLORS.success.dark : COLORS.success.light,
      desc: "Positive status & metric growth text",
      sample: "Success State Typography (+24.8%)",
    },
    {
      name: "Semantic Warning",
      prop: "warning.main",
      hex: isDark ? COLORS.warning.dark : COLORS.warning.light,
      desc: "Cautionary alerts & pending state text",
      sample: "Warning Alert Typography (Action Required)",
    },
    {
      name: "Semantic Error",
      prop: "error.main",
      hex: isDark ? COLORS.error.dark : COLORS.error.light,
      desc: "Critical destructive & failure text",
      sample: "Destructive Error Typography (Failed)",
    },
    {
      name: "Semantic Info",
      prop: "info.main",
      hex: isDark ? COLORS.info.dark : COLORS.info.light,
      desc: "Informational system notice text",
      sample: "System Notice Typography (Information)",
    },
  ];

  return (
    <ComponentPage
      title="Typography & Color System"
      description="Typography hierarchy and comprehensive color tokens featuring SF Pro Display, Montserrat, Space Grotesk, and specular gradient text components."
      category="Data Display"
      badges={["Typography", "Text Colors", "GradientText", "Montserrat"]}
    >
      {/* 1. All Text Color Tokens Showcase */}
      <DemoBlock
        id="text-colors-all"
        title="Comprehensive Typography Colors"
        description="Every text color variant available in the Jivico palette, including primary, secondary, brandkit tones, accent gold, and semantic status colors."
        code={`// Palette Text Colors
<Typography color="text.primary">Primary Text</Typography>
<Typography color="text.secondary">Secondary Text</Typography>
<Typography color="brand.charcoal">Brand Charcoal</Typography>
<Typography color="brand.stone">Brand Stone</Typography>
<Typography color="brand.sand">Brand Sand</Typography>
<Typography color="brand.cream">Brand Cream</Typography>
<Typography color="accent.main">Champagne Gold Accent</Typography>
<Typography color="success.main">Success Green</Typography>
<Typography color="warning.main">Warning Orange</Typography>
<Typography color="error.main">Error Red</Typography>
<Typography color="info.main">Info Blue</Typography>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {textColors.map((col) => (
            <Paper
              key={col.name}
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: "16px",
                bgcolor: isDark
                  ? "rgba(255, 255, 255, 0.03)"
                  : "rgba(17, 17, 17, 0.02)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                    color: "text.secondary",
                  }}
                >
                  {col.prop}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: col.hex,
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: `0 0 8px ${col.hex}44`,
                    }}
                  />
                  <Chip
                    label={col.hex}
                    size="small"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      height: 20,
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.05)",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor:
                    col.hex === "#F6F5F2" || col.hex === "#D9D9CF" || col.hex === "#FFFFFF"
                      ? isDark
                        ? "rgba(255, 255, 255, 0.08)"
                        : "#18181B"
                      : "transparent",
                  display: "inline-block",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: col.hex,
                  }}
                >
                  {col.sample}
                </Typography>
              </Box>

              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mt: "auto" }}
              >
                {col.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </DemoBlock>

      {/* 2. Gradient Text Components & Styles */}
      <DemoBlock
        id="gradient-text"
        title="Specular Gradient Typography"
        description="Liquid glass gradient text components for hero headers, titles, and high-impact emphasis."
        code={`import { GradientText, GradientContextTitle } from 'jivico-glass-ui';

// Monochrome Signature Gradient
<Typography variant="h3" sx={{ fontWeight: 800 }}>
  <GradientText isDark={isDark}>Luxury Glass UI System</GradientText>
</Typography>

// Title Component
<GradientContextTitle isDark={isDark}>
  Context Title Gradient
</GradientContextTitle>

// Custom Color Gradients
<Typography variant="h4" sx={{
  background: 'linear-gradient(135deg, #D4B77A 0%, #B08D57 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}>
  Gold Metallic Gradient
</Typography>`}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              Signature Monochrome Gradient (Light: Charcoal → Stone / Dark: Cream → Sand)
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              <GradientText isDark={isDark}>Jivico Studio Design System</GradientText>
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
              GradientContextTitle Component
            </Typography>
            <GradientContextTitle isDark={isDark}>
              Optical Glassmorphism Architecture
            </GradientContextTitle>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 1, display: "block" }}>
              Custom Palette Gradient Sweeps
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #D4B77A 0%, #B08D57 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Champagne Gold
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Luxury Metallic
                </Typography>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #8AB4F8 0%, #4285F4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sapphire Ocean
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Vibrant System Blue
                </Typography>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #81C995 0%, #34A853 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Emerald Neon
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Positive Growth Status
                </Typography>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #F28B82 0%, #EA4335 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ruby Flame
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Destructive Action Tone
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Stack>
      </DemoBlock>

      {/* 3. Heading Scale & Font Variants */}
      <DemoBlock
        id="headings"
        title="Typographic Scale & Font Families"
        description="Standardized font scale calibrated with Montserrat for headings and SF Pro Display / Space Grotesk for body."
        code={`<Typography variant="h1">h1. Heading (3.75rem / 60px)</Typography>
<Typography variant="h2">h2. Heading (2.85rem / 45.6px)</Typography>
<Typography variant="h3">h3. Heading (2.1rem / 33.6px)</Typography>
<Typography variant="h4">h4. Heading (1.5rem / 24px)</Typography>
<Typography variant="h5">h5. Heading (1.25rem / 20px)</Typography>
<Typography variant="h6">h6. Heading (1rem / 16px)</Typography>
<Typography variant="subtitle1">subtitle1. Editorial Subtitle</Typography>
<Typography variant="body1">body1. Primary Body Text</Typography>
<Typography variant="body2">body2. Compact Body Text</Typography>
<Typography variant="overline">overline. Section Label</Typography>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h1 · 3.75rem (60px) · Montserrat 700
            </Typography>
            <Typography variant="h1" sx={{ color: "text.primary" }}>
              Precision Glass UI
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h2 · 2.85rem (45.6px) · Montserrat 700
            </Typography>
            <Typography variant="h2" sx={{ color: "text.primary" }}>
              Liquid Specular Engine
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h3 · 2.1rem (33.6px) · Montserrat 700
            </Typography>
            <Typography variant="h3" sx={{ color: "text.primary" }}>
              Design Tokens & Surface Geometry
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h4 · 1.5rem (24px) · Montserrat 600
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              Component Architecture & State System
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h5 · 1.25rem (20px) · Montserrat 600
            </Typography>
            <Typography variant="h5" sx={{ color: "text.primary" }}>
              Tactile Spring Physics & Micro-Interactions
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              h6 · 1.0rem (16px) · Montserrat 600
            </Typography>
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Perimeter Specular Border Reflection & Light Leaks
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              body1 · 1.0625rem (17px) · SF Pro Display / Space Grotesk 400
            </Typography>
            <Typography variant="body1" color="text.primary">
              Crafted for high-density dashboards and modern web application interfaces. Features comfortable 1.55 line height, optical kerning, and smooth dark mode contrast transitions.
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              body2 · 0.875rem (14px) · SF Pro Display 400
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Compact secondary body text designed for card descriptions, list items, and modal dialog content.
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
              caption & overline · 0.75rem / 0.7rem · Uppercase Letter Spacing
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography variant="caption" color="text.secondary">
                caption. Metadata, timestamps, and helper text labels.
              </Typography>
              <Typography variant="overline" color="accent.main">
                OVERLINE · CATEGORY BADGE
              </Typography>
            </Box>
          </Box>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};

