/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Appstore Badges directory
const badgeAssets = import.meta.glob('./*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export type AppstoreCompany = 
  | 'App Store' | 'Mac App Store' | 'Amazon Appstore' | 'Galaxy Store' 
  | 'Huawei AppGallery' | 'F-Droid' | 'Google Play Store' | 'Microsoft Store';

export type AppstoreStyle = 'Preferred' | 'Alternative';

export interface AppstoreBadgeProps {
  company: AppstoreCompany;
  style?: AppstoreStyle;
  /** Height in px, defaults to 40 */
  height?: number | string;
  className?: string;
}

export const AppstoreBadge = ({ company, style = 'Preferred', height = 40, className = '' }: AppstoreBadgeProps) => {
  // Construct the key used by import.meta.glob
  // Example: 🏢 Company=App Store, 🏵️ Style=Preferred.svg
  const logoKey = `./🏢 Company=${company}, 🏵️ Style=${style}.svg`;
  const logoUrl = badgeAssets[logoKey];

  if (!logoUrl) {
    console.warn(`AppstoreBadge: Asset not found for "${company}" with style "${style}". Key used: ${logoKey}`);
    return null;
  }

  return (
    <img
      src={logoUrl}
      alt={`${company} Badge`}
      className={className}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      title={`${company} Badge`}
    />
  );
};
