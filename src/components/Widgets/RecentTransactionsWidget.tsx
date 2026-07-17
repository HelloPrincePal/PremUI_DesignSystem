import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { TransactionDetailTabs } from './TransactionDetailTabs';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface RecentTransactionsWidgetProps {
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

export const RecentTransactionsWidget = ({ empty = false, onSeeAll, className = '' }: RecentTransactionsWidgetProps) => (
  <WidgetCard
    icon="coins-line"
    title="Recent Transactions"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Recent Transactions" size={112} />
        <div className="premui-widget-empty-caption">No records of transactions yet. Please check back later.</div>
      </div>
    ) : (
      <TransactionDetailTabs />
    )}
  </WidgetCard>
);
