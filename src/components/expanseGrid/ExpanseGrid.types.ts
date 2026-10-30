import { SxProps } from "@mui/material";

export type ExpanseItem = {
  // Primary backend business section fields
  name: string;
  value?: string;
  path?: string;
  isActive?: boolean;
  description?: string;
  tagline?: string;
  badgeText?: string;
  coverImage: string;
  mobileCoverImage?: string;
  displayOrder?: number;
  isNavVisible?: boolean;
  isFeaturedOnHome?: boolean;

  // Optional legacy/generic aliases
  id?: string;
  title?: string;
  href?: string;
  isFeatured?: boolean;
};

export type ExpanseLayout = "single" | "dual" | "feature-two" | "quad" | "feature-four";

export interface ExpanseGridProps {
  items: ExpanseItem[];
  ImageComponent?: any;
  radius?: "square" | "soft" | "rounded" | "corner";
  gap?: number;
  onNavigate?: (item: ExpanseItem, event?: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  sx?: SxProps;
}
