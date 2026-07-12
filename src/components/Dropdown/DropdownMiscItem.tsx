import React from 'react';
import './dropdown.css';
import { Button } from '../Button/Button';
import { CompactButton } from '../CompactButton/CompactButton';

export type DropdownMiscItemType = 'search' | 'button' | 'caption';

export interface DropdownMiscItemProps {
  type?: DropdownMiscItemType;
  /** "search" type */
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** "button" type */
  buttonLabel?: string;
  onButtonClick?: () => void;
  /** "caption" type */
  caption?: string;
  className?: string;
}

export const DropdownMiscItem = ({
  type = 'search',
  value = '',
  onChange,
  placeholder = 'Search...',
  buttonLabel = 'Add Workspace',
  onButtonClick,
  caption = 'v.1.5.69 · Terms & Conditions',
  className = '',
}: DropdownMiscItemProps) => {
  if (type === 'button') {
    return (
      <div className={`premui-dropdown-misc ${className}`}>
        <Button type="neutral" style="stroke" size="sm" leftIcon="add-line" className="premui-dropdown-misc-button" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    );
  }

  if (type === 'caption') {
    return (
      <div className={`premui-dropdown-misc premui-dropdown-misc-caption ${className}`}>
        {caption}
      </div>
    );
  }

  const hasValue = value.length > 0;

  return (
    <div className={`premui-dropdown-misc premui-dropdown-misc-search ${className}`} data-active={hasValue || undefined}>
      <i className="ri-search-2-line premui-dropdown-misc-search-icon" aria-hidden="true" />
      <input
        className="premui-dropdown-misc-search-input"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      {hasValue && (
        <CompactButton icon="close-line" size="md" style="ghost" ariaLabel="Clear search" onClick={() => onChange?.('')} />
      )}
    </div>
  );
};
