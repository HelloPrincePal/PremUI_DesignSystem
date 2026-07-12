import React from 'react';
import './filter.css';
import { LinkButton } from '../LinkButton/LinkButton';

export interface VerticalFilterHeaderProps {
  label?: React.ReactNode;
  /** Leading icon slot — defaults to a calendar icon */
  leading?: React.ReactNode;
  showClear?: boolean;
  clearLabel?: string;
  onClear?: () => void;
  className?: string;
}

export const VerticalFilterHeader = ({
  label = 'Label',
  leading,
  showClear = true,
  clearLabel = 'Clear',
  onClear,
  className = '',
}: VerticalFilterHeaderProps) => (
  <div className={`premui-vertical-filter-header ${className}`}>
    <span className="premui-vertical-filter-header-title">
      <span className="premui-vertical-filter-header-icon">{leading ?? <i className="ri-calendar-line" aria-hidden="true" />}</span>
      <span className="premui-vertical-filter-header-label">{label}</span>
    </span>
    {showClear && (
      <LinkButton style="gray" size="sm" underline onClick={onClear}>
        {clearLabel}
      </LinkButton>
    )}
  </div>
);
