import React from 'react';
import './page-header.css';
import { TopbarIconButton } from '../TopbarComponents/TopbarIconButton';

/**
 * Props shared by both `PageHeader` and `SectionHeader`. The two components
 * are thin wrappers over the internal `HeaderBar` shell below, differing only
 * in default vertical padding, whether a notification bell is shown, and their
 * default button labels/icons.
 */
export interface HeaderBarSharedProps {
  /** Page/section title. */
  title?: string;
  /** Supporting line under the title — omit or pass `null` to hide it. */
  description?: React.ReactNode;
  /**
   * Leading visual before the title. Drop in an `Avatar`, `KeyIcon`, or
   * `PlaceholderBrand` (48px) to reproduce the avatar / left-icon / brand /
   * company Figma variants; leave unset for the basic variant.
   */
  leading?: React.ReactNode;
  /** Extra node rendered inline to the right of the title (e.g. a compact button). */
  titleAction?: React.ReactNode;
  /** Show the leading search icon button. */
  showSearch?: boolean;
  onSearchClick?: () => void;
  /** Secondary button label — pass `null` to hide the secondary button. */
  secondaryLabel?: string | null;
  /** RemixIcon name for the secondary button (no `ri-` prefix). */
  secondaryIcon?: string | null;
  onSecondaryClick?: () => void;
  /** Primary button label — pass `null` to hide the primary button. */
  primaryLabel?: string | null;
  /** RemixIcon name for the primary button (no `ri-` prefix). */
  primaryIcon?: string | null;
  onPrimaryClick?: () => void;
  /**
   * Fully replaces the default primary/secondary button cluster. Use this to
   * drop in arbitrary actions (e.g. shared `Button` components) instead.
   */
  actions?: React.ReactNode;
  /** Show the 1px bottom divider. */
  divider?: boolean;
  className?: string;
}

export interface HeaderBarProps extends HeaderBarSharedProps {
  /** Drives vertical padding: page = 20px, section = 16px. */
  size: 'page' | 'section';
  /** Show the notification bell icon button (Page Header only). */
  showNotification?: boolean;
  /** Red unread dot on the notification bell. */
  notificationDot?: boolean;
  onNotificationClick?: () => void;
}

export const HeaderBar = ({
  size,
  title,
  description,
  leading,
  titleAction,
  showSearch = true,
  onSearchClick,
  showNotification = false,
  notificationDot = false,
  onNotificationClick,
  secondaryLabel,
  secondaryIcon,
  onSecondaryClick,
  primaryLabel,
  primaryIcon,
  onPrimaryClick,
  actions,
  divider = true,
  className = '',
}: HeaderBarProps) => {
  const hasDefaultButtons =
    actions === undefined && (secondaryLabel != null || primaryLabel != null);

  return (
    <div className={`premui-page-header ${className}`} data-size={size}>
      <div className="premui-page-header-content">
        {leading != null && <div className="premui-page-header-leading">{leading}</div>}
        <div className="premui-page-header-name">
          <div className="premui-page-header-title-row">
            {title != null && <span className="premui-page-header-title">{title}</span>}
            {titleAction}
          </div>
          {description != null && <span className="premui-page-header-desc">{description}</span>}
        </div>
      </div>

      {showSearch && (
        <TopbarIconButton icon="search-2-line" ariaLabel="Search" onClick={onSearchClick} />
      )}

      {showNotification && (
        <TopbarIconButton
          icon="notification-3-line"
          ariaLabel="Notifications"
          dot={notificationDot}
          onClick={onNotificationClick}
        />
      )}

      {actions !== undefined
        ? actions
        : hasDefaultButtons && (
            <div className="premui-page-header-buttons">
              {secondaryLabel != null && (
                <button
                  type="button"
                  className="premui-page-header-btn"
                  data-variant="secondary"
                  onClick={onSecondaryClick}
                >
                  {secondaryIcon && <i className={`ri-${secondaryIcon}`} aria-hidden="true" />}
                  <span>{secondaryLabel}</span>
                </button>
              )}
              {primaryLabel != null && (
                <button
                  type="button"
                  className="premui-page-header-btn"
                  data-variant="primary"
                  onClick={onPrimaryClick}
                >
                  {primaryIcon && <i className={`ri-${primaryIcon}`} aria-hidden="true" />}
                  <span>{primaryLabel}</span>
                </button>
              )}
            </div>
          )}

      {divider && <div className="premui-page-header-divider" aria-hidden="true" />}
    </div>
  );
};
