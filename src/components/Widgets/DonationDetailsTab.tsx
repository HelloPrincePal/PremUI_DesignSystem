import React, { useState } from 'react';
import './widgets.css';
import { Avatar } from '../Avatars/Avatar';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

export type DonationTab = 'overview' | 'goal' | 'statistic';

export interface DonationDetailsTabProps {
  tab?: DonationTab;
  defaultTab?: DonationTab;
  onTabChange?: (tab: DonationTab) => void;
  className?: string;
}

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'goal', label: 'Goal' },
  { value: 'statistic', label: 'Statistic' },
];

const HEART = 'M80,132 C18,86 12,44 40,26 C60,13 76,24 80,40 C84,24 100,13 120,26 C148,44 142,86 80,132 Z';

/**
 * Donation Details Tab [Donation Profile] — Overview / Goal / Statistic panel.
 * Ported from Figma node 3962:4438. Used as the body of the Donation Profile widget.
 */
export const DonationDetailsTab = ({ tab, defaultTab = 'overview', onTabChange, className = '' }: DonationDetailsTabProps) => {
  const [internal, setInternal] = useState<DonationTab>(defaultTab);
  const active = tab ?? internal;
  const select = (v: string) => {
    if (tab === undefined) setInternal(v as DonationTab);
    onTabChange?.(v as DonationTab);
  };

  return (
    <div className={`premui-w-dd ${className}`}>
      <SegmentedControl items={TABS} value={active} onChange={select} />

      {active === 'overview' && (
        <>
          <div className="premui-w-donation">
            <span className="premui-w-donation-avatar">
              <Avatar persona="Arthur Taylor" type="Solid BG" size={56} />
              <span className="premui-w-donation-star"><i className="ri-star-fill" aria-hidden="true" /></span>
            </span>
            <span className="premui-w-donation-name">Arthur Taylor</span>
            <span className="premui-w-donation-sub">48 donations in the last year</span>
          </div>
          <div className="premui-w-donation-stats" style={{ marginTop: 0 }}>
            <div className="premui-w-donation-stat">
              <span className="premui-w-donation-stat-icon"><i className="ri-money-dollar-box-line" aria-hidden="true" /></span>
              <span className="premui-w-donation-stat-value">$12,000.00</span>
              <span className="premui-w-donation-stat-label">Total Donation</span>
            </div>
            <div className="premui-w-donation-stat">
              <span className="premui-w-donation-stat-icon"><i className="ri-calendar-check-line" aria-hidden="true" /></span>
              <span className="premui-w-donation-stat-value">14-month</span>
              <span className="premui-w-donation-stat-label">Donation Streak</span>
            </div>
          </div>
        </>
      )}

      {active === 'goal' && (
        <>
          <div className="premui-w-dd-goal-head">
            <div className="premui-w-dd-goal-title">Donation Goal for 2023</div>
            <div className="premui-w-dd-goal-sub">$12,000 / <b>$16,000</b></div>
          </div>
          <div className="premui-w-dd-heart">
            <svg width="160" height="140" viewBox="0 0 160 140" aria-hidden="true">
              <defs>
                <clipPath id="ddHeart"><path d={HEART} /></clipPath>
                <linearGradient id="ddFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff7a7a" />
                  <stop offset="100%" stopColor="#e5484d" />
                </linearGradient>
              </defs>
              <g clipPath="url(#ddHeart)">
                <rect x="0" y="0" width="160" height="140" fill="#ffd9d9" />
                <rect x="0" y="35" width="160" height="105" fill="url(#ddFill)" />
              </g>
            </svg>
            <span className="premui-w-dd-heart-pct">75%</span>
          </div>
          <div className="premui-w-dd-goal-foot">Donate <b>$4,000</b> to reach your target.</div>
        </>
      )}

      {active === 'statistic' && (
        <>
          <div className="premui-w-dd-stats">
            <div className="premui-w-dd-stat">
              <span className="premui-w-dd-stat-icon" data-c="orange"><i className="ri-user-5-fill" aria-hidden="true" /></span>
              <div>
                <div className="premui-w-dd-stat-label">Public</div>
                <div className="premui-w-dd-stat-value">$8,000</div>
              </div>
            </div>
            <div className="premui-w-dd-stat">
              <span className="premui-w-dd-stat-icon" data-c="blue"><i className="ri-spy-fill" aria-hidden="true" /></span>
              <div>
                <div className="premui-w-dd-stat-label">Anonymous</div>
                <div className="premui-w-dd-stat-value">$4,000</div>
              </div>
            </div>
          </div>
          <div className="premui-w-dd-chart">
            <svg className="premui-w-chart" viewBox="0 0 300 120" height={120} preserveAspectRatio="none" aria-hidden="true">
              <polyline fill="none" stroke="var(--color-state-information-base)" strokeWidth="2" points="0,95 50,72 100,40 150,52 200,78 250,96 300,104" />
              <polyline fill="none" stroke="var(--color-state-warning-base)" strokeWidth="2" points="0,112 50,102 100,82 150,50 200,28 250,58 300,92" />
              <circle cx="215" cy="40" r="4" fill="var(--color-state-warning-base)" stroke="#fff" strokeWidth="1.5" />
            </svg>
            <span className="premui-w-stock-tip" style={{ left: '68%', top: 8 }}>$1,000.00</span>
          </div>
          <div className="premui-w-dd-months">
            <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
          <div className="premui-w-info-bar" style={{ marginTop: 0 }}>
            You have donated <b style={{ color: 'var(--color-text-strong)', fontWeight: 600 }}>&nbsp;$12,000&nbsp;</b> in total.
            <i className="ri-information-line" aria-hidden="true" />
          </div>
        </>
      )}
    </div>
  );
};
