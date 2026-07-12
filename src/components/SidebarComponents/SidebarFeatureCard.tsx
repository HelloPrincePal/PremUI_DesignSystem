import React from 'react';
import './sidebar-components.css';
import { Avatar } from '../Avatars/Avatar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { LinkButton } from '../LinkButton/LinkButton';
import { CompactButton } from '../CompactButton/CompactButton';

export type SidebarFeatureCardType = 'daily-meeting' | 'progress-bar' | 'icon-link' | 'left-icon' | 'support' | 'cloud-storage';
export type SidebarFeatureCardStyle = 'stroke' | 'gray' | 'primary' | 'neutral';

export interface SidebarFeatureCardProps {
  type?: SidebarFeatureCardType;
  style?: SidebarFeatureCardStyle;
  dismissible?: boolean;
  onDismiss?: () => void;
  title?: string;
  description?: string;
  /** daily-meeting: attendee personas shown in the compact avatar group */
  members?: string[];
  extraCount?: number;
  onJoin?: () => void;
  /** progress-bar / cloud-storage: real 0–100 value driving the bar width */
  percentage?: number;
  onUpgrade?: () => void;
  syncPaused?: boolean;
  onToggleSync?: () => void;
  /** icon-link / left-icon */
  icon?: string;
  onLinkClick?: () => void;
  linkLabel?: string;
  className?: string;
}

const isDarkStyle = (style: SidebarFeatureCardStyle) => style === 'primary' || style === 'neutral';

const CompactAvatarGroup = ({ members, extraCount }: { members: string[]; extraCount?: number }) => (
  <span className="premui-feature-card-avatar-group">
    <span className="premui-feature-card-avatar-group-stack">
      {members.map((persona) => (
        <Avatar key={persona} persona={persona} size={24} type="Illustration" style={{ outline: '2px solid var(--color-bg-white, #fff)' }} />
      ))}
    </span>
    {extraCount != null && <span className="premui-feature-card-avatar-group-count">+{extraCount}</span>}
  </span>
);

export const SidebarFeatureCard = ({
  type = 'daily-meeting',
  style = 'stroke',
  dismissible,
  onDismiss,
  title,
  description,
  members = ['Alec Whitten', 'Demi Wilkinson', 'Candice Wu'],
  extraCount = 4,
  onJoin,
  percentage = 80,
  onUpgrade,
  syncPaused = true,
  onToggleSync,
  icon,
  onLinkClick,
  linkLabel,
  className = '',
}: SidebarFeatureCardProps) => {
  const dark = isDarkStyle(style);
  const linkStyle = dark ? 'modifiable' : 'primary';
  const canDismiss = dismissible ?? (type === 'daily-meeting' || type === 'support');

  return (
    <div className={`premui-feature-card premui-feature-card-type-${type} ${className}`} data-style={style}>
      {canDismiss && (
        <CompactButton
          icon="close-line"
          style="ghost"
          size="md"
          onClick={onDismiss}
          ariaLabel="Dismiss"
          className="premui-feature-card-dismiss"
        />
      )}

      {type === 'daily-meeting' && (
        <>
          <CompactAvatarGroup members={members} extraCount={extraCount} />
          <div className="premui-feature-card-text">
            <p className="premui-feature-card-title">{title ?? 'Daily Meeting'}</p>
            <p className="premui-feature-card-description">{description ?? '9:00 AM - 9:30 AM on Zoom'}</p>
          </div>
          <LinkButton style={linkStyle} rightIcon="arrow-right-s-line" onClick={onJoin}>
            Join Now
          </LinkButton>
        </>
      )}

      {type === 'progress-bar' && (
        <>
          <div className="premui-feature-card-text">
            <p className="premui-feature-card-title">{title ?? 'Cloud Capacity'}</p>
            <p className="premui-feature-card-description">{description ?? "You're almost out of space."}</p>
          </div>
          <ProgressBar percentage={percentage} color={dark ? 'blue' : 'blue'} />
          <LinkButton style={linkStyle} rightIcon={null} onClick={onUpgrade}>
            Upgrade Cloud
          </LinkButton>
        </>
      )}

      {type === 'icon-link' && (
        <>
          <span className="premui-feature-card-icon">
            <i className={`ri-${icon ?? 'upload-cloud-2-line'}`} aria-hidden="true" />
          </span>
          <p className="premui-feature-card-description premui-feature-card-description-center">
            {description ?? 'We have enhanced cloud plans for your needs.'}
          </p>
          <LinkButton style={linkStyle} rightIcon={null} onClick={onLinkClick}>
            {linkLabel ?? 'View Plans'}
          </LinkButton>
        </>
      )}

      {type === 'left-icon' && (
        <>
          <span className="premui-feature-card-icon">
            <i className={`ri-${icon ?? 'gift-line'}`} aria-hidden="true" />
          </span>
          <div className="premui-feature-card-text">
            <p className="premui-feature-card-title">{title ?? 'Claim your gift!'}</p>
            <p className="premui-feature-card-description">{description ?? 'Find it on Benefits page.'}</p>
          </div>
        </>
      )}

      {type === 'support' && (
        <div className="premui-feature-card-support-row">
          <i className={`ri-${icon ?? 'customer-service-2-fill'} premui-feature-card-support-icon`} aria-hidden="true" />
          <p className="premui-feature-card-support-title">{title ?? 'Need Support'}</p>
        </div>
      )}
      {type === 'support' && (
        <p className="premui-feature-card-description">{description ?? 'Contact with one of our experts to get support.'}</p>
      )}

      {type === 'cloud-storage' && (
        <>
          <div className="premui-feature-card-cloud-label">
            <p className="premui-feature-card-title">{title ?? 'Cloud Storage'}</p>
            <p className="premui-feature-card-percentage">{percentage}%</p>
          </div>
          <ProgressBar percentage={percentage} color="blue" />
          <p className="premui-feature-card-description">{description ?? '1.6 GB of 2 GB used'}</p>
          <button type="button" className="premui-feature-card-sync-row" onClick={onToggleSync}>
            <span className="premui-feature-card-sync-label">File Syncing</span>
            <span className="premui-feature-card-sync-status">{syncPaused ? '(Paused)' : '(Syncing…)'}</span>
            <i className="ri-play-circle-fill premui-feature-card-sync-icon" aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
};
