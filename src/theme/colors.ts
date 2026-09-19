/**
 * Jivico Studio Design System — Luxury Monochrome + Glassmorphism
 *
 * Brand Kit: Modern · Minimal · Bold · Timeless
 * Primary Palette: Charcoal #111111 · Stone #686868 · Sand #D9D9CF · Cream #F6F5F2
 *
 * Raw Color Constants — no pink, no gradients-with-purple.
 * Glassmorphism surfaces, blur, and elevation are preserved exactly.
 */
export const COLORS = {
  // ─── Brand Monochrome ────────────────────────────────────────────────────────
  brand: {
    charcoal: '#111111',
    stone: '#686868',
    sand: '#D9D9CF',
    cream: '#F6F5F2',
  },

  // ─── Primary (Charcoal) ──────────────────────────────────────────────────────
  primary: {
    /** Light mode: bold charcoal for buttons, focus rings, active states */
    light: '#111111',
    /** Dark mode: crisp cream/off-white — reads as luxury against dark glass */
    dark: '#F6F5F2',
    hoverLight: '#2A2A2A',
    hoverDark: '#E8E7E4',
    activeLight: '#1A1A1A',
    activeDark: '#D9D8D4',
    disabledLight: '#D9D9D9',
    disabledDark: '#3A3A3A',
    glowLight: 'rgba(17, 17, 17, 0.35)',
    glowDark: 'rgba(246, 245, 242, 0.4)',
    textLight: '#FFFFFF',
    textDark: '#111111',
  },

  // ─── Secondary (Cream) ───────────────────────────────────────────────────────
  secondary: {
    light: '#F6F5F2',
    dark: '#F6F5F2',
    hoverLight: '#2A2A2A',
    hoverDark: '#E8E7E4',
    activeLight: '#3A3A37',
    activeDark: '#D4D4D8',
    disabledLight: '#3A3A3A',
    disabledDark: '#EDEDED',
    glowLight: 'rgba(17, 17, 17, 0.08)',
    glowDark: 'rgba(246, 245, 242, 0.15)',
    textLight: '#111111',
    textDark: '#F6F5F2',
  },

  // ─── Semantic ────────────────────────────────────────────────────────────────
  success: {
    light: '#34A853',
    dark: '#81C995',
    hoverLight: '#2D9247',
    hoverDark: '#A8DAB5',
    activeLight: '#24863E',
    activeDark: '#6FB8B9',
    disabledLight: '#C6EBD2',
    disabledDark: '#2F4A3A',
    glowLight: 'rgba(52, 168, 83, 0.35)',
    glowDark: 'rgba(129, 201, 149, 0.4)',
    textLight: '#FFFFFF',
    textDark: '#111111',
  },
  warning: {
    light: '#E67700',
    dark: '#F6AD55',
    hoverLight: '#CC6A00',
    hoverDark: '#FBD38D',
    activeLight: '#B35900',
    activeDark: '#F1A340',
    disabledLight: '#FCD5A6',
    disabledDark: '#3A2B13',
    glowLight: 'rgba(230, 119, 0, 0.35)',
    glowDark: 'rgba(246, 173, 85, 0.4)',
    textLight: '#FFFFFF',
    textDark: '#111111',
  },
  error: {
    light: '#EA4335',
    dark: '#F28B82',
    hoverLight: '#D93025',
    hoverDark: '#F6AEA9',
    activeLight: '#B3261E',
    activeDark: '#E57373',
    disabledLight: '#FBC5C1',
    disabledDark: '#3A2F2F',
    glowLight: 'rgba(224, 67, 53, 0.35)',
    glowDark: 'rgba(242, 139, 130, 0.4)',
    textLight: '#FFFFFF',
    textDark: '#111111',
  },
  info: {
    light: '#4285F4',
    dark: '#8AB4F8',
    hoverLight: '#1A73E8',
    hoverDark: '#AECBFA',
    activeLight: '#0F5CC7',
    activeDark: '#7BAAF7',
    disabledLight: '#D6E3FD',
    disabledDark: '#2A3B5E',
    glowLight: 'rgba(66, 133, 244, 0.35)',
    glowDark: 'rgba(138, 180, 248, 0.4)',
    textLight: '#FFFFFF',
    textDark: '#111111',
  },

  // ─── Backgrounds ─────────────────────────────────────────────────────────────
  background: {
    /** Light: warm off-white (brand Cream) for an editorial, premium feel */
    light: '#F6F5F2',
    dark: '#0A0A0A',
    /** Light paper surfaces are pure white for contrast against Cream bg */
    paperLight: '#FFFFFF',
    paperDark: '#141414',
  },

  // ─── Text ────────────────────────────────────────────────────────────────────
  text: {
    primaryLight: '#111111',
    primaryDark: '#F6F5F2',
    secondaryLight: '#686868',
    secondaryDark: '#9AA0A6',
  },

  // ─── Dividers ────────────────────────────────────────────────────────────────
  divider: {
    light: 'rgba(17, 17, 17, 0.1)',
    dark: 'rgba(246, 245, 242, 0.1)',
  },

  // ─── Action States ───────────────────────────────────────────────────────────
  action: {
    hoverLight: 'rgba(17, 17, 17, 0.04)',
    hoverDark: 'rgba(255, 255, 255, 0.06)',
    /** Selected tint: charcoal-based in light, cream-based in dark */
    selectedLight: 'rgba(17, 17, 17, 0.08)',
    selectedDark: 'rgba(246, 245, 242, 0.12)',
  },

  white: '#FFFFFF',
  black: '#0A0A0A',

  // ─── Glass System (unchanged — glassmorphism architecture preserved) ──────────
  glass: {
    /** Palette-compatible color tokens for custom color="glass" */
    mainLight: 'rgba(255, 255, 255, 0.72)',
    mainDark: 'rgba(255, 255, 255, 0.12)',
    contrastTextLight: '#111111',
    contrastTextDark: '#F6F5F2',
    lightLight: 'rgba(255, 255, 255, 0.88)',
    lightDark: 'rgba(255, 255, 255, 0.18)',
    darkLight: 'rgba(255, 255, 255, 0.55)',
    darkDark: 'rgba(255, 255, 255, 0.08)',
    hoverLight: 'rgba(255, 255, 255, 0.9)',
    hoverDark: 'rgba(255, 255, 255, 0.2)',
    activeLight: 'rgba(255, 255, 255, 0.78)',
    activeDark: 'rgba(255, 255, 255, 0.09)',
    disabledLight: 'rgba(255, 255, 255, 0.35)',
    disabledDark: 'rgba(255, 255, 255, 0.04)',
    glowLight: 'rgba(0, 0, 0, 0.08)',
    glowDark: 'rgba(255, 255, 255, 0.25)',

    buttonBorderLight: 'rgba(0, 0, 0, 0.18)',
    buttonBorderDark: 'rgba(255, 255, 255, 0.2)',
    buttonBgLight: 'rgba(0, 0, 0, 0.02)',
    buttonBgDark: 'rgba(255, 255, 255, 0.04)',
    buttonHoverBgLight: 'rgba(0, 0, 0, 0.05)',
    buttonHoverBgDark: 'rgba(255, 255, 255, 0.08)',
    buttonTextHoverLight: 'rgba(0, 0, 0, 0.04)',
    buttonTextHoverDark: 'rgba(255, 255, 255, 0.06)',
    fabShadowLight: '0 8px 24px rgba(0,0,0,0.14)',
    fabShadowDark: '0 8px 24px rgba(0,0,0,0.6)',
    inputBorderHoverLight: 'rgba(17, 17, 17, 0.35)',
    inputBorderHoverDark: 'rgba(255, 255, 255, 0.3)',
    inputFocusBgDark: 'rgba(255, 255, 255, 0.06)',
    paperBgLight: 'rgba(255, 255, 255, 0.95)',
    paperBgDark: 'rgba(20, 20, 20, 0.95)',
    paperBorderLight: 'rgba(17, 17, 17, 0.08)',
    paperBorderDark: 'rgba(255, 255, 255, 0.1)',
    paperShadowLight: '0 16px 40px rgba(0, 0, 0, 0.08)',
    paperShadowDark: '0 16px 40px rgba(0, 0, 0, 0.6)',
    controlLight: 'rgba(17, 17, 17, 0.3)',
    controlDark: 'rgba(255, 255, 255, 0.3)',
    switchTrackLight: 'rgba(17, 17, 17, 0.15)',
    switchTrackDark: 'rgba(255, 255, 255, 0.2)',
    switchShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    sliderThumbShadow: '0 2px 8px rgba(0,0,0,0.2)',
    sliderRailLight: 'rgba(17, 17, 17, 0.1)',
    sliderRailDark: 'rgba(255, 255, 255, 0.15)',
    chipBgLight: 'rgba(17, 17, 17, 0.05)',
    chipBgDark: 'rgba(255, 255, 255, 0.08)',
    chipBorderLight: 'rgba(17, 17, 17, 0.08)',
    chipBorderDark: 'rgba(255, 255, 255, 0.08)',
    avatarBorderLight: 'rgba(17, 17, 17, 0.1)',
    avatarBorderDark: 'rgba(255, 255, 255, 0.12)',
    tableBorderLight: 'rgba(17, 17, 17, 0.07)',
    tableBorderDark: 'rgba(255, 255, 255, 0.06)',
    tableHeadBgLight: 'rgba(17, 17, 17, 0.025)',
    tableHeadBgDark: 'rgba(255, 255, 255, 0.02)',
    tooltipBgLight: 'rgba(17, 17, 17, 0.88)',
    tooltipBgDark: 'rgba(246, 245, 242, 0.92)',
    tooltipBorderLight: 'rgba(255, 255, 255, 0.1)',
    tooltipBorderDark: 'rgba(0, 0, 0, 0.12)',
    tooltipShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
    dialogBgLight: 'rgba(255, 255, 255, 0.72)',
    dialogBgDark: 'rgba(14, 14, 14, 0.72)',
    dialogShadowLight: '0 24px 64px rgba(0, 0, 0, 0.12)',
    dialogShadowDark: '0 24px 64px rgba(0, 0, 0, 0.8)',
    skeletonBgLight: 'rgba(17, 17, 17, 0.06)',
    skeletonBgDark: 'rgba(255, 255, 255, 0.06)',
    progressBgLight: 'rgba(17, 17, 17, 0.08)',
    progressBgDark: 'rgba(255, 255, 255, 0.1)',
    cardBgLight: 'rgba(255, 255, 255, 0.85)',
    cardBgDark: 'rgba(18, 18, 18, 0.78)',
    cardShadowLight: '0 12px 36px 0 rgba(0, 0, 0, 0.04)',
    cardShadowDark: '0 12px 36px 0 rgba(0, 0, 0, 0.55)',
    cardHoverShadowLight: '0 20px 48px 0 rgba(0, 0, 0, 0.1)',
    cardHoverShadowDark: '0 20px 48px 0 rgba(0, 0, 0, 0.72)',
    elevation1Light: '0 8px 24px rgba(0, 0, 0, 0.05)',
    elevation1Dark: '0 8px 24px rgba(0, 0, 0, 0.4)',
    appBarBgLight: 'rgba(246, 245, 242, 0.82)',
    appBarBgDark: 'rgba(10, 10, 10, 0.78)',
    accordionBgLight: 'rgba(255, 255, 255, 0.6)',
    accordionBgDark: 'rgba(18, 18, 18, 0.6)',
    drawerBgLight: 'rgba(246, 245, 242, 0.97)',
    drawerBgDark: 'rgba(10, 10, 10, 0.97)',
    menuItemHoverLight: 'rgba(17, 17, 17, 0.04)',
    menuItemHoverDark: 'rgba(255, 255, 255, 0.08)',
  },

  alertRgb: {
    success: '52, 168, 83',
    warningDark: '246, 173, 85',
    warningLight: '230, 119, 0',
    error: '234, 67, 53',
    info: '66, 133, 244',
  },

  // ─── Gradients ───────────────────────────────────────────────────────────────
  /** Monochrome sweep — Charcoal → Stone. Used only on accent/hero text. */
  gradients: {
    primary: 'linear-gradient(135deg, #111111 0%, #686868 100%)',
    primaryHover: 'linear-gradient(135deg, #000000 0%, #4A4A4A 100%)',
    /** Light-mode accent variant: Stone → Sand for a softer editorial sweep */
    accent: 'linear-gradient(135deg, #686868 0%, #D9D9CF 100%)',
    /** Dark-mode accent: Cream → Stone */
    accentDark: 'linear-gradient(135deg, #F6F5F2 0%, #686868 100%)',
  },
};
