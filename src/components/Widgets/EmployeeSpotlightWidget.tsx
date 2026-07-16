import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { EmployeeSpotlightTabs } from './EmployeeSpotlightTabs';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface EmployeeSpotlightWidgetProps {
  empty?: boolean;
  onShare?: () => void;
  className?: string;
}

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'comments', label: 'Comments' },
  { value: 'rewards', label: 'Rewards' },
];

export const EmployeeSpotlightWidget = ({ empty = false, onShare, className = '' }: EmployeeSpotlightWidgetProps) => (
  <WidgetCard
    icon="star-line"
    title="Employee Spotlight"
    action={<WidgetHeaderButton icon="share-forward-line" onClick={onShare}>Share</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <>
        <SegmentedControl items={TABS} value="overview" style={{ marginBottom: 'var(--spacing-16)' }} />
        <div className="premui-widget-empty">
          <EmptyState set="hr" type="Employee Spotlight Overview" size={112} />
          <div className="premui-widget-empty-caption">
            No records of employee spotlight yet.
            <br />
            Please check back later.
          </div>
        </div>
      </>
    ) : (
      <EmployeeSpotlightTabs />
    )}
  </WidgetCard>
);
