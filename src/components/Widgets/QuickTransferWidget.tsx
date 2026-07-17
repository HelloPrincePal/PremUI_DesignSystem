import React from 'react';
import { WidgetCard, WidgetHeaderButton, BrandLogo } from './WidgetCard';
import { Avatar } from '../Avatars/Avatar';
import { ContactChip } from './ContactChip';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface QuickTransferWidgetProps {
  empty?: boolean;
  onAdvanced?: () => void;
  onAddFunds?: () => void;
  className?: string;
}

const CONTACTS = [
  { name: 'Natalia', persona: 'Natalia Nowak', type: 'Solid BG' as const },
  { name: 'James', persona: 'James Brown', type: 'Illustration' as const },
  { name: 'Laura', persona: 'Laura Perez', type: 'Illustration' as const },
  { name: 'Wei', persona: 'Wei Chen', type: 'Solid BG' as const },
];

export const QuickTransferWidget = ({ empty = false, onAdvanced, onAddFunds, className = '' }: QuickTransferWidgetProps) => (
  <WidgetCard
    icon="arrow-left-right-line"
    title="Quick Transfer"
    action={<WidgetHeaderButton icon="settings-3-line" onClick={onAdvanced}>Advanced</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Quick Transfer" size={112} />
        <div className="premui-widget-empty-caption">You do not have any funds to transfer. Please check back later.</div>
        <WidgetHeaderButton icon="add-line" onClick={onAddFunds}>Add Funds</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <div className="premui-w-contacts-head">
          <span className="premui-w-label-sm">My Contacts (12)</span>
          <span className="premui-w-contacts-nav">
            <i className="ri-arrow-left-s-line" aria-hidden="true" />
            <i className="ri-arrow-right-s-line" aria-hidden="true" />
          </span>
        </div>
        <div className="premui-w-contacts">
          {CONTACTS.map((c, i) => (
            <ContactChip
              key={c.name}
              name={c.name}
              avatar={<Avatar persona={c.persona} type={c.type} size={24} />}
              selected={i === 0}
            />
          ))}
        </div>
        <div className="premui-w-transfer-box">
          <div className="premui-w-transfer-card">
            <BrandLogo name="Mastercard" size={20} /> My Physical Card
            <i className="ri-arrow-down-s-line" style={{ marginLeft: 'auto', color: 'var(--color-icon-soft)', fontSize: 20 }} aria-hidden="true" />
          </div>
          <div className="premui-w-transfer-amt">
            <span className="premui-w-label-sm">Enter Amount</span>
            <span className="premui-w-xchg-value">$0.00</span>
          </div>
          <div className="premui-w-transfer-avail">Available: $16,058.94</div>
        </div>
        <button className="premui-w-fullbtn premui-w-comment-btn" type="button" disabled style={{ marginTop: 'var(--spacing-12)', opacity: 0.5 }}>
          <i className="ri-add-line" aria-hidden="true" />
          Save a New Action
        </button>
      </>
    )}
  </WidgetCard>
);
