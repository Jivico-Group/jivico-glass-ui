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
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogsPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  // Dialog States
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);

  // Drawer States
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

  // Form states inside dialog
  const [projectName, setProjectName] = useState("Apple Liquid Design");
  const [visibility, setVisibility] = useState("private");
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <ComponentPage
      title="Dialog & Drawer Overlays"
      description="Frosted glass modal dialogs and slide-out drawers equipped with optical backdrop blur, specular perimeter lighting, and tactile spring transitions."
      category="Surfaces"
      badges={["Modal Overlays", "Liquid Glass", "Bottom Sheet", "MUI v9"]}
    >
      {/* 1. Signature Glass Dialogs */}
      <DemoBlock
        id="confirmation-dialog"
        title="Frosted Glass Confirmation Dialog"
        description="Dialogs feature optical background blur (24px), smooth 24px corner radius, and dimmed backdrop filter to focus user attention."
        code={`// Interactive Glass Dialog
<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Confirm Action</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Are you sure you want to proceed with this operation?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button variant="outlined" color="glass" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
      Confirm
    </Button>
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
            startIcon={<Sparkles size={18} />}
          >
            Open Confirmation Dialog
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setFormOpen(true)}
            startIcon={<Settings size={18} />}
          >
            Open Form Settings Dialog
          </Button>

          <Button
            variant="outlined"
            color="glass"
            size="large"
            onClick={() => setFullScreenOpen(true)}
            startIcon={<Maximize2 size={18} />}
          >
            Open Full-Screen Dialog
          </Button>
        </Box>

        {/* Confirmation Dialog Component */}
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

        {/* Form Settings Dialog */}
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
              Configure your liquid frosted workspace identity and security
              options.
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

        {/* Full-Screen Dialog */}
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
              spring physics, preserving background context through translucent
              navigation headers.
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
                Crafted using Apple Precision design tokens and Google optical
                glassmorphism.
              </Typography>
            </Box>
          </Box>
        </Dialog>
      </DemoBlock>

      {/* 2. Apple Bottom Sheet Drawer */}
      <DemoBlock
        id="bottom-sheet"
        title="Apple Liquid Bottom Sheet Drawer"
        description="Features Apple's signature 28px rounded top corners, centered grabber pill handle, and translucent frosted glass background."
        code={`// Bottom Sheet with Grabber Pill
<Drawer
  anchor="bottom"
  open={open}
  onClose={() => setOpen(false)}
>
  <Box sx={{ p: 3, textAlign: "center" }}>
    {/* Centered Grabber Pill */}
    <Box sx={{ width: 40, height: 4, borderRadius: 2, bgcolor: "rgba(0,0,0,0.2)", mx: "auto", mb: 2 }} />
    <Typography variant="h6">Share Options</Typography>
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
            Open Apple Bottom Sheet
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setRightDrawerOpen(true)}
            startIcon={<ChevronRight size={18} />}
          >
            Open Right Side Panel
          </Button>

          <Button
            variant="outlined"
            color="glass"
            size="large"
            onClick={() => setLeftDrawerOpen(true)}
          >
            Open Left Navigation Drawer
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
            {/* Apple Grabber Pill */}
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
                  30px saturate(180%)
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
