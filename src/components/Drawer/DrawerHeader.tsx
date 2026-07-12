import React from 'react';
import './drawer.css';
import { CompactButton } from '../CompactButton/CompactButton';
import { LinkButton } from '../LinkButton/LinkButton';
import { Badge } from '../Badge/Badge';

export type DrawerHeaderType = 'basic' | 'left-icon';
export type DrawerHeaderSize = 'sm' | 'lg';

export interface DrawerHeaderProps {
  /** "basic" = title only · "left-icon" = leading icon + title */
  type?: DrawerHeaderType;
  /** sm = single-line title · lg = title + description, larger leading icon */
  size?: DrawerHeaderSize;
  title?: string;
  /** Only rendered at size="lg" */
  description?: string;
  /** Shows a small red count badge next to the title */
  badgeCount?: number | string;
  /** Only rendered at size="sm" (both types) */
  linkLabel?: string;
  onLinkClick?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  /** Renders a bottom border spanning the full width */
  divider?: boolean;
  /** Leading icon slot for the "left-icon" type — defaults to a history icon */
  leading?: React.ReactNode;
  className?: string;
}

export const DrawerHeader = ({
  type = 'basic',
  size = 'sm',
  title = 'Insert title here',
  description = 'Please insert drawer description here.',
  badgeCount,
  linkLabel,
  onLinkClick,
  dismissible = true,
  onDismiss,
  divider = false,
  leading,
  className = '',
}: DrawerHeaderProps) => {
  const isLarge = size === 'lg';
  const isLeftIcon = type === 'left-icon';

  return (
    <div className={`premui-drawer-header ${className}`} data-size={size} data-type={type}>
      {isLeftIcon && (
        <div className="premui-drawer-header-icon">
          {leading ?? <i className="ri-history-line" aria-hidden="true" />}
        </div>
      )}
      <div className="premui-drawer-header-title" data-large={isLarge || undefined}>
        <div className="premui-drawer-header-text-row">
          <p className="premui-drawer-header-heading">{title}</p>
          {badgeCount != null && (
            <Badge color="red" style="filled" size="sm" count={badgeCount} />
          )}
        </div>
        {isLarge && description && (
          <p className="premui-drawer-header-description">{description}</p>
        )}
      </div>
      {!isLarge && linkLabel && (
        <LinkButton style="gray" size="sm" onClick={onLinkClick}>
          {linkLabel}
        </LinkButton>
      )}
      {dismissible && (
        <CompactButton icon="close-line" style="ghost" size="lg" onClick={onDismiss} ariaLabel="Dismiss" />
      )}
      {divider && <div className="premui-drawer-header-divider" aria-hidden="true" />}
    </div>
  );
};
