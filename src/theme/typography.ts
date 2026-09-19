/**
 * Jivico Studio Design System — Typography
 *
 * Font stack per Brand Kit:
 *  - Headlines / Logo: Brush Script style (handled by logo asset)
 *  - Subheadings / Accent: Montserrat · Space Grotesk
 *  - Body / UI: SF Pro Display (macOS/iOS native), Google Sans Flex
 */
export const typography = {
  fontFamily: [
    '"SF Pro Display"',
    '"SF Pro Text"',
    '"Google Sans Flex"',
    '"Google Sans"',
    '"Montserrat"',
    '"Space Grotesk"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'sans-serif',
  ].join(','),

  // Tight, editorial headings — luxury fashion house cadence
  h1: {
    fontSize: '3.75rem',
    fontWeight: 700,
    letterSpacing: '-0.04em',
    lineHeight: 1.0,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },
  h2: {
    fontSize: '2.85rem',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.08,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },
  h3: {
    fontSize: '2.1rem',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    lineHeight: 1.15,
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '-0.018em',
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    letterSpacing: '-0.012em',
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '-0.006em',
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },

  // Body text: regular weight, high legibility
  body1: {
    fontSize: '1.0625rem',
    lineHeight: 1.55,
    letterSpacing: '-0.008em',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '-0.004em',
  },

  // Buttons: Montserrat caps feel premium but readable
  button: {
    textTransform: 'none' as const,
    fontWeight: 600,
    letterSpacing: '0.01em',
    fontSize: '0.9375rem',
    fontFamily: '"Montserrat", "SF Pro Display", -apple-system, sans-serif',
  },

  // Overline for tags / labels
  overline: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    fontFamily: '"Montserrat", "Space Grotesk", -apple-system, sans-serif',
  },
};

/**
 * Google Fonts URL for Montserrat + Space Grotesk.
 * Import this in your <head> or via a FontPreload component.
 */
export const JIVICO_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap';
