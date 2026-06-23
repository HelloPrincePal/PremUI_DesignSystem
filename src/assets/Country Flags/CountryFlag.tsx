/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Country Flags directory
const countryFlags = import.meta.glob('./*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export interface CountryFlagProps {
  name: string;
  /** Width and height in px, defaults to 32x32 */
  size?: number | string;
  className?: string;
}

export const CountryFlag = ({ name, size = 32, className = '' }: CountryFlagProps) => {
  // Construct the key used by import.meta.glob
  const fileName = name.endsWith('.svg') ? name : `${name}.svg`;
  const logoKey = `./${fileName}`;
  const logoUrl = countryFlags[logoKey];

  if (!logoUrl) {
    console.warn(`CountryFlag: Flag not found for "${name}". Key used: ${logoKey}`);
    return null;
  }

  return (
    <img
      src={logoUrl}
      alt={name}
      className={className}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        display: 'inline-block',
        verticalAlign: 'middle',
        objectFit: 'contain'
      }}
      title={name}
    />
  );
};
