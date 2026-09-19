import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  Autocomplete,
  Switch,
  ButtonGroup,
  Button,
  Chip,
  Tooltip,
  IconButton,
  Divider,
  Alert,
  Avatar,
  Badge,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tabs,
  Tab,
} from "@mui/material";
import { GlassPanel } from "../src/components/index";
import { GradientText } from "../src/components/index";
import { useThemeMode } from "../src/context/ThemeContext";
import {
  ShoppingCart,
  CreditCard,
  CheckCircle2,
  Star,
  ChevronRight,
  Tag,
  Filter,
} from "lucide-react";

// Sun icon (light mode)
function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon icon (dark mode)
function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function App() {
  const [text, setText] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        transition: "background-color 0.35s ease",
      }}
    >
      {/* ── AppBar ────────────────────────────────────────────────── */}
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            <GradientText isDark={isDark}>JIVICO</GradientText>
            <Box
              component="span"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                ml: 1,
                fontSize: "0.65em",
                letterSpacing: "0.18em",
              }}
            >
              STUDIO
            </Box>
          </Typography>

          {/* Theme Toggle — icon-only circular button */}
          <Tooltip
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            arrow
            placement="bottom-end"
          >
            <Box
              onClick={toggleTheme}
              role="button"
              aria-label="Toggle theme"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1.5px solid",
                borderColor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(17,17,17,0.18)",
                color: "text.primary",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16,1,0.3,1)",
                "&:hover": {
                  borderColor: isDark
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(17,17,17,0.5)",
                  transform: "scale(1.08)",
                  boxShadow: isDark
                    ? "0 0 12px rgba(255,255,255,0.12)"
                    : "0 0 12px rgba(0,0,0,0.1)",
                },
                "&:active": { transform: "scale(0.95)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease",
                  transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
                }}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </Box>
            </Box>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* ── Page Body ─────────────────────────────────────────────── */}
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            <GradientText isDark={isDark}>Glass UI</GradientText> Playground
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"} — toggle in the
            top-right corner
          </Typography>
        </Box>

        {/* ── Chips ─────────────────────────────────────────────────── */}
        <GlassPanel>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Chips (Brand Kit Design System)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hollow circle indicator before label, sleek ✕ delete icon, tonal
                & outlined variants, 24px / 28px / 32px
              </Typography>
            </Box>
          </Box>

          {/* 1. CHIP TYPES */}
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "block",
              letterSpacing: "0.08em",
              fontWeight: 700,
            }}
          >
            Chip Types
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
            <Chip label="Filled" color="primary" onDelete={() => {}} />
            <Chip
              label="Outlined"
              variant="outlined"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Tonal"
              variant="tonal"
              color="primary"
              onDelete={() => {}}
            />
            <Chip label="Deletable" onDelete={() => {}} />
            <Chip
              icon={<Tag size={13} />}
              label="Clickable"
              clickable
              deleteIcon={<ChevronRight size={13} />}
              onDelete={() => {}}
            />
            <Chip
              icon={<Filter size={13} />}
              label="Filter"
              clickable
              deleteIcon={<ChevronRight size={13} />}
              onDelete={() => {}}
            />
            <Chip
              avatar={
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    fontSize: "0.65rem",
                    bgcolor: isDark ? "#F6F5F2" : "#111111",
                    color: isDark ? "#111111" : "#FFFFFF",
                  }}
                >
                  JD
                </Avatar>
              }
              label="Avatar"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="With Custom Icon"
              color="primary"
              onDelete={() => {}}
            />
          </Box>

          {/* 2. CHIP SIZES */}
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "block",
              letterSpacing: "0.08em",
              fontWeight: 700,
            }}
          >
            Chip Sizes — Small (24px), Medium (28px), Large (32px)
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              mb: 4,
            }}
          >
            <Chip
              label="Small (24px)"
              size="small"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Medium (28px)"
              size="medium"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Large (32px)"
              size="large"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Small Outlined"
              size="small"
              variant="outlined"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Medium Outlined"
              size="medium"
              variant="outlined"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Large Outlined"
              size="large"
              variant="outlined"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Small Tonal"
              size="small"
              variant="tonal"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Medium Tonal"
              size="medium"
              variant="tonal"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              label="Large Tonal"
              size="large"
              variant="tonal"
              color="primary"
              onDelete={() => {}}
            />
          </Box>

          {/* 3. COLOR PALETTE MATRIX (Brand Kit) */}
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "block",
              letterSpacing: "0.08em",
              fontWeight: 700,
            }}
          >
            Color Palette & States (Primary, Secondary, Info, Warning, Error,
            Success)
          </Typography>

          {/* Filled Default */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            Filled Default
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
            <Chip label="Primary" color="primary" onDelete={() => {}} />
            <Chip label="Secondary" color="secondary" onDelete={() => {}} />
            <Chip label="Info" color="info" onDelete={() => {}} />
            <Chip label="Warning" color="warning" onDelete={() => {}} />
            <Chip label="Error" color="error" onDelete={() => {}} />
            <Chip label="Success" color="success" onDelete={() => {}} />
          </Box>

          {/* Clickable / Interactive */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            Clickable (Hover & Active States)
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
            <Chip
              label="Primary"
              color="primary"
              clickable
              onDelete={() => {}}
            />
            <Chip
              label="Secondary"
              color="secondary"
              clickable
              onDelete={() => {}}
            />
            <Chip label="Info" color="info" clickable onDelete={() => {}} />
            <Chip
              label="Warning"
              color="warning"
              clickable
              onDelete={() => {}}
            />
            <Chip label="Error" color="error" clickable onDelete={() => {}} />
            <Chip
              label="Success"
              color="success"
              clickable
              onDelete={() => {}}
            />
          </Box>

          {/* Disabled */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            Disabled State
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
            <Chip
              label="Primary"
              color="primary"
              disabled
              onDelete={() => {}}
            />
            <Chip
              label="Secondary"
              color="secondary"
              disabled
              onDelete={() => {}}
            />
            <Chip label="Info" color="info" disabled onDelete={() => {}} />
            <Chip
              label="Warning"
              color="warning"
              disabled
              onDelete={() => {}}
            />
            <Chip label="Error" color="error" disabled onDelete={() => {}} />
            <Chip
              label="Success"
              color="success"
              disabled
              onDelete={() => {}}
            />
          </Box>

          {/* With Custom Leading Icon */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            With Custom Leading Icon (Replaces Circle Indicator)
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
            <Chip
              icon={<Star size={13} />}
              label="Primary"
              color="primary"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="Secondary"
              color="secondary"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="Info"
              color="info"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="Warning"
              color="warning"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="Error"
              color="error"
              onDelete={() => {}}
            />
            <Chip
              icon={<Star size={13} />}
              label="Success"
              color="success"
              onDelete={() => {}}
            />
          </Box>

          {/* Outlined */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            Outlined Variant
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2.5 }}>
            <Chip
              label="Primary"
              color="primary"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Secondary"
              color="secondary"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Info"
              color="info"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Warning"
              color="warning"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Error"
              color="error"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Success"
              color="success"
              variant="outlined"
              onDelete={() => {}}
            />
          </Box>

          {/* Tonal */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1, fontWeight: 600 }}
          >
            Tonal Variant (Soft Background Chip)
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            <Chip
              label="Primary"
              color="primary"
              variant="tonal"
              onDelete={() => {}}
            />
            <Chip
              label="Secondary"
              color="secondary"
              variant="tonal"
              onDelete={() => {}}
            />
            <Chip
              label="Info"
              color="info"
              variant="tonal"
              onDelete={() => {}}
            />
            <Chip
              label="Warning"
              color="warning"
              variant="tonal"
              onDelete={() => {}}
            />
            <Chip
              label="Error"
              color="error"
              variant="tonal"
              onDelete={() => {}}
            />
            <Chip
              label="Success"
              color="success"
              variant="tonal"
              onDelete={() => {}}
            />
          </Box>
        </GlassPanel>

        {/* ── Switches ──────────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Switches
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Switch defaultChecked />
            <Switch size="small" defaultChecked />
            <Switch />
            <Switch size="small" />
            <Switch disabled />
            <Switch disabled checked />
            <Switch color="success" />
            <Switch color="error" />
            <Switch color="info" />
            <Switch color="warning" />
          </Box>
        </GlassPanel>

        {/* ── Buttons ──────────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Buttons
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* All Buttons Variants */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
                p: 3,
              }}
            >
              {(
                [
                  "primary",
                  "secondary",
                  "info",
                  "warning",
                  "error",
                  "success",
                ] as const
              ).map((color) => (
                <Box
                  key={color}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{
                      textTransform: "capitalize",
                      borderBottom: 1,
                      borderColor: "divider",
                      pb: 0.5,
                    }}
                  >
                    {color}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    {(["contained", "outlined", "text"] as const).map(
                      (variant) => [
                        <Button
                          key={`${variant}-small`}
                          variant={variant}
                          color={color}
                          size="small"
                        >
                          {variant}
                        </Button>,
                        <Button
                          key={`${variant}-medium`}
                          variant={variant}
                          color={color}
                          size="medium"
                        >
                          {variant}
                        </Button>,
                        <Button
                          key={`${variant}-large`}
                          variant={variant}
                          color={color}
                          size="large"
                        >
                          {variant}
                        </Button>,
                      ],
                    )}
                    <Button variant="contained" color={color} disabled>
                      Disabled
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Semantic */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ width: "100%" }}
              >
                Semantic
              </Typography>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
            </Box>

            {/* Groups */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ width: "100%" }}
              >
                Groups - Small
              </Typography>
              <ButtonGroup size="small" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="contained" color="secondary">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined" color="secondary">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="contained" color="success">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined" color="success">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="contained" color="warning">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined" color="warning">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="contained" color="error">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined" color="error">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="contained" color="info">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined" color="info">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ width: "100%" }}
              >
                Groups - medium
              </Typography>
              <ButtonGroup size="medium" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup size="medium" variant="outlined">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </GlassPanel>

        {/* ── Alerts ───────────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Alerts
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Alert severity="success">
              Your order has been placed successfully.
            </Alert>
            <Alert severity="warning">
              Stock is running low for this item.
            </Alert>
            <Alert severity="error">
              Something went wrong. Please try again.
            </Alert>
            <Alert severity="info">
              New features are available — check them out.
            </Alert>
          </Box>
        </GlassPanel>

        {/* ── Inputs ───────────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Inputs
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 480,
            }}
          >
            <TextField
              size="small"
              label="Small Input"
              placeholder="Type something..."
            />
            <TextField label="Standard Input" placeholder="Type something..." />
            <TextField
              label="Multiline Input"
              placeholder="Multiline test..."
              multiline
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Autocomplete
              multiple
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Studio Originals",
                "Studio Freestyle",
              ]}
              renderInput={(params) => (
                <TextField {...params} label="Autocomplete" />
              )}
            />
          </Box>
        </GlassPanel>

        {/* ── Typography ───────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Typography Scale
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((v) => (
              <Typography key={v} variant={v}>
                {v.toUpperCase()} — Wear Your Ideas
              </Typography>
            ))}
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">
              Body 1 — Custom Apparel · Streetwear · Print on Demand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body 2 — Custom Apparel · Streetwear · Print on Demand
            </Typography>
            <Typography variant="overline">
              Overline · Brand Label Style
            </Typography>
          </Box>
        </GlassPanel>

        {/* ── Avatars & Badges ─────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Avatars & Badges
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
            >
              J
            </Avatar>
            <Avatar sx={{ bgcolor: "success.main" }}>S</Avatar>
            <Avatar sx={{ bgcolor: "error.main" }}>E</Avatar>
            <Badge badgeContent={4} color="primary">
              <Avatar sx={{ bgcolor: "text.secondary" }}>B</Avatar>
            </Badge>
            <Badge badgeContent={99} color="error">
              <Avatar sx={{ bgcolor: "text.secondary" }}>N</Avatar>
            </Badge>
          </Box>
        </GlassPanel>

        {/* ── Tabs ─────────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Tabs (Segmented Control)
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box>
              <Tabs
                value={tabIndex}
                onChange={(e, v) => setTabIndex(v)}
                aria-label="luxury glass tabs"
              >
                <Tab label="Dashboard" />
                <Tab label="Products" />
                <Tab label="Settings" />
              </Tabs>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ display: "block", mb: 2 }}
              >
                Full Width
              </Typography>
              <Tabs
                value={tabIndex}
                onChange={(e, v) => setTabIndex(v)}
                variant="fullWidth"
              >
                <Tab label="Active" />
                <Tab label="Completed" />
                <Tab label="Canceled" />
              </Tabs>
            </Box>
          </Box>
        </GlassPanel>

        {/* ── Steppers ─────────────────────────────────────── */}
        <GlassPanel>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Steppers
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {/* Horizontal Stepper (Inline Text) */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 2, display: "block" }}
              >
                Horizontal Stepper (Inline Text)
              </Typography>
              <Stepper activeStep={1}>
                <Step>
                  <StepLabel>Design</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Review</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Checkout</StepLabel>
                </Step>
              </Stepper>
            </Box>

            {/* Horizontal Stepper (Text Bottom) */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 2, display: "block" }}
              >
                Horizontal Stepper (Text Bottom)
              </Typography>
              <Stepper activeStep={1} alternativeLabel>
                <Step>
                  <StepLabel>Design</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Review</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Checkout</StepLabel>
                </Step>
              </Stepper>
            </Box>

            {/* Stepper with Custom Icons */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 2, display: "block" }}
              >
                Stepper with Custom Icons
              </Typography>
              <Stepper activeStep={1} alternativeLabel>
                <Step>
                  <StepLabel
                    slots={{
                      stepIcon: (props: any) => (
                        <Box
                          sx={{
                            color:
                              props.active || props.completed
                                ? "text.primary"
                                : "text.secondary",
                            opacity: props.active || props.completed ? 1 : 0.5,
                            display: "flex",
                            filter: props.active
                              ? isDark
                                ? "drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))"
                                : "drop-shadow(0 0 6px rgba(17, 17, 17, 0.15))"
                              : "none",
                          }}
                        >
                          <ShoppingCart size={22} />
                        </Box>
                      ),
                    }}
                  >
                    Cart
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel
                    slots={{
                      stepIcon: (props: any) => (
                        <Box
                          sx={{
                            color:
                              props.active || props.completed
                                ? "text.primary"
                                : "text.secondary",
                            opacity: props.active || props.completed ? 1 : 0.5,
                            display: "flex",
                            filter: props.active
                              ? isDark
                                ? "drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))"
                                : "drop-shadow(0 0 6px rgba(17, 17, 17, 0.15))"
                              : "none",
                          }}
                        >
                          <CreditCard size={22} />
                        </Box>
                      ),
                    }}
                  >
                    Payment
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel
                    slots={{
                      stepIcon: (props: any) => (
                        <Box
                          sx={{
                            color:
                              props.active || props.completed
                                ? "text.primary"
                                : "text.secondary",
                            opacity: props.active || props.completed ? 1 : 0.5,
                            display: "flex",
                            filter: props.active
                              ? isDark
                                ? "drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))"
                                : "drop-shadow(0 0 6px rgba(17, 17, 17, 0.15))"
                              : "none",
                          }}
                        >
                          <CheckCircle2 size={22} />
                        </Box>
                      ),
                    }}
                  >
                    Confirmation
                  </StepLabel>
                </Step>
              </Stepper>
            </Box>

            {/* Vertical Stepper */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 2, display: "block" }}
              >
                Vertical Stepper
              </Typography>
              <Stepper activeStep={2} orientation="vertical">
                <Step>
                  <StepLabel>Select Product</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary">
                      Choose a blank product to customize.
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Upload Graphics</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary">
                      Upload your custom designs.
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Finalize</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary">
                      Review and confirm your order.
                    </Typography>
                  </StepContent>
                </Step>
              </Stepper>
            </Box>

            {/* Stepper with Error/Alternative State */}
            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 2, display: "block" }}
              >
                Stepper with Error State
              </Typography>
              <Stepper activeStep={1}>
                <Step>
                  <StepLabel>Cart</StepLabel>
                </Step>
                <Step>
                  <StepLabel error>Payment Failed</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Confirmation</StepLabel>
                </Step>
              </Stepper>
            </Box>
          </Box>
        </GlassPanel>
      </Box>
    </Box>
  );
}
