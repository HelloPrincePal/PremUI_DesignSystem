import React from 'react';
import './widgets.css';
import { BrandLogo } from './WidgetCard';

export type TimeTrackerDropdownState = 'default' | 'hover' | 'focus' | 'active';

export interface TimeTrackerDropdownProps {
  label?: string;
  /** Brand logo file name (from src/assets/Brand/Brand Logos/). */
  brand?: string;
  /** Force a visual state for design QA. Leave unset for real interaction. */
  state?: TimeTrackerDropdownState;
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Time Tracker Dropdown [Time Tracker] — the project select trigger with
 * Default / Hover / Focus / Active states. Ported from Figma node 3849:32128.
 */
export const TimeTrackerDropdown = ({
  label = 'Monday.com Redesign',
  brand = 'Monday.com',
  state,
  open = false,
  onClick,
  className = '',
}: TimeTrackerDropdownProps) => (
  <button
    type="button"
    className={`premui-w-tracker-select ${className}`}
    data-state={state}
    onClick={onClick}
    aria-expanded={open}
  >
    {brand && <BrandLogo name={brand} />}
    <span className="premui-w-tracker-select-label">{label}</span>
    <i className={`ri-arrow-${open ? 'up' : 'down'}-s-line caret`} aria-hidden="true" />
  </button>
);
