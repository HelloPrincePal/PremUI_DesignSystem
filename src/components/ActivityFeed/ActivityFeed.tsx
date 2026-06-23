import React from 'react';

export interface ActivityFeedProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ActivityFeed = ({ children, className = '', style }: ActivityFeedProps) => (
  <div 
    className={className}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-40, 40px)',
      width: '100%',
      ...style
    }}
  >
    {children}
  </div>
);
