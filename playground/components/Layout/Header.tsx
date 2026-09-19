import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Chip,
  Button,
} from "@mui/material";
import { useThemeMode } from "../../../src/context/ThemeContext.js";
import { Menu as MenuIcon, Search } from "lucide-react";

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  onOpenSearch: () => void;
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMobileSidebar,
  onOpenSearch,
}) => {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: "60px !important", px: { xs: 2, md: 3 } }}>
        {/* Mobile menu hamburger */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleMobileSidebar}
          sx={{ mr: 1.5, display: { md: "none" } }}
        >
          <MenuIcon size={20} />
        </IconButton>

        {/* Brand Logo & Title */}
        <Box
          component="a"
          href="#overview"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "10px",
              background: isDark
                ? "linear-gradient(135deg, #FFFFFF 0%, #A0A0A0 100%)"
                : "linear-gradient(135deg, #111111 0%, #444444 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? "#111111" : "#FFFFFF",
              fontWeight: 800,
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: "1.1rem",
              boxShadow: isDark
                ? "0 2px 10px rgba(255,255,255,0.2)"
                : "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            J
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              display: { xs: "none", sm: "block" },
            }}
          >
            Jivico Glass UI
          </Typography>
          <Chip
            label="v0.1.1"
            size="small"
            sx={{
              height: 20,
              fontSize: "0.68rem",
              fontWeight: 600,
              backgroundColor: isDark
                ? "rgba(255,255,255,0.08)"
                : "rgba(17,17,17,0.06)",
              color: isDark ? "#F6F5F2" : "#111111",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.08)"
              }`,
              "& .MuiChip-label": { px: 0.8 },
              display: { xs: "none", sm: "inline-flex" },
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Quick Search Button (MUI Doc style with ⌘K) */}
        <Button
          onClick={onOpenSearch}
          variant="outlined"
          size="small"
          startIcon={<Search size={15} />}
          sx={{
            mr: { xs: 1, sm: 2 },
            px: { xs: 1.5, sm: 2 },
            height: 34,
            borderRadius: "10px",
            borderColor: isDark
              ? "rgba(255, 255, 255, 0.14)"
              : "rgba(17, 17, 17, 0.12)",
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(17, 17, 17, 0.02)",
            color: "text.secondary",
            fontWeight: 400,
            textTransform: "none",
            fontSize: "0.82rem",
            "&:hover": {
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(17, 17, 17, 0.3)",
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(17, 17, 17, 0.05)",
            },
          }}
        >
          <Box
            component="span"
            sx={{ display: { xs: "none", sm: "inline" }, mr: 3 }}
          >
            Search components...
          </Box>
          <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
            Search
          </Box>
          <Box
            component="kbd"
            sx={{
              display: { xs: "none", sm: "inline-block" },
              fontSize: "0.68rem",
              fontWeight: 700,
              padding: "2px 5px",
              borderRadius: "5px",
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(17, 17, 17, 0.06)",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)"
              }`,
            }}
          >
            ⌘K
          </Box>
        </Button>

        {/* GitHub Link */}
        <Tooltip title="View repository on GitHub">
          <IconButton
            component="a"
            href="https://github.com/Jivico-Group/jivico-glass-ui"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "inherit",
              width: 36,
              height: 36,
              mr: 1,
              borderRadius: "9px",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.1)"
              }`,
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(17,17,17,0.06)",
              },
            }}
          >
            <GithubIcon size={18} />
          </IconButton>
        </Tooltip>

        {/* Theme Toggle (Sun/Moon) */}
        <Tooltip title={`Switch to ${isDark ? "light" : "dark"} mode`}>
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{
              color: "inherit",
              width: 36,
              height: 36,
              borderRadius: "9px",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.1)"
              }`,
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(17,17,17,0.06)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease",
                transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </Box>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
