import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Switch,
  Tooltip,
} from "@mui/material";
import {
  Sparkles,
  Search,
  Scan,
  Zap,
  Plus,
  ChevronDown,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Bell,
  Heart,
  Compass,
  ShoppingBag,
  Disc,
  Radio as RadioIcon,
  Layers,
  ArrowUpRight,
  Sun,
  Moon,
  SlidersHorizontal,
  Image as ImageIcon,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useThemeMode } from "../../../src/context/ThemeContext.js";
import {
  DynamicIsland,
  DynamicIslandPill,
  DynamicIslandPlacement,
  DynamicIslandSize,
} from "../../../src/components/navigation/DynamicIsland.js";

// Authentic Cosmos SVG Icons from reference
const CosmosRosetteIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4.2" r="2.2" fill={color} />
    <circle cx="18.8" cy="8.1" r="2.2" fill={color} />
    <circle cx="18.8" cy="15.9" r="2.2" fill={color} />
    <circle cx="12" cy="19.8" r="2.2" fill={color} />
    <circle cx="5.2" cy="15.9" r="2.2" fill={color} />
    <circle cx="5.2" cy="8.1" r="2.2" fill={color} />
  </svg>
);

const CosmosScanIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3H5a2 2 0 0 0-2 2v2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M3 17v2a2 2 0 0 0 2 2h2" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const CosmosGalaxyIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="3.5" r="1.6" fill={color} />
    <circle cx="18" cy="6" r="1.6" fill={color} fillOpacity="0.85" />
    <circle cx="20.5" cy="12" r="1.6" fill={color} fillOpacity="0.70" />
    <circle cx="18" cy="18" r="1.6" fill={color} fillOpacity="0.55" />
    <circle cx="12" cy="20.5" r="1.6" fill={color} fillOpacity="0.40" />
    <circle cx="6" cy="18" r="1.6" fill={color} fillOpacity="0.30" />
    <circle cx="3.5" cy="12" r="1.6" fill={color} fillOpacity="0.20" />
    <circle cx="6" cy="6" r="1.6" fill={color} fillOpacity="0.15" />
  </svg>
);

export const DynamicIslandPage: React.FC = () => {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  // Interactive Live Controls
  const [activePlacement, setActivePlacement] = useState<DynamicIslandPlacement>("none");
  const [activeSize, setActiveSize] = useState<DynamicIslandSize>("md");
  const [liveBlur, setLiveBlur] = useState<number>(32);
  const [activeCanvas, setActiveCanvas] = useState<"runway" | "portrait" | "obsidian">("runway");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"for-you" | "following" | "explore" | "shop">("for-you");
  const [audioVolume, setAudioVolume] = useState<number>(75);

  const canvasBackground = {
    runway: isDark
      ? "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop') center 30% / cover"
      : "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.5) 100%), url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop') center / cover",
    portrait: isDark
      ? "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1800&auto=format&fit=crop') center 40% / cover"
      : "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1800&auto=format&fit=crop') center / cover",
    obsidian: isDark
      ? "radial-gradient(ellipse at 50% -20%, #252836 0%, #0c0d11 100%)"
      : "radial-gradient(ellipse at 50% -20%, #FFFFFF 0%, #E2E8F0 100%)",
  }[activeCanvas];

  return (
    <ComponentPage
      title="Dynamic Island"
      description="Ultra-frosted liquid glass floating pill capsules inspired by Apple and luxury editorial interfaces (Dries Van Noten Cosmos). Features high optical diffusion, meniscus bevel specular reflections, arbitrary children, and edge placement props."
    >
      {/* Live Viewport Floating Island (when activePlacement !== 'none') */}
      {activePlacement !== "none" && (
        <DynamicIsland
          placement={activePlacement}
          size={activeSize}
          blur={liveBlur}
          interactive
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#10B981",
              }}
            />
            <Typography sx={{ fontSize: "0.82rem", fontWeight: 700 }}>
              Pinned {activePlacement} ({liveBlur}px frost)
            </Typography>
          </Box>
          <DynamicIslandPill
            onClick={() => setActivePlacement("none")}
            sx={{ fontSize: "0.75rem", py: 0.3, px: 1 }}
          >
            Dismiss
          </DynamicIslandPill>
        </DynamicIsland>
      )}

      {/* 1. Dries Van Noten Cosmos Replica */}
      <DemoBlock
        title="Dries Van Noten 'Cosmos' Floating Bar"
        description="High-fidelity recreation of the 3-island liquid glass navigation directly from the reference image. Use the controls below to toggle backdrops, adjust the optical frost blur in real-time, or flip between Light and Dark themes."
      >
        {/* Controls Toolbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 2.5,
            p: 1.5,
            borderRadius: 3,
            bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
            border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"}`,
          }}
        >
          {/* Canvas Selector */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
            <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, mr: 0.5 }}>
              Backdrop:
            </Typography>
            <DynamicIslandPill
              active={activeCanvas === "runway"}
              onClick={() => setActiveCanvas("runway")}
              startIcon={<ImageIcon size={13} />}
            >
              Runway Editorial
            </DynamicIslandPill>
            <DynamicIslandPill
              active={activeCanvas === "portrait"}
              onClick={() => setActiveCanvas("portrait")}
            >
              Sculpture Portrait
            </DynamicIslandPill>
            <DynamicIslandPill
              active={activeCanvas === "obsidian"}
              onClick={() => setActiveCanvas("obsidian")}
            >
              Minimal Obsidian
            </DynamicIslandPill>
          </Box>

          {/* Quick Theme Switcher & Blur Slider */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 160 }}>
              <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                Frost: {liveBlur}px
              </Typography>
              <Slider
                size="small"
                min={16}
                max={48}
                value={liveBlur}
                onChange={(_, v) => setLiveBlur(v as number)}
                sx={{ width: 100 }}
              />
            </Box>

            <DynamicIslandPill
              onClick={toggleTheme}
              startIcon={isDark ? <Sun size={14} color="#FBBF24" /> : <Moon size={14} color="#8B5CF6" />}
            >
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </DynamicIslandPill>
          </Box>
        </Box>

        {/* Hero Visual Canvas */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: 380,
            borderRadius: 6,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pt: { xs: 1.25, md: 1.5 },
            px: { xs: 2, md: 2.5 },
            pb: { xs: 2.5, md: 3.5 },
            background: canvasBackground,
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: isDark
              ? "0 24px 60px rgba(0, 0, 0, 0.7)"
              : "0 24px 60px rgba(15, 23, 42, 0.12)",
          }}
        >
          {/* Top Bar: 3 Island Capsules side-by-side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1.5,
              width: "100%",
            }}
          >
            {/* Left Island: Navigation Links */}
            <DynamicIsland interactive size="md" blur={liveBlur}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 0.5,
                  color: "inherit",
                }}
              >
                <CosmosRosetteIcon size={18} />
              </Box>
              {(["For You", "Following", "Explore", "Shop"] as const).map((tab) => {
                const tabKey = tab.toLowerCase().replace(" ", "-") as typeof activeTab;
                const active = activeTab === tabKey;
                return (
                  <Typography
                    key={tab}
                    onClick={() => setActiveTab(tabKey)}
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: active ? 600 : 500,
                      color: active
                        ? isDark
                          ? "#FFFFFF"
                          : "#111827"
                        : isDark
                        ? "rgba(255, 255, 255, 0.65)"
                        : "rgba(17, 24, 39, 0.60)",
                      cursor: "pointer",
                      px: 0.75,
                      py: 0.25,
                      borderRadius: 9999,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: isDark ? "#FFFFFF" : "#000000",
                        bgcolor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    {tab}
                  </Typography>
                );
              })}
            </DynamicIsland>

            {/* Middle Island: Nested Brand Sub-Pill & Search */}
            <DynamicIsland interactive size="md" blur={liveBlur} sx={{ flexGrow: { xs: 1, md: 0 }, minWidth: { md: 400 } }}>
              {/* Nested brand capsule pill */}
              <DynamicIslandPill
                startIcon={
                  <Avatar
                    sx={{
                      width: 20,
                      height: 20,
                      fontSize: "0.55rem",
                      bgcolor: "#FFFFFF",
                      color: "#111827",
                      fontWeight: 800,
                      letterSpacing: -0.5,
                    }}
                  >
                    D
                  </Avatar>
                }
              >
                Dries Van Noten
              </DynamicIslandPill>

              {/* Search text input */}
              <InputBase
                placeholder="Search Dries Van Noten..."
                sx={{
                  flex: 1,
                  fontSize: "0.875rem",
                  color: "inherit",
                  "& input": {
                    py: 0,
                    "&::placeholder": {
                      color: isDark ? "rgba(255, 255, 255, 0.55)" : "rgba(17, 24, 39, 0.50)",
                      opacity: 1,
                    },
                  },
                }}
              />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, opacity: 0.85 }}>
                <Tooltip title="Scan Lookbook QR">
                  <IconButton size="small" sx={{ p: 0.5, color: "inherit" }}>
                    <CosmosScanIcon size={16} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Visual Search">
                  <IconButton size="small" sx={{ p: 0.5, color: "inherit" }}>
                    <CosmosGalaxyIcon size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
            </DynamicIsland>

            {/* Right Island: Action Pill & Profile */}
            <DynamicIsland interactive size="md" blur={liveBlur}>
              <DynamicIslandPill startIcon={<Plus size={15} strokeWidth={2.5} />}>
                Create
              </DynamicIslandPill>
              <Tooltip title="Quick Actions">
                <IconButton size="small" sx={{ p: 0.6, color: "inherit" }}>
                  <Zap size={15} fill="currentColor" strokeWidth={0} />
                </IconButton>
              </Tooltip>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                  cursor: "pointer",
                  p: 0.25,
                  borderRadius: 9999,
                  "&:hover": { bgcolor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)" },
                }}
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                  sx={{ width: 28, height: 28, border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <ChevronDown size={14} style={{ opacity: 0.7 }} />
              </Box>
            </DynamicIsland>
          </Box>

          {/* Bottom editorial badge */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mt: 12 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "1.4rem", md: "2.1rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  textShadow: "0 2px 14px rgba(0,0,0,0.7)",
                }}
              >
                Autumn / Winter Collection
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.88rem",
                  color: "rgba(255, 255, 255, 0.85)",
                  textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                }}
              >
                Ultra-frosted liquid glass with optical diffusion over saturated background imagery.
              </Typography>
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 2. Interactive Viewport Placement Controller */}
      <DemoBlock
        title="Viewport Placement Controller"
        description="Select any edge placement to pin a live floating island to your screen. The component takes care of fixed coordinates, auto-centering, and z-index."
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
              gap: 1.5,
            }}
          >
            {[
              { label: "None (Inline Flow)", value: "none" },
              { label: "Top Left", value: "top-left" },
              { label: "Top Center", value: "top-center" },
              { label: "Top Right", value: "top-right" },
              { label: "Bottom Left", value: "bottom-left" },
              { label: "Bottom Center", value: "bottom-center" },
              { label: "Bottom Right", value: "bottom-right" },
            ].map((p) => {
              const active = activePlacement === p.value;
              return (
                <Box
                  key={p.value}
                  onClick={() => setActivePlacement(p.value as DynamicIslandPlacement)}
                  sx={{
                    p: 1.75,
                    borderRadius: 3,
                    border: `1.5px solid ${
                      active
                        ? isDark
                          ? "#F472B6"
                          : "#DB2777"
                        : isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.08)"
                    }`,
                    bgcolor: active
                      ? isDark
                        ? "rgba(244, 114, 182, 0.12)"
                        : "rgba(219, 39, 119, 0.08)"
                      : isDark
                      ? "rgba(255, 255, 255, 0.03)"
                      : "rgba(0, 0, 0, 0.02)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: active ? undefined : isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "0.84rem", fontWeight: active ? 700 : 500 }}>
                    {p.label}
                  </Typography>
                  {active && (
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: isDark ? "#F472B6" : "#DB2777",
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          {/* Sizing Controller */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
              Island Scale:
            </Typography>
            {(["sm", "md", "lg"] as const).map((sz) => (
              <DynamicIslandPill
                key={sz}
                active={activeSize === sz}
                onClick={() => setActiveSize(sz)}
              >
                size="{sz}"
              </DynamicIslandPill>
            ))}
          </Box>

          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.03)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"}`,
              fontFamily: "monospace",
              fontSize: "0.82rem",
            }}
          >
            {`<DynamicIsland placement="${activePlacement}" size="${activeSize}">\n  {children}\n</DynamicIsland>`}
          </Box>
        </Box>
      </DemoBlock>

      {/* 3. Arbitrary Children Showcase */}
      <DemoBlock
        title="Accepts Any Arbitrary Children"
        description="Because DynamicIsland is an unopinionated container, you can place music player controls, notifications, quick sliders, or segmented action docks inside."
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center", py: 2 }}>
          {/* Example A: Apple Music / Spotify Glass Island */}
          <DynamicIsland interactive size="lg" sx={{ maxWidth: 520, width: "100%", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                variant="rounded"
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=120&auto=format&fit=crop"
                sx={{ width: 38, height: 38, borderRadius: 2.5 }}
              />
              <Box>
                <Typography sx={{ fontSize: "0.84rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Midnight City
                </Typography>
                <Typography sx={{ fontSize: "0.72rem", opacity: 0.65 }}>
                  M83 • Hurry Up, We're Dreaming
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                size="small"
                onClick={() => setIsPlaying(!isPlaying)}
                sx={{
                  p: 0.8,
                  bgcolor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)",
                  color: "inherit",
                  "&:hover": {
                    bgcolor: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
              </IconButton>
              <IconButton size="small" sx={{ p: 0.8, color: "inherit" }}>
                <SkipForward size={16} />
              </IconButton>
              <Box sx={{ width: 70, display: { xs: "none", sm: "block" } }}>
                <Slider
                  size="small"
                  value={audioVolume}
                  onChange={(_, val) => setAudioVolume(val as number)}
                  sx={{ py: 1 }}
                />
              </Box>
            </Box>
          </DynamicIsland>

          {/* Example B: Notification Pill with Status Pulse */}
          <DynamicIsland size="md" interactive sx={{ gap: 2 }}>
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.12)",
                color: "#3B82F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bell size={14} />
            </Box>
            <Typography sx={{ fontSize: "0.82rem", fontWeight: 600 }}>
              Deployment #1042 successfully published
            </Typography>
            <DynamicIslandPill
              sx={{ fontSize: "0.74rem", py: 0.3, px: 1.25 }}
              endIcon={<ArrowUpRight size={13} />}
            >
              View Logs
            </DynamicIslandPill>
          </DynamicIsland>

          {/* Example C: Quick Actions & Toggle Dock */}
          <DynamicIsland size="sm" interactive sx={{ gap: 1.5 }}>
            <DynamicIslandPill active startIcon={<Disc size={13} />}>
              Live Stream
            </DynamicIslandPill>
            <DynamicIslandPill startIcon={<Heart size={13} />}>
              2.4k Likes
            </DynamicIslandPill>
            <DynamicIslandPill startIcon={<ShoppingBag size={13} />}>
              Store
            </DynamicIslandPill>
          </DynamicIsland>
        </Box>
      </DemoBlock>

      {/* 4. Light & Dark Mode Proof Matrix */}
      <DemoBlock
        title="Light & Dark Adaptation Matrix"
        description="Direct side-by-side comparison of DynamicIsland rendered in forced Light and Dark modes over varying canvas surfaces."
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2.5,
          }}
        >
          {/* Forced Light Canvas */}
          <Box
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: "#F8FAFC",
              backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              border: "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>
              Forced Light Mode Surface
            </Typography>
            <DynamicIsland isDark={false} size="md">
              <DynamicIslandPill isDark={false} startIcon={<Sparkles size={14} />}>
                Dries Van Noten
              </DynamicIslandPill>
              <Typography sx={{ fontSize: "0.82rem", color: "rgba(17,24,39,0.7)" }}>
                Search lookbook...
              </Typography>
              <DynamicIslandPill isDark={false} active>
                Explore
              </DynamicIslandPill>
            </DynamicIsland>
          </Box>

          {/* Forced Dark Canvas */}
          <Box
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: "#0F1117",
              backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" }}>
              Forced Dark Mode Surface
            </Typography>
            <DynamicIsland isDark={true} size="md">
              <DynamicIslandPill isDark={true} startIcon={<Sparkles size={14} />}>
                Dries Van Noten
              </DynamicIslandPill>
              <Typography sx={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
                Search lookbook...
              </Typography>
              <DynamicIslandPill isDark={true} active>
                Explore
              </DynamicIslandPill>
            </DynamicIsland>
          </Box>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
