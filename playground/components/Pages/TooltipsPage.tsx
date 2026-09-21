import React from "react";
import { Box, Tooltip, Button, IconButton, Typography, Avatar } from "@mui/material";
import {
  Sparkles,
  Info,
  Zap,
  Lock,
  Share2,
  Bookmark,
  ShieldCheck,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const TooltipsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Tooltip & Popover Hints"
      description="Clean floating tooltips supporting simple frosted glass surfaces (`glass={true}`) and standard solid surfaces (`glass={false}`)."
      category="Feedback"
      badges={["Tooltips", "glass prop", "Backdrop Blur", "Placements"]}
    >
      {/* 1. Frosted Glass vs Standard Tooltips */}
      <DemoBlock
        id="glass-tooltip-toggle"
        title="Frosted Glass vs Standard Tooltip (glass prop)"
        description="Toggle the `glass` prop (`<Tooltip glass={true}>` vs `<Tooltip glass={false}>`) to render optical backdrop blur or a clean solid surface overlay."
        code={`// Signature Frosted Glass Tooltip
<Tooltip title="Frosted glass optical 20px blur" glass={true} arrow>
  <Button variant="contained" color="glass">Glass Tooltip (glass=true)</Button>
</Tooltip>

// Standard Solid Surface Tooltip
<Tooltip title="Standard solid surface tooltip" glass={false} arrow>
  <Button variant="contained" color="primary">Standard Tooltip (glass=false)</Button>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center" }}>
          <Tooltip
            title="Frosted glass surface with 20px backdrop blur and specular top glint"
            glass={true}
            arrow
          >
            <Button
              variant="contained"
              color="glass"
              startIcon={<Sparkles size={16} />}
            >
              Frosted Glass Tooltip (glass=true)
            </Button>
          </Tooltip>

          <Tooltip
            title="Standard surface tooltip using solid surface palette"
            glass={false}
            arrow
          >
            <Button variant="contained" color="primary" startIcon={<ShieldCheck size={16} />}>
              Standard Surface Tooltip (glass=false)
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 2. Directional Placements */}
      <DemoBlock
        id="tooltip-placements"
        title="Directional Placements & Arrows"
        description="Tooltips align smoothly across all 4 cardinal directions (top, bottom, left, right) with matching arrows."
        code={`<Tooltip title="Top Placement" placement="top" glass={true} arrow><Button>Top</Button></Tooltip>
<Tooltip title="Bottom Placement" placement="bottom" glass={true} arrow><Button>Bottom</Button></Tooltip>
<Tooltip title="Left Placement" placement="left" glass={true} arrow><Button>Left</Button></Tooltip>
<Tooltip title="Right Placement" placement="right" glass={true} arrow><Button>Right</Button></Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
          <Tooltip title="Top placement frosted tooltip" placement="top" glass={true} arrow>
            <Button variant="outlined" color="glass" size="small">
              Top Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Bottom placement frosted tooltip" placement="bottom" glass={true} arrow>
            <Button variant="outlined" color="glass" size="small">
              Bottom Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Left placement frosted tooltip" placement="left" glass={true} arrow>
            <Button variant="outlined" color="glass" size="small">
              Left Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Right placement frosted tooltip" placement="right" glass={true} arrow>
            <Button variant="outlined" color="glass" size="small">
              Right Arrow
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 3. Icon Triggers */}
      <DemoBlock
        id="tooltip-icon-triggers"
        title="Icon Button Triggers"
        description="Compact tooltips attached to icon triggers for toolbars and app headers."
        code={`<Tooltip title="System Information" glass={true} arrow>
  <IconButton color="glass"><Info size={18} /></IconButton>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center" }}>
          <Tooltip title="System Information" glass={true} arrow>
            <IconButton color="glass">
              <Info size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Quick Action Trigger" glass={true} arrow>
            <IconButton color="primary">
              <Zap size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Bookmark Item" glass={false} arrow>
            <IconButton color="secondary">
              <Bookmark size={18} />
            </IconButton>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 4. Rich Custom HTML Content Tooltip */}
      <DemoBlock
        id="tooltip-rich-content"
        title="Rich Interactive Card Tooltips"
        description="Tooltips accept arbitrary JSX layouts for rendering user profile cards or hardware security details."
        code={`<Tooltip
  glass={true}
  arrow
  title={
    <Box sx={{ p: 0.5, display: 'flex', gap: 1.5, alignItems: 'center' }}>
      <Avatar>RN</Avatar>
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 700 }}>Rahul Nayak</Typography>
        <Typography variant="caption" display="block">Design Engineer</Typography>
      </Box>
    </Box>
  }
>
  <Button variant="contained" color="glass">Hover User Profile</Button>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center" }}>
          <Tooltip
            glass={true}
            arrow
            title={
              <Box sx={{ p: 0.5, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.1)",
                    color: isDark ? "#FFFFFF" : "#111111",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  RN
                </Avatar>
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, display: "block" }}>
                    Rahul Nayak
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8, fontSize: "0.7rem" }}>
                    Design Engineer • Jivico Studio
                  </Typography>
                </Box>
              </Box>
            }
          >
            <Button variant="contained" color="glass" startIcon={<Share2 size={16} />}>
              Hover User Profile
            </Button>
          </Tooltip>

          <Tooltip
            glass={true}
            arrow
            title={
              <Box sx={{ p: 0.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                  <Lock size={14} />
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    Hardware Security Passkey
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ opacity: 0.85, fontSize: "0.72rem" }}>
                  Protected by Apple Secure Enclave hardware key.
                </Typography>
              </Box>
            }
          >
            <Button variant="outlined" color="primary" startIcon={<Lock size={16} />}>
              Hover Security Passkey
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
