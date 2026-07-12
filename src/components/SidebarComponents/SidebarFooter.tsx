import React from 'react';
import './sidebar-components.css';
import { UserProfileCard } from './UserProfileCard';
import type { UserProfileCardProps } from './UserProfileCard';

export interface SidebarFooterProps extends UserProfileCardProps {
  showDivider?: boolean;
}

export const SidebarFooter = ({ collapsed = false, showDivider = false, ...userProfileCardProps }: SidebarFooterProps) => (
  <div className="premui-sidebar-footer" data-collapsed={collapsed || undefined}>
    {showDivider && <span className="premui-sidebar-footer-divider" aria-hidden="true" />}
    <UserProfileCard collapsed={collapsed} {...userProfileCardProps} />
  </div>
);
