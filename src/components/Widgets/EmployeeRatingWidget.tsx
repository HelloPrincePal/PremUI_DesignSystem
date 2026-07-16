import React from 'react';
import { WidgetCard } from './WidgetCard';

export interface EmployeeRatingWidgetProps {
  rating?: number;
  outOf?: number;
  overall?: number;
  empty?: boolean;
  className?: string;
}

export const EmployeeRatingWidget = ({
  rating = 3.6,
  outOf = 5,
  overall = 4.5,
  empty = false,
  className = '',
}: EmployeeRatingWidgetProps) => (
  <WidgetCard icon="user-star-line" title="Employee Rating" className={className}>
    <span className="premui-w-rating-label">Total Rating</span>
    <div className="premui-w-rating-score">
      <i className={empty ? 'ri-star-line' : 'ri-star-fill'} aria-hidden="true" style={empty ? { color: 'var(--color-icon-soft)' } : undefined} />
      <span className="premui-w-rating-num">{empty ? `0.0/0` : `${rating}/${outOf}`}</span>
      <span className="premui-w-rating-overall">(Overall {empty ? 0 : overall})</span>
    </div>
    <div className="premui-w-rating-field">
      {empty ? 'No records of employee rating yet.' : 'Total work hours included in the rating.'}
      <i className="ri-information-line" aria-hidden="true" />
    </div>
  </WidgetCard>
);
