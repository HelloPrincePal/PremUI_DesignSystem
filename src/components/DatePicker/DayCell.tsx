import React from 'react';
import './date-picker.css';

export type DayCellState = 'default' | 'hover' | 'disabled';

export interface DayCellProps {
  day: number | string;
  /** Filled primary background + white text — the selected day or a range endpoint */
  selected?: boolean;
  /** Muted primary-colored text, no fill — days between a selected range's two endpoints */
  inRange?: boolean;
  disabled?: boolean;
  /** Shows a small dot indicator (e.g. has an event) */
  marked?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover and `disabled` drive it. */
  state?: DayCellState;
  onClick?: () => void;
  className?: string;
}

export const DayCell = ({
  day,
  selected = false,
  inRange = false,
  disabled = false,
  marked = false,
  state,
  onClick,
  className = '',
}: DayCellProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <button
      type="button"
      className={`premui-day-cell ${className}`}
      data-selected={selected || undefined}
      data-in-range={(inRange && !selected) || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
    >
      {day}
      {marked && <span className="premui-day-cell-dot" aria-hidden="true" />}
    </button>
  );
};
