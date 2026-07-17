import React from 'react';
import './calendar-page.css';
import { AvatarGroup } from '../../../Avatars/AvatarGroup';
import type { AvatarProps } from '../../../Avatars/Avatar';

export type CalendarCardType = 'meeting' | 'event';
export type CalendarCardSize = 'half' | 'regular' | 'regular-extended' | 'large';

export interface CalendarCardProps {
  type?: CalendarCardType;
  size?: CalendarCardSize;
  completed?: boolean;
  title?: string;
  time?: string;
  /** Meeting: attendee avatars + platform. */
  attendees?: AvatarProps[];
  extraCount?: number | string;
  platform?: string;
  /** Event: venue / url. */
  venue?: string;
  venueIcon?: 'map-pin-fill' | 'global-line';
  /** Fill the parent height (used inside the Calendar grid). */
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_ATTENDEES: AvatarProps[] = [
  { persona: 'James Brown', type: 'Illustration' },
  { persona: 'Juma Omondi', type: 'Solid BG' },
  { persona: 'Lena Müller', type: 'Solid BG' },
];

/**
 * Calendar Card [Calendar Page] — a calendar event block. Meetings (blue) show
 * attendees + platform; Events (orange) show a venue. Sizes Half / Regular /
 * Regular Extended / Large, plus a muted Completed state. Ported from Figma
 * node 3877:58564.
 */
export const CalendarCard = ({
  type = 'meeting',
  size = 'regular',
  completed = false,
  title = 'Insert your title right here',
  time = '3:00 - 4:30 PM',
  attendees = DEFAULT_ATTENDEES,
  extraCount = '+4',
  platform = 'on Zoom',
  venue = '341 Windy Ridge Road...',
  venueIcon = 'map-pin-fill',
  fill = false,
  className = '',
  style,
}: CalendarCardProps) => {
  const showBottom = size !== 'half';
  return (
    <div
      className={`premui-cal-card ${fill ? 'is-fill' : ''} ${className}`}
      data-type={type}
      data-size={size}
      data-completed={completed || undefined}
      style={style}
    >
      <div className="premui-cal-card-head">
        <span className="premui-cal-card-title">{title}</span>
        <span className="premui-cal-card-time">{time}</span>
      </div>
      {showBottom && type === 'meeting' && (
        <div className="premui-cal-card-bottom">
          <AvatarGroup size={20} members={attendees} extraCount={extraCount} showMore={!!extraCount} />
          {platform && <span className="premui-cal-card-meta">{platform}</span>}
        </div>
      )}
      {showBottom && type === 'event' && (
        <div className="premui-cal-card-bottom">
          <span className="premui-cal-card-venue">
            <i className={`ri-${venueIcon}`} aria-hidden="true" />
            {venue}
          </span>
        </div>
      )}
    </div>
  );
};
