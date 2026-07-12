import React from 'react';
import './pagination.css';

export type PaginationCellState = 'default' | 'hover' | 'selected' | 'disabled';

export interface PaginationCellProps {
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled`/`selected` drive it. */
  state?: PaginationCellState;
  fullRadius?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const PaginationCell = ({
  children = '1',
  selected = false,
  disabled = false,
  state,
  fullRadius = false,
  onClick,
  ariaLabel,
  className = '',
}: PaginationCellProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : selected ? 'selected' : state;

  return (
    <button
      type="button"
      className={`premui-pagination-cell ${className}`}
      data-state={resolvedState}
      data-full-radius={fullRadius || undefined}
      disabled={isDisabled}
      aria-current={selected || undefined ? 'page' : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
