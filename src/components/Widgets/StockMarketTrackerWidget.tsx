import React, { useState } from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface StockMarketTrackerWidgetProps {
  empty?: boolean;
  onRefresh?: () => void;
  className?: string;
}

const RANGES = [
  { value: '1d', label: '1D' },
  { value: '1w', label: '1W' },
  { value: '1m', label: '1M' },
  { value: '3m', label: '3M' },
  { value: '1y', label: '1Y' },
];

// A jagged stock line across a 300x120 viewBox.
const POINTS = '0,70 12,55 24,72 36,45 48,58 60,40 72,66 84,80 96,62 108,74 120,52 132,84 144,70 156,60 168,78 180,50 192,30 204,48 216,20 228,42 240,58 252,44 264,64 276,40 288,56 300,46';

export const StockMarketTrackerWidget = ({ empty = false, onRefresh, className = '' }: StockMarketTrackerWidgetProps) => {
  const [range, setRange] = useState('1y');

  return (
    <WidgetCard
      icon="line-chart-line"
      title="Stock Market Tracker"
      action={<WidgetHeaderButton icon="" className="premui-w-ticker">ACME <i className="ri-arrow-down-s-line" aria-hidden="true" /></WidgetHeaderButton>}
      className={className}
    >
      {empty ? (
        <>
          <SegmentedControl items={RANGES} value={range} onChange={setRange} style={{ marginBottom: 'var(--spacing-16)' }} />
          <div className="premui-widget-empty">
            <EmptyState set="finance" type="Stock Market Tracker" size={96} />
            <div className="premui-widget-empty-caption">Stock market is unavailable now. Please check back later.</div>
            <WidgetHeaderButton onClick={onRefresh}>Reflesh</WidgetHeaderButton>
          </div>
        </>
      ) : (
        <>
          <SegmentedControl items={RANGES} value={range} onChange={setRange} style={{ marginBottom: 'var(--spacing-16)' }} />
          <div className="premui-w-stock-head">
            <span className="premui-w-stock-value">$440,364.20</span>
            <span className="premui-w-delta" data-dir="up">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />0.48%
            </span>
          </div>
          <span className="premui-w-stock-sub">ACME TECH INC. (ACME)</span>
          <div className="premui-w-stock-chart">
            <svg className="premui-w-chart" viewBox="0 0 300 120" height={120} preserveAspectRatio="none" aria-hidden="true">
              <line x1="150" y1="0" x2="150" y2="120" stroke="var(--color-stroke-soft)" strokeWidth="1" strokeDasharray="3 3" />
              <polyline className="premui-w-line" points={POINTS} />
              <circle cx="150" cy="52" r="4" fill="var(--primary-base)" stroke="var(--color-bg-white,#fff)" strokeWidth="2" />
            </svg>
            <span className="premui-w-stock-tip">$439,82.21</span>
          </div>
          <div className="premui-w-ohlc">
            <span>Open <b>439,59</b></span>
            <span className="premui-w-ohlc-dot">·</span>
            <span>High <b>442,23</b></span>
            <span className="premui-w-ohlc-dot">·</span>
            <span>Low <b>438,21</b></span>
          </div>
        </>
      )}
    </WidgetCard>
  );
};
