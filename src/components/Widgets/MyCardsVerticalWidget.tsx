import React, { useState } from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { CardDetailsTab } from './CardDetailsTab';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface MyCardsVerticalWidgetProps {
  empty?: boolean;
  onAddCard?: () => void;
  className?: string;
}

const TABS = [
  { value: 'virtual', label: 'Virtual (2)' },
  { value: 'physical', label: 'Physical' },
];

export const MyCardsVerticalWidget = ({ empty = false, onAddCard, className = '' }: MyCardsVerticalWidgetProps) => {
  const [tab, setTab] = useState<'virtual' | 'physical'>('virtual');
  return (
    <WidgetCard
      icon="bank-card-line"
      title="My Cards"
      action={<WidgetHeaderButton icon="add-line" onClick={onAddCard}>Add Card</WidgetHeaderButton>}
      className={className}
    >
      <SegmentedControl items={TABS} value={tab} onChange={(v) => setTab(v as 'virtual' | 'physical')} style={{ marginBottom: 'var(--spacing-16)' }} />
      {empty ? (
        <div className="premui-widget-empty">
          <EmptyState set="finance" type="My Cards" size={112} />
          <div className="premui-widget-empty-caption">You do not have any cards yet. Click the button to add one.</div>
          <WidgetHeaderButton icon="add-line" onClick={onAddCard}>Add Card</WidgetHeaderButton>
        </div>
      ) : (
        <CardDetailsTab variant={tab} />
      )}
    </WidgetCard>
  );
};
