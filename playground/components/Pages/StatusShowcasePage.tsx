"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Search,
  RotateCw,
  Sparkles,
  ShoppingBag,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Send,
} from "lucide-react";

import "../../../src/theme/augmentations.d.ts";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { StatusShowcase } from "../../../src/components/statusShowcase/StatusShowcase.js";
import type {
  StatusShowcaseProps,
  StatusShowcaseImage,
} from "../../../src/components/statusShowcase/StatusShowcase.types.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

// Preset configurations for the interactive playground
interface PresetConfig {
  label: string;
  code: string;
  title: string;
  description: string;
  image?: StatusShowcaseImage;
  actionLabel?: string;
  secondaryActionLabel?: string;
  surface: "standard" | "glass";
  size: "small" | "medium" | "large";
}

const PRESETS: Record<string, PresetConfig> = {
  "404": {
    label: "404 Not Found",
    code: "404 ERROR",
    title: "Lost in the Multiverse",
    description:
      "The page or archival drop you are searching for does not exist, has been archived, or was moved to another universe coordinate.",
    image: {
      src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
      alt: "404 Not Found Art",
      width: 240,
    },
    actionLabel: "Back to Home",
    secondaryActionLabel: "Search Studio",
    surface: "glass",
    size: "medium",
  },
  comingSoon: {
    label: "Drop Release",
    code: "DROP 004 · COMING SOON",
    title: "Heavyweight Winter Capsule",
    description:
      "Crafted from custom 480 GSM luxury fleece and Japanese selvedge denim. Priority allocation opens in 48 hours for verified studio members.",
    image: {
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      alt: "Drop Preview",
      width: 260,
    },
    actionLabel: "Join Early Access",
    secondaryActionLabel: "View Lookbook",
    surface: "glass",
    size: "medium",
  },
  serverError: {
    label: "500 Server Error",
    code: "500 INTERNAL ERROR",
    title: "Signal Disrupted",
    description:
      "Our edge runtime encountered an unexpected response while rendering this view. Our engineering team has been notified.",
    image: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      alt: "500 Error Signal",
      width: 220,
    },
    actionLabel: "Retry Connection",
    secondaryActionLabel: "System Status",
    surface: "standard",
    size: "medium",
  },
  emptyBag: {
    label: "Empty Bag",
    code: "ARCHIVE BAG (0)",
    title: "Your Bag is Currently Empty",
    description:
      "Explore our latest studio originals, oversized silhouettes, and limited drops to start curating your wardrobe.",
    actionLabel: "Discover Originals",
    secondaryActionLabel: "Browse Bestsellers",
    surface: "standard",
    size: "medium",
  },
  maintenance: {
    label: "Maintenance",
    code: "SYSTEM UPGRADE",
    title: "Multiverse Upgrading",
    description:
      "We are currently deploying protocol updates to the Jivico studio design engine. All services will resume at 04:00 UTC.",
    actionLabel: "Check Status",
    secondaryActionLabel: "Follow Updates",
    surface: "glass",
    size: "medium",
  },
};

export const StatusShowcasePage: React.FC = () => {
  const { resolvedMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // Playground state
  const [selectedPreset, setSelectedPreset] = useState<string>("404");
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [surface, setSurface] = useState<"standard" | "glass">("glass");
  const [code, setCode] = useState("404 ERROR");
  const [title, setTitle] = useState("Lost in the Multiverse");
  const [description, setDescription] = useState(
    "The page or archival drop you are searching for does not exist, has been archived, or was moved to another universe coordinate.",
  );
  const [showImage, setShowImage] = useState(true);
  const [showAction, setShowAction] = useState(true);
  const [showSecondaryAction, setShowSecondaryAction] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [showSignature, setShowSignature] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRetrying, setIsRetrying] = useState(false);

  const applyPreset = (presetKey: string) => {
    setSelectedPreset(presetKey);
    const p = PRESETS[presetKey];
    if (!p) return;
    setCode(p.code);
    setTitle(p.title);
    setDescription(p.description);
    setSurface(p.surface);
    setSize(p.size);
    setShowImage(Boolean(p.image));
    setShowAction(Boolean(p.actionLabel));
    setShowSecondaryAction(Boolean(p.secondaryActionLabel));
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

  // Generate dynamic code string for the interactive demo block
  const generatedCode = `<StatusShowcase
${
  showImage
    ? `  image={{
    src: "${PRESETS[selectedPreset]?.image?.src || "https://images.unsplash.com/..."}",
    alt: "${title}",
    width: 240,
  }}\n`
    : ""
}${code ? `  code="${code}"\n` : ""}  title="${title}"
  description="${description}"
  size="${size}"
  surface="${surface}"
${
  showAction
    ? `  actionLabel="${PRESETS[selectedPreset]?.actionLabel || "Primary Action"}"
  onAction={() => handleAction()}\n`
    : ""
}${
    showSecondaryAction
      ? `  secondaryActionLabel="${PRESETS[selectedPreset]?.secondaryActionLabel || "Secondary Action"}"
  onSecondaryAction={() => handleSecondaryAction()}\n`
      : ""
  }${
    showChildren
      ? `  children={
    <Box sx={{ maxWidth: 360, mx: "auto" }}>
      <TextField size="small" placeholder="Search..." fullWidth />
    </Box>
  }\n`
      : ""
  }${
    showSignature
      ? `  signature={
    <Typography variant="caption" sx={{ color: "text.disabled", letterSpacing: "0.1em" }}>
      JIVICO STUDIO ARCHIVE
    </Typography>
  }\n`
      : ""
  }/>`;

  return (
    <ComponentPage
      title="StatusShowcase"
      description="A clean, state-of-the-art status and error presentation primitive. Designed for 404 Not Found, 500 Server Error, Coming Soon drops, maintenance banners, and empty archive states. Features built-in responsive sizing, liquid glass frosted backdrops, and flexible action button slots."
      category="Feedback & Status"
      badges={[
        "Status",
        "404 Page",
        "Coming Soon",
        "Glass Surface",
        "Empty State",
      ]}
    >
      {/* ============================================================
          1. Interactive Playground
      ============================================================ */}
      <DemoBlock
        id="interactive-status-showcase"
        title="Interactive Playground"
        description="Switch between real-world presets (404, Drop Announcement, Server Error, Empty Bag) and tweak live controls for size, surface mode, imagery, actions, and custom child slots."
        code={generatedCode}
      >
        <Stack spacing={3}>
          {/* Controls Panel */}
          <Box sx={controlsBox}>
            <Stack spacing={2.5}>
              {/* Presets Row */}
              <Box>
                <Typography sx={labelSx} color="text.secondary">
                  Choose Scenario Preset
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

              {/* Size & Surface Controls */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <Box>
                  <Typography sx={labelSx} color="text.secondary">
                    Size
                  </Typography>
                  <RadioGroup
                    row
                    value={size}
                    onChange={(e) =>
                      setSize(e.target.value as "small" | "medium" | "large")
                    }
                  >
                    <FormControlLabel
                      value="small"
                      control={<Radio size="small" />}
                      label="Small"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio size="small" />}
                      label="Medium"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio size="small" />}
                      label="Large"
                    />
                  </RadioGroup>
                </Box>

                <Box>
                  <Typography sx={labelSx} color="text.secondary">
                    Visual Surface
                  </Typography>
                  <RadioGroup
                    row
                    value={surface}
                    onChange={(e) =>
                      setSurface(e.target.value as "standard" | "glass")
                    }
                  >
                    <FormControlLabel
                      value="standard"
                      control={<Radio size="small" />}
                      label="Standard"
                    />
                    <FormControlLabel
                      value="glass"
                      control={<Radio size="small" />}
                      label="Glass Surface"
                    />
                  </RadioGroup>
                </Box>
              </Stack>

              {/* Toggles Row */}
              <Box>
                <Typography sx={labelSx} color="text.secondary">
                  Slots & Toggles
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
                    label={<Typography variant="body2">Image</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={showAction}
                        onChange={(e) => setShowAction(e.target.checked)}
                      />
                    }
                    label={<Typography variant="body2">Primary CTA</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={showSecondaryAction}
                        onChange={(e) =>
                          setShowSecondaryAction(e.target.checked)
                        }
                      />
                    }
                    label={
                      <Typography variant="body2">Secondary CTA</Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={showChildren}
                        onChange={(e) => setShowChildren(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">Children Slot</Typography>
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
                      <Typography variant="body2">Signature Slot</Typography>
                    }
                  />
                </Stack>
              </Box>

              {/* Text Fields */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  size="small"
                  label="Code / Eyebrow"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  sx={{ flex: 1 }}
                />
                <TextField
                  size="small"
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ flex: 2 }}
                />
              </Stack>
              <TextField
                size="small"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={2}
                fullWidth
              />
            </Stack>
          </Box>

          {/* Live Preview Container */}
          <Box
            sx={{
              p: { xs: 2, sm: 4, md: 6 },
              borderRadius: "24px",
              bgcolor: isDark ? "rgba(10,10,12,0.6)" : "rgba(245,245,247,0.7)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              position: "relative",
              overflow: "hidden",
              minHeight: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ambient Background Blur for Glass showcasing */}
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "25%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(0,0,0,0) 70%)"
                  : "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                right: "20%",
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0) 70%)"
                  : "radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <StatusShowcase
              image={
                showImage && PRESETS[selectedPreset]?.image
                  ? {
                      ...PRESETS[selectedPreset].image!,
                      alt: title,
                    }
                  : undefined
              }
              code={code}
              title={title}
              description={description}
              size={size}
              surface={surface}
              actionLabel={
                showAction
                  ? PRESETS[selectedPreset]?.actionLabel || "Action"
                  : undefined
              }
              onAction={() =>
                alert(
                  `Triggered primary action: ${PRESETS[selectedPreset]?.actionLabel}`,
                )
              }
              secondaryActionLabel={
                showSecondaryAction
                  ? PRESETS[selectedPreset]?.secondaryActionLabel ||
                    "Secondary Action"
                  : undefined
              }
              onSecondaryAction={() =>
                alert(
                  `Triggered secondary action: ${PRESETS[selectedPreset]?.secondaryActionLabel}`,
                )
              }
              signature={
                showSignature ? (
                  <Chip
                    label="JIVICO MULTIVERSE PROTOCOL"
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      borderColor: "divider",
                    }}
                  />
                ) : undefined
              }
            >
              {showChildren && (
                <Box sx={{ width: "100%", maxWidth: 360, mx: "auto" }}>
                  <TextField
                    size="small"
                    placeholder="Search drops, items, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    fullWidth
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search size={16} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "9999px",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(255,255,255,0.8)",
                      },
                    }}
                  />
                </Box>
              )}
            </StatusShowcase>
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          2. 404 Page Not Found Demo
      ============================================================ */}
      <DemoBlock
        id="404-not-found"
        title="1. 404 Page Not Found"
        description="Standard 404 status layout for missing URLs, expired campaign links, and archived collections. Combines a distinct status code, title, and intuitive navigation back to safe routes."
        code={`<StatusShowcase
  image={{
    src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
    alt: "404 Lost",
    width: 240,
  }}
  code="404 ERROR"
  title="Lost in the Multiverse"
  description="The coordinate or collection you are looking for does not exist, has expired, or was relocated."
  actionLabel="Return to Home"
  onAction={() => router.push("/")}
  secondaryActionLabel="Explore Originals"
  onSecondaryAction={() => router.push("/originals")}
  surface="glass"
/>`}
      >
        <Box
          sx={{
            py: 6,
            px: { xs: 2, sm: 4 },
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          }}
        >
          <StatusShowcase
            image={{
              src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
              alt: "404 Lost",
              width: 220,
            }}
            code="404 ERROR"
            title="Lost in the Multiverse"
            description="The coordinate or collection you are looking for does not exist, has expired, or was relocated."
            actionLabel="Return to Home"
            onAction={() => alert("Navigating to Home...")}
            secondaryActionLabel="Explore Originals"
            onSecondaryAction={() => alert("Navigating to Originals...")}
            surface="glass"
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          3. Coming Soon & Drops
      ============================================================ */}
      <DemoBlock
        id="coming-soon"
        title="2. Coming Soon & Drops"
        description="Used for upcoming apparel drops, product teasers, and pre-release access pages. The children slot easily accepts email subscription or waitlist forms."
        code={`<StatusShowcase
  code="DROP 004 · LIMITED RUN"
  title="The Obsidian Fleece Capsule"
  description="480 GSM Japanese heavyweight cotton, custom tonal hardware, and numbered certificates. Drops in 3 days."
  actionLabel="Join Priority Waitlist"
  onAction={() => handleJoinWaitlist()}
  secondaryActionLabel="View Lookbook"
  onSecondaryAction={() => handleViewLookbook()}
  surface="glass"
  size="medium"
  signature={
    <Chip label="ONLY 500 PIECES WORLDWIDE" size="small" />
  }
>
  <Stack direction="row" spacing={1} sx={{ maxWidth: 380, mx: "auto" }}>
    <TextField size="small" placeholder="Enter your email" fullWidth />
    <Button variant="contained">Notify</Button>
  </Stack>
</StatusShowcase>`}
      >
        <Box
          sx={{
            py: 6,
            px: { xs: 2, sm: 4 },
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          }}
        >
          <StatusShowcase
            code="DROP 004 · LIMITED RUN"
            title="The Obsidian Fleece Capsule"
            description="480 GSM Japanese heavyweight cotton, custom tonal hardware, and numbered certificates. Drops in 3 days."
            actionLabel="Join Priority Waitlist"
            onAction={() => alert("Waitlist joined!")}
            secondaryActionLabel="View Lookbook"
            onSecondaryAction={() => alert("Opening lookbook...")}
            surface="glass"
            size="medium"
            signature={
              <Chip
                icon={<Sparkles size={14} />}
                label="ONLY 500 PIECES WORLDWIDE"
                size="small"
                color="primary"
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                }}
              />
            }
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{ maxWidth: 400, mx: "auto", width: "100%" }}
            >
              <TextField
                size="small"
                placeholder="Enter email for drop alert..."
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Send size={15} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9999px",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  px: 3,
                  whiteSpace: "nowrap",
                }}
                onClick={() => alert("Registered!")}
              >
                Notify Me
              </Button>
            </Stack>
          </StatusShowcase>
        </Box>
      </DemoBlock>

      {/* ============================================================
          4. 500 System & Network Error
      ============================================================ */}
      <DemoBlock
        id="server-error"
        title="3. 500 System Error"
        description="Clear communication when an unexpected server error occurs or when an API request fails, offering users a quick retry action and system status link."
        code={`<StatusShowcase
  code="500 SYSTEM ERROR"
  title="Multiverse Sync Interrupted"
  description="We encountered an issue retrieving real-time stock levels. Please retry or check our operational status."
  actionLabel={isRetrying ? "Retrying..." : "Retry Connection"}
  onAction={() => handleRetry()}
  secondaryActionLabel="System Status"
  onSecondaryAction={() => window.open("/status", "_blank")}
  surface="standard"
/>`}
      >
        <Box
          sx={{
            py: 6,
            px: { xs: 2, sm: 4 },
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          }}
        >
          <StatusShowcase
            code={
              <Stack
                direction="row"
                spacing={0.75}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AlertTriangle size={14} color="#EF4444" />
                <Typography
                  component="span"
                  sx={{
                    color: "#EF4444",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                  }}
                >
                  500 SYSTEM ERROR
                </Typography>
              </Stack>
            }
            title="Multiverse Sync Interrupted"
            description="We encountered an issue retrieving real-time stock levels from our cluster. Please retry or check our operational status."
            actionLabel={
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <RotateCw
                  size={15}
                  className={isRetrying ? "spin-animation" : ""}
                />
                <span>{isRetrying ? "Connecting..." : "Retry Connection"}</span>
              </Stack>
            }
            onAction={() => {
              setIsRetrying(true);
              setTimeout(() => setIsRetrying(false), 1200);
            }}
            secondaryActionLabel="System Status"
            onSecondaryAction={() => alert("All other systems operational.")}
            surface="standard"
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          5. Empty State (Archive / Cart)
      ============================================================ */}
      <DemoBlock
        id="empty-state"
        title="4. Empty Archive / Bag"
        description="Clean presentation for empty collections, empty shopping bags, zero search results, and fresh accounts with no order history."
        code={`<StatusShowcase
  code="BAG (0)"
  title="Your Collection Bag is Empty"
  description="Explore our latest studio originals, oversized silhouettes, and limited drops to start curating your wardrobe."
  actionLabel="Shop New Drops"
  onAction={() => router.push("/originals")}
  secondaryActionLabel="View Wishlist"
  onSecondaryAction={() => router.push("/wishlist")}
  surface="standard"
  size="small"
/>`}
      >
        <Box
          sx={{
            py: 6,
            px: { xs: 2, sm: 4 },
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          }}
        >
          <StatusShowcase
            code={
              <Stack
                direction="row"
                spacing={0.75}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShoppingBag size={14} />
                <Typography
                  component="span"
                  sx={{ fontWeight: 700, fontSize: "0.72rem" }}
                >
                  ARCHIVE BAG · 0 ITEMS
                </Typography>
              </Stack>
            }
            title="Your Bag is Empty"
            description="Explore our latest studio originals, oversized silhouettes, and limited drops to start curating your wardrobe."
            actionLabel="Discover Drops"
            onAction={() => alert("Navigating to shop...")}
            secondaryActionLabel="View Saved Items"
            onSecondaryAction={() => alert("Navigating to wishlist...")}
            surface="standard"
            size="small"
          />
        </Box>
      </DemoBlock>

      {/* ============================================================
          6. Glass vs Standard Surface
      ============================================================ */}
      <DemoBlock
        id="glass-surface"
        title="5. Glass vs Standard Surface"
        description="StatusShowcase provides two surface presentations: 'standard' (minimal transparent canvas) and 'glass' (frosted backdrop blur with subtle borders and lighting saturation)."
        code={`// Standard Canvas
<StatusShowcase
  surface="standard"
  code="STATUS"
  title="Standard Surface"
  description="Transparent backdrop suitable for flat or minimalist pages."
/>

// Frosted Glass
<StatusShowcase
  surface="glass"
  code="FROSTED"
  title="Glass Surface"
  description="Backdrop filter blur with delicate border and soft illumination."
/>`}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {/* Standard Canvas */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              borderRadius: "20px",
              bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                ...labelSx,
                color: "text.secondary",
                display: "block",
                mb: 2,
              }}
            >
              Surface: "standard"
            </Typography>
            <StatusShowcase
              code="CANVAS"
              title="Standard Mode"
              description="Transparent backdrop suitable for pages with their own textured background."
              actionLabel="Explore"
              size="small"
              surface="standard"
            />
          </Box>

          {/* Frosted Glass */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              borderRadius: "20px",
              bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                ...labelSx,
                color: "text.secondary",
                display: "block",
                mb: 2,
              }}
            >
              Surface: "glass"
            </Typography>
            <StatusShowcase
              code="LIQUID GLASS"
              title="Glass Surface Mode"
              description="Backdrop filter blur with delicate border, padding, and soft rounded corners."
              actionLabel="Explore"
              size="small"
              surface="glass"
            />
          </Box>
        </Stack>
      </DemoBlock>

      {/* ============================================================
          7. Responsive Size Matrix
      ============================================================ */}
      <DemoBlock
        id="size-matrix"
        title="6. Responsive Size Matrix"
        description="The size prop controls typography hierarchy, image boundaries, button heights, and responsive max-widths across breakpoints."
        code={`<StatusShowcase size="small" title="Small Scale (560px max)" />
<StatusShowcase size="medium" title="Medium Scale (720px max)" />
<StatusShowcase size="large" title="Large Scale (860px max)" />`}
      >
        <Stack spacing={4}>
          {(["small", "medium", "large"] as const).map((s) => (
            <Box
              key={s}
              sx={{
                p: 3,
                borderRadius: "20px",
                bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  ...labelSx,
                  color: "primary.main",
                  display: "block",
                  mb: 2,
                }}
              >
                Size: "{s}"
              </Typography>
              <StatusShowcase
                code={`SIZE: ${s.toUpperCase()}`}
                title={`Scale Variant: ${s.charAt(0).toUpperCase() + s.slice(1)}`}
                description="Demonstrating proportional typography sizing, comfortable reading widths, and balanced layout proportions."
                size={s}
                actionLabel="Confirm"
                secondaryActionLabel="Cancel"
                surface="standard"
              />
            </Box>
          ))}
        </Stack>
      </DemoBlock>

      {/* ============================================================
          8. Props Reference
      ============================================================ */}
      <DemoBlock
        id="props-reference"
        title="7. Props Reference"
        description="Complete type definitions and documentation for StatusShowcaseProps."
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
                  prop: "title",
                  type: "ReactNode",
                  default: "Required",
                  desc: "Main primary heading of the status showcase.",
                },
                {
                  prop: "code",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Status code or eyebrow text (e.g., '404', '500', 'COMING SOON').",
                },
                {
                  prop: "description",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Supporting message explaining the status or next steps.",
                },
                {
                  prop: "image",
                  type: "StatusShowcaseImage",
                  default: "undefined",
                  desc: "Optional visual displayed above the title ({ src, alt, width, height }).",
                },
                {
                  prop: "renderImage",
                  type: "(image: StatusShowcaseImage) => ReactNode",
                  default: "undefined",
                  desc: "Custom image renderer for Next.js Image or custom picture tags.",
                },
                {
                  prop: "actionLabel",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Label for the primary CTA contained button.",
                },
                {
                  prop: "onAction",
                  type: "MouseEventHandler<HTMLButtonElement>",
                  default: "undefined",
                  desc: "Click handler for the primary CTA button.",
                },
                {
                  prop: "secondaryActionLabel",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Label for the secondary CTA outlined button.",
                },
                {
                  prop: "onSecondaryAction",
                  type: "MouseEventHandler<HTMLButtonElement>",
                  default: "undefined",
                  desc: "Click handler for the secondary CTA button.",
                },
                {
                  prop: "children",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Custom content rendered between description and action buttons.",
                },
                {
                  prop: "signature",
                  type: "ReactNode",
                  default: "undefined",
                  desc: "Optional footer signature, badge, or brand logo rendered at the bottom.",
                },
                {
                  prop: "size",
                  type: "'small' | 'medium' | 'large'",
                  default: "'medium'",
                  desc: "Controls font scale, container width, and button heights.",
                },
                {
                  prop: "surface",
                  type: "'standard' | 'glass'",
                  default: "'standard'",
                  desc: "Controls whether the container uses a flat transparent surface or frosted glass.",
                },
                {
                  prop: "sx",
                  type: "Record<string, unknown>",
                  default: "undefined",
                  desc: "Custom MUI sx style overrides.",
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

export default StatusShowcasePage;
