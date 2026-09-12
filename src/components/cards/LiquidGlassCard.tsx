import { Box, IconButton, Typography, styled } from '@mui/material';

export interface LiquidGlassCardRootProps {
  isDark?: boolean;
}

export const LiquidGlassCardRoot = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark',
})<LiquidGlassCardRootProps>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isDark ? '#1C1F26' : '#FFFFFF',
    backgroundImage: isDark
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 100%)',
    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
    boxShadow: isDark
      ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
      : '0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '60%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
      transform: 'skewX(-25deg)',
      transition: 'none',
      pointerEvents: 'none',
    },
    '&:hover': {
      transform: 'translateY(-8px) scale(1.01)',
      boxShadow: isDark
        ? '0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
        : '0 12px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 1)',
      borderColor: isDark ? 'rgba(236, 72, 153, 0.5)' : 'rgba(236, 72, 153, 0.4)',
      '&::after': {
        left: '160%',
        transition: 'all 0.8s ease',
      },
    },
  };
});

export interface LiquidSpotlightImageAreaProps {
  isDark?: boolean;
  spotlight?: 'pink' | 'amber' | 'cyan' | 'purple';
}

export const LiquidSpotlightImageArea = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark' && p !== 'spotlight',
})<LiquidSpotlightImageAreaProps>(({ theme, isDark: explicitDark, spotlight = 'pink' }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  const spotlightColor = {
    pink: {
      primary: isDark ? 'rgba(236, 72, 153, 0.18)' : 'rgba(236, 72, 153, 0.1)',
      secondary: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)',
    },
    amber: {
      primary: isDark ? 'rgba(245, 158, 11, 0.18)' : 'rgba(245, 158, 11, 0.08)',
      secondary: isDark ? 'rgba(236, 72, 153, 0.1)' : 'rgba(236, 72, 153, 0.05)',
    },
    cyan: {
      primary: isDark ? 'rgba(6, 182, 212, 0.18)' : 'rgba(6, 182, 212, 0.08)',
      secondary: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
    },
    purple: {
      primary: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.08)',
      secondary: isDark ? 'rgba(236, 72, 153, 0.1)' : 'rgba(236, 72, 153, 0.05)',
    },
  }[spotlight];

  return {
    position: 'relative',
    width: '100%',
    aspectRatio: '1 / 1.25',
    overflow: 'hidden',
    background: isDark
      ? `radial-gradient(circle at 50% 45%, ${spotlightColor.primary} 0%, ${spotlightColor.secondary} 40%, rgba(15, 17, 26, 0.85) 100%)`
      : `radial-gradient(circle at 50% 45%, ${spotlightColor.primary} 0%, ${spotlightColor.secondary} 40%, rgba(238, 242, 248, 0.95) 100%)`,
    borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}`,
    flexShrink: 0,
    '& img': {
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    '&:hover img': {
      transform: 'scale(1.08)',
    },
  };
});

export const GlassWishlistButton = styled(IconButton, {
  shouldForwardProp: (p) => p !== 'isDark' && p !== 'liked',
})<{ isDark?: boolean; liked?: boolean }>(({ theme, isDark: explicitDark, liked }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  return {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
    width: 36,
    height: 36,
    backgroundColor: isDark ? 'rgba(20, 20, 28, 0.65)' : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.9)'}`,
    boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
    color: liked ? '#EC4899' : isDark ? '#FFFFFF' : '#111827',
    transition: 'all 0.25s ease',
    '&:hover': {
      backgroundColor: '#EC4899',
      color: '#FFFFFF',
      transform: 'scale(1.12)',
      boxShadow: '0 6px 16px rgba(236, 72, 153, 0.45)',
    },
  };
});

export const HolographicBadge = styled(Box, {
  shouldForwardProp: (p) => p !== 'tagColor' && p !== 'gradient',
})<{ tagColor?: string; gradient?: string }>(({ theme, tagColor, gradient }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  zIndex: 2,
  padding: theme.spacing(0.4, 1.2),
  borderRadius: 999,
  fontSize: '0.66rem',
  fontWeight: 900,
  letterSpacing: 0.6,
  color: '#FFFFFF',
  background: gradient || tagColor || '#EC4899',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
  textTransform: 'uppercase',
  backdropFilter: 'blur(8px)',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    top: 8,
    left: 8,
    padding: '3px 8px',
    fontSize: '0.58rem',
    letterSpacing: 0.3,
  },
}));

export const GlassCardBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

export const GlassProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '0.92rem',
  lineHeight: 1.35,
  minHeight: '2.7em',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.82rem',
    minHeight: '2.5em',
  },
}));

export const TribeMemberPill = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark' && p !== 'variant',
})<{ isDark?: boolean; variant?: 'pink' | 'amber' }>(({ theme, isDark: explicitDark, variant = 'pink' }) => {
  const isDark = explicitDark ?? theme.palette.mode === 'dark';
  const isPink = variant === 'pink';

  return {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.6),
    padding: theme.spacing(0.4, 0.9),
    borderRadius: 8,
    background: isDark
      ? isPink
        ? 'linear-gradient(90deg, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.18) 100%)'
        : 'linear-gradient(90deg, rgba(245, 158, 11, 0.18) 0%, rgba(236, 72, 153, 0.18) 100%)'
      : isPink
        ? 'linear-gradient(90deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
        : 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
    border: `1px solid ${
      isDark
        ? isPink
          ? 'rgba(236, 72, 153, 0.3)'
          : 'rgba(245, 158, 11, 0.3)'
        : isPink
          ? 'rgba(236, 72, 153, 0.2)'
          : 'rgba(245, 158, 11, 0.2)'
    }`,
    fontSize: '0.72rem',
    fontWeight: 800,
    color: isDark ? (isPink ? '#F472B6' : '#FBBF24') : isPink ? '#DB2777' : '#D97706',
    marginTop: 'auto',
  };
});

export const LiquidGlassCard = LiquidGlassCardRoot;
