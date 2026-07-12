import React from 'react';
import './popover.css';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { CompactButton } from '../CompactButton/CompactButton';

export type PopoverPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'right-start'
  | 'right'
  | 'right-end';

export interface PopoverProps {
  placement?: PopoverPlacement;
  /** Leading icon slot — defaults to a KeyIcon with a user icon */
  leading?: React.ReactNode;
  title?: string;
  description?: string;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  showTail?: boolean;
  /** Footer slot — typically a <PopoverFooter /> */
  footer?: React.ReactNode;
  width?: number;
  className?: string;
}

export const Popover = ({
  placement = 'top-start',
  leading,
  title = 'Insert Popover',
  description = 'Insert popover description here. It would look much better as three lines of text.',
  showIcon = true,
  dismissible = true,
  onDismiss,
  showTail = true,
  footer,
  width = 320,
  className = '',
}: PopoverProps) => (
  <div className={`premui-popover ${className}`} data-placement={placement} style={{ width }}>
    {showTail && <span className="premui-popover-tail" aria-hidden="true" />}
    <div className="premui-popover-content" data-has-footer={!!footer || undefined}>
      {showIcon && (
        <span className="premui-popover-icon">
          {leading ?? <KeyIcon size="lg" color="gray" style="stroke" icon="user-6-line" />}
        </span>
      )}
      <div className="premui-popover-text">
        <p className="premui-popover-title">{title}</p>
        <p className="premui-popover-description">{description}</p>
      </div>
      {dismissible && (
        <CompactButton icon="close-line" style="ghost" size="lg" onClick={onDismiss} ariaLabel="Dismiss" className="premui-popover-dismiss" />
      )}
    </div>
    {footer}
  </div>
);
