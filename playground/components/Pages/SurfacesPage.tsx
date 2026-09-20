import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { GlassPanel } from "../../../src/components/index.js";
import { Sparkles, Shield, Zap } from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const SurfacesPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Glass Panel & Surfaces"
      description="Glass panels and elevated surface primitives provide high-end backdrop-filter blur, specular perimeter lighting, and layered depth."
      category="Surfaces"
      badges={["Surfaces", "GlassPanel", "Backdrop Blur"]}
    >
      {/* 1. Glass Panel */}
      <DemoBlock
        id="glass-panel"
        title="Glass Panel Container"
        description="The fundamental building block for frosted glass cards, dialogue sheets, and dashboard widgets."
        code={`import { GlassPanel } from 'jivico-glass-ui';

<GlassPanel sx={{ p: 4 }}>
  <Typography variant="h6">Frosted Card</Typography>
  <Typography variant="body2">Backdrop filter with specular edge reflection.</Typography>
</GlassPanel>`}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          <GlassPanel sx={{ p: 3.5, borderRadius: "18px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(17,17,17,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={18} />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1.05rem" }}
              >
                Frosted Glass Card
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
              Dynamic blur with subtle inner specular highlight and responsive
              lighting contrast.
            </Typography>
            <Button variant="contained" color="glass" size="small">
              Explore Action
            </Button>
          </GlassPanel>

          <GlassPanel sx={{ p: 3.5, borderRadius: "18px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(17,17,17,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Shield size={18} />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1.05rem" }}
              >
                Elevated Security
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
              Zero color distortion across dark and light palettes, verified
              across browser engines.
            </Typography>
            <Button variant="outlined" color="primary" size="small">
              Learn More
            </Button>
          </GlassPanel>
        </Box>
      </DemoBlock>

      {/* 2. Standard Paper Surface */}
      <DemoBlock
        id="paper-surface"
        title="MUI Paper Overrides"
        description="Standard MUI Paper components automatically inherit subtle rounded corners and glass surface styling."
        code={`<Paper elevation={0} sx={{ p: 3, borderRadius: "16px" }}>
  <Typography variant="subtitle1">Paper Surface</Typography>
</Paper>`}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            width: "100%",
            borderRadius: "16px",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
            }`,
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
            Subtle Paper Surface
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Seamlessly fits into modern dashboard layouts without harsh opaque
            backgrounds.
          </Typography>
        </Paper>
      </DemoBlock>
    </ComponentPage>
  );
};
