import React from "react";
import MuiBottomNavigation, {
  type BottomNavigationProps as MuiBottomNavigationProps,
} from "@mui/material/BottomNavigation";

export type DynamicIslandProps = MuiBottomNavigationProps;

export const DynamicIsland = React.forwardRef<
  HTMLDivElement,
  DynamicIslandProps
>(({ children, ...props }, ref) => {
  const flatChildren = React.Children.toArray(children);
  return (
    <MuiBottomNavigation ref={ref} {...props}>
      {flatChildren}
    </MuiBottomNavigation>
  );
});

DynamicIsland.displayName = "DynamicIsland";

