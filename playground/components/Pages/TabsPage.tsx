import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Divider } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

export const TabsPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const [compactTab, setCompactTab] = useState(2); // Settings selected by default
  const [fullTab, setFullTab] = useState(2); // Canceled selected by default
  const [glassTab, setGlassTab] = useState(1);

  return (
    <ComponentPage
      title="Tabs (Segmented Control)"
      description="Segmented controls organize content across different screens, data sets, and other interactions. Designed with a fully rounded capsule pill track and an animated floating pill indicator matching the official Jivico Brand Kit."
      category="Navigation"
      badges={["Brand Kit", "Segmented Control", "Capsule Pill"]}
    >
      {/* 1. Compact Segmented Control */}
      <DemoBlock
        id="compact"
        title="1. Compact Segmented Control"
        description="Pill capsule track in Sand tint (#ECEAE5 light / dark glass) with a floating Cream/White indicator pill."
        code={`const [tab, setTab] = useState(2);

<Tabs value={tab} onChange={(e, v) => setTab(v)}>
  <Tab label="Dashboard" />
  <Tab label="Products" />
  <Tab label="Settings" />
</Tabs>`}
      >
        <Tabs
          value={compactTab}
          onChange={(e, v) => setCompactTab(v)}
          aria-label="compact segmented control"
        >
          <Tab label="Dashboard" />
          <Tab label="Products" />
          <Tab label="Settings" />
        </Tabs>
      </DemoBlock>

      {/* 2. Full Width Segmented Control */}
      <DemoBlock
        id="full-width"
        title="2. Full Width Segmented Control"
        description="Full-width segmented control where tabs and the active capsule indicator expand equally across the container."
        code={`const [tab, setTab] = useState(2);

<Tabs value={tab} onChange={(e, v) => setTab(v)} variant="fullWidth">
  <Tab label="Active" />
  <Tab label="Completed" />
  <Tab label="Canceled" />
</Tabs>`}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={fullTab}
            onChange={(e, v) => setFullTab(v)}
            variant="fullWidth"
            aria-label="full width segmented control"
          >
            <Tab label="Active" />
            <Tab label="Completed" />
            <Tab label="Canceled" />
          </Tabs>
        </Box>
      </DemoBlock>

      {/* 3. Frosted Glass Segmented Control */}
      <DemoBlock
        id="frosted-glass"
        title="3. Frosted Glass Segmented Control"
        description="Airy translucent indicator with backdrop blur, specular top rim, and responsive contrast using indicatorColor='glass'."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, v) => setTab(v)}
  indicatorColor="glass"
  textColor="secondary"
>
  <Tab label="Overview" />
  <Tab label="Analytics" />
  <Tab label="Reports" />
</Tabs>`}
      >
        <Tabs
          value={glassTab}
          onChange={(e, v) => setGlassTab(v)}
          indicatorColor="glass"
          textColor="secondary"
          aria-label="frosted glass segmented control"
        >
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </DemoBlock>

      {/* Brand Kit Swatches Reference */}
      <Box
        sx={{
          p: 2.5,
          mt: 4,
          borderRadius: "14px",
          border: `1px solid ${
            isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
          }`,
          backgroundColor: isDark
            ? "rgba(255,255,255,0.02)"
            : "rgba(255,255,255,0.5)",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 700, letterSpacing: "0.06em" }}
        >
          BRAND KIT PALETTE:
        </Typography>
        {[
          { name: "Sand", hex: "#D9D9CF", border: true },
          { name: "Cream", hex: "#F6F5F2", border: true },
          { name: "Charcoal", hex: "#111111", border: false },
          { name: "Stone", hex: "#686868", border: false },
        ].map((c) => (
          <Box key={c.name} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                bgcolor: c.hex,
                border: c.border
                  ? `1px solid ${
                      isDark ? "rgba(255,255,255,0.2)" : "rgba(17,17,17,0.15)"
                    }`
                  : "none",
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {c.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {c.hex}
            </Typography>
          </Box>
        ))}
      </Box>
    </ComponentPage>
  );
};
