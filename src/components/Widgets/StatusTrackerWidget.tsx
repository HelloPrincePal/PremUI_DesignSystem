import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { Avatar } from '../Avatars/Avatar';
import type { BottomStatusType } from '../Avatars/Avatar';
import { Badge } from '../Badge/Badge';
import { EmptyState } from '../EmptyStates/EmptyState';

interface StatusPerson {
  persona: string;
  avatarType?: 'Illustration' | 'Solid BG';
  subtitle?: string;
  bottomStatus?: BottomStatusType;
  /** Right-side trailing content */
  replacedBy?: string;
  awayTime?: string;
}

export interface StatusTrackerWidgetProps {
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

const ABSENT: StatusPerson[] = [
  { persona: 'James Brown', avatarType: 'Illustration', bottomStatus: 'Offline', replacedBy: 'Replaced by Arthur T.' },
];
const AWAY: StatusPerson[] = [
  { persona: 'Sophia Williams', avatarType: 'Solid BG', subtitle: 'Synergy', bottomStatus: 'Away', awayTime: '25m' },
  { persona: 'Arthur Taylor', avatarType: 'Solid BG', subtitle: 'Apex', bottomStatus: 'Away', awayTime: '12m' },
  { persona: 'Emma Wright', avatarType: 'Solid BG', subtitle: 'Pulse', bottomStatus: 'Away', awayTime: '8m' },
];

const PersonRow = ({ person }: { person: StatusPerson }) => (
  <div className="premui-w-row">
    <Avatar persona={person.persona} type={person.avatarType} size={40} bottomStatus={person.bottomStatus} />
    <div className="premui-w-row-main">
      <span className="premui-w-row-title">{person.persona.split(' ').slice(0, 2).join(' ')}</span>
      {(person.subtitle || person.replacedBy) && (
        <span className="premui-w-row-sub">{person.subtitle ?? person.replacedBy}</span>
      )}
    </div>
    <span className="premui-w-row-trail">
      {person.awayTime ? (
        <span className="premui-w-time-pill">
          <i className="ri-time-line" aria-hidden="true" />
          {person.awayTime}
        </span>
      ) : (
        <Badge color="gray" style="light" size="md" type="left-icon" icon="indeterminate-circle-line">
          Absent
        </Badge>
      )}
    </span>
  </div>
);

export const StatusTrackerWidget = ({ empty = false, onSeeAll, className = '' }: StatusTrackerWidgetProps) => (
  <WidgetCard
    icon="mac-line"
    title="Status Tracker"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="hr" type="Status Tracker" size={112} />
        <div className="premui-widget-empty-caption">
          No records of statuses yet.
          <br />
          Please check back later.
        </div>
      </div>
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <span className="premui-w-kv-label">Absent</span>
        {ABSENT.map((p) => (
          <PersonRow key={p.persona} person={p} />
        ))}
        <span className="premui-w-kv-label" style={{ marginTop: 'var(--spacing-8)' }}>
          Away
        </span>
        {AWAY.map((p) => (
          <PersonRow key={p.persona} person={p} />
        ))}
      </div>
    )}
  </WidgetCard>
);
