import React from 'react';

export interface ActivityFeedCommentItemProps {
  text: string;
  state?: 'default' | 'hover';
  onReply?: () => void;
  style?: React.CSSProperties;
}

export const ActivityFeedCommentItem = ({ text, state = 'default', onReply, style }: ActivityFeedCommentItemProps) => {
  const isHovered = state === 'hover';
  return (
    <div 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-6, 6px)',
        padding: '8px 14px 8px 8px',
        background: isHovered ? 'var(--color-bg-weak)' : 'var(--color-bg-white)',
        boxShadow: 'var(--shadow-regular-x-small)',
        borderRadius: '4px 12px 12px 12px',
        outline: isHovered ? 'none' : '1px solid var(--color-stroke-soft)',
        outlineOffset: '-1px',
        ...style
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6, 6px)' }}>
        <i className="ri-chat-3-line" style={{ fontSize: 20, color: 'var(--color-icon-soft)' }} />
        <span style={{ color: 'var(--color-text-sub)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{text}</span>
      </div>
      <button 
        onClick={onReply}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: isHovered ? 'var(--color-theme-blue-dark)' : 'var(--primary-base)',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          padding: 0,
          textDecoration: isHovered ? 'underline' : 'none',
        }}
      >
        Reply
      </button>
    </div>
  );
};
