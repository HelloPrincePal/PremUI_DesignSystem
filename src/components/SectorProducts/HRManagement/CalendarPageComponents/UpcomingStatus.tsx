import React from 'react';
import './calendar-page.css';

export type UpcomingStatusType = 'later' | 'cancelled' | 'conflicted' | 'today';

export interface UpcomingStatusProps {
  status?: UpcomingStatusType;
  /** Left label — defaults per status. */
  label?: string;
  /** Right-side date (later / cancelled). */
  date?: string;
  /** Right-side link label (today / conflicted). */
  link?: string;
  onLink?: () => void;
  className?: string;
}

const DEFAULTS: Record<UpcomingStatusType, { icon: string; label: string; strong: boolean }> = {
  later: { icon: 'time-line', label: '3 days later', strong: false },
  cancelled: { icon: 'time-line', label: 'Cancelled', strong: true },
  conflicted: { icon: 'spam-2-line', label: '2 Conflicted', strong: true },
  today: { icon: 'time-line', label: 'Today', strong: true },
};

/**
 * Upcoming Status [Calendar Page] — a status pill in Later / Cancelled /
 * Conflicted / Today variants. Ported from Figma node 3873:40841.
 */
export const UpcomingStatus = ({ status = 'later', label, date, link, onLink, className = '' }: UpcomingStatusProps) => {
  const d = DEFAULTS[status];
  const showDate = (status === 'later' || status === 'cancelled');
  const showLink = (status === 'today' || status === 'conflicted');
  const resolvedDate = date ?? 'Feb 20, 2023';
  const resolvedLink = link ?? (status === 'today' ? 'Join Meeting' : 'See Conflict');

  return (
    <div className={`premui-cal-status ${className}`} data-status={status}>
      <i className={`ri-${d.icon} premui-cal-status-icon`} aria-hidden="true" />
      <span className="premui-cal-status-label" data-strong={d.strong || undefined}>{label ?? d.label}</span>
      {showDate && <span className="premui-cal-status-date">{resolvedDate}</span>}
      {showLink && <a className="premui-cal-status-link" onClick={onLink}>{resolvedLink}</a>}
    </div>
  );
};
