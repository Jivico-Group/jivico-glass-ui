import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const gradient = 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)';

export const GradientText = styled('span')<{ isDark?: boolean }>(() => ({
  background: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline',
}));

export const GradientContextTitle = styled(Typography)(() => ({
  fontWeight: 800,
  letterSpacing: '-0.4px',
  lineHeight: 1.25,
  fontSize: '1.35rem',
  display: 'inline-block',
  paddingBottom: '4px',
  marginBottom: '-4px',
  background: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));
