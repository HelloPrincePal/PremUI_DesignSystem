import React from 'react';
import { WidgetCard, WidgetHeaderButton, BrandLogo } from './WidgetCard';
import { PromotionalCard } from './PromotionalCard';
import { Badge } from '../Badge/Badge';
import type { BadgeColor } from '../Badge/Badge';
import { EmptyState } from '../EmptyStates/EmptyState';

interface Subscription {
  brand: string;
  title: string;
  price: string;
  status: { label: string; color: BadgeColor };
}

export interface MySubscriptionsWidgetProps {
  empty?: boolean;
  onSeeAll?: () => void;
  onExplore?: () => void;
  className?: string;
}

const SUBS: Subscription[] = [
  { brand: 'Spotify', title: 'Spotify', price: '$7.99 /month', status: { label: 'Paid', color: 'green' } },
  { brand: 'Youtube Music', title: 'Youtube Music', price: '$79.99 /year', status: { label: 'Expiring', color: 'gray' } },
  { brand: 'Amazon Prime', title: 'Prime Video', price: '$9.99 /month', status: { label: 'Paused', color: 'orange' } },
];

export const MySubscriptionsWidget = ({ empty = false, onSeeAll, onExplore, className = '' }: MySubscriptionsWidgetProps) => (
  <WidgetCard
    icon="file-list-3-line"
    title="My Subscriptions"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="My Subscriptions" size={112} />
        <div className="premui-widget-empty-caption">You do not have any subscriptions yet. Feel free to explore.</div>
        <WidgetHeaderButton onClick={onExplore}>Explore</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <PromotionalCard brand="Apple Music" className="premui-w-promocard-inset" />
        <div className="premui-w-list">
          {SUBS.map((s) => (
            <div className="premui-w-row" key={s.title}>
              <span className="premui-w-txn-brand"><BrandLogo name={s.brand} size={24} /></span>
              <div className="premui-w-row-main">
                <span className="premui-w-row-title">{s.title}</span>
                <span className="premui-w-row-sub">{s.price}</span>
              </div>
              <Badge color={s.status.color} style="light" size="sm">{s.status.label}</Badge>
              <i className="ri-more-2-fill premui-w-row-chevron" aria-hidden="true" />
            </div>
          ))}
        </div>
      </>
    )}
  </WidgetCard>
);
