import React from 'react';
import './table.css';

export type SortDirection = 'none' | 'asc' | 'desc';

export interface SortingIconProps {
  direction?: SortDirection;
  className?: string;
}

export const SortingIcon = ({ direction = 'none', className = '' }: SortingIconProps) => (
  <i
    className={`premui-sorting-icon ${direction === 'asc' ? 'ri-arrow-up-s-line' : direction === 'desc' ? 'ri-arrow-down-s-line' : 'ri-expand-up-down-line'} ${className}`}
    data-active={direction !== 'none' || undefined}
    aria-hidden="true"
  />
);
