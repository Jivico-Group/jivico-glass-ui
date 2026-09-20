import React from "react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Star, Tag, Filter, ChevronRight } from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const ChipsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Chip"
      description="Chips are compact elements that represent an input, attribute, or action. Designed from the official Jivico Brand Kit with signature hollow circle indicators, sleek ✕ delete icons, and custom color='glass' support."
      category="Data Display"
      badges={["Brand Kit", "color='glass'", "24/28/32px"]}
    >
      {/* 1. Frosted Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="✨ New: color='glass' for Chips"
        description="Luxury frosted glassmorphic chips with dynamic blur, specular highlights, and adaptive light/dark mode contrast (#111111 in Light Mode, #F6F5F2 in Dark Mode)."
        code={`<Chip label="Glass Filled" color="glass" onDelete={() => {}} />
<Chip label="Glass Outlined" variant="outlined" color="glass" onDelete={() => {}} />
<Chip label="Glass Tonal" variant="tonal" color="glass" onDelete={() => {}} />
<Chip label="Glass Clickable" color="glass" clickable onDelete={() => {}} />
<Chip icon={<Star size={13} />} label="Glass Star" color="glass" />
<Chip label="Glass Disabled" color="glass" disabled />`}
      >
        <Chip label="Glass Filled" color="glass" onDelete={() => {}} />
        <Chip
          label="Glass Outlined"
          variant="outlined"
          color="glass"
          onDelete={() => {}}
        />
        <Chip
          label="Glass Tonal"
          variant="tonal"
          color="glass"
          onDelete={() => {}}
        />
        <Chip
          label="Glass Clickable"
          color="glass"
          clickable
          onDelete={() => {}}
        />
        <Chip
          icon={<Star size={13} />}
          label="Glass with Icon"
          color="glass"
          onDelete={() => {}}
        />
        <Chip
          avatar={
            <Avatar
              sx={{
                width: 20,
                height: 20,
                fontSize: "0.65rem",
                bgcolor: isDark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(17,17,17,0.15)",
                color: isDark ? "#F6F5F2" : "#111111",
              }}
            >
              GL
            </Avatar>
          }
          label="Glass Avatar"
          color="glass"
          onDelete={() => {}}
        />
        <Chip
          label="Glass Disabled"
          color="glass"
          disabled
          onDelete={() => {}}
        />
      </DemoBlock>

      {/* 2. Chip Types */}
      <DemoBlock
        id="chip-types"
        title="Chip Types"
        description="Filled, outlined, and tonal chips featuring the signature hollow circle indicator and minimalist ✕ delete icon."
        code={`<Chip label="Filled" color="primary" onDelete={() => {}} />
<Chip label="Outlined" variant="outlined" color="primary" onDelete={() => {}} />
<Chip label="Tonal" variant="tonal" color="primary" onDelete={() => {}} />
<Chip label="Deletable" onDelete={() => {}} />
<Chip icon={<Tag size={13} />} label="Clickable" clickable />`}
      >
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
        <Chip label="Glass Filled" color="glass" onDelete={() => {}} />
        <Chip
          label="Glass Outlined"
          variant="outlined"
          color="glass"
          onDelete={() => {}}
        />
        <Chip
          label="Glass Tonal"
          variant="tonal"
          color="glass"
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
          label="Custom Icon"
          color="primary"
          onDelete={() => {}}
        />
      </DemoBlock>

      {/* 3. Sizes */}
      <DemoBlock
        id="sizes"
        title="Sizes — Small (24px), Medium (28px), Large (32px)"
        description="Three standard sizes according to the brand kit specifications."
        code={`<Chip label="Small" size="small" color="primary" onDelete={() => {}} />
<Chip label="Medium" size="medium" color="primary" onDelete={() => {}} />
<Chip label="Large" size="large" color="primary" onDelete={() => {}} />`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Chip
              label="Small Glass"
              size="small"
              color="glass"
              onDelete={() => {}}
            />
            <Chip
              label="Medium Glass"
              size="medium"
              color="glass"
              onDelete={() => {}}
            />
            <Chip
              label="Large Glass"
              size="large"
              color="glass"
              onDelete={() => {}}
            />
          </Box>
        </Box>
      </DemoBlock>

      {/* 4. Color Palette Matrix */}
      <DemoBlock
        id="color-matrix"
        title="Color Palette Matrix"
        description="Comprehensive matrix of colors across Filled, Outlined, and Tonal variants."
        code={`<Chip label="Primary" color="primary" onDelete={() => {}} />
<Chip label="Secondary" color="secondary" onDelete={() => {}} />
<Chip label="Glass" color="glass" onDelete={() => {}} />
<Chip label="Info" color="info" onDelete={() => {}} />
<Chip label="Warning" color="warning" onDelete={() => {}} />
<Chip label="Error" color="error" onDelete={() => {}} />
<Chip label="Success" color="success" onDelete={() => {}} />`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 600, color: "text.secondary" }}
          >
            Filled Default
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            <Chip label="Primary" color="primary" onDelete={() => {}} />
            <Chip label="Secondary" color="secondary" onDelete={() => {}} />
            <Chip label="Glass" color="glass" onDelete={() => {}} />
            <Chip label="Info" color="info" onDelete={() => {}} />
            <Chip label="Warning" color="warning" onDelete={() => {}} />
            <Chip label="Error" color="error" onDelete={() => {}} />
            <Chip label="Success" color="success" onDelete={() => {}} />
          </Box>

          <Typography
            variant="caption"
            sx={{ fontWeight: 600, color: "text.secondary", mt: 1 }}
          >
            Outlined Variant
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
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
              label="Glass"
              color="glass"
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

          <Typography
            variant="caption"
            sx={{ fontWeight: 600, color: "text.secondary", mt: 1 }}
          >
            Tonal Variant
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
              label="Glass"
              color="glass"
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
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
