import React from 'react';
import './widgets.css';
import { CreditCard } from './CreditCard';
import type { CreditCardVariant } from './CreditCard';
import { TransactionItem, TxnBrand } from './TransactionItem';
import { KeyIcon } from '../KeyIcon/KeyIcon';

export interface CardDetailsTabProps {
  variant?: CreditCardVariant;
  onSeeAll?: () => void;
  className?: string;
}

const DETAILS = [
  { label: 'Card Number', value: '•••• 1234' },
  { label: 'Expiry Date', value: '06/27' },
  { label: 'CVC', value: '•••' },
  { label: 'Spending Limit', value: '$12,000.00' },
];

const TXNS = [
  { key: 'netflix', leading: <TxnBrand name="Netflix" />, title: 'Netflix Cashback', description: 'Cashback of September, 2023', amount: '$36.24', date: 'Sep 18' },
  { key: 'rental', leading: <KeyIcon icon="home-5-fill" color="green" style="lighter" size="md" />, title: 'Rental Income', description: 'Rental payment from Mr. Du...', amount: '$800.00', date: 'Sep 17' },
  { key: 'grocery', leading: <KeyIcon icon="shopping-cart-2-line" color="gray" style="stroke" size="md" />, title: 'Grocery Shopping', description: 'Purchase of monthly groceri...', amount: '-$84.14', date: 'Sep 16' },
];

/**
 * Card Details Tab [My Cards] — a card face + card details + quick actions +
 * recent transactions, for the Virtual and Physical card variants. Ported from
 * Figma node 3931:6350.
 */
export const CardDetailsTab = ({ variant = 'virtual', onSeeAll, className = '' }: CardDetailsTabProps) => (
  <div className={`premui-w-cardtab ${className}`}>
    <CreditCard variant={variant} />
    <div className="premui-w-carddetails">
      {DETAILS.map((d) => (
        <div className="premui-w-kv-line" key={d.label}><span>{d.label}</span><b>{d.value}</b></div>
      ))}
    </div>
    <div className="premui-w-card-actions">
      <button className="premui-w-widget-pill" type="button">Unhide</button>
      <button className="premui-w-widget-pill" type="button">Adjust Limit</button>
      <button className="premui-w-widget-pill" type="button">More</button>
    </div>
    <div className="premui-w-sep-inline" />
    <span className="premui-w-label-sm" style={{ marginBottom: 'var(--spacing-8)', display: 'block' }}>Recent Transactions</span>
    <div className="premui-w-txn-list">
      {TXNS.map((t) => (
        <TransactionItem key={t.key} leading={t.leading} title={t.title} description={t.description} amount={t.amount} date={t.date} />
      ))}
    </div>
    <button className="premui-w-fullbtn premui-w-comment-btn" type="button" onClick={onSeeAll} style={{ marginTop: 'var(--spacing-16)' }}>
      <i className="ri-history-line" aria-hidden="true" />
      See All Transactions
    </button>
  </div>
);
