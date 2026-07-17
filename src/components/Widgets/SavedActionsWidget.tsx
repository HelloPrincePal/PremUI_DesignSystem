import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { SavedActionItem } from './SavedActionItem';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import type { KeyIconColor } from '../KeyIcon/KeyIcon';
import { EmptyState } from '../EmptyStates/EmptyState';

interface SavedAction {
  icon: string;
  color: KeyIconColor;
  title: string;
  subtitle: string;
  amount: string;
}

export interface SavedActionsWidgetProps {
  actions?: SavedAction[];
  empty?: boolean;
  onSeeAll?: () => void;
  onSave?: () => void;
  className?: string;
}

const DEFAULT: SavedAction[] = [
  { icon: 'home-5-fill', color: 'green', title: 'Rent Payment', subtitle: 'Monthly rent payment.', amount: '$940.00' },
  { icon: 'graduation-cap-fill', color: 'blue', title: "Natalia's Tuition", subtitle: "Nat's university fee.", amount: '$750.00' },
  { icon: 'hand-heart-fill', color: 'pink', title: 'Donation to TEMA', subtitle: 'In the name of our family.', amount: '$100.00' },
  { icon: 'fire-fill', color: 'red', title: 'Gas Bill Payment', subtitle: 'Monthly gas bill payment.', amount: '$20.00' },
];

export const SavedActionsWidget = ({
  actions = DEFAULT,
  empty = false,
  onSeeAll,
  onSave,
  className = '',
}: SavedActionsWidgetProps) => (
  <WidgetCard
    icon="flashlight-fill"
    title="Saved Actions"
    action={<WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="finance" type="Saved Actions" size={112} />
        <div className="premui-widget-empty-caption">You do not have any saved actions. Feel free to save one.</div>
        <WidgetHeaderButton icon="add-line" onClick={onSave}>Save a New Action</WidgetHeaderButton>
      </div>
    ) : (
      <>
        <div className="premui-w-txn-list">
          {actions.map((a) => (
            <SavedActionItem
              key={a.title}
              leading={<KeyIcon icon={a.icon} color={a.color} style="lighter" size="md" />}
              title={a.title}
              subtitle={a.subtitle}
              amount={a.amount}
            />
          ))}
        </div>
        <button className="premui-w-fullbtn premui-w-comment-btn" type="button" onClick={onSave} style={{ marginTop: 'var(--spacing-16)' }}>
          <i className="ri-add-line" aria-hidden="true" />
          Save a New Action
        </button>
      </>
    )}
  </WidgetCard>
);
