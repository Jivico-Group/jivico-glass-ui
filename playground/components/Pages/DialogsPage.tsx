import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Drawer,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  Sparkles,
  X,
  Shield,
  Trash2,
  Settings,
  Bell,
  CheckCircle2,
  ChevronRight,
  Share2,
  Copy,
  Sliders,
  Maximize2,
  Layers,
  Layers3,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Preset Dialog States
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const [glassModalOpen, setGlassModalOpen] = useState(false);
  const [standardModalOpen, setStandardModalOpen] = useState(false);

  // Preset Drawer States
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [topDrawerOpen, setTopDrawerOpen] = useState(false);
  const [drawerGlass, setDrawerGlass] = useState(true);

  // Form states inside dialog
  const [projectName, setProjectName] = useState("Apple Liquid Design");
  const [visibility, setVisibility] = useState("private");
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <ComponentPage
      title="Dialog & Drawer Overlays"
      description="Frosted glass modal dialogs and slide-out drawers equipped with optical backdrop blur, specular perimeter lighting, and tactile spring transitions."
      category="Surfaces"
      badges={["Modal Overlays", "Liquid Glass", "Bottom Sheet", "glass prop"]}
    >
      {/* 1. Signature Glass vs Standard Surface Dialogs */}
      <DemoBlock
        id="glass-dialog-toggle"
        title="Frosted Glass Dialog Surface (glass prop)"
        description="Toggle the `glass` prop on `<Dialog glass={true}>` to enable optical background blur, top specular edge glint, and liquid backdrop translucency."
        code={`// Signature Frosted Glass Modal
<Dialog open={open} glass={true} onClose={() => setOpen(false)}>
  <DialogTitle>Frosted Glass Modal</DialogTitle>
  <DialogContent>Optical 32px backdrop blur and specular lighting.</DialogContent>
  <DialogActions>
    <Button color="glass" onClick={() => setOpen(false)}>Cancel</Button>
    <Button color="primary" onClick={() => setOpen(false)}>Confirm</Button>
  </DialogActions>
</Dialog>

// Standard Solid Surface Modal
<Dialog open={open} glass={false} onClose={() => setOpen(false)}>
  <DialogTitle>Standard Modal</DialogTitle>
</Dialog>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2.5,
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="glass"
            size="large"
            onClick={() => setGlassModalOpen(true)}
            startIcon={<Sparkles size={18} />}
          >
            Open Frosted Glass Modal (glass=true)
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setStandardModalOpen(true)}
            startIcon={<Layers3 size={18} />}
          >
            Open Standard Modal (glass=false)
          </Button>
        </Box>

        {/* Frosted Glass Dialog (glass=true) */}
        <Dialog
          open={glassModalOpen}
          glass={true}
          onClose={() => setGlassModalOpen(false)}
          maxWidth="xs"
          fullWidth
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
              pt: 1,
            }}
          >
            <DialogTitle
              sx={{ display: "flex", alignItems: "center", gap: 1.5, pb: 0 }}
            >
              <Sparkles size={20} />
              Frosted Glass Dialog
            </DialogTitle>
            <IconButton onClick={() => setGlassModalOpen(false)} size="small">
              <X size={18} />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText sx={{ pt: 1 }}>
              This dialog renders with <strong>glass={"{true}"}</strong> featuring 32px backdrop blur, specular top perimeter light reflection, and refined contrast typography.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setGlassModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setGlassModalOpen(false)}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        {/* Standard Solid Surface Dialog (glass=false) */}
        <Dialog
          open={standardModalOpen}
          glass={false}
          onClose={() => setStandardModalOpen(false)}
          maxWidth="xs"
          fullWidth
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
              pt: 1,
            }}
          >
            <DialogTitle sx={{ pb: 0 }}>Standard Surface Dialog</DialogTitle>
            <IconButton onClick={() => setStandardModalOpen(false)} size="small">
              <X size={18} />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText sx={{ pt: 1 }}>
              This dialog renders with <strong>glass={"{false}"}</strong> using the clean 24px rounded surface palette with 70px drop shadow.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setStandardModalOpen(false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </DemoBlock>

      {/* 2. Preset Dialog Workflows */}
      <DemoBlock
        id="confirmation-dialog"
        title="Frosted Glass Action Presets"
        description="Pre-configured modal dialogs for common workflows: confirmation actions, multi-input forms, and full-screen workspaces."
        code={`<Dialog open={open} glass={true} onClose={() => setOpen(false)}>
  <DialogTitle>Revoke Session?</DialogTitle>
  <DialogContent>Confirmation text here...</DialogContent>
  <DialogActions>
    <Button variant="outlined" color="glass">Cancel</Button>
    <Button variant="contained" color="error">Revoke Access</Button>
  </DialogActions>
</Dialog>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2.5,
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="glass"
            size="large"
            onClick={() => setConfirmOpen(true)}
            startIcon={<Shield size={18} />}
          >
            Confirmation Dialog
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setFormOpen(true)}
            startIcon={<Settings size={18} />}
          >
            Form Settings Dialog
          </Button>

          <Button
            variant="outlined"
            color="glass"
            size="large"
            onClick={() => setFullScreenOpen(true)}
            startIcon={<Maximize2 size={18} />}
          >
            Full-Screen Dialog
          </Button>
        </Box>

        {/* Preset Confirmation Dialog */}
        <Dialog
          open={confirmOpen}
          glass={true}
          onClose={() => setConfirmOpen(false)}
          maxWidth="xs"
          fullWidth
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
              pt: 1,
            }}
          >
            <DialogTitle
              sx={{ display: "flex", alignItems: "center", gap: 1.5, pb: 0 }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(17,17,17,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Shield size={20} color={isDark ? "#F6F5F2" : "#111111"} />
              </Box>
              Revoke Session?
            </DialogTitle>
            <IconButton onClick={() => setConfirmOpen(false)} size="small">
              <X size={18} />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText sx={{ pt: 1 }}>
              Revoking this session will instantly sign out the user from all
              active browsers and revoke hardware security key tokens.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setConfirmOpen(false)}
              startIcon={<Trash2 size={16} />}
            >
              Revoke Access
            </Button>
          </DialogActions>
        </Dialog>

        {/* Preset Form Settings Dialog */}
        <Dialog
          open={formOpen}
          glass={true}
          onClose={() => setFormOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
              pt: 1,
            }}
          >
            <DialogTitle sx={{ pb: 0 }}>Project Configuration</DialogTitle>
            <IconButton onClick={() => setFormOpen(false)} size="small">
              <X size={18} />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText sx={{ mb: 2.5 }}>
              Configure your liquid frosted workspace identity and security options.
            </DialogContentText>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <TextField
                label="Workspace Project Name"
                fullWidth
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="dialog-select-visibility">
                  Visibility Tier
                </InputLabel>
                <Select
                  labelId="dialog-select-visibility"
                  value={visibility}
                  label="Visibility Tier"
                  onChange={(e) => setVisibility(e.target.value)}
                >
                  <MenuItem value="private">
                    Private (Team Members Only)
                  </MenuItem>
                  <MenuItem value="internal">Internal Organization</MenuItem>
                  <MenuItem value="public">Public Open Source</MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(17,17,17,0.03)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      color="glass"
                      checked={twoFactor}
                      onChange={(e) => setTwoFactor(e.target.checked)}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Hardware Glass Passkey
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        Require biometrics or security key on sign in
                      </Typography>
                    </Box>
                  }
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setFormOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setFormOpen(false)}
              startIcon={<CheckCircle2 size={16} />}
            >
              Save Preferences
            </Button>
          </DialogActions>
        </Dialog>

        {/* Preset Full-Screen Dialog */}
        <Dialog
          fullScreen
          open={fullScreenOpen}
          glass={true}
          onClose={() => setFullScreenOpen(false)}
          slots={{
            transition: Transition,
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2.5,
              borderBottom: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.08)"
              }`,
              backgroundColor: isDark
                ? "rgba(18, 20, 26, 0.7)"
                : "rgba(246, 245, 242, 0.7)",
              backdropFilter: "blur(24px)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <IconButton onClick={() => setFullScreenOpen(false)} edge="start">
                <X size={20} />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Full-Screen Glass Workspace
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setFullScreenOpen(false)}
            >
              Done
            </Button>
          </Box>
          <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 800, mx: "auto" }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Immersive Liquid Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}
            >
              Full-screen modals expand smoothly from the bottom with Apple
              spring physics, preserving background context through translucent navigation headers.
            </Typography>
            <Box
              sx={{
                p: 3,
                borderRadius: "16px",
                bgcolor: isDark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.6)",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.08)"
                }`,
                backdropFilter: "blur(16px)",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                System Architecture
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Crafted using Apple Precision design tokens and Google optical glassmorphism.
              </Typography>
            </Box>
          </Box>
        </Dialog>
      </DemoBlock>

      {/* 3. Apple Liquid Drawer Overlays (glass prop & anchors) */}
      <DemoBlock
        id="drawer-styles"
        title="Drawer Overlays & Surface Styles (glass prop)"
        description="Drawers support the `glass` prop (`glass={true}` vs `glass={false}`) with 32px backdrop blur, specular top edge glint, and tailored anchor corner radius rules."
        code={`// Frosted Glass Bottom Sheet Drawer
<Drawer anchor="bottom" glass={true} open={open} onClose={() => setOpen(false)}>
  <Box sx={{ p: 3 }}>
    <Box sx={{ width: 44, height: 5, borderRadius: 3, bgcolor: "rgba(0,0,0,0.2)", mx: "auto", mb: 2.5 }} />
    <Typography variant="h6">Frosted Glass Action Sheet</Typography>
  </Box>
</Drawer>

// Standard Solid Surface Side Panel
<Drawer anchor="right" glass={false} open={open} onClose={() => setOpen(false)}>
  <Box sx={{ width: 320, p: 3 }}>
    <Typography variant="h6">Standard Side Panel</Typography>
  </Box>
</Drawer>`}
      >
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={drawerGlass}
                onChange={(e) => setDrawerGlass(e.target.checked)}
                color="glass"
              />
            }
            label={
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Drawer Surface Mode:{" "}
                <Box
                  component="span"
                  sx={{
                    color: drawerGlass ? "primary.main" : "text.secondary",
                  }}
                >
                  glass={drawerGlass ? "true" : "false"}
                </Box>
              </Typography>
            }
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            variant={drawerGlass ? "contained" : "outlined"}
            color={drawerGlass ? "glass" : "primary"}
            size="large"
            onClick={() => {
              setBottomSheetOpen(true);
            }}
            startIcon={<Layers size={18} />}
          >
            Bottom Sheet ({drawerGlass ? "Frosted Glass" : "Standard"})
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => {
              setRightDrawerOpen(true);
            }}
            startIcon={<ChevronRight size={18} />}
          >
            Right Side Panel ({drawerGlass ? "Frosted Glass" : "Standard"})
          </Button>

          <Button
            variant="outlined"
            color="glass"
            size="large"
            onClick={() => {
              setLeftDrawerOpen(true);
            }}
          >
            Left Navigation ({drawerGlass ? "Frosted Glass" : "Standard"})
          </Button>

          <Button
            variant="text"
            color="secondary"
            size="large"
            onClick={() => {
              setTopDrawerOpen(true);
            }}
          >
            Top Banner Sheet ({drawerGlass ? "Frosted Glass" : "Standard"})
          </Button>
        </Box>

        {/* Bottom Sheet Drawer */}
        <Drawer
          anchor="bottom"
          glass={drawerGlass}
          open={bottomSheetOpen}
          onClose={() => setBottomSheetOpen(false)}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              mx: "auto",
              pt: 1.5,
              pb: 4,
              px: 3,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 5,
                borderRadius: 3,
                bgcolor: isDark
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(17,17,17,0.25)",
                mx: "auto",
                mb: 2.5,
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Quick Share & Export
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Rendering with glass={drawerGlass ? "true" : "false"}
                </Typography>
              </Box>
              <IconButton
                onClick={() => setBottomSheetOpen(false)}
                size="small"
              >
                <X size={18} />
              </IconButton>
            </Box>

            <List sx={{ pt: 0 }}>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => setBottomSheetOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(17,17,17,0.03)",
                  }}
                >
                  <ListItemIcon>
                    <Copy size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Copy Workspace Link"
                    secondary="https://jivico.design/sheet/9a8f2"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => setBottomSheetOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(17,17,17,0.03)",
                  }}
                >
                  <ListItemIcon>
                    <Share2 size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="AirDrop to Nearby Devices"
                    secondary="Share directly to macOS and iOS"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setBottomSheetOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(17,17,17,0.03)",
                  }}
                >
                  <ListItemIcon>
                    <Sliders size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Export Tokens as JSON"
                    secondary="Figma and Style Dictionary compatible"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Right Drawer */}
        <Drawer
          anchor="right"
          glass={drawerGlass}
          open={rightDrawerOpen}
          onClose={() => setRightDrawerOpen(false)}
        >
          <Box
            sx={{
              width: { xs: 300, sm: 380 },
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Inspection Panel
              </Typography>
              <IconButton
                onClick={() => setRightDrawerOpen(false)}
                size="small"
              >
                <X size={18} />
              </IconButton>
            </Box>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Drawer Surface Properties
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Glass Prop:
                </Typography>
                <Chip
                  label={drawerGlass ? "glass={true}" : "glass={false}"}
                  color={drawerGlass ? "primary" : "default"}
                  size="small"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Active Mode:
                </Typography>
                <Chip label={mode.toUpperCase()} size="small" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Backdrop Blur:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {drawerGlass ? "32px saturate(180%)" : "None (Solid Surface)"}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Notifications
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <Bell size={18} opacity={0.7} />
              <Typography variant="body2">
                Drawer styles synchronized cleanly
              </Typography>
            </Box>

            <Box sx={{ mt: "auto", pt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setRightDrawerOpen(false)}
              >
                Close Panel
              </Button>
            </Box>
          </Box>
        </Drawer>

        {/* Left Drawer */}
        <Drawer
          anchor="left"
          glass={drawerGlass}
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
        >
          <Box sx={{ width: 280, p: 3, height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Navigation Sheet
              </Typography>
              <IconButton onClick={() => setLeftDrawerOpen(false)} size="small">
                <X size={18} />
              </IconButton>
            </Box>
            <List sx={{ pt: 0 }}>
              {[
                "Dashboard Overview",
                "Design System Tokens",
                "Glass Primitives",
                "Settings",
              ].map((text) => (
                <ListItem key={text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => setLeftDrawerOpen(false)}
                    sx={{ borderRadius: "8px" }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Top Drawer */}
        <Drawer
          anchor="top"
          glass={drawerGlass}
          open={topDrawerOpen}
          onClose={() => setTopDrawerOpen(false)}
        >
          <Box
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: 800,
              mx: "auto",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Sparkles size={24} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Top Specular Banner Sheet
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Demonstrating top anchor corner radii and specular glint lighting.
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setTopDrawerOpen(false)}
            >
              Dismiss
            </Button>
          </Box>
        </Drawer>
      </DemoBlock>
    </ComponentPage>
  );
};

