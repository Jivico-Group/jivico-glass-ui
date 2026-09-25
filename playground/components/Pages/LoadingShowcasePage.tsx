"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  TextField,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Play, CheckCircle2, RotateCcw, Sparkles, Orbit } from "lucide-react";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { LoadingShowcase } from "../../../src/components/loading/LoadingShowcase.js";
import type { LoadingShowcaseImage } from "../../../src/components/loading/LoadingShowcase.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

interface LoadingPreset {
  label: string;
  title: string;
  loadingLabel: string;
  image?: LoadingShowcaseImage;
}

const PRESETS: Record<string, LoadingPreset> = {
  apparel: {
    label: "Originals Drop",
    title: "Preparing your exclusive drop experience...",
    loadingLabel: "CURATING ARCHIVAL PIECES",
    image: {
      src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      alt: "Apparel Collection",
      width: 540,
      height: 540,
    },
  },
  freestyle: {
    label: "3D Freestyle Studio",
    title: "Compiling 3D materials & lighting...",
    loadingLabel: "INITIALIZING MULTIVERSE ENGINE",
    image: {
      src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      alt: "3D Garment Model",
      width: 540,
      height: 540,
    },
  },
  footwear: {
    label: "Footwear Archive",
    title: "Synchronizing limited editions...",
    loadingLabel: "VERIFYING BLOCKCHAIN CERTIFICATES",
    image: {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      alt: "Limited Sneaker",
      width: 540,
      height: 540,
    },
  },
  minimal: {
    label: "Minimal (No Image)",
    title: "Connecting to Jivico Studio...",
    loadingLabel: "ESTABLISHING SECURE SESSION",
  },
};

export const LoadingShowcasePage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Playground state
  const [selectedPreset, setSelectedPreset] = useState<string>("apparel");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [title, setTitle] = useState(
    "Preparing your exclusive drop experience...",
  );
  const [loadingLabel, setLoadingLabel] = useState("CURATING ARCHIVAL PIECES");
  const [showImage, setShowImage] = useState(true);
  const [showSignature, setShowSignature] = useState(true);
  const [remountKey, setRemountKey] = useState(0);

  // Controlled Demo state
  const [controlledLoading, setControlledLoading] = useState(true);
  const [controlledKey, setControlledKey] = useState(0);

  const applyPreset = (key: string) => {
    setSelectedPreset(key);
    const p = PRESETS[key];
    if (!p) return;
    setTitle(p.title);
    setLoadingLabel(p.loadingLabel);
    setShowImage(Boolean(p.image));
    setIsLoading(true);
    setRemountKey((k) => k + 1);
  };

  const handleRestart = () => {
    setIsLoading(true);
    setRemountKey((k) => k + 1);
  };

  const controlsBox = {
    p: 3,
    borderRadius: "20px",
    bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
  };

  const labelSx = {
    fontSize: "0.72rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    mb: 0.5,
  };

  const generatedCode = `<LoadingShowcase
${
  showImage && PRESETS[selectedPreset]?.image
    ? `  image={{
    src: "${PRESETS[selectedPreset].image.src}",
    alt: "${PRESETS[selectedPreset].image.alt}",
    width: 540,
    height: 540,
  }}\n`
    : ""
}${!isLoading ? `  loading={false}\n` : ""}  title="${title}"
  loadingLabel="${loadingLabel}"
${!showSignature ? `  signature={null}\n` : ""}/>`;

  return (
    <ComponentPage
      title="LoadingShowcase"
      description="An immersive, cosmic floating loading screen for application transitions, 3D builder initializations, and drop launches. Features dual orbital ring SVG animations, organic floating product physics, dynamic deceleration progress, and signature branding."
      category="Feedback & Status"
      badges={[
        "Loading Screen",
        "Cosmic Orbits",
        "Progress Animation",
        "Edge-to-Edge",
        "Next.js Ready",
      ]}
    >
      {/* ============================================================
          1. Interactive Playground
      ============================================================ */}
      <DemoBlock
        id="interactive-loading-showcase"
        title="Interactive Playground"
        description="Switch between real-world scenario presets, test active vs completed loading states, adjust labels live, and observe the decelerating progress bar."
        code={generatedCode}
      >
        <Stack spacing={3}>
          {/* Controls Panel */}
          <Box sx={controlsBox}>
            <Stack spacing={2.5}>
              {/* Presets Row */}
              <Box>
                <Typography sx={labelSx} color="text.secondary">
                  Choose Scenario Preset,
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ gap: 1, mt: 0.5, flexWrap: "wrap" }}
                >
                  {Object.entries(PRESETS).map(([key, p]) => (
                    <Chip
                      key={key}
                      label={p.label}
                      clickable
                      color={selectedPreset === key ? "primary" : "default"}
                      variant={selectedPreset === key ? "filled" : "outlined"}
                      onClick={() => applyPreset(key)}
                      sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Status & Control Actions */}
              <Box>
                <Typography sx={labelSx} color="text.secondary">
                  Loading State & Actions
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center", flexWrap: "wrap" }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={isLoading}
                        onChange={(e) => setIsLoading(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {isLoading
                          ? "Status: Loading (Active)"
                          : "Status: Completed (100%)"}
                      </Typography>
                    }
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<RotateCcw size={14} />}
                    onClick={handleRestart}
                    sx={{
                      borderRadius: "9999px",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Restart from 0%
                  </Button>
                </Stack>
              </Box>

              {/* Toggles */}
              <Box>
                <Typography sx={labelSx} color="text.secondary">
                  Slots & Elements
                </Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={showImage}
                        onChange={(e) => setShowImage(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Product Visual & Cosmic Orbits
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={showSignature}
                        onChange={(e) => setShowSignature(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">Signature Footer</Typography>
                    }
                  />
                </Stack>
              </Box>

              {/* Text Inputs */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  size="small"
                  label="Title Message"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ flex: 2 }}
                />
                <TextField
                  size="small"
                  label="Loading Label"
                  value={loadingLabel}
                  onChange={(e) => setLoadingLabel(e.target.value)}
                  sx={{ flex: 1 }}
                />
              </Stack>
            </Stack>
          </Box>

          {/* Live Preview Container (Simulating Full Screen with Fixed Aspect Ratio Frame) */}
          <Box
            sx={{
              width: "100%",
              height: { xs: 580, sm: 640, md: 720 },
              borderRadius: "24px",
              bgcolor: isDark
                ? "rgba(10,10,12,0.95)"
                : "rgba(250,250,252,0.95)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              position: "relative",
              overflow: "hidden",
              boxShadow: isDark
                ? "0 24px 70px rgba(0,0,0,0.5)"
                : "0 24px 70px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ambient Lighting Backdrop */}
            <Box
              sx={{
                position: "absolute",
                top: "15%",
                left: "20%",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)"
                  : "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                right: "18%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 70%)"
                  : "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                width: "100%",
                height: "100%",
                "& > div": { minHeight: "100% !important" },
              }}
            >
              <LoadingShowcase
                key={remountKey}
                image={
                  showImage && PRESETS[selectedPreset]?.image
                    ? PRESETS[selectedPreset].image
                    : undefined
                }
                loading={isLoading}
                title={title}
                loadingLabel={loadingLabel}
                signature={showSignature ? undefined : null}
              />
            </Box>
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. Apparel Drop Loading
      ============================================================ */}
      <DemoBlock
        id="apparel-drop"
        title="1. Apparel & Drop Loading"
        description="Floating product animation with dual cosmic orbit paths. Used when pre-rendering drop catalogs, lookbooks, and cart checkouts."
        code={`<LoadingShowcase
  image={{
    src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    alt: "Jivico Heavyweight Tee",
    width: 540,
    height: 540,
  }}
  loading={true}
  title="Preparing your exclusive drop experience..."
  loadingLabel="CURATING ARCHIVAL PIECES"
/>`}
      >
        <Box
          sx={{
            width: "100%",
            height: 580,
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            position: "relative",
            overflow: "hidden",
            "& > div": { minHeight: "100% !important" },
          }}
        >
          <LoadingShowcase
            image={{
              src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
              alt: "Jivico Heavyweight Tee",
              width: 540,
              height: 540,
            }}
            loading={true}
            title="Preparing your exclusive drop experience..."
            loadingLabel="CURATING ARCHIVAL PIECES"
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          3. 3D Freestyle Studio & Asset Preloading
      ============================================================ */}
      <DemoBlock
        id="freestyle-builder"
        title="2. 3D Studio & Asset Preloading"
        description="Tailored for heavy WebGL, canvas, and 3D configuration loading screens. The progress automatically paces itself through texture decoding and scene setup."
        code={`<LoadingShowcase
  image={{
    src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    alt: "3D Garment Mesh",
    width: 540,
    height: 540,
  }}
  title="Compiling 3D materials & lighting..."
  loadingLabel="INITIALIZING FREESTYLE ENGINE"
  signature={
    <Chip
      icon={<Orbit size={14} />}
      label="WEBGL 2.0 PROTOCOL"
      size="small"
      variant="outlined"
      sx={{ fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.08em" }}
    />
  }
/>`}
      >
        <Box
          sx={{
            width: "100%",
            height: 580,
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            position: "relative",
            overflow: "hidden",
            "& > div": { minHeight: "100% !important" },
          }}
        >
          <LoadingShowcase
            image={{
              src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
              alt: "3D Garment Mesh",
              width: 540,
              height: 540,
            }}
            title="Compiling 3D materials & lighting..."
            loadingLabel="INITIALIZING FREESTYLE ENGINE"
            signature={
              <Chip
                icon={<Orbit size={14} />}
                label="WEBGL 2.0 PROTOCOL"
                size="small"
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                }}
              />
            }
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          4. Controlled Loading (Start / Complete / Reset)
      ============================================================ */}
      <DemoBlock
        id="controlled-loading"
        title="3. Controlled Loading (Start / Complete / Reset)"
        description="When loading={false}, the component smoothly accelerates the remaining progress to 100% instead of jarringly jumping, ensuring an Apple-grade transition."
        code={`const [loading, setLoading] = useState(true);

// When data finishes loading:
setLoading(false); // smoothly rushes to 100% and finishes

<LoadingShowcase
  loading={loading}
  title={loading ? "Fetching inventory data..." : "Ready to enter Studio."}
  loadingLabel={loading ? "SYNCING REAL-TIME STOCK" : "LOAD COMPLETE"}
/>`}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Button
              variant={controlledLoading ? "contained" : "outlined"}
              size="small"
              startIcon={<Play size={14} />}
              onClick={() => setControlledLoading(true)}
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Set loading=true
            </Button>
            <Button
              variant={!controlledLoading ? "contained" : "outlined"}
              color="success"
              size="small"
              startIcon={<CheckCircle2 size={14} />}
              onClick={() => setControlledLoading(false)}
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Set loading=false (Complete)
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={<RotateCcw size={14} />}
              onClick={() => {
                setControlledLoading(true);
                setControlledKey((k) => k + 1);
              }}
              sx={{ borderRadius: "9999px", textTransform: "none" }}
            >
              Reset
            </Button>
          </Stack>

          <Box
            sx={{
              width: "100%",
              height: 480,
              borderRadius: "24px",
              bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              position: "relative",
              overflow: "hidden",
              "& > div": { minHeight: "100% !important" },
            }}
          >
            <LoadingShowcase
              key={controlledKey}
              image={{
                src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
                alt: "Originals Tee",
                width: 540,
                height: 540,
              }}
              loading={controlledLoading}
              title={
                controlledLoading
                  ? "Fetching inventory data..."
                  : "Ready to enter Studio."
              }
              loadingLabel={
                controlledLoading ? "SYNCING REAL-TIME STOCK" : "LOAD COMPLETE"
              }
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          5. Custom Image Renderer
      ============================================================ */}
      <DemoBlock
        id="custom-renderer"
        title="4. Custom Image Renderer (Next.js Image / Custom Picture)"
        description="Use the renderImage prop to delegate image rendering to Next.js Image, CDN responsive picture tags, or custom animated visual elements."
        code={`<LoadingShowcase
  image={{
    src: "/images/product.png",
    alt: "Studio Drop",
    width: 700,
    height: 700,
  }}
  renderImage={(image) => (
    <Image
      src={image.src}
      alt={image.alt ?? ''}
      width={image.width ?? 700}
      height={image.height ?? 700}
      priority
      style={{ objectFit: 'contain' }}
    />
  )}
/>`}
      >
        <Box
          sx={{
            width: "100%",
            height: 480,
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            position: "relative",
            overflow: "hidden",
            "& > div": { minHeight: "100% !important" },
          }}
        >
          <LoadingShowcase
            image={{
              src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
              alt: "Custom Render Image",
              width: 540,
              height: 540,
            }}
            renderImage={(img) => (
              <Box
                component="img"
                src={img.src}
                alt={img.alt ?? ""}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: isDark
                    ? "drop-shadow(0 20px 30px rgba(0,0,0,0.7))"
                    : "drop-shadow(0 20px 30px rgba(0,0,0,0.15))",
                }}
              />
            )}
            title="Custom Image Renderer Active"
            loadingLabel="RENDERING OPTIMIZED HIGH-RES ASSET"
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          6. Props Reference
      ============================================================ */}
      <DemoBlock
        id="props-reference"
        title="5. Props Reference"
        description="Comprehensive type definitions and documentation for LoadingShowcaseProps."
      >
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{
            borderRadius: "16px",
            bgcolor: "transparent",
            borderColor: "divider",
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                }}
              >
                <TableCell sx={{ fontWeight: 700 }}>Prop</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Default</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  prop: "image",
                  type: "LoadingShowcaseImage",
                  default: "undefined",
                  desc: "Optional product or visual illustration ({ src, alt, width, height }) floating inside the orbital rings.",
                },
                {
                  prop: "renderImage",
                  type: "(image: LoadingShowcaseImage) => ReactNode",
                  default: "undefined",
                  desc: "Custom image renderer for Next.js Image or custom picture tags.",
                },
                {
                  prop: "loading",
                  type: "boolean",
                  default: "true",
                  desc: "When true, progress auto-advances with deceleration. When false, progress smoothly completes to 100%.",
                },
                {
                  prop: "title",
                  type: "ReactNode",
                  default: "We’re getting things ready...",
                  desc: "Main primary heading message shown below the visual orbits.",
                },
                {
                  prop: "loadingLabel",
                  type: "ReactNode",
                  default: "'LOADING YOUR EXPERIENCE'",
                  desc: "Uppercase letterspaced status text displayed next to the animated percentage.",
                },
                {
                  prop: "signature",
                  type: "ReactNode",
                  default: "Jivico Studio cursive + caption",
                  desc: "Custom footer signature branding. Pass null to hide.",
                },
                {
                  prop: "className",
                  type: "string",
                  default: "undefined",
                  desc: "Optional class name for custom CSS overrides.",
                },
              ].map((row) => (
                <TableRow key={row.prop}>
                  <TableCell
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    {row.prop}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: "text.secondary",
                    }}
                  >
                    {row.default}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "0.85rem", color: "text.secondary" }}
                  >
                    {row.desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DemoBlock>
    </ComponentPage>
  );
};

export default LoadingShowcasePage;
