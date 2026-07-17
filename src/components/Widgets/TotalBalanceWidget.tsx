import React from 'react';
import { WidgetCard, CountryFlag } from './WidgetCard';

export interface TotalBalanceWidgetProps {
  empty?: boolean;
  className?: string;
}

const AREA = '0,60 30,30 60,26 90,44 120,48 150,60 180,40 210,36 240,52 270,42 300,34';

export const TotalBalanceWidget = ({ empty = false, className = '' }: TotalBalanceWidgetProps) => (
  <WidgetCard
    title="Total Balance"
    action={
      <button className="premui-w-flag-select" type="button" aria-label="Currency">
        <CountryFlag name="United States" size={20} />
        <i className="ri-arrow-down-s-line" aria-hidden="true" />
      </button>
    }
    className={className}
  >
    <div className="premui-w-bal-head">
      <span className="premui-w-bal-value" data-muted={empty || undefined}>{empty ? '$0.00' : '$14,480.24'}</span>
      {!empty && (
        <span className="premui-w-delta" data-dir="up"><i className="ri-arrow-right-up-line" aria-hidden="true" />5%</span>
      )}
    </div>
    <div className="premui-w-area-chart">
      <svg className="premui-w-chart" viewBox="0 0 300 80" height={72} preserveAspectRatio="none" aria-hidden="true">
        {!empty && (
          <>
            <defs>
              <linearGradient id="balArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary-base)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--primary-base)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon fill="url(#balArea)" points={`${AREA} 300,80 0,80`} />
            <polyline className="premui-w-line" points={AREA} />
          </>
        )}
        {empty && <line x1="0" y1="46" x2="300" y2="46" stroke="var(--color-stroke-soft)" strokeWidth="2" />}
      </svg>
      <div className="premui-w-xaxis">
        <span>0</span><span>2K</span><span>3K</span><span>4K</span><span>5K</span><span>100</span>
      </div>
    </div>
  </WidgetCard>
);
