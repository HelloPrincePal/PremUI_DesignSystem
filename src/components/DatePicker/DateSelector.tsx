import React from 'react';
import './date-picker.css';
import { CompactButton } from '../CompactButton/CompactButton';

export interface DateSelectorProps {
  label: string;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export const DateSelector = ({ label, onPrev, onNext, className = '' }: DateSelectorProps) => (
  <div className={`premui-date-selector ${className}`}>
    {onPrev && (
      <CompactButton icon="arrow-left-s-line" style="white" size="md" ariaLabel="Previous month" onClick={onPrev} />
    )}
    <span className="premui-date-selector-label">{label}</span>
    {onNext && (
      <CompactButton icon="arrow-right-s-line" style="white" size="md" ariaLabel="Next month" onClick={onNext} />
    )}
  </div>
);
