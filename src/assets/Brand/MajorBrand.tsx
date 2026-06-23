/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Major Brand Logos directory
const majorLogos = import.meta.glob('./Major Brand Logos/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export type MajorBrandCompany =
  | 'Adobe' | 'Amazon' | 'Apple' | 'Bitcoin' | 'Discord' | 'Dropbox' | 'Facebook'
  | 'Figma' | 'Framer' | 'GitHub' | 'Google' | 'Instagram' | 'LinkedIn' | 'Microsoft'
  | 'Netflix' | 'Notion' | 'PayPal' | 'Pinterest' | 'Slack' | 'Spotify' | 'Stripe'
  | 'Telegram' | 'Twitch' | 'Webflow' | 'WhatsApp' | 'Wise' | 'X' | 'YouTube';

export type MajorBrandStyle = 'original' | 'black' | 'white';

export interface MajorBrandProps {
  company: MajorBrandCompany;
  style?: MajorBrandStyle;
  /** Width and height in px, defaults to 32x32 */
  size?: number | string;
  className?: string;
}

// Maps internal company name to the filename used in the directory
const COMPANY_FILE_NAME_MAP: Record<string, string> = {
  GitHub: 'GitHub',
  PayPal: 'Paypal',
  X: 'X-Twitter',
};

const getStyleLabel = (style: MajorBrandStyle): string => {
  return style.charAt(0).toUpperCase() + style.slice(1);
};

export const MajorBrand = ({ company, style = 'original', size = 32, className = '' }: MajorBrandProps) => {
  const fileNameCompany = COMPANY_FILE_NAME_MAP[company] || company;
  const styleLabel = getStyleLabel(style);
  
  // Construct the key used by import.meta.glob
  const logoKey = `./Major Brand Logos/🏢 Company=${fileNameCompany}, 🏵️ Style=${styleLabel}.svg`;
  const logoUrl = majorLogos[logoKey];

  if (!logoUrl) {
    console.warn(`MajorBrand: Logo not found for ${company} with style ${style}. Key used: ${logoKey}`);
    return null;
  }

  return (
    <img
      src={logoUrl}
      alt={company}
      className={className}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      title={company}
    />
  );
};
