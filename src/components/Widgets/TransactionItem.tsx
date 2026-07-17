import React from 'react';
import './widgets.css';
import { BrandLogo } from './WidgetCard';

export interface TransactionItemProps {
  /** 40px leading element — a PaymentIcon, Avatar, TxnBrand, or KeyIcon. */
  leading?: React.ReactNode;
  title: string;
  description?: string;
  amount: string;
  date: string;
  /** Show the trailing chevron. */
  showChevron?: boolean;
  /** Force the hover background for design QA. */
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Transaction Items [Recent Transactions] — a single transaction row (leading +
 * title/description + amount/date + optional chevron), with a hover background.
 * Ported from Figma node 3167:153. Leading supports the four Figma types via the
 * `leading` slot (Payment Icon / Avatar / Brand / Editable Icon).
 */
export const TransactionItem = ({
  leading,
  title,
  description,
  amount,
  date,
  showChevron = true,
  hover = false,
  onClick,
  className = '',
}: TransactionItemProps) => (
  <div className={`premui-w-txn-item ${hover ? 'is-hover' : ''} ${className}`} onClick={onClick}>
    {leading}
    <div className="premui-w-row-main">
      <span className="premui-w-row-title">{title}</span>
      {description && <span className="premui-w-row-sub">{description}</span>}
    </div>
    <div className="premui-w-txn-right">
      <span className="premui-w-txn-amt">{amount}</span>
      <span className="premui-w-txn-date">{date}</span>
    </div>
    {showChevron && <i className="ri-arrow-right-s-line premui-w-row-chevron" aria-hidden="true" />}
  </div>
);

/** Brand leading — a white bordered circle wrapping a brand logo. */
export const TxnBrand = ({ name }: { name: string }) => (
  <span className="premui-w-txn-brand"><BrandLogo name={name} size={24} /></span>
);
