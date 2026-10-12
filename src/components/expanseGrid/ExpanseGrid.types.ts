import { SxProps } from "@mui/material";

export type ExpanseItem = {
  id: string;
  title: string; // ORIGINALS, PETS, SKYLINE etc
  tagline?: string; // Crafted Without Compromise
  description?: string;
  badgeText?: string; // JIVICO ORIGINALS
  coverImage: string;
  mobileCoverImage?: string;
  href: string;
  isFeatured?: boolean;
};

export type ExpanseLayout = "single" | "dual" | "feature-two" | "quad" | "feature-four";

export interface ExpanseGridProps {
  items: ExpanseItem[];
  ImageComponent?: any;
  radius?: "square" | "soft" | "rounded" | "corner";
  gap?: number;
  onNavigate?: (item: ExpanseItem) => void;
  className?: string;
  sx?: SxProps;
}
