import React from 'react';
import './sidebar-components.css';
import { Badge } from '../Badge/Badge';
import { ChartLegendDot } from '../ChartLegend/ChartLegendDot';
import type { ChartLegendColor } from '../ChartLegend/ChartLegendDot';

export type SidebarItemState = 'default' | 'hover' | 'active';

export interface SidebarItemProps {
  label?: string;
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  /** Leading visual slot — overrides `icon` */
  leading?: React.ReactNode;
  /** Shows a colored ChartLegendDot instead of the icon */
  indicator?: boolean;
  indicatorColor?: ChartLegendColor;
  /** Pill badge text (e.g. "New") shown next to the label */
  badge?: string;
  /** Shows a red counter badge (e.g. unread count) */
  notificationCount?: number | string;
  /** Keyboard shortcut hint (e.g. "⌘1") */
  shortcut?: string;
  showRightIcon?: boolean;
  rightIcon?: string;
  /** Icon-only rail mode — hides label/badge/notification/shortcut/rightIcon */
  collapsed?: boolean;
  /** Persistent selected state, shows the primary accent bar */
  active?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active usage. */
  state?: SidebarItemState;
  onClick?: () => void;
  className?: string;
}

export const SidebarItem = ({
  label = 'Dashboard',
  icon = 'layout-grid-line',
  leading,
  indicator = false,
  indicatorColor = 'blue',
  badge,
  notificationCount,
  shortcut,
  showRightIcon = true,
  rightIcon = 'arrow-right-s-line',
  collapsed = false,
  active = false,
  state,
  onClick,
  className = '',
}: SidebarItemProps) => {
  const resolvedActive = state ? state === 'active' : active;

  return (
    <button
      type="button"
      className={`premui-sidebar-item ${className}`}
      data-state={state}
      data-active={resolvedActive || undefined}
      data-collapsed={collapsed || undefined}
      onClick={onClick}
    >
      <span className="premui-sidebar-item-leading">
        {indicator ? (
          <ChartLegendDot color={indicatorColor} size="md" />
        ) : (
          leading ?? <i className={`ri-${icon}`} aria-hidden="true" />
        )}
      </span>
      {!collapsed && (
        <>
          <span className="premui-sidebar-item-text">
            <span className="premui-sidebar-item-label">{label}</span>
            {badge && (
              <Badge color="orange" style="light" size="sm">
                {badge}
              </Badge>
            )}
          </span>
          {notificationCount != null && <span className="premui-sidebar-item-notification">{notificationCount}</span>}
          {shortcut && <span className="premui-sidebar-item-shortcut">{shortcut}</span>}
          {showRightIcon && <i className={`ri-${rightIcon} premui-sidebar-item-right-icon`} aria-hidden="true" />}
        </>
      )}
      {resolvedActive && <span className="premui-sidebar-item-accent" aria-hidden="true" />}
    </button>
  );
};
