import React from 'react';
import './dropdown.css';
import { Badge } from '../Badge/Badge';
import { Checkbox } from '../Checkbox/Checkbox';
import { Switch } from '../Switch/Switch';

export type DropdownItemSize = 'sm' | 'lg';
export type DropdownItemState = 'default' | 'hover' | 'selected' | 'disabled';

export interface DropdownItemProps {
  /** Leading visual — an icon, Avatar, or brand/country/company logo */
  leading?: React.ReactNode;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Text for a gray Badge — omitted when not provided */
  badge?: string;
  /** e.g. "⌘K" */
  shortcut?: string;
  /** Shows a checkbox — toggled by clicking the row */
  showCheckbox?: boolean;
  checked?: boolean;
  /** Shows a switch — toggled by clicking the row */
  showToggle?: boolean;
  toggled?: boolean;
  /** Trailing text button (e.g. "Edit") — decorative only, click is handled by the row's onClick */
  buttonLabel?: string;
  /** RemixIcon name for a trailing icon (no `ri-` prefix) */
  rightIcon?: string;
  /** sm = 36px row · lg = 56px row */
  size?: DropdownItemSize;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: DropdownItemState;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const DropdownItem = ({
  leading,
  label,
  sublabel,
  badge,
  shortcut,
  showCheckbox = false,
  checked = false,
  showToggle = false,
  toggled = false,
  buttonLabel,
  rightIcon,
  size = 'sm',
  state,
  disabled = false,
  onClick,
  className = '',
}: DropdownItemProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <button
      type="button"
      className={`premui-dropdown-item ${className}`}
      data-size={size}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
    >
      {showCheckbox && <Checkbox checked={checked} disabled={isDisabled} decorative />}
      {leading && <span className="premui-dropdown-item-leading">{leading}</span>}
      <span className="premui-dropdown-item-text">
        <span className="premui-dropdown-item-label">{label}</span>
        {sublabel && <span className="premui-dropdown-item-sublabel">{sublabel}</span>}
      </span>
      {badge && (
        <Badge color="gray" style={isDisabled ? 'stroke' : 'light'} size="sm">
          {badge}
        </Badge>
      )}
      {shortcut && <span className="premui-dropdown-item-shortcut">{shortcut}</span>}
      {showToggle && <Switch checked={toggled} disabled={isDisabled} decorative />}
      {buttonLabel && <span className="premui-dropdown-item-button">{buttonLabel}</span>}
      {rightIcon && <i className={`ri-${rightIcon} premui-dropdown-item-right-icon`} aria-hidden="true" />}
    </button>
  );
};
