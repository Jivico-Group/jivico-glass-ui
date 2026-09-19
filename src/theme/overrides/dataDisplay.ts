import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

/**
 * MUI component overrides — Data Display:
 * Chip, Avatar, Divider, Table, TableCell, Tooltip
 */
export const getDataDisplayOverrides = (
  palette: JivicoPalette,
  isDark: boolean
): Components<Theme> => {
  // ── Chip colour helpers ────────────────────────────────────────────
  // Pull palette groups for dynamic chip colouring
  const chipColor = (
    colorKey: string,
  ): { main: string; hover: string; active: string; disabled: string; glow: string; text: string } => {
    const group = (palette as Record<string, any>)[colorKey] || palette.primary;
    return {
      main: group.main,
      hover: group.hover,
      active: group.active,
      disabled: group.disabled,
      glow: group.glow,
      text: group.contrastText || '#FFFFFF',
    };
  };

  return {
    MuiChip: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            height: 32,
            fontSize: '0.82rem',
            padding: '0 14px',
            '& .MuiChip-avatar': {
              width: 24,
              height: 24,
              marginLeft: '-4px',
              marginRight: '8px',
              fontSize: '0.7rem',
            },
            '& .MuiChip-icon': {
              fontSize: '18px',
              marginLeft: '-2px',
              marginRight: '8px',
            },
            '& .MuiChip-deleteIcon': {
              fontSize: '18px',
              marginLeft: '8px',
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => {
          const color = ownerState.color ?? 'default';
          const variant = ownerState.variant ?? 'filled';
          const isPrimary = color === 'primary';
          const isSecondary = color === 'secondary';
          const isSemantic = !isPrimary && !isSecondary && color !== 'default';
          const cc = chipColor(color === 'default' ? 'primary' : color);

        return {
          // ── Base ──────────────────────────────────────────────────────
          display: 'inline-flex',
          alignItems: 'center',
          borderRadius: 9999,
          height: 28,                    // Medium (default) — brand kit 28px
          fontWeight: 500,
          fontFamily: '"Montserrat", "Google Sans Flex", -apple-system, sans-serif',
          fontSize: '0.76rem',
          letterSpacing: '0.02em',
          lineHeight: 1,
          padding: '0 12px',
          cursor: 'default',
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

          // Icon inside chip
          '& .MuiChip-icon': {
            fontSize: '16px',
            marginLeft: '-2px',
            marginRight: '6px',
            color: 'inherit',
            opacity: 0.8,
          },

          // ══════════════════════════════════════════════════════════════
          // FILLED VARIANT
          // ══════════════════════════════════════════════════════════════

          // ── Primary Filled — Solid Charcoal / Cream ──────────────────
          ...(variant === 'filled' && isPrimary && {
            backgroundColor: cc.main,
            color: cc.text,
            border: '1px solid transparent',
            boxShadow: isDark
              ? '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)'
              : '0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)',

            '&.MuiChip-clickable:hover': {
              backgroundColor: cc.hover,
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? '0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                : '0 6px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
            },
            '&.MuiChip-clickable:active': {
              backgroundColor: cc.active,
              transform: 'translateY(0) scale(0.98)',
            },
            '&.Mui-disabled': {
              backgroundColor: cc.disabled,
              color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
              boxShadow: 'none',
              opacity: 1,
            },
          }),

          // ── Secondary Filled — Soft Glass ────────────────────────────
          ...(variant === 'filled' && isSecondary && {
            backgroundColor: isDark
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(17,17,17,0.08)',
            color: isDark ? '#F6F5F2' : '#111111',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.14)' : 'rgba(17,17,17,0.12)'}`,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: isDark
              ? '0 2px 8px rgba(0,0,0,0.25)'
              : '0 2px 6px rgba(0,0,0,0.04)',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark
                ? 'rgba(255,255,255,0.16)'
                : 'rgba(17,17,17,0.12)',
              transform: 'translateY(-1px)',
            },
            '&.MuiChip-clickable:active': {
              backgroundColor: isDark
                ? 'rgba(255,255,255,0.2)'
                : 'rgba(17,17,17,0.16)',
              transform: 'translateY(0) scale(0.98)',
            },
            '&.Mui-disabled': {
              backgroundColor: isDark
                ? 'rgba(255,255,255,0.05)'
                : 'rgba(17,17,17,0.04)',
              color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(17,17,17,0.3)',
              boxShadow: 'none',
              opacity: 1,
            },
          }),

          // ── Semantic Filled (Info, Warning, Error, Success) ──────────
          ...(variant === 'filled' && isSemantic && {
            backgroundColor: cc.main,
            color: cc.text,
            border: '1px solid transparent',
            boxShadow: isDark
              ? `0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`
              : `0 2px 6px ${cc.glow}`,

            '&.MuiChip-clickable:hover': {
              backgroundColor: cc.hover,
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? `0 6px 16px rgba(0,0,0,0.4)`
                : `0 6px 14px ${cc.glow}`,
            },
            '&.MuiChip-clickable:active': {
              backgroundColor: cc.active,
              transform: 'translateY(0) scale(0.98)',
            },
            '&.Mui-disabled': {
              backgroundColor: cc.disabled,
              color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,17,17,0.4)',
              boxShadow: 'none',
              opacity: 1,
            },
          }),

          // ── Default Filled — Neutral Glass ───────────────────────────
          ...(variant === 'filled' && color === 'default' && {
            backgroundColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(17,17,17,0.05)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.14)' : 'rgba(17,17,17,0.12)'}`,
            color: palette.text.primary,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: isDark
              ? '0 2px 8px rgba(0,0,0,0.2)'
              : '0 2px 6px rgba(0,0,0,0.04)',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(17,17,17,0.08)',
              transform: 'translateY(-1px)',
            },
            '&.MuiChip-clickable:active': {
              backgroundColor: isDark ? 'rgba(255,255,255,0.16)' : 'rgba(17,17,17,0.12)',
              transform: 'translateY(0) scale(0.98)',
            },
            '&.Mui-disabled': {
              backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(17,17,17,0.03)',
              color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(17,17,17,0.3)',
              boxShadow: 'none',
              opacity: 1,
            },
          }),

          // ══════════════════════════════════════════════════════════════
          // OUTLINED VARIANT
          // ══════════════════════════════════════════════════════════════

          // ── Primary Outlined ─────────────────────────────────────────
          ...(variant === 'outlined' && isPrimary && {
            backgroundColor: 'transparent',
            border: `1.5px solid ${isDark ? 'rgba(246,245,242,0.55)' : 'rgba(17,17,17,0.7)'}`,
            color: isDark ? '#F6F5F2' : '#111111',
            boxShadow: 'none',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark ? 'rgba(246,245,242,0.08)' : 'rgba(17,17,17,0.06)',
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? '0 4px 12px rgba(0,0,0,0.25)'
                : '0 4px 10px rgba(0,0,0,0.07)',
            },
            '&.Mui-disabled': {
              borderColor: isDark ? 'rgba(246,245,242,0.2)' : 'rgba(17,17,17,0.2)',
              color: isDark ? 'rgba(246,245,242,0.3)' : 'rgba(17,17,17,0.3)',
              opacity: 1,
            },
          }),

          // ── Secondary Outlined ───────────────────────────────────────
          ...(variant === 'outlined' && isSecondary && {
            backgroundColor: 'transparent',
            border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(17,17,17,0.2)'}`,
            color: isDark ? '#F6F5F2' : '#111111',
            boxShadow: 'none',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(17,17,17,0.04)',
              transform: 'translateY(-1px)',
            },
            '&.Mui-disabled': {
              borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(17,17,17,0.1)',
              color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(17,17,17,0.3)',
              opacity: 1,
            },
          }),

          // ── Semantic Outlined (Info, Warning, Error, Success) ────────
          ...(variant === 'outlined' && isSemantic && {
            backgroundColor: 'transparent',
            border: `1.5px solid ${cc.main}`,
            color: cc.main,
            boxShadow: 'none',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark
                ? `rgba(${color === 'info' ? '138,180,248' : color === 'warning' ? '246,173,85' : color === 'error' ? '242,139,130' : '129,201,149'},0.1)`
                : `rgba(${color === 'info' ? '66,133,244' : color === 'warning' ? '230,119,0' : color === 'error' ? '234,67,53' : '52,168,83'},0.07)`,
              transform: 'translateY(-1px)',
              boxShadow: isDark
                ? '0 4px 12px rgba(0,0,0,0.25)'
                : '0 4px 10px rgba(0,0,0,0.07)',
            },
            '&.Mui-disabled': {
              borderColor: cc.disabled,
              color: cc.disabled,
              opacity: 1,
            },
          }),

          // ── Default Outlined ─────────────────────────────────────────
          ...(variant === 'outlined' && color === 'default' && {
            backgroundColor: 'transparent',
            border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(17,17,17,0.25)'}`,
            color: palette.text.primary,
            boxShadow: 'none',

            '&.MuiChip-clickable:hover': {
              backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(17,17,17,0.04)',
              transform: 'translateY(-1px)',
            },
            '&.Mui-disabled': {
              borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(17,17,17,0.1)',
              color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(17,17,17,0.3)',
              opacity: 1,
            },
          }),

          // ── Size: Large (Brand Kit: 32px) ───────────────────────────
          ...((ownerState.size as string) === 'large' && {
            height: 32,
            fontSize: '0.82rem',
            padding: '0 14px',
            '& .MuiChip-avatar': {
              width: 24,
              height: 24,
              marginLeft: '-4px',
              marginRight: '8px',
              fontSize: '0.7rem',
            },
            '& .MuiChip-icon': {
              fontSize: '18px',
              marginLeft: '-2px',
              marginRight: '8px',
            },
            '& .MuiChip-deleteIcon': {
              fontSize: '18px',
              marginLeft: '8px',
            },
          }),
        };
      },

      // ── Size variants — Brand Kit: Small 24px, Medium 28px, Large 32px ──
      sizeSmall: {
        height: 24,
        fontSize: '0.68rem',
        padding: '0 9px',
        '& .MuiChip-avatar': {
          width: 16,
          height: 16,
          marginLeft: '-3px',
          marginRight: '4px',
          fontSize: '0.55rem',
        },
        '& .MuiChip-icon': {
          fontSize: '14px',
          marginLeft: '-1px',
          marginRight: '4px',
        },
        '& .MuiChip-deleteIcon': {
          fontSize: '14px',
          marginLeft: '4px',
        },
      },

      sizeMedium: {
        height: 28,
        fontSize: '0.76rem',
        padding: '0 12px',
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
        const color = ownerState.color && ownerState.color !== 'default' ? ownerState.color : 'primary';
        const colorGroup = (palette as Record<string, any>)[color] || palette.primary;

        return {
          backgroundColor: colorGroup.main,
          color: colorGroup.contrastText || '#FFFFFF',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)'}`,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: palette.glass.paperShadow,
          fontWeight: 600,
        };
      },
    },
  },
};
};
