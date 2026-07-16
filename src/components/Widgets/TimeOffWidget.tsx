import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { GaugeBar } from './GaugeBar';
import { Badge } from '../Badge/Badge';
import { EmptyState } from '../EmptyStates/EmptyState';

export type TimeOffStatus = 'pending' | 'confirmed' | 'rejected';

export interface TimeOffEntry {
  date: string;
  type?: string;
  status: TimeOffStatus;
}

export interface TimeOffWidgetProps {
  used?: number;
  total?: number;
  entries?: TimeOffEntry[];
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

const STATUS_META: Record<TimeOffStatus, { color: 'orange' | 'green' | 'red'; icon: string; label: string }> = {
  pending: { color: 'orange', icon: 'time-line', label: 'Pending' },
  confirmed: { color: 'green', icon: 'check-line', label: 'Confirmed' },
  rejected: { color: 'red', icon: 'close-line', label: 'Rejected' },
};

const DEFAULT_ENTRIES: TimeOffEntry[] = [
  { date: 'Jan 15, 2024', type: 'Casual', status: 'pending' },
  { date: 'Jan 15, 2024', type: 'Casual', status: 'confirmed' },
  { date: 'Feb 12, 2024', type: 'Casual', status: 'rejected' },
];

export const TimeOffWidget = ({
  used = 10,
  total = 20,
  entries = DEFAULT_ENTRIES,
  empty = false,
  onSeeAll,
  className = '',
}: TimeOffWidgetProps) => (
  <WidgetCard
    icon="time-line"
    title="Time Off"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    <GaugeBar value={empty ? 0 : used} max={total} muted={empty} className="premui-w-timeoff-gauge" />
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="hr" type="Time Off" size={96} />
        <div className="premui-widget-empty-caption">No records of tracked time yet.</div>
      </div>
    ) : (
      <div>
        {entries.map((entry, i) => {
          const meta = STATUS_META[entry.status];
          return (
            <div className="premui-w-row" key={i}>
              <span className="premui-w-dot-icon" data-color={meta.color}>
                <i className={`ri-${meta.icon}`} aria-hidden="true" />
              </span>
              <div className="premui-w-row-main">
                <span className="premui-w-row-title">
                  {entry.date} {entry.type && <span className="muted">({entry.type})</span>}
                </span>
              </div>
              <span className="premui-w-row-trail">
                <Badge color={meta.color} style="light" size="sm">
                  {meta.label}
                </Badge>
              </span>
            </div>
          );
        })}
      </div>
    )}
  </WidgetCard>
);
