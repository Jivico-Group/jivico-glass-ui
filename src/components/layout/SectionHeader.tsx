import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { useThemeMode } from '../../context/ThemeContext.js';
import {
  GlassSectionHeaderRow,
  GlassTitleGroup,
  GlassIconGlow,
  GlassSectionTitle,
  GlassSectionSubtitle,
} from './GlassSectionHeader.js';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconGradient?: 'pink' | 'cyan' | 'amber' | 'emerald' | 'purple';
  desktopAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  controls?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  iconGradient = 'pink',
  desktopAction,
  controls,
}) => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <GlassSectionHeaderRow
      sx={{
        flexDirection: 'row !important',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        gap: { xs: 1.5, sm: 2 },
      }}
    >
      <GlassTitleGroup sx={{ flex: 1, minWidth: 0 }}>
        {icon && (
          <GlassIconGlow gradient={iconGradient} sx={{ flexShrink: 0 }}>
            {icon}
          </GlassIconGlow>
        )}
        <Box sx={{ minWidth: 0 }}>
          <GlassSectionTitle
            variant="h3"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </GlassSectionTitle>
          {subtitle && (
            <GlassSectionSubtitle
              isDark={isDark}
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {subtitle}
            </GlassSectionSubtitle>
          )}
        </Box>
      </GlassTitleGroup>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
          flexShrink: 0,
          width: 'auto',
        }}
      >
        {controls}

        {desktopAction && (
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="contained"
              color="primary"
              component={desktopAction.href ? 'a' : 'button'}
              href={desktopAction.href}
              onClick={desktopAction.onClick}
              sx={{ px: 3, py: 1, textDecoration: 'none' }}
            >
              {desktopAction.label}
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </Button>
          </Box>
        )}
      </Box>
    </GlassSectionHeaderRow>
  );
};

export { SectionHeader as StudioSectionHeader };
export type { SectionHeaderProps as StudioSectionHeaderProps };
