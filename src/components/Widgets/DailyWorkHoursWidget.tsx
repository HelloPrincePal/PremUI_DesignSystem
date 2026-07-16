import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';

export interface DailyWorkHoursWidgetProps {
  empty?: boolean;
  onDetails?: () => void;
  className?: string;
}

const LEGEND = [
  { label: 'Pause Time', color: 'yellow', width: 20 },
  { label: 'Active Time', color: 'blue', width: 62 },
  { label: 'Extra Time', color: 'purple', width: 18 },
] as const;

export const DailyWorkHoursWidget = ({ empty = false, onDetails, className = '' }: DailyWorkHoursWidgetProps) => (
  <WidgetCard
    icon="timer-line"
    title="Daily Work Hours"
    action={<WidgetHeaderButton onClick={onDetails}>Details</WidgetHeaderButton>}
    className={className}
  >
    <div className="premui-w-hours-total">
      {empty ? (
        <>
          <b style={{ color: 'var(--color-text-disabled)' }}>0</b>
          <span style={{ color: 'var(--color-text-disabled)' }}> hours </span>
          <b style={{ color: 'var(--color-text-disabled)' }}>0</b>
          <span style={{ color: 'var(--color-text-disabled)' }}> minutes in total</span> ⏳
        </>
      ) : (
        <>
          <b>12</b> hours <b>27</b> minutes in total ⏳
        </>
      )}
    </div>

    <div className="premui-w-stack">
      {LEGEND.map((seg) => (
        <span key={seg.label} className="premui-w-stack-seg" data-color={seg.color} data-muted={empty || undefined} style={{ width: `${seg.width}%` }} />
      ))}
    </div>

    <div className="premui-w-legend">
      {LEGEND.map((seg) => (
        <span key={seg.label} className="premui-w-legend-item" data-muted={empty || undefined}>
          <span className="premui-w-legend-dot" data-color={seg.color} />
          {seg.label}
        </span>
      ))}
    </div>
  </WidgetCard>
);
