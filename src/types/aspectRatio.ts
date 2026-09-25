/**
 * Standard aspect ratios with IDE autocomplete support.
 */
export type StandardAspectRatio =
  // Square
  | '1 / 1'
  | '1/1'
  // Fashion, Portrait & Social Media
  | '4 / 5'
  | '4/5'
  | '3 / 4'
  | '3/4'
  | '2 / 3'
  | '2/3'
  | '9 / 16'
  | '9/16'
  | '1 / 2'
  | '1/2'
  // Classic Displays & Photography
  | '4 / 3'
  | '4/3'
  | '3 / 2'
  | '3/2'
  | '5 / 4'
  | '5/4'
  | '16 / 10'
  | '16/10'
  // Widescreen, Cinematic & Banners
  | '16 / 9'
  | '16/9'
  | '16 / 7'
  | '16/7'
  | '21 / 9'
  | '21/9'
  | '32 / 9'
  | '32/9'
  | '2.35 / 1'
  | '2.39 / 1'
  | 'auto';

/**
 * Aspect ratio type that provides IDE autocomplete for standard ratios
 * while permitting any custom string expression (e.g. "1.91 / 1", "calc(...)").
 */
export type AspectRatio = StandardAspectRatio | (string & {});

/**
 * Shorthand alias for AspectRatio.
 */
export type AspectRt = AspectRatio;

/**
 * Responsive aspect ratio configuration across standard breakpoints.
 */
export type ResponsiveAspectRatio = {
  xs?: AspectRatio;
  sm?: AspectRatio;
  md?: AspectRatio;
  lg?: AspectRatio;
  xl?: AspectRatio;
};
