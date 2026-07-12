import React, { useState } from 'react';
import './sidebar-navigation.css';
import { SidebarHeader } from '../SidebarComponents/SidebarHeader';
import { SidebarItem } from '../SidebarComponents/SidebarItem';
import { SidebarFooter } from '../SidebarComponents/SidebarFooter';
import { SidebarFeatureCard } from '../SidebarComponents/SidebarFeatureCard';
import type { HeaderCardProps } from '../SidebarComponents/HeaderCard';
import type { UserProfileCardProps } from '../SidebarComponents/UserProfileCard';
import type { SidebarFeatureCardProps } from '../SidebarComponents/SidebarFeatureCard';

export interface SidebarNavItem {
  key: string;
  label: string;
  /** RemixIcon name (no `ri-` prefix) */
  icon: string;
}

export interface SidebarNavigationProps {
  collapsed?: boolean;
  header?: Omit<HeaderCardProps, 'onlyIcon' | 'state'>;
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchShortcut?: string;
  onSearchChange?: (value: string) => void;
  mainLabel?: string;
  mainItems?: SidebarNavItem[];
  supportingItems?: SidebarNavItem[];
  activeKey?: string;
  onActiveChange?: (key: string) => void;
  onItemClick?: (key: string) => void;
  /** Set to null to hide the promo card, or pass overrides — hidden automatically when collapsed */
  featureCard?: SidebarFeatureCardProps | null;
  user?: Omit<UserProfileCardProps, 'collapsed' | 'state'>;
  className?: string;
}

const DEFAULT_MAIN_ITEMS: SidebarNavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'layout-grid-line' },
  { key: 'calendar', label: 'Calendar', icon: 'calendar-line' },
  { key: 'time-off', label: 'Time Off', icon: 'timer-line' },
  { key: 'projects', label: 'Projects', icon: 'folders-line' },
  { key: 'teams', label: 'Teams', icon: 'group-line' },
  { key: 'integrations', label: 'Integrations', icon: 'equalizer-line' },
  { key: 'benefits', label: 'Benefits', icon: 'star-smile-line' },
  { key: 'documents', label: 'Documents', icon: 'file-cloud-line' },
];

const DEFAULT_SUPPORTING_ITEMS: SidebarNavItem[] = [
  { key: 'settings', label: 'Settings', icon: 'settings-2-line' },
  { key: 'support', label: 'Support', icon: 'headphone-line' },
];

export const SidebarNavigation = ({
  collapsed = false,
  header,
  showSearch = false,
  searchPlaceholder = 'Search...',
  searchShortcut = '⌘1',
  onSearchChange,
  mainLabel = 'Main',
  mainItems = DEFAULT_MAIN_ITEMS,
  supportingItems = DEFAULT_SUPPORTING_ITEMS,
  activeKey,
  onActiveChange,
  onItemClick,
  featureCard,
  user,
  className = '',
}: SidebarNavigationProps) => {
  const [internalActive, setInternalActive] = useState(mainItems[0]?.key);
  const [searchValue, setSearchValue] = useState('');
  const resolvedActive = activeKey ?? internalActive;

  const selectItem = (key: string) => {
    if (onActiveChange) onActiveChange(key);
    else setInternalActive(key);
    onItemClick?.(key);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange?.(e.target.value);
  };

  return (
    <div className={`premui-sidebar-nav ${className}`} data-collapsed={collapsed || undefined}>
      <SidebarHeader collapsed={collapsed} showDivider {...header} />
      <div className="premui-sidebar-nav-content">
        {showSearch && !collapsed && (
          <div className="premui-sidebar-nav-search">
            <i className="ri-search-2-line premui-sidebar-nav-search-icon" aria-hidden="true" />
            <input
              type="text"
              className="premui-sidebar-nav-search-input"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={handleSearchChange}
            />
            {searchShortcut && <span className="premui-sidebar-nav-search-shortcut">{searchShortcut}</span>}
          </div>
        )}

        <div className="premui-sidebar-nav-main">
          {!collapsed && <p className="premui-sidebar-nav-section-label">{mainLabel}</p>}
          <nav className="premui-sidebar-nav-list">
            {mainItems.map((item) => (
              <SidebarItem
                key={item.key}
                label={item.label}
                icon={item.icon}
                collapsed={collapsed}
                active={item.key === resolvedActive}
                onClick={() => selectItem(item.key)}
              />
            ))}
          </nav>
        </div>

        {supportingItems.length > 0 && (
          <div className="premui-sidebar-nav-supporting">
            {supportingItems.map((item) => (
              <SidebarItem
                key={item.key}
                label={item.label}
                icon={item.icon}
                collapsed={collapsed}
                active={item.key === resolvedActive}
                onClick={() => selectItem(item.key)}
              />
            ))}
          </div>
        )}

        {featureCard !== null && !collapsed && (
          <SidebarFeatureCard type="daily-meeting" style="stroke" {...featureCard} />
        )}
      </div>
      <SidebarFooter collapsed={collapsed} showDivider {...user} />
    </div>
  );
};
