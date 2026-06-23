import React from 'react';

export interface ActivityFeedFilterProps {
  label: string;
  state?: 'default' | 'active' | 'inactive';
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const ActivityFeedFilter = ({ label, state = 'default', onClick, style }: ActivityFeedFilterProps) => {
  const styles = {
    default: {
      background: 'var(--color-bg-white)',
      outline: '1px solid var(--color-stroke-soft)',
      color: 'var(--color-text-sub)',
      iconColor: 'var(--color-icon-soft)',
    },
    inactive: {
      background: 'var(--color-bg-weak)',
      outline: 'none',
      color: 'var(--color-text-sub)',
      iconColor: 'var(--color-icon-soft)',
    },
    active: {
      background: 'var(--alpha-blue-alpha-10)',
      outline: 'none',
      color: 'var(--primary-base)',
      iconColor: 'var(--primary-base)',
    },
  }[state];

  return (
    <button 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-6, 6px)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-8, 8px)',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '20px',
        border: 'none',
        background: styles.background,
        color: styles.color,
        outline: styles.outline,
        outlineOffset: '-1px',
        fontFamily: 'inherit',
        ...style
      }}
    >
      <i className="ri-filter-line" style={{ fontSize: 18, color: styles.iconColor }} />
      {label}
    </button>
  );
};
