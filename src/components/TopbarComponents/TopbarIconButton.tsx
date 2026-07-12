import React from 'react';
import './topbar-components.css';

export type TopbarIconButtonState = 'default' | 'hover' | 'active';

export interface TopbarIconButtonProps {
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  /** Persistent selected/pressed state — recolors the icon to primary blue */
  active?: boolean;
  /** Shows a small red unread-notification dot in the top-right corner */
  dot?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active usage. */
  state?: TopbarIconButtonState;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const TopbarIconButton = ({
  icon = 'layout-grid-line',
  active = false,
  dot = false,
  state,
  disabled = false,
  onClick,
  ariaLabel = 'Action',
  className = '',
}: TopbarIconButtonProps) => {
  const resolvedActive = state ? state === 'active' : active;

  return (
    <button
      type="button"
      className={`premui-topbar-icon-btn ${className}`}
      data-state={state}
      data-active={resolvedActive || undefined}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <i className={`ri-${icon}`} aria-hidden="true" />
      {dot && <span className="premui-topbar-icon-btn-dot" aria-hidden="true" />}
    </button>
  );
};
