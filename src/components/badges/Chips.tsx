import { Chip, styled } from '@mui/material';

export const FreestyleBadge = styled(Chip, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark?: boolean }>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    backgroundColor: isDark ? 'rgba(233,30,99,0.15)' : 'rgba(233,30,99,0.08)',
    color: '#E91E63',
    fontWeight: 700,
    fontSize: '0.7rem',
    marginBottom: theme.spacing(3),
  };
});

export const BannerChip = styled(Chip, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark?: boolean }>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    backgroundColor: theme.palette.secondary.main,
    color: isDark ? '#1D1D1F' : '#FFF',
    fontWeight: 700,
    fontSize: '0.7rem',
    marginBottom: 16,
  };
});

export const SupportedTypeChip = styled(Chip, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark?: boolean }>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
    fontWeight: 600,
    fontSize: '0.75rem',
  };
});

export const FilterChip = styled(Chip, {
  shouldForwardProp: (p) => p !== 'isSelected',
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  borderRadius: 12,
  fontWeight: 700,
  fontSize: '0.84rem',
  height: 38,
  padding: '0 4px',
  border: `1.5px solid ${
    isSelected
      ? '#EC4899'
      : theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.1)'
        : 'rgba(0,0,0,0.08)'
  }`,
  background: isSelected
    ? theme.palette.mode === 'dark'
      ? 'rgba(236,72,153,0.15)'
      : 'rgba(236,72,153,0.08)'
    : 'transparent',
  color: isSelected
    ? '#EC4899'
    : theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.8)'
      : 'rgba(0,0,0,0.7)',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    background: isSelected
      ? theme.palette.mode === 'dark'
        ? 'rgba(236,72,153,0.2)'
        : 'rgba(236,72,153,0.12)'
      : theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,0.06)'
        : 'rgba(0,0,0,0.04)',
  },
}));
