/**
 * Shared glass recipe — single source of truth for the glassmorphism effect.
 *
 * Used by: MuiAppBar (navigation.ts), GlassPanel component, and any other
 * surface that needs the same frosted-glass treatment.
 */
export const glassRecipe = (isDark: boolean) => ({
  backdropFilter: 'blur(48px) saturate(180%)',
  WebkitBackdropFilter: 'blur(48px) saturate(180%)',
  backgroundColor: isDark
    ? 'rgba(28, 31, 38, 0.65)'
    : 'rgba(255, 255, 255, 0.24)',
  backgroundImage: isDark
    ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)'
    : 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(248,250,252,0.4) 100%)',
  border: isDark
    ? '1px solid rgba(255,255,255,0.12)'
    : '1px solid rgba(255,255,255,0.6)',
  boxShadow: isDark
    ? '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
    : '0 20px 50px rgba(15,23,42,0.08), 0 8px 20px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04), inset 0 1px 1px rgba(255,255,255,0.95)',
});

/**
 * AppBar-specific variant: same glass but a lighter shadow (sits at top, not floating).
 */
export const glassAppBarRecipe = (isDark: boolean) => ({
  ...glassRecipe(isDark),
  // Override box-shadow to a slimmer version appropriate for a pinned bar
  boxShadow: isDark
    ? '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
    : '0 4px 24px rgba(15,23,42,0.06), 0 1px 6px rgba(15,23,42,0.04), inset 0 1px 1px rgba(255,255,255,0.95)',
  // AppBar has no border-radius — it spans full width
  borderRadius: 0,
  borderLeft: 'none',
  borderRight: 'none',
  borderTop: 'none',
  borderBottom: isDark
    ? '1px solid rgba(255,255,255,0.12)'
    : '1px solid rgba(255,255,255,0.6)',
});
