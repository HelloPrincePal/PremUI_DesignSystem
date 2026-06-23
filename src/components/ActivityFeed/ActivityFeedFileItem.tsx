import React from 'react';

export interface ActivityFeedFileItemProps {
  name: string;
  size: string;
  onDownload?: () => void;
  style?: React.CSSProperties;
}

export const ActivityFeedFileItem = ({ name, size, onDownload, style }: ActivityFeedFileItemProps) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: 'var(--color-bg-white)',
    boxShadow: 'var(--shadow-regular-x-small)',
    borderRadius: 'var(--radius-8, 8px)',
    outline: '1px solid var(--color-stroke-soft)',
    overflow: 'hidden',
    ...style
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-6, 6px)',
      padding: '4px 10px 4px 6px',
      background: 'var(--color-bg-white)',
      borderRight: '1px solid var(--color-stroke-soft)',
    }}>
      <i className="ri-file-text-line" style={{ fontSize: 20, color: 'var(--color-icon-soft)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4, 4px)' }}>
        <span style={{ color: 'var(--color-text-sub)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{name}</span>
        <span style={{ color: 'var(--color-text-soft)', fontSize: 14, fontWeight: 400, lineHeight: '20px' }}>({size})</span>
      </div>
    </div>
    <button 
      onClick={onDownload}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        background: 'var(--color-bg-white)',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <i className="ri-download-2-line" style={{ fontSize: 18, color: 'var(--color-icon-soft)' }} />
    </button>
  </div>
);
