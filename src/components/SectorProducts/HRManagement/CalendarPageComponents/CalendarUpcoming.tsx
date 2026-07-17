import React from 'react';
import './calendar-page.css';
import { UpcomingStatus } from './UpcomingStatus';
import type { UpcomingStatusProps } from './UpcomingStatus';

export interface CalendarUpcomingProps {
  title?: string;
  description?: string;
  status?: UpcomingStatusProps;
  onExpand?: () => void;
  className?: string;
}

/**
 * Calendar Upcoming [Calendar Page] — an upcoming-event summary card: title +
 * time/description, an expand chevron, and an UpcomingStatus pill. Ported from
 * Figma node 3875:40906.
 */
export const CalendarUpcoming = ({
  title = 'Insert title here',
  description = 'Insert time or description here',
  status = { status: 'later' },
  onExpand,
  className = '',
}: CalendarUpcomingProps) => (
  <div className={`premui-cal-upcoming ${className}`}>
    <div className="premui-cal-upcoming-head">
      <div className="premui-cal-upcoming-text">
        <span className="premui-cal-upcoming-title">{title}</span>
        <span className="premui-cal-upcoming-desc">{description}</span>
      </div>
      <button className="premui-cal-upcoming-expand" type="button" aria-label="Expand" onClick={onExpand}>
        <i className="ri-arrow-down-s-line" aria-hidden="true" />
      </button>
    </div>
    <UpcomingStatus {...status} className="premui-cal-upcoming-status" />
  </div>
);
