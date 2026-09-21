import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Sparkles, ArrowRight, Bookmark, Share2, MoreVertical } from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const CardsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Card"
      description="Cards contain content and actions about a single subject. Enhanced with Jivico color themes, radius tokens, hover physics, and tonal background variants."
      category="Surfaces"
      badges={["Surfaces", "Card", "Tonal", "Glass"]}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          1. Card Variants
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="card-variants"
        title="Card Variants"
        description="Core layout variants including flat elevation, outlined perimeter, and soft tonal fill."
        code={`<Card variant="elevation" sx={{ p: 3 }}>
  <Typography variant="h6">Elevation Card</Typography>
  <Typography variant="body2">Flat surface with crisp border.</Typography>
</Card>

<Card variant="outlined" sx={{ p: 3 }}>
  <Typography variant="h6">Outlined Card</Typography>
  <Typography variant="body2">Explicit stroke boundary.</Typography>
</Card>

<Card variant="tonal" color="accent" sx={{ p: 3 }}>
  <Typography variant="h6">Tonal Accent Card</Typography>
  <Typography variant="body2">Soft tinted background surface.</Typography>
</Card>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            width: "100%",
          }}
        >
          <Card variant="elevation">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Elevation Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Clean, flat surface with crisp 1px neutral border. Ideal for dashboard widgets and layout containers.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Outlined Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Framed with explicit perimeter stroke for clear separation against complex backgrounds.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="tonal" color="accent">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Tonal Accent Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Soft color-mixed background tinted with Jivico champagne accent palette.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          2. Card Colors & Glass
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="card-colors"
        title="Color System & Glass Surface"
        description="Theme-driven card background palettes including neutral, champagne accent, semantic states, and frosted glass."
        code={`<Card color="primary">Primary Card</Card>
<Card color="secondary">Secondary Card</Card>
<Card color="accent">Accent Card</Card>
<Card color="glass">Frosted Glass Card</Card>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 2.5,
            width: "100%",
          }}
        >
          <Card color="primary">
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
                PRIMARY
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 1, fontSize: "1rem" }}>
                Solid Canvas
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>
                Pure white in light mode, deep dark charcoal in dark mode.
              </Typography>
            </CardContent>
          </Card>

          <Card color="secondary">
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
                SECONDARY
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 1, fontSize: "1rem" }}>
                Subtle Neutral
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>
                Cream / stone neutral tint for subtle content grouping.
              </Typography>
            </CardContent>
          </Card>

          <Card color="accent">
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF" }}>
                ACCENT
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 1, fontSize: "1rem", color: "#FFFFFF" }}>
                Champagne Gold
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.85)" }}>
                High-contrast brand kit accent fill for featured items.
              </Typography>
            </CardContent>
          </Card>

          <Card color="glass">
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "text.secondary" }}>
                FROSTED GLASS
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 1, fontSize: "1rem" }}>
                Liquid Blur
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>
                Backdrop filter with 14px blur and specular perimeter stroke.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          3. Corner Radius Tokens
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="card-radius"
        title="Corner Radius Options"
        description="Choose from none (0px), small (6px), medium (10px default), large (16px), or full (9999px)."
        code={`<Card radius="none">Square Corner (0px)</Card>
<Card radius="small">Small Radius (6px)</Card>
<Card radius="medium">Medium Radius (10px default)</Card>
<Card radius="large">Large Radius (16px)</Card>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(4, 1fr)" },
            gap: 2,
            width: "100%",
          }}
        >
          {(["none", "small", "medium", "large"] as const).map((r) => (
            <Card key={r} radius={r} color="secondary">
              <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "capitalize" }}>
                  {r} Radius
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {r === "none" ? "0px" : r === "small" ? "6px" : r === "medium" ? "10px" : "16px"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          4. Hover Physics & Lift Animation
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="card-hover"
        title="Interactive Hover Cards"
        description="Set hover={true} for smooth 180ms translate Y lift, cursor feedback, and ambient dark/light drop shadow."
        code={`<Card hover={true} color="primary" sx={{ p: 3 }}>
  <Typography variant="h6">Hover Lift Card</Typography>
</Card>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            width: "100%",
          }}
        >
          <Card hover={true} color="primary">
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                <Chip label="INTERACTIVE" size="small" color="primary" />
                <IconButton size="small"><Share2 size={16} /></IconButton>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: "1.05rem" }}>
                Elevated Hover Lift
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hover over this card to observe the subtle -2px lift physics and soft ambient shadow cast.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, pb: 2.5, pt: 0 }}>
              <Button size="small" variant="text" color="primary" endIcon={<ArrowRight size={14} />}>
                View Analytics
              </Button>
            </CardActions>
          </Card>

          <Card hover={true} color="glass">
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                <Chip label="FROSTED" size="small" color="glass" />
                <IconButton size="small"><Bookmark size={16} /></IconButton>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: "1.05rem" }}>
                Glass Hover Panel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Glass card with hover illumination and responsive backdrop filter enhancement.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, pb: 2.5, pt: 0 }}>
              <Button size="small" variant="contained" color="glass">
                Quick Action
              </Button>
            </CardActions>
          </Card>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          5. Rich Card Composition
      ───────────────────────────────────────────────────────────────────── */}
      <DemoBlock
        id="card-composition"
        title="Rich Card Composition"
        description="Combining CardHeader, Avatar, CardContent, Chips, and CardActions for real-world studio components."
        code={`<Card hover={true}>
  <CardHeader
    avatar={<Avatar src="..." />}
    action={<IconButton><MoreVertical /></IconButton>}
    title="Jivico Studio"
    subheader="Updated 2 mins ago"
  />
  <CardContent>...</CardContent>
  <CardActions>...</CardActions>
</Card>`}
      >
        <Box sx={{ width: "100%", maxWidth: 640, mx: "auto" }}>
          <Card hover={true} radius="large">
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: isDark ? "rgba(255,255,255,0.15)" : "#111111",
                    color: isDark ? "#111111" : "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  JS
                </Avatar>
              }
              action={
                <IconButton size="small">
                  <MoreVertical size={18} />
                </IconButton>
              }
              title={
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Jivico Studio Product Engine
                </Typography>
              }
              subheader="Active Studio Release • Version 2.4"
            />
            <CardContent sx={{ py: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Full-stack luxury studio suite with automated inventory sync, variant pricing matrices, and real-time glassmorphism playground integrations.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="Production Ready" size="small" color="success" />
                <Chip label="GraphQL API" size="small" color="info" />
                <Chip label="Glass UI v2.0" size="small" color="accent" />
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2.5, justifyContent: "space-between", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.06)"}` }}>
              <Button size="small" variant="outlined" color="primary">
                Documentation
              </Button>
              <Button size="small" variant="contained" color="accent" startIcon={<Sparkles size={14} />}>
                Launch Studio
              </Button>
            </CardActions>
          </Card>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
