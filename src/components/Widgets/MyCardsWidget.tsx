import React, { useState } from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { CreditCard } from './CreditCard';
import { CircularProgressBar } from '../ProgressBar/CircularProgressBar';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface MyCardsWidgetProps {
  empty?: boolean;
  onAddCard?: () => void;
  className?: string;
}

const TABS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

export const MyCardsWidget = ({ empty = false, onAddCard, className = '' }: MyCardsWidgetProps) => {
  const [tab, setTab] = useState('weekly');
  return (
    <WidgetCard
      icon="bank-card-line"
      title="My Cards"
      action={<WidgetHeaderButton icon="add-line" onClick={onAddCard}>Add Card</WidgetHeaderButton>}
      className={className}
    >
      {empty ? (
        <div className="premui-widget-empty">
          <EmptyState set="finance" type="My Cards" size={112} />
          <div className="premui-widget-empty-caption">You do not have any cards yet. Click the button to add one.</div>
          <WidgetHeaderButton icon="add-line" onClick={onAddCard}>Add Card</WidgetHeaderButton>
        </div>
      ) : (
        <>
          <CreditCard variant="virtual" />
          <SegmentedControl items={TABS} value={tab} onChange={setTab} style={{ margin: 'var(--spacing-16) 0' }} />
          <div className="premui-w-limit-row">
            <CircularProgressBar percentage={75} size={48} showLabel={false} strokeWidth={5} />
            <div className="premui-w-limit-text">
              <span className="premui-w-limit-label">Spending Limit</span>
              <span className="premui-w-limit-value">$1,500.00 <span className="premui-w-limit-per">/ week</span></span>
            </div>
            <button className="premui-w-nav-btn" type="button" aria-label="Details"><i className="ri-arrow-right-s-line" aria-hidden="true" /></button>
          </div>
        </>
      )}
    </WidgetCard>
  );
};
