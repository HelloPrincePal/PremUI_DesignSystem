import React from 'react';
import { WidgetCard } from './WidgetCard';

export interface MajorExpensesWidgetProps {
  empty?: boolean;
  className?: string;
}

const BARS = [
  { label: 'Housing', color: 'var(--color-state-information-base)', pct: 88 },
  { label: 'Utilities', color: 'var(--color-state-information-light)', pct: 62 },
  { label: 'Food', color: 'var(--color-state-feature-base)', pct: 22 },
];

export const MajorExpensesWidget = ({ empty = false, className = '' }: MajorExpensesWidgetProps) => {
  return (
    <WidgetCard
      icon="bar-chart-horizontal-line"
      title="Major Expenses"
      action={
        <button className="premui-w-inline-select" type="button">
          Weekly <i className="ri-arrow-down-s-line" aria-hidden="true" />
        </button>
      }
      className={className}
    >
      <div className="premui-w-hbars">
        {BARS.map((b) => (
          <div className="premui-w-hbar-row" key={b.label}>
            <span className="premui-w-hbar-label" data-muted={empty || undefined}>{b.label}</span>
            <span className="premui-w-hbar-track">
              {!empty && <span className="premui-w-hbar-fill" style={{ width: `${b.pct}%`, background: b.color }} />}
              {empty && <span className="premui-w-hbar-empty" />}
            </span>
          </div>
        ))}
        <div className="premui-w-hbar-axis">
          <span>0</span><span>2K</span><span>4K</span><span>6K</span><span>8K</span><span>10K</span>
        </div>
      </div>
    </WidgetCard>
  );
};
