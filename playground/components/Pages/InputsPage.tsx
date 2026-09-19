import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Chip,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import {
  Search,
  Mail,
  Eye,
  EyeOff,
  DollarSign,
  Globe,
  Check,
  Sparkles,
} from "lucide-react";
import { useThemeMode } from "../../../src/context/ThemeContext.js";

export const InputsPage: React.FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const [showPassword, setShowPassword] = useState(false);
  const [selectValue, setSelectValue] = useState("charcoal");
  const [autoSingle, setAutoSingle] = useState<string | null>(
    "Apple Precision",
  );
  const [autoMulti, setAutoMulti] = useState<string[]>([
    "Frosted Glass",
    "Brand Kit",
  ]);

  const designOptions = [
    "Apple Precision",
    "Google Antigravity",
    "Frosted Glass",
    "Brand Kit",
    "Luxury Monochrome",
    "Charcoal Surface",
    "Cream Canvas",
  ];

  return (
    <ComponentPage
      title="Text Field, Select & Autocomplete"
      description="Input controls allow users to enter, select, and edit data. Intentionally calibrated to the Brand Kit palette: Charcoal & Cream focus rings, Stone Gray labels, color='glass' frosted inputs, and blur(24px) popover open layers."
      category="Inputs"
      badges={[
        "Inputs",
        "color='glass'",
        "Select",
        "Autocomplete",
        "Glass Popover",
        "Brand Kit",
      ]}
    >
      {/* 1. Basic Text Fields & States */}
      <DemoBlock
        id="text-fields"
        title="Text Field Variants & States"
        description="Outlined inputs feature 12px border radius, subtle frosted glass backgrounds, Stone Gray labels, and high-contrast Charcoal (#111111) / Cream (#F6F5F2) focus rings."
        code={`<TextField label="Default Input" placeholder="Enter full name" />
<TextField label="With Value" defaultValue="Jivico Studio" />
<TextField label="Helper Text" helperText="Corporate workspace email" />
<TextField label="Disabled" disabled defaultValue="Read-only system text" />`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}>
          <TextField
            label="Default Input"
            placeholder="e.g. John Doe"
            sx={{ minWidth: 240 }}
          />
          <TextField
            label="With Value"
            defaultValue="Jivico Design System"
            sx={{ minWidth: 240 }}
          />
          <TextField
            label="Helper Text"
            defaultValue="alex@jivico.studio"
            helperText="Corporate workspace email"
            sx={{ minWidth: 240 }}
          />
          <TextField
            label="Disabled State"
            disabled
            defaultValue="Read-only system token"
            sx={{ minWidth: 240 }}
          />
        </Box>
      </DemoBlock>

      {/* 2. Frosted Glass Input Spotlight */}
      <DemoBlock
        id="glass-inputs"
        title="✨ Signature: color='glass' Input Spotlight"
        description="Inputs with color='glass' feature deep 18px frosted glass blur, specular perimeter highlights, and luminous focus halos. Both Select and Autocomplete dropdown open layers render with saturate(190%) blur(24px) frosted glass."
        code={`<TextField color="glass" label="Frosted Glass Input" placeholder="Type inside glass..." />
<TextField color="glass" label="AI Search" slotProps={{ input: { startAdornment: <Sparkles size={18} /> } }} />

<FormControl color="glass" sx={{ minWidth: 240 }}>
  <InputLabel>Glass Select</InputLabel>
  <Select color="glass" label="Glass Select" value={selectValue}>
    <MenuItem value="charcoal">Charcoal (#111111)</MenuItem>
  </Select>
</FormControl>

<Autocomplete
  options={options}
  renderInput={(params) => <TextField {...params} color="glass" label="Glass Autocomplete" />}
/>`}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            p: { xs: 2, sm: 3 },
            borderRadius: "16px",
            overflow: "visible",
            background: isDark
              ? "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)"
              : "linear-gradient(135deg, #FAF9F6 0%, #F0EFEA 100%)",
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.06)"
            }`,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-10%",
              left: "10%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(120, 119, 198, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(240, 205, 170, 0.8) 0%, rgba(190, 220, 245, 0.5) 60%, transparent 70%)",
              filter: "blur(32px)",
              pointerEvents: "none",
              zIndex: 0,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10%",
              right: "15%",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(50, 150, 200, 0.25) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(210, 230, 250, 0.85) 0%, rgba(250, 225, 210, 0.5) 60%, transparent 70%)",
              filter: "blur(35px)",
              pointerEvents: "none",
              zIndex: 0,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <TextField
              color="glass"
              label="Frosted Glass Input"
              placeholder="Type inside glass..."
              sx={{ minWidth: 240 }}
            />
            <TextField
              color="glass"
              label="AI Search"
              placeholder="Search with AI..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Sparkles size={18} opacity={0.7} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ minWidth: 240 }}
            />
            <FormControl color="glass" sx={{ minWidth: 240 }}>
              <InputLabel id="glass-select-label">Glass Select</InputLabel>
              <Select
                color="glass"
                labelId="glass-select-label"
                id="glass-select"
                value={selectValue}
                label="Glass Select"
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <MenuItem value="charcoal">Charcoal (#111111)</MenuItem>
                <MenuItem value="stone">Stone Gray (#686868)</MenuItem>
                <MenuItem value="sand">Sand Light (#D9D9CF)</MenuItem>
                <MenuItem value="cream">Cream White (#F6F5F2)</MenuItem>
              </Select>
              <FormHelperText>Apple liquid glass 18% opacity</FormHelperText>
            </FormControl>
            <Autocomplete
              options={designOptions}
              defaultValue="Frosted Glass"
              sx={{ minWidth: 250 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="glass"
                  label="Glass Autocomplete"
                  placeholder="Search or select..."
                  helperText="Liquid glass 40px blur"
                />
              )}
            />
          </Box>
        </Box>
      </DemoBlock>

      {/* 2. Palette & Validation Alignment */}
      <DemoBlock
        id="validation-colors"
        title="Palette & Validation States"
        description="Input borders, focus halos, and helper text dynamically reflect the design system palette: Primary Charcoal/Cream, Error Red (#EA4335), and subtle glass dividers."
        code={`<TextField label="Focused State" autoFocus defaultValue="Active focus ring" />
<TextField error label="Error State" defaultValue="invalid@email" helperText="Invalid email format" />
<TextField label="Required Field" required placeholder="Required input" />`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}>
          <TextField
            label="Error State"
            error
            defaultValue="invalid_token_id"
            helperText="Invalid token: Must contain valid hex or slug"
            sx={{ minWidth: 260 }}
          />

          <TextField
            label="Required Input"
            color="success"
            required
            placeholder="Required system slug"
            helperText="This field cannot be left blank"
            sx={{ minWidth: 260 }}
          />
          <TextField
            label="Success Validation"
            defaultValue="token_auth_verified"
            helperText="✓ Authentication successful"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Check size={18} color="#34A853" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              minWidth: 260,
              "& .MuiFormHelperText-root": {
                color: "success.main",
              },
            }}
          />
        </Box>
      </DemoBlock>

      {/* 3. Select Dropdowns */}
      <DemoBlock
        id="select"
        title="Select Dropdowns (Frosted Glass Menu)"
        description="Select components feature frosted glass popover surfaces with 18px radius, saturate(180%) blur(20px), Stone Gray chevrons, and Brand Kit selected states."
        code={`<FormControl sx={{ minWidth: 240 }}>
  <InputLabel>Theme Palette</InputLabel>
  <Select value={value} label="Theme Palette" onChange={handleChange}>
    <MenuItem value="charcoal">Charcoal Monochrome</MenuItem>
    <MenuItem value="stone">Stone Gray</MenuItem>
    <MenuItem value="cream">Cream White</MenuItem>
  </Select>
</FormControl>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}>
          <FormControl sx={{ minWidth: 240 }}>
            <InputLabel id="palette-select-label">Theme Palette</InputLabel>
            <Select
              labelId="palette-select-label"
              id="palette-select"
              value={selectValue}
              label="Theme Palette"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <MenuItem value="charcoal">Charcoal (#111111)</MenuItem>
              <MenuItem value="stone">Stone Gray (#686868)</MenuItem>
              <MenuItem value="sand">Sand Light (#D9D9CF)</MenuItem>
              <MenuItem value="cream">Cream White (#F6F5F2)</MenuItem>
            </Select>
            <FormHelperText>Select foundational brand tone</FormHelperText>
          </FormControl>

          <FormControl sx={{ minWidth: 240 }} size="small">
            <InputLabel id="size-select-label">Component Size</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              defaultValue="medium"
              label="Component Size"
            >
              <MenuItem value="small">Small (36px)</MenuItem>
              <MenuItem value="medium">Medium (48px)</MenuItem>
              <MenuItem value="large">Large (56px)</MenuItem>
            </Select>
            <FormHelperText>Compact small size variant</FormHelperText>
          </FormControl>

          <FormControl sx={{ minWidth: 240 }} disabled>
            <InputLabel id="disabled-select-label">Disabled Select</InputLabel>
            <Select
              labelId="disabled-select-label"
              id="disabled-select"
              defaultValue="locked"
              label="Disabled Select"
            >
              <MenuItem value="locked">System Locked Option</MenuItem>
            </Select>
            <FormHelperText>Read-only configuration</FormHelperText>
          </FormControl>
        </Box>
      </DemoBlock>

      {/* 4. Autocomplete (Single & Multi-Select) */}
      <DemoBlock
        id="autocomplete"
        title="Autocomplete (Single & Multi-Select with Brand Chips)"
        description="Combo box with real-time text matching, frosted glass popovers, hover item feedback, and Brand Kit pill tags."
        code={`// Single select
<Autocomplete
  options={options}
  value={value}
  renderInput={(params) => <TextField {...params} label="Design System" />}
/>

// Multi select with brand chips
<Autocomplete
  multiple
  options={options}
  value={selectedOptions}
  renderInput={(params) => <TextField {...params} label="Active Tokens" />}
/>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 420 }}>
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, mb: 1 }}
            >
              Single Selection
            </Typography>
            <Autocomplete
              options={designOptions}
              value={autoSingle}
              onChange={(_, val) => setAutoSingle(val)}
              renderInput={(params) => (
                <TextField {...params} label="Design System Component" />
              )}
            />
          </Box>

          <Box sx={{ width: "100%", maxWidth: 480 }}>
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, mb: 1 }}
            >
              Multi-Select with Brand Kit Chips
            </Typography>
            <Autocomplete
              multiple
              options={designOptions}
              value={autoMulti}
              onChange={(_, val) => setAutoMulti(val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Active Feature Flags"
                  placeholder="Select more..."
                />
              )}
            />
          </Box>
        </Box>
      </DemoBlock>

      {/* 5. Input Adornments */}
      <DemoBlock
        id="adornments"
        title="Input Adornments & Triggers"
        description="Prefix and suffix adornments for search queries, currency figures, website URLs, and password visibility toggles."
        code={`<TextField
  label="Search"
  slotProps={{
    input: {
      startAdornment: <Search size={18} />
    }
  }}
/>`}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}>
          <TextField
            label="Search System"
            placeholder="Search tokens, icons..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} opacity={0.6} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 240 }}
          />

          <TextField
            label="Email Address"
            placeholder="founder@jivico.studio"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} opacity={0.6} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 240 }}
          />

          <TextField
            label="Monthly Subscription"
            defaultValue="99.00"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <DollarSign size={18} opacity={0.6} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="caption" color="text.secondary">
                      USD / mo
                    </Typography>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 240 }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            defaultValue="Secret123!"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 240 }}
          />
        </Box>
      </DemoBlock>

      {/* 6. Input Sizes */}
      <DemoBlock
        id="sizes"
        title="Input Sizes (Small, Medium, Large)"
        description="Inputs support Small (36px min-height), Medium (48px standard), and Large (56px hero) sizing with scaled padding and font size."
        code={`<TextField label="Small (36px)" size="small" />
<TextField label="Medium (48px)" size="medium" />
<TextField label="Large (56px)" size="large" />`}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            label="Small Size"
            size="small"
            placeholder="36px height"
            sx={{ minWidth: 220 }}
          />
          <TextField
            label="Medium Size (Default)"
            size="medium"
            placeholder="48px height"
            sx={{ minWidth: 240 }}
          />
          <TextField
            label="Large Size"
            size={"large" as any}
            placeholder="56px height"
            sx={{ minWidth: 260 }}
          />
        </Box>
      </DemoBlock>

      {/* 7. Multiline & Textarea */}
      <DemoBlock
        id="multiline"
        title="Multiline & Text Area"
        description="Multiline inputs provide generous padding, smooth text scrolling, and consistent 12px corner radius."
        code={`<TextField
  label="Project Notes"
  multiline
  rows={4}
  defaultValue="Jivico Glass UI is designed with Apple Precision and Google Antigravity..."
  fullWidth
/>`}
      >
        <Box sx={{ width: "100%" }}>
          <TextField
            label="Design Philosophy & Notes"
            multiline
            rows={4}
            defaultValue="Luxury monochrome palette: Charcoal #111111, Stone #686868, Sand #D9D9CF, and Cream #F6F5F2. All inputs render with optical frosted glass blur and specular highlights."
            fullWidth
          />
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
