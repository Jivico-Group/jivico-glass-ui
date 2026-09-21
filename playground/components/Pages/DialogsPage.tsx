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
  Palette,
  Layout,
  Maximize,
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

  // Preset Drawer States
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

  // Interactive Custom Dialog State
  const [customDialogOpen, setCustomDialogOpen] = useState(false);
  const [dialogVariant, setDialogVariant] = useState<"glass" | "solid" | "tonal" | "outlined">("glass");
  const [dialogColor, setDialogColor] = useState<"glass" | "primary" | "secondary" | "accent">("glass");
  const [dialogRadius, setDialogRadius] = useState<"square" | "small" | "medium" | "large" | "rounded" | "pill">("large");
  const [dialogElevation, setDialogElevation] = useState<"none" | "low" | "medium" | "high" | "floating">("floating");
  const [dialogIntensity, setDialogIntensity] = useState<"subtle" | "medium" | "strong" | "ultra">("strong");
  const [dialogBorder, setDialogBorder] = useState<"none" | "subtle" | "strong">("subtle");

  // Interactive Custom Drawer State
  const [customDrawerOpen, setCustomDrawerOpen] = useState(false);
  const [drawerAnchor, setDrawerAnchor] = useState<"bottom" | "top" | "left" | "right">("bottom");
  const [drawerVariant, setDrawerVariant] = useState<"glass" | "solid" | "tonal" | "outlined">("glass");
  const [drawerColor, setDrawerColor] = useState<"glass" | "primary" | "secondary" | "accent">("glass");
  const [drawerRadius, setDrawerRadius] = useState<"square" | "small" | "medium" | "large" | "rounded" | "pill">("rounded");
  const [drawerElevation, setDrawerElevation] = useState<"none" | "low" | "medium" | "high" | "floating">("floating");
  const [drawerIntensity, setDrawerIntensity] = useState<"subtle" | "medium" | "strong" | "ultra">("strong");
  const [drawerBorder, setDrawerBorder] = useState<"none" | "subtle" | "strong">("subtle");

  // Form states inside dialog
  const [projectName, setProjectName] = useState("Apple Liquid Design");
  const [visibility, setVisibility] = useState("private");
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <ComponentPage
      title="Dialog & Drawer Overlays"
      description="Frosted glass modal dialogs and slide-out drawers equipped with optical backdrop blur, specular perimeter lighting, and custom style controls."
      category="Surfaces"
      badges={["Modal Overlays", "Liquid Glass", "Bottom Sheet", "Custom Props"]}
    >
      {/* 1. Interactive Custom Dialog Configurator */}
      <DemoBlock
        id="interactive-dialog"
        title="Interactive Dialog Configurator"
        description="Configure `variant`, `color`, `radius`, `elevation`, `glassIntensity`, and `border` props live on the Dialog component."
        code={`<Dialog
  open={open}
  variant="${dialogVariant}"
  color="${dialogColor}"
  radius="${dialogRadius}"
  elevation="${dialogElevation}"
  glassIntensity="${dialogIntensity}"
  border="${dialogBorder}"
>
  <DialogTitle>Interactive Glass Modal</DialogTitle>
  <DialogContent>Configure all theme props live.</DialogContent>
  <DialogActions>
    <Button color="${dialogColor}">Confirm</Button>
  </DialogActions>
</Dialog>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 2,
            }}
          >
            <FormControl fullWidth size="small">
              <InputLabel>Variant</InputLabel>
              <Select
                value={dialogVariant}
                label="Variant"
                onChange={(e) => setDialogVariant(e.target.value as any)}
              >
                <MenuItem value="glass">Glass (Frosted)</MenuItem>
                <MenuItem value="solid">Solid (Palette Fill)</MenuItem>
                <MenuItem value="tonal">Tonal (Soft Tint)</MenuItem>
                <MenuItem value="outlined">Outlined</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Color Identity</InputLabel>
              <Select
                value={dialogColor}
                label="Color Identity"
                onChange={(e) => setDialogColor(e.target.value as any)}
              >
                <MenuItem value="glass">Glass Surface</MenuItem>
                <MenuItem value="primary">Primary Brand</MenuItem>
                <MenuItem value="secondary">Secondary Neutral</MenuItem>
                <MenuItem value="accent">Accent Electric Indigo</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Corner Radius</InputLabel>
              <Select
                value={dialogRadius}
                label="Corner Radius"
                onChange={(e) => setDialogRadius(e.target.value as any)}
              >
                <MenuItem value="square">Square (0px)</MenuItem>
                <MenuItem value="small">Small (12px)</MenuItem>
                <MenuItem value="medium">Medium (18px)</MenuItem>
                <MenuItem value="large">Large (24px)</MenuItem>
                <MenuItem value="rounded">Rounded (32px)</MenuItem>
                <MenuItem value="pill">Pill (48px)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Elevation Depth</InputLabel>
              <Select
                value={dialogElevation}
                label="Elevation Depth"
                onChange={(e) => setDialogElevation(e.target.value as any)}
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="low">Low (8px)</MenuItem>
                <MenuItem value="medium">Medium (16px)</MenuItem>
                <MenuItem value="high">High (24px)</MenuItem>
                <MenuItem value="floating">Floating (32px)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Glass Intensity</InputLabel>
              <Select
                value={dialogIntensity}
                label="Glass Intensity"
                onChange={(e) => setDialogIntensity(e.target.value as any)}
              >
                <MenuItem value="subtle">Subtle (12px blur)</MenuItem>
                <MenuItem value="medium">Medium (20px blur)</MenuItem>
                <MenuItem value="strong">Strong (32px blur)</MenuItem>
                <MenuItem value="ultra">Ultra (48px blur)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Border Strength</InputLabel>
              <Select
                value={dialogBorder}
                label="Border Strength"
                onChange={(e) => setDialogBorder(e.target.value as any)}
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="subtle">Subtle Specular</MenuItem>
                <MenuItem value="strong">Strong Palette Border</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color={dialogColor === "glass" ? "glass" : dialogColor}
              size="large"
              onClick={() => setCustomDialogOpen(true)}
              startIcon={<Sparkles size={18} />}
            >
              Open Custom Configured Dialog
            </Button>
          </Box>
        </Box>

        {/* Custom Configured Dialog */}
        <Dialog
          open={customDialogOpen}
          onClose={() => setCustomDialogOpen(false)}
          variant={dialogVariant}
          color={dialogColor}
          radius={dialogRadius}
          elevation={dialogElevation}
          glassIntensity={dialogIntensity}
          border={dialogBorder}
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
              Configured Dialog
            </DialogTitle>
            <IconButton onClick={() => setCustomDialogOpen(false)} size="small">
              <X size={18} />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText sx={{ pt: 1 }}>
              Currently rendered with <strong>{dialogVariant}</strong> variant,{" "}
              <strong>{dialogColor}</strong> color identity,{" "}
              <strong>{dialogRadius}</strong> radius, and{" "}
              <strong>{dialogIntensity}</strong> glass blur intensity.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="glass"
              onClick={() => setCustomDialogOpen(false)}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color={dialogColor === "glass" ? "primary" : dialogColor}
              onClick={() => setCustomDialogOpen(false)}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </DemoBlock>

      {/* 2. Interactive Custom Drawer Configurator */}
      <DemoBlock
        id="interactive-drawer"
        title="Interactive Drawer Configurator"
        description="Test slide-out Drawer styles with custom `anchor`, `drawerVariant`, `color`, `radius`, `glassIntensity`, and `border` controls."
        code={`<Drawer
  open={open}
  anchor="${drawerAnchor}"
  drawerVariant="${drawerVariant}"
  color="${drawerColor}"
  radius="${drawerRadius}"
  glassIntensity="${drawerIntensity}"
  border="${drawerBorder}"
>
  <Box sx={{ p: 3 }}>Interactive Drawer Content</Box>
</Drawer>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 2,
            }}
          >
            <FormControl fullWidth size="small">
              <InputLabel>Anchor Position</InputLabel>
              <Select
                value={drawerAnchor}
                label="Anchor Position"
                onChange={(e) => setDrawerAnchor(e.target.value as any)}
              >
                <MenuItem value="bottom">Bottom (Action Sheet)</MenuItem>
                <MenuItem value="top">Top Banner Sheet</MenuItem>
                <MenuItem value="right">Right Side Inspection</MenuItem>
                <MenuItem value="left">Left Navigation Drawer</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Drawer Variant</InputLabel>
              <Select
                value={drawerVariant}
                label="Drawer Variant"
                onChange={(e) => setDrawerVariant(e.target.value as any)}
              >
                <MenuItem value="glass">Glass (Frosted Blur)</MenuItem>
                <MenuItem value="solid">Solid (Palette Fill)</MenuItem>
                <MenuItem value="tonal">Tonal (Soft Tint)</MenuItem>
                <MenuItem value="outlined">Outlined</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Color Identity</InputLabel>
              <Select
                value={drawerColor}
                label="Color Identity"
                onChange={(e) => setDrawerColor(e.target.value as any)}
              >
                <MenuItem value="glass">Glass Surface</MenuItem>
                <MenuItem value="primary">Primary Brand</MenuItem>
                <MenuItem value="secondary">Secondary Neutral</MenuItem>
                <MenuItem value="accent">Accent Electric Indigo</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Corner Radius</InputLabel>
              <Select
                value={drawerRadius}
                label="Corner Radius"
                onChange={(e) => setDrawerRadius(e.target.value as any)}
              >
                <MenuItem value="square">Square (0px)</MenuItem>
                <MenuItem value="small">Small (12px)</MenuItem>
                <MenuItem value="medium">Medium (18px)</MenuItem>
                <MenuItem value="large">Large (24px)</MenuItem>
                <MenuItem value="rounded">Rounded (28px)</MenuItem>
                <MenuItem value="pill">Pill (40px)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Glass Blur Intensity</InputLabel>
              <Select
                value={drawerIntensity}
                label="Glass Blur Intensity"
                onChange={(e) => setDrawerIntensity(e.target.value as any)}
              >
                <MenuItem value="subtle">Subtle (12px blur)</MenuItem>
                <MenuItem value="medium">Medium (20px blur)</MenuItem>
                <MenuItem value="strong">Strong (32px blur)</MenuItem>
                <MenuItem value="ultra">Ultra (48px blur)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Border Strength</InputLabel>
              <Select
                value={drawerBorder}
                label="Border Strength"
                onChange={(e) => setDrawerBorder(e.target.value as any)}
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="subtle">Subtle Specular</MenuItem>
                <MenuItem value="strong">Strong Palette Border</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color={drawerColor === "glass" ? "glass" : drawerColor}
              size="large"
              onClick={() => setCustomDrawerOpen(true)}
              startIcon={<Layers size={18} />}
            >
              Open Custom Configured Drawer
            </Button>
          </Box>
        </Box>

        {/* Custom Configured Drawer */}
        <Drawer
          anchor={drawerAnchor}
          open={customDrawerOpen}
          onClose={() => setCustomDrawerOpen(false)}
          drawerVariant={drawerVariant}
          color={drawerColor}
          radius={drawerRadius}
          glassIntensity={drawerIntensity}
          border={drawerBorder}
        >
          <Box
            sx={{
              p: 3,
              width: drawerAnchor === "left" || drawerAnchor === "right" ? { xs: 300, sm: 380 } : "100%",
              maxWidth: drawerAnchor === "bottom" || drawerAnchor === "top" ? 600 : "none",
              mx: drawerAnchor === "bottom" || drawerAnchor === "top" ? "auto" : 0,
            }}
          >
            {drawerAnchor === "bottom" && (
              <Box
                sx={{
                  width: 44,
                  height: 5,
                  borderRadius: 3,
                  bgcolor: isDark ? "rgba(255,255,255,0.3)" : "rgba(17,17,17,0.25)",
                  mx: "auto",
                  mb: 2.5,
                }}
              />
            )}

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Configured {drawerAnchor.toUpperCase()} Drawer
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Variant: {drawerVariant} • Color: {drawerColor} • Radius: {drawerRadius}
                </Typography>
              </Box>
              <IconButton onClick={() => setCustomDrawerOpen(false)} size="small">
                <X size={18} />
              </IconButton>
            </Box>

            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              This drawer adapts perimeter borders and corner curves dynamically based on anchor direction (`{drawerAnchor}`).
            </Typography>

            <Button
              variant="contained"
              color={drawerColor === "glass" ? "primary" : drawerColor}
              fullWidth
              onClick={() => setCustomDrawerOpen(false)}
            >
              Close Drawer
            </Button>
          </Box>
        </Drawer>
      </DemoBlock>

      {/* 3. Preset Dialog Showcase */}
      <DemoBlock
        id="confirmation-dialog"
        title="Frosted Glass Dialog Presets"
        description="Pre-configured modal dialogs for common workflows: confirmation actions, multi-input forms, and full-screen workspaces."
        code={`<Dialog open={open} onClose={() => setOpen(false)}>
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

      {/* 4. Drawer Anchors Showcase */}
      <DemoBlock
        id="bottom-sheet"
        title="Apple Liquid Drawers & Action Sheets"
        description="Features Apple's signature 28px rounded top corners on bottom sheets, right-side inspection panels, and left navigation drawers."
        code={`<Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
  <Box sx={{ p: 3 }}>
    <Box sx={{ width: 44, height: 5, borderRadius: 3, bgcolor: "rgba(0,0,0,0.2)", mx: "auto" }} />
    <Typography variant="h6">Action Sheet</Typography>
  </Box>
</Drawer>`}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="glass"
            size="large"
            onClick={() => setBottomSheetOpen(true)}
            startIcon={<Layers size={18} />}
          >
            Apple Bottom Sheet
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setRightDrawerOpen(true)}
            startIcon={<ChevronRight size={18} />}
          >
            Right Side Panel
          </Button>

          <Button
            variant="outlined"
            color="glass"
            size="large"
            onClick={() => setLeftDrawerOpen(true)}
          >
            Left Navigation Drawer
          </Button>
        </Box>

        {/* Bottom Sheet Drawer */}
        <Drawer
          anchor="bottom"
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
                  Apple frosted action sheet
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
              Theme Properties
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}
            >
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
                  32px saturate(180%)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Border Glint:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  1px solid specular
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
                System tokens synced successfully
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
      </DemoBlock>
    </ComponentPage>
  );
};
