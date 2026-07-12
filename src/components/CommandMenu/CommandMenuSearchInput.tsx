import React from 'react';
import './command-menu.css';
import { CompactButton } from '../CompactButton/CompactButton';

export interface CommandMenuSearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  showShortcut?: boolean;
  showInfoButton?: boolean;
  onInfoClick?: () => void;
  className?: string;
}

export const CommandMenuSearchInput = ({
  value = '',
  onChange,
  placeholder = 'Search or jump to',
  showShortcut = true,
  showInfoButton = true,
  onInfoClick,
  className = '',
}: CommandMenuSearchInputProps) => {
  const hasValue = value.length > 0;

  return (
    <div className={`premui-command-search ${className}`}>
      <i className="ri-search-2-line premui-command-search-icon" aria-hidden="true" />
      <input
        className="premui-command-search-input"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      {!hasValue && showShortcut && <span className="premui-command-shortcut-text">⌘K</span>}
      {!hasValue && showInfoButton && (
        <button type="button" className="premui-command-search-info" onClick={onInfoClick} aria-label="Info">
          <i className="ri-information-fill" aria-hidden="true" />
        </button>
      )}
      {hasValue && (
        <CompactButton icon="close-line" size="sm" style="ghost" ariaLabel="Clear search" onClick={() => onChange?.('')} />
      )}
    </div>
  );
};
