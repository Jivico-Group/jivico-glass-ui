import type { Components, Theme } from '@mui/material/styles';
import { COLORS } from '../colors.js';
import type { JivicoPalette } from '../palette.js';

/**
 * MUI component overrides — Inputs category:
 * Button, ButtonGroup, Fab, OutlinedInput, InputLabel, Select, Autocomplete
 */
export const getInputOverrides = (palette: JivicoPalette, isDark: boolean): Components<Theme> => ({
  // ========================================================================
  // BUTTON
  // ========================================================================
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const variant = ownerState.variant || 'text';
        const colorKey = (
          ownerState.color && ownerState.color !== 'inherit' ? ownerState.color : 'primary'
        ) as keyof typeof palette;
        const activeColorGroup = (palette[colorKey] || palette.primary) as Record<string, string>;
        const mainColor = activeColorGroup.main;
        const hoverColor = activeColorGroup.hover;
        const glowColor = activeColorGroup.glow;
        const isPrimary = colorKey === 'primary';
        const isSecondary = colorKey === 'secondary';

        let textColor = COLORS.white;
        if (
          isDark &&
          (isSecondary || colorKey === 'success' || colorKey === 'warning' || colorKey === 'info')
        ) {
          textColor = COLORS.black;
        }

        return {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 48,
          borderRadius: 30,
          padding: '12px 28px',
          fontWeight: 800,
          fontSize: '0.92rem',
          lineHeight: 1.2,
          textTransform: 'none',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          fontFamily: '"Google Sans Flex", "SF Pro Display", -apple-system, sans-serif',
          letterSpacing: '-0.01em',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',

          '&:active': {
            transform: 'translateY(0) scale(0.98)',
          },

          // Primary Contained
          ...(variant === 'contained' &&
            isPrimary && {
              background: COLORS.gradients.primary,
              color: COLORS.white,
              boxShadow: isDark
                ? '0 8px 28px rgba(236,72,153,0.38), inset 0 1px 1px rgba(255,255,255,0.3)'
                : '0 8px 24px rgba(236,72,153,0.28), inset 0 1px 1px rgba(255,255,255,0.4)',

              '&:hover': {
                background: COLORS.gradients.primaryHover,
                transform: 'translateY(-2px)',
                boxShadow: isDark
                  ? '0 12px 36px rgba(236,72,153,0.5), 0 0 20px rgba(139,92,246,0.3)'
                  : '0 12px 32px rgba(236,72,153,0.38)',
              },

              '&:focus-visible': {
                outline: 'none',
                boxShadow: isDark
                  ? '0 0 0 4px rgba(236,72,153,0.22), 0 8px 28px rgba(236,72,153,0.38)'
                  : '0 0 0 4px rgba(236,72,153,0.18), 0 8px 24px rgba(236,72,153,0.28)',
              },
              '&.Mui-disabled': {
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                boxShadow: 'none',
                transform: 'none',
              },
            }),

          // Primary Outlined
          ...(variant === 'outlined' &&
            isPrimary && {
              border: 'none',
              boxShadow: `inset 0 0 0 2px ${isDark ? 'rgba(236,72,153,0.7)' : '#EC4899'}`,
              color: '#EC4899',
              background: isDark ? 'rgba(236,72,153,0.04)' : 'rgba(236,72,153,0.02)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              '&:hover': {
                background: isDark ? 'rgba(236,72,153,0.14)' : 'rgba(236,72,153,0.08)',
                transform: 'translateY(-2px)',
                boxShadow: `inset 0 0 0 2px #F472B6, 0 8px 20px rgba(236,72,153,0.25)`,
              },

              '&:focus-visible': {
                outline: 'none',
                boxShadow: `inset 0 0 0 2px ${isDark ? 'rgba(236,72,153,0.7)' : '#EC4899'}, 0 0 0 4px rgba(236,72,153,0.16), 0 8px 20px rgba(236,72,153,0.2)`,
              },

              '&.Mui-disabled': {
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                background: 'transparent',
                boxShadow: 'none',
                transform: 'none',
              },
            }),

          // Secondary Contained
          ...(variant === 'contained' &&
            isSecondary && {
              backgroundColor: mainColor,
              color: textColor,
              '&:hover': {
                backgroundColor: hoverColor,
                boxShadow: `0 6px 20px ${glowColor}`,
                transform: 'translateY(-1.5px) scale(1.015)',
              },

              '&:focus-visible': {
                outline: 'none',
                boxShadow: `0 0 0 4px ${glowColor}, 0 6px 20px ${glowColor}`,
              },

              '&.Mui-disabled': {
                backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                boxShadow: 'none',
                transform: 'none',
              },
            }),

          // Secondary Outlined
          ...(variant === 'outlined' &&
            isSecondary && {
              borderColor: palette.glass.buttonBorder,
              color: mainColor,
              backgroundColor: palette.glass.buttonBg,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              '&:hover': {
                borderColor: mainColor,
                backgroundColor: palette.glass.buttonHoverBg,
                boxShadow: `0 0 14px ${glowColor}`,
                transform: 'translateY(-1.5px) scale(1.015)',
              },

              '&:focus-visible': {
                outline: 'none',
                boxShadow: `0 0 0 4px ${glowColor}`,
              },

              '&.Mui-disabled': {
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                background: 'transparent',
                boxShadow: 'none',
                transform: 'none',
              },
            }),

          // Other Contained Colors
          ...(variant === 'contained' &&
            !isPrimary &&
            !isSecondary && {
              backgroundColor: mainColor,
              color: textColor,
              '&:hover': {
                backgroundColor: hoverColor,
                boxShadow: `0 6px 20px ${glowColor}`,
                transform: 'translateY(-1.5px) scale(1.015)',
              },
              '&:focus-visible': {
                outline: 'none',
                boxShadow: `0 0 0 4px ${glowColor}`,
              },
            }),

          // Other Outlined Colors
          ...(variant === 'outlined' &&
            !isPrimary &&
            !isSecondary && {
              borderColor: palette.glass.buttonBorder,
              color: mainColor,
              backgroundColor: palette.glass.buttonBg,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              '&:hover': {
                borderColor: mainColor,
                backgroundColor: palette.glass.buttonHoverBg,
                boxShadow: `0 0 14px ${glowColor}`,
                transform: 'translateY(-1.5px) scale(1.015)',
              },

              '&:focus-visible': {
                outline: 'none',
                boxShadow: `0 0 0 4px ${glowColor}`,
              },
            }),

          // Text Button
          ...(variant === 'text' && {
            color: mainColor,
            padding: '8px 16px',
            minHeight: 40,
            '&:hover': {
              backgroundColor: palette.glass.buttonTextHover,
              transform: 'translateY(-1px)',
            },
            '&:focus-visible': {
              outline: 'none',
              boxShadow: `0 0 0 3px ${glowColor}`,
            },
          }),
        };
      },

      sizeSmall: {
        minHeight: 36,
        padding: '8px 18px',
        fontSize: '0.8125rem',
      },
      sizeMedium: {
        minHeight: 40,
        padding: '11px 20px',
        fontSize: '0.875rem',
      },
      sizeLarge: {
        minHeight: 52,
        padding: '13px 30px',
        fontSize: '1.0625rem',
      },
    },
  },

  // ========================================================================
  // BUTTON GROUP
  // ========================================================================
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        overflow: 'hidden',
        boxShadow: 'none',
        '& .MuiButton-root': {
          borderRadius: 0,
        },
      },
    },
  },

  // ========================================================================
  // FAB
  // ========================================================================
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        boxShadow: palette.glass.fabShadow,
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-3px) scale(1.03)',
        },
        '&:active': {
          transform: 'translateY(0) scale(0.97)',
        },
      },
    },
  },

  // ========================================================================
  // OUTLINED INPUT
  // ========================================================================
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: palette.glass.buttonBg,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.divider,
          transition: 'border-color 0.2s ease',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.glass.inputBorderHover,
        },

        '&.Mui-focused': {
          backgroundColor: palette.glass.inputFocusBg,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
            borderWidth: '1.5px',
          },
        },

        '&.Mui-error': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.error.main,
          },
        },
      },

      input: {
        fontSize: '0.9375rem',
        color: palette.text.primary,
      },
      multiline: {
        padding: '13px 18px',
      },
    },
    variants: [
      {
        props: { size: 'small' },
        style: {
          fontSize: '0.85rem',
          '&:not(.MuiInputBase-multiline)': {
            minHeight: 36,
          },
          '& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)': {
            padding: '6px 14px',
            fontSize: '0.85rem',
          },
          '&.MuiInputBase-multiline': {
            padding: '6px 14px',
            alignItems: 'flex-start',
          },
        },
      },
      {
        props: { size: 'medium' },
        style: {
          fontSize: '0.9375rem',
          '&:not(.MuiInputBase-multiline)': {
            minHeight: 48,
          },
          '& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)': {
            padding: '12px 18px',
            fontSize: '0.9375rem',
          },
          '&.MuiInputBase-multiline': {
            padding: '12px 18px',
            alignItems: 'flex-start',
          },
        },
      },
      {
        props: { size: 'large' as any },
        style: {
          fontSize: '1.1rem',
          '&:not(.MuiInputBase-multiline)': {
            minHeight: 56,
          },
          '& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)': {
            padding: '16px 20px',
            fontSize: '1.1rem',
          },
          '&.MuiInputBase-multiline': {
            padding: '16px 20px',
            alignItems: 'flex-start',
          },
        },
      },
    ],
  },

  // ========================================================================
  // INPUT LABEL
  // ========================================================================
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.9375rem',
        color: palette.text.secondary,
        '&.Mui-focused': {
          color: palette.primary.main,
        },
      },
    },
  },

  // ========================================================================
  // SELECT
  // ========================================================================
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        sx: {
          '& .MuiMenuItem-root': {
            minHeight: '32px !important',
            padding: '4px 12px !important',
            fontSize: '0.85rem !important',
          },
        },
      },
    },
  },

  // ========================================================================
  // AUTOCOMPLETE
  // ========================================================================
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        borderRadius: 18,
        backgroundColor: palette.glass.paperBg,
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.paperShadow,
      },
    },
  },
});
