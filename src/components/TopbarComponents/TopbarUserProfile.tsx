import React from 'react';
import './topbar-components.css';
import { Avatar } from '../Avatars/Avatar';
import type { AvatarProps } from '../Avatars/Avatar';

export type TopbarUserProfileState = 'default' | 'hover' | 'active';

export interface TopbarUserProfileProps {
  name?: string;
  verified?: boolean;
  avatar?: Partial<AvatarProps>;
  /** Shows the name label next to the avatar */
  showName?: boolean;
  /** Persistent open/pressed state — flips the chevron and shows the pressed background */
  active?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active usage. */
  state?: TopbarUserProfileState;
  onClick?: () => void;
  className?: string;
}

export const TopbarUserProfile = ({
  name = 'Sophia',
  verified = false,
  avatar,
  showName = true,
  active = false,
  state,
  onClick,
  className = '',
}: TopbarUserProfileProps) => {
  const resolvedActive = state ? state === 'active' : active;

  return (
    <button
      type="button"
      className={`premui-topbar-user-profile ${className}`}
      data-state={state}
      data-active={resolvedActive || undefined}
      onClick={onClick}
    >
      <span className="premui-topbar-user-profile-text">
        <Avatar size={32} type="Illustration" persona={name} {...avatar} />
        {showName && (
          <span className="premui-topbar-user-profile-name">
            <span className="premui-topbar-user-profile-name-label">{name}</span>
            {verified && <i className="ri-verified-badge-fill premui-topbar-user-profile-verified" aria-hidden="true" />}
          </span>
        )}
      </span>
      <i className={`ri-arrow-${resolvedActive ? 'up' : 'down'}-s-fill premui-topbar-user-profile-chevron`} aria-hidden="true" />
    </button>
  );
};
