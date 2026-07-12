import React from 'react';
import './sidebar-components.css';
import { Avatar } from '../Avatars/Avatar';
import type { AvatarProps } from '../Avatars/Avatar';

export type UserProfileCardState = 'default' | 'hover';

export interface UserProfileCardProps {
  name?: string;
  email?: string;
  verified?: boolean;
  avatar?: Partial<AvatarProps>;
  showDropdown?: boolean;
  onDropdownClick?: () => void;
  /** Collapsed rail mode — avatar only, no text/dropdown */
  collapsed?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover usage. */
  state?: UserProfileCardState;
  onClick?: () => void;
  className?: string;
}

export const UserProfileCard = ({
  name = 'Sophia Williams',
  email = 'sophia@alignui.com',
  verified = true,
  avatar,
  showDropdown = true,
  onDropdownClick,
  collapsed = false,
  state,
  onClick,
  className = '',
}: UserProfileCardProps) => (
  <button
    type="button"
    className={`premui-sidebar-user-card ${className}`}
    data-state={state}
    data-collapsed={collapsed || undefined}
    onClick={onClick}
  >
    <Avatar size={40} type="Illustration" persona={name} {...avatar} />
    {!collapsed && (
      <>
        <span className="premui-sidebar-user-card-text">
          <span className="premui-sidebar-user-card-name">
            <span className="premui-sidebar-user-card-name-label">{name}</span>
            {verified && <i className="ri-verified-badge-fill premui-sidebar-user-card-verified" aria-hidden="true" />}
          </span>
          <span className="premui-sidebar-user-card-email">{email}</span>
        </span>
        {showDropdown && (
          <i
            className="ri-arrow-right-s-line premui-sidebar-user-card-chevron"
            aria-hidden="true"
            onClick={(e) => {
              e.stopPropagation();
              onDropdownClick?.();
            }}
          />
        )}
      </>
    )}
  </button>
);
