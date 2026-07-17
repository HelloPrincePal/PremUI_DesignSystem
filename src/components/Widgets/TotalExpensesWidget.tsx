import React from 'react';
import { WidgetCard } from './WidgetCard';

export interface TotalExpensesWidgetProps {
  empty?: boolean;
  className?: string;
}

const WAVE = '0,34 20,30 34,14 48,26 62,10 76,28 90,20 104,32 118,16 132,8 146,22';

export const TotalExpensesWidget = ({ empty = false, className = '' }: TotalExpensesWidgetProps) => (
  <WidgetCard headless className={className}>
    <div className="premui-w-exp-top">
      <span className="premui-w-exp-icon"><i className="ri-arrow-left-down-line" aria-hidden="true" /></span>
      <div className="premui-w-exp-spark">
        {empty ? (
          <span className="premui-w-exp-spark-flat" />
        ) : (
          <svg viewBox="0 0 146 40" width="160" height="44" preserveAspectRatio="none" aria-hidden="true">
            <polyline className="premui-w-line" points={WAVE} />
          </svg>
        )}
      </div>
    </div>
    <span className="premui-w-total-label" style={{ marginTop: 'var(--spacing-16)' }}>Total Expenses</span>
    <div className="premui-w-bal-head" style={{ marginTop: 'var(--spacing-4)' }}>
      <span className="premui-w-bal-value" data-muted={empty || undefined}>{empty ? '$0.00' : '$6,240.28'}</span>
      {!empty && (
        <span className="premui-w-delta" data-dir="down"><i className="ri-arrow-right-down-line" aria-hidden="true" />2%</span>
      )}
    </div>
  </WidgetCard>
);
