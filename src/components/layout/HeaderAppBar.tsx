import { AppBar, styled } from '@mui/material';

export interface HeaderAppBarProps {
  isScrolled: boolean;
}

export const HeaderAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isScrolled',
})<HeaderAppBarProps>(({ theme, isScrolled }) => {
  const isDark = theme.palette.mode === 'dark';
  return {
    position: 'sticky',
    top: 0,
    paddingTop: 'env(safe-area-inset-top, 0px)',
    backgroundColor: isScrolled
      ? isDark
        ? 'rgba(10, 10, 12, 0.85)'
        : 'rgba(255, 255, 255, 0.88)'
      : 'transparent',

    backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
    borderBottom: isScrolled
      ? `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`
      : '1px solid transparent',
    backgroundImage: !isScrolled
      ? isDark
        ? 'linear-gradient(180deg, rgba(10, 10, 12, 0.85) 0%, rgba(10, 10, 12, 0) 100%)'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 100%)'
      : 'none',
    zIndex: 1100,
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',

    [theme.breakpoints.down('md')]: {
      position: 'relative',
    },
  };
});
