import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { DonationDetailsTab } from './DonationDetailsTab';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface DonationProfileWidgetProps {
  empty?: boolean;
  onDonate?: () => void;
  className?: string;
}

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'goal', label: 'Goal' },
  { value: 'statistic', label: 'Statistic' },
];

export const DonationProfileWidget = ({ empty = false, onDonate, className = '' }: DonationProfileWidgetProps) => (
  <WidgetCard
    icon="hand-heart-line"
    title="Donation Profile"
    action={<WidgetHeaderButton icon="add-line" onClick={onDonate}>Donate</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <>
        <SegmentedControl items={TABS} value="overview" style={{ marginBottom: 'var(--spacing-16)' }} />
        <div className="premui-widget-empty">
          <EmptyState set="finance" type="Donation Profile" size={112} />
          <div className="premui-widget-empty-caption">No records of donations yet. Feel free to donate.</div>
          <WidgetHeaderButton icon="add-line" onClick={onDonate}>Donate</WidgetHeaderButton>
        </div>
      </>
    ) : (
      <DonationDetailsTab />
    )}
  </WidgetCard>
);
