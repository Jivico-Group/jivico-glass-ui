import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';

/**
 * MUI component overrides — Data Display:
 * Chip, Avatar, Divider, Table, TableCell, Tooltip
 */
export const getDataDisplayOverrides = (
  palette: JivicoPalette,
  _isDark: boolean
): Components<Theme> => ({
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        fontFamily: '"Google Sans Flex", -apple-system, sans-serif',
        fontSize: '0.8125rem',
        backdropFilter: 'blur(12px)',
        '& .MuiChip-label': {
          color: 'inherit',
        },
      },
      filled: {
        backgroundColor: palette.glass.buttonHoverBg,
        color: palette.text.primary,
        border: `1px solid ${palette.glass.chipBorder}`,
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
});
