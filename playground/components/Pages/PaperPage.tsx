import React from "react";
import { Box, Typography, Paper, Button, Divider, Chip } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Sparkles, Layers, Box as BoxIcon, ExternalLink } from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const PaperPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Paper"
      description="Paper is the foundational surface container in Material Design. In Jivico Glass UI, Paper is customized with flat minimalist borders, rounded corners, and specialized glass footer variants."
      category="Surfaces"
      badges={["Surfaces", "Paper", "Glass Container", "Elevation"]}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          1. Default Flat Paper Surface
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="default-paper"
        title="Flat Paper Surface"
        description="Standard Paper component with default elevation=0, subtle neutral border, and theme-adaptive background."
        code={`<Paper elevation={0} sx={{ p: 3 }}>
  <Typography variant="h6">Standard Paper</Typography>
  <Typography variant="body2">Flat surface container with subtle border.</Typography>
</Paper>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            width: "100%",
          }}
        >
          <Paper elevation={0} sx={{ p: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(17,17,17,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Layers size={18} />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Default Paper Container
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Default elevation={0} removes harsh Material shadows and applies a
              sleek 1px perimeter line with 12px corner radius.
            </Typography>
            <Button size="small" variant="outlined" color="primary">
              Paper Action
            </Button>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, borderRadius: "20px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(17,17,17,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BoxIcon size={18} />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Custom Rounded Paper
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Easily customize corner radius via sx property (e.g. borderRadius:
              '20px') for modern curved layouts.
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="accent"
              startIcon={<Sparkles size={14} />}
            >
              Rounded Panel
            </Button>
          </Paper>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          2. Translucent Glass Paper Container
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="glass-paper"
        title="Frosted Glass Paper Container"
        description="Paper layered over background canvas with backdrop blur, specular edge highlight, and ambient translucency."
        code={`<Paper
  elevation={0}
  sx={{
    p: 3,
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
  }}
>
  <Typography variant="h6">Frosted Glass Surface</Typography>
</Paper>`}
      >
        <Box
          sx={{
            width: "100%",
            p: 4,
            borderRadius: "20px",
            backgroundImage: isDark
              ? "radial-gradient(at 10% 10%, rgba(176, 141, 87, 0.25) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(66, 133, 244, 0.2) 0px, transparent 50%)"
              : "radial-gradient(at 10% 10%, rgba(176, 141, 87, 0.15) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(66, 133, 244, 0.12) 0px, transparent 50%)",
            backgroundColor: isDark ? "#12141A" : "#F4F3EF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: "18px",
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(255, 255, 255, 0.72)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.85)"}`,
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                : "0 6px 24px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Chip label="FROSTED GLASS CANVAS" size="small" color="accent" />
              <Button
                size="small"
                variant="text"
                color="primary"
                endIcon={<ExternalLink size={14} />}
              >
                Details
              </Button>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Liquid Glass Paper Sheet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              High-definition backdrop blur sheet designed for floating modal
              dialogs, drawer panels, and hero section cards.
            </Typography>
          </Paper>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          3. Glass Footer Variant
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="glass-footer-paper"
        title="Glass Footer Variant"
        description="Built-in theme variant variant='glassFooter' for app bar bottom sticky footers with top border."
        code={`<Paper variant="glassFooter" sx={{ px: 3, py: 2 }}>
  <Typography variant="body2">© 2026 Jivico Studio Glass UI</Typography>
</Paper>`}
      >
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            borderRadius: "14px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"}`,
          }}
        >
          <Box
            sx={{
              p: 4,
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Canvas Content Area
            </Typography>
          </Box>
          <Paper
            variant="elevation"
            sx={{
              px: 3,
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              © 2026 Jivico Design System
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button size="small" variant="text" color="primary">
                Privacy Policy
              </Button>
              <Button size="small" variant="text" color="primary">
                Terms of Service
              </Button>
            </Box>
          </Paper>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
