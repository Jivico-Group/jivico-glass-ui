/**
 * Shared typography configuration for the Jivico design system.
 */
export const typography = {
  fontFamily: [
    '"SF Pro Display"',
    '"SF Pro Text"',
    '"Google Sans Flex"',
    '"Google Sans"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'sans-serif',
  ].join(','),
  h1: { fontSize: '3.75rem', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05 },
  h2: { fontSize: '2.85rem', fontWeight: 600, letterSpacing: '-0.028em', lineHeight: 1.1 },
  h3: { fontSize: '2.1rem', fontWeight: 600, letterSpacing: '-0.022em', lineHeight: 1.18 },
  h4: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.015em' },
  h5: { fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' },
  h6: { fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.005em' },
  body1: { fontSize: '1.0625rem', lineHeight: 1.5, letterSpacing: '-0.01em', fontWeight: 400 },
  body2: { fontSize: '0.875rem', lineHeight: 1.45, letterSpacing: '-0.005em' },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500,
    letterSpacing: '-0.01em',
    fontSize: '0.9375rem',
  },
};
