import { Box, Typography, IconButton, styled } from '@mui/material';

export const GlassSectionHeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
  },
}));

export const GlassTitleGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 'auto',
  },
}));

export interface GlassIconGlowProps {
  gradient?: 'amber' | 'pink' | 'cyan' | 'purple' | 'emerald';
}

export const GlassIconGlow = styled(Box, {
  shouldForwardProp: (p) => p !== 'gradient',
})<GlassIconGlowProps>(({ gradient = 'amber' }) => {
  const bg = {
    amber: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
    pink: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    cyan: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    purple: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    emerald: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
  }[gradient];

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 14,
    background: bg,
    color: '#FFFFFF',
    boxShadow: '0 4px 16px rgba(236, 72, 153, 0.35)',
  };
});

export const GlassSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 900,
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

export const GlassSectionSubtitle = styled(Typography, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ isDark }) => ({
  fontSize: '0.875rem',
  color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.65)',
}));

export const GlassControlsGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const GlassScrollButton = styled(IconButton, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ isDark }) => ({
  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'}`,
  color: isDark ? '#FFFFFF' : '#111827',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
    transform: 'scale(1.06)',
  },
}));
