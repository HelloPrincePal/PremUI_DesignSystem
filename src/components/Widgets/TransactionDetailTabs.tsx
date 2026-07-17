import React, { useState } from 'react';
import './widgets.css';
import { TransactionItem, TxnBrand } from './TransactionItem';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { PaymentIcon } from '../PaymentIcon/PaymentIcon';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

export type TransactionTab = 'incoming' | 'outgoing' | 'pending';

export interface TransactionDetailTabsProps {
  tab?: TransactionTab;
  defaultTab?: TransactionTab;
  onTabChange?: (tab: TransactionTab) => void;
  className?: string;
}

const TABS = [
  { value: 'incoming', label: 'Incoming' },
  { value: 'outgoing', label: 'Outgoing' },
  { value: 'pending', label: 'Pending' },
];

interface Row {
  key: string;
  leading: React.ReactNode;
  title: string;
  description: string;
  amount: string;
  date: string;
}

const editable = (icon: string) => <KeyIcon icon={icon} color="gray" style="stroke" size="md" />;

const DATA: Record<TransactionTab, Row[]> = {
  incoming: [
    { key: 'salary', leading: editable('bank-line'), title: 'Salary Deposit', description: 'Monthly salary from Apex...', amount: '$3,500.00', date: 'Sep 18' },
    { key: 'dividend', leading: editable('line-chart-line'), title: 'Stock Dividend', description: 'Payment from stock investm...', amount: '$846.14', date: 'Sep 18' },
    { key: 'rental', leading: <KeyIcon icon="home-5-fill" color="green" style="lighter" size="md" />, title: 'Rental Income', description: 'Rental payment from Mr. Du...', amount: '$100.00', date: 'Sep 17' },
    { key: 'amazon', leading: <TxnBrand name="Amazon Pay" />, title: 'Refund from Amazon', description: 'Refund of Order No #124235', amount: '$36.24', date: 'Sep 15' },
  ],
  outgoing: [
    { key: 'painting', leading: <TxnBrand name="Shopify" />, title: 'Baroque Painting', description: 'Order No #234122', amount: '-$124.00', date: 'Sep 18' },
    { key: 'mc', leading: <TxnBrand name="Mastercard" />, title: 'Mastercard Payment', description: 'Monthly Credit Card Paym...', amount: '-$963.62', date: 'Sep 15' },
    { key: 'car', leading: editable('tools-line'), title: 'Car Repairing Expenses', description: 'RepairMyCar Co.', amount: '-$640.00', date: 'Sep 08' },
    { key: 'grocery', leading: <KeyIcon icon="shopping-cart-2-line" color="blue" style="stroke" size="md" />, title: 'Grocery Shopping', description: 'Walmart Canada', amount: '-$146.31', date: 'Sep 04' },
  ],
  pending: [
    { key: 'electricity', leading: <PaymentIcon type="electricity" />, title: 'Electricity Bill', description: '3 days later', amount: '-$86.00', date: 'Sep 21' },
    { key: 'internet', leading: <PaymentIcon type="internet" />, title: 'Internet Service', description: '4 days later', amount: '-$46.00', date: 'Sep 22' },
    { key: 'spotify', leading: <TxnBrand name="Spotify" />, title: 'Spotify Premium', description: '5 days later', amount: '-$19.99', date: 'Sep 23' },
    { key: 'youtube', leading: <TxnBrand name="Youtube Music" />, title: 'YouTube Premium', description: '8 days later', amount: '-$14.99', date: 'Sep 24' },
  ],
};

/**
 * Transaction Detail Tabs [Recent Transactions] — the Incoming / Outgoing /
 * Pending tabbed transaction list. Ported from Figma node 3710:11511. Used as
 * the body of the Recent Transactions widget.
 */
export const TransactionDetailTabs = ({
  tab,
  defaultTab = 'incoming',
  onTabChange,
  className = '',
}: TransactionDetailTabsProps) => {
  const [internal, setInternal] = useState<TransactionTab>(defaultTab);
  const active = tab ?? internal;
  const select = (v: string) => {
    if (tab === undefined) setInternal(v as TransactionTab);
    onTabChange?.(v as TransactionTab);
  };
  return (
    <div className={`premui-w-txn-tabs ${className}`}>
      <SegmentedControl items={TABS} value={active} onChange={select} style={{ marginBottom: 'var(--spacing-12)' }} />
      <div className="premui-w-txn-list">
        {DATA[active].map((r) => (
          <TransactionItem key={r.key} leading={r.leading} title={r.title} description={r.description} amount={r.amount} date={r.date} />
        ))}
      </div>
    </div>
  );
};
