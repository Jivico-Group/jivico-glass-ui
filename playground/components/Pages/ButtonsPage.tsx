import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
  Fab,
  ToggleButton,
  ToggleButtonGroup,
  CircularProgress,
  Menu,
  MenuItem,
  Card,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import {
  ShoppingCart,
  Star,
  Plus,
  Trash2,
  Heart,
  ArrowRight,
  ArrowLeft,
  Download,
  Send,
  Sparkles,
  Settings,
  ChevronDown,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Grid as GridIcon,
  List as ListIcon,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const ButtonsPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // State for Toggle Buttons
  const [alignment, setAlignment] = useState<string>("left");
  const [formats, setFormats] = useState<string[]>(["bold"]);
  const [viewMode, setViewMode] = useState<string>("grid");

  // State for Split Button
  const [splitAnchor, setSplitAnchor] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState("Merge Pull Request");
  const splitOptions = [
    "Merge Pull Request",
    "Squash and Merge",
    "Rebase and Merge",
  ];

  return (
    <ComponentPage
      title="Button"
      description="Buttons allow users to take actions and make choices with a single tap. Jivico Glass UI delivers high-contrast Brand Kit monochromes alongside Apple-precision frosted glassmorphic styles."
      category="Inputs"
      badges={["Inputs", "color='glass'", "Brand Kit", "Full Matrix"]}
    >
      {/* 1. Core Brand Kit Variants */}
      <DemoBlock
        id="variants"
        title="Core Variants"
        description="Buttons come in three primary emphasis levels: Contained (high emphasis), Outlined (medium emphasis / frosted glass), and Text (low emphasis / navigation)."
        code={`<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="outlined" color="primary">Outlined</Button>
<Button variant="text" color="primary">Text Button</Button>
<Button variant="contained" color="primary" disabled>Disabled</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="primary">
            Primary Contained
          </Button>
          <Button variant="contained" color="secondary">
            Secondary Contained
          </Button>
          <Button variant="outlined" color="primary">
            Outlined Glass
          </Button>
          <Button variant="text" color="primary">
            Text Button
          </Button>
          <Button variant="contained" color="primary" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="accent">
            Disabled
          </Button>
          <Button variant="outlined" color="accent">
            Disabled
          </Button>
        </Box>
      </DemoBlock>

      {/* 2. Complete Color & Variant Matrix */}
      <DemoBlock
        id="color-matrix"
        title="Complete Color Matrix"
        description="Every color in the Jivico palette (Primary, Secondary, Glass, Success, Warning, Error, Info) rendered across Contained, Outlined, and Text variants."
        code={`// Available colors: "primary" | "secondary" | "glass" | "success" | "warning" | "error" | "info"
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="glass">Glass</Button>
<Button variant="contained" color="success">Success</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          {/* Contained Row */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontWeight: 700,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 1.5,
              }}
            >
              Contained Variant (All Colors)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="glass">
                ✨ Glass
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
            </Box>
          </Box>

          {/* Outlined Row */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontWeight: 700,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 1.5,
              }}
            >
              Outlined Variant (All Colors)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Button variant="outlined" color="primary">
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              <Button variant="outlined" color="glass">
                ✨ Glass
              </Button>
              <Button variant="outlined" color="success">
                Success
              </Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
              <Button variant="outlined" color="info">
                Info
              </Button>
            </Box>
          </Box>

          {/* Text Row */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontWeight: 700,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 1.5,
              }}
            >
              Text Variant (All Colors)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Button variant="text" color="primary">
                Primary
              </Button>
              <Button variant="text" color="secondary">
                Secondary
              </Button>
              <Button variant="text" color="glass">
                ✨ Glass
              </Button>
              <Button variant="text" color="success">
                Success
              </Button>
              <Button variant="text" color="warning">
                Warning
              </Button>
              <Button variant="text" color="error">
                Error
              </Button>
              <Button variant="text" color="info">
                Info
              </Button>
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 3. Frosted Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="✨ Signature: color='glass' Spotlight"
        description="Signature Apple-precision frosted glass with dynamic backdrop-filter blur (18px), specular perimeter highlight, and gentle elevation lift on hover."
        code={`<Button variant="contained" color="glass">Contained Glass</Button>
<Button variant="outlined" color="glass">Outlined Glass</Button>
<Button variant="text" color="glass">Text Glass</Button>
<Button variant="contained" color="glass" startIcon={<Sparkles size={16} />}>
  With Icon
</Button>
<Button variant="contained" color="glass" disabled>
  Disabled Glass
</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="glass">
            Contained Glass
          </Button>
          <Button variant="outlined" color="glass">
            Outlined Glass
          </Button>
          <Button variant="text" color="glass">
            Text Glass
          </Button>
          <Button
            variant="contained"
            color="glass"
            startIcon={<Sparkles size={16} />}
          >
            AI Enhance
          </Button>
          <Button
            variant="outlined"
            color="glass"
            startIcon={<Star size={16} />}
          >
            Favorite
          </Button>
          <Button variant="contained" color="glass" disabled>
            Disabled Glass
          </Button>
        </Box>
      </DemoBlock>

      {/* 4. Sizes */}
      <DemoBlock
        id="sizes"
        title="Sizes (Small, Medium, Large)"
        description="Buttons support small (30px), medium (36px default), and large (44px) sizes with proportional font sizing, padding, and icon scaling."
        code={`<Button variant="contained" color="primary" size="small">Small</Button>
<Button variant="contained" color="primary" size="medium">Medium</Button>
<Button variant="contained" color="primary" size="large">Large</Button>

<Button variant="contained" color="glass" size="small">Small Glass</Button>
<Button variant="contained" color="glass" size="medium">Medium Glass</Button>
<Button variant="contained" color="glass" size="large">Large Glass</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            width: "100%",
          }}
        >
          {/* Primary Sizes */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="primary" size="small">
              Small (30px)
            </Button>
            <Button variant="contained" color="primary" size="medium">
              Medium (36px)
            </Button>
            <Button variant="contained" color="primary" size="large">
              Large (44px)
            </Button>
          </Box>

          {/* Glass Sizes */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="glass" size="small">
              Small Glass
            </Button>
            <Button variant="contained" color="glass" size="medium">
              Medium Glass
            </Button>
            <Button variant="contained" color="glass" size="large">
              Large Glass
            </Button>
          </Box>

          {/* Outlined Sizes */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button variant="outlined" color="primary" size="small">
              Small Outlined
            </Button>
            <Button variant="outlined" color="primary" size="medium">
              Medium Outlined
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Large Outlined
            </Button>
          </Box>
        </Box>
      </DemoBlock>

      {/* 5. Buttons With Icons */}
      <DemoBlock
        id="icons"
        title="Buttons with Icons"
        description="Buttons can include leading (startIcon) or trailing (endIcon) icons for enhanced visual hierarchy and call-to-action clarity."
        code={`<Button variant="contained" color="primary" startIcon={<Plus size={16} />}>
  Add Item
</Button>
<Button variant="contained" color="glass" endIcon={<ArrowRight size={16} />}>
  Continue
</Button>
<Button variant="outlined" color="primary" startIcon={<Download size={16} />}>
  Export Data
</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<Plus size={16} />}
          >
            Add Item
          </Button>
          <Button
            variant="contained"
            color="glass"
            endIcon={<ArrowRight size={16} />}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Send size={16} />}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Download size={16} />}
          >
            Export
          </Button>
          <Button
            variant="outlined"
            color="glass"
            startIcon={<ShoppingCart size={16} />}
          >
            Cart (3)
          </Button>
          <Button
            variant="text"
            color="glass"
            startIcon={<ArrowLeft size={16} />}
          >
            Go Back
          </Button>
        </Box>
      </DemoBlock>

      {/* 6. Icon Buttons */}
      <DemoBlock
        id="icon-buttons"
        title="Icon Buttons"
        description="Icon buttons are compact, touch-friendly circular triggers commonly used in toolbars, app headers, and action trays."
        code={`<IconButton color="primary"><Plus size={18} /></IconButton>
<IconButton color="glass"><Heart size={18} /></IconButton>
<IconButton color="error"><Trash2 size={18} /></IconButton>
<IconButton size="small"><Settings size={16} /></IconButton>
<IconButton size="large"><Star size={22} /></IconButton>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          {/* Default / Floating Glass */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(17, 17, 17, 0.06)",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(17, 17, 17, 0.1)",
                },
              }}
            >
              <Plus size={18} />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.1)"
                }`,
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? "0 4px 16px rgba(0,0,0,0.4)"
                    : "0 4px 14px rgba(0,0,0,0.06)",
                },
              }}
            >
              <Heart size={18} />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(17, 17, 17, 0.1)"
                }`,
              }}
            >
              <Star size={18} />
            </IconButton>

            <IconButton
              sx={{
                color: "error.main",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(234, 67, 53, 0.15)"
                    : "rgba(234, 67, 53, 0.08)",
                },
              }}
            >
              <Trash2 size={18} />
            </IconButton>

            <IconButton
              sx={{
                color: "primary.main",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(17, 17, 17, 0.06)",
                },
              }}
            >
              <Settings size={18} />
            </IconButton>
          </Box>

          {/* Sizes */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: "text.secondary", mr: 1 }}
            >
              Sizes:
            </Typography>
            <IconButton
              size="small"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <Plus size={14} />
            </IconButton>
            <IconButton
              size="medium"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <Plus size={18} />
            </IconButton>
            <IconButton
              size="large"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <Plus size={22} />
            </IconButton>
          </Box>
        </Box>
      </DemoBlock>

      {/* 7. Floating Action Buttons (FAB) */}
      <DemoBlock
        id="fab"
        title="Floating Action Buttons (FAB)"
        description="A Floating Action Button (FAB) performs the primary or most common action on a screen. Styled with precision pill geometry and frosted glass depth."
        code={`<Fab color="primary" aria-label="add"><Plus size={20} /></Fab>
<Fab color="glass" aria-label="favorite"><Heart size={20} /></Fab>
<Fab variant="extended" color="primary">
  <Plus size={18} style={{ marginRight: 8 }} />
  Create New
</Fab>
<Fab variant="extended" color="glass">
  <Sparkles size={18} style={{ marginRight: 8 }} />
  AI Generate
</Fab>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            width: "100%",
          }}
        >
          {/* Circular FABs */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Fab color="primary" size="small" aria-label="add">
              <Plus size={16} />
            </Fab>
            <Fab color="primary" size="medium" aria-label="add">
              <Plus size={20} />
            </Fab>
            <Fab color="primary" size="large" aria-label="add">
              <Plus size={24} />
            </Fab>

            {/* Custom Glass FAB */}
            <Fab
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.8)",
                color: "text.primary",
                backdropFilter: "blur(16px)",
                border: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(255, 255, 255, 0.9)"
                }`,
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "#FFFFFF",
                },
              }}
              aria-label="favorite"
            >
              <Heart size={20} />
            </Fab>

            <Fab color="secondary" aria-label="star">
              <Star size={20} />
            </Fab>
          </Box>

          {/* Extended FABs */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Fab variant="extended" color="primary">
              <Plus size={18} style={{ marginRight: 8 }} />
              Create Document
            </Fab>
            <Fab
              variant="extended"
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.8)",
                color: "text.primary",
                backdropFilter: "blur(16px)",
                border: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(255, 255, 255, 0.9)"
                }`,
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "#FFFFFF",
                },
              }}
            >
              <Sparkles size={18} style={{ marginRight: 8 }} />
              AI Assistant
            </Fab>
            <Fab variant="extended" color="secondary">
              <Download size={18} style={{ marginRight: 8 }} />
              Download Report
            </Fab>
          </Box>
        </Box>
      </DemoBlock>

      {/* 8. Button Group & Split Button */}
      <DemoBlock
        id="button-group"
        title="Button Group & Split Button"
        description="The ButtonGroup component can be used to group related buttons together with seamless adjoining borders, rounded outer pill corners, and dropdown integration."
        code={`<ButtonGroup variant="contained" color="glass">
  <Button>Option A</Button>
  <Button>Option B</Button>
  <Button>Option C</Button>
</ButtonGroup>

<ButtonGroup variant="outlined" color="primary">
  <Button>Daily</Button>
  <Button>Weekly</Button>
  <Button>Monthly</Button>
</ButtonGroup>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            width: "100%",
          }}
        >
          {/* Horizontal Button Groups */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <ButtonGroup variant="contained" color="primary">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup variant="contained" color="glass">
              <Button>Overview</Button>
              <Button>Analytics</Button>
              <Button>Reports</Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" color="primary">
              <Button>Daily</Button>
              <Button>Weekly</Button>
              <Button>Monthly</Button>
            </ButtonGroup>
          </Box>

          {/* Split Button with Menu */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <ButtonGroup variant="contained" color="primary">
              <Button onClick={() => alert(`Executed: ${selectedOption}`)}>
                {selectedOption}
              </Button>
              <Button
                size="small"
                onClick={(e) => setSplitAnchor(e.currentTarget)}
                sx={{ px: 1 }}
              >
                <ChevronDown size={18} />
              </Button>
            </ButtonGroup>
            <Menu
              anchorEl={splitAnchor}
              open={Boolean(splitAnchor)}
              onClose={() => setSplitAnchor(null)}
              slotProps={{
                paper: {
                  sx: {
                    borderRadius: "12px",
                    mt: 0.5,
                    border: `1px solid ${
                      isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)"
                    }`,
                    backgroundColor: isDark
                      ? "rgba(22, 22, 22, 0.95)"
                      : "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(20px)",
                  },
                },
              }}
            >
              {splitOptions.map((opt) => (
                <MenuItem
                  key={opt}
                  selected={opt === selectedOption}
                  onClick={() => {
                    setSelectedOption(opt);
                    setSplitAnchor(null);
                  }}
                  sx={{ fontSize: "0.85rem", py: 1 }}
                >
                  {opt}
                </MenuItem>
              ))}
            </Menu>

            {/* Vertical Button Group */}
            <ButtonGroup
              orientation="vertical"
              variant="outlined"
              color="glass"
            >
              <Button>Top Action</Button>
              <Button>Middle Action</Button>
              <Button>Bottom Action</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </DemoBlock>

      {/* 9. Toggle Buttons */}
      <DemoBlock
        id="toggle-buttons"
        title="Toggle Buttons (Single & Multi-Select)"
        description="Toggle buttons group a set of mutually exclusive (or multi-select) options with frosted glass pill styling."
        code={`<ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
  <ToggleButton value="left"><AlignLeft size={16} /></ToggleButton>
  <ToggleButton value="center"><AlignCenter size={16} /></ToggleButton>
  <ToggleButton value="right"><AlignRight size={16} /></ToggleButton>
</ToggleButtonGroup>`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            alignItems: "center",
          }}
        >
          {/* Alignment Toggle (Exclusive) */}
          <Box>
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, mb: 1 }}
            >
              Text Alignment (Single Choice)
            </Typography>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={(_, val) => val && setAlignment(val)}
              size="small"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <AlignLeft size={16} />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <AlignCenter size={16} />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <AlignRight size={16} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Text Formats Toggle (Multiple) */}
          <Box>
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, mb: 1 }}
            >
              Formatting (Multiple Choices)
            </Typography>
            <ToggleButtonGroup
              value={formats}
              onChange={(_, val) => setFormats(val)}
              size="small"
            >
              <ToggleButton value="bold" aria-label="bold">
                <Bold size={16} />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <Italic size={16} />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                <Underline size={16} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* View Mode Toggle */}
          <Box>
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, mb: 1 }}
            >
              Layout View
            </Typography>
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(_, val) => val && setViewMode(val)}
              size="small"
            >
              <ToggleButton value="grid" aria-label="grid view">
                <GridIcon size={16} style={{ marginRight: 6 }} /> Grid
              </ToggleButton>
              <ToggleButton value="list" aria-label="list view">
                <ListIcon size={16} style={{ marginRight: 6 }} /> List
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </DemoBlock>

      {/* 10. Complex States & Full Width */}
      <DemoBlock
        id="complex-states"
        title="Interactive States & Full Width"
        description="Buttons support loading indicators, focus halos, active push-down transforms, and 100% full-width block sizing for checkout cards and modals."
        code={`<Button variant="contained" color="primary" fullWidth>
  Full Width Primary Button
</Button>
<Button variant="contained" color="glass" fullWidth>
  Full Width Glass Button
</Button>
<Button variant="contained" color="primary" disabled startIcon={<CircularProgress size={16} />}>
  Processing...
</Button>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<CircularProgress size={16} color="inherit" />}
            >
              Submitting Order...
            </Button>
            <Button
              variant="contained"
              color="glass"
              startIcon={<CircularProgress size={16} color="inherit" />}
            >
              Loading Data...
            </Button>
            <Button variant="contained" color="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="outlined" color="primary" disabled>
              Disabled Outlined
            </Button>
          </Box>

          <Button variant="contained" color="primary" fullWidth size="large">
            Full Width Contained Primary
          </Button>
          <Button variant="contained" color="glass" fullWidth size="large">
            Full Width Frosted Glass
          </Button>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
