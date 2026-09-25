"use client";

import React from "react";

import MuiBottomNavigation, {
  type BottomNavigationProps as MuiBottomNavigationProps,
} from "@mui/material/BottomNavigation";

export type DynamicIslandProps = MuiBottomNavigationProps;

export const DynamicIsland = React.forwardRef<
  HTMLDivElement,
  DynamicIslandProps
>(({ children, ...props }, ref) => {
  return (
    <MuiBottomNavigation ref={ref} {...props}>
      {children}
    </MuiBottomNavigation>
  );
});

DynamicIsland.displayName = "DynamicIsland";
