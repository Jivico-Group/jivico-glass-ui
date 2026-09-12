import { Box, styled } from '@mui/material';

export interface GlassPanelProps {
  isDark?: boolean;
}

export const GlassPanel = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark',
})<GlassPanelProps>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    backgroundColor: isDark ? 'rgba(28, 31, 38, 0.65)' : 'rgba(255, 255, 255, 0.24)',
    backgroundImage: isDark
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(248, 250, 252, 0.4) 100%)',
    backdropFilter: 'blur(48px) saturate(180%)',
    WebkitBackdropFilter: 'blur(48px) saturate(180%)',
    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.6)'}`,
    boxShadow: isDark
      ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
      : `
      0 20px 50px rgba(15, 23, 42, 0.08),
      0 8px 20px rgba(15, 23, 42, 0.06),
      0 2px 6px rgba(15, 23, 42, 0.04),
      inset 0 1px 1px rgba(255, 255, 255, 0.95)
    `,
    borderRadius: 24,
  };
});
