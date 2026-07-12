import React from 'react';
import './notification-feed.css';
import { Avatar } from '../Avatars/Avatar';
import { Button } from '../Button/Button';
import { CompactButton } from '../CompactButton/CompactButton';

export type NotificationItemType = 'basic' | 'file' | 'button' | 'message';
export type NotificationItemState = 'default' | 'hover';

export interface NotificationItemProps {
  avatarSrc?: string;
  title?: string;
  timestamp?: string;
  description?: string;
  /** Small logo shown inline before the description, e.g. a company/brand icon */
  companyIcon?: React.ReactNode;
  type?: NotificationItemType;
  /** "file" type */
  fileName?: string;
  fileSize?: string;
  /** "message" type */
  message?: string;
  /** "button" type */
  denyLabel?: string;
  approveLabel?: string;
  onDeny?: () => void;
  onApprove?: () => void;
  /** Force a visual state for design QA — reveals the trailing "more" button. Leave unset for real usage (native :hover/:focus-within reveal it). */
  state?: NotificationItemState;
  showMore?: boolean;
  onMoreClick?: () => void;
  onClick?: () => void;
  className?: string;
}

export const NotificationItem = ({
  avatarSrc,
  title = 'Label',
  timestamp = '8 min ago',
  description = 'Description insert here.',
  companyIcon,
  type = 'basic',
  fileName = 'alignui-figma.fig',
  fileSize = '4mb',
  message = "Fantastic! Let's dive right in 🚀",
  denyLabel = 'Deny',
  approveLabel = 'Approve',
  onDeny,
  onApprove,
  state,
  showMore = true,
  onMoreClick,
  onClick,
  className = '',
}: NotificationItemProps) => (
  <div className={`premui-notification-item ${className}`} data-state={state} data-type={type} onClick={onClick}>
    <Avatar type="Image" src={avatarSrc} size={40} className="premui-notification-item-avatar" />
    <div className="premui-notification-item-content">
      <div className="premui-notification-item-text">
        <p className="premui-notification-item-title">{title}</p>
        <div className="premui-notification-item-description">
          <span className="premui-notification-item-timestamp">{timestamp}</span>
          <span aria-hidden="true">∙</span>
          {companyIcon && <span className="premui-notification-item-company-icon">{companyIcon}</span>}
          <span className="premui-notification-item-description-text">{description}</span>
        </div>
      </div>
      {type === 'button' && (
        <div className="premui-notification-item-actions">
          <Button type="neutral" style="stroke" size="xs" onClick={onDeny}>
            {denyLabel}
          </Button>
          <Button type="primary" style="filled" size="xs" onClick={onApprove}>
            {approveLabel}
          </Button>
        </div>
      )}
      {type === 'file' && (
        <div className="premui-notification-item-file">
          <i className="ri-attachment-2" aria-hidden="true" />
          <span className="premui-notification-item-file-name">{fileName}</span>
          <span className="premui-notification-item-file-size">({fileSize})</span>
        </div>
      )}
      {type === 'message' && <div className="premui-notification-item-message">{message}</div>}
    </div>
    {showMore && (
      <div className="premui-notification-item-more">
        <CompactButton icon="more-2-line" style="ghost" size="lg" onClick={onMoreClick} ariaLabel="More options" />
      </div>
    )}
  </div>
);
