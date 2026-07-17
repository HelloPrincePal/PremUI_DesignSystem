import React from 'react';
import './widgets.css';

export type ContactChipState = 'default' | 'hover' | 'selected';

export interface ContactChipProps {
  name: string;
  /** 24px avatar node. */
  avatar?: React.ReactNode;
  selected?: boolean;
  /** Force a visual state for design QA. */
  state?: ContactChipState;
  onClick?: () => void;
  className?: string;
}

/**
 * My Contacts [Quick Transfer] — a contact chip (avatar + name) with Default,
 * Hover and Selected states. Ported from Figma node 3948:25319.
 */
export const ContactChip = ({ name, avatar, selected = false, state, onClick, className = '' }: ContactChipProps) => (
  <button
    type="button"
    className={`premui-w-contact-chip ${className}`}
    data-selected={(state ? state === 'selected' : selected) || undefined}
    data-state={state}
    onClick={onClick}
  >
    {avatar}
    {name}
    {(state === 'selected' || selected) && <i className="ri-check-line premui-w-contact-check" aria-hidden="true" />}
  </button>
);
