import React from 'react';
import './sidebar-components.css';
import { HeaderCard } from './HeaderCard';
import type { HeaderCardProps } from './HeaderCard';

export interface SidebarHeaderProps extends Omit<HeaderCardProps, 'onlyIcon'> {
  collapsed?: boolean;
  showDivider?: boolean;
}

export const SidebarHeader = ({ collapsed = false, showDivider = false, ...headerCardProps }: SidebarHeaderProps) => (
  <div className="premui-sidebar-header" data-collapsed={collapsed || undefined}>
    <HeaderCard {...headerCardProps} onlyIcon={collapsed} />
    {showDivider && <span className="premui-sidebar-header-divider" aria-hidden="true" />}
  </div>
);
