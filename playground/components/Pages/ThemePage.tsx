import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Card,
  Stack,
  TextField,
  Alert,
} from "@mui/material";
import {
  Moon,
  Sun,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { GlassThemeScope } from "../../../src/providers/GlassThemeScope.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const ThemePage: React.FC = () => {
  const { resolvedMode, setGlassMode } = useGlassMode();
  const isDark = resolvedMode === "dark";

  // State for interactive scope demo
  const [forcedMode, setForcedMode] = useState<"dark" | "light">("dark");

  return (
    <ComponentPage
      title="Theme Setup & GlassThemeScope"
      description="Learn how to configure global dark/light glass mode using JivicoGlassProvider, how to use components without setup, and how to isolate subtrees with GlassThemeScope."
      category="Overview"
      badges={[
        "JivicoGlassProvider",
        "<GlassThemeScope>",
        "Zero-Setup Standalone",
        "Material-UI v9",
      ]}
    >
      {/* 1. Global Theme Switcher & Status Banner */}
      <Box
        sx={{
          p: 3,
          mb: 4,
          borderRadius: "20px",
          bgcolor: isDark
            ? "rgba(255, 255, 255, 0.04)"
            : "rgba(17, 17, 17, 0.03)",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(17, 17, 17, 0.1)"
          }`,
          backdropFilter: "blur(16px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              bgcolor: isDark
                ? "rgba(168, 85, 247, 0.2)"
                : "rgba(99, 102, 241, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? "#C084FC" : "#6366F1",
            }}
          >
            {isDark ? <Moon size={22} /> : <Sun size={22} />}
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              Active Playground Theme: {resolvedMode.toUpperCase()}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mt: 0.5, display: "block" }}
            >
              Toggle the global playground theme to see how both global app providers and local theme scopes respond.
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button
            size="small"
            variant={resolvedMode === "light" ? "contained" : "outlined"}
            onClick={() => setGlassMode("light")}
            startIcon={<Sun size={15} />}
          >
            Switch App to Light
          </Button>
          <Button
            size="small"
            variant={resolvedMode === "dark" ? "contained" : "outlined"}
            onClick={() => setGlassMode("dark")}
            startIcon={<Moon size={15} />}
          >
            Switch App to Dark
          </Button>
        </Stack>
      </Box>

      {/* 2. Global Provider Setup */}
      <DemoBlock
        id="global-provider-setup"
        title="1. Standard Global Theme Setup (JivicoGlassProvider)"
        description="Wrap your root component with JivicoGlassProvider. This configures MUI's ThemeProvider, enables smooth CSS transitions, and injects glassmorphic surface overrides automatically."
        code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { JivicoGlassProvider } from 'jivico-glass-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JivicoGlassProvider defaultMode="system">
      <App />
    </JivicoGlassProvider>
  </React.StrictMode>
);`}
      >
        <Alert severity="info" sx={{ borderRadius: "14px", mb: 2 }}>
          <code>JivicoGlassProvider</code> accepts <code>defaultMode="system" | "light" | "dark"</code> and automatically persists theme preference in local storage.
        </Alert>
      </DemoBlock>

      {/* 3. Zero Setup Standalone Components */}
      <DemoBlock
        id="standalone-no-setup"
        title="2. Using Without Global Theme Setup (Standalone / Custom Theme)"
        description="Don't want to use JivicoGlassProvider? You can import JivicoGlassTheme directly into any existing MUI ThemeProvider, or wrap specific sections with GlassThemeScope."
        code={`import { ThemeProvider } from '@mui/material/styles';
import { JivicoGlassTheme, GlassThemeScope } from 'jivico-glass-ui';

// Option A: Use JivicoGlassTheme directly in standard MUI ThemeProvider
const myDarkTheme = JivicoGlassTheme("dark");

function CustomApp() {
  return (
    <ThemeProvider theme={myDarkTheme}>
      {/* Existing application */}
    </ThemeProvider>
  );
}

// Option B: Wrap only specific sections without touching app root
function SpecificPage() {
  return (
    <GlassThemeScope mode="dark">
      {/* Isolated Glass Section */}
    </GlassThemeScope>
  );
}`}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "16px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          }}
        >
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Zap size={18} color="#EAB308" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Zero Code Duplication & Zero Lock-in
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.88rem" }}>
              Because Jivico Glass UI is built directly on native Material-UI v9 theme overrides, all components are standard MUI elements. No wrapper boilerplate required.
            </Typography>
          </Stack>
        </Paper>
      </DemoBlock>

      {/* 4. Side-by-Side Comparison: Global vs Scoped */}
      <DemoBlock
        id="side-by-side-comparison"
        title="3. Nested Theme Scopes (GlassThemeScope)"
        description="Need a table, modal, or dashboard card to strictly stay in Dark Mode while the user browses in Light Mode? Wrap it in <GlassThemeScope mode='dark'>."
        code={`import { GlassThemeScope } from 'jivico-glass-ui';
import { Card, Button, Chip } from '@mui/material';

// Force Dark Mode on a specific container/card
<GlassThemeScope mode="dark">
  <Card variant="glass">
    <Button color="accent">Scoped Dark Button</Button>
  </Card>
</GlassThemeScope>

// Force Light Mode on another container/card
<GlassThemeScope mode="light">
  <Card variant="outlined">
    <Button color="primary">Scoped Light Button</Button>
  </Card>
</GlassThemeScope>`}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ width: "100%" }}
        >
          {/* Left: Forced Dark Scope Card */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#A855F7",
                mb: 1,
                display: "block",
              }}
            >
              1. Scoped Dark Mode (&lt;GlassThemeScope mode="dark"&gt;)
            </Typography>
            <GlassThemeScope mode="dark">
              <Card
                color="glass"
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "rgba(18, 18, 20, 0.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
                  color: "#FFFFFF",
                }}
              >
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <Lock size={18} color="#C084FC" />
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, color: "#FFFFFF" }}
                      >
                        Always Dark Glass Card
                      </Typography>
                    </Stack>
                    <Chip label="Forced Dark" size="small" color="accent" />
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    All child MUI components (Buttons, Inputs, Text) inherit
                    full dark mode color rules, borders, and typography.
                  </Typography>
                  <TextField
                    size="small"
                    placeholder="Dark scoped text input..."
                    fullWidth
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="accent" size="small">
                      Accent Action
                    </Button>
                    <Button variant="outlined" color="primary" size="small">
                      Outlined Action
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </GlassThemeScope>
          </Box>

          {/* Right: Forced Light Scope Card */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6366F1",
                mb: 1,
                display: "block",
              }}
            >
              2. Scoped Light Mode (&lt;GlassThemeScope mode="light"&gt;)
            </Typography>
            <GlassThemeScope mode="light">
              <Card
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 17, 17, 0.12)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  color: "#111111",
                }}
              >
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <Sun size={18} color="#4F46E5" />
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, color: "#111111" }}
                      >
                        Always Light Card
                      </Typography>
                    </Stack>
                    <Chip label="Forced Light" size="small" color="primary" />
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(17, 17, 17, 0.7)", fontSize: "0.85rem" }}
                  >
                    Ideal for printable reports, light embedded widgets, or
                    clean daytime preview containers.
                  </Typography>
                  <TextField
                    size="small"
                    placeholder="Light scoped text input..."
                    fullWidth
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" size="small">
                      Primary Action
                    </Button>
                    <Button variant="outlined" color="secondary" size="small">
                      Secondary Action
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </GlassThemeScope>
          </Box>
        </Stack>
      </DemoBlock>

      {/* 5. Forced Dark Mode Table Spotlight */}
      <DemoBlock
        id="forced-dark-table"
        title="4. Scoped Glass Table (&lt;GlassThemeScope mode='dark'&gt;)"
        description="Wrap complex tables with `<GlassThemeScope mode='dark'>` to render dark frosted glass headers, rows, and accents across your application."
        code={`<GlassThemeScope mode="dark">
  <TableContainer variant="glass">
    <Table color="accent">
      <TableHead>
        <TableRow>
          <TableCell>Metric</TableCell>
          <TableCell align="right">Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Performance</TableCell>
          <TableCell align="right">99.8%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</GlassThemeScope>`}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 2.5, sm: 4 },
            borderRadius: "24px",
            overflow: "hidden",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Ambient Purple Glow */}
          <Box
            sx={{
              position: "absolute",
              top: -40,
              left: -40,
              width: 250,
              height: 250,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <GlassThemeScope mode="dark">
            <TableContainer
              data-glass="true"
              sx={{ position: "relative", zIndex: 2, borderRadius: "18px" }}
            >
              <Table variant="glass" color="accent">
                <TableHead>
                  <TableRow>
                    <TableCell>Scoped Feature</TableCell>
                    <TableCell>Theme Status</TableCell>
                    <TableCell align="right">Performance</TableCell>
                    <TableCell align="center">Scope Active</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow selected>
                    <TableCell sx={{ fontWeight: 700 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                      >
                        <ShieldCheck size={18} color="#A855F7" />
                        <span>Forced Dark Table Container</span>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label="Forced Dark Scope"
                        color="accent"
                        size="small"
                        sx={{ height: 20, fontSize: "0.65rem" }}
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      0.2ms
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        icon={<CheckCircle2 size={12} />}
                        label="Active"
                        color="success"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>
                      Subcomponent Styling
                    </TableCell>
                    <TableCell>TableHead, TableCell & Chips Scoped</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      0.1ms
                    </TableCell>
                    <TableCell align="center">
                      <Chip label="Isolated" size="small" variant="outlined" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </GlassThemeScope>
        </Box>
      </DemoBlock>

      {/* 6. Interactive Scope Target Toggle */}
      <DemoBlock
        id="interactive-scope"
        title="5. Interactive Scope Mode Toggle"
        description="Test how changing `<GlassThemeScope mode={mode}>` dynamically toggles the child subtree between Dark and Light mode live."
        code={`const [scopeMode, setScopeMode] = useState<'dark' | 'light'>('${forcedMode}');

<GlassThemeScope mode={scopeMode}>
  <Paper sx={{ p: 3, borderRadius: '20px' }}>
    <Typography variant="h6">Target Mode: {scopeMode}</Typography>
    <Button color="primary">Dynamic Scope Action</Button>
  </Paper>
</GlassThemeScope>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Select Scope Target Mode:
            </Typography>
            <Button
              variant={forcedMode === "dark" ? "contained" : "outlined"}
              color="accent"
              size="small"
              onClick={() => setForcedMode("dark")}
              startIcon={<Moon size={15} />}
            >
              Force Dark Scope
            </Button>
            <Button
              variant={forcedMode === "light" ? "contained" : "outlined"}
              color="primary"
              size="small"
              onClick={() => setForcedMode("light")}
              startIcon={<Sun size={15} />}
            >
              Force Light Scope
            </Button>
          </Stack>

          <Box sx={{ width: "100%", maxWidth: 520 }}>
            <GlassThemeScope mode={forcedMode}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor:
                    forcedMode === "dark"
                      ? "rgba(24, 24, 27, 0.95)"
                      : "#FFFFFF",
                  color: forcedMode === "dark" ? "#F5F5F7" : "#111111",
                  border: `1px solid ${
                    forcedMode === "dark"
                      ? "rgba(255, 255, 255, 0.12)"
                      : "rgba(0, 0, 0, 0.12)"
                  }`,
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <Layers
                        size={20}
                        color={forcedMode === "dark" ? "#A855F7" : "#6366F1"}
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontSize: "1.05rem" }}
                      >
                        Scope Target: {forcedMode.toUpperCase()}
                      </Typography>
                    </Stack>
                    <Chip
                      label={forcedMode.toUpperCase()}
                      color={forcedMode === "dark" ? "accent" : "primary"}
                      size="small"
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.85, fontSize: "0.88rem" }}
                  >
                    This container is dynamically scoped to{" "}
                    <strong>{forcedMode.toUpperCase()} MODE</strong>. Toggling
                    the global app header theme leaves this target intact!
                  </Typography>

                  <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                    <Button variant="contained" color="primary" size="small">
                      Primary Action
                    </Button>
                    <Button variant="outlined" color="accent" size="small">
                      Secondary Accent
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </GlassThemeScope>
          </Box>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
