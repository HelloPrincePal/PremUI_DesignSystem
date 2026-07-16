import React, { useState } from 'react';
import './widgets.css';
import { ScheduleCard } from './ScheduleCard';
import type { ScheduleCardProps } from './ScheduleCard';
import { EmptyState } from '../EmptyStates/EmptyState';
import { WidgetHeaderButton } from './WidgetCard';

export type ScheduleTab = 'meetings' | 'events' | 'holiday';

export interface ScheduleDetailTabsProps {
  tab?: ScheduleTab;
  defaultTab?: ScheduleTab;
  onTabChange?: (tab: ScheduleTab) => void;
  empty?: boolean;
  className?: string;
}

const TABS: { key: ScheduleTab; label: string; icon: string }[] = [
  { key: 'meetings', label: 'Meetings', icon: 'chat-3-line' },
  { key: 'events', label: 'Events', icon: 'calendar-event-line' },
  { key: 'holiday', label: 'Holiday', icon: 'archive-line' },
];

const CARDS: Record<ScheduleTab, ScheduleCardProps[]> = {
  meetings: [
    { type: 'meetings', title: 'Meeting with James Brown', meta: '8:00 - 8:45 AM (UTC)', on: 'On Google Meet', tag: { label: 'Marketing', color: 'orange' }, extraCount: '+4' },
    { type: 'meetings', title: 'Meeting with Laura Perez', meta: '9:00 - 9:45 AM (UTC)', on: 'On Zoom', tag: { label: 'Product Manager', color: 'blue' }, extraCount: '+2' },
    { type: 'meetings', title: 'Meeting with Arthur Taylor', meta: '10:00 - 11:00 AM (UTC)', on: 'On Slack', tag: { label: 'Partnership', color: 'purple' }, extraCount: '+2' },
  ],
  events: [
    { type: 'events', title: 'Tesla 4th year Celebration Party', meta: '7:00 - 11:00 PM (UTC)', location: '341 Windy Ridge Road, LA', pinColor: 'var(--color-state-error-base)', by: 'by Sofia Williams', going: '16/25' },
    { type: 'events', title: 'Designing Camp for AlignUI', meta: '9:00 AM - 10:00 PM (UTC)', location: '928 Bagwell Avenue, FL', pinColor: 'var(--color-state-information-base)', by: 'by Matthew Johnson', going: '12/15' },
    { type: 'events', title: 'AlignUI Launch Party', meta: '8:00 - 12:00 PM (UTC)', location: '148 Harley Brook Lane, VA', pinColor: 'var(--color-state-success-base)', by: 'by Emma Wright', going: '18/25' },
  ],
  holiday: [
    { type: 'holiday', title: 'Christmas Holiday', meta: 'DEC 25 - DEC 27', breakBadge: { label: '2-days break', color: 'purple' }, emoji: '🎄', greeting: 'Happy Christmas!', holidayType: 'Religious Holiday' },
    { type: 'holiday', title: "Woman's Day", meta: 'MAR 08', breakBadge: { label: '1-days break', color: 'pink' }, emoji: '🌸', greeting: "Happy Women's Day!", holidayType: 'International Holiday' },
    { type: 'holiday', title: "Workers' Day", meta: 'MAY 01', breakBadge: { label: '1-days break', color: 'orange' }, emoji: '🧑‍💻', greeting: "Happy Workers' Day!", holidayType: 'International Holiday' },
  ],
};

const EMPTY_META: Record<ScheduleTab, { type: string; noun: string }> = {
  meetings: { type: 'Schedule Meetings', noun: 'meetings' },
  events: { type: 'Schedule Events', noun: 'events' },
  holiday: { type: 'Schedule Holiday', noun: 'holidays' },
};

/**
 * Schedule Detail Tabs [Schedule - Menu] — the tabbed list of schedule cards
 * (Meetings / Events / Holiday) with a per-tab empty state. Ported from Figma
 * node 3710:12493. Used as the body of the Schedule widget.
 */
export const ScheduleDetailTabs = ({
  tab,
  defaultTab = 'meetings',
  onTabChange,
  empty = false,
  className = '',
}: ScheduleDetailTabsProps) => {
  const [internal, setInternal] = useState<ScheduleTab>(defaultTab);
  const active = tab ?? internal;

  const select = (key: ScheduleTab) => {
    if (tab === undefined) setInternal(key);
    onTabChange?.(key);
  };

  const meta = EMPTY_META[active];

  return (
    <div className={`premui-w-detail-tabs ${className}`}>
      <div className="premui-w-tabs">
        {TABS.map((t) => (
          <button key={t.key} className="premui-w-tab" data-active={t.key === active || undefined} onClick={() => select(t.key)}>
            <i className={`ri-${t.icon}`} aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>

      {empty ? (
        <div className="premui-widget-empty">
          <EmptyState set="hr" type={meta.type} size={112} />
          <div className="premui-widget-empty-caption">
            No records of {meta.noun} yet.
            <br />
            Please check back later.
          </div>
          <WidgetHeaderButton icon="add-line">Request</WidgetHeaderButton>
        </div>
      ) : (
        <div className="premui-w-detail-list">
          {CARDS[active].map((card, i) => (
            <ScheduleCard key={i} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};
