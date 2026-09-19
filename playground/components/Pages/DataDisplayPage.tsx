import React from "react";
import {
  Box,
  Avatar,
  AvatarGroup,
  Badge,
  Tooltip,
  Button,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import {
  Mail,
  Bell,
  Sparkles,
  User,
  Shield,
  MessageSquare,
  Camera,
  Check,
} from "lucide-react";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

export const DataDisplayPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Avatar, Badge & Tooltip"
      description="Apple-inspired optical frosted glass avatars, continuous curve squircles, glowing status dot indicators, and translucent badge pills."
      category="Data Display"
      badges={["Apple Squircle", "Liquid Glass", "Glowing Badges", "MUI v9"]}
    >
      {/* 1. Signature Apple Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="Apple Glass Avatars & Badges"
        description="Crafted with optical backdrop blur, specular top perimeter glints, and glowing status aura dots. Refracts colors and textures beneath with authentic Apple liquid fidelity."
        code={`// Glass Avatar with Apple Glass Badge
<Badge badgeContent="PRO" color="glass">
  <Avatar variant="rounded" sx={{ width: 56, height: 56 }}>
    JD
  </Avatar>
</Badge>

// Online Glowing Status Dot Badge
<Badge variant="dot" color="success">
  <Avatar src="avatar.jpg" />
</Badge>

// Overlapping Glass AvatarGroup
<AvatarGroup max={4}>
  <Avatar src="user1.jpg" />
  <Avatar src="user2.jpg" />
  <Avatar src="user3.jpg" />
  <Avatar>+5</Avatar>
</AvatarGroup>`}
      >
        <Box
          sx={{
            width: "100%",
            p: { xs: 2.5, sm: 4 },
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            background: isDark
              ? "linear-gradient(135deg, rgba(30, 20, 45, 0.75) 0%, rgba(15, 25, 40, 0.85) 50%, rgba(20, 35, 30, 0.75) 100%)"
              : "linear-gradient(135deg, #FAF7F2 0%, #EAE5D9 40%, #E4DEC9 70%, #F5F1E8 100%)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.1)"
            }`,
            boxShadow: isDark
              ? "0 20px 50px rgba(0, 0, 0, 0.6)"
              : "0 20px 50px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Ambient Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: "15%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(120, 80, 240, 0.35) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(220, 195, 160, 0.45) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Foreground Spotlight Card */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(18, 20, 26, 0.55)"
                : "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.85)"
              }`,
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.35)"
                : "0 8px 32px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Sparkles
                size={22}
                color={isDark ? "#F6F5F2" : "#111111"}
                style={{ opacity: 0.85 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                Liquid Glass Identity Primitives
              </Typography>
              <Chip
                label="OPTICAL BLUR 16PX"
                size="small"
                sx={{
                  height: 20,
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(17, 17, 17, 0.08)",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: 4,
              }}
            >
              {/* Glass Squircle Avatar with Pro Badge */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Badge
                  badgeContent="PRO"
                  color="glass"
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 64,
                      height: 64,
                      fontSize: "1.3rem",
                      fontWeight: 800,
                    }}
                  >
                    JV
                  </Avatar>
                </Badge>
                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Apple Squircle
                </Typography>
              </Box>

              {/* Photo Avatar with Online Aura Dot */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Badge
                  variant="dot"
                  color="success"
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Avatar
                    alt="Sophia Chen"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
                    sx={{ width: 64, height: 64 }}
                  />
                </Badge>
                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Active Online
                </Typography>
              </Box>

              {/* Pure Frosted Glass Circular Avatar with Notification Count */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <Badge badgeContent={8} color="primary" overlap="circular">
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: isDark
                        ? "rgba(255, 255, 255, 0.14)"
                        : "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    <User size={28} />
                  </Avatar>
                </Badge>
                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Glass Icon
                </Typography>
              </Box>

              {/* Overlapping Glass AvatarGroup */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 46, height: 46 } }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  />
                  <Avatar>+6</Avatar>
                </AvatarGroup>
                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Glass AvatarGroup
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 2. Avatar Shapes & Variants */}
      <DemoBlock
        id="avatar-shapes"
        title="Avatar Shapes: Circle vs Apple Squircle"
        description="Apple devices famously utilize continuous curve squircles (28% radius). Jivico Glass UI provides both classic circular and modern squircle avatars with translucent specular rings."
        code={`// Circular Avatar
<Avatar>JD</Avatar>

// Apple Continuous Curve Squircle
<Avatar variant="rounded">JV</Avatar>

// Square Variant
<Avatar variant="square">SQ</Avatar>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4, width: "100%" }}>
          {/* Circular */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 48, height: 48 }}>CL</Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Circular Avatar
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                variant="circular" (Default)
              </Typography>
            </Box>
          </Box>

          {/* Apple Squircle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar variant="rounded" sx={{ width: 48, height: 48 }}>
              SQ
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Apple Squircle
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                variant="rounded" (28% continuous curve)
              </Typography>
            </Box>
          </Box>

          {/* Photo Squircle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              variant="rounded"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Photo Squircle
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Inner specular glass glint
              </Typography>
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 3. Avatar Sizes */}
      <DemoBlock
        id="avatar-sizes"
        title="Avatar Size Scale"
        description="Proportional scale ranging from 28px compact indicators to 72px profile headers."
        code={`<Avatar sx={{ width: 28, height: 28, fontSize: '0.75rem' }}>XS</Avatar>
<Avatar sx={{ width: 36, height: 36, fontSize: '0.85rem' }}>SM</Avatar>
<Avatar sx={{ width: 44, height: 44 }}>MD</Avatar>
<Avatar sx={{ width: 56, height: 56, fontSize: '1.2rem' }}>LG</Avatar>
<Avatar sx={{ width: 72, height: 72, fontSize: '1.5rem' }}>XL</Avatar>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap", width: "100%" }}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ width: 28, height: 28, fontSize: "0.75rem", mx: "auto", mb: 1 }}>
              XS
            </Avatar>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              28px
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ width: 36, height: 36, fontSize: "0.85rem", mx: "auto", mb: 1 }}>
              SM
            </Avatar>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              36px
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ width: 44, height: 44, mx: "auto", mb: 1 }}>MD</Avatar>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              44px
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ width: 56, height: 56, fontSize: "1.2rem", mx: "auto", mb: 1 }}>
              LG
            </Avatar>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              56px
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Avatar sx={{ width: 72, height: 72, fontSize: "1.5rem", mx: "auto", mb: 1 }}>
              XL
            </Avatar>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              72px
            </Typography>
          </Box>
        </Box>
      </DemoBlock>

      {/* 4. Apple Glass Badges & Notification Pills */}
      <DemoBlock
        id="badges-colors"
        title="Liquid Glass Badges & Palette Matrix"
        description="Badges feature translucent pill backgrounds, specular glints, and crisp typography across Glass, Primary, Secondary Stone, Success, Error, and Warning."
        code={`<Badge badgeContent={5} color="glass">
  <Mail size={22} />
</Badge>
<Badge badgeContent="NEW" color="primary">
  <Button variant="outlined">Inbox</Button>
</Badge>
<Badge badgeContent={99} color="error">
  <Bell size={22} />
</Badge>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap", width: "100%" }}>
          {/* Glass Badge */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Badge badgeContent="GLASS" color="glass">
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <Sparkles size={22} />
              </Box>
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              Glass Badge
            </Typography>
          </Box>

          {/* Primary Badge */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Badge badgeContent={12} color="primary">
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <Mail size={22} />
              </Box>
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              Primary Charcoal
            </Typography>
          </Box>

          {/* Error Badge */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Badge badgeContent={99} color="error">
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <Bell size={22} />
              </Box>
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              Error Crimson
            </Typography>
          </Box>

          {/* Success Badge */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Badge badgeContent="OK" color="success">
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <Shield size={22} />
              </Box>
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              Success Emerald
            </Typography>
          </Box>

          {/* Max Overflow Badge */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <Badge badgeContent={120} max={99} color="primary">
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.04)",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)"
                  }`,
                }}
              >
                <MessageSquare size={22} />
              </Box>
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              Max Overflow 99+
            </Typography>
          </Box>
        </Box>
      </DemoBlock>

      {/* 5. Glowing Status Aura Dots */}
      <DemoBlock
        id="status-dots"
        title="Apple Glowing Status Aura Dots"
        description="Minimalist 10px status indicator dots equipped with a soft glowing halo, replicating macOS/iOS presence states."
        code={`<Badge variant="dot" color="success">
  <Avatar>ON</Avatar>
</Badge>
<Badge variant="dot" color="warning">
  <Avatar>AW</Avatar>
</Badge>
<Badge variant="dot" color="error">
  <Avatar>DN</Avatar>
</Badge>
<Badge variant="dot" color="glass">
  <Avatar>GL</Avatar>
</Badge>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
          <Badge
            variant="dot"
            color="success"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar sx={{ width: 48, height: 48 }}>ON</Avatar>
          </Badge>

          <Badge
            variant="dot"
            color="warning"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar sx={{ width: 48, height: 48 }}>AW</Avatar>
          </Badge>

          <Badge
            variant="dot"
            color="error"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar sx={{ width: 48, height: 48 }}>DN</Avatar>
          </Badge>

          <Badge
            variant="dot"
            color="glass"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar sx={{ width: 48, height: 48 }}>GL</Avatar>
          </Badge>
        </Box>
      </DemoBlock>

      {/* 6. Tooltips */}
      <DemoBlock
        id="tooltips"
        title="Apple Glass Tooltips"
        description="Tooltips with optical frosted blur and high-contrast typography, styled with subtle specular shadows."
        code={`<Tooltip title="Verified Jivico Identity" arrow>
  <Button variant="outlined" color="glass">Hover Me</Button>
</Tooltip>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Tooltip title="Verified Jivico Glass Identity" arrow>
            <Button variant="contained" color="glass">
              Hover for Glass Tooltip
            </Button>
          </Tooltip>

          <Tooltip title="Monochrome Brand Kit Action">
            <Button variant="outlined" color="primary">
              Standard Tooltip
            </Button>
          </Tooltip>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
