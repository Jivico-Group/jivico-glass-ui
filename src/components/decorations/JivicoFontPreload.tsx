import React from 'react';
import { GOOGLE_SANS_FLEX_URL } from '../../theme/theme.js';

/**
 * Preloads Google Sans Flex font with high priority preconnect links.
 * Place inside <head> or at the root of your HTML layout.
 */
export function JivicoFontPreload() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={GOOGLE_SANS_FLEX_URL} rel="stylesheet" />
    </>
  );
}

export const JivicoFontLinks = JivicoFontPreload;
