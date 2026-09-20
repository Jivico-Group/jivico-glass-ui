import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Search } from "lucide-react";
import { NAV_SECTIONS } from "../Layout/Sidebar.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  open,
  onClose,
  onSelect,
}) => {
  const [query, setQuery] = useState("");
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Flat list of searchable components
  const allItems = React.useMemo(() => {
    const list: {
      id: string;
      label: string;
      category: string;
      badge?: string;
    }[] = [];
    NAV_SECTIONS.forEach((sec) => {
      sec.items.forEach((item) => {
        list.push({
          id: item.id,
          label: item.label,
          category: sec.title,
          badge: item.badge,
        });
      });
    });
    return list;
  }, []);

  const filtered = React.useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    );
  }, [allItems, query]);

  // Global ⌘K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          // Trigger open in parent
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            backgroundColor: isDark
              ? "rgba(22, 22, 22, 0.95)"
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.1)"
            }`,
            boxShadow: isDark
              ? "0 20px 60px rgba(0,0,0,0.6)"
              : "0 20px 60px rgba(0,0,0,0.15)",
            overflow: "hidden",
          },
        },
      }}
    >
      <DialogContent sx={{ p: 2 }}>
        <TextField
          autoFocus
          fullWidth
          placeholder="Search components, tokens, or guides..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} opacity={0.6} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "10px",
                fontSize: "0.95rem",
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(17, 17, 17, 0.02)",
              },
            },
          }}
        />

        <List sx={{ mt: 1.5, maxHeight: 360, overflowY: "auto", p: 0 }}>
          {filtered.length === 0 ? (
            <Box sx={{ py: 4, textAlign: "center", color: "text.secondary" }}>
              <Typography variant="body2">
                No components found for &quot;{query}&quot;
              </Typography>
            </Box>
          ) : (
            filtered.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                  setQuery("");
                }}
                sx={{
                  borderRadius: "8px",
                  py: 1,
                  px: 1.5,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.05)",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "inherit",
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.72rem",
                        color: "text.secondary",
                      }}
                    >
                      {item.category}
                    </Typography>
                  }
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(17,17,17,0.06)",
                    }}
                  />
                )}
              </ListItemButton>
            ))
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};
