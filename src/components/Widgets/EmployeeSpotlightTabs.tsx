/// <reference types="vite/client" />
import React, { useState } from 'react';
import './widgets.css';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { Avatar } from '../Avatars/Avatar';

const rosette = import.meta.glob('../../assets/Spotlight/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const asset = (name: string) =>
  rosette[`../../assets/Spotlight/${name}.svg`] ?? '';

/** The blue rosette / award seal used in the Overview and Rewards tabs. */
export const SpotlightBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="premui-w-badge">
    <img className="premui-w-badge-flag is-left" src={asset('left-flag')} alt="" aria-hidden="true" />
    <img className="premui-w-badge-flag is-right" src={asset('right-flag')} alt="" aria-hidden="true" />
    <img className="premui-w-badge-star is-outer" src={asset('outer-star')} alt="" aria-hidden="true" />
    <img className="premui-w-badge-star is-inner" src={asset('inner-star')} alt="" aria-hidden="true" />
    <div className="premui-w-badge-center">{children}</div>
  </div>
);

interface Comment {
  persona: string;
  avatarType?: 'Illustration' | 'Solid BG';
  text: string;
  liked?: boolean;
}

const COMMENTS: Comment[] = [
  { persona: 'James Brown', avatarType: 'Illustration', text: 'Congrats, Matthew! 🔥', liked: true },
  { persona: 'Lena Müller', avatarType: 'Illustration', text: 'Keep up the amazing work! 🤗', liked: true },
  { persona: 'Juma Omondi', avatarType: 'Illustration', text: 'Sky is the limit, well deserved! ⚡️', liked: false },
];

export type EmployeeSpotlightTab = 'overview' | 'comments' | 'rewards';

export interface EmployeeSpotlightTabsProps {
  /** Controlled active tab. */
  tab?: EmployeeSpotlightTab;
  defaultTab?: EmployeeSpotlightTab;
  onTabChange?: (tab: EmployeeSpotlightTab) => void;
  className?: string;
}

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'comments', label: 'Comments' },
  { value: 'rewards', label: 'Rewards' },
];

/**
 * Employee Spotlight Tabs — the tabbed content panel (Overview / Comments /
 * Rewards) inside the Employee Spotlight widget. Ported from Figma node
 * 3849:31700.
 */
export const EmployeeSpotlightTabs = ({
  tab,
  defaultTab = 'overview',
  onTabChange,
  className = '',
}: EmployeeSpotlightTabsProps) => {
  const [internal, setInternal] = useState<EmployeeSpotlightTab>(defaultTab);
  const active = tab ?? internal;

  const select = (value: string) => {
    if (!tab) setInternal(value as EmployeeSpotlightTab);
    onTabChange?.(value as EmployeeSpotlightTab);
  };

  return (
    <div className={`premui-w-spotlight-tabs ${className}`}>
      <SegmentedControl items={TABS} value={active} onChange={select} />

      {active === 'overview' && (
        <div className="premui-w-spotlight">
          <span className="premui-w-spotlight-name">Matthew Johnson</span>
          <span className="premui-w-spotlight-role">Software Engineer</span>
          <SpotlightBadge>
            <Avatar persona="Arthur Taylor" type="Illustration" size={72} />
          </SpotlightBadge>
          <span className="premui-w-spotlight-caption">Top-performing employee of January!</span>
        </div>
      )}

      {active === 'rewards' && (
        <div className="premui-w-spotlight">
          <span className="premui-w-spotlight-name">$50 Gift Card for Nike</span>
          <span className="premui-w-spotlight-role">Enjoy spending, Matthew!</span>
          <SpotlightBadge>
            <span className="premui-w-badge-gift">
              <i className="ri-gift-line" aria-hidden="true" />
            </span>
          </SpotlightBadge>
          <span className="premui-w-spotlight-caption">Employees of the month receive rewards</span>
        </div>
      )}

      {active === 'comments' && (
        <>
          <div className="premui-w-comments">
            {COMMENTS.map((c, i) => (
              <React.Fragment key={c.persona}>
                {i > 0 && <div className="premui-w-sep-inline" style={{ margin: 0 }} />}
                <div className="premui-w-comment">
                  <Avatar persona={c.persona} type={c.avatarType} size={40} />
                  <div className="premui-w-comment-body">
                    <span className="premui-w-comment-name">{c.persona}</span>
                    <span className="premui-w-comment-text">{c.text}</span>
                  </div>
                  <i
                    className={c.liked ? 'ri-heart-fill' : 'ri-heart-line'}
                    style={{ color: c.liked ? 'var(--color-state-error-base)' : 'var(--color-icon-soft)', fontSize: 20 }}
                    aria-hidden="true"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <button className="premui-w-fullbtn premui-w-comment-btn" type="button">
            <i className="ri-pencil-line" aria-hidden="true" />
            Comment
          </button>
        </>
      )}
    </div>
  );
};
