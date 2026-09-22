import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Drawer,
} from "@mui/material";
import { useGlassMode } from "../../../src/context/ThemeContext";

export interface NavItem {
  id: string;
  label: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Overview",
    items: [
      { id: "overview", label: "Brand Kit & Setup" },
      { id: "theme", label: "Theme Setup & Scopes", badge: "THEME" },
      { id: "colors", label: "Colors (Full Palette)", badge: "PALETTE" },
    ],
  },
  {
    title: "Inputs",
    items: [
      { id: "buttons", label: "Button & Button Group", badge: "GLASS" },
      { id: "inputs", label: "Text Field & Autocomplete" },
      { id: "switches", label: "Switch & Controls" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { id: "chips", label: "Chip", badge: "BRAND KIT" },
      { id: "table", label: "Table & Data Grid", badge: "NEW" },
      { id: "data-display", label: "Avatar & Badge" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { id: "showcase", label: "Showcase Hero Slider", badge: "NEW" },
      { id: "menus", label: "Menu & Dropdown", badge: "NEW" },
      { id: "list", label: "List & Item", badge: "NEW" },
      { id: "bottom-nav", label: "Bottom Navigation", badge: "NEW" },
      { id: "tabs", label: "Tabs (Segmented Control)", badge: "BRAND KIT" },
      { id: "steppers", label: "Stepper" },
    ],
  },
  {
    title: "Surfaces",
    items: [
      { id: "surfaces", label: "Glass Panel & Surfaces" },
      { id: "cards", label: "Card", badge: "BRAND KIT" },
      { id: "accordion", label: "Accordion" },
      { id: "paper", label: "Paper" },
      { id: "dialogs", label: "Dialog & Drawer", badge: "GLASS" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { id: "alerts", label: "Alert & Banner", badge: "BRAND KIT" },
      { id: "tooltips", label: "Tooltip & Popover", badge: "GLASS" },
      { id: "progress", label: "Progress & Skeleton", badge: "NEW" },
      { id: "feedback", label: "All Feedback Showcase" },
    ],
  },
];

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeId,
  onSelect,
  mobileOpen = false,
  onCloseMobile,
}) => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  const content = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        py: 2,
        px: 1.5,
      }}
    >
      <List size="small" sx={{ p: 0 }}>
        {NAV_SECTIONS.map((section) => (
          <Box key={section.title} sx={{ mb: 2 }}>
            <Typography
              variant="overline"
              sx={{
                px: 1.5,
                mb: 0.5,
                display: "block",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "text.secondary",
                fontSize: "0.7rem",
              }}
            >
              {section.title}
            </Typography>

            {section.items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <ListItemButton
                  key={item.id}
                  size="small"
                  selected={isActive}
                  onClick={() => {
                    onSelect(item.id);
                    onCloseMobile?.();
                  }}
                  sx={{
                    mb: 0.4,
                  }}
                >
                  <ListItemText primary={item.label} />

                  {item.badge && (
                    <Chip
                      label={item.badge}
                      size="small"
                      sx={{
                        height: 18,
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        backgroundColor:
                          item.badge === "GLASS"
                            ? isDark
                              ? "rgba(255,255,255,0.15)"
                              : "rgba(0,0,0,0.08)"
                            : isDark
                              ? "#F6F5F2"
                              : "#111111",
                        color:
                          item.badge === "GLASS"
                            ? isDark
                              ? "#F6F5F2"
                              : "#111111"
                            : isDark
                              ? "#111111"
                              : "#FFFFFF",
                        "& .MuiChip-label": {
                          px: 0.7,
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { md: 250 },
          flexShrink: { md: 0 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            width: 250,
            position: "fixed",
            top: 60,
            bottom: 0,
            overflowY: "auto",
            borderRight: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
            }`,
            backgroundColor: isDark
              ? "rgba(18, 18, 18, 0.4)"
              : "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {content}
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onCloseMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: isDark
              ? "rgba(20, 20, 20, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};
