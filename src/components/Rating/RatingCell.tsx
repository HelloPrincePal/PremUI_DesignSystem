import React from 'react';
import './rating.css';
import { RatingIcon } from './RatingIcon';
import type { RatingIconType } from './RatingIcon';

export type RatingCellState = 'default' | 'hover' | 'selected';

export interface RatingCellProps {
  type?: RatingIconType;
  selected?: boolean;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover and `selected` drive it. */
  state?: RatingCellState;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const RatingCell = ({ type = 'star', selected = false, state, onClick, ariaLabel, className = '' }: RatingCellProps) => {
  const resolvedState = selected ? 'selected' : state;

  return (
    <button
      type="button"
      className={`premui-rating-cell ${className}`}
      data-state={resolvedState}
      aria-pressed={selected}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <RatingIcon type={type} state="full" size={32} />
    </button>
  );
};
