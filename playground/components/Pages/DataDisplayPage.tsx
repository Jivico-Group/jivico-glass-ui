import React from "react";
import {
  Box,
  Avatar,
  AvatarGroup,
  Badge,
  Tooltip,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { Mail, Bell } from "lucide-react";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

export const DataDisplayPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Avatar, Badge & Tooltip"
      description="Components to display personal profiles, notification indicators, context tooltips, and content separators."
      category="Data Display"
      badges={["Data Display", "Avatars", "Tooltips"]}
    >
      {/* 1. Avatars */}
      <DemoBlock
        id="avatars"
        title="Avatars"
        description="Avatars are found throughout material design and can display letters, icons, or images."
        code={`<Avatar sx={{ bgcolor: "primary.main" }}>JS</Avatar>
<Avatar sx={{ bgcolor: "secondary.main" }}>GL</Avatar>
<AvatarGroup max={4}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
</AvatarGroup>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap" }}>
          <Avatar
            sx={{
              bgcolor: isDark ? "#F6F5F2" : "#111111",
              color: isDark ? "#111111" : "#FFFFFF",
              fontWeight: 700,
            }}
          >
            JS
          </Avatar>
          <Avatar
            sx={{
              bgcolor: isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.1)",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            GL
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
          />
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" />
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" />
            <Avatar>+3</Avatar>
          </AvatarGroup>
        </Box>
      </DemoBlock>

      {/* 2. Badges */}
      <DemoBlock
        id="badges"
        title="Badges"
        description="Badge generates a small badge to the top-right of its child(ren)."
        code={`<Badge badgeContent={4} color="primary">
  <Mail size={22} />
</Badge>
<Badge badgeContent={99} color="error">
  <Bell size={22} />
</Badge>
<Badge variant="dot" color="success">
  <Avatar>JD</Avatar>
</Badge>`}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Badge badgeContent={4} color="primary">
            <Mail size={22} />
          </Badge>
          <Badge badgeContent={99} color="error">
            <Bell size={22} />
          </Badge>
          <Badge variant="dot" color="success">
            <Avatar sx={{ width: 36, height: 36 }}>JD</Avatar>
          </Badge>
        </Box>
      </DemoBlock>

      {/* 3. Tooltips */}
      <DemoBlock
        id="tooltips"
        title="Tooltips"
        description="Tooltips display informative text when users hover over, focus on, or tap an element."
        code={`<Tooltip title="Delete record">
  <Button variant="outlined" color="primary">Hover Me</Button>
</Tooltip>`}
      >
        <Tooltip title="Luxury Frosted Glass Tooltip">
          <Button variant="outlined" color="glass">
            Hover for Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Brand Kit Monochrome Action" arrow>
          <Button variant="contained" color="primary">
            Arrow Tooltip
          </Button>
        </Tooltip>
      </DemoBlock>
    </ComponentPage>
  );
};
