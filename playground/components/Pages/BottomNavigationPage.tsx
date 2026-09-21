import React, { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Switch,
  FormControlLabel,
  Paper,
  Button,
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
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const BottomNavigationPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [navValue, setNavValue] = useState(0);
  const [glass, setGlass] = useState(true);
  const [activePlacement, setActivePlacement] = useState<any>("inline");
  const [floatingOpen, setFloatingOpen] = useState(false);

  return (
    <ComponentPage
      title="Bottom Navigation & Floating Dock"
      description="Frosted glass floating action docks and bottom navigation bars with Apple liquid glass pill styling, specular glint lighting, and tactile item spring animations."
      category="Navigation"
      badges={[
        "BottomNavigation",
        "glass prop",
        "Floating Placements",
        "Liquid Pill",
      ]}
    >
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
                checked={glass}
                onChange={(e) => setGlass(e.target.checked)}
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

      {/* 2. Floating Placements */}
      <DemoBlock
        id="bottom-nav-placements"
        title="Screen Placements (Top / Bottom, Left / Center / Right)"
        description="Position the floating dock anywhere on the screen with `placement='top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`."
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
              glass={true}
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
              glass={true}
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
              glass={true}
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
              glass={false}
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
              glass={true}
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
              glass={true}
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
