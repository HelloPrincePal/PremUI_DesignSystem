import React from 'react';

export type ActivityTaskStatus = 'success' | 'warning' | 'error' | 'away';

export interface ActivityFeedTaskItemProps {
  status: ActivityTaskStatus;
  label: string;
  style?: React.CSSProperties;
}

export const ActivityFeedTaskItem = ({ status, label, style }: ActivityFeedTaskItemProps) => {
  const statusColor = {
    success: 'var(--color-state-success-base)',
    warning: 'var(--color-state-warning-base)',
    away: 'var(--color-state-away-base)',
    error: 'var(--color-state-error-base)',
  }[status];

  const statusIcon = {
    success: 'ri-checkbox-circle-fill',
    warning: 'ri-error-warning-fill',
    away: 'ri-time-fill',
    error: 'ri-close-circle-fill',
  }[status];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-6, 6px)',
      padding: '4px 10px 4px 6px',
      background: 'var(--color-bg-white)',
      boxShadow: 'var(--shadow-regular-x-small)',
      borderRadius: 'var(--radius-8, 8px)',
      outline: '1px solid var(--color-stroke-soft)',
      ...style
    }}>
      <i className={statusIcon} style={{ fontSize: 20, color: statusColor }} />
      <span style={{ color: 'var(--color-text-sub)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{label}</span>
    </div>
  );
};
