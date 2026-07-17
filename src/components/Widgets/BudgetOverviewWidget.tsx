import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { StackedBarChart } from './StackedBarChart';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface BudgetOverviewWidgetProps {
  empty?: boolean;
  onAddCard?: () => void;
  className?: string;
}

const STATS = [
  { icon: 'arrow-left-down-line', label: 'Income', value: '$96,000.00', delta: '+5%', dir: 'up' as const },
  { icon: 'arrow-right-up-line', label: 'Expenses', value: '$24,000.00', delta: '-3%', dir: 'down' as const },
  { icon: 'calendar-check-line', label: 'Scheduled', value: '$14,000.00' },
];

export const BudgetOverviewWidget = ({ empty = false, onAddCard, className = '' }: BudgetOverviewWidgetProps) => (
  <WidgetCard
    icon="bar-chart-box-line"
    title="Budget Overview"
    width={728}
    action={
      <>
        <span className="premui-w-legend" style={{ marginRight: 'var(--spacing-12)' }}>
          <span className="premui-w-legend-item"><span className="premui-w-legend-dot" data-color="income" />Income</span>
          <span className="premui-w-legend-item"><span className="premui-w-legend-dot" data-color="expenses" />Expenses</span>
          <span className="premui-w-legend-item"><span className="premui-w-legend-dot" data-color="scheduled" />Scheduled</span>
        </span>
        <button className="premui-w-inline-select" type="button">Last Year <i className="ri-arrow-down-s-line" aria-hidden="true" /></button>
      </>
    }
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Budget Overview" size={112} />
        <div className="premui-widget-empty-caption">You do not have any cards yet. Click the button to add one.</div>
        <WidgetHeaderButton icon="add-line" onClick={onAddCard}>Add Card</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <div className="premui-w-budget-stats">
          {STATS.map((s) => (
            <div className="premui-w-budget-stat" key={s.label}>
              <span className="premui-w-budget-stat-icon"><i className={`ri-${s.icon}`} aria-hidden="true" /></span>
              <div>
                <div className="premui-w-total-label">{s.label}</div>
                <div className="premui-w-budget-stat-value">
                  {s.value}
                  {s.delta && <span className="premui-w-delta" data-dir={s.dir}>{s.delta}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <StackedBarChart bars={12} />
      </>
    )}
  </WidgetCard>
);
