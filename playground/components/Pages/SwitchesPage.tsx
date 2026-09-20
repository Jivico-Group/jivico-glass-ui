import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Slider,
  Chip,
  Grid,
} from "@mui/material";
import {
  Sparkles,
  Heart,
  Bookmark,
  Star,
  Sun,
  Moon,
  Bell,
  Lock,
  Volume2,
  Wifi,
  Shield,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

type PaletteColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "default"
  | "glass";

const ALL_COLORS: {
  key: PaletteColor;
  label: string;
  desc: string;
  badge: string;
}[] = [
  {
    key: "primary",
    label: "Primary (Brand)",
    desc: "Charcoal (#111111) / Cream (#F6F5F2)",
    badge: "#111111",
  },
  {
    key: "secondary",
    label: "Secondary (Stone)",
    desc: "Warm stone gray (#686868)",
    badge: "#686868",
  },
  {
    key: "success",
    label: "Success (Emerald)",
    desc: "Tactile green (#34A853)",
    badge: "#34A853",
  },
  {
    key: "error",
    label: "Error (Crimson)",
    desc: "Warning red (#EA4335)",
    badge: "#EA4335",
  },
  {
    key: "warning",
    label: "Warning (Amber)",
    desc: "Vibrant amber (#FBBC04)",
    badge: "#FBBC04",
  },
  {
    key: "info",
    label: "Info (Sky)",
    desc: "Focused blue (#4285F4)",
    badge: "#4285F4",
  },
  {
    key: "default",
    label: "Default (Neutral)",
    desc: "Neutral gray track & handle",
    badge: "#9E9E9E",
  },
  {
    key: "glass",
    label: "Glass (Liquid)",
    desc: "Ultra-translucent optical frosted",
    badge: "GLASS",
  },
];

export const SwitchesPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // State for interactive demo
  const [glassSwitch, setGlassSwitch] = useState(true);
  const [glassCheck, setGlassCheck] = useState(true);
  const [glassRadio, setGlassRadio] = useState("pro");
  const [glassSlider, setGlassSlider] = useState<number>(65);

  // States for color switches
  const [colorSwitches, setColorSwitches] = useState<
    Record<PaletteColor, boolean>
  >({
    primary: true,
    secondary: true,
    success: true,
    error: true,
    warning: true,
    info: true,
    default: true,
    glass: true,
  });

  // States for color checkboxes
  const [colorChecks, setColorChecks] = useState<Record<PaletteColor, boolean>>(
    {
      primary: true,
      secondary: true,
      success: true,
      error: true,
      warning: true,
      info: true,
      default: true,
      glass: true,
    },
  );

  // State for color radio groups
  const [colorRadios, setColorRadios] = useState<Record<PaletteColor, string>>({
    primary: "1",
    secondary: "1",
    success: "1",
    error: "1",
    warning: "1",
    info: "1",
    default: "1",
    glass: "1",
  });

  // Custom icon checkbox states
  const [favChecked, setFavChecked] = useState(true);
  const [bookChecked, setBookChecked] = useState(true);
  const [starChecked, setStarChecked] = useState(true);
  const [shieldChecked, setShieldChecked] = useState(true);

  // Discrete & range slider values
  const [discreteVal, setDiscreteVal] = useState<number>(40);
  const [rangeVal, setRangeVal] = useState<number[]>([25, 75]);

  return (
    <ComponentPage
      title="Switch & Selection Controls"
      description="Interactive toggles, checkboxes, and radio buttons engineered with Apple tactile physics, liquid frosted glass tracks, and full color palette alignment."
      category="Inputs"
      badges={["Apple Physics", "Liquid Glass", "Full Palette", "MUI v9"]}
    >
      {/* 1. Signature Liquid Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="Signature Liquid Glass Controls"
        description="Crafted with translucent frosted tracks, specular perimeter glints, and tactile spring physics. Designed to refract ambient mesh gradients without color distortion."
        code={`// Signature Frosted Glass Selection Controls
<Switch color="glass" defaultChecked />
<Checkbox color="glass" defaultChecked />
<Radio color="glass" checked />
<Slider color="glass" defaultValue={65} />`}
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
          {/* Ambient Glow Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: "10%",
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
          <Box
            sx={{
              position: "absolute",
              bottom: "-20%",
              right: "15%",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(50, 180, 220, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(185, 205, 225, 0.45) 0%, transparent 70%)",
              filter: "blur(45px)",
              pointerEvents: "none",
            }}
          />

          {/* Foreground Spotlight Card */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              p: { xs: 2, sm: 3 },
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(18, 20, 26, 0.55)"
                : "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: `1px solid ${
                isDark
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(255, 255, 255, 0.85)"
              }`,
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.35)"
                : "0 8px 32px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}
            >
              <Sparkles
                size={22}
                color={isDark ? "#F6F5F2" : "#111111"}
                style={{ opacity: 0.85 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: "1.05rem" }}
              >
                Apple Liquid Glass Controls
              </Typography>
              <Chip
                label="OPTICAL BLUR 24PX"
                size="small"
                sx={{
                  height: 20,
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(17, 17, 17, 0.08)",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 2.5,
              }}
            >
              {/* Glass Switch Card */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.5)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.06)"
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  GLASS SWITCH
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      color="glass"
                      checked={glassSwitch}
                      onChange={(e) => setGlassSwitch(e.target.checked)}
                    />
                  }
                  label={glassSwitch ? "Liquid Active" : "Liquid Inactive"}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    },
                  }}
                />
              </Box>

              {/* Glass Checkbox Card */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.5)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.06)"
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  GLASS CHECKBOX
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="glass"
                      checked={glassCheck}
                      onChange={(e) => setGlassCheck(e.target.checked)}
                    />
                  }
                  label={glassCheck ? "Checked" : "Unchecked"}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    },
                  }}
                />
              </Box>

              {/* Glass Radio Card */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.5)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.06)"
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  GLASS RADIO
                </Typography>
                <RadioGroup
                  row
                  value={glassRadio}
                  onChange={(e) => setGlassRadio(e.target.value)}
                  sx={{ gap: 1 }}
                >
                  <FormControlLabel
                    value="pro"
                    control={<Radio color="glass" />}
                    label="Pro"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.84rem",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="ultra"
                    control={<Radio color="glass" />}
                    label="Ultra"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.84rem",
                        fontWeight: 600,
                      },
                    }}
                  />
                </RadioGroup>
              </Box>

              {/* Glass Slider Card */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(255, 255, 255, 0.5)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.06)"
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  <span>GLASS SLIDER</span>
                  <span>{glassSlider}%</span>
                </Typography>
                <Slider
                  color="glass"
                  value={glassSlider}
                  onChange={(_, val) => setGlassSlider(val as number)}
                  sx={{ pt: 1 }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 2. Switch Color Palette */}
      <DemoBlock
        id="switch-colors"
        title="Switch Color Palette Matrix"
        description="Every switch dynamically inherits track and glow shades from the theme palette: Primary, Secondary Stone, Success, Error, Warning, Info, Default, and Liquid Glass."
        code={`<Switch color="primary" defaultChecked />
<Switch color="secondary" defaultChecked />
<Switch color="success" defaultChecked />
<Switch color="error" defaultChecked />
<Switch color="warning" defaultChecked />
<Switch color="info" defaultChecked />
<Switch color="default" defaultChecked />
<Switch color="glass" defaultChecked />`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2.5,
            width: "100%",
          }}
        >
          {ALL_COLORS.map((item) => {
            const isChecked = colorSwitches[item.key];
            return (
              <Box
                key={item.key}
                sx={{
                  p: 2.2,
                  borderRadius: "14px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(17, 17, 17, 0.02)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.07)"
                  }`,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.16)"
                      : "rgba(17, 17, 17, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, fontSize: "0.88rem" }}
                  >
                    {item.label}
                  </Typography>
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      backgroundColor:
                        item.key === "glass"
                          ? isDark
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.08)"
                          : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(17,17,17,0.06)",
                    }}
                  />
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    mb: 2,
                  }}
                >
                  {item.desc}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        color={item.key}
                        checked={isChecked}
                        onChange={(e) =>
                          setColorSwitches((prev) => ({
                            ...prev,
                            [item.key]: e.target.checked,
                          }))
                        }
                      />
                    }
                    label={isChecked ? "On" : "Off"}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.82rem",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <Switch color={item.key} size="small" defaultChecked />
                </Box>
              </Box>
            );
          })}
        </Box>
      </DemoBlock>

      {/* 3. Checkbox Color Palette */}
      <DemoBlock
        id="checkbox-colors"
        title="Checkbox Color Palette Matrix"
        description="Checkboxes dynamically render checked and indeterminate states in full compliance with the brand palette. Features tactile squircle frames and hover halos."
        code={`<Checkbox color="primary" defaultChecked />
<Checkbox color="secondary" defaultChecked />
<Checkbox color="success" defaultChecked />
<Checkbox color="error" defaultChecked />
<Checkbox color="warning" defaultChecked />
<Checkbox color="info" defaultChecked />
<Checkbox color="default" defaultChecked />
<Checkbox color="glass" defaultChecked />
<Checkbox color="success" indeterminate />`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2.5,
            width: "100%",
          }}
        >
          {ALL_COLORS.map((item) => {
            const isChecked = colorChecks[item.key];
            return (
              <Box
                key={item.key}
                sx={{
                  p: 2.2,
                  borderRadius: "14px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(17, 17, 17, 0.02)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.07)"
                  }`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1.2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, fontSize: "0.88rem" }}
                  >
                    {item.label}
                  </Typography>
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      backgroundColor:
                        item.key === "glass"
                          ? isDark
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.08)"
                          : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(17,17,17,0.06)",
                    }}
                  />
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    mb: 1.5,
                  }}
                >
                  {item.desc}
                </Typography>

                <FormGroup sx={{ gap: 0.5 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color={item.key}
                        checked={isChecked}
                        onChange={(e) =>
                          setColorChecks((prev) => ({
                            ...prev,
                            [item.key]: e.target.checked,
                          }))
                        }
                      />
                    }
                    label="Checked State"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.82rem" },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox color={item.key} indeterminate defaultChecked />
                    }
                    label="Indeterminate"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.82rem" },
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox color={item.key} />}
                    label="Unchecked"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.82rem" },
                    }}
                  />
                </FormGroup>
              </Box>
            );
          })}
        </Box>
      </DemoBlock>

      {/* 4. Radio Button Color Palette */}
      <DemoBlock
        id="radio-colors"
        title="Radio Button Color Palette Matrix"
        description="Radio buttons for mutually exclusive selections. Each radio dynamically inherits its fill and focus halo from the corresponding theme palette color."
        code={`<RadioGroup row defaultValue="opt1">
  <FormControlLabel value="opt1" control={<Radio color="primary" />} label="Primary" />
  <FormControlLabel value="opt2" control={<Radio color="secondary" />} label="Secondary" />
  <FormControlLabel value="opt3" control={<Radio color="success" />} label="Success" />
  <FormControlLabel value="opt4" control={<Radio color="glass" />} label="Glass" />
</RadioGroup>`}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2.5,
            width: "100%",
          }}
        >
          {ALL_COLORS.map((item) => {
            const selectedVal = colorRadios[item.key];
            return (
              <Box
                key={item.key}
                sx={{
                  p: 2.2,
                  borderRadius: "14px",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(17, 17, 17, 0.02)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(17, 17, 17, 0.07)"
                  }`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1.2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, fontSize: "0.88rem" }}
                  >
                    {item.label}
                  </Typography>
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      backgroundColor:
                        item.key === "glass"
                          ? isDark
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.08)"
                          : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(17,17,17,0.06)",
                    }}
                  />
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    mb: 1.5,
                  }}
                >
                  {item.desc}
                </Typography>

                <RadioGroup
                  value={selectedVal}
                  onChange={(e) =>
                    setColorRadios((prev) => ({
                      ...prev,
                      [item.key]: e.target.value,
                    }))
                  }
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color={item.key} />}
                    label="Selected Option"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.82rem" },
                    }}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color={item.key} />}
                    label="Alternative Choice"
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "0.82rem" },
                    }}
                  />
                </RadioGroup>
              </Box>
            );
          })}
        </Box>
      </DemoBlock>

      {/* 5. Sizes & Selection States */}
      <DemoBlock
        id="sizes-states"
        title="Sizes & Selection States"
        description="Available in standard (44x24px) and compact small (34x18px) sizes, plus disabled and error states for complete design system consistency."
        code={`// Sizes & Disabled States
<Switch defaultChecked />
<Switch size="small" defaultChecked />
<Switch disabled defaultChecked />
<Switch disabled />

<Checkbox defaultChecked />
<Checkbox size="small" defaultChecked />
<Checkbox disabled defaultChecked />
<Checkbox disabled />`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          {/* Switch Sizes */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1.5,
                display: "block",
              }}
            >
              SWITCH SIZES & STATES
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 3,
              }}
            >
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Standard (44px)"
              />
              <FormControlLabel
                control={<Switch size="small" defaultChecked />}
                label="Small (34px)"
              />
              <FormControlLabel
                control={<Switch disabled defaultChecked />}
                label="Disabled On"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="Disabled Off"
              />
            </Box>
          </Box>

          {/* Checkbox Sizes */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1.5,
                display: "block",
              }}
            >
              CHECKBOX SIZES & STATES
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 3,
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Standard Checkbox"
              />
              <FormControlLabel
                control={<Checkbox size="small" defaultChecked />}
                label="Small Checkbox"
              />
              <FormControlLabel
                control={<Checkbox disabled defaultChecked />}
                label="Disabled Checked"
              />
              <FormControlLabel
                control={<Checkbox disabled />}
                label="Disabled Unchecked"
              />
            </Box>
          </Box>

          {/* Radio Sizes */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                color: "text.secondary",
                mb: 1.5,
                display: "block",
              }}
            >
              RADIO SIZES & STATES
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 3,
              }}
            >
              <FormControlLabel
                control={<Radio defaultChecked />}
                label="Standard Radio"
              />
              <FormControlLabel
                control={<Radio size="small" defaultChecked />}
                label="Small Radio"
              />
              <FormControlLabel
                control={<Radio disabled defaultChecked />}
                label="Disabled Selected"
              />
              <FormControlLabel
                control={<Radio disabled />}
                label="Disabled Unselected"
              />
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 6. Custom Icons & Label Placements */}
      <DemoBlock
        id="custom-icons"
        title="Custom Icons & Label Placements"
        description="MUI Checkboxes and Switches seamlessly integrate with Lucide icons (Heart, Star, Bookmark, Shield) and support start, end, top, and bottom label placements."
        code={`<Checkbox
  icon={<Heart size={20} />}
  checkedIcon={<Heart size={20} fill="currentColor" />}
  color="error"
  defaultChecked
/>
<FormControlLabel
  value="top"
  control={<Switch defaultChecked />}
  label="Top Label"
  labelPlacement="top"
/>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3.5,
            width: "100%",
          }}
        >
          {/* Custom Icon Checkboxes */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Custom Icon Checkboxes (Favorites, Bookmarks, Rating)
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<Heart size={20} />}
                    checkedIcon={<Heart size={20} fill="currentColor" />}
                    checked={favChecked}
                    onChange={(e) => setFavChecked(e.target.checked)}
                    color="error"
                  />
                }
                label="Favorite"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<Bookmark size={20} />}
                    checkedIcon={<Bookmark size={20} fill="currentColor" />}
                    checked={bookChecked}
                    onChange={(e) => setBookChecked(e.target.checked)}
                    color="primary"
                  />
                }
                label="Saved Bookmark"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<Star size={20} />}
                    checkedIcon={<Star size={20} fill="currentColor" />}
                    checked={starChecked}
                    onChange={(e) => setStarChecked(e.target.checked)}
                    color="warning"
                  />
                }
                label="Starred"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<Shield size={20} />}
                    checkedIcon={<Shield size={20} fill="currentColor" />}
                    checked={shieldChecked}
                    onChange={(e) => setShieldChecked(e.target.checked)}
                    color="success"
                  />
                }
                label="Verified Shield"
              />
            </Box>
          </Box>

          {/* Label Placements */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Label Placements (End, Start, Top, Bottom)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Label End (Default)"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Label Start"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Label Top"
                labelPlacement="top"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Label Bottom"
                labelPlacement="bottom"
              />
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 7. Glass & Palette Sliders */}
      <DemoBlock
        id="sliders"
        title="Glass & Palette Sliders"
        description="Sliders allow users to make selections from a continuous or discrete range of values. Built with translucent rails and glowing focus indicators."
        code={`<Slider color="primary" defaultValue={45} />
<Slider color="success" defaultValue={75} />
<Slider color="glass" defaultValue={60} />
<Slider marks step={25} defaultValue={50} />
<Slider value={[25, 75]} />`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3.5,
            width: "100%",
          }}
        >
          {/* Continuous Color Sliders */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Palette Colors Continuous Sliders
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: 3,
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  PRIMARY (CHARCOAL / CREAM)
                </Typography>
                <Slider color="primary" defaultValue={60} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  SUCCESS (EMERALD)
                </Typography>
                <Slider color="success" defaultValue={80} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  WARNING (AMBER)
                </Typography>
                <Slider color="warning" defaultValue={45} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  ERROR (CRIMSON)
                </Typography>
                <Slider color="error" defaultValue={30} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  INFO (SKY BLUE)
                </Typography>
                <Slider color="info" defaultValue={70} />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  LIQUID GLASS
                </Typography>
                <Slider color="glass" defaultValue={50} />
              </Box>
            </Box>
          </Box>

          {/* Discrete & Range Sliders */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
              pt: 2,
              borderTop: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.07)"
              }`,
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                Discrete Steps with Marks ({discreteVal}%)
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block", mb: 2 }}
              >
                Step increments of 20 with snap stops
              </Typography>
              <Slider
                value={discreteVal}
                onChange={(_, val) => setDiscreteVal(val as number)}
                step={20}
                marks={[
                  { value: 0, label: "0%" },
                  { value: 20, label: "20%" },
                  { value: 40, label: "40%" },
                  { value: 60, label: "60%" },
                  { value: 80, label: "80%" },
                  { value: 100, label: "100%" },
                ]}
                valueLabelDisplay="auto"
                color="primary"
              />
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                Dual Thumb Range Slider ({rangeVal[0]}% – {rangeVal[1]}%)
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block", mb: 2 }}
              >
                Allows setting both minimum and maximum thresholds
              </Typography>
              <Slider
                value={rangeVal}
                onChange={(_, val) => setRangeVal(val as number[])}
                valueLabelDisplay="auto"
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
      </DemoBlock>

      {/* 8. Form Group Preferences */}
      <DemoBlock
        id="form-group"
        title="Form Group & Real-World Preferences"
        description="Real-world application of switches, checkboxes, and radio buttons in an Apple-inspired glass system preferences layout with validation states."
        code={`<FormGroup>
  <FormControlLabel control={<Switch color="glass" defaultChecked />} label="Biometric Glass Passkey" />
  <FormControlLabel control={<Switch color="primary" defaultChecked />} label="Push Notifications" />
  <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Weekly Security Audit Digest" />
  <FormControlLabel control={<Checkbox color="error" required />} label="Accept Terms & End-User License" />
</FormGroup>`}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 640,
            p: 3,
            borderRadius: "16px",
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
            }`,
            boxShadow: isDark
              ? "0 12px 36px rgba(0, 0, 0, 0.3)"
              : "0 12px 36px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}
          >
            <Shield size={20} color={isDark ? "#F6F5F2" : "#111111"} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                System Privacy & Security Preferences
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Configured with tactile glass controls
              </Typography>
            </Box>
          </Box>

          <FormGroup sx={{ gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Biometric Liquid Glass Passkey
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Hardware-backed FaceID / TouchID authentication
                </Typography>
              </Box>
              <Switch color="glass" defaultChecked />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Push Notifications
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Receive instant alerts for account activity
                </Typography>
              </Box>
              <Switch color="primary" defaultChecked />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Developer Telemetry & Diagnostics
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Anonymized crash logs to help improve software
                </Typography>
              </Box>
              <Switch color="default" />
            </Box>

            <Box
              sx={{
                pt: 2,
                borderTop: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(17, 17, 17, 0.06)"
                }`,
              }}
            >
              <FormControlLabel
                control={<Checkbox color="primary" defaultChecked />}
                label={
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Weekly Security Audit Digest
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Summary of all sign-ins and session revocations
                    </Typography>
                  </Box>
                }
              />
            </Box>

            <Box>
              <FormControl error sx={{ width: "100%" }}>
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: "error.main" }}
                    >
                      Accept Terms of Service & Privacy Agreement (Required)
                    </Typography>
                  }
                />
                <FormHelperText sx={{ ml: 4 }}>
                  You must accept the terms before proceeding
                </FormHelperText>
              </FormControl>
            </Box>
          </FormGroup>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
