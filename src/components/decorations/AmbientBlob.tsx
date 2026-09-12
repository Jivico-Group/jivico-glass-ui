import { Box, styled } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const floatAmbient = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -25px) scale(1.08); }
  100% { transform: translate(-20px, 35px) scale(0.95); }
`;

export const AmbientBlob = styled(Box, {
  shouldForwardProp: (p) => p !== 'variant' && p !== 'isDark',
})<{ variant: 'pink' | 'blue' | 'purple' | 'amber' | 'cyan'; isDark: boolean }>(
  ({ isDark, variant }) => {
    const config = {
      pink: {
        top: '5%',
        left: '10%',
        width: '45vw',
        height: '45vw',
        color: isDark ? 'rgba(236,72,153,0.16)' : 'rgba(236,72,153,0.08)',
        duration: '18s',
      },
      blue: {
        top: '35%',
        right: '5%',
        width: '40vw',
        height: '40vw',
        color: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.07)',
        duration: '22s',
      },
      purple: {
        top: '60%',
        left: '5%',
        width: '45vw',
        height: '45vw',
        color: isDark ? 'rgba(139,92,246,0.16)' : 'rgba(139,92,246,0.08)',
        duration: '20s',
      },
      amber: {
        top: '75%',
        right: '15%',
        width: '35vw',
        height: '35vw',
        color: isDark ? 'rgba(245,158,11,0.14)' : 'rgba(245,158,11,0.06)',
        duration: '25s',
      },
      cyan: {
        top: '20%',
        left: '50%',
        width: '35vw',
        height: '35vw',
        color: isDark ? 'rgba(6,182,212,0.14)' : 'rgba(6,182,212,0.06)',
        duration: '19s',
      },
    }[variant];

    return {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(80px)',
      WebkitFilter: 'blur(80px)',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      willChange: 'transform',
      zIndex: 0,
      pointerEvents: 'none',
      top: config.top,
      ...('left' in config ? { left: config.left } : {}),
      ...('right' in config ? { right: config.right } : {}),
      width: config.width,
      height: config.height,
      background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
      animation: `${floatAmbient} ${config.duration} ease-in-out infinite alternate`,
      '@media (max-width: 600px)': {
        filter: 'blur(40px)',
        WebkitFilter: 'blur(40px)',
      },
    };
  }
);

export const DecorativeBlob = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ isDark }) => ({
  position: 'absolute',
  top: '-30%',
  right: '-10%',
  width: '50%',
  height: '160%',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${isDark ? 'rgba(233,30,99,0.12)' : 'rgba(233,30,99,0.06)'} 0%, transparent 70%)`,
  filter: 'blur(60px)',
  willChange: 'transform',
  pointerEvents: 'none',
}));
