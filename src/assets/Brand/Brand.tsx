/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Brand Logos directory and subdirectories
const brandLogos = import.meta.glob('./Brand Logos/**/*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export interface BrandProps {
  category: string;
  name: string;
  /** Width and height in px, defaults to 32x32 */
  size?: number | string;
  className?: string;
}

export const Brand = ({ category, name, size = 32, className = '' }: BrandProps) => {
  // Construct the key used by import.meta.glob
  // Note: We need to handle potential file extension issues if the name doesn't include .svg
  const fileName = name.endsWith('.svg') ? name : `${name}.svg`;
  const logoKey = `./Brand Logos/${category}/${fileName}`;
  const logoUrl = brandLogos[logoKey];

  if (!logoUrl) {
    console.warn(`Brand: Logo not found for category "${category}" and name "${name}". Key used: ${logoKey}`);
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
      }}
      title={name}
    />
  );
};
