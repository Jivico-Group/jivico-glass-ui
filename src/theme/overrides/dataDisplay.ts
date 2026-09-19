import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';

/**
 * MUI component overrides — Data Display:
 * Chip, Avatar, Divider, Table, TableCell, Tooltip
 */
export const getDataDisplayOverrides = (
  palette: JivicoPalette,
  isDark: boolean
): Components<Theme> => {
  // ── Semantic colour maps ──────────────────────────────────────────
  const semanticFilled: Record<string, { bg: string; border: string; text: string }> = {
    primary: {
      bg: isDark ? 'rgba(246,245,242,0.12)' : 'rgba(17,17,17,0.88)',
      border: isDark ? 'rgba(246,245,242,0.2)' : 'rgba(17,17,17,0.9)',
      text: isDark ? '#F6F5F2' : '#FFFFFF',
    },
    secondary: {
      bg: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(17,17,17,0.08)',
      border: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(17,17,17,0.18)',
      text: isDark ? '#FFFFFF' : '#111111',
    },
    success: {
      bg: isDark ? 'rgba(129,201,149,0.18)' : 'rgba(52,168,83,0.1)',
      border: isDark ? 'rgba(129,201,149,0.35)' : 'rgba(52,168,83,0.3)',
      text: isDark ? '#81C995' : '#1E7E34',
    },
    warning: {
      bg: isDark ? 'rgba(246,173,85,0.18)' : 'rgba(230,119,0,0.1)',
      border: isDark ? 'rgba(246,173,85,0.35)' : 'rgba(230,119,0,0.3)',
      text: isDark ? '#F6AD55' : '#9A5000',
    },
    error: {
      bg: isDark ? 'rgba(242,139,130,0.18)' : 'rgba(234,67,53,0.1)',
      border: isDark ? 'rgba(242,139,130,0.35)' : 'rgba(234,67,53,0.3)',
      text: isDark ? '#F28B82' : '#C0392B',
    },
    info: {
      bg: isDark ? 'rgba(138,180,248,0.18)' : 'rgba(66,133,244,0.1)',
      border: isDark ? 'rgba(138,180,248,0.35)' : 'rgba(66,133,244,0.3)',
      text: isDark ? '#8AB4F8' : '#1558B0',
    },
    default: {
      bg: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(17,17,17,0.05)',
      border: isDark ? 'rgba(255,255,255,0.14)' : 'rgba(17,17,17,0.12)',
      text: isDark ? palette.text.primary : palette.text.primary,
    },
  };

  const semanticOutlined: Record<string, { border: string; text: string; hoverBg: string }> = {
    primary: {
      border: isDark ? 'rgba(246,245,242,0.55)' : 'rgba(17,17,17,0.7)',
      text: isDark ? '#F6F5F2' : '#111111',
      hoverBg: isDark ? 'rgba(246,245,242,0.08)' : 'rgba(17,17,17,0.06)',
    },
    secondary: {
      border: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(17,17,17,0.25)',
      text: isDark ? '#FFFFFF' : '#111111',
      hoverBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(17,17,17,0.04)',
    },
    success: {
      border: isDark ? 'rgba(129,201,149,0.5)' : 'rgba(52,168,83,0.5)',
      text: isDark ? '#81C995' : '#1E7E34',
      hoverBg: isDark ? 'rgba(129,201,149,0.1)' : 'rgba(52,168,83,0.07)',
    },
    warning: {
      border: isDark ? 'rgba(246,173,85,0.5)' : 'rgba(230,119,0,0.5)',
      text: isDark ? '#F6AD55' : '#9A5000',
      hoverBg: isDark ? 'rgba(246,173,85,0.1)' : 'rgba(230,119,0,0.07)',
    },
    error: {
      border: isDark ? 'rgba(242,139,130,0.5)' : 'rgba(234,67,53,0.5)',
      text: isDark ? '#F28B82' : '#C0392B',
      hoverBg: isDark ? 'rgba(242,139,130,0.1)' : 'rgba(234,67,53,0.07)',
    },
    info: {
      border: isDark ? 'rgba(138,180,248,0.5)' : 'rgba(66,133,244,0.5)',
      text: isDark ? '#8AB4F8' : '#1558B0',
      hoverBg: isDark ? 'rgba(138,180,248,0.1)' : 'rgba(66,133,244,0.07)',
    },
    default: {
      border: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(17,17,17,0.25)',
      text: isDark ? palette.text.primary : palette.text.primary,
      hoverBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(17,17,17,0.04)',
    },
  };

  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const color = ownerState.color ?? 'default';
          const variant = ownerState.variant ?? 'filled';

          const filled = semanticFilled[color] ?? semanticFilled.default;
          const outlined = semanticOutlined[color] ?? semanticOutlined.default;

        return {
          // ── Base ──────────────────────────────────────────────────────
          display: 'inline-flex',
          alignItems: 'center',
          borderRadius: 9999,
          height: 'auto',
          fontWeight: 500,
          fontFamily: '"Montserrat", "Google Sans Flex", -apple-system, sans-serif',
          fontSize: '0.76rem',
          letterSpacing: '0.02em',
          lineHeight: 1,
          padding: '5px 12px',
          cursor: 'default',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          userSelect: 'none',

          '& .MuiChip-label': {
            color: 'inherit',
            padding: 0,
          },

          // Delete icon
          '& .MuiChip-deleteIcon': {
            fontSize: '16px',
            marginLeft: '6px',
            marginRight: '-2px',
            opacity: 0.55,
            transition: 'opacity 0.15s ease, transform 0.15s ease',
            '&:hover': {
              opacity: 1,
              transform: 'scale(1.15)',
              color: 'inherit',
            },
          },

          // Avatar inside chip
          '& .MuiChip-avatar': {
            width: 20,
            height: 20,
            marginLeft: '-4px',
            marginRight: '6px',
            fontSize: '0.65rem',
            fontWeight: 700,
          },

          // ── Filled variant ────────────────────────────────────────────
          ...(variant === 'filled' && {
            backgroundColor: filled.bg,
            border: `1px solid ${filled.border}`,
            color: filled.text,
            boxShadow: isDark
              ? '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)'
              : '0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',

            '&.MuiChip-clickable:hover': {
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? '0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                : '0 6px 14px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
              filter: 'brightness(1.08)',
            },
          }),

          // ── Outlined variant ──────────────────────────────────────────
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            border: `1.5px solid ${outlined.border}`,
            color: outlined.text,
            boxShadow: 'none',

            '&.MuiChip-clickable:hover': {
              backgroundColor: outlined.hoverBg,
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? '0 4px 12px rgba(0,0,0,0.25)'
                : '0 4px 10px rgba(0,0,0,0.07)',
            },
          }),
        };
      },

      // ── Size variants ──────────────────────────────────────────────────
      sizeSmall: {
        fontSize: '0.68rem',
        padding: '3px 9px',
        '& .MuiChip-avatar': {
          width: 16,
          height: 16,
          marginLeft: '-3px',
          marginRight: '4px',
          fontSize: '0.55rem',
        },
        '& .MuiChip-deleteIcon': {
          fontSize: '14px',
          marginLeft: '4px',
        },
      },

      sizeMedium: {
        fontSize: '0.76rem',
        padding: '5px 12px',
      },
    },
  },

  MuiAvatar: {
    styleOverrides: {
      root: {
        borderRadius: '50%',
        border: `1.5px solid ${palette.glass.avatarBorder}`,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.divider,
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        borderRadius: 18,
        overflow: 'hidden',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${palette.glass.tableBorder}`,
        padding: '14px 20px',
        color: palette.text.primary,
      },
      head: {
        fontWeight: 600,
        color: palette.text.secondary,
        backgroundColor: palette.glass.tableHeadBg,
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
      },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: ({ ownerState }) => {
        // Exclude standard styles if variant is dot, since dot is super small, 
        // but we can still style its bg and border.
        const color = ownerState.color && ownerState.color !== "default" ? ownerState.color : "default";
        const filled = semanticFilled[color] ?? semanticFilled.default;

        return {
          backgroundColor: filled.bg,
          color: filled.text,
          border: `1px solid ${filled.border}`,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: palette.glass.paperShadow,
          fontWeight: 600,
        };
      },
    },
  },
};
};
