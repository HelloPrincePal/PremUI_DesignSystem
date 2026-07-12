import React from 'react';
import './filter.css';
import { Button } from '../Button/Button';

export interface FilterBarProps {
  /** Left-side content — e.g. a ButtonGroup of date presets or a SegmentedControl of tabs. Consumer-composed. */
  left?: React.ReactNode;
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  /** Shown while the search field is empty — e.g. "⌘1" */
  searchShortcut?: string;
  showFilterButton?: boolean;
  filterLabel?: string;
  onFilterClick?: () => void;
  showSettingsButton?: boolean;
  onSettingsClick?: () => void;
  showSortBy?: boolean;
  sortLabel?: string;
  onSortClick?: () => void;
  className?: string;
}

export const FilterBar = ({
  left,
  showSearch = true,
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search...',
  searchShortcut = '⌘1',
  showFilterButton = true,
  filterLabel = 'Filter',
  onFilterClick,
  showSettingsButton = true,
  onSettingsClick,
  showSortBy = false,
  sortLabel = 'Sort by',
  onSortClick,
  className = '',
}: FilterBarProps) => {
  const hasValue = searchValue.length > 0;

  return (
    <div className={`premui-filter-bar ${className}`}>
      {left && <div className="premui-filter-bar-left">{left}</div>}
      <div className="premui-filter-bar-right">
        {showSearch && (
          <div className="premui-filter-search">
            <i className="ri-search-2-line premui-filter-search-icon" aria-hidden="true" />
            <input
              className="premui-filter-search-input"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label="Search"
            />
            {!hasValue && searchShortcut && <span className="premui-filter-search-shortcut">{searchShortcut}</span>}
          </div>
        )}
        {showFilterButton && (
          <Button type="neutral" style="stroke" size="sm" leftIcon="filter-3-fill" onClick={onFilterClick}>
            {filterLabel}
          </Button>
        )}
        {showSettingsButton && (
          <Button type="neutral" style="stroke" size="sm" leftIcon="settings-2-line" onClick={onSettingsClick} />
        )}
        {showSortBy && (
          <Button type="neutral" style="stroke" size="sm" leftIcon="sort-desc" rightIcon="arrow-down-s-line" onClick={onSortClick}>
            {sortLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
