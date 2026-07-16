import React from 'react';
import './widgets.css';
import { Avatar } from '../Avatars/Avatar';
import type { AvatarProps } from '../Avatars/Avatar';
import { Badge } from '../Badge/Badge';
import type { BadgeColor } from '../Badge/Badge';
import { CompactButton } from '../CompactButton/CompactButton';

export type ScheduleCardType = 'meetings' | 'events' | 'holiday';

export interface ScheduleCardProps {
  type?: ScheduleCardType;
  title: string;
  /** Uppercase subtitle — the time range (meetings/events) or date (holiday). */
  meta: string;
  className?: string;

  // meetings / events — attendee pill
  attendees?: AvatarProps[];
  extraCount?: number | string;

  // meetings
  on?: string;
  tag?: { label: string; color: BadgeColor };
  onExpand?: () => void;

  // events
  location?: string;
  pinColor?: string;
  by?: string;
  going?: string;

  // holiday
  breakBadge?: { label: string; color: BadgeColor };
  emoji?: string;
  greeting?: string;
  holidayType?: string;
}

const DEFAULT_ATTENDEES: AvatarProps[] = [
  { persona: 'James Brown', type: 'Illustration' },
  { persona: 'Juma Omondi', type: 'Solid BG' },
  { persona: 'Lena Müller', type: 'Solid BG' },
];

const CompactAvatars = ({ members, extra }: { members: AvatarProps[]; extra: number | string }) => (
  <span className="premui-w-compact-avatars">
    <span className="premui-w-compact-avatars-list">
      {members.map((m, i) => (
        <Avatar key={i} {...m} size={24} className="premui-w-compact-avatar" />
      ))}
    </span>
    <span className="premui-w-compact-avatars-count">{typeof extra === 'number' ? `+${extra}` : extra}</span>
  </span>
);

/**
 * Schedule Cards [Schedule] — a single meeting / event / holiday card. Ported
 * from Figma node 3521:3090. Used inside the Schedule widget's detail tabs.
 */
export const ScheduleCard = ({
  type = 'meetings',
  title,
  meta,
  attendees = DEFAULT_ATTENDEES,
  extraCount = '+4',
  on,
  tag,
  onExpand,
  location,
  pinColor = 'var(--color-state-error-base)',
  by,
  going,
  breakBadge,
  emoji,
  greeting,
  holidayType,
  className = '',
}: ScheduleCardProps) => (
  <div className={`premui-w-scard ${className}`}>
    <div className="premui-w-scard-head">
      <div className="premui-w-scard-titles">
        <span className="premui-w-scard-title">{title}</span>
        <span className="premui-w-scard-meta">{meta}</span>
      </div>
      {(type === 'meetings' || type === 'events') && (
        <CompactButton icon="arrow-down-s-line" style="white" fullRadius size="md" ariaLabel="Expand" onClick={onExpand} />
      )}
      {type === 'holiday' && breakBadge && (
        <Badge color={breakBadge.color} style="light" size="sm">
          {breakBadge.label}
        </Badge>
      )}
    </div>

    {type === 'events' && (
      <div className="premui-w-scard-address">
        <span className="premui-w-scard-pin">
          <i className="ri-map-pin-2-fill" style={{ color: pinColor }} aria-hidden="true" />
        </span>
        <span className="premui-w-scard-address-text">{location}</span>
      </div>
    )}

    {type === 'holiday' && (
      <div className="premui-w-scard-address">
        <span className="premui-w-scard-pin premui-w-scard-emoji">{emoji}</span>
        <span className="premui-w-scard-address-text">{greeting}</span>
      </div>
    )}

    {type === 'meetings' && (
      <>
        <CompactAvatars members={attendees} extra={extraCount} />
        <div className="premui-w-scard-bottom">
          <span className="premui-w-scard-on">{on}</span>
          {tag && (
            <Badge color={tag.color} style="light" size="sm">
              {tag.label}
            </Badge>
          )}
        </div>
      </>
    )}

    {type === 'events' && (
      <div className="premui-w-scard-bottom">
        <span className="premui-w-scard-on">{by}</span>
        <span className="premui-w-scard-going">
          <i className="ri-user-6-fill" aria-hidden="true" />
          {going}
        </span>
      </div>
    )}

    {type === 'holiday' && <span className="premui-w-scard-on">{holidayType}</span>}
  </div>
);
