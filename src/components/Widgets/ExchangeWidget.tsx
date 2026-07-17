import React from 'react';
import { WidgetCard, WidgetHeaderButton, CountryFlag } from './WidgetCard';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface ExchangeWidgetProps {
  empty?: boolean;
  onRefresh?: () => void;
  onExchange?: () => void;
  className?: string;
}

export const ExchangeWidget = ({ empty = false, onRefresh, onExchange, className = '' }: ExchangeWidgetProps) => (
  <WidgetCard
    icon="refresh-line"
    title="Exchange"
    action={<WidgetHeaderButton>Currencies</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Exchange" size={96} />
        <div className="premui-widget-empty-caption">Exchange feature is unavailable now. Please check back later.</div>
        <WidgetHeaderButton onClick={onRefresh}>Refresh</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <div className="premui-w-xchg-box">
          <div className="premui-w-xchg-head">
            <span className="premui-w-xchg-cur"><CountryFlag name="United States" size={24} /> USD <i className="ri-arrow-down-s-line" aria-hidden="true" /></span>
            <span className="premui-w-xchg-swap"><i className="ri-arrow-left-right-line" aria-hidden="true" /></span>
            <span className="premui-w-xchg-cur"><CountryFlag name="European Union" size={24} /> EUR <i className="ri-arrow-down-s-line" aria-hidden="true" /></span>
          </div>
          <div className="premui-w-xchg-amt">
            <span className="premui-w-xchg-value">$100.00</span>
            <span className="premui-w-xchg-avail">Available : $16,058.94</span>
          </div>
          <div className="premui-w-xchg-rate">1 USD = <b>0.94 EUR</b></div>
        </div>
        <div className="premui-w-kv-line"><span>Tax (2%)</span><b>$2.00</b></div>
        <div className="premui-w-kv-line"><span>Exchange fee (1%)</span><b>$1.00</b></div>
        <div className="premui-w-kv-line"><span>Total amount</span><b>€90.7</b></div>
        <button className="premui-w-fullbtn premui-w-comment-btn" type="button" onClick={onExchange} style={{ marginTop: 'var(--spacing-16)' }}>
          <i className="ri-refresh-line" aria-hidden="true" />
          Exchange
        </button>
      </>
    )}
  </WidgetCard>
);
