import type { Components, Theme } from "@mui/material/styles";

export const getTypographyOverrides = (isDark: boolean): Components<Theme> => ({
  MuiTypography: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = ownerState.color as string;

        const gradientLight =
          "linear-gradient(135deg, #111111 0%, #686868 100%)";

        const gradientDark =
          "linear-gradient(135deg, #F6F5F2 0%, #D9D9CF 100%)";

        if (colorKey === "glass-surface") {
          return {
            color: isDark ? "#FFFFFF !important" : "#000000 !important",
          };
        }

        if (colorKey === "glass") {
          return {
            background: isDark
              ? "linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.68) 100%)"
              : "linear-gradient(135deg, #111111 0%, rgba(17, 17, 17, 0.68) 100%)",
            WebkitBackgroundClip: "text !important",
            WebkitTextFillColor: "transparent !important",
            textShadow: isDark
              ? "0 2px 12px rgba(255, 255, 255, 0.15)"
              : "0 2px 8px rgba(0, 0, 0, 0.08)",
          };
        }

        if (colorKey === "gradient") {
          return {
            background: isDark ? gradientDark : gradientLight,
            WebkitBackgroundClip: "text !important",
            WebkitTextFillColor: "transparent !important",
            backgroundClip: "text !important",
          };
        }

        return {};
      },
    },
  },
});
