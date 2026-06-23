import React from 'react';
import { Brand } from './Brand';

interface BrandTileProps {
  category: string;
  name: string;
}

export const BrandTile = ({ category, name }: BrandTileProps) => {
  // Remove the .svg extension for the display name if present
  const displayName = name.replace('.svg', '');

  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '24px',
      background: 'var(--bg-white-0, #FFFFFF)',
      borderRadius: '12px',
      border: '1px solid var(--stroke-soft-200, #E6E6E6)',
      width: '140px',
      textAlign: 'center'
    }}>
      <Brand category={category} name={name} size={32} />
      <span style={{ 
        fontSize: '11px', 
        fontWeight: 500, 
        color: 'var(--text-sub-600, #5C5C5C)',
        wordBreak: 'break-word',
        lineHeight: '1.4'
      }}>
        {displayName}
      </span>
    </div>
  );
};
