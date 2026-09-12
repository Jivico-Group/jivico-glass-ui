import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';

/**
 * MUI component overrides — Surfaces:
 * Card, Paper, AppBar, Accordion
 */
export const getSurfaceOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiCard: {
    styleOverrides: {
      root: {
        background: `linear-gradient(135deg, ${palette.glass.cardBg} 0%, ${
          isDark ? 'rgba(30,30,35,0.2)' : 'rgba(255,255,255,0.4)'
        } 100%)`,
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: `${palette.glass.cardShadow}, inset 0 1px 1px 0 ${
          isDark ? 'rgba(246, 29, 29, 0.1)' : 'rgba(255, 255, 255, 0.7)'
        }`,
        transition:
          'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.01)',
          boxShadow: isDark
            ? '0 28px 60px rgba(0, 0, 0, 0.65), 0 0 32px rgba(236, 72, 153, 0.28), inset 0 1px 2px rgba(255, 255, 255, 0.35)'
            : '0 28px 60px rgba(236, 72, 153, 0.14), 0 0 28px rgba(236, 72, 153, 0.18), inset 0 1px 2px rgba(255, 255, 255, 1)',
          borderColor: isDark ? 'rgba(236, 72, 153, 0.5)' : 'rgba(236, 72, 153, 0.4)',
          '&::after': {
            left: '160%',
            transition: 'all 0.8s ease',
          },
          '& .product-img': {
            transform: 'scale(1.08)',
          },
          '& .quick-actions': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundImage: 'none',
      },
      elevation1: {
        boxShadow: palette.glass.elevation1,
      },
    },
    variants: [
      {
        props: { variant: 'glassFooter' as any },
        style: {
          backgroundColor: palette.glass.appBarBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: `1px solid ${palette.glass.chipBorder}`,
          borderRadius: 0,
          paddingTop: '64px',
          paddingBottom: '32px',
          marginTop: 'auto',
          color: palette.text.primary,
        },
      },
    ],
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.glass.appBarBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${palette.glass.chipBorder}`,
        borderRadius: 0,
        boxShadow: 'none',
        color: palette.text.primary,
        transition: 'all 0.3s ease',
        zIndex: 1100,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        backgroundColor: palette.glass.accordionBg,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: 'none',
        '&:before': { display: 'none' },
        '&.Mui-expanded': {
          margin: '12px 0',
        },
      },
    },
  },
});
