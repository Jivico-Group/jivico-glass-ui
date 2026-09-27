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

/* -------------------------------------------------------------------------- */
/* Font stacks                                                                */
/* -------------------------------------------------------------------------- */

/**
 * SF Pro Display
 *
 * Used primarily for large headings and editorial typography.
 *
 * -apple-system resolves to Apple's San Francisco system font.
 * BlinkMacSystemFont provides compatibility with older Apple browsers.
 */
const SF_PRO_DISPLAY = [
  '"SF Pro Display"',
  "-apple-system",
  "BlinkMacSystemFont",
].join(",");

/**
 * SF Pro Text
 *
 * Used for body copy, controls and general UI typography.
 */
const SF_PRO_TEXT = [
  '"SF Pro Text"',
  "-apple-system",
  "BlinkMacSystemFont",
].join(",");

/**
 * Google Sans
 *
 * Used as the primary cross-platform fallback.
 *
 * Google Sans Flex is preferred because it provides a flexible
 * variable font with optical sizing and width support.
 */
const GOOGLE_SANS = ['"Google Sans Flex"', '"Google Sans"'].join(",");

/**
 * Generic system fallback.
 */
const SYSTEM_SANS = [
  '"Segoe UI"',
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
].join(",");

/**
 * Display typography:
 *
 * SF Pro Display
 *      ↓
 * Google Sans
 *      ↓
 * System fallback
 */
const DISPLAY_FONT = [SF_PRO_DISPLAY, GOOGLE_SANS, SYSTEM_SANS].join(",");

/**
 * Text typography:
 *
 * SF Pro Text
 *      ↓
 * Google Sans
 *      ↓
 * System fallback
 */
const TEXT_FONT = [SF_PRO_TEXT, GOOGLE_SANS, SYSTEM_SANS].join(",");

/**
 * Button typography.
 *
 * Buttons use the text stack rather than the display stack
 * to keep controls compact and highly readable.
 */
const BUTTON_FONT = [SF_PRO_TEXT, GOOGLE_SANS, SYSTEM_SANS].join(",");

/**
 * Labels / metadata typography.
 */
const LABEL_FONT = [SF_PRO_TEXT, GOOGLE_SANS, SYSTEM_SANS].join(",");

/* -------------------------------------------------------------------------- */
/* Typography                                                                  */
/* -------------------------------------------------------------------------- */

export const typography = {
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
    fontWeight: 700,
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
    fontWeight: 700,
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
    fontWeight: 700,
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
    fontWeight: 600,
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
    fontWeight: 600,
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
    fontWeight: 600,
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
    fontWeight: 600,
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
  overline: {
    fontSize: "0.7rem",
    fontWeight: 600,
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
  "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..600,0..100&display=swap";

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
 *
 * Priority:
 *
 *     SF Pro
 *       ↓
 *     Google Sans
 *       ↓
 *     System
 */
export const JIVICO_FONT_FAMILY = [
  SF_PRO_DISPLAY,
  GOOGLE_SANS,
  SYSTEM_SANS,
].join(",");
