import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  Tooltip,
  Tabs,
  Tab,
} from "@mui/material";
import { Copy, Check, Sun, Moon } from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { COLORS } from "../../../src/theme/colors.js";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

interface ColorItemProps {
  name: string;
  token: string;
  value: string;
  description?: string;
  textColor?: string;
  isTranslucent?: boolean;
}

const ColorSwatch: React.FC<ColorItemProps> = ({
  name,
  token,
  value,
  description,
  textColor,
  isTranslucent = false,
}) => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const isLightColor =
    value === "#FFFFFF" ||
    value === "#F6F5F2" ||
    value === "#D9D9CF" ||
    value.includes("255, 255, 255") ||
    value.includes("246, 245, 242");

  const effectiveTextColor =
    textColor || (isLightColor ? "#111111" : "#FFFFFF");

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.08)"
        }`,
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.03)"
          : "rgba(17, 17, 17, 0.015)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: isDark
            ? "0 8px 24px rgba(0, 0, 0, 0.4)"
            : "0 8px 20px rgba(0, 0, 0, 0.06)",
        },
      }}
    >
      <CardActionArea onClick={handleCopy}>
        {/* Visual Swatch */}
        <Box
          sx={{
            height: 84,
            width: "100%",
            position: "relative",
            background: value,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            p: 1.5,
            borderBottom: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.06)"
            }`,
            // Checkerboard pattern backdrop for translucent / glass tokens
            ...(isTranslucent && {
              backgroundImage: `linear-gradient(45deg, rgba(120, 120, 120, 0.2) 25%, transparent 25%), 
                linear-gradient(-45deg, rgba(120, 120, 120, 0.2) 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, rgba(120, 120, 120, 0.2) 75%), 
                linear-gradient(-45deg, transparent 75%, rgba(120, 120, 120, 0.2) 75%)`,
              backgroundSize: "16px 16px",
              backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: value,
              },
            }),
          }}
        >
          <Typography
            variant="caption"
            sx={{
              position: "relative",
              zIndex: 1,
              fontWeight: 700,
              fontSize: "0.72rem",
              color: effectiveTextColor,
              textShadow: isTranslucent
                ? isDark
                  ? "0 1px 2px rgba(0,0,0,0.8)"
                  : "0 1px 2px rgba(255,255,255,0.8)"
                : "none",
            }}
          >
            {value}
          </Typography>
          <Tooltip title={copied ? "Copied!" : "Copy code"}>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                p: 0.5,
                borderRadius: "6px",
                backgroundColor: isLightColor
                  ? "rgba(0, 0, 0, 0.08)"
                  : "rgba(255, 255, 255, 0.2)",
                color: effectiveTextColor,
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </Box>
          </Tooltip>
        </Box>

        {/* Token Meta */}
        <Box sx={{ p: 1.75 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              fontSize: "0.86rem",
              color: "text.primary",
              mb: 0.5,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "monospace",
              fontSize: "0.72rem",
              color: "text.secondary",
              wordBreak: "break-all",
            }}
          >
            {token}
          </Typography>
          {description && (
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 0.5,
                fontSize: "0.7rem",
                color: "text.secondary",
                lineHeight: 1.3,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const ColorsPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const [semanticMode, setSemanticMode] = useState<"light" | "dark">(
    isDark ? "dark" : "light",
  );
  const [primaryMode, setPrimaryMode] = useState<"light" | "dark">(
    isDark ? "dark" : "light",
  );
  const [glassMode, setGlassMode] = useState<"light" | "dark">(
    isDark ? "dark" : "light",
  );

  return (
    <ComponentPage
      title="Color Palette"
      description="The full spectrum of Jivico Studio design tokens: Brand Monochrome identity, adaptive Primary/Secondary scales, high-contrast Semantics, Frosted Glass tokens, and editorial gradients."
      category="Foundation"
      badges={["Brand Kit", "Monochrome", "Glassmorphic", "WCAG 2.1 AAA"]}
    >
      {/* 1. Core Brand Kit Monochrome */}
      <DemoBlock
        id="brand-monochrome"
        title="Core Brand Kit Monochrome"
        description="The foundational signature palette that defines Jivico's luxury aesthetic: Charcoal, Stone, Sand, and Cream, complemented by Pure White and Deep Black canvas boundaries."
        code={`import { COLORS } from "jivico-glass-ui";

// Core brand palette
const { charcoal, stone, sand, cream } = COLORS.brand;`}
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
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Charcoal"
            token="COLORS.brand.charcoal"
            value={COLORS.brand.charcoal}
            description="Primary Light hero, dark accent, solid buttons, and text."
          />
          <ColorSwatch
            name="Stone Gray"
            token="COLORS.brand.stone"
            value={COLORS.brand.stone}
            description="Secondary text, subtle borders, and balanced neutral tones."
          />
          <ColorSwatch
            name="Sand Light"
            token="COLORS.brand.sand"
            value={COLORS.brand.sand}
            description="Subtle borders, dividers, chip backgrounds, and warm fills."
          />
          <ColorSwatch
            name="Cream White"
            token="COLORS.brand.cream"
            value={COLORS.brand.cream}
            description="Light mode default background and Dark mode primary text/hero."
          />
          <ColorSwatch
            name="Pure White"
            token="COLORS.white"
            value={COLORS.white}
            description="Paper cards, elevated dialogs, and high-contrast text."
          />
          <ColorSwatch
            name="Deep Black (OLED)"
            token="COLORS.black"
            value={COLORS.black}
            description="Dark mode canvas background, glass overlays, and deep shadows."
          />
        </Box>
      </DemoBlock>

      {/* 2. Primary & Secondary Adaptive Palette */}
      <DemoBlock
        id="primary-secondary"
        title="Primary & Secondary Scales"
        description="Interactive adaptive tokens for interactive controls. Primary flips intentionally: bold Charcoal in Light Mode, and glowing Cream in Dark Mode for maximum luxury contrast."
        code={`import { useTheme } from "@mui/material/styles";

const theme = useTheme();
const primaryColor = theme.palette.primary.main;
const primaryGlow = theme.palette.primary.glow;`}
      >
        {/* Mode Selector for Primary */}
        <Box sx={{ mb: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
            View Tokens For:
          </Typography>
          <Tabs
            value={primaryMode}
            onChange={(_, val) => setPrimaryMode(val)}
            sx={{
              minHeight: 32,
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Light Mode"
              value="light"
              icon={<Sun size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                mr: 1,
                bgcolor:
                  primaryMode === "light"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
            <Tab
              label="Dark Mode"
              value="dark"
              icon={<Moon size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                bgcolor:
                  primaryMode === "dark"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
          </Tabs>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: "0.75rem",
          }}
        >
          Primary Spectrum ({primaryMode.toUpperCase()} MODE)
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: 2,
            mb: 3,
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Main"
            token={`COLORS.primary.${primaryMode}`}
            value={COLORS.primary[primaryMode]}
            description="Default button fill"
          />
          <ColorSwatch
            name="Hover"
            token={`COLORS.primary.hover${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.primary.hoverLight
                : COLORS.primary.hoverDark
            }
            description="Hover state"
          />
          <ColorSwatch
            name="Active"
            token={`COLORS.primary.active${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.primary.activeLight
                : COLORS.primary.activeDark
            }
            description="Pressed state"
          />
          <ColorSwatch
            name="Disabled"
            token={`COLORS.primary.disabled${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.primary.disabledLight
                : COLORS.primary.disabledDark
            }
            description="Inactive controls"
          />
          <ColorSwatch
            name="Glow Accent"
            token={`COLORS.primary.glow${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.primary.glowLight
                : COLORS.primary.glowDark
            }
            isTranslucent
            description="Halo & focus ring"
          />
          <ColorSwatch
            name="Contrast Text"
            token={`COLORS.primary.text${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.primary.textLight
                : COLORS.primary.textDark
            }
            description="Text on primary fill"
          />
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: "0.75rem",
          }}
        >
          Secondary Spectrum ({primaryMode.toUpperCase()} MODE)
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Main"
            token={`COLORS.secondary.${primaryMode}`}
            value={COLORS.secondary[primaryMode]}
            description="Secondary control fill"
          />
          <ColorSwatch
            name="Hover"
            token={`COLORS.secondary.hover${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.secondary.hoverLight
                : COLORS.secondary.hoverDark
            }
            description="Hover state"
          />
          <ColorSwatch
            name="Active"
            token={`COLORS.secondary.active${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.secondary.activeLight
                : COLORS.secondary.activeDark
            }
            description="Active state fill"
          />
          <ColorSwatch
            name="Disabled"
            token={`COLORS.secondary.disabled${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.secondary.disabledLight
                : COLORS.secondary.disabledDark
            }
            description="Inactive secondary"
          />
          <ColorSwatch
            name="Glow Accent"
            token={`COLORS.secondary.glow${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.secondary.glowLight
                : COLORS.secondary.glowDark
            }
            isTranslucent
            description="Halo & focus ring"
          />
          <ColorSwatch
            name="Contrast Text"
            token={`COLORS.secondary.text${primaryMode === "light" ? "Light" : "Dark"}`}
            value={
              primaryMode === "light"
                ? COLORS.secondary.textLight
                : COLORS.secondary.textDark
            }
            description="Text on secondary fill"
          />
        </Box>
      </DemoBlock>

      {/* 3. Semantic Status Palette */}
      <DemoBlock
        id="semantic-palette"
        title="Semantic Status Palette"
        description="High-contrast status colors inspired by Google and Apple Precision design systems. Carefully calibrated with dark mode luminescence and dedicated glow halos."
        code={`// Access semantic tokens directly or via theme
const successColor = theme.palette.success.main;
const errorColor = theme.palette.error.main;`}
      >
        <Box sx={{ mb: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
            View Mode:
          </Typography>
          <Tabs
            value={semanticMode}
            onChange={(_, val) => setSemanticMode(val)}
            sx={{
              minHeight: 32,
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Light Mode"
              value="light"
              icon={<Sun size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                mr: 1,
                bgcolor:
                  semanticMode === "light"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
            <Tab
              label="Dark Mode"
              value="dark"
              icon={<Moon size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                bgcolor:
                  semanticMode === "dark"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
          </Tabs>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2.5,
            width: "100%",
          }}
        >
          {/* Success */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, color: "success.main" }}
            >
              SUCCESS
            </Typography>
            <ColorSwatch
              name="Main"
              token={`COLORS.success.${semanticMode}`}
              value={COLORS.success[semanticMode]}
              description="Confirmations, positive metrics"
            />
            <Box sx={{ mt: 1.5 }}>
              <ColorSwatch
                name="Glow"
                token={`COLORS.success.glow${semanticMode === "light" ? "Light" : "Dark"}`}
                value={
                  semanticMode === "light"
                    ? COLORS.success.glowLight
                    : COLORS.success.glowDark
                }
                isTranslucent
                description="Status aura & focus ring"
              />
            </Box>
          </Box>

          {/* Warning */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, color: "warning.main" }}
            >
              WARNING
            </Typography>
            <ColorSwatch
              name="Main"
              token={`COLORS.warning.${semanticMode}`}
              value={COLORS.warning[semanticMode]}
              description="Caution banners, pending states"
            />
            <Box sx={{ mt: 1.5 }}>
              <ColorSwatch
                name="Glow"
                token={`COLORS.warning.glow${semanticMode === "light" ? "Light" : "Dark"}`}
                value={
                  semanticMode === "light"
                    ? COLORS.warning.glowLight
                    : COLORS.warning.glowDark
                }
                isTranslucent
                description="Warning glow & border aura"
              />
            </Box>
          </Box>

          {/* Error */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, color: "error.main" }}
            >
              ERROR
            </Typography>
            <ColorSwatch
              name="Main"
              token={`COLORS.error.${semanticMode}`}
              value={COLORS.error[semanticMode]}
              description="Destructive actions, error alerts"
            />
            <Box sx={{ mt: 1.5 }}>
              <ColorSwatch
                name="Glow"
                token={`COLORS.error.glow${semanticMode === "light" ? "Light" : "Dark"}`}
                value={
                  semanticMode === "light"
                    ? COLORS.error.glowLight
                    : COLORS.error.glowDark
                }
                isTranslucent
                description="Critical halo & invalid ring"
              />
            </Box>
          </Box>

          {/* Info */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 1, color: "info.main" }}
            >
              INFO
            </Typography>
            <ColorSwatch
              name="Main"
              token={`COLORS.info.${semanticMode}`}
              value={COLORS.info[semanticMode]}
              description="System hints, docs links"
            />
            <Box sx={{ mt: 1.5 }}>
              <ColorSwatch
                name="Glow"
                token={`COLORS.info.glow${semanticMode === "light" ? "Light" : "Dark"}`}
                value={
                  semanticMode === "light"
                    ? COLORS.info.glowLight
                    : COLORS.info.glowDark
                }
                isTranslucent
                description="Informational glow aura"
              />
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 4. Canvas, Surfaces & Text */}
      <DemoBlock
        id="surfaces-backgrounds"
        title="Surfaces, Canvas & Text Hierarchy"
        description="Core background planes and text contrast hierarchy optimized for clean editorial legibility and deep dark mode depth."
        code={`// Palette background & text
const bgDefault = theme.palette.background.default;
const textPrimary = theme.palette.text.primary;`}
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
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Background (Default Light)"
            token="COLORS.background.light"
            value={COLORS.background.light}
            description="Editorial Cream canvas for light theme."
          />
          <ColorSwatch
            name="Background (Default Dark)"
            token="COLORS.background.dark"
            value={COLORS.background.dark}
            description="Deep black canvas for dark theme."
          />
          <ColorSwatch
            name="Paper Surface (Light)"
            token="COLORS.background.paperLight"
            value={COLORS.background.paperLight}
            description="Pure White card surface with high contrast against Cream."
          />
          <ColorSwatch
            name="Paper Surface (Dark)"
            token="COLORS.background.paperDark"
            value={COLORS.background.paperDark}
            description="Elevated dark surface for cards and dropdowns."
          />
          <ColorSwatch
            name="Text Primary (Light)"
            token="COLORS.text.primaryLight"
            value={COLORS.text.primaryLight}
            description="Charcoal text with crispness on light backgrounds."
          />
          <ColorSwatch
            name="Text Primary (Dark)"
            token="COLORS.text.primaryDark"
            value={COLORS.text.primaryDark}
            description="Cream text with ultra-high contrast on dark surfaces."
          />
        </Box>
      </DemoBlock>

      {/* 5. Frosted Glass Tokens */}
      <DemoBlock
        id="glass-system"
        title="Glassmorphism System Tokens"
        description="Alpha-calibrated translucent tokens designed to deliver optical depth, frosted blurs, and glass refraction without opacity artifacts."
        code={`// Used internally by color="glass" variants & GlassPanel
const glassFill = theme.palette.glass.paperBg;
const glassBorder = theme.palette.glass.paperBorder;`}
      >
        <Box sx={{ mb: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
            View Tokens For:
          </Typography>
          <Tabs
            value={glassMode}
            onChange={(_, val) => setGlassMode(val)}
            sx={{
              minHeight: 32,
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Light Mode Glass"
              value="light"
              icon={<Sun size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                mr: 1,
                bgcolor:
                  glassMode === "light"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
            <Tab
              label="Dark Mode Glass"
              value="dark"
              icon={<Moon size={14} />}
              iconPosition="start"
              sx={{
                minHeight: 32,
                py: 0.5,
                px: 2,
                borderRadius: "8px",
                fontSize: "0.8rem",
                textTransform: "none",
                fontWeight: 600,
                bgcolor:
                  glassMode === "dark"
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(17,17,17,0.08)"
                    : "transparent",
              }}
            />
          </Tabs>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Glass Main"
            token={`COLORS.glass.main${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.mainLight
                : COLORS.glass.mainDark
            }
            isTranslucent
            description="Default frosted glass fill"
          />
          <ColorSwatch
            name="Glass Light"
            token={`COLORS.glass.light${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.lightLight
                : COLORS.glass.lightDark
            }
            isTranslucent
            description="High-translucency glass layer"
          />
          <ColorSwatch
            name="Glass Button Border"
            token={`COLORS.glass.buttonBorder${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.buttonBorderLight
                : COLORS.glass.buttonBorderDark
            }
            isTranslucent
            description="Glass button boundary stroke"
          />
          <ColorSwatch
            name="Glass Glow Halo"
            token={`COLORS.glass.glow${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.glowLight
                : COLORS.glass.glowDark
            }
            isTranslucent
            description="Glass refraction glow"
          />
          <ColorSwatch
            name="Paper Glass Fill"
            token={`COLORS.glass.paperBg${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.paperBgLight
                : COLORS.glass.paperBgDark
            }
            isTranslucent
            description="Surface background for GlassPanel"
          />
          <ColorSwatch
            name="Paper Glass Border"
            token={`COLORS.glass.paperBorder${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.paperBorderLight
                : COLORS.glass.paperBorderDark
            }
            isTranslucent
            description="Edge line for panels & modals"
          />
          <ColorSwatch
            name="Dialog Glass Fill"
            token={`COLORS.glass.dialogBg${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.dialogBgLight
                : COLORS.glass.dialogBgDark
            }
            isTranslucent
            description="Modal backdrops and dialog bodies"
          />
          <ColorSwatch
            name="Tooltip Glass Fill"
            token={`COLORS.glass.tooltipBg${glassMode === "light" ? "Light" : "Dark"}`}
            value={
              glassMode === "light"
                ? COLORS.glass.tooltipBgLight
                : COLORS.glass.tooltipBgDark
            }
            isTranslucent
            description="Translucent tooltip container"
          />
        </Box>
      </DemoBlock>

      {/* 6. Editorial Monochrome Gradients */}
      <DemoBlock
        id="editorial-gradients"
        title="Editorial Monochrome Gradients"
        description="Signature monochrome sweeps tailored to accentuate headlines, hero titles, and spotlight cards without distracting chromatic gradients."
        code={`import { GradientText } from "jivico-glass-ui";

<GradientText variant="h2">
  Apple Precision & Google 
</GradientText>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          <ColorSwatch
            name="Primary Monochrome Sweep"
            token="COLORS.gradients.primary"
            value={COLORS.gradients.primary}
            description="Charcoal (#111111) to Stone (#686868) at 135deg. Used on hero headings."
          />
          <ColorSwatch
            name="Primary Hover Gradient"
            token="COLORS.gradients.primaryHover"
            value={COLORS.gradients.primaryHover}
            description="Pure Black (#000000) to Medium Gray (#4A4A4A) at 135deg."
          />
          <ColorSwatch
            name="Accent Sweep (Light Mode)"
            token="COLORS.gradients.accent"
            value={COLORS.gradients.accent}
            description="Stone (#686868) to Sand (#D9D9CF) for soft editorial titles."
          />
          <ColorSwatch
            name="Accent Sweep (Dark Mode)"
            token="COLORS.gradients.accentDark"
            value={COLORS.gradients.accentDark}
            description="Cream (#F6F5F2) to Stone (#686868) for luminous dark headings."
          />
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
