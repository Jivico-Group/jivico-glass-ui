import React, { useState } from "react";
import {
  Box,
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Sparkles,
  X,
  RefreshCw,
  Bell,
  ShieldAlert,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const AlertsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const [showAlert, setShowAlert] = useState(true);

  return (
    <ComponentPage
      title="Alert & Notification Banners"
      description="Translucent frosted alerts and status notifications engineered with saturation control, specular perimeter borders, and harmonious severity lighting."
      category="Feedback"
      badges={["Alerts", "Glass Surface", "Severity", "Brand Kit"]}
    >
      {/* 1. Severity Levels */}
      <DemoBlock
        id="alert-severities"
        title="Severity Levels & Titles"
        description="Standard severity banners feature custom vector icons, title hierarchy, and subtle color glow matching the Jivico palette."
        code={`<Alert severity="info">
  <AlertTitle>System Information</AlertTitle>
  New design system update is now available for deployment.
</Alert>
<Alert severity="success">
  <AlertTitle>Deployment Complete</AlertTitle>
  All glass primitives compiled without errors.
</Alert>
<Alert severity="warning">
  <AlertTitle>Quota Reached</AlertTitle>
  Workspace storage usage has reached 85% capacity.
</Alert>
<Alert severity="error">
  <AlertTitle>Connection Failed</AlertTitle>
  Unable to sync changes to remote cluster.
</Alert>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Alert severity="info">
            <AlertTitle>System Information</AlertTitle>
            New design system update (v2.4.0) with frosted glass token system is
            ready.
          </Alert>

          <Alert severity="success">
            <AlertTitle>Deployment Complete</AlertTitle>
            All production assets compiled successfully in 162ms.
          </Alert>

          <Alert severity="warning">
            <AlertTitle>Storage Capacity Warning</AlertTitle>
            Workspace cloud storage limit is at 88% capacity. Consider upgrading
            tier.
          </Alert>

          <Alert severity="error">
            <AlertTitle>Authentication Failed</AlertTitle>
            Security token expired or invalid. Please re-authenticate your
            session.
          </Alert>
        </Box>
      </DemoBlock>

      {/* 2. Appearances & Glass Treatments */}
      <DemoBlock
        id="alert-appearances"
        title="Visual Appearances (Glass, Tonal, Solid, Outlined)"
        description="Control the background backdrop style using the custom `appearance` prop: glass (frosted blur), tonal (soft tint), solid (vibrant fill), or outlined (minimal perimeter)."
        code={`<Alert severity="info" appearance="glass">Frosted Glass Banner</Alert>
<Alert severity="info" appearance="tonal">Soft Tonal Tint</Alert>
<Alert severity="info" appearance="solid">Solid Palette Fill</Alert>
<Alert severity="info" appearance="outlined">Outlined Perimeter</Alert>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Alert severity="info" appearance="glass">
              <strong>Glass Appearance</strong> — Frosted glass background with
              optical blur and specular border.
            </Alert>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Alert severity="info" appearance="tonal">
              <strong>Tonal Appearance</strong> — Soft translucent color wash
              tailored for content-heavy cards.
            </Alert>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Alert severity="info" appearance="solid">
              <strong>Solid Appearance</strong> — High contrast solid fill for
              critical callouts requiring maximum attention.
            </Alert>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Alert severity="info" appearance="outlined">
              <strong>Outlined Appearance</strong> — Clean vector border overlay
              with transparent backdrop background.
            </Alert>
          </Box>
        </Box>
      </DemoBlock>

      {/* 3. Color Overrides */}
      <DemoBlock
        id="alert-colors"
        title="Custom Color System (Primary, Secondary, Accent, Glass)"
        description="Override default severity tinting with brand kit theme palette colors (`color='primary' | 'secondary' | 'accent' | 'glass'`)."
        code={`<Alert color="primary" appearance="glass">Primary Brand Alert</Alert>
<Alert color="secondary" appearance="glass">Secondary Surface Alert</Alert>
<Alert color="accent" appearance="glass">Accent Electric Indigo Alert</Alert>
<Alert color="glass" appearance="glass">Neutral Glass Alert</Alert>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Alert color="primary" appearance="glass">
            <AlertTitle>Primary Monochrome Alert</AlertTitle>
            Custom alert styled with the core primary brand color.
          </Alert>

          <Alert color="secondary" appearance="glass">
            <AlertTitle>Secondary Neutral Alert</AlertTitle>
            Subtle secondary alert tailored for background system notices.
          </Alert>

          <Alert color="accent" appearance="glass">
            <AlertTitle>Accent Electric Indigo</AlertTitle>
            Vibrant accent colored alert banner for feature highlights.
          </Alert>

          <Alert color="glass" appearance="glass">
            <AlertTitle>Signature Neutral Glass</AlertTitle>
            Pure neutral glass banner adapting to light and dark theme canvas.
          </Alert>
        </Box>
      </DemoBlock>

      {/* 4. Radius Scale & Actions */}
      <DemoBlock
        id="alert-actions"
        title="Interactive Actions & Radius Scale"
        description="Support for interactive action buttons, dismissible close icons, custom radius curves (`radius='small' | 'medium' | 'large' | 'rounded' | 'pill'`), and glow."
        code={`<Alert
  severity="success"
  radius="pill"
  action={
    <Button color="inherit" size="small" startIcon={<RefreshCw size={14} />}>
      REFRESH
    </Button>
  }
>
  Sync successfully updated 142 items.
</Alert>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Alert
            severity="success"
            radius="pill"
            action={
              <Button
                color="inherit"
                size="small"
                startIcon={<RefreshCw size={14} />}
              >
                REFRESH
              </Button>
            }
          >
            Database synchronized successfully across 14 edge nodes.
          </Alert>

          <Alert
            severity="warning"
            radius="medium"
            action={
              <Button color="inherit" size="small">
                UPGRADE NOW
              </Button>
            }
          >
            Your free trial expires in 3 days. Upgrade to Pro for unlimited
            tokens.
          </Alert>

          <Collapse in={showAlert}>
            <Alert
              severity="error"
              radius="large"
              onClose={() => setShowAlert(false)}
            >
              Dismissible alert banner with smooth collapse animation. Click the
              close button!
            </Alert>
          </Collapse>

          {!showAlert && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                color="glass"
                size="small"
                onClick={() => setShowAlert(true)}
              >
                Re-open Dismissed Alert
              </Button>
            </Box>
          )}
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
