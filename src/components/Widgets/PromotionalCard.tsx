import React from 'react';
import './widgets.css';
import { BrandLogo } from './WidgetCard';

export interface PromotionalCardProps {
  /** Brand logo file name (from src/assets/Brand/Brand Logos/), e.g. "Apple Music". */
  brand: string;
  /** Headline — defaults to "50% discount on {brand}". */
  title?: string;
  description?: string;
  linkLabel?: string;
  onLink?: () => void;
  className?: string;
}

/**
 * Promotional Cards [My Subscriptions] — a brand promo banner with the brand
 * logo, a large clipped brand watermark, a headline, and a Learn More link.
 * Ported from Figma node 3946:16805 (9 brand variants).
 */
export const PromotionalCard = ({
  brand,
  title,
  description = 'For only $4.99 per month!',
  linkLabel = 'Learn More',
  onLink,
  className = '',
}: PromotionalCardProps) => (
  <div className={`premui-w-promocard ${className}`}>
    <span className="premui-w-promocard-wm" aria-hidden="true"><BrandLogo name={brand} size={150} /></span>
    <BrandLogo name={brand} size={32} className="premui-w-promocard-logo" />
    <div className="premui-w-promocard-text">
      <span className="premui-w-promocard-title">{title ?? `50% discount on ${brand}`}</span>
      <span className="premui-w-promocard-desc">
        {description}{' '}
        <a className="premui-w-promocard-link" onClick={onLink}>{linkLabel}</a>
      </span>
    </div>
  </div>
);
