import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { DaySelection } from './DaySelection';
import { ScheduleDetailTabs } from './ScheduleDetailTabs';

export interface ScheduleWidgetProps {
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

export const ScheduleWidget = ({ empty = false, onSeeAll, className = '' }: ScheduleWidgetProps) => (
  <WidgetCard
    icon="calendar-line"
    title="Schedule"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    <div className="premui-w-month">
      <button className="premui-w-nav-btn" aria-label="Previous month"><i className="ri-arrow-left-s-line" /></button>
      <span className="premui-w-month-label">January 2024</span>
      <button className="premui-w-nav-btn" aria-label="Next month"><i className="ri-arrow-right-s-line" /></button>
    </div>

    <DaySelection />

    <div className="premui-w-search">
      <i className="ri-search-2-line" aria-hidden="true" />
      <input type="text" placeholder="Search..." />
      <span className="premui-w-search-kbd">⌘1</span>
      <i className="ri-equalizer-line premui-w-search-filter" aria-hidden="true" />
    </div>

    <ScheduleDetailTabs empty={empty} />
  </WidgetCard>
);
