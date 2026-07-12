import React from 'react';
import './notification-feed.css';
import { Badge } from '../Badge/Badge';
import { CompactButton } from '../CompactButton/CompactButton';

export interface NotificationTab {
  label: string;
  value: string;
  count?: number;
  /** Renders a vertical divider before this tab */
  dividerBefore?: boolean;
}

export interface NotificationTabMenuProps {
  tabs?: NotificationTab[];
  activeValue?: string;
  onChange?: (value: string) => void;
  showFilterButton?: boolean;
  onFilterClick?: () => void;
  className?: string;
}

const DEFAULT_TABS: NotificationTab[] = [
  { label: 'All', value: 'all' },
  { label: 'Inbox', value: 'inbox', count: 2 },
  { label: 'Following', value: 'following' },
  { label: 'Archived', value: 'archived', dividerBefore: true },
];

export const NotificationTabMenu = ({
  tabs = DEFAULT_TABS,
  activeValue = 'all',
  onChange,
  showFilterButton = true,
  onFilterClick,
  className = '',
}: NotificationTabMenuProps) => (
  <div className={`premui-notification-tabs ${className}`} role="tablist">
    {tabs.map((tab) => (
      <React.Fragment key={tab.value}>
        {tab.dividerBefore && <span className="premui-notification-tabs-divider" aria-hidden="true" />}
        <button
          type="button"
          role="tab"
          className="premui-notification-tabs-item"
          data-active={tab.value === activeValue || undefined}
          aria-selected={tab.value === activeValue}
          onClick={() => onChange?.(tab.value)}
        >
          <span>{tab.label}</span>
          {tab.count != null && (
            <Badge color="red" style="filled" size="sm" count={tab.count} />
          )}
        </button>
      </React.Fragment>
    ))}
    {showFilterButton && (
      <CompactButton
        icon="filter-3-fill"
        style="ghost"
        size="lg"
        fullRadius
        onClick={onFilterClick}
        ariaLabel="Filter"
        className="premui-notification-tabs-filter"
      />
    )}
  </div>
);
