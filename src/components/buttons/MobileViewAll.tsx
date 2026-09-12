import { Button, styled } from '@mui/material';

export const MobileViewAllButton = styled(Button, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark?: boolean }>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    width: '100%',
    padding: '12px 24px',
    borderRadius: 16,
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}`,
    color: isDark ? '#FFFFFF' : '#111827',
    backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
    backdropFilter: 'blur(8px)',
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
      borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
    },
  };
});
