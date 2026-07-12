import React from 'react';
import './status-badge.css';

export type StatusBadgeStatus = 'completed' | 'pending' | 'failed' | 'information' | 'disabled';
export type StatusBadgeStyle = 'stroke' | 'light';

export interface StatusBadgeProps {
  children?: React.ReactNode;
  status?: StatusBadgeStatus;
  style?: StatusBadgeStyle;
  /** Replace the status icon with a small colored dot */
  withDot?: boolean;
  className?: string;
}

const STATUS_ICONS: Record<StatusBadgeStatus, string> = {
  completed: 'ri-checkbox-circle-fill',
  pending: 'ri-alert-fill',
  failed: 'ri-error-warning-fill',
  information: 'ri-information-fill',
  disabled: 'ri-forbid-fill',
};

export const StatusBadge = ({
  children = 'Badge',
  status = 'completed',
  style = 'stroke',
  withDot = false,
  className = '',
}: StatusBadgeProps) => {
  return (
    <span
      className={`premui-status-badge ${className}`}
      data-status={status}
      data-style={style}
      data-dot={withDot || undefined}
    >
      {withDot ? (
        <span className="premui-status-badge-dot" aria-hidden="true" />
      ) : (
        <i className={`${STATUS_ICONS[status]} premui-status-badge-icon`} aria-hidden="true" />
      )}
      <span className="premui-status-badge-label">{children}</span>
    </span>
  );
};
