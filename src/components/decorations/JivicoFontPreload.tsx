import React from 'react';
import { GOOGLE_SANS_FLEX_URL, JIVICO_BRAND_FONTS_URL } from '../../theme/theme.js';

/**
 * Preloads all Jivico brand fonts:
 *  - Google Sans Flex (primary UI font)
 *  - Montserrat (brand headings/accent per brand kit)
 *  - Space Grotesk (body fallback)
 *
 * Place inside <head> or at the root of your HTML layout.
 */
export function JivicoFontPreload() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Google Sans Flex */}
      <link href={GOOGLE_SANS_FLEX_URL} rel="stylesheet" />
      {/* Montserrat + Space Grotesk */}
      <link href={JIVICO_BRAND_FONTS_URL} rel="stylesheet" />
    </>
  );
}

export const JivicoFontLinks = JivicoFontPreload;
