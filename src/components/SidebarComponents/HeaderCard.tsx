import React from 'react';
import './sidebar-components.css';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { CompactButton } from '../CompactButton/CompactButton';

export type HeaderCardState = 'default' | 'hover';

export interface HeaderCardProps {
  /** Brand/company logo slot — defaults to a generic building icon */
  leading?: React.ReactNode;
  brand?: string;
  description?: string;
  showDropdown?: boolean;
  onDropdownClick?: () => void;
  /** Collapsed rail mode — icon only, no text/dropdown */
  onlyIcon?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover usage. */
  state?: HeaderCardState;
  className?: string;
}

export const HeaderCard = ({
  leading,
  brand = 'Apex',
  description = 'Finance & Banking',
  showDropdown = true,
  onDropdownClick,
  onlyIcon = false,
  state,
  className = '',
}: HeaderCardProps) => {
  const logo = leading ?? <KeyIcon size="md" color="blue" style="lighter" icon="building-4-line" />;

  if (onlyIcon) {
    return (
      <span className={`premui-sidebar-header-card premui-sidebar-header-card-icon ${className}`} data-state={state}>
        {logo}
      </span>
    );
  }

  return (
    <div className={`premui-sidebar-header-card ${className}`} data-state={state}>
      {logo}
      <div className="premui-sidebar-header-card-text">
        <p className="premui-sidebar-header-card-brand">{brand}</p>
        <p className="premui-sidebar-header-card-description">{description}</p>
      </div>
      {showDropdown && (
        <CompactButton
          icon="expand-up-down-line"
          style="stroke"
          size="md"
          onClick={onDropdownClick}
          ariaLabel="Switch workspace"
        />
      )}
    </div>
  );
};
