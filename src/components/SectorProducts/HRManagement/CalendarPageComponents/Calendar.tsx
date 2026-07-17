import React from 'react';
import './calendar-page.css';
import { CalendarCard } from './CalendarCard';
import type { CalendarCardProps } from './CalendarCard';

interface CalEvent {
  day: number;
  start: number; // decimal hour, e.g. 9.5
  end: number;
  card: CalendarCardProps;
}

export interface CalendarDay {
  label: string;
  disabled?: boolean;
}

export interface CalendarProps {
  days?: CalendarDay[];
  /** Hour labels (integers, 24h). */
  hours?: number[];
  hourHeight?: number;
  className?: string;
}

const DEFAULT_DAYS: CalendarDay[] = [
  { label: '04 Mon' },
  { label: '05 Tue' },
  { label: '06 Wed' },
  { label: '07 Thu' },
  { label: '08 Fri', disabled: true },
];

const DEFAULT_HOURS = [9, 10, 11, 12, 13];

const fmtHour = (h: number) => {
  const period = h >= 12 ? 'PM' : 'AM';
  const hr = h > 12 ? h - 12 : h;
  return `${hr} ${period}`;
};

const EVENTS: CalEvent[] = [
  // Monday
  { day: 0, start: 9, end: 9.5, card: { type: 'meeting', size: 'half', completed: true, title: 'Brainstorming Session', time: '9:00 - 9:30 AM' } },
  { day: 0, start: 9.5, end: 10, card: { type: 'meeting', size: 'half', completed: true, title: 'Bi-Weekly Marketing Team Me...', time: '9:30 - 10:00 AM' } },
  { day: 0, start: 11.5, end: 13, card: { type: 'event', size: 'large', title: 'Workshop: "Mastering Design Thinking"', time: '11:30 AM - 1:00 PM', venue: 'Venue: XYZ Conference C...' } },
  // Tuesday
  { day: 1, start: 9, end: 9.5, card: { type: 'meeting', size: 'half', title: 'Project Review Meeting', time: '9:00 - 9:30 AM' } },
  { day: 1, start: 10, end: 11.5, card: { type: 'meeting', size: 'large', title: 'Sales Team Training Session - Improving Sales Techniques', time: '10:00 - 11:30 AM', extraCount: '+7', platform: 'on Zoom' } },
  { day: 1, start: 12, end: 12.5, card: { type: 'meeting', size: 'half', title: 'Quarterly Financial Review - A...', time: '12:00 - 12:30 PM' } },
  { day: 1, start: 12.5, end: 13, card: { type: 'meeting', size: 'regular', title: 'Sales Performance Review', time: '12:30 - 1:00 PM', extraCount: '+4', platform: 'on Slack' } },
  // Wednesday
  { day: 2, start: 9.5, end: 10, card: { type: 'meeting', size: 'half', title: 'Marketing Strategy Discussion', time: '9:30 - 10:00 AM' } },
  { day: 2, start: 11, end: 11.5, card: { type: 'meeting', size: 'half', title: 'Strategy Planning for Compan...', time: '11:00 - 11:30 AM' } },
  { day: 2, start: 11.5, end: 13, card: { type: 'meeting', size: 'large', title: 'New Feature Implementation and Roadmap Discussion', time: '11:30 AM - 1:00 PM', extraCount: '+4', platform: 'on Zoom' } },
  // Thursday
  { day: 3, start: 9, end: 10, card: { type: 'meeting', size: 'regular', title: 'Customer Feedback Analysis', time: '9:00 - 10:00 AM', extraCount: '+4', platform: 'on Meet' } },
  { day: 3, start: 11.5, end: 13, card: { type: 'event', size: 'large', title: 'Webinar: "Digital Marketing Trends for 2023"', time: '11:30 AM - 1:00 PM', venue: 'www.examplewebinar.com', venueIcon: 'global-line' } },
];

/**
 * Calendar [Calendar Page] — a weekly time-grid with day columns, hour rows,
 * and positioned event cards (Meetings / Events), plus a disabled (hatched)
 * day column. Ported from Figma node 3878:61401.
 */
export const Calendar = ({
  days = DEFAULT_DAYS,
  hours = DEFAULT_HOURS,
  hourHeight = 120,
  className = '',
}: CalendarProps) => {
  const firstHour = hours[0];
  const gridStyle = {
    ['--cal-days' as string]: String(days.length),
    ['--cal-hour' as string]: `${hourHeight}px`,
  } as React.CSSProperties;

  return (
    <div className={`premui-cal ${className}`} style={gridStyle}>
      <div className="premui-cal-header">
        <div className="premui-cal-nav">
          <button type="button" aria-label="Previous week"><i className="ri-arrow-left-s-line" aria-hidden="true" /></button>
          <button type="button" aria-label="Next week"><i className="ri-arrow-right-s-line" aria-hidden="true" /></button>
        </div>
        {days.map((d) => (
          <div className="premui-cal-day-head" key={d.label}>{d.label}</div>
        ))}
      </div>
      <div className="premui-cal-body">
        <div className="premui-cal-gutter">
          {hours.map((h) => (
            <div className="premui-cal-hour" key={h}>
              <span className="premui-cal-hour-label">{fmtHour(h)}</span>
            </div>
          ))}
        </div>
        {days.map((d, di) => (
          <div className="premui-cal-daycol" key={d.label} data-disabled={d.disabled || undefined}>
            {hours.map((h) => <div className="premui-cal-hourline" key={h} />)}
            {!d.disabled &&
              EVENTS.filter((e) => e.day === di).map((e, i) => (
                <div
                  className="premui-cal-event"
                  key={i}
                  style={{ top: (e.start - firstHour) * hourHeight + 2, height: (e.end - e.start) * hourHeight - 6 }}
                >
                  <CalendarCard {...e.card} fill />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
