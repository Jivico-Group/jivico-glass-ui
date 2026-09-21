import React from "react";
import { Box, Tooltip, Button, IconButton, Typography, Avatar, Chip } from "@mui/material";
import {
  Sparkles,
  Info,
  HelpCircle,
  Share2,
  Lock,
  Zap,
  Bookmark,
  Bell,
  Sliders,
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
      description="Frosted glass tooltips crafted with Apple saturate backdrop filters, specular perimeter lighting, and smooth directional entrance physics."
      category="Feedback"
      badges={["Tooltips", "Glass Surface", "Backdrop Blur", "Floating Physics"]}
    >
      {/* 1. Glass Spotlight & Variants */}
      <DemoBlock
        id="tooltip-variants"
        title="Visual Variants (Glass, Solid, Tonal, Outlined)"
        description="Tooltips support four distinct visual treatments via the `variant` prop (`variant='glass' | 'solid' | 'tonal' | 'outlined'`)."
        code={`<Tooltip title="Frosted glass tooltip hint" variant="glass">
  <Button variant="contained" color="glass">Glass Variant</Button>
</Tooltip>
<Tooltip title="Solid high-contrast tooltip" variant="solid">
  <Button variant="contained" color="primary">Solid Variant</Button>
</Tooltip>
<Tooltip title="Soft tonal tint tooltip" variant="tonal">
  <Button variant="outlined" color="primary">Tonal Variant</Button>
</Tooltip>
<Tooltip title="Outlined vector border tooltip" variant="outlined">
  <Button variant="outlined" color="glass">Outlined Variant</Button>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
          <Tooltip title="Apple frosted glass backdrop blur with 1px glint border" variant="glass" arrow>
            <Button variant="contained" color="glass" startIcon={<Sparkles size={16} />}>
              Glass Variant (Hover Me)
            </Button>
          </Tooltip>

          <Tooltip title="Solid contrast tooltip for high visibility" variant="solid" arrow>
            <Button variant="contained" color="primary">
              Solid Variant
            </Button>
          </Tooltip>

          <Tooltip title="Tonal soft tint matching primary brand color" variant="tonal" arrow>
            <Button variant="outlined" color="primary">
              Tonal Variant
            </Button>
          </Tooltip>

          <Tooltip title="Outlined thin vector border hint" variant="outlined" arrow>
            <Button variant="outlined" color="glass">
              Outlined Variant
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 2. Color Palette System */}
      <DemoBlock
        id="tooltip-colors"
        title="Color Palette System (Glass, Primary, Secondary, Accent)"
        description="Style tooltips using theme palette colors (`color='glass' | 'primary' | 'secondary' | 'accent'`)."
        code={`<Tooltip title="Glass Frosted Neutral" color="glass">
  <IconButton color="glass"><Info size={18} /></IconButton>
</Tooltip>
<Tooltip title="Primary Charcoal" color="primary">
  <IconButton color="primary"><Zap size={18} /></IconButton>
</Tooltip>
<Tooltip title="Accent Electric Indigo" color="accent">
  <IconButton color="accent"><Sparkles size={18} /></IconButton>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center" }}>
          <Tooltip title="Neutral Glass Surface Tooltip" color="glass" arrow>
            <IconButton color="glass">
              <Info size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Primary Brand Charcoal Tooltip" color="primary" arrow>
            <IconButton color="primary">
              <Zap size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Secondary Surface Tooltip" color="secondary" arrow>
            <IconButton color="secondary">
              <Bookmark size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Accent Electric Indigo Tooltip" color="accent" arrow>
            <IconButton color="accent">
              <Sparkles size={18} />
            </IconButton>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 3. Directional Placements */}
      <DemoBlock
        id="tooltip-placements"
        title="Directional Placements & Arrow Glint"
        description="Tooltips align seamlessly across 4 cardinal sides (top, bottom, left, right) with backdrop-filtered arrows."
        code={`<Tooltip title="Top Placement" placement="top" arrow><Button>Top</Button></Tooltip>
<Tooltip title="Bottom Placement" placement="bottom" arrow><Button>Bottom</Button></Tooltip>
<Tooltip title="Left Placement" placement="left" arrow><Button>Left</Button></Tooltip>
<Tooltip title="Right Placement" placement="right" arrow><Button>Right</Button></Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
          <Tooltip title="Top placement tooltip with frosted arrow" placement="top" variant="glass" arrow>
            <Button variant="outlined" color="glass" size="small">
              Top Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Bottom placement tooltip with frosted arrow" placement="bottom" variant="glass" arrow>
            <Button variant="outlined" color="glass" size="small">
              Bottom Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Left placement tooltip with frosted arrow" placement="left" variant="glass" arrow>
            <Button variant="outlined" color="glass" size="small">
              Left Arrow
            </Button>
          </Tooltip>

          <Tooltip title="Right placement tooltip with frosted arrow" placement="right" variant="glass" arrow>
            <Button variant="outlined" color="glass" size="small">
              Right Arrow
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>

      {/* 4. Rich Custom HTML Content Tooltip */}
      <DemoBlock
        id="tooltip-rich-content"
        title="Rich Card & Interactive Tooltips"
        description="Tooltips accept arbitrary JSX children to render user profiles, shortcuts, or multi-line metadata cards inside frosted glass popovers."
        code={`<Tooltip
  variant="glass"
  arrow
  title={
    <Box sx={{ p: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
      <Avatar src="..." />
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 700 }}>Rahul Nayak</Typography>
        <Typography variant="caption" display="block">Design Engineer</Typography>
      </Box>
    </Box>
  }
>
  <Button variant="contained" color="glass">Hover Profile</Button>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center" }}>
          <Tooltip
            variant="glass"
            arrow
            title={
              <Box sx={{ p: 0.5, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
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
            variant="glass"
            arrow
            title={
              <Box sx={{ p: 0.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                  <Lock size={14} />
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    Hardware Encrypted Session
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ opacity: 0.85, fontSize: "0.72rem" }}>
                  Protected by Apple Secure Enclave hardware passkey.
                </Typography>
              </Box>
            }
          >
            <Button variant="outlined" color="primary" startIcon={<Lock size={16} />}>
              Hover Security Key
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
