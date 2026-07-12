import React from 'react';
import './notification-feed.css';
import { LinkButton } from '../LinkButton/LinkButton';
import { CompactButton } from '../CompactButton/CompactButton';

export interface NotificationHeaderProps {
  title?: string;
  showMarkAllRead?: boolean;
  onMarkAllRead?: () => void;
  showSettings?: boolean;
  onSettingsClick?: () => void;
  className?: string;
}

export const NotificationHeader = ({
  title = 'Notifications',
  showMarkAllRead = true,
  onMarkAllRead,
  showSettings = false,
  onSettingsClick,
  className = '',
}: NotificationHeaderProps) => (
  <div className={`premui-notification-header ${className}`}>
    <p className="premui-notification-header-title">{title}</p>
    {showMarkAllRead && (
      <LinkButton style="primary" size="sm" onClick={onMarkAllRead}>
        Mark all as read
      </LinkButton>
    )}
    {showSettings && (
      <CompactButton icon="settings-2-line" style="ghost" size="lg" fullRadius onClick={onSettingsClick} ariaLabel="Settings" />
    )}
  </div>
);
