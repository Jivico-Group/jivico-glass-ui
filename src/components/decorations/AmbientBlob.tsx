import { Box, styled } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const floatAmbient = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -25px) scale(1.08); }
  100% { transform: translate(-20px, 35px) scale(0.95); }
`;

type BlobVariant = 'primary' | 'secondary' | 'warm' | 'blue' | 'cyan' | 'pink' | 'purple' | 'amber';

interface BlobConfig {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  color: string;
  duration: string;
}

/**
 * AmbientBlob — slow-floating background orbs.
 *
 * Variant palette updated to brand monochrome:
 *  - 'primary'  → Charcoal/Cream glow (was pink)
 *  - 'secondary'→ Stone glow (was purple)
 *  - 'warm'     → Sand/Cream warmth (was amber)
 *  - 'blue'     → Info blue (retained for depth contrast)
 *  - 'cyan'     → Subtle teal (retained for light-mode freshness)
 *
 * Legacy variants (pink, purple, amber) are aliased to brand colours
 * so existing consumers don't break.
 */
export const AmbientBlob = styled(Box, {
  shouldForwardProp: (p) => p !== 'variant' && p !== 'isDark',
})<{ variant: BlobVariant; isDark: boolean }>(({ isDark, variant }) => {
  const configs: Record<BlobVariant, BlobConfig> = {
    // Charcoal/Cream (brand primary)
    primary: {
      top: '5%',
      left: '10%',
      width: '45vw',
      height: '45vw',
      color: isDark ? 'rgba(246, 245, 242, 0.09)' : 'rgba(17, 17, 17, 0.055)',
      duration: '18s',
    },
    // Stone (brand secondary tone)
    secondary: {
      top: '35%',
      right: '5%',
      width: '40vw',
      height: '40vw',
      color: isDark ? 'rgba(217, 217, 207, 0.1)' : 'rgba(104, 104, 104, 0.06)',
      duration: '22s',
    },
    // Warm Sand/Cream — editorial softness
    warm: {
      top: '60%',
      left: '5%',
      width: '45vw',
      height: '45vw',
      color: isDark ? 'rgba(217, 217, 207, 0.08)' : 'rgba(246, 245, 242, 0.6)',
      duration: '20s',
    },
    // Legacy alias → primary monochrome
    pink: {
      top: '5%',
      left: '10%',
      width: '45vw',
      height: '45vw',
      color: isDark ? 'rgba(246, 245, 242, 0.09)' : 'rgba(17, 17, 17, 0.055)',
      duration: '18s',
    },
    // Legacy alias → secondary monochrome
    purple: {
      top: '35%',
      right: '5%',
      width: '40vw',
      height: '40vw',
      color: isDark ? 'rgba(217, 217, 207, 0.1)' : 'rgba(104, 104, 104, 0.06)',
      duration: '22s',
    },
    // Legacy alias → warm
    amber: {
      top: '75%',
      right: '15%',
      width: '35vw',
      height: '35vw',
      color: isDark ? 'rgba(217, 217, 207, 0.08)' : 'rgba(246, 245, 242, 0.6)',
      duration: '25s',
    },
    // Info blue — retained for depth contrast
    blue: {
      top: '35%',
      right: '5%',
      width: '40vw',
      height: '40vw',
      color: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
      duration: '22s',
    },
    // Teal/Cyan — very subtle
    cyan: {
      top: '20%',
      left: '50%',
      width: '35vw',
      height: '35vw',
      color: isDark ? 'rgba(104, 104, 104, 0.1)' : 'rgba(6, 182, 212, 0.04)',
      duration: '19s',
    },
  };

  const config = configs[variant] ?? configs.primary;

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
    ...(config.top && { top: config.top }),
    ...(config.bottom && { bottom: config.bottom }),
    ...(config.left && { left: config.left }),
    ...(config.right && { right: config.right }),
    width: config.width,
    height: config.height,
    background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
    animation: `${floatAmbient} ${config.duration} ease-in-out infinite alternate`,
    '@media (max-width: 600px)': {
      filter: 'blur(40px)',
      WebkitFilter: 'blur(40px)',
    },
  };
});

export const DecorativeBlob = styled(Box, {
  shouldForwardProp: (p) => p !== 'isDark',
})<{ isDark: boolean }>(({ isDark }) => ({
  position: 'absolute',
  top: '-30%',
  right: '-10%',
  width: '50%',
  height: '160%',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${isDark ? 'rgba(217, 217, 207, 0.08)' : 'rgba(17, 17, 17, 0.04)'} 0%, transparent 70%)`,
  filter: 'blur(60px)',
  willChange: 'transform',
  pointerEvents: 'none',
}));
