import React, { useState } from 'react';
import './widgets.css';
import { ScheduleDate } from './ScheduleDate';

export interface DaySelectionItem {
  day: string;
  date: string;
}

export interface DaySelectionProps {
  days?: DaySelectionItem[];
  /** Controlled selected date (matches item.date). */
  value?: string;
  defaultValue?: string;
  onChange?: (date: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

const DEFAULT_DAYS: DaySelectionItem[] = [
  { day: 'Fri', date: '31' },
  { day: 'Sat', date: '01' },
  { day: 'Sun', date: '02' },
  { day: 'Mon', date: '03' },
  { day: 'Tue', date: '04' },
];

/**
 * Day Selection [Schedule] — the horizontal day strip with prev/next arrows and
 * a selected day. Ported from Figma node 3520:2567.
 */
export const DaySelection = ({
  days = DEFAULT_DAYS,
  value,
  defaultValue = '02',
  onChange,
  onPrev,
  onNext,
  className = '',
}: DaySelectionProps) => {
  const [internal, setInternal] = useState(defaultValue);
  const active = value ?? internal;

  const select = (date: string) => {
    if (value === undefined) setInternal(date);
    onChange?.(date);
  };

  return (
    <div className={`premui-w-days ${className}`}>
      <button className="premui-w-nav-btn" aria-label="Previous days" onClick={onPrev}>
        <i className="ri-arrow-left-s-line" aria-hidden="true" />
      </button>
      {days.map((d) => (
        <ScheduleDate key={d.date} day={d.day} date={d.date} selected={d.date === active} onClick={() => select(d.date)} />
      ))}
      <button className="premui-w-nav-btn" aria-label="Next days" onClick={onNext}>
        <i className="ri-arrow-right-s-line" aria-hidden="true" />
      </button>
    </div>
  );
};
