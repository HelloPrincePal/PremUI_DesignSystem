import React from 'react';
import './rating.css';

export type RatingBarType = 'emoji' | 'number' | 'star' | 'heart';

const EMOJI_ICONS = ['emotion-sad-line', 'emotion-unhappy-line', 'emotion-normal-line', 'emotion-happy-line', 'emotion-laugh-line'];

export interface RatingBarProps {
  type?: RatingBarType;
  /** 1–5, 0 = none selected */
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export const RatingBar = ({ type = 'emoji', value = 0, onChange, className = '' }: RatingBarProps) => (
  <div className={`premui-rating-bar ${className}`} role="radiogroup" aria-label="Rating">
    {[1, 2, 3, 4, 5].map((n) => {
      const selected = value === n;
      return (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={selected}
          className="premui-rating-bar-item"
          data-type={type}
          data-selected={selected || undefined}
          onClick={() => onChange?.(n)}
        >
          {type === 'emoji' && <i className={`ri-${EMOJI_ICONS[n - 1]}`} aria-hidden="true" />}
          {type === 'number' && <span className="premui-rating-bar-number">{n}</span>}
          {(type === 'star' || type === 'heart') && (
            <>
              <i className={`ri-${type}-line premui-rating-bar-icon-line`} aria-hidden="true" />
              <i className={`ri-${type}-fill premui-rating-bar-icon-fill`} aria-hidden="true" />
            </>
          )}
        </button>
      );
    })}
  </div>
);
