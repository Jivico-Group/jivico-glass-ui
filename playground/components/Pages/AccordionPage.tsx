import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { ChevronDown, Shield, CreditCard, Bell, Lock, User, HelpCircle } from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const AccordionPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [expandedPanel, setExpandedPanel] = useState<string | false>("panel1");

  const handleChangePanel =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  return (
    <ComponentPage
      title="Accordion"
      description="Accordions display stacked collapsible panels for organizing dense information, settings drawers, and FAQ lists."
      category="Surfaces"
      badges={["Surfaces", "Accordion", "Collapsible", "Settings"]}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          1. Basic Accordion Stack
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="basic-accordion"
        title="Basic Accordion Stack"
        description="Standard stacked collapsible panels with subtle borders, hover physics, and expanded state highlights."
        code={`<Accordion defaultExpanded>
  <AccordionSummary expandIcon={<ChevronDown />}>
    <Typography variant="subtitle1">General Settings</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography variant="body2">Configure application preferences.</Typography>
  </AccordionDetails>
</Accordion>`}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <User size={18} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Account Profile & Identity
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Update your personal info, profile avatar, display name, and verified billing address for studio invoices.
              </Typography>
              <Button size="small" variant="contained" color="primary">
                Edit Profile
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Shield size={18} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Security & Authentication
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Two-factor authentication (2FA) is currently enabled via authenticator app. Last password reset was 30 days ago.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Bell size={18} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Notification Preferences
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <FormControlLabel control={<Switch defaultChecked size="small" />} label="Email invoice notifications" />
                <FormControlLabel control={<Switch defaultChecked size="small" />} label="Real-time order updates" />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          2. Controlled Single-Expand Accordion
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="controlled-accordion"
        title="Controlled Single-Expand Accordion"
        description="Limit accordion expansion to a single active panel at a time using React state."
        code={`const [expanded, setExpanded] = useState<string | false>('panel1');

<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary expandIcon={<ChevronDown />}>
    <Typography>Payment Methods</Typography>
  </AccordionSummary>
  <AccordionDetails>...</AccordionDetails>
</Accordion>`}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Accordion expanded={expandedPanel === "panel1"} onChange={handleChangePanel("panel1")}>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", pr: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <CreditCard size={18} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Payment & Subscriptions
                  </Typography>
                </Box>
                <Chip label="ACTIVE" size="small" color="success" />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                Your enterprise plan renews on October 15, 2026. Mastered card ending in •••• 4242 is active.
              </Typography>
              <Button size="small" variant="outlined" color="primary">
                Manage Payment Methods
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPanel === "panel2"} onChange={handleChangePanel("panel2")}>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", pr: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Lock size={18} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    API Tokens & Secrets
                  </Typography>
                </Box>
                <Chip label="2 TOKENS" size="small" color="accent" />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                Production secret keys have read/write permissions for catalog and order endpoints.
              </Typography>
              <Button size="small" variant="contained" color="accent">
                Generate New Key
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPanel === "panel3"} onChange={handleChangePanel("panel3")}>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <HelpCircle size={18} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Help & Documentation
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Need guidance? Explore our full online documentation, design kit guidelines, and developer guides.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          3. Disabled & Static Accordion Panels
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="disabled-accordion"
        title="Disabled & Static States"
        description="Accordions support disabled states for restricted permissions or locked workflow stages."
        code={`<Accordion disabled>
  <AccordionSummary expandIcon={<ChevronDown />}>
    <Typography>Restricted Admin Settings</Typography>
  </AccordionSummary>
</Accordion>`}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Accordion disabled>
            <AccordionSummary expandIcon={<ChevronDown size={18} />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Lock size={18} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Restricted Admin Settings (Organization Permission Required)
                </Typography>
              </Box>
            </AccordionSummary>
          </Accordion>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
