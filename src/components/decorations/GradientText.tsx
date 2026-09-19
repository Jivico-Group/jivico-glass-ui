import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Jivico Studio — Monochrome accent gradient.
 * Light mode: Charcoal → Stone (bold editorial sweep)
 * Dark mode: Cream → Stone (luminous on deep black)
 */
const gradientLight = 'linear-gradient(135deg, #111111 0%, #686868 100%)';
const gradientDark = 'linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)';

export const GradientText = styled('span')<{ isDark?: boolean }>(({ isDark }) => ({
  background: isDark ? gradientDark : gradientLight,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline',
}));

export const GradientContextTitle = styled(Typography)<{ isDark?: boolean }>(({ isDark }) => ({
  fontWeight: 800,
  letterSpacing: '-0.04em',
  lineHeight: 1.2,
  fontSize: '1.35rem',
  display: 'inline-block',
  paddingBottom: '4px',
  marginBottom: '-4px',
  background: isDark ? gradientDark : gradientLight,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));
