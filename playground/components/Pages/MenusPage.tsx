import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import {
  Sparkles,
  User,
  Settings,
  Shield,
  CreditCard,
  LogOut,
  ChevronRight,
  Copy,
  Share2,
  Trash2,
  Check,
  Zap,
  Sliders,
  MoreVertical,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const MenusPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Menu anchor states
  const [glassAnchor, setGlassAnchor] = useState<null | HTMLElement>(null);
  const [standardAnchor, setStandardAnchor] = useState<null | HTMLElement>(
    null,
  );
  const [sizeSmallAnchor, setSizeSmallAnchor] = useState<null | HTMLElement>(
    null,
  );
  const [colorAnchor, setColorAnchor] = useState<null | HTMLElement>(null);

  const [selectedColor, setSelectedColor] = useState<any>("accent");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <ComponentPage
      title="Menu & Dropdown"
      description="Frosted glass dropdown menus (surface='glass') with 24px optical backdrop blur, specular border highlights, scale-adjusted sizes, and semantic color accents."
      category="Navigation"
      badges={[
        "surface='glass'",
        "size='small | medium'",
        "color palette",
        "Dropdowns & Contextual",
      ]}
    >
      {/* 1. Frosted Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="✨ Frosted Glass Menu (surface='glass')"
        description="Floating glass dropdown menu with 24px backdrop blur, translucent specular border, and smooth interactive item hover effects."
        code={`<Button variant="contained" color="glass" onClick={handleClick}>
  Open Glass Menu
</Button>

<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  surface="glass"
>
  <MenuItem onClick={handleClose}>
    <ListItemIcon><User size={20} /></ListItemIcon>
    <ListItemText primary="My Profile" secondary="View account details" />
  </MenuItem>
  <MenuItem onClick={handleClose}>
    <ListItemIcon><Sparkles size={20} /></ListItemIcon>
    <ListItemText primary="AI Assistant" />
  </MenuItem>
  <Divider />
  <MenuItem onClick={handleClose}>
    <ListItemIcon><LogOut size={20} /></ListItemIcon>
    <ListItemText primary="Log Out" />
  </MenuItem>
</Menu>`}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, sm: 5 },
            borderRadius: "24px",
            overflow: "hidden",
            backgroundImage: isDark
              ? "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')"
              : "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            boxShadow: isDark
              ? "0 24px 60px rgba(0, 0, 0, 0.7)"
              : "0 20px 48px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Ambient Light Mesh Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.65) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.65) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <Button
            variant="contained"
            color="glass"
            onClick={(e) => setGlassAnchor(e.currentTarget)}
            startIcon={<Sparkles size={18} />}
            sx={{ zIndex: 2, px: 3, py: 1.2, fontWeight: 700 }}
          >
            Trigger Frosted Glass Menu
          </Button>

          <Menu
            anchorEl={glassAnchor}
            open={Boolean(glassAnchor)}
            onClose={() => setGlassAnchor(null)}
            surface="glass"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem onClick={() => setGlassAnchor(null)}>
              <ListItemIcon>
                <User size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Personal Account"
                secondary="alex@jivico.design"
              />
            </MenuItem>

            <MenuItem onClick={() => setGlassAnchor(null)}>
              <ListItemIcon>
                <Sparkles size={20} />
              </ListItemIcon>
              <ListItemText primary="AI Workflows" />
              <Chip
                label="Pro"
                size="small"
                color="primary"
                sx={{ height: 20, fontSize: "0.65rem" }}
              />
            </MenuItem>

            <MenuItem onClick={() => setGlassAnchor(null)}>
              <ListItemIcon>
                <Settings size={20} />
              </ListItemIcon>
              <ListItemText primary="Preferences" />
            </MenuItem>

            <Divider />

            <MenuItem onClick={() => setGlassAnchor(null)}>
              <ListItemIcon>
                <LogOut size={20} />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </MenuItem>
          </Menu>
        </Box>
      </DemoBlock>

      {/* 2. Menu Sizes (Small vs Medium) */}
      <DemoBlock
        id="menu-sizes"
        title="Menu Sizes (size='small' | 'medium')"
        description="Choose between compact 34px height items (`size='small'`) or standard 42px height items (`size='medium'`)."
        code={`// Small Menu (size="small" — 34px min-height)
<Menu size="small">
  <MenuItem><ListItemText primary="Small item" /></MenuItem>
</Menu>

// Medium Menu (size="medium" — 42px min-height - default)
<Menu size="medium">
  <MenuItem><ListItemText primary="Medium item" /></MenuItem>
</Menu>`}
      >
        <Stack
          direction="row"
          spacing={3}
          // gap={2}
          sx={{ justifyContent: "center", flexWrap: "wrap", gap: 2 }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={(e) => setSizeSmallAnchor(e.currentTarget)}
            startIcon={<Sliders size={16} />}
          >
            Small Size Menu (34px)
          </Button>

          <Button
            variant="outlined"
            onClick={(e) => setStandardAnchor(e.currentTarget)}
            startIcon={<MoreVertical size={18} />}
          >
            Medium Size Menu (42px)
          </Button>
        </Stack>

        {/* Small Menu Instance */}
        <Menu
          anchorEl={sizeSmallAnchor}
          open={Boolean(sizeSmallAnchor)}
          onClose={() => setSizeSmallAnchor(null)}
          size="small"
        >
          <MenuItem onClick={() => setSizeSmallAnchor(null)}>
            <ListItemIcon>
              <Copy size={18} />
            </ListItemIcon>
            <ListItemText primary="Copy link" />
          </MenuItem>
          <MenuItem onClick={() => setSizeSmallAnchor(null)}>
            <ListItemIcon>
              <Share2 size={18} />
            </ListItemIcon>
            <ListItemText primary="Share profile" />
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setSizeSmallAnchor(null)}>
            <ListItemIcon>
              <Trash2 size={18} />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        </Menu>

        {/* Medium Menu Instance */}
        <Menu
          anchorEl={standardAnchor}
          open={Boolean(standardAnchor)}
          onClose={() => setStandardAnchor(null)}
          size="medium"
        >
          <MenuItem onClick={() => setStandardAnchor(null)}>
            <ListItemIcon>
              <Shield size={20} />
            </ListItemIcon>
            <ListItemText primary="Security & Privacy" secondary="Manage 2FA" />
          </MenuItem>

          <MenuItem onClick={() => setStandardAnchor(null)}>
            <ListItemIcon>
              <CreditCard size={20} />
            </ListItemIcon>
            <ListItemText
              primary="Billing Details"
              secondary="Payment methods"
            />
          </MenuItem>
        </Menu>
      </DemoBlock>

      {/* 3. Semantic Palette Colors */}
      <DemoBlock
        id="menu-colors"
        title="Semantic Color Accents (color='primary' | 'accent' | 'success' | 'warning' | 'error')"
        description="Apply custom color themes (`color='accent'`, `color='success'`, etc.) to active focus states and item icon highlights."
        code={`<Menu color="accent">
  <MenuItem selected><ListItemText primary="Active Accent Item" /></MenuItem>
</Menu>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 3,
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              spacing: 1,
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {["primary", "accent", "success", "warning", "error"].map(
              (color) => (
                <Chip
                  key={color}
                  label={color}
                  color={color as any}
                  variant={selectedColor === color ? "filled" : "outlined"}
                  onClick={() => setSelectedColor(color)}
                  sx={{ textTransform: "capitalize", fontWeight: 700 }}
                />
              ),
            )}
          </Stack>

          <Button
            variant="contained"
            color={selectedColor}
            onClick={(e) => setColorAnchor(e.currentTarget)}
            startIcon={<Zap size={18} />}
          >
            Open {selectedColor} Menu
          </Button>

          <Menu
            anchorEl={colorAnchor}
            open={Boolean(colorAnchor)}
            onClose={() => setColorAnchor(null)}
            color={selectedColor}
          >
            <MenuItem
              selected={selectedItemIndex === 0}
              onClick={() => {
                setSelectedItemIndex(0);
                setColorAnchor(null);
              }}
            >
              <ListItemIcon>
                <Check size={20} />
              </ListItemIcon>
              <ListItemText primary="Selected Option 1" />
            </MenuItem>

            <MenuItem
              selected={selectedItemIndex === 1}
              onClick={() => {
                setSelectedItemIndex(1);
                setColorAnchor(null);
              }}
            >
              <ListItemIcon>
                <Check size={20} />
              </ListItemIcon>
              <ListItemText primary="Selected Option 2" />
            </MenuItem>
          </Menu>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
