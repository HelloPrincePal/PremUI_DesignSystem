import React from 'react';
import { WidgetCard } from './WidgetCard';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface SpendingSummaryWidgetProps {
  empty?: boolean;
  className?: string;
}

const SIZE = 200;
const STROKE = 22;
const R = (SIZE - STROKE) / 2;
const CY = SIZE / 2;
const LEN = Math.PI * R;
const HEIGHT = SIZE / 2 + STROKE / 2;
const PATH = `M ${STROKE / 2},${CY} A ${R},${R} 0 0 1 ${SIZE - STROKE / 2},${CY}`;

const CATS = [
  { icon: 'shopping-bag-line', label: 'Shopping', amount: '$900.00' },
  { icon: 'file-list-line', label: 'Utilities', amount: '$600.00' },
  { icon: 'copper-coin-line', label: 'Others', amount: '$200.00' },
];

export const SpendingSummaryWidget = ({ empty = false, className = '' }: SpendingSummaryWidgetProps) => (
  <WidgetCard
    icon="pie-chart-line"
    title="Spending Summary"
    action={
      <button className="premui-w-inline-select" type="button">Last Week <i className="ri-arrow-down-s-line" aria-hidden="true" /></button>
    }
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Spending Summary" size={112} />
        <div className="premui-widget-empty-caption">No records of spendings yet. Please check back later.</div>
      </div>
    ) : (
      <>
        <div className="premui-widget-gauge" style={{ width: SIZE, height: HEIGHT, alignSelf: 'center', margin: 'var(--spacing-8) 0 var(--spacing-16)' }}>
          <svg width={SIZE} height={HEIGHT} viewBox={`0 0 ${SIZE} ${HEIGHT}`}>
            <path className="premui-widget-gauge-track" d={PATH} strokeWidth={STROKE} fill="none" strokeLinecap="round" />
            <path d={PATH} strokeWidth={STROKE} fill="none" stroke="var(--color-state-information-light)" strokeLinecap="round"
              strokeDasharray={`${LEN * 0.7} ${LEN}`} />
            <path d={PATH} strokeWidth={STROKE} fill="none" stroke="var(--primary-base)" strokeLinecap="round"
              strokeDasharray={`${LEN * 0.5} ${LEN}`} />
          </svg>
          <div className="premui-widget-gauge-center">
            <span className="premui-w-spend-label">SPEND</span>
            <span className="premui-w-spend-value">$1,800.00</span>
          </div>
        </div>
        <div className="premui-w-cats">
          {CATS.map((c, i) => (
            <div className="premui-w-cat" key={c.label} data-first={i === 0 || undefined}>
              <span className="premui-w-cat-icon"><i className={`ri-${c.icon}`} aria-hidden="true" /></span>
              <span className="premui-w-cat-label">{c.label}</span>
              <span className="premui-w-cat-amt">{c.amount}</span>
            </div>
          ))}
        </div>
        <div className="premui-w-info-bar">
          Your weekly spending limit is $2000.
          <i className="ri-information-line" aria-hidden="true" />
        </div>
      </>
    )}
  </WidgetCard>
);
