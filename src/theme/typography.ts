/**
 * Jivico Studio Design System — Typography
 *
 * Font hierarchy:
 *
 * 1. Apple SF Pro
 *    - SF Pro Display
 *    - SF Pro Text
 *    - -apple-system
 *    - BlinkMacSystemFont
 *
 * 2. Google Sans
 *    - Google Sans Flex
 *    - Google Sans
 *
 * 3. System fallbacks
 *    - Segoe UI
 *    - Roboto
 *    - Helvetica
 *    - Arial
 *    - sans-serif
 *
 * Design direction:
 *    Clean · Modern · Premium · Editorial
 *
 * Primary:
 *    Apple SF Pro on Apple platforms
 *
 * Secondary:
 *    Google Sans on platforms where SF Pro is unavailable
 */

/**
 * Google Sans Flex font stack
 *
 * Dedicated Google Sans Flex variable font with all weights (100 - 900+).
 */
const GOOGLE_SANS_FLEX = [
  '"Google Sans Flex"',
  '"Google Sans"',
  "sans-serif",
].join(",");

const DISPLAY_FONT = GOOGLE_SANS_FLEX;
const TEXT_FONT = GOOGLE_SANS_FLEX;
const BUTTON_FONT = GOOGLE_SANS_FLEX;
const LABEL_FONT = GOOGLE_SANS_FLEX;

/* -------------------------------------------------------------------------- */
/* Typography                                                                  */
/* -------------------------------------------------------------------------- */

export const typography = {
  fontFamily: GOOGLE_SANS_FLEX,

  /**
   * ------------------------------------------------------------------------
   * Subtitle 1
   * ------------------------------------------------------------------------
   */
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 450,
    letterSpacing: "-0.006em",
    lineHeight: 1.4,
    fontFamily: TEXT_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * Subtitle 2
   * ------------------------------------------------------------------------
   */
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "-0.004em",
    lineHeight: 1.4,
    fontFamily: TEXT_FONT,
  },
  /**
   * ------------------------------------------------------------------------
   * H1
   * ------------------------------------------------------------------------
   *
   * Main page headings.
   *
   * Examples:
   * - Checkout
   * - Your Cart
   * - Jivico Studio
   */
  h1: {
    fontSize: "3.75rem",
    fontWeight: 550,
    letterSpacing: "-0.04em",
    lineHeight: 1.0,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * H2
   * ------------------------------------------------------------------------
   *
   * Major section headings.
   */
  h2: {
    fontSize: "2.85rem",
    fontWeight: 550,
    letterSpacing: "-0.03em",
    lineHeight: 1.08,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * H3
   * ------------------------------------------------------------------------
   *
   * Section headings.
   */
  h3: {
    fontSize: "2.1rem",
    fontWeight: 550,
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * H4
   * ------------------------------------------------------------------------
   *
   * Product titles and medium section headings.
   */
  h4: {
    fontSize: "1.5rem",
    fontWeight: 450,
    letterSpacing: "-0.018em",
    lineHeight: 1.2,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * H5
   * ------------------------------------------------------------------------
   *
   * Card titles and smaller editorial headings.
   */
  h5: {
    fontSize: "1.25rem",
    fontWeight: 450,
    letterSpacing: "-0.012em",
    lineHeight: 1.25,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * H6
   * ------------------------------------------------------------------------
   *
   * Small headings.
   */
  h6: {
    fontSize: "1rem",
    fontWeight: 450,
    letterSpacing: "-0.006em",
    lineHeight: 1.3,
    fontFamily: DISPLAY_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * BODY 1
   * ------------------------------------------------------------------------
   *
   * Primary body text.
   *
   * Used for:
   * - Product descriptions
   * - Marketing copy
   * - Important supporting text
   */
  body1: {
    fontSize: "1.0625rem",
    lineHeight: 1.55,
    letterSpacing: "-0.008em",
    fontWeight: 400,
    fontFamily: TEXT_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * BODY 2
   * ------------------------------------------------------------------------
   *
   * Secondary UI text.
   *
   * Used for:
   * - Product metadata
   * - Supporting information
   * - Cart information
   * - Checkout descriptions
   */
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "-0.004em",
    fontWeight: 400,
    fontFamily: TEXT_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * BUTTON
   * ------------------------------------------------------------------------
   *
   * Jivico buttons remain sentence case.
   *
   * Examples:
   * - Add to Bag
   * - Buy Now
   * - Proceed to Checkout
   * - Pay ₹4,477
   */
  button: {
    textTransform: "none" as const,
    fontWeight: 450,
    letterSpacing: "0.005em",
    fontSize: "0.9375rem",
    lineHeight: 1.2,
    fontFamily: BUTTON_FONT,
  },

  /**
   * ------------------------------------------------------------------------
   * OVERLINE
   * ------------------------------------------------------------------------
   *
   * Small editorial metadata.
   *
   * Examples:
   * - ORIGINALS
   * - NEW DROP
   * - BESTSELLER
   * - LIMITED
   */
  /**
   * ------------------------------------------------------------------------
   * CAPTION
   * ------------------------------------------------------------------------
   *
   * Small auxiliary, copyright, and timestamp text.
   */
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    letterSpacing: "0.01em",
    lineHeight: 1.4,
    fontFamily: TEXT_FONT,
  },

  overline: {
    fontSize: "0.7rem",
    fontWeight: 450,
    letterSpacing: "0.12em",
    lineHeight: 1.2,
    textTransform: "uppercase" as const,
    fontFamily: LABEL_FONT,
  },
};

/* -------------------------------------------------------------------------- */
/* Google Fonts                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Google Sans Flex
 *
 * SF Pro does not need to be downloaded from Google Fonts.
 *
 * On Apple platforms:
 *
 *     SF Pro → -apple-system
 *
 * On platforms without SF Pro:
 *
 *     Google Sans Flex → Google Sans → system fallback
 */
const GOOGLE_SANS_FLEX_URL =
  "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..450,0..100&display=swap";

/**
 * Backwards-compatible alias.
 *
 * Existing imports using JIVICO_FONTS_URL will continue to work.
 */
export const JIVICO_FONTS_URL = GOOGLE_SANS_FLEX_URL;

/* -------------------------------------------------------------------------- */
/* Global Jivico font family                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Global font stack.
 */
export const JIVICO_FONT_FAMILY = GOOGLE_SANS_FLEX;
