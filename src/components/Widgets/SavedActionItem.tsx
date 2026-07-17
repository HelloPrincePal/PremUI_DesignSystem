import React from 'react';
import './widgets.css';

export interface SavedActionItemProps {
  /** 40px leading — a PaymentIcon, Avatar, or KeyIcon. */
  leading?: React.ReactNode;
  title: string;
  subtitle?: string;
  amount: string;
  showChevron?: boolean;
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Saved Actions Items [Saved Actions] — a saved-action row (leading + title/
 * subtitle + amount pill + chevron), with a hover background. Ported from Figma
 * node 3946:4047 (Payment / Avatar leading types).
 */
export const SavedActionItem = ({
  leading,
  title,
  subtitle,
  amount,
  showChevron = true,
  hover = false,
  onClick,
  className = '',
}: SavedActionItemProps) => (
  <div className={`premui-w-txn-item ${hover ? 'is-hover' : ''} ${className}`} onClick={onClick}>
    {leading}
    <div className="premui-w-row-main">
      <span className="premui-w-row-title">{title}</span>
      {subtitle && <span className="premui-w-row-sub">{subtitle}</span>}
    </div>
    <span className="premui-w-amt-pill">{amount}</span>
    {showChevron && <i className="ri-arrow-right-s-line premui-w-row-chevron" aria-hidden="true" />}
  </div>
);
