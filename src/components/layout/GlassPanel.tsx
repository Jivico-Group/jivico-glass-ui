import { Box, BoxProps, styled } from "@mui/material";

export interface GlassPanelProps extends BoxProps {
  isDark?: boolean;
}

export const GlassPanel = styled(Box, {
  shouldForwardProp: (p) => p !== "isDark",
})<GlassPanelProps>(({ theme, isDark: explicitDark }) => {
  const isDark = explicitDark ?? theme.palette.mode === "dark";
  return {
    backgroundColor: isDark
      ? "rgba(28, 31, 38, 0.65)"
      : "rgba(255, 255, 255, 0.24)",
    backgroundImage: isDark
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(248, 250, 252, 0.4) 100%)",
    backdropFilter: "blur(48px) saturate(180%)",
    WebkitBackdropFilter: "blur(48px) saturate(180%)",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 17, 17, 0.08)"}`,

    borderRadius: 24,
  };
});
