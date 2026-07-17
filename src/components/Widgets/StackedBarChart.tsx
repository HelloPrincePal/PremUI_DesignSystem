import React from 'react';
import './widgets.css';

export interface StackedBarDatum {
  label: string;
  /** Segment heights as a % of the bar track (0–100). */
  income: number;
  expenses: number;
  scheduled: number;
}

export interface StackedBarItemProps {
  income: number;
  expenses: number;
  scheduled: number;
  className?: string;
}

/**
 * Stacked Bar Chart Item [Budget Overview] — a single bar with Income /
 * Expenses / Scheduled segments stacked from the bottom. Ported from Figma
 * node 3963:6847.
 */
export const StackedBarItem = ({ income, expenses, scheduled, className = '' }: StackedBarItemProps) => (
  <div className={`premui-w-budget-bar ${className}`}>
    <span className="premui-w-budget-seg" data-seg="scheduled" style={{ height: `${scheduled}%` }} />
    <span className="premui-w-budget-seg" data-seg="expenses" style={{ height: `${expenses}%` }} />
    <span className="premui-w-budget-seg" data-seg="income" style={{ height: `${income}%` }} />
  </div>
);

const LABELS: Record<number, string[]> = {
  12: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  7: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  6: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  4: ['W1', 'W2', 'W3', 'W4'],
};

export interface StackedBarChartProps {
  /** Number of bars — generates default month/day labels. Ignored when `data` is set. */
  bars?: 12 | 7 | 6 | 4;
  /** Custom data (overrides `bars`). */
  data?: StackedBarDatum[];
  className?: string;
}

/**
 * Stacked Bar Chart [Budget Overview] — the full income/expenses/scheduled
 * chart with a y-axis and bottom labels, in 12 / 7 / 6 / 4-bar variants. Ported
 * from Figma node 3963:6854. Used by the Budget Overview widget.
 */
export const StackedBarChart = ({ bars = 12, data, className = '' }: StackedBarChartProps) => {
  const labels = LABELS[bars] ?? LABELS[12];
  const rows: StackedBarDatum[] =
    data ?? labels.map((label) => ({ label, income: 48, expenses: 22, scheduled: 8 }));
  return (
    <div className={`premui-w-budget-chart ${className}`}>
      <div className="premui-w-budget-yaxis">
        <span>20k</span><span>15k</span><span>10k</span><span>0</span>
      </div>
      <div className="premui-w-budget-bars">
        {rows.map((d, i) => (
          <div className="premui-w-budget-col" key={i}>
            <StackedBarItem income={d.income} expenses={d.expenses} scheduled={d.scheduled} />
            <span className="premui-w-budget-month">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
