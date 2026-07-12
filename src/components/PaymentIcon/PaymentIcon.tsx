import React from 'react';
import './payment-icon.css';

export type PaymentIconType =
  | 'water'
  | 'gas'
  | 'electricity'
  | 'donate'
  | 'internet'
  | 'phone'
  | 'rent'
  | 'tax';

const PAYMENT_ICON_MAP: Record<PaymentIconType, { icon: string; color: string }> = {
  water: { icon: 'drop-fill', color: 'teal' },
  gas: { icon: 'fire-fill', color: 'red' },
  electricity: { icon: 'lightbulb-flash-fill', color: 'yellow' },
  donate: { icon: 'hand-heart-fill', color: 'pink' },
  internet: { icon: 'wifi-fill', color: 'blue' },
  phone: { icon: 'cellphone-fill', color: 'orange' },
  rent: { icon: 'home-smile-fill', color: 'green' },
  tax: { icon: 'file-list-fill', color: 'purple' },
};

export interface PaymentIconProps {
  type?: PaymentIconType;
  className?: string;
}

export const PaymentIcon = ({ type = 'water', className = '' }: PaymentIconProps) => {
  const { icon, color } = PAYMENT_ICON_MAP[type];
  return (
    <span className={`premui-payment-icon ${className}`} data-color={color}>
      <i className={`ri-${icon}`} aria-hidden="true" />
    </span>
  );
};
