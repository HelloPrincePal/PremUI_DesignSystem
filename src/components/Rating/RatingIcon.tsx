import React from 'react';
import './rating.css';

export type RatingIconType = 'star' | 'heart';
export type RatingIconState = 'empty' | 'empty-filled' | 'half' | 'full';

export interface RatingIconProps {
  type?: RatingIconType;
  state?: RatingIconState;
  size?: number;
  className?: string;
}

export const RatingIcon = ({ type = 'star', state = 'empty', size = 20, className = '' }: RatingIconProps) => {
  if (state === 'half' && type === 'star') {
    return (
      <i
        className={`ri-star-half-fill premui-rating-icon ${className}`}
        style={{ fontSize: size, color: 'var(--color-state-away-base)' }}
        aria-hidden="true"
      />
    );
  }

  if (state === 'half' && type === 'heart') {
    return (
      <span className={`premui-rating-icon-half ${className}`} style={{ width: size, height: size, fontSize: size }}>
        <i className="ri-heart-line" style={{ color: 'var(--color-icon-soft)' }} aria-hidden="true" />
        <i
          className="ri-heart-fill premui-rating-icon-half-fill"
          style={{ color: 'var(--color-state-error-base)' }}
          aria-hidden="true"
        />
      </span>
    );
  }

  const filled = state === 'full' || state === 'empty-filled';
  const color =
    state === 'full' ? (type === 'star' ? 'var(--color-state-away-base)' : 'var(--color-state-error-base)') : 'var(--color-icon-soft)';

  return (
    <i
      className={`ri-${type}-${filled ? 'fill' : 'line'} premui-rating-icon ${className}`}
      style={{ fontSize: size, color }}
      aria-hidden="true"
    />
  );
};
