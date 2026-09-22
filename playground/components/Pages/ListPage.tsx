import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Avatar,
  IconButton,
  Switch,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import {
  Home,
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  Mail,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Star,
  Lock,
  Smartphone,
  Trash2,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const ListPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Interactive selection states
  const [selectedGlass, setSelectedGlass] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [securityLock, setSecurityLock] = useState(false);

  return (
    <ComponentPage
      title="List & List Item"
      description="Theme-aware lists with frosted glassmorphic surfaces (variant='glass'), scale-adjusted sizes (small / medium / large), and semantic color highlights for active selection."
      category="Navigation"
      badges={[
        "variant='glass'",
        "size='small | medium | large'",
        "color palette",
        "Subheaders & Actions",
      ]}
    >
      {/* 1. Frosted Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="✨ Frosted Glass Surface (variant='glass')"
        description="Floating glass list container with 20px backdrop blur, specular top highlight, and translucent selection states."
        code={`<List variant="glass">
  <ListItemButton selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>
    <ListItemIcon><Home /></ListItemIcon>
    <ListItemText primary="Dashboard" secondary="Overview & metrics" />
  </ListItemButton>
  <ListItemButton selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>
    <ListItemIcon><User /></ListItemIcon>
    <ListItemText primary="User Account" secondary="Profile preferences" />
  </ListItemButton>
</List>`}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 2.5, sm: 4 },
            borderRadius: "24px",
            overflow: "hidden",
            backgroundImage: isDark
              ? "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')"
              : "linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: isDark
              ? "0 24px 60px rgba(0, 0, 0, 0.7)"
              : "0 20px 48px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Glowing Ambient Mesh Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, transparent 70%)",
              filter: "blur(25px)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, transparent 70%)",
              filter: "blur(25px)",
            }}
          />

          <List
            variant="glass"
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: 420,
              width: "100%",
            }}
          >
            <ListItemButton
              selected={selectedGlass === 0}
              onClick={() => setSelectedGlass(0)}
            >
              <ListItemIcon>
                <Home size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                secondary="Overview & live performance metrics"
              />
              <ChevronRight size={18} opacity={0.6} />
            </ListItemButton>

            <ListItemButton
              selected={selectedGlass === 1}
              onClick={() => setSelectedGlass(1)}
            >
              <ListItemIcon>
                <User size={20} />
              </ListItemIcon>
              <ListItemText
                primary="User Profile"
                secondary="Personal information & bio"
              />
              <ChevronRight size={18} opacity={0.6} />
            </ListItemButton>

            <ListItemButton
              selected={selectedGlass === 2}
              onClick={() => setSelectedGlass(2)}
            >
              <ListItemIcon>
                <Sparkles size={20} />
              </ListItemIcon>
              <ListItemText
                primary="AI Assistants"
                secondary="Custom prompt workflows"
              />
              <Chip
                label="Pro"
                size="small"
                color="primary"
                sx={{ height: 20, fontSize: "0.65rem" }}
              />
            </ListItemButton>

            <ListItemButton
              selected={selectedGlass === 3}
              onClick={() => setSelectedGlass(3)}
            >
              <ListItemIcon>
                <Settings size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Preferences"
                secondary="System themes & shortcuts"
              />
              <ChevronRight size={18} opacity={0.6} />
            </ListItemButton>
          </List>
        </Box>
      </DemoBlock>

      {/* 2. List Sizes */}
      <DemoBlock
        id="list-sizes"
        title="List Scale Sizes (size='small' | 'medium' | 'large')"
        description="Choose between compact 36px (`small`), standard 44px (`medium`), or spacious 52px (`large`) list items with auto-scaled padding, font sizes, and icon bounds."
        code={`// Small List (36px min-height)
<List size="small">
  <ListItemButton><ListItemText primary="Small item" /></ListItemButton>
</List>

// Medium List (44px min-height - default)
<List size="medium">
  <ListItemButton><ListItemText primary="Medium item" /></ListItemButton>
</List>

// Large List (52px min-height)
<List size="large">
  <ListItemButton><ListItemText primary="Large item" /></ListItemButton>
</List>`}
      >
        <Stack spacing={4} sx={{ width: "100%", maxWidth: 650, mx: "auto" }}>
          {/* Small Size */}
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", opacity: 0.6, mb: 1, display: "block" }}>
              Small Scale (size="small" — 36px min-height)
            </Typography>
            <Paper elevation={0} sx={{ p: 1, borderRadius: "14px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
              <List size="small">
                <ListItemButton selected={selectedSize === 0} onClick={() => setSelectedSize(0)}>
                  <ListItemIcon><Mail size={18} /></ListItemIcon>
                  <ListItemText primary="Inbox" secondary="12 unread messages" />
                </ListItemButton>
                <ListItemButton selected={selectedSize === 1} onClick={() => setSelectedSize(1)}>
                  <ListItemIcon><Star size={18} /></ListItemIcon>
                  <ListItemText primary="Starred" secondary="Important bookmarks" />
                </ListItemButton>
              </List>
            </Paper>
          </Box>

          {/* Medium Size */}
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", opacity: 0.6, mb: 1, display: "block" }}>
              Medium Scale (size="medium" — 44px min-height - Default)
            </Typography>
            <Paper elevation={0} sx={{ p: 1.5, borderRadius: "16px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
              <List size="medium">
                <ListItemButton selected={selectedSize === 2} onClick={() => setSelectedSize(2)}>
                  <ListItemIcon><Bell size={20} /></ListItemIcon>
                  <ListItemText primary="Push Notifications" secondary="Configure mobile & web alerts" />
                </ListItemButton>
                <ListItemButton selected={selectedSize === 3} onClick={() => setSelectedSize(3)}>
                  <ListItemIcon><Shield size={20} /></ListItemIcon>
                  <ListItemText primary="Security & Privacy" font-size="inherit" secondary="Two-factor authentication & password" />
                </ListItemButton>
              </List>
            </Paper>
          </Box>

          {/* Large Size */}
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", opacity: 0.6, mb: 1, display: "block" }}>
              Large Scale (size="large" — 52px min-height)
            </Typography>
            <Paper elevation={0} sx={{ p: 1.5, borderRadius: "18px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
              <List size="large">
                <ListItemButton selected={selectedSize === 4} onClick={() => setSelectedSize(4)}>
                  <ListItemIcon><CreditCard size={22} /></ListItemIcon>
                  <ListItemText primary="Billing & Subscriptions" secondary="Manage payment methods and active invoices" />
                </ListItemButton>
                <ListItemButton selected={selectedSize === 5} onClick={() => setSelectedSize(5)}>
                  <ListItemIcon><HelpCircle size={22} /></ListItemIcon>
                  <ListItemText primary="Help & Customer Support" secondary="Access 24/7 priority live chat assistance" />
                </ListItemButton>
              </List>
            </Paper>
          </Box>
        </Stack>
      </DemoBlock>

      {/* 3. Semantic Palette Colors */}
      <DemoBlock
        id="list-colors"
        title="Semantic Color Palette (color='primary' | 'accent' | 'success' | 'warning' | 'error')"
        description="Apply custom semantic colors to `<List>` or individual `<ListItemButton>` elements for active highlight themes."
        code={`<List color="accent">
  <ListItemButton selected={true}>
    <ListItemIcon><Sparkles /></ListItemIcon>
    <ListItemText primary="Accent Selection" />
  </ListItemButton>
</List>`}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "20px",
            bgcolor: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
            maxWidth: 480,
            mx: "auto",
          }}
        >
          <List>
            <ListItemButton
              color="primary"
              selected={selectedColor === 0}
              onClick={() => setSelectedColor(0)}
            >
              <ListItemIcon>
                <Home size={20} />
              </ListItemIcon>
              <ListItemText primary="Primary Color Item" secondary="Default brand primary color" />
              <Chip label="Primary" color="primary" size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
            </ListItemButton>

            <ListItemButton
              color="accent"
              selected={selectedColor === 1}
              onClick={() => setSelectedColor(1)}
            >
              <ListItemIcon>
                <Sparkles size={20} />
              </ListItemIcon>
              <ListItemText primary="Accent Color Item" secondary="Jivico signature purple highlight" />
              <Chip label="Accent" color="accent" size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
            </ListItemButton>

            <ListItemButton
              color="success"
              selected={selectedColor === 2}
              onClick={() => setSelectedColor(2)}
            >
              <ListItemIcon>
                <CheckCircle2 size={20} />
              </ListItemIcon>
              <ListItemText primary="Success Status Item" secondary="Completed task or verified state" />
              <Chip label="Success" color="success" size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
            </ListItemButton>

            <ListItemButton
              color="warning"
              selected={selectedColor === 3}
              onClick={() => setSelectedColor(3)}
            >
              <ListItemIcon>
                <AlertCircle size={20} />
              </ListItemIcon>
              <ListItemText primary="Warning Alert Item" secondary="Requires pending confirmation" />
              <Chip label="Warning" color="warning" size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
            </ListItemButton>

            <ListItemButton
              color="error"
              selected={selectedColor === 4}
              onClick={() => setSelectedColor(4)}
            >
              <ListItemIcon>
                <Trash2 size={20} />
              </ListItemIcon>
              <ListItemText primary="Error / Destructive Action" secondary="Remove item or deactivate" />
              <Chip label="Error" color="error" size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
            </ListItemButton>
          </List>
        </Paper>
      </DemoBlock>

      {/* 4. Avatars, Subheaders & Secondary Actions */}
      <DemoBlock
        id="list-composition"
        title="Rich Composition (Avatars, Subheaders & Secondary Actions)"
        description="Combine `<ListSubheader>`, `<ListItemAvatar>`, and `<ListItemSecondaryAction>` with switches, icons, and avatars."
        code={`<List variant="glass">
  <ListSubheader>Settings Group</ListSubheader>
  <ListItem>
    <ListItemAvatar><Avatar src="..." /></ListItemAvatar>
    <ListItemText primary="Alex River" secondary="alex@jivico.com" />
    <ListItemSecondaryAction>
      <Switch checked={enabled} onChange={toggle} />
    </ListItemSecondaryAction>
  </ListItem>
</List>`}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 2.5, sm: 4 },
            borderRadius: "24px",
            overflow: "hidden",
            backgroundImage: isDark
              ? "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')"
              : "linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: isDark
              ? "0 24px 60px rgba(0, 0, 0, 0.7)"
              : "0 20px 48px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Ambient Lighting Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 250,
              height: 250,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <List
            variant="glass"
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: 500,
              width: "100%",
            }}
          >
            <ListSubheader disableSticky>Account Members</ListSubheader>

            <ListItem>
              <ListItemAvatar>
                <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" />
              </ListItemAvatar>
              <ListItemText
                primary="Sarah Jenkins"
                secondary="Owner • sarah@jivico.design"
              />
              <Chip
                label="Admin"
                size="small"
                color="accent"
                sx={{ height: 20, fontSize: "0.65rem" }}
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
              </ListItemAvatar>
              <ListItemText
                primary="David Chen"
                secondary="Developer • david@jivico.dev"
              />
              <Chip
                label="Member"
                size="small"
                sx={{ height: 20, fontSize: "0.65rem" }}
              />
            </ListItem>

            <ListSubheader disableSticky>Quick Controls</ListSubheader>

            <ListItem>
              <ListItemIcon>
                <Bell size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Push Notifications"
                secondary="Receive instant sound alerts"
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                  color="glass"
                  size="small"
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Lock size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Biometric Lock"
                secondary="Require Face ID on open"
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={securityLock}
                  onChange={(e) => setSecurityLock(e.target.checked)}
                  color="glass"
                  size="small"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
