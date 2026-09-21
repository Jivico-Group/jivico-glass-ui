import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const TabsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [secondaryTab, setSecondaryTab] = useState(1);
  const [accentTab, setAccentTab] = useState(1);
  const [primaryTab, setPrimaryTab] = useState(1);
  const [infoTab, setInfoTab] = useState(1);
  const [successTab, setSuccessTab] = useState(1);
  const [warningTab, setWarningTab] = useState(1);
  const [errorTab, setErrorTab] = useState(1);
  const [glassTab, setGlassTab] = useState(1);

  const [fullTab, setFullTab] = useState(1);
  const [fullAccentTab, setFullAccentTab] = useState(1);

  return (
    <ComponentPage
      title="Tabs (Segmented Control)"
      description="Segmented controls organize content across different screens, data sets, and other interactions. Designed with a fully rounded capsule pill track and an animated floating pill indicator matching the Jivico design system."
      category="Navigation"
      badges={[
        "Brand Kit",
        "Segmented Control",
        "Capsule Pill",
        "Color Variants",
      ]}
    >
      {/* =========================================================
          1. SECONDARY — DEFAULT
      ========================================================= */}
      <DemoBlock
        id="secondary-tabs"
        title="1. Secondary — Default"
        description="The default Jivico segmented control using the neutral secondary palette."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColor="secondary"
  textColor="secondary"
>
  <Tab label="Overview" />
  <Tab label="Products" />
  <Tab label="Orders" />
</Tabs>`}
      >
        <Tabs
          value={secondaryTab}
          onChange={(e, value) => setSecondaryTab(value)}
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="secondary tabs"
        >
          <Tab label="Overview" />
          <Tab label="Products" />
          <Tab label="Orders" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          2. ACCENT
      ========================================================= */}
      <DemoBlock
        id="accent-tabs"
        title="2. Accent — Champagne"
        description="Premium champagne accent for highlighted navigation and important workflows."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="accent"
  textColorOverride="accent"
>
  <Tab label="Overview" />
  <Tab label="Products" />
  <Tab label="Orders" />
</Tabs>`}
      >
        <Tabs
          value={accentTab}
          onChange={(e, value) => setAccentTab(value)}
          indicatorColorOverride="accent"
          textColorOverride="accent"
          aria-label="accent tabs"
        >
          <Tab label="Overview" />
          <Tab label="Products" />
          <Tab label="Orders" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          3. PRIMARY
      ========================================================= */}
      <DemoBlock
        id="primary-tabs"
        title="3. Primary"
        description="High-contrast primary segmented control using the Jivico charcoal and cream palette."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColor="primary"
  textColor="primary"
>
  <Tab label="Overview" />
  <Tab label="Products" />
  <Tab label="Orders" />
</Tabs>`}
      >
        <Tabs
          value={primaryTab}
          onChange={(e, value) => setPrimaryTab(value)}
          indicatorColor="primary"
          textColor="primary"
          aria-label="primary tabs"
        >
          <Tab label="Overview" />
          <Tab label="Products" />
          <Tab label="Orders" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          4. INFO
      ========================================================= */}
      <DemoBlock
        id="info-tabs"
        title="4. Info"
        description="Informational blue variant for navigation related to insights, analytics, and information."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="info"
  textColorOverride="info"
>
  <Tab label="Overview" />
  <Tab label="Analytics" />
  <Tab label="Reports" />
</Tabs>`}
      >
        <Tabs
          value={infoTab}
          onChange={(e, value) => setInfoTab(value)}
          indicatorColorOverride="info"
          textColorOverride="info"
          aria-label="info tabs"
        >
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          5. SUCCESS
      ========================================================= */}
      <DemoBlock
        id="success-tabs"
        title="5. Success"
        description="Success green variant for completed, active, or successful workflow states."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="success"
  textColorOverride="success"
>
  <Tab label="Active" />
  <Tab label="Completed" />
  <Tab label="Verified" />
</Tabs>`}
      >
        <Tabs
          value={successTab}
          onChange={(e, value) => setSuccessTab(value)}
          indicatorColorOverride="success"
          textColorOverride="success"
          aria-label="success tabs"
        >
          <Tab label="Active" />
          <Tab label="Completed" />
          <Tab label="Verified" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          6. WARNING
      ========================================================= */}
      <DemoBlock
        id="warning-tabs"
        title="6. Warning"
        description="Warning orange variant for pending actions, review states, and attention-required workflows."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="warning"
  textColorOverride="warning"
>
  <Tab label="Pending" />
  <Tab label="Review" />
  <Tab label="Attention" />
</Tabs>`}
      >
        <Tabs
          value={warningTab}
          onChange={(e, value) => setWarningTab(value)}
          indicatorColorOverride="warning"
          textColorOverride="warning"
          aria-label="warning tabs"
        >
          <Tab label="Pending" />
          <Tab label="Review" />
          <Tab label="Attention" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          7. ERROR
      ========================================================= */}
      <DemoBlock
        id="error-tabs"
        title="7. Error"
        description="Error red variant for failed, rejected, or destructive workflow states."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="error"
  textColorOverride="error"
>
  <Tab label="Failed" />
  <Tab label="Rejected" />
  <Tab label="Blocked" />
</Tabs>`}
      >
        <Tabs
          value={errorTab}
          onChange={(e, value) => setErrorTab(value)}
          indicatorColorOverride="error"
          textColorOverride="error"
          aria-label="error tabs"
        >
          <Tab label="Failed" />
          <Tab label="Rejected" />
          <Tab label="Blocked" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          8. GLASS
      ========================================================= */}
      <DemoBlock
        id="glass-tabs"
        title="8. Glass"
        description="Frosted glass segmented control with translucent indicator, blur, and adaptive light/dark contrast."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  indicatorColorOverride="glass"
  textColorOverride="glass"
>
  <Tab label="Overview" />
  <Tab label="Analytics" />
  <Tab label="Reports" />
</Tabs>`}
      >
        <Tabs
          value={glassTab}
          onChange={(e, value) => setGlassTab(value)}
          indicatorColorOverride="glass"
          textColorOverride="glass"
          aria-label="glass tabs"
        >
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </DemoBlock>

      {/* =========================================================
          9. FULL WIDTH SECONDARY
      ========================================================= */}
      <DemoBlock
        id="full-width-secondary"
        title="9. Full Width — Secondary"
        description="Full-width secondary segmented control with equally distributed tabs."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  variant="fullWidth"
  indicatorColor="secondary"
  textColor="secondary"
>
  <Tab label="Active" />
  <Tab label="Completed" />
  <Tab label="Canceled" />
</Tabs>`}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={fullTab}
            onChange={(e, value) => setFullTab(value)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="full width secondary tabs"
          >
            <Tab label="Active" />
            <Tab label="Completed" />
            <Tab label="Canceled" />
          </Tabs>
        </Box>
      </DemoBlock>

      {/* =========================================================
          10. FULL WIDTH ACCENT
      ========================================================= */}
      <DemoBlock
        id="full-width-accent"
        title="10. Full Width — Accent"
        description="Full-width champagne segmented control for premium workflows and highlighted navigation."
        code={`const [tab, setTab] = useState(1);

<Tabs
  value={tab}
  onChange={(e, value) => setTab(value)}
  variant="fullWidth"
  indicatorColorOverride="accent"
  textColorOverride="accent"
>
  <Tab label="Design" />
  <Tab label="Customize" />
  <Tab label="Publish" />
</Tabs>`}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={fullAccentTab}
            onChange={(e, value) => setFullAccentTab(value)}
            variant="fullWidth"
            indicatorColorOverride="accent"
            textColorOverride="accent"
            aria-label="full width accent tabs"
          >
            <Tab label="Design" />
            <Tab label="Customize" />
            <Tab label="Publish" />
          </Tabs>
        </Box>
      </DemoBlock>

      {/* =========================================================
          BRAND KIT PALETTE
      ========================================================= */}
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
          sx={{
            fontWeight: 700,
            letterSpacing: "0.06em",
          }}
        >
          BRAND KIT PALETTE:
        </Typography>

        {[
          {
            name: "Sand",
            hex: "#D9D9CF",
            border: true,
          },
          {
            name: "Cream",
            hex: "#F6F5F2",
            border: true,
          },
          {
            name: "Charcoal",
            hex: "#111111",
            border: false,
          },
          {
            name: "Stone",
            hex: "#686868",
            border: false,
          },
          {
            name: "Champagne",
            hex: "#B08D57",
            border: false,
          },
        ].map((c) => (
          <Box
            key={c.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
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

            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
              }}
            >
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
// ```

// ### Important

// For your current implementation, these are the correct combinations:

// | Variant   | Indicator                          | Text                          |
// | --------- | ---------------------------------- | ----------------------------- |
// | Secondary | `indicatorColor="secondary"`       | `textColor="secondary"`       |
// | Primary   | `indicatorColor="primary"`         | `textColor="primary"`         |
// | Accent    | `indicatorColorOverride="accent"`  | `textColorOverride="accent"`  |
// | Info      | `indicatorColorOverride="info"`    | `textColorOverride="info"`    |
// | Success   | `indicatorColorOverride="success"` | `textColorOverride="success"` |
// | Warning   | `indicatorColorOverride="warning"` | `textColorOverride="warning"` |
// | Error     | `indicatorColorOverride="error"`   | `textColorOverride="error"`   |
// | Glass     | `indicatorColorOverride="glass"`   | `textColorOverride="glass"`   |

// So **Accent will no longer fall back to secondary**, which was the reason you were seeing black selected text.

// One more thing: make sure your theme uses the corrected `MuiTabs` logic I gave you earlier, particularly this:

// ```ts
// const textColor =
//   (ownerState as any).textColorOverride ||
//   (ownerState.textColor as string) ||
//   "secondary";
// ```

// and:

// ```ts
// "& .MuiTab-root.Mui-selected": {
//   color: selectedText,
// },
// ```

// That is what makes the selected Accent/Info/Success/Warning/Error text use the original **white** color.
