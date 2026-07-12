import React from 'react';
import './filter.css';
import { DrawerFooter } from '../Drawer/DrawerFooter';

export interface VerticalFilterFooterProps {
  clearLabel?: string;
  applyLabel?: string;
  onClear?: () => void;
  onApply?: () => void;
  className?: string;
}

export const VerticalFilterFooter = ({
  clearLabel = 'Clear',
  applyLabel = 'Apply',
  onClear,
  onApply,
  className = '',
}: VerticalFilterFooterProps) => (
  <DrawerFooter
    type="stretch"
    cancelLabel={clearLabel}
    continueLabel={applyLabel}
    onCancel={onClear}
    onContinue={onApply}
    className={`premui-vertical-filter-footer ${className}`}
  />
);
