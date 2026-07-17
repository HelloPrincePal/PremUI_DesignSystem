import React from 'react';
import { WidgetCard, WidgetHeaderButton, CountryFlag } from './WidgetCard';
import { EmptyState } from '../EmptyStates/EmptyState';

interface Currency {
  flag: string;
  name: string;
  code: string;
  rate: string;
  change: string;
  dir: 'up' | 'down';
}

export interface CurrencyListWidgetProps {
  empty?: boolean;
  onRefresh?: () => void;
  className?: string;
}

const CURRENCIES: Currency[] = [
  { flag: 'European Union', name: 'Euro', code: 'EUR', rate: '0.94 EUR', change: '0.44%', dir: 'down' },
  { flag: 'Canada', name: 'Canadian Dollar', code: 'CAD', rate: '1.35 CAD', change: '0.26%', dir: 'up' },
  { flag: 'Japan', name: 'Japanese Yen', code: 'JPY', rate: '147.92 JPY', change: '0.00%', dir: 'down' },
  { flag: 'Turkey', name: 'Turkish Lira', code: 'TRY', rate: '30.70 TRY', change: '1.42%', dir: 'up' },
];

export const CurrencyListWidget = ({ empty = false, onRefresh, className = '' }: CurrencyListWidgetProps) => (
  <WidgetCard
    icon="money-dollar-box-line"
    title="Currency List"
    action={
      <button className="premui-w-flag-select" type="button">
        <CountryFlag name="United States" size={20} /> USD <i className="ri-arrow-down-s-line" aria-hidden="true" />
      </button>
    }
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Currency List" size={112} />
        <div className="premui-widget-empty-caption">Currency list is unavailable now. Please check back later.</div>
        <WidgetHeaderButton onClick={onRefresh}>Refresh</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <div className="premui-w-search" style={{ marginBottom: 'var(--spacing-8)' }}>
          <i className="ri-search-2-line" aria-hidden="true" />
          <input type="text" placeholder="Search..." />
          <span className="premui-w-search-kbd">⌘1</span>
        </div>
        <div className="premui-w-list">
          {CURRENCIES.map((c) => (
            <div className="premui-w-row" key={c.code}>
              <CountryFlag name={c.flag} size={40} />
              <div className="premui-w-row-main">
                <span className="premui-w-row-title">{c.name}</span>
                <span className="premui-w-row-sub">1 USD to {c.code}</span>
              </div>
              <div className="premui-w-txn-right">
                <span className="premui-w-txn-amt">{c.rate}</span>
                <span className="premui-w-cur-change" data-dir={c.dir}>
                  <i className={`ri-arrow-${c.dir === 'up' ? 'right-up' : 'right-down'}-line`} aria-hidden="true" />
                  {c.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </WidgetCard>
);
