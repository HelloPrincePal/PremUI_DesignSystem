/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Placeholder directory and subdirectories
const placeholderLogos = import.meta.glob('./**/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export type PlaceholderCompany =
  | 'Apex' | 'Aurora' | 'Catalyst' | 'Empty' | 'Horizon' | 'Orandis' | 'Phoenix' | 'Pulse' | 'Solaris' | 'Synergy';

export type PlaceholderStyle = 'Original' | 'Black' | 'White';

export interface PlaceholderBrandProps {
  company: PlaceholderCompany;
  style?: PlaceholderStyle;
  /** Width and height in px, defaults to 32x32 */
  size?: number | string;
  className?: string;
}

export const PlaceholderBrand = ({ company, style = 'Original', size = 32, className = '' }: PlaceholderBrandProps) => {
  // Construct the key used by import.meta.glob
  // Example: ./Synergy/Synergy_Style=Original.svg
  // Note: Empty follows a different naming convention: ./Empty/Empty_Type=Empty.svg
  const logoKey = company === 'Empty' 
    ? `./Empty/Empty_Type=Empty.svg` 
    : `./${company}/${company}_Style=${style}.svg`;
  const logoUrl = placeholderLogos[logoKey];

  if (!logoUrl) {
    console.warn(`PlaceholderBrand: Logo not found for ${company} with style ${style}. Key used: ${logoKey}`);
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
