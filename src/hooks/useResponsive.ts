"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export type ResponsiveBreakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export interface ResponsiveState {
  breakpoint: ResponsiveBreakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
}

export function useResponsive(): ResponsiveState {
  const theme = useTheme();

  /**
   * IMPORTANT:
   * Do not use `noSsr: true` here.
   *
   * `noSsr: true` allows the browser's matchMedia result to affect
   * the initial client render immediately, which can cause:
   *
   *   Server → FlagshipDock
   *   Client → PocketDock
   *
   * during hydration on xs/mobile screens.
   *
   * Leaving MUI's default SSR behaviour enabled gives the server
   * and the initial client render a consistent result, after which
   * the media query updates to the actual viewport.
   */
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const isSm = useMediaQuery(theme.breakpoints.only("sm"));

  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  const isLg = useMediaQuery(theme.breakpoints.only("lg"));

  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

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
