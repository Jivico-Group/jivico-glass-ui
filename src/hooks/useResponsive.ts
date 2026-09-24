"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export type ResponsiveBreakpoint =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface ResponsiveState {
  /**
   * Current MUI breakpoint.
   */
  breakpoint: ResponsiveBreakpoint;

  /**
   * Convenience device-range flags.
   */
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  /**
   * Exact MUI breakpoint flags.
   */
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
}

export function useResponsive(): ResponsiveState {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"), {
    noSsr: true,
  });

  const isSm = useMediaQuery(theme.breakpoints.only("sm"), {
    noSsr: true,
  });

  const isMd = useMediaQuery(theme.breakpoints.only("md"), {
    noSsr: true,
  });

  const isLg = useMediaQuery(theme.breakpoints.only("lg"), {
    noSsr: true,
  });

  const isXl = useMediaQuery(theme.breakpoints.only("xl"), {
    noSsr: true,
  });

  const isMobile = isXs;
  const isTablet = isSm || isMd;
  const isDesktop = isLg || isXl;

  let breakpoint: ResponsiveBreakpoint = "xs";

  if (isXl) {
    breakpoint = "xl";
  } else if (isLg) {
    breakpoint = "lg";
  } else if (isMd) {
    breakpoint = "md";
  } else if (isSm) {
    breakpoint = "sm";
  }

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  };
}

export default useResponsive;
