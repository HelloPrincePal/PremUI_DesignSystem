import React from 'react';
import './notification-feed.css';

export interface NotificationFooterProps {
  showManageLink?: boolean;
  onManageClick?: () => void;
  className?: string;
}

export const NotificationFooter = ({ showManageLink = true, onManageClick, className = '' }: NotificationFooterProps) => (
  <div className={`premui-notification-footer ${className}`}>
    <div className="premui-notification-footer-navigate">
      <span>Use</span>
      <span className="premui-notification-footer-shortcut">
        <i className="ri-arrow-up-line" aria-hidden="true" />
      </span>
      <span className="premui-notification-footer-shortcut">
        <i className="ri-arrow-down-line" aria-hidden="true" />
      </span>
      <span>to navigate</span>
    </div>
    {showManageLink && (
      <button type="button" className="premui-notification-footer-manage" onClick={onManageClick}>
        <i className="ri-settings-2-line" aria-hidden="true" />
        <span>Manage Notification</span>
      </button>
    )}
  </div>
);
