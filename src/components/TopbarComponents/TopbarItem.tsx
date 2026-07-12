import React from 'react';
import './topbar-components.css';
import { Badge } from '../Badge/Badge';

export type TopbarItemState = 'default' | 'hover' | 'active';

export interface TopbarItemProps {
  label?: string;
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  /** Leading visual slot — overrides `icon` */
  leading?: React.ReactNode;
  /** Hides the leading icon/visual entirely */
  showIcon?: boolean;
  /** Pill badge text (e.g. "New") shown next to the label */
  badge?: string;
  /** Shows a red counter badge (e.g. unread count) */
  notificationCount?: number | string;
  showRightIcon?: boolean;
  rightIcon?: string;
  /** Persistent selected state */
  active?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active usage. */
  state?: TopbarItemState;
  onClick?: () => void;
  className?: string;
}

export const TopbarItem = React.forwardRef<HTMLButtonElement, TopbarItemProps>(
  (
    {
      label = 'Dashboard',
      icon = 'layout-grid-line',
      leading,
      showIcon = true,
      badge,
      notificationCount,
      showRightIcon = false,
      rightIcon = 'arrow-down-s-line',
      active = false,
      state,
      onClick,
      className = '',
    },
    ref,
  ) => {
    const resolvedActive = state ? state === 'active' : active;

    return (
      <button
        type="button"
        ref={ref}
        className={`premui-topbar-item ${className}`}
        data-state={state}
        data-active={resolvedActive || undefined}
        onClick={onClick}
      >
        {showIcon && <span className="premui-topbar-item-leading">{leading ?? <i className={`ri-${icon}`} aria-hidden="true" />}</span>}
        <span className="premui-topbar-item-text">
          <span className="premui-topbar-item-label">{label}</span>
          {badge && (
            <Badge color="orange" style="light" size="sm">
              {badge}
            </Badge>
          )}
        </span>
        {notificationCount != null && (
          <Badge color="red" style="filled" size="sm" count={notificationCount} />
        )}
        {showRightIcon && <i className={`ri-${rightIcon} premui-topbar-item-right-icon`} aria-hidden="true" />}
      </button>
    );
  },
);

TopbarItem.displayName = 'TopbarItem';
