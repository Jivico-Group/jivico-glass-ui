import React, { forwardRef } from "react";
import { Box } from "@mui/material";
import type { ElementType, ReactNode } from "react";

export interface BottomNavigationItemProps {
  /**
   * Component type to render (e.g. Box, Button, IconButton, InputBase, Link).
   * @default Box
   */
  component?: ElementType;

  /**
   * Children nodes
   */
  children?: ReactNode;

  /**
   * Custom styling override
   */
  sx?: any;

  [key: string]: any;
}

/**
 * BottomNavigationItem
 *
 * A helper wrapper for custom elements placed inside MUI `<BottomNavigation>`.
 *
 * MUI's `<BottomNavigation>` automatically passes `showLabel`, `selected`, `value`,
 * and `onChange` to all direct children. This component intercepts and consumes those props
 * so they are NOT leaked down as invalid attributes to underlying HTML DOM elements.
 */
export const DynamicIslandItem = forwardRef<any, BottomNavigationItemProps>(
  (
    {
      showLabel,
      selected,
      value,
      onChange,
      component: Component = Box,
      children,
      ...props
    },
    ref,
  ) => (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  ),
);

DynamicIslandItem.displayName = "DynamicIslandItem";
