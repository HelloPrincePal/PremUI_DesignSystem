import React, { useState } from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface WorkHourAnalysisWidgetProps {
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

const RANGES = [
  { value: '5d', label: '5D' },
  { value: '2w', label: '2W' },
  { value: '1m', label: '1M' },
  { value: '6m', label: '6M' },
  { value: '1y', label: '1Y' },
];

export const WorkHourAnalysisWidget = ({ empty = false, onSeeAll, className = '' }: WorkHourAnalysisWidgetProps) => {
  const [range, setRange] = useState('5d');

  return (
    <WidgetCard
      icon="bar-chart-2-line"
      title="Work Hour Analysis"
      action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
      className={className}
    >
      <div className="premui-w-total">
        <span className="premui-w-total-icon" data-muted={empty || undefined}>
          <i className="ri-time-line" aria-hidden="true" />
        </span>
        <div>
          <div className="premui-w-total-label">Total Work</div>
          <div className="premui-w-total-value">{empty ? '0 hours · 0 mins' : '38 hours · 12 mins'}</div>
        </div>
      </div>

      <SegmentedControl items={RANGES} value={range} onChange={setRange} style={{ margin: 'var(--spacing-16) 0' }} />

      {empty ? (
        <div className="premui-widget-empty">
          <EmptyState set="hr" type="Work Hour Analysis" size={96} />
          <div className="premui-widget-empty-caption">
            No records of work hours yet.
            <br />
            Please check back later.
          </div>
        </div>
      ) : (
        <>
          <div style={{ position: 'relative' }}>
            <svg className="premui-w-chart" viewBox="0 0 300 96" height={96} preserveAspectRatio="none" aria-hidden="true">
              <polyline className="premui-w-line" points="0,40 30,20 60,20 90,55 120,68 150,55 180,58 210,30 240,20 270,45 300,40" />
              <circle cx="150" cy="55" r="4" fill="var(--primary-base)" />
            </svg>
            <span
              style={{
                position: 'absolute', left: '38%', top: 30, transform: 'translateX(-50%)',
                background: 'var(--color-bg-white,#fff)', border: '1px solid var(--color-stroke-soft)',
                borderRadius: 8, padding: '2px 8px', fontSize: 12, color: 'var(--color-text-strong)',
                boxShadow: 'var(--shadow-regular-x-small)', whiteSpace: 'nowrap',
              }}
            >
              Monday, 6h
            </span>
          </div>
          <div className="premui-w-foot-note">
            <i className="ri-information-line" aria-hidden="true" />
            Total work hours include extra hours.
          </div>
        </>
      )}
    </WidgetCard>
  );
};
