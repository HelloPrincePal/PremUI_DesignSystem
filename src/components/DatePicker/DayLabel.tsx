import React from 'react';
import './date-picker.css';

export interface DayLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DayLabel = ({ children, className = '' }: DayLabelProps) => (
  <span className={`premui-day-label ${className}`}>{children}</span>
);
