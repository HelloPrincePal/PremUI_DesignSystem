import React from 'react';
import './command-menu.css';
import { Badge } from '../Badge/Badge';

export type CommandMenuItemSize = 'sm' | 'md';

export interface CommandMenuItemProps {
  /** Leading visual — an icon, Avatar, or brand/company/country logo */
  leading?: React.ReactNode;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Only shown at size="md" */
  description?: string;
  /** Text for a "faded" gray Badge — omitted when not provided */
  badge?: string;
  /** e.g. "⌘K" */
  shortcut?: string;
  /** sm = single line (48px) · md = stacked with description (64px) */
  size?: CommandMenuItemSize;
  showTrailingIndicator?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CommandMenuItem = ({
  leading,
  label,
  sublabel,
  description,
  badge,
  shortcut,
  size = 'sm',
  showTrailingIndicator = true,
  onClick,
  className = '',
}: CommandMenuItemProps) => {
  const showDescription = size === 'md' && description;

  return (
    <button
      type="button"
      className={`premui-command-item ${className}`}
      data-size={size}
      onClick={onClick}
    >
      {leading && <span className="premui-command-item-leading">{leading}</span>}

      <span className="premui-command-item-content">
        <span className="premui-command-item-title">
          <span className="premui-command-item-label">{label}</span>
          {sublabel && <span className="premui-command-item-sublabel">{sublabel}</span>}
        </span>
        {showDescription && <span className="premui-command-item-description">{description}</span>}
      </span>

      {badge && (
        <Badge color="gray" style="lighter" size="sm">
          {badge}
        </Badge>
      )}

      {shortcut && <span className="premui-command-shortcut-text">{shortcut}</span>}

      {showTrailingIndicator && (
        <span className="premui-command-item-trailing" aria-hidden="true">
          <i className="ri-arrow-right-s-line" />
        </span>
      )}
    </button>
  );
};
