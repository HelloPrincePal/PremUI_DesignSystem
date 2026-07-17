import React from 'react';
import './widgets.css';
import { BrandLogo } from './WidgetCard';
import { CardChip } from './CardChip';
import { PlaceholderBrand } from '../../assets/Placeholder/PlaceholderBrand';

export type CreditCardVariant = 'virtual' | 'physical';

export interface CreditCardProps {
  variant?: CreditCardVariant;
  /** Virtual: balance label (e.g. "Savings Card"). Physical: "Cardholder Name". */
  label?: string;
  /** Virtual: balance (e.g. "$16,058.94"). Physical: holder name. */
  value?: string;
  active?: boolean;
  showNav?: boolean;
  className?: string;
}

/**
 * Credit Cards [My Cards] — the Virtual (light) and Physical (dark) card faces.
 * Ported from Figma node 3027:8986.
 */
export const CreditCard = ({
  variant = 'virtual',
  label,
  value,
  active = true,
  showNav = true,
  className = '',
}: CreditCardProps) => {
  const physical = variant === 'physical';
  return (
    <div className={`premui-w-cc ${className}`} data-variant={variant}>
      <span className="premui-w-cc-deco" aria-hidden="true" />
      <div className="premui-w-cc-top">
        {physical ? (
          <CardChip color="orange" width={32} />
        ) : (
          <PlaceholderBrand company="Apex" size={32} />
        )}
        <i className="ri-rss-line premui-w-cc-nfc" aria-hidden="true" />
        {!physical && active && (
          <span className="premui-w-cc-active">
            <i className="ri-checkbox-circle-fill" aria-hidden="true" />Active
          </span>
        )}
        <span className="premui-w-cc-mc"><BrandLogo name="Mastercard" size={32} /></span>
      </div>
      <div className="premui-w-cc-bottom">
        <span className="premui-w-cc-label">{label ?? (physical ? 'Cardholder Name' : 'Savings Card')}</span>
        <span className="premui-w-cc-value">{value ?? (physical ? 'Arthur Taylor' : '$16,058.94')}</span>
      </div>
      {!physical && showNav && (
        <span className="premui-w-cc-nav">
          <button type="button" aria-label="Previous card"><i className="ri-arrow-left-s-line" aria-hidden="true" /></button>
          <button type="button" aria-label="Next card"><i className="ri-arrow-right-s-line" aria-hidden="true" /></button>
        </span>
      )}
    </div>
  );
};
