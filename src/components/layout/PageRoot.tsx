import { Box, styled } from '@mui/material';

export const PageRoot = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
  overflowX: 'clip',
  backgroundColor: theme.palette.background.default,
}));
