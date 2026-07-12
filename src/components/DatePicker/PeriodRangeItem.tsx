import React from 'react';
import './date-picker.css';

export interface PeriodRangeItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const PeriodRangeItem = ({ children, active = false, onClick, className = '' }: PeriodRangeItemProps) => (
  <button
    type="button"
    className={`premui-period-range-item ${className}`}
    data-active={active || undefined}
    onClick={onClick}
  >
    {children}
  </button>
);
