import React from "react";
import { Box, Typography, Breadcrumbs, Link, Chip, Divider } from "@mui/material";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

interface ComponentPageProps {
  title: string;
  description: string;
  category?: string;
  badges?: string[];
  children: React.ReactNode;
}

export const ComponentPage: React.FC<ComponentPageProps> = ({
  title,
  description,
  category = "Components",
  badges = ["Glass UI", "MUI v9"],
  children,
}) => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box>
      {/* Breadcrumb Trail */}
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ mb: 2, fontSize: "0.8rem", color: "text.secondary" }}
      >
        <Link underline="hover" color="inherit" href="#overview">
          Docs
        </Link>
        <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
          {category}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", color: "text.primary", fontWeight: 600 }}>
          {title}
        </Typography>
      </Breadcrumbs>

      {/* Page Title & Subtitle */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap", mb: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.9rem", sm: "2.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>
          {badges.map((b) => (
            <Chip
              key={b}
              label={b}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.68rem",
                fontWeight: 600,
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(17, 17, 17, 0.06)",
                color: isDark ? "#F6F5F2" : "#111111",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)"
                }`,
              }}
            />
          ))}
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "800px" }}
        >
          {description}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Main Demos */}
      <Box>{children}</Box>
    </Box>
  );
};
