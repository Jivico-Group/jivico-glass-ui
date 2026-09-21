import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    size?: "small" | "medium";
    textColorOverride?:
      | "primary"
      | "secondary"
      | "inherit"
      | "accent"
      | "glass"
      | "info"
      | "success"
      | "warning"
      | "error";
    indicatorColorOverride?:
      | "primary"
      | "secondary"
      | "accent"
      | "glass"
      | "info"
      | "success"
      | "warning"
      | "error";
  }
}

declare module "@mui/material/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}

export const getTabsOverrides = (isDark: boolean): Components<Theme> => ({
  MuiTabs: {
    defaultProps: {
      textColor: "secondary",
      indicatorColor: "secondary",
      size: "medium",
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const isSmall = (ownerState as any).size === "small";
        const isScrollable = ownerState.variant === "scrollable";

        const textColor =
          (ownerState as any).textColorOverride ||
          (ownerState.textColor as string) ||
          "secondary";

        const selectedTextColors: Record<string, string> = {
          primary: "#111111",
          secondary: "#111111",
          inherit: "inherit",
          accent: isDark ? "#111111" : "#FFFFFF",
          info: "#FFFFFF",
          success: "#FFFFFF",
          warning: "#FFFFFF",
          error: "#FFFFFF",
          glass: isDark ? "#F6F5F2" : "#111111",
        };

        const selectedText =
          selectedTextColors[textColor] || selectedTextColors.secondary;

        return {
          minHeight: isSmall ? 32 : 44,
          height: isSmall ? 32 : "auto",

          backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "#ECEAE5",

          borderRadius: 9999,

          padding: isSmall ? "3px" : "4px",

          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.04)"
          }`,

          display: ownerState.variant === "fullWidth" ? "flex" : "inline-flex",

          width: ownerState.variant === "fullWidth" ? "100%" : "fit-content",

          maxWidth: "100%",

          boxShadow: isDark
            ? "inset 0 1px 3px rgba(0,0,0,0.35)"
            : "inset 0 1px 2px rgba(0,0,0,0.04)",

          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",

          boxSizing: "border-box",
          position: "relative",
          isolation: "isolate",

          overflow: isScrollable ? "hidden" : "visible",

          "& .MuiTab-root.Mui-selected": {
            color: selectedText,
          },

          "& .MuiTabs-scroller": {
            position: "relative",
            borderRadius: 9999,

            overflow: isScrollable ? "auto !important" : "visible !important",

            height: "100%",
            scrollbarWidth: "none",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          },

          "& .MuiTabs-flexContainer": {
            position: "relative",
            zIndex: 2,
            gap: 0,
            height: "100%",
            alignItems: "center",
          },

          "& .MuiTabs-scrollButtons": {
            color: isDark
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(17, 17, 17, 0.7)",

            borderRadius: 9999,

            width: isSmall ? 24 : 32,
            height: isSmall ? 24 : 32,

            minWidth: isSmall ? 24 : 32,

            alignSelf: "center",
            zIndex: 3,

            "&.Mui-disabled": {
              opacity: 0.3,
            },
          },

          ...(isSmall && {
            "& .MuiTab-root": {
              minHeight: 26,
              height: 26,
              fontSize: "0.78rem",
              padding: "4px 14px",
              minWidth: 64,
            },
          }),
        };
      },

      indicator: ({ ownerState }) => {
        const color =
          (ownerState as any).indicatorColorOverride ||
          (ownerState.indicatorColor as string) ||
          "secondary";

        const colors = {
          primary: {
            light: "#FFFFFF",
            dark: "#F6F5F2",
            lightBorder: "rgba(0, 0, 0, 0.03)",
            darkBorder: "transparent",
            lightShadow:
              "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
            darkShadow: "0 4px 16px rgba(0, 0, 0, 0.45)",
          },

          secondary: {
            light: "#FFFFFF",
            dark: "#F6F5F2",
            lightBorder: "rgba(0, 0, 0, 0.03)",
            darkBorder: "transparent",
            lightShadow:
              "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
            darkShadow: "0 4px 16px rgba(0, 0, 0, 0.45)",
          },

          accent: {
            light: "#B08D57",
            dark: "#D4B77A",
            lightBorder: "rgba(128, 98, 56, 0.25)",
            darkBorder: "rgba(224, 199, 143, 0.25)",
            lightShadow:
              "0 3px 12px rgba(176, 141, 87, 0.22), 0 1px 3px rgba(176, 141, 87, 0.12)",
            darkShadow:
              "0 4px 16px rgba(212, 183, 122, 0.22), 0 1px 3px rgba(212, 183, 122, 0.12)",
          },

          info: {
            light: "#4285F4",
            dark: "#8AB4F8",
            lightBorder: "rgba(66, 133, 244, 0.20)",
            darkBorder: "rgba(138, 180, 248, 0.20)",
            lightShadow: "0 3px 12px rgba(66, 133, 244, 0.18)",
            darkShadow: "0 4px 12px rgba(138, 180, 248, 0.18)",
          },

          success: {
            light: "#34A853",
            dark: "#81C995",
            lightBorder: "rgba(52, 168, 83, 0.20)",
            darkBorder: "rgba(129, 201, 149, 0.20)",
            lightShadow: "0 3px 12px rgba(52, 168, 83, 0.18)",
            darkShadow: "0 4px 16px rgba(129, 201, 149, 0.18)",
          },

          warning: {
            light: "#E67700",
            dark: "#F6AD55",
            lightBorder: "rgba(230, 119, 0, 0.20)",
            darkBorder: "rgba(246, 173, 85, 0.20)",
            lightShadow: "0 3px 12px rgba(230, 119, 0, 0.18)",
            darkShadow: "0 4px 16px rgba(246, 173, 85, 0.18)",
          },

          error: {
            light: "#EA4335",
            dark: "#F28B82",
            lightBorder: "rgba(234, 67, 53, 0.20)",
            darkBorder: "rgba(242, 139, 130, 0.20)",
            lightShadow: "0 3px 12px rgba(234, 67, 53, 0.18)",
            darkShadow: "0 4px 16px rgba(242, 139, 130, 0.18)",
          },
        };

        const selected =
          colors[color as keyof typeof colors] ?? colors.secondary;

        const isGlass = color === "glass";

        return {
          height: "100%",
          top: 0,
          bottom: 0,
          borderRadius: 9999,

          backgroundColor: isGlass
            ? isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(255, 255, 255, 0.75)"
            : isDark
              ? selected.dark
              : selected.light,

          border: isGlass
            ? `1px solid ${
                isDark
                  ? "rgba(255, 255, 255, 0.22)"
                  : "rgba(255, 255, 255, 0.9)"
              }`
            : `1px solid ${
                isDark ? selected.darkBorder : selected.lightBorder
              }`,

          boxShadow: isGlass
            ? isDark
              ? "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)"
              : "0 3px 12px rgba(0,0,0,0.06), inset 0 1px 0 #FFFFFF"
            : isDark
              ? selected.darkShadow
              : selected.lightShadow,

          ...(isGlass && {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }),

          zIndex: 1,

          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        };
      },
    },
  },

  MuiTab: {
    defaultProps: {
      disableRipple: true,
      size: "medium",
    },

    styleOverrides: {
      root: ({ ownerState }) => {
        const isSmall = (ownerState as any).size === "small";

        return {
          position: "relative",
          zIndex: 2,
          textTransform: "none",

          fontFamily:
            '"Montserrat", "Google Sans Flex", -apple-system, BlinkMacSystemFont, sans-serif',

          fontSize: isSmall ? "0.78rem" : "0.84rem",

          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.2,

          minHeight: isSmall ? 26 : 36,
          height: isSmall ? 26 : 36,

          minWidth: isSmall ? 64 : 80,

          borderRadius: 9999,

          padding: isSmall ? "4px 14px" : "8px 22px",

          color: isDark ? "rgba(255, 255, 255, 0.62)" : "#686868",

          transition:
            "color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease",

          userSelect: "none",

          "&:hover": {
            color: isDark ? "#F6F5F2" : "#111111",
            backgroundColor: "transparent",
          },

          "&:active": {
            transform: "scale(0.98)",
          },

          "&.Mui-selected": {
            fontWeight: 600,
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: "transparent",
            },
          },

          "&.Mui-disabled": {
            color: isDark
              ? "rgba(255, 255, 255, 0.25)"
              : "rgba(104, 104, 104, 0.35)",

            opacity: 0.6,
          },
        };
      },
    },
  },
});
