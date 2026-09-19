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
    defaultProps: {
      textColor: 'primary',
      indicatorColor: 'primary',
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        minHeight: 44,
        height: 'auto',
        backgroundColor: isDark
          ? 'rgba(255, 255, 255, 0.06)'
          : '#ECEAE5', // Brand Kit Sand #D9D9CF warm tinted track
        borderRadius: 9999, // Brand Kit fully rounded pill track
        padding: '4px',
        border: `1px solid ${
          isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(17, 17, 17, 0.04)'
        }`,
        display: ownerState.variant === 'fullWidth' ? 'flex' : 'inline-flex',
        width: ownerState.variant === 'fullWidth' ? '100%' : 'fit-content',
        boxShadow: isDark
          ? 'inset 0 1px 3px rgba(0,0,0,0.35)'
          : 'inset 0 1px 2px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxSizing: 'border-box',
        position: 'relative',
        isolation: 'isolate',
        overflow: 'visible',
        '& .MuiTabs-scroller': {
          position: 'relative',
          borderRadius: 9999,
          overflow: 'visible !important',
          height: '100%',
        },
        '& .MuiTabs-flexContainer': {
          position: 'relative',
          zIndex: 2,
          gap: 0,
          height: '100%',
          alignItems: 'center',
        },
      }),
      indicator: ({ ownerState }) => {
        const isGlass = (ownerState.indicatorColor as string) === 'glass';
        return {
          height: '100%',
          top: 0,
          bottom: 0,
          borderRadius: 9999, // Brand Kit fully rounded floating pill
          backgroundColor: isGlass
            ? (isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.75)')
            : (isDark ? '#F6F5F2' : '#FFFFFF'),
          border: isGlass
            ? `1px solid ${isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.9)'}`
            : (isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.03)'),
          boxShadow: isGlass
            ? (isDark
                ? '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)'
                : '0 3px 12px rgba(0,0,0,0.06), inset 0 1px 0 #FFFFFF')
            : (isDark
                ? '0 4px 16px rgba(0, 0, 0, 0.45)'
                : '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)'), // Exact drop shadow sampled from Brand Kit image
          ...(isGlass && {
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }),
          zIndex: 1,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        const isGlass = (ownerState.textColor as string) === 'secondary';
        return {
          position: 'relative',
          zIndex: 2,
          textTransform: 'none',
          fontFamily: '"Montserrat", "Google Sans Flex", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '0.84rem',
          fontWeight: 500,
          letterSpacing: '0.01em',
          lineHeight: 1.2,
          minHeight: 36,
          height: 36,
          minWidth: 80,
          borderRadius: 9999,
          padding: '8px 22px',
          color: isDark ? 'rgba(255, 255, 255, 0.62)' : '#686868', // Brand Stone #686868
          transition: 'color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease',
          userSelect: 'none',

          '&:hover': {
            color: isDark ? '#F6F5F2' : '#111111',
            backgroundColor: 'transparent',
          },

          '&:active': {
            transform: 'scale(0.98)',
          },

          '&.Mui-selected': {
            fontWeight: 600,
            color: isDark
              ? (isGlass ? '#F6F5F2' : '#111111')
              : '#111111', // High contrast Charcoal #111111 on Cream / White floating pill!
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },

          '&.Mui-disabled': {
            color: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(104, 104, 104, 0.35)',
            opacity: 0.6,
          },
        };
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
