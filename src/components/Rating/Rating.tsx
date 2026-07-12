import React from 'react';
import './rating.css';
import { RatingIcon } from './RatingIcon';
import type { RatingIconType } from './RatingIcon';
import { LinkButton } from '../LinkButton/LinkButton';

export type RatingAlignment = 'only' | 'vertical' | 'horizontal';

export interface RatingProps {
  /** 0–5, supports halves (e.g. 4.5) */
  value?: number;
  type?: RatingIconType;
  alignment?: RatingAlignment;
  /** Only rendered at alignment="vertical" or "horizontal" */
  showDescription?: boolean;
  text?: string;
  reviewsLabel?: string;
  onReviewsClick?: () => void;
  size?: number;
  className?: string;
}

export const Rating = ({
  value = 4.5,
  type = 'star',
  alignment = 'only',
  showDescription = true,
  text = '4.5 ∙ 5.2K Ratings',
  reviewsLabel = '18 reviews',
  onReviewsClick,
  size = 20,
  className = '',
}: RatingProps) => {
  const clamped = Math.min(5, Math.max(0, value));
  const fullCount = Math.floor(clamped);
  const hasHalf = clamped - fullCount >= 0.5;
  const emptyCount = 5 - fullCount - (hasHalf ? 1 : 0);

  const icons = [
    ...Array.from({ length: fullCount }, (_, i) => <RatingIcon key={`f${i}`} type={type} state="full" size={size} />),
    ...(hasHalf ? [<RatingIcon key="half" type={type} state="half" size={size} />] : []),
    ...Array.from({ length: emptyCount }, (_, i) => <RatingIcon key={`e${i}`} type={type} state="empty" size={size} />),
  ];

  return (
    <div className={`premui-rating ${className}`} data-alignment={alignment}>
      <div className="premui-rating-icons">{icons}</div>
      {alignment !== 'only' && showDescription && (
        <div className="premui-rating-description">
          <span className="premui-rating-text">{text}</span>
          <LinkButton style="gray" size="sm" underline onClick={onReviewsClick}>
            {reviewsLabel}
          </LinkButton>
        </div>
      )}
    </div>
  );
};
