import { Box, Typography, styled } from '@mui/material';
import { GlassPanel } from './GlassPanel.js';

export const HeroSection = styled(Box)({
  position: 'relative',
  zIndex: 1,
  paddingTop: 48,
  paddingBottom: 128,
  '@media (max-width:899.95px)': {
    paddingTop: 32,
    paddingBottom: 80,
  },
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.03em',
  fontSize: '4.2rem',
  lineHeight: 1.08,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  opacity: 0.7,
  marginBottom: theme.spacing(5),
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.6,
  fontSize: '1.05rem',
}));

export const HeroActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0),
    justifyContent: 'space-between',
  },
}));

export const HeroStatsPanel = styled(GlassPanel)(({ theme }) => ({
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
  padding: 24,
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    bottom: 14,
    left: 14,
    right: 14,
    padding: '14px 16px',
    borderRadius: 20,
  },
}));

export const StatValue = styled(Typography)({
  fontWeight: 800,
});

export const StatLabel = styled(Typography)({
  opacity: 0.6,
});

export const HeroImageFrame = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ theme, isDark }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '4/3',
  borderRadius: '32px',
  overflow: 'hidden',
  boxShadow: isDark ? '0 24px 80px rgba(0,0,0,0.5)' : '0 24px 80px rgba(0,0,0,0.08)',
  [theme.breakpoints.down('md')]: {
    aspectRatio: '4/5',
    minHeight: 450,
    borderRadius: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    aspectRatio: '3/4',
    minHeight: 480,
    borderRadius: '22px',
  },
}));

export const CoverImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});
