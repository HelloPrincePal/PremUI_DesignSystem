import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { AvatarGroup } from '../Avatars/AvatarGroup';

export interface TrainingAnalysisWidgetProps {
  empty?: boolean;
  onDetails?: () => void;
  className?: string;
}

const BARS = [40, 55, 70, 45, 85, 60, 95];

export const TrainingAnalysisWidget = ({ empty = false, onDetails, className = '' }: TrainingAnalysisWidgetProps) => (
  <WidgetCard
    icon="bar-chart-box-line"
    title="Training Analysis"
    action={<WidgetHeaderButton onClick={onDetails}>Details</WidgetHeaderButton>}
    className={className}
  >
    <div className="premui-w-split">
      <div>
        <div className="premui-w-mini-title" style={empty ? { color: 'var(--color-text-disabled)' } : undefined}>
          {empty ? '0' : '12'} courses
        </div>
        <div className="premui-w-mini-sub">Completed in this quarter</div>
      </div>
      <svg width={120} height={48} viewBox="0 0 120 48" aria-hidden="true">
        {BARS.map((h, i) => (
          <rect
            key={i}
            className="premui-w-bar"
            data-muted={empty || undefined}
            x={i * 17}
            y={48 - (h / 100) * 48}
            width={11}
            height={(h / 100) * 48}
            rx={3}
          />
        ))}
      </svg>
    </div>
    <div className="premui-w-attend" style={{ marginTop: 'var(--spacing-12)' }}>
      {empty ? (
        <>
          <span className="premui-w-dot-icon" style={{ background: 'var(--color-bg-soft)' }} />
          <span style={{ color: 'var(--color-text-disabled)' }}>No attendance</span>
        </>
      ) : (
        <>
          <AvatarGroup
            size={20}
            members={[
              { persona: 'Nuray Aksoy', type: 'Solid BG' },
              { persona: 'Sophia Williams', type: 'Solid BG' },
              { persona: 'Arthur Taylor', type: 'Solid BG' },
            ]}
            extraCount={26}
            showMore={false}
          />
          <span>26 Attended</span>
        </>
      )}
    </div>
  </WidgetCard>
);
