/// <reference types="vite/client" />
import React from 'react';

// Import all SVGs from the Emojies directory
const emojiAssets = import.meta.glob('./*.svg', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export interface EmojiProps {
  name: string;
  /** Width and height in px, defaults to 32x32 */
  size?: number | string;
  className?: string;
}

export const Emoji = ({ name, size = 32, className = '' }: EmojiProps) => {
  // Construct the key used by import.meta.glob
  const fileName = name.endsWith('.svg') ? name : `${name}.svg`;
  const logoKey = `./${fileName}`;
  const logoUrl = emojiAssets[logoKey];

  if (!logoUrl) {
    console.warn(`Emoji: Asset not found for "${name}". Key used: ${logoKey}`);
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
