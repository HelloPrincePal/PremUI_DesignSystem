import React from 'react';
import './filter.css';

export type VerticalFilterItemState = 'default' | 'hover' | 'active' | 'disabled';

export interface VerticalFilterItemProps {
  label?: React.ReactNode;
  /** Leading icon slot — defaults to a calendar icon */
  leading?: React.ReactNode;
  /** Persistent selected state — shows a trailing chevron and highlights the row */
  active?: boolean;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: VerticalFilterItemState;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const VerticalFilterItem = ({
  label = 'Date',
  leading,
  active = false,
  state,
  disabled = false,
  onClick,
  className = '',
}: VerticalFilterItemProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : active ? 'active' : state;

  return (
    <button
      type="button"
      className={`premui-vertical-filter-item ${className}`}
      data-state={resolvedState}
      disabled={isDisabled}
      aria-pressed={active}
      onClick={onClick}
    >
      <span className="premui-vertical-filter-item-icon">{leading ?? <i className="ri-calendar-line" aria-hidden="true" />}</span>
      <span className="premui-vertical-filter-item-label">{label}</span>
      {active && <i className="ri-arrow-right-s-line premui-vertical-filter-item-chevron" aria-hidden="true" />}
    </button>
  );
};
