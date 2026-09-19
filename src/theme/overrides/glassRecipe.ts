/**
 * Shared glass recipe — single source of truth for the glassmorphism effect.
 *
 * Used by: MuiAppBar (navigation.ts), GlassPanel component, and any other
 * surface that needs the same frosted-glass treatment.
 */
export const glassRecipe = (isDark: boolean) => ({
  backdropFilter: "blur(48px) saturate(200%) brightness(105%)",
  WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(105%)",
  backgroundColor: isDark
    ? "rgba(20, 24, 32, 0.48)"
    : "rgba(255, 255, 255, 0.24)",
  backgroundImage: isDark
    ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)"
    : "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(248,250,252,0.4) 100%)",
  border: isDark
    ? "1px solid rgba(255,255,255,0.14)"
    : "1px solid rgba(255,255,255,0.6)",
  boxShadow: isDark
    ? "0 12px 36px rgba(0,0,0,0.45), inset 0 1px 1.5px rgba(255,255,255,0.18)"
    : "0 20px 50px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04), inset 0 1.5px 1.5px rgba(255,255,255,0.95)",
});

/**
 * AppBar-specific variant: same glass but a lighter shadow (sits at top, not floating).
 */
export const glassAppBarRecipe = (isDark: boolean) => ({
  ...glassRecipe(isDark),
  // Override box-shadow to a slimmer version appropriate for a pinned bar
  boxShadow: isDark
    ? "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)"
    : "0 4px 24px rgba(15,23,42,0.06), 0 1px 6px rgba(15,23,42,0.04), inset 0 1px 1px rgba(255,255,255,0.95)",
  // AppBar has no border-radius — it spans full width
  borderRadius: 0,
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  borderBottom: isDark
    ? "1px solid rgba(255,255,255,0.12)"
    : "1px solid rgba(255,255,255,0.6)",
});

/**
 * Apple Liquid Glass Popup Recipe — single source of truth for Select, Autocomplete,
 * Menu, and Popover dropdown surfaces.
 */
export const liquidGlassPopupRecipe = (isDark: boolean) => ({
  borderRadius: "18px !important",
  backgroundColor: isDark
    ? "rgba(18, 20, 26, 0.35) !important"
    : "rgba(255, 255, 255, 0.08) !important",
  backgroundImage: isDark
    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important",
  backdropFilter: "blur(30px) saturate(190%) !important",
  WebkitBackdropFilter: "blur(30px) saturate(190%) !important",
  border: `1px solid ${
    isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
  } !important`,
  boxShadow: isDark
    ? "0 24px 50px rgba(0, 0, 0, 0.65), 0 6px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important"
    : "0 20px 48px -4px rgba(0, 0, 0, 0.10), 0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6) !important",
  padding: "6px !important",
  overflow: "hidden !important",
  transition:
    "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important",
  transformOrigin: "top center !important",
});
