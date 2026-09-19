import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';
import { liquidGlassPopupRecipe } from './glassRecipe.js';

/**
 * MUI component overrides — Surfaces:
 * Card, Paper, Accordion
 *
 * Note: MuiAppBar lives in navigation.ts (uses glassRecipe).
 */
export const getSurfaceOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  MuiCard: {
    styleOverrides: {
      root: {
        background: `linear-gradient(135deg, ${palette.glass.cardBg} 0%, ${
          isDark ? 'rgba(22, 22, 22, 0.25)' : 'rgba(255, 255, 255, 0.45)'
        } 100%)`,
        border: `1px solid ${palette.glass.chipBorder}`,
        boxShadow: `${palette.glass.cardShadow}, inset 0 1px 1px 0 ${
          isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.75)'
        }`,
        transition:
          'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.01)',
          // Luxury hover: deep neutral shadow — no colour glow, just depth
          boxShadow: isDark
            ? '0 28px 60px rgba(0, 0, 0, 0.72), 0 2px 0px rgba(255, 255, 255, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
            : '0 28px 60px rgba(0, 0, 0, 0.12), 0 2px 0 rgba(255, 255, 255, 1), inset 0 1px 2px rgba(255, 255, 255, 1)',
          borderColor: isDark ? 'rgba(246, 245, 242, 0.14)' : 'rgba(17, 17, 17, 0.16)',
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
        '&.MuiPopover-paper, &.MuiMenu-paper, &.MuiAutocomplete-paper': {
          ...liquidGlassPopupRecipe(isDark),
        },
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
