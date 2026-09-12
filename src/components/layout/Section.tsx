import { Container, styled } from '@mui/material';

export const SectionContainer = styled(Container, {
  shouldForwardProp: (p) => p !== 'largeBottom' && p !== 'smallBottom',
})<{ largeBottom?: boolean; smallBottom?: boolean }>(({ largeBottom, smallBottom }) => ({
  position: 'relative',
  zIndex: 1,
  marginBottom: largeBottom ? 96 : smallBottom ? 64 : 80,
}));

export const Section = SectionContainer;
