import React from 'react';
import { HeaderBar } from './HeaderBar';
import type { HeaderBarSharedProps } from './HeaderBar';

export interface PageHeaderProps extends HeaderBarSharedProps {
  /** Show the notification bell icon button. */
  showNotification?: boolean;
  /** Red unread dot on the notification bell. */
  notificationDot?: boolean;
  onNotificationClick?: () => void;
}

/**
 * Page Header [1.1] — the top-of-page header row: a title + description,
 * an optional leading avatar/icon/brand, search + notification icon buttons,
 * and a secondary + primary action button. Figma node 3829:27898.
 */
export const PageHeader = ({
  title = 'Insert page title here',
  description = 'Insert page description here.',
  showSearch = true,
  showNotification = true,
  notificationDot = true,
  secondaryLabel = 'Schedule',
  secondaryIcon = 'calendar-check-line',
  primaryLabel = 'Create Request',
  primaryIcon = 'add-line',
  divider = true,
  ...rest
}: PageHeaderProps) => (
  <HeaderBar
    size="page"
    title={title}
    description={description}
    showSearch={showSearch}
    showNotification={showNotification}
    notificationDot={notificationDot}
    secondaryLabel={secondaryLabel}
    secondaryIcon={secondaryIcon}
    primaryLabel={primaryLabel}
    primaryIcon={primaryIcon}
    divider={divider}
    {...rest}
  />
);
