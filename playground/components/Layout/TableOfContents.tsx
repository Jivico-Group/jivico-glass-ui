import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
}) => {
  if (!items || items.length === 0) return null;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: 220,
        flexShrink: 0,
        display: { xs: "none", lg: "block" },
        position: "sticky",
        top: 80,
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto",
        pl: 2,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: "block",
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "text.secondary",
          fontSize: "0.72rem",
          mb: 1,
        }}
      >
        Contents
      </Typography>
      <List sx={{ p: 0 }}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <ListItemButton
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              sx={{
                py: 0.4,
                px: 1,
                borderRadius: "6px",
                borderLeft: (theme) =>
                  `2px solid ${
                    isActive ? theme.palette.text.primary : "transparent"
                  }`,
                color: isActive ? "text.primary" : "text.secondary",
                fontWeight: isActive ? 600 : 400,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "text.primary",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    noWrap
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: isActive ? 600 : 400,
                      color: "inherit",
                    }}
                  >
                    {item.title}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};
