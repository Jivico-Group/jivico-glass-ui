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
    ? "rgba(20, 24, 32, 0.18)"
    : "rgba(255, 255, 255, 0.8)",
  backgroundImage: isDark
    ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)"
    : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(248,250,252,0.4) 100%)",
  border: isDark
    ? "1px solid rgba(255,255,255,0.14)"
    : "1px solid rgba(255,255,255,0.6)",
  boxShadow: isDark
    ? "0 12px 36px rgba(0,0,0,0.45), inset 0 1px 1.5px rgba(255,255,255,0.18)"
    : "0 20px 50px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04), inset 0 1.5px 1.5px rgba(255,255,255,0.95)",
});

/**
 * Apple Liquid Glass AppBar Recipe — true optical frosted glass for sticky navigation.
 * High optical transparency (~60%), vibrant saturation boost (180%), optical blur, and subtle specular sheen.
 */
export const glassAppBarRecipe = (isDark: boolean) => ({
  backgroundColor: isDark
    ? "rgba(18, 20, 26, 0.65) !important"
    : "rgba(246, 245, 242, 0.60) !important",
  backgroundImage: isDark
    ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%) !important"
    : "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 100%) !important",
  backdropFilter: "blur(24px) saturate(180%) !important",
  WebkitBackdropFilter: "blur(24px) saturate(180%) !important",
  borderTop: "none !important",
  borderLeft: "none !important",
  borderRight: "none !important",
  borderBottom: `1px solid ${
    isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(17, 17, 17, 0.08)"
  } !important`,
  boxShadow: isDark
    ? "0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3) !important"
    : "0 4px 20px -2px rgba(17, 17, 17, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02) !important",
  borderRadius: "0 !important",
});

/**
 * Apple Liquid Glass Popup Recipe — single source of truth for Select, Autocomplete,
 * Menu, and Popover dropdown surfaces.
 */
export const liquidGlassPopupRecipe = (isDark: boolean) => ({
  borderRadius: "18px !important",
  backgroundColor: isDark
    ? "rgba(18, 20, 26, 0.05) !important"
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

export const LiquidDialogDrawerRecipe = (isDark: boolean) => ({
  backgroundColor: isDark
    ? "rgba(20, 20, 24, 0.37)"
    : "rgba(255, 255, 255, 0.34)",
  backdropFilter: "blur(30px) saturate(180%) brightness(110%)",
  WebkitBackdropFilter: "blur(30px) saturate(180%) brightness(110%)",
  backgroundImage: isDark
    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(248, 250, 252, 0.4) 100%)",
  border: isDark
    ? "1px solid rgba(255, 255, 255, 0.14)"
    : "1px solid rgba(255, 255, 255, 0.65)",
  boxShadow: isDark
    ? `
          0 -12px 40px rgba(0, 0, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.12)
        `
    : `
          0 -12px 40px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.7)
        `,
  backgroundClip: "padding-box",
  overflow: "hidden",
});
