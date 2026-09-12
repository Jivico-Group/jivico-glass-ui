import { Box, IconButton, styled } from '@mui/material';

export interface GlassToolbarRootProps {
  isDark: boolean;
  isScrolled?: boolean;
}

export const GlassToolbarRoot = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark' && p !== 'isScrolled',
})<GlassToolbarRootProps>(({ theme, isDark, isScrolled }) => ({
  position: 'fixed',
  top: 'calc(72px + env(safe-area-inset-top, 0px))',
  zIndex: 1000,
  width: '100%',
  padding: isScrolled ? theme.spacing(0.8, 0) : theme.spacing(1.5, 0),
  borderBottom: `1px solid ${
    isScrolled ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)') : 'transparent'
  }`,
  background: isDark ? 'rgba(10,10,12,0.85)' : 'rgba(255,255,255,0.88)',
  backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
  WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
  transform: 'translateZ(0)',
  WebkitTransform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  boxShadow: isScrolled
    ? isDark
      ? '0 10px 30px rgba(0,0,0,0.5)'
      : '0 10px 30px rgba(0,0,0,0.06)'
    : 'none',
  transition: [
    'padding 450ms cubic-bezier(0.16, 1, 0.3, 1)',
    'background-color 350ms ease',
    'border-color 350ms ease',
    'box-shadow 450ms cubic-bezier(0.16, 1, 0.3, 1)',
    'backdrop-filter 450ms ease',
  ].join(', '),
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 0,
  },
}));

export const GlassNavArrowButton = styled(IconButton, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ theme, isDark }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: 34,
  height: 34,
  backgroundColor: isDark ? 'rgba(20,20,24,0.75)' : 'rgba(255,255,255,0.85)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`,
  color: isDark ? '#FFFFFF' : '#111827',
  boxShadow: isDark ? '0 4px 14px rgba(0,0,0,0.4)' : '0 4px 14px rgba(0,0,0,0.08)',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  '&:hover': {
    backgroundColor: isDark ? 'rgba(35,35,42,0.95)' : '#FFFFFF',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: isDark ? '0 6px 20px rgba(236,72,153,0.3)' : '0 6px 20px rgba(236,72,153,0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export interface GlassEdgeFadeProps {
  side?: 'left' | 'right';
  direction?: 'left' | 'right';
  isDark: boolean;
  visible?: boolean;
  bottomOffset?: number;
}

export const GlassEdgeFade = styled(Box, {
  shouldForwardProp: (p) =>
    p !== 'side' && p !== 'direction' && p !== 'isDark' && p !== 'visible' && p !== 'bottomOffset',
})<GlassEdgeFadeProps>(({ theme, side, direction, isDark, visible = true, bottomOffset = 0 }) => {
  const align = side ?? direction ?? 'left';
  const bg =
    align === 'left'
      ? isDark
        ? 'linear-gradient(to right, rgba(11, 11, 15, 0.9) 0%, transparent 100%)'
        : 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, transparent 100%)'
      : isDark
      ? 'linear-gradient(to left, rgba(11, 11, 15, 0.9) 0%, transparent 100%)'
      : 'linear-gradient(to left, rgba(255, 255, 255, 0.9) 0%, transparent 100%)';

  return {
    position: 'absolute',
    top: 0,
    bottom: bottomOffset,
    [align]: 0,
    width: 44,
    pointerEvents: 'none',
    zIndex: 5,
    background: bg,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.25s ease',
    [theme.breakpoints.up('md')]: {
      width: 56,
    },
  };
});

export const EdgeFade = GlassEdgeFade;
