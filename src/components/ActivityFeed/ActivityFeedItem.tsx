import React from 'react';
import { Avatar, AvatarProps } from '../Avatars/Avatar';

export interface ActivityFeedItemProps {
  /** Avatar persona name from system personas */
  persona?: string;
  /** Avatar image URL (optional override) */
  avatarSrc?: string;
  /** Bold name of the person who did the action */
  actor: string;
  /** Verb describing the action, e.g. "uploaded" */
  action: string;
  /** Bold subject of the action, e.g. "Q2 financial report" */
  subject: string;
  /** Relative timestamp, e.g. "4 min ago" */
  timestamp: string;
  /** Whether to show the persona avatar */
  showAvatar?: boolean;
  /** Whether to show the action button (more options) */
  showButton?: boolean;
  /** Whether to show the timestamp */
  showTimestamp?: boolean;
  /** Optional content beneath the header: file chips, comment bubble, task chips, etc. */
  children?: React.ReactNode;
  /** Additional props to pass to the Avatar component */
  avatarProps?: Partial<AvatarProps>;
  onMore?: () => void;
  style?: React.CSSProperties;
}

export const ActivityFeedItem = ({
  persona = 'James Brown',
  avatarSrc,
  actor,
  action,
  subject,
  timestamp,
  showAvatar = true,
  showButton = true,
  showTimestamp = true,
  children,
  avatarProps,
  onMore,
  style,
}: ActivityFeedItemProps) => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: children ? 'flex-start' : 'center',
        gap: 'var(--spacing-16, 16px)',
        width: '100%',
        ...style
      }}
    >
      {showAvatar && (
        <div style={{ flexShrink: 0 }}>
          <Avatar
            persona={persona}
            src={avatarSrc}
            size={32}
            type={avatarSrc ? 'Image' : 'Persona'}
            style={{
              outline: '4px solid var(--color-stroke-white, white)',
              borderRadius: 'var(--radius-full, 999px)'
            }}
            {...avatarProps}
          />
        </div>
      )}

      <div style={{
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--spacing-8, 8px)',
        minWidth: 0,
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: 'var(--spacing-2, 2px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4, 4px)' }}>
            <span style={{ color: 'var(--color-text-strong)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{actor}</span>
            <span style={{ color: 'var(--color-text-sub)', fontSize: 14, fontWeight: 400, lineHeight: '20px' }}>{action}</span>
            <span style={{ color: 'var(--color-text-strong)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{subject}</span>
          </div>
          {showTimestamp && (
            <>
              <span style={{ color: 'var(--color-text-disabled)', fontSize: 14, fontWeight: 500, lineHeight: '20px', padding: '0 2px' }}>・</span>
              <span style={{ color: 'var(--color-text-soft)', fontSize: 14, fontWeight: 400, lineHeight: '20px' }}>{timestamp}</span>
            </>
          )}
        </div>

        {children && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--spacing-8, 8px)',
            width: '100%'
          }}>
            {children}
          </div>
        )}
      </div>

      {showButton && (
        <button 
          onClick={onMore} 
          style={{
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            borderRadius: 'var(--radius-full, 999px)',
            cursor: 'pointer',
            color: 'var(--color-icon-sub)',
            padding: 1,
            flexShrink: 0,
          }}
          aria-label="More options"
        >
          <i className="ri-more-2-line" style={{ fontSize: 18 }} />
        </button>
      )}
    </div>
  );
};
