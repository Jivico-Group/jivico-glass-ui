import type { Components, Theme } from '@mui/material/styles';
import type { JivicoPalette } from '../palette.js';
import { glassAppBarRecipe } from './glassRecipe.js';

/**
 * MUI component overrides — Navigation:
 * AppBar, Toolbar, Tabs, Tab, Drawer, Menu, MenuItem, PaginationItem
 */
export const getNavigationOverrides = (
  palette: JivicoPalette,
  isDark: boolean
): Components<Theme> => ({

  // ========================================================================
  // APP BAR — luxury glassmorphism (recipe shared via glassRecipe.ts)
  // ========================================================================
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: 'transparent',
    },
    styleOverrides: {
      root: {
        ...glassAppBarRecipe(isDark),
        color: palette.text.primary,
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
      },
    },
  },

  // ========================================================================
  // TOOLBAR
  // ========================================================================
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: '56px !important',
        paddingLeft: '24px !important',
        paddingRight: '24px !important',
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        minHeight: 36,
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(17, 17, 17, 0.03)',
        borderRadius: 12,
        padding: '4px',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(17, 17, 17, 0.06)'}`,
        display: ownerState.variant === 'fullWidth' ? 'flex' : 'inline-flex',
        width: ownerState.variant === 'fullWidth' ? '100%' : 'fit-content',
        boxShadow: isDark 
          ? 'inset 0 1px 2px rgba(0,0,0,0.2)' 
          : 'inset 0 1px 2px rgba(0,0,0,0.05)',
        '& .MuiTabs-flexContainer': {
          gap: '4px',
          position: 'relative',
          zIndex: 1,
        },
      }),
      indicator: {
        height: '100%',
        borderRadius: 8,
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : '#FFFFFF',
        boxShadow: isDark 
          ? '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)' 
          : '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        zIndex: -1, // Places it directly behind the tab items
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '0.875rem',
        minHeight: 32,
        minWidth: 'auto',
        borderRadius: 8,
        padding: '6px 16px',
        color: palette.text.secondary,
        transition: 'color 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          color: palette.text.primary,
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(17, 17, 17, 0.03)',
        },
        '&.Mui-selected': {
          color: palette.text.primary,
          fontWeight: 600,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent', // The indicator is the background
          },
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        backgroundColor: isDark ? 'rgba(20, 20, 24, 0.58)' : 'rgba(255, 255, 255, 0.58)',
        backdropFilter: 'blur(30px) saturate(180%) brightness(110%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%) brightness(110%)',
        backgroundImage: `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.18),
          rgba(255, 255, 255, 0.04)
        )
      `,
        border: isDark
          ? '1px solid rgba(255, 255, 255, 0.14)'
          : '1px solid rgba(255, 255, 255, 0.65)',
        boxShadow: isDark
          ? `
          0 -12px 40px rgba(0, 0, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.12)
        `
          : `
          0 -12px 40px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.7)
        `,
        backgroundClip: 'padding-box',
        overflow: 'hidden',

        ...(ownerState.anchor === 'bottom' && {
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderTopLeftRadius: '28px !important',
          borderTopRightRadius: '28px !important',
          borderBottomLeftRadius: '0 !important',
          borderBottomRightRadius: '0 !important',
        }),
        ...(ownerState.anchor === 'top' && {
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderTopLeftRadius: '0 !important',
          borderTopRightRadius: '0 !important',
          borderBottomLeftRadius: '28px !important',
          borderBottomRightRadius: '28px !important',
        }),
        ...(ownerState.anchor === 'left' && {
          borderLeft: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          borderTopLeftRadius: '0 !important',
          borderBottomLeftRadius: '0 !important',
          borderTopRightRadius: '10px !important',
          borderBottomRightRadius: '10px !important',
        }),
        ...(ownerState.anchor === 'right' && {
          borderRight: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          borderTopRightRadius: '0 !important',
          borderBottomRightRadius: '0 !important',
          borderTopLeftRadius: '10px !important',
          borderBottomLeftRadius: '10px !important',
        }),
      }),
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: 18,
        backgroundColor: palette.glass.paperBg,
        backdropFilter: 'saturate(180%) blur(20px)',
        border: `1px solid ${palette.glass.paperBorder}`,
        boxShadow: palette.glass.paperShadow,
        padding: '6px',
        maxHeight: '400px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '6px 12px',
        minHeight: '32px',
        fontSize: '0.875rem',
        fontWeight: 500,
        transition: 'all 0.15s ease',
        '&:hover': {
          backgroundColor: palette.glass.menuItemHover,
        },
        '&.Mui-selected': {
          backgroundColor: palette.action.selected,
          color: palette.primary.main,
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: '4px',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: '2px 4px',
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: '6px 10px',
        minHeight: '36px',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 34,
        color: palette.text.secondary,
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: 0,
      },
      primary: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      secondary: {
        fontSize: '0.75rem',
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
        '&.Mui-selected': {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
          '&:hover': {
            backgroundColor: palette.secondary.hover,
          },
        },
      },
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        padding: '24px 0',
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(17, 17, 17, 0.12)',
        borderTopWidth: 2,
        borderRadius: 1,
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(17, 17, 17, 0.1)',
        '&.Mui-active': {
          color: palette.text.primary,
          filter: isDark ? `drop-shadow(0 0 6px rgba(255, 255, 255, 0.25))` : `drop-shadow(0 0 6px rgba(17, 17, 17, 0.15))`,
        },
        '&.Mui-completed': {
          color: palette.text.primary,
        },
      },
      text: {
        fill: isDark ? '#111' : '#FFF',
        fontWeight: 700,
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: palette.text.secondary,
        '&.Mui-active': {
          color: palette.text.primary,
          fontWeight: 600,
        },
        '&.Mui-completed': {
          color: palette.text.primary,
          fontWeight: 500,
        },
      },
    },
  },
});
