import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Switch,
  FormControlLabel,
  Paper,
  Button,
  Avatar,
  Badge,
  IconButton,
  Stack,
  Chip,
  InputBase,
} from "@mui/material";
import {
  Home,
  Search,
  Compass,
  User,
  Sparkles,
  Bookmark,
  Bell,
  Sliders,
  PlusSquare,
  Film,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Wifi,
  Battery,
  Scan,
  Loader2,
  X,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";
import { useState } from "react";

export const BottomNavigationPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [navValue, setNavValue] = useState(0);
  const [glass, setGlass] = useState<"true" | "false">("true");
  const [activePlacement, setActivePlacement] = useState<any>("inline");
  const [floatingOpen, setFloatingOpen] = useState(false);

  // Instagram Mockup State
  const [instaTab, setInstaTab] = useState(0);
  const [instaGlass, setInstaGlass] = useState<"true" | "false">("true");
  const [instaLabels, setInstaLabels] = useState(false);
  const [instaFloating, setInstaFloating] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(14280);

  // Expandable Search Bar State
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPosition, setSearchPosition] = useState<"top" | "bottom">("top");

  return (
    <ComponentPage
      title="Bottom Navigation & Dynamic Island Dock"
      description="Frosted glass floating action docks and dynamic island navigation bars with Apple liquid glass pill styling, specular glint lighting, flexible screen placement, and tactile spring animations."
      category="Navigation"
      badges={[
        "Dynamic Island Dock",
        "glass prop",
        "Floating Placements",
        "Liquid Pill",
      ]}
    >
      {/* 0. Flagship Showcase: Instagram Mobile Preview */}
      <DemoBlock
        id="instagram-mobile-showcase"
        title="Instagram Mobile Simulation — Floating Glass Dynamic Dock"
        description="Interactive mobile viewport showing how `<BottomNavigation glass={true}>` floats seamlessly above a rich social media feed with backdrop blur, specular glint reflection, and instant tab switching."
        code={`// Instagram Floating Glass Dynamic Dock
<BottomNavigation
  value={activeTab}
  onChange={(e, val) => setActiveTab(val)}
  glass={true}
  showLabels={false}
  sx={{
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 40px)',
    maxWidth: 320,
    boxShadow: '0 20px 48px rgba(0,0,0,0.35)',
  }}
>
  <BottomNavigationAction icon={<Home size={22} />} />
  <BottomNavigationAction icon={<Search size={22} />} />
  <BottomNavigationAction icon={<PlusSquare size={22} />} />
  <BottomNavigationAction icon={<Film size={22} />} />
  <BottomNavigationAction icon={<User size={22} />} />
</BottomNavigation>`}
      >
        {/* Controls Toolbar */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            p: 2,
            borderRadius: "14px",
            bgcolor: isDark
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(0, 0, 0, 0.03)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <FormControlLabel
              control={
                <Switch
                  checked={instaGlass === "true"}
                  onChange={(e) =>
                    setInstaGlass(e.target.checked ? "true" : "false")
                  }
                  color="glass"
                  size="small"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Frosted Glass:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: instaGlass ? "primary.main" : "text.secondary",
                    }}
                  >
                    {instaGlass ? "ON (glass)" : "OFF (solid)"}
                  </Box>
                </Typography>
              }
            />

            <FormControlLabel
              control={
                <Switch
                  checked={instaFloating}
                  onChange={(e) => setInstaFloating(e.target.checked)}
                  color="glass"
                  size="small"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Dock Mode:{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    {instaFloating ? "Floating Island" : "Full Width Pinned"}
                  </Box>
                </Typography>
              }
            />

            <FormControlLabel
              control={
                <Switch
                  checked={instaLabels}
                  onChange={(e) => setInstaLabels(e.target.checked)}
                  color="glass"
                  size="small"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Labels:{" "}
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {instaLabels ? "Visible" : "Icon Only"}
                  </Box>
                </Typography>
              }
            />
          </Stack>

          <Chip
            label="Interactive Demo"
            color="primary"
            size="small"
            variant="outlined"
            sx={{ fontWeight: 700, fontSize: "0.7rem" }}
          />
        </Box>

        {/* Mobile Viewport Wrapper */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Paper
            elevation={24}
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 380 },
              height: 680,
              borderRadius: "44px",
              overflow: "hidden",
              border: `10px solid ${isDark ? "#1C1C1E" : "#000000"}`,
              boxShadow: isDark
                ? "0 32px 80px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.15)"
                : "0 32px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)",
              bgcolor: isDark ? "#000000" : "#FFFFFF",
              color: isDark ? "#FFFFFF" : "#000000",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {/* Mobile Top Status Bar */}
            <Box
              sx={{
                height: 44,
                px: 3,
                pt: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                background: isDark
                  ? "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, fontSize: "0.85rem" }}
              >
                9:41
              </Typography>

              {/* Speaker / Notch Pill */}
              <Box
                sx={{
                  width: 90,
                  height: 22,
                  bgcolor: "#000000",
                  borderRadius: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#10B981",
                  }}
                />
              </Box>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Wifi size={14} />
                <Battery size={16} />
              </Stack>
            </Box>

            {/* Instagram App Header */}
            <Box
              sx={{
                pt: 6,
                pb: 1.5,
                px: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"
                }`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    '"Grand Hotel", "Brush Script MT", cursive, sans-serif',
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  letterSpacing: -0.5,
                  background: isDark
                    ? "linear-gradient(45deg, #FFF 30%, #CCC 90%)"
                    : "linear-gradient(45deg, #111 30%, #444 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Instagram
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ color: "inherit" }}>
                  <Badge color="error" variant="dot">
                    <Heart size={22} />
                  </Badge>
                </IconButton>
                <IconButton size="small" sx={{ color: "inherit" }}>
                  <Badge badgeContent={3} color="error">
                    <MessageCircle size={22} />
                  </Badge>
                </IconButton>
              </Stack>
            </Box>

            {/* Scrollable Feed Content */}
            <Box
              sx={{
                height: "calc(100% - 110px)",
                overflowY: "auto",
                pb: 12,
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              {/* Stories Tray */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  px: 2,
                  py: 1.5,
                  overflowX: "auto",
                  borderBottom: `1px solid ${
                    isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.05)"
                  }`,
                  "::-webkit-scrollbar": { display: "none" },
                }}
              >
                {[
                  {
                    name: "Your story",
                    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
                    active: false,
                  },
                  {
                    name: "@jivico.official",
                    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
                    active: true,
                  },
                  {
                    name: "alex_design",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                    active: true,
                  },
                  {
                    name: "glass_ui",
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                    active: true,
                  },
                  {
                    name: "jivico",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
                    active: true,
                  },
                ].map((story, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      sx={{
                        p: "2px",
                        borderRadius: "50%",
                        background: story.active
                          ? "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                          : "transparent",
                      }}
                    >
                      <Avatar
                        src={story.img}
                        sx={{
                          width: 56,
                          height: 56,
                          border: `2px solid ${isDark ? "#000" : "#FFF"}`,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        maxWidth: 60,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        opacity: 0.8,
                      }}
                    >
                      {story.name}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Feed Post Card */}
              <Box sx={{ mt: 1 }}>
                {/* Post Header */}
                <Box
                  sx={{
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "center" }}
                  >
                    <Avatar
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"
                      sx={{ width: 34, height: 34 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          lineHeight: 1.1,
                        }}
                      >
                        @jivico.official
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "0.68rem", opacity: 0.6 }}
                      >
                        Shibuya Crossing, Tokyo
                      </Typography>
                    </Box>
                  </Stack>

                  <IconButton size="small" sx={{ color: "inherit" }}>
                    <MoreHorizontal size={18} />
                  </IconButton>
                </Box>

                {/* Post Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 280,
                    bgcolor: isDark ? "#18181B" : "#F4F4F5",
                    background:
                      "linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "24px",
                      background: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <Sparkles size={32} style={{ marginBottom: 8 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Jivico Glass UI
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Liquid Glass Floating Dock
                    </Typography>
                  </Box>

                  {/* Active Tab Indicator Badge inside post */}
                  <Chip
                    label={`Active Tab: Index ${instaTab}`}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "rgba(0,0,0,0.6)",
                      color: "#FFF",
                      backdropFilter: "blur(10px)",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                </Box>

                {/* Post Action Buttons */}
                <Box
                  sx={{
                    px: 2,
                    pt: 1.5,
                    pb: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack direction="row" spacing={1.5}>
                    <IconButton
                      size="small"
                      onClick={() => {
                        setIsLiked(!isLiked);
                        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
                      }}
                      sx={{ color: isLiked ? "#EF4444" : "inherit" }}
                    >
                      <Heart size={22} fill={isLiked ? "#EF4444" : "none"} />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "inherit" }}>
                      <MessageCircle size={22} />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "inherit" }}>
                      <Send size={22} />
                    </IconButton>
                  </Stack>

                  <IconButton size="small" sx={{ color: "inherit" }}>
                    <Bookmark size={22} />
                  </IconButton>
                </Box>

                {/* Likes & Caption */}
                <Box sx={{ px: 2, pb: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, fontSize: "0.8rem" }}
                  >
                    {likeCount.toLocaleString()} likes
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.8rem", mt: 0.25 }}
                  >
                    <Box component="span" sx={{ fontWeight: 700, mr: 0.8 }}>
                      @jivico.official
                    </Box>
                    Experience the future of mobile navigation with Jivico Glass
                    UI floating action docks! 🚀✨
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      opacity: 0.7,
                      mt: 0.5,
                      display: "block",
                    }}
                  >
                    View all 142 comments • 2 HOURS AGO
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Instagram Floating Glass Bottom Navigation Dock */}
            <Box
              sx={{
                position: "absolute",
                bottom: instaFloating ? 18 : 0,
                left: instaFloating ? "50%" : 0,
                right: instaFloating ? "auto" : 0,
                transform: instaFloating ? "translateX(-50%)" : "none",
                width: instaFloating ? "calc(100% - 36px)" : "100%",
                maxWidth: instaFloating ? 320 : "100%",
                zIndex: 20,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <BottomNavigation
                value={instaTab}
                onChange={(_, val) => setInstaTab(val)}
                glass={instaGlass}
                showLabels={instaLabels}
                size="small"
                placement="inline"
                sx={{
                  width: "100%",
                  ...(instaFloating
                    ? {
                        borderRadius: 9999,
                        boxShadow: isDark
                          ? "0 20px 48px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)"
                          : "0 16px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)",
                      }
                    : {
                        borderRadius: 0,
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "none",
                      }),
                }}
              >
                <BottomNavigationAction
                  label="Feed"
                  icon={<Home size={22} />}
                />
                <BottomNavigationAction
                  label="Search"
                  icon={<Search size={22} />}
                />
                <BottomNavigationAction
                  label="Post"
                  icon={<PlusSquare size={22} />}
                />
                <BottomNavigationAction
                  label="Reels"
                  icon={<Film size={22} />}
                />
                <BottomNavigationAction
                  label="Profile"
                  icon={<User size={22} />}
                />
              </BottomNavigation>
            </Box>
          </Paper>
        </Box>
      </DemoBlock>

      {/* 0.5 Expandable Floating Glass Search Dock */}
      <DemoBlock
        id="expandable-search-dock"
        title="Expandable Floating Glass Search Bar"
        description="Seamlessly embed custom inputs, brand pills, and action buttons inside `<BottomNavigation glass={true}>`. Clicking or focusing the input smoothly expands the navigation width with fluid spring transitions."
        code={`// Custom Floating Glass Search Navigation Bar with Dynamic Expansion
const [isExpanded, setIsExpanded] = useState(false);
const [query, setQuery] = useState('');

<BottomNavigation
  glass={true}
  placement="top-center"
  sx={{
    width: isExpanded ? { xs: '92%', sm: 540 } : { xs: '88%', sm: 360 },
    height: 64,
    px: 1.5,
    py: 0.75,
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1,
  }}
>
  {/* Brand Capsule Badge */}
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.25,
      px: 1.5,
      py: 0.75,
      borderRadius: 9999,
      bgcolor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      flexShrink: 0,
    }}
  >
    <Avatar
      sx={{
        width: 24,
        height: 24,
        bgcolor: '#FFFFFF',
        color: '#000000',
        fontSize: '0.65rem',
        fontWeight: 800,
        letterSpacing: -0.5,
      }}
    >
      B
    </Avatar>
    <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.85rem' }}>
      Balenciaga
    </Typography>
  </Box>

  {/* Search Field */}
  <InputBase
    placeholder="Search Balenciaga..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onFocus={() => setIsExpanded(true)}
    sx={{
      flex: 1,
      fontSize: '0.875rem',
      color: 'inherit',
      '& input': { px: 1 },
    }}
  />

  {/* Right Icons */}
  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
    <IconButton size="small" sx={{ color: 'inherit', opacity: 0.8 }}>
      <Scan size={18} />
    </IconButton>
    <IconButton size="small" sx={{ color: 'inherit', opacity: 0.8 }}>
      <Loader2 size={18} className="animate-spin" />
    </IconButton>
  </Stack>
</BottomNavigation>`}
      >
        {/* Controls Toolbar */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            p: 2,
            borderRadius: "14px",
            bgcolor: isDark
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(0, 0, 0, 0.03)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isSearchExpanded}
                  onChange={(e) => setIsSearchExpanded(e.target.checked)}
                  color="glass"
                  size="small"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Expand Width:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: isSearchExpanded
                        ? "primary.main"
                        : "text.secondary",
                    }}
                  >
                    {isSearchExpanded
                      ? "Expanded (560px)"
                      : "Collapsed (360px)"}
                  </Box>
                </Typography>
              }
            />

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
                Position:
              </Typography>
              <Button
                size="small"
                variant={searchPosition === "top" ? "contained" : "outlined"}
                onClick={() => setSearchPosition("top")}
                sx={{ borderRadius: 9999, textTransform: "none" }}
              >
                Top Floating
              </Button>
              <Button
                size="small"
                variant={searchPosition === "bottom" ? "contained" : "outlined"}
                onClick={() => setSearchPosition("bottom")}
                sx={{ borderRadius: 9999, textTransform: "none" }}
              >
                Bottom Floating
              </Button>
            </Stack>
          </Stack>

          <Chip
            label="Click Search Field to Test Expansion"
            color="secondary"
            size="small"
            variant="outlined"
            sx={{ fontWeight: 700, fontSize: "0.75rem" }}
          />
        </Box>

        {/* Live Simulation Viewport */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 440,
            borderRadius: "24px",
            overflow: "hidden",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }`,
            backgroundImage: isDark
              ? "radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.12) 0%, transparent 60%), linear-gradient(180deg, #09090B 0%, #121215 100%)"
              : "radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 60%), linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:
              searchPosition === "top" ? "flex-start" : "flex-end",
            p: 3,
            transition: "all 0.3s ease",
          }}
        >
          {/* Background Ambient Content Mockup */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              p: 4,
              pt: searchPosition === "top" ? 14 : 4,
              pb: searchPosition === "bottom" ? 14 : 4,
              opacity: isSearchExpanded ? 0.35 : 0.7,
              filter: isSearchExpanded ? "blur(3px)" : "none",
              transition: "all 0.3s ease",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              Winter 2026 Collection
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Explore luxury streetwear, oversized tailoring, and new seasonal
              arrivals.
            </Typography>
            <Stack direction="row" spacing={2}>
              {[1, 2, 3].map((item) => (
                <Paper
                  key={item}
                  elevation={0}
                  sx={{
                    width: 140,
                    height: 180,
                    borderRadius: "16px",
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.04)",
                    border: `1px solid ${
                      isDark
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(0, 0, 0, 0.08)"
                    }`,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    Item #{item}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    $1,290
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>

          {/* Floating Expandable Glass Search Dock */}
          <BottomNavigation
            glass={"true"}
            sx={{
              position: "relative",
              zIndex: 20,
              width: isSearchExpanded
                ? { xs: "96%", sm: 540 }
                : { xs: "90%", sm: 360 },
              height: isSearchExpanded ? 72 : 60,
              px: 1.5,
              py: 0.75,
              borderRadius: 9999,
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.2,
              boxShadow: isDark
                ? isSearchExpanded
                  ? "0 24px 64px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                  : "0 16px 48px rgba(0, 0, 0, 0.4)"
                : isSearchExpanded
                  ? "0 24px 56px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.08)"
                  : "0 12px 36px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Left Brand Capsule Badge */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                px: 1.5,
                py: 0.8,
                borderRadius: 9999,
                bgcolor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(0, 0, 0, 0.07)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)"
                }`,
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: isDark
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: isDark ? "#FFFFFF" : "#000000",
                  color: isDark ? "#000000" : "#FFFFFF",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: -0.5,
                }}
              >
                B
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: -0.2,
                }}
              >
                Balenciaga
              </Typography>
            </Box>

            {/* Middle Input Field */}
            <InputBase
              placeholder="Search Balenciaga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchExpanded(true)}
              sx={{
                flex: 1,
                fontSize: "0.875rem",
                color: "inherit",
                "& input": {
                  px: 1,
                  py: 0.5,
                },
              }}
            />

            {/* Right Action Icons */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ alignItems: "center", flexShrink: 0 }}
            >
              {isSearchExpanded && searchQuery && (
                <IconButton
                  size="small"
                  onClick={() => setSearchQuery("")}
                  sx={{ color: "inherit", opacity: 0.8 }}
                >
                  <X size={16} />
                </IconButton>
              )}

              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  opacity: 0.85,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Scan size={18} />
              </IconButton>

              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  opacity: 0.85,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Loader2
                  size={18}
                  style={{
                    animation: "spin 4s linear infinite",
                  }}
                />
              </IconButton>

              {isSearchExpanded && (
                <Button
                  size="small"
                  variant="text"
                  onClick={() => {
                    setIsSearchExpanded(false);
                    setSearchQuery("");
                  }}
                  sx={{
                    ml: 0.5,
                    px: 1.5,
                    borderRadius: 9999,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "none",
                    color: "primary.main",
                  }}
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </BottomNavigation>

          {/* Expanded Suggestions Pill Row */}
          {isSearchExpanded && (
            <Paper
              elevation={12}
              sx={{
                mt: 1.5,
                width: { xs: "96%", sm: 540 },
                p: 2,
                borderRadius: "20px",
                bgcolor: isDark
                  ? "rgba(24, 24, 27, 0.85)"
                  : "rgba(255, 255, 255, 0.88)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                zIndex: 15,
                animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  color: "text.secondary",
                  fontSize: "0.68rem",
                }}
              >
                Trending Searches
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", gap: 1 }}
              >
                {[
                  "Triple S Sneakers",
                  "Track 2",
                  "Hourglass Bag",
                  "Speed Trainer",
                  "Oversized Hoodie",
                ].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    onClick={() => setSearchQuery(tag)}
                    sx={{
                      borderRadius: 9999,
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      bgcolor: isDark
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(0, 0, 0, 0.05)",
                      "&:hover": {
                        bgcolor: isDark
                          ? "rgba(255, 255, 255, 0.16)"
                          : "rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          )}
        </Box>
      </DemoBlock>

      {/* 1. Frosted Glass vs Normal Surface */}
      <DemoBlock
        id="bottom-nav-surface"
        title="Frosted Glass Surface (glass prop)"
        description="Toggle `glass={true}` vs `glass={false}` on `<BottomNavigation>` to switch between 32px optical backdrop blur and a clean solid surface."
        code={`// Frosted Glass Floating Dock
<BottomNavigation
  value={value}
  onChange={(e, val) => setValue(val)}
  glass={true}
>
  <BottomNavigationAction label="Home" icon={<Home size={20} />} />
  <BottomNavigationAction label="Search" icon={<Search size={20} />} />
  <BottomNavigationAction label="Discover" icon={<Compass size={20} />} />
  <BottomNavigationAction label="Profile" icon={<User size={20} />} />
</BottomNavigation>

// Standard Solid Surface Dock
<BottomNavigation
  value={value}
  onChange={(e, val) => setValue(val)}
  glass={false}
>
  <BottomNavigationAction label="Home" icon={<Home size={20} />} />
</BottomNavigation>`}
      >
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={glass === "true"}
                onChange={(e) =>
                  setInstaGlass(e.target.checked ? "true" : "false")
                }
                color="glass"
              />
            }
            label={
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Surface Mode:{" "}
                <Box
                  component="span"
                  sx={{ color: glass ? "primary.main" : "text.secondary" }}
                >
                  glass={glass ? "true" : "false"}
                </Box>
              </Typography>
            }
          />
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "20px",
            bgcolor: isDark
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(0, 0, 0, 0.02)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BottomNavigation
            value={navValue}
            onChange={(_, val) => setNavValue(val)}
            glass={glass}
            placement="inline"
          >
            <BottomNavigationAction label="Home" icon={<Home size={20} />} />
            <BottomNavigationAction
              label="Search"
              icon={<Search size={20} />}
            />
            <BottomNavigationAction
              label="Explore"
              icon={<Compass size={20} />}
            />
            <BottomNavigationAction
              label="Saved"
              icon={<Bookmark size={20} />}
            />
            <BottomNavigationAction label="Profile" icon={<User size={20} />} />
          </BottomNavigation>
        </Paper>
      </DemoBlock>

      {/* 2. Floating Dynamic Island Placements */}
      <DemoBlock
        id="bottom-nav-placements"
        title="Dynamic Island Floating Placements (Top / Bottom, Left / Center / Right)"
        description="Transform `<BottomNavigation>` into a top or bottom floating Dynamic Island pill with `placement='top-center' | 'bottom-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`."
        code={`<BottomNavigation placement="bottom-center" glass={true}>
  <BottomNavigationAction icon={<Home size={20} />} />
  <BottomNavigationAction icon={<Search size={20} />} />
  <BottomNavigationAction icon={<Bell size={20} />} />
</BottomNavigation>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Click a placement trigger below to test floating fixed docks:
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {[
              "top-left",
              "top-center",
              "top-right",
              "bottom-left",
              "bottom-center",
              "bottom-right",
            ].map((pos) => (
              <Button
                key={pos}
                variant={
                  activePlacement === pos && floatingOpen
                    ? "contained"
                    : "outlined"
                }
                color={
                  activePlacement === pos && floatingOpen ? "glass" : "primary"
                }
                size="small"
                onClick={() => {
                  setActivePlacement(pos);
                  setFloatingOpen(true);
                }}
              >
                {pos}
              </Button>
            ))}

            {floatingOpen && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => setFloatingOpen(false)}
              >
                Dismiss Floating Dock
              </Button>
            )}
          </Box>

          {/* Floating Dock Instance */}
          {floatingOpen && (
            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              glass={"true"}
              placement={activePlacement}
            >
              <BottomNavigationAction label="Home" icon={<Home size={20} />} />
              <BottomNavigationAction
                label="Search"
                icon={<Search size={20} />}
              />
              <BottomNavigationAction
                label="AI"
                icon={<Sparkles size={20} />}
              />
              <BottomNavigationAction
                label="Activity"
                icon={<Bell size={20} />}
              />
              <BottomNavigationAction
                label="Settings"
                icon={<Sliders size={20} />}
              />
            </BottomNavigation>
          )}
        </Box>
      </DemoBlock>

      {/* 3. Icon-Only Floating Dock (No Text Labels) */}
      <DemoBlock
        id="bottom-nav-icon-only"
        title="Icon-Only Action Dock (No Text Labels)"
        description="Clean compact floating glass action dock with icons only (`showLabels={false}`). Perfect for toolbars, floating media controllers, or mobile quick action dapps."
        code={`<BottomNavigation
  value={value}
  onChange={(e, val) => setValue(val)}
  showLabels={false}
  glass={true}
>
  <BottomNavigationAction icon={<Home size={22} />} />
  <BottomNavigationAction icon={<Search size={22} />} />
  <BottomNavigationAction icon={<Sparkles size={22} />} />
  <BottomNavigationAction icon={<Bookmark size={22} />} />
  <BottomNavigationAction icon={<User size={22} />} />
</BottomNavigation>`}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "20px",
            bgcolor: isDark
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(0, 0, 0, 0.02)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Glass Icon-Only Small */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
                textAlign: "center",
              }}
            >
              Frosted Glass Pill — Small (size="small", showLabels={false})
            </Typography>
            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              showLabels={false}
              size="small"
              glass={"true"}
            >
              <BottomNavigationAction icon={<Home size={18} />} />
              <BottomNavigationAction icon={<Search size={18} />} />
              <BottomNavigationAction icon={<Sparkles size={18} />} />
              <BottomNavigationAction icon={<Bookmark size={18} />} />
              <BottomNavigationAction icon={<User size={18} />} />
            </BottomNavigation>
          </Box>

          {/* Glass Icon-Only Medium */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
                textAlign: "center",
              }}
            >
              Frosted Glass Pill — Medium (size="medium", showLabels={false})
            </Typography>

            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              showLabels={false}
              size="medium"
              glass={"true"}
            >
              <BottomNavigationAction icon={<Home size={22} />} />
              <BottomNavigationAction icon={<Search size={22} />} />
              <BottomNavigationAction icon={<Sparkles size={22} />} />
              <BottomNavigationAction icon={<Bookmark size={22} />} />
              <BottomNavigationAction icon={<User size={22} />} />
            </BottomNavigation>
          </Box>

          {/* Normal Solid Icon-Only Small */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
                textAlign: "center",
              }}
            >
              Solid Surface Pill — Small (size="small", showLabels={false})
            </Typography>
            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              showLabels={false}
              size="small"
              glass={"false"}
            >
              <BottomNavigationAction icon={<Home size={18} />} />
              <BottomNavigationAction icon={<Search size={18} />} />
              <BottomNavigationAction icon={<Sparkles size={18} />} />
              <BottomNavigationAction icon={<Bookmark size={18} />} />
              <BottomNavigationAction icon={<User size={18} />} />
            </BottomNavigation>
          </Box>
        </Paper>
      </DemoBlock>

      {/* 4. Dock Sizes (Small vs Medium) */}
      <DemoBlock
        id="bottom-nav-sizes"
        title="Dock Sizes (size='small' | 'medium')"
        description="Choose between `size='small'` (48px height compact pill) and `size='medium'` (64px height standard dock)."
        code={`// Small Dock (48px height)
<BottomNavigation size="small" glass={true}>
  <BottomNavigationAction label="Home" icon={<Home size={18} />} />
  <BottomNavigationAction label="Search" icon={<Search size={18} />} />
  <BottomNavigationAction label="Profile" icon={<User size={18} />} />
</BottomNavigation>

// Medium Dock (64px height - default)
<BottomNavigation size="medium" glass={true}>
  <BottomNavigationAction label="Home" icon={<Home size={20} />} />
  <BottomNavigationAction label="Search" icon={<Search size={20} />} />
  <BottomNavigationAction label="Profile" icon={<User size={20} />} />
</BottomNavigation>`}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "20px",
            bgcolor: isDark
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(0, 0, 0, 0.02)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Small Dock */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
              }}
            >
              Small Dock (size="small" - 48px height)
            </Typography>
            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              size="small"
              glass={"true"}
            >
              <BottomNavigationAction label="Home" icon={<Home size={18} />} />
              <BottomNavigationAction
                label="Search"
                icon={<Search size={18} />}
              />
              <BottomNavigationAction
                label="Discover"
                icon={<Compass size={18} />}
              />
              <BottomNavigationAction
                label="Profile"
                icon={<User size={18} />}
              />
            </BottomNavigation>
          </Box>

          {/* Medium Dock */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
              }}
            >
              Medium Dock (size="medium" - 64px height)
            </Typography>
            <BottomNavigation
              value={navValue}
              onChange={(_, val) => setNavValue(val)}
              size="medium"
              glass={"true"}
            >
              <BottomNavigationAction label="Home" icon={<Home size={20} />} />
              <BottomNavigationAction
                label="Search"
                icon={<Search size={20} />}
              />
              <BottomNavigationAction
                label="Discover"
                icon={<Compass size={20} />}
              />
              <BottomNavigationAction
                label="Profile"
                icon={<User size={20} />}
              />
            </BottomNavigation>
          </Box>
        </Paper>
      </DemoBlock>
    </ComponentPage>
  );
};
