import React from "react";
import { Box, Typography, Card, CardContent, Divider, Button } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { GradientText } from "../../../src/components/index.js";
import { useThemeMode } from "../../../src/context/ThemeContext.js";
import { ArrowRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

export const OverviewPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const brandColors = [
    {
      name: "Charcoal",
      hex: "#111111",
      role: "Primary bold element in Light Mode; background anchor in Dark Mode.",
      textDark: "#FFFFFF",
      border: false,
    },
    {
      name: "Cream",
      hex: "#F6F5F2",
      role: "Primary high-contrast element in Dark Mode; base light surface.",
      textDark: "#111111",
      border: true,
    },
    {
      name: "Sand",
      hex: "#D9D9CF",
      role: "Warm secondary tone used in segmented control tracks and pill borders.",
      textDark: "#111111",
      border: true,
    },
    {
      name: "Stone",
      hex: "#686868",
      role: "Neutral text and icon accents for unselected states and subtle metadata.",
      textDark: "#FFFFFF",
      border: false,
    },
  ];

  const installCode = `npm install @mui/material @emotion/react @emotion/styled lucide-react
# Install Jivico Glass UI
npm install github:Jivico-Group/jivico-glass-ui`;

  const setupCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { JivicoThemeProvider } from 'jivico-glass-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JivicoThemeProvider defaultMode="system">
      <App />
    </JivicoThemeProvider>
  </React.StrictMode>
);`;

  return (
    <ComponentPage
      title="Overview & Brand Kit"
      description="Jivico Glass UI combines Apple precision with Google Antigravity physics to deliver a luxury frosted glassmorphic design system for React and Material-UI v9."
      category="Getting Started"
      badges={["Design System", "Brand Kit", "v0.1.1"]}
    >
      {/* Hero Banner */}
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          mb: 5,
          borderRadius: "20px",
          background: isDark
            ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(246,245,242,0.6) 100%)",
          border: `1px solid ${
            isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.08)"
          }`,
          backdropFilter: "blur(20px)",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: "block",
            letterSpacing: "0.1em",
            fontWeight: 700,
            color: "text.secondary",
            mb: 1,
          }}
        >
          BOLD IDEAS. TIMELESS STYLE.
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 2 }}
        >
          Welcome to <GradientText isDark={isDark}>Jivico Glass UI</GradientText>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "700px", lineHeight: 1.7, mb: 3 }}
        >
          A comprehensive design system providing frosted glassmorphic overrides for
          MUI Buttons, Chips, Tabs, Inputs, Switches, and Data Display components,
          tailored to modern luxury aesthetic standards.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowRight size={16} />}
            href="#buttons"
          >
            Explore Buttons
          </Button>
          <Button
            variant="outlined"
            color="glass"
            href="#chips"
          >
            Explore Chips
          </Button>
        </Box>
      </Box>

      {/* Brand Kit Color Palette */}
      <Box id="brand-kit" sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Brand Kit Color Palette
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Our monochrome aesthetic is built around 4 carefully calibrated shades:
          Charcoal, Cream, Sand, and Stone.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2.5,
          }}
        >
          {brandColors.map((c) => (
            <Card
              key={c.name}
              elevation={0}
              sx={{
                borderRadius: "16px",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                }`,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Box
                sx={{
                  height: 90,
                  bgcolor: c.hex,
                  borderRadius: "15px 15px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: c.border
                    ? `1px solid ${
                        isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)"
                      }`
                    : "none",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: c.textDark,
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.hex}
                </Typography>
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {c.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.78rem", mt: 0.5 }}>
                  {c.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Quick Start Installation */}
      <DemoBlock
        id="installation"
        title="Installation"
        description="Install peer dependencies and reference the Jivico Glass UI package."
        code={installCode}
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Install the library via npm from the official GitHub repository:
          </Typography>
          <Box
            component="code"
            sx={{
              display: "block",
              mt: 1.5,
              p: 1.5,
              borderRadius: "8px",
              bgcolor: isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.04)",
              fontFamily: "monospace",
              fontSize: "0.82rem",
            }}
          >
            npm install github:Jivico-Group/jivico-glass-ui
          </Box>
        </Box>
      </DemoBlock>

      {/* Setup ThemeProvider */}
      <DemoBlock
        id="setup"
        title="Usage with JivicoThemeProvider"
        description="Wrap your root application with JivicoThemeProvider to automatically inject all glassmorphism overrides and dynamic dark/light switching."
        code={setupCode}
      >
        <Box sx={{ width: "100%", py: 1 }}>
          <Typography variant="body2" color="text.secondary">
            The provider seamlessly integrates with MUI ThemeProvider, emotion cache, and supports system/light/dark modes.
          </Typography>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
