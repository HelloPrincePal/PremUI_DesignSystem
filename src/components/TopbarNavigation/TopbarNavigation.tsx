import React, { useEffect, useRef, useState } from 'react';
import './topbar-navigation.css';
import { TopbarItem } from '../TopbarComponents/TopbarItem';
import { TopbarUserProfile } from '../TopbarComponents/TopbarUserProfile';
import { TopbarIconButton } from '../TopbarComponents/TopbarIconButton';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { PlaceholderBrand } from '../../assets/Placeholder/PlaceholderBrand';
import type { PlaceholderCompany } from '../../assets/Placeholder/PlaceholderBrand';
import type { TopbarUserProfileProps } from '../TopbarComponents/TopbarUserProfile';

export interface TopbarNavItem {
  key: string;
  label: string;
  /** RemixIcon name (no `ri-` prefix) */
  icon: string;
}

export interface TopbarNavigationProps {
  /** Brand logo slot — defaults to the real Placeholder brand asset for `company` */
  logo?: React.ReactNode;
  company?: PlaceholderCompany;
  items?: TopbarNavItem[];
  /** Extra items tucked behind an "Others" overflow trigger — omit to hide it */
  moreItems?: TopbarNavItem[];
  /** Shows a leading icon on every nav item */
  showIcons?: boolean;
  activeKey?: string;
  onActiveChange?: (key: string) => void;
  onItemClick?: (key: string) => void;
  /** Shows the inline search field — when false, a search icon button appears on the right instead */
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchShortcut?: string;
  onSearchChange?: (value: string) => void;
  onSearchIconClick?: () => void;
  showQuickAction?: boolean;
  onQuickAction?: () => void;
  /** Unread notification count — shows a red dot on the bell icon when truthy */
  notificationCount?: number;
  onNotificationClick?: () => void;
  user?: Omit<TopbarUserProfileProps, 'state'>;
  className?: string;
}

const DEFAULT_ITEMS: TopbarNavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'layout-grid-line' },
  { key: 'calendar', label: 'Calendar', icon: 'calendar-line' },
  { key: 'time-off', label: 'Time Off', icon: 'timer-line' },
  { key: 'projects', label: 'Projects', icon: 'folders-line' },
  { key: 'teams', label: 'Teams', icon: 'group-line' },
  { key: 'settings', label: 'Settings', icon: 'settings-2-line' },
];

const DEFAULT_MORE_ITEMS: TopbarNavItem[] = [
  { key: 'benefits', label: 'Benefits', icon: 'star-smile-line' },
  { key: 'documents', label: 'Documents', icon: 'file-cloud-line' },
  { key: 'integrations', label: 'Integrations', icon: 'equalizer-line' },
];

export const TopbarNavigation = ({
  logo,
  company = 'Synergy',
  items = DEFAULT_ITEMS,
  moreItems = DEFAULT_MORE_ITEMS,
  showIcons = false,
  activeKey,
  onActiveChange,
  onItemClick,
  showSearch = true,
  searchPlaceholder = 'Search...',
  searchShortcut = '⌘1',
  onSearchChange,
  onSearchIconClick,
  showQuickAction = true,
  onQuickAction,
  notificationCount,
  onNotificationClick,
  user,
  className = '',
}: TopbarNavigationProps) => {
  const [internalActive, setInternalActive] = useState(items[0]?.key);
  const [searchValue, setSearchValue] = useState('');
  const [moreOpen, setMoreOpen] = useState(false);
  const [morePanelStyle, setMorePanelStyle] = useState<React.CSSProperties>({});
  const moreRef = useRef<HTMLButtonElement>(null);
  const morePanelRef = useRef<HTMLDivElement>(null);

  const resolvedActive = activeKey ?? internalActive;

  const selectItem = (key: string) => {
    if (onActiveChange) onActiveChange(key);
    else setInternalActive(key);
    onItemClick?.(key);
    setMoreOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange?.(e.target.value);
  };

  const handleMoreToggle = () => {
    setMoreOpen((o) => {
      const next = !o;
      if (next && moreRef.current) {
        const rect = moreRef.current.getBoundingClientRect();
        setMorePanelStyle({
          position: 'fixed',
          top: rect.bottom + 8,
          left: rect.left,
          minWidth: rect.width,
          zIndex: 1000,
        });
      }
      return next;
    });
  };

  useEffect(() => {
    if (!moreOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (moreRef.current?.contains(target) || morePanelRef.current?.contains(target)) return;
      setMoreOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [moreOpen]);

  return (
    <div className={`premui-topbar-nav ${className}`}>
      <div className="premui-topbar-nav-left">
        {logo ?? <PlaceholderBrand company={company} size={40} />}
        <nav className="premui-topbar-nav-menu">
          {items.map((item) => (
            <TopbarItem
              key={item.key}
              label={item.label}
              icon={item.icon}
              showIcon={showIcons}
              active={item.key === resolvedActive}
              onClick={() => selectItem(item.key)}
            />
          ))}
          {moreItems.length > 0 && (
            <TopbarItem
              ref={moreRef}
              label="Others"
              icon="apps-2-line"
              showIcon={showIcons}
              showRightIcon
              rightIcon={moreOpen ? 'arrow-up-s-line' : 'arrow-down-s-line'}
              active={moreOpen}
              onClick={handleMoreToggle}
            />
          )}
        </nav>
      </div>

      {showSearch && (
        <div className="premui-topbar-nav-search">
          <i className="ri-search-2-line premui-topbar-nav-search-icon" aria-hidden="true" />
          <input
            type="text"
            className="premui-topbar-nav-search-input"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={handleSearchChange}
          />
          {searchShortcut && <span className="premui-topbar-nav-search-shortcut">{searchShortcut}</span>}
        </div>
      )}

      <div className="premui-topbar-nav-right">
        {!showSearch && <TopbarIconButton icon="search-2-line" onClick={onSearchIconClick} ariaLabel="Search" />}
        {showQuickAction && <TopbarIconButton icon="flashlight-line" onClick={onQuickAction} ariaLabel="Quick action" />}
        <TopbarIconButton
          icon="notification-3-line"
          dot={!!notificationCount}
          onClick={onNotificationClick}
          ariaLabel="Notifications"
        />
        <TopbarUserProfile name="Sophia" verified {...user} />
      </div>

      {moreOpen && (
        <div className="premui-topbar-nav-more-panel" style={morePanelStyle} ref={morePanelRef} role="listbox">
          {moreItems.map((item) => (
            <DropdownItem
              key={item.key}
              leading={<i className={`ri-${item.icon}`} aria-hidden="true" />}
              label={item.label}
              state={item.key === resolvedActive ? 'selected' : undefined}
              onClick={() => selectItem(item.key)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
