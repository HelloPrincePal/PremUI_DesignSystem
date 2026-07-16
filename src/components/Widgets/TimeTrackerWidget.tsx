import React from 'react';
import { WidgetCard, WidgetHeaderButton, BrandLogo } from './WidgetCard';
import { TimeTrackerDropdown } from './TimeTrackerDropdown';
import { Timer } from './Timer';
import { EmptyState } from '../EmptyStates/EmptyState';

interface PreviousTask {
  brand: string;
  name: string;
  time: string;
}

export interface TimeTrackerWidgetProps {
  empty?: boolean;
  onHistory?: () => void;
  onStart?: () => void;
  className?: string;
}

const PREVIOUS: PreviousTask[] = [
  { brand: 'Loom', name: 'Loom Rebranding', time: '1:23:05' },
  { brand: 'Evernote', name: 'Evernote App', time: '3:14:26' },
];

export const TimeTrackerWidget = ({ empty = false, onHistory, onStart, className = '' }: TimeTrackerWidgetProps) => (
  <WidgetCard
    icon="flashlight-line"
    title="Time Tracker"
    action={<WidgetHeaderButton icon="history-line" onClick={onHistory}>History</WidgetHeaderButton>}
    className={className}
  >
    <TimeTrackerDropdown />

    <Timer type="default" onStart={onStart} />

    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="hr" type="Time Tracker" size={96} />
        <div className="premui-widget-empty-caption">No records of tracked time yet.</div>
      </div>
    ) : (
      <>
        <div className="premui-w-sep-inline" />
        <span className="premui-w-label-sm" style={{ marginBottom: 'var(--spacing-8)' }}>
          Previous Tasks
        </span>
        {PREVIOUS.map((t) => (
          <div className="premui-w-row" key={t.name}>
            <BrandLogo name={t.brand} size={28} />
            <div className="premui-w-row-main">
              <span className="premui-w-row-title">{t.name}</span>
              <span className="premui-w-row-sub">{t.time}</span>
            </div>
            <i className="ri-more-2-fill premui-w-row-trail" style={{ color: 'var(--color-icon-soft)', fontSize: 18 }} aria-hidden="true" />
          </div>
        ))}
      </>
    )}
  </WidgetCard>
);
