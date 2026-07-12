import React from 'react';
import './modal.css';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import type { KeyIconColor } from '../KeyIcon/KeyIcon';
import { CompactButton } from '../CompactButton/CompactButton';

export type ModalHeaderType = 'basic' | 'left-icon' | 'error' | 'warning' | 'success' | 'information';
export type ModalHeaderSize = 'md' | 'sm';

export const MODAL_STATUS_ICON: Record<Exclude<ModalHeaderType, 'basic' | 'left-icon'>, { icon: string; color: KeyIconColor }> = {
  error: { icon: 'error-warning-fill', color: 'red' },
  warning: { icon: 'alert-fill', color: 'orange' },
  success: { icon: 'checkbox-circle-fill', color: 'green' },
  information: { icon: 'information-fill', color: 'blue' },
};

export interface ModalHeaderProps {
  type?: ModalHeaderType;
  /** md = 80px, with icon circle + description · sm = 56px, plain icon + single-line title */
  size?: ModalHeaderSize;
  title?: string;
  /** Only rendered at size="md" */
  description?: string;
  /** Icon slot for the "left-icon" type — defaults to a settings icon */
  leading?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export const ModalHeader = ({
  type = 'basic',
  size = 'md',
  title = 'Insert Modal Title Here',
  description = 'Please insert modal description here.',
  leading,
  dismissible = true,
  onDismiss,
  className = '',
}: ModalHeaderProps) => {
  const isMd = size === 'md';
  const hasIcon = type !== 'basic';
  const status = type === 'left-icon' ? null : MODAL_STATUS_ICON[type as Exclude<ModalHeaderType, 'basic' | 'left-icon'>];

  const icon = hasIcon
    ? isMd
      ? leading ?? (
          <KeyIcon
            size="md"
            style={type === 'left-icon' ? 'stroke' : 'lighter'}
            color={status?.color ?? 'gray'}
            icon={status?.icon ?? 'settings-2-line'}
          />
        )
      : leading ?? (
          <i
            className={`ri-${status?.icon ?? 'settings-2-line'} premui-modal-header-icon-plain`}
            style={{ color: status ? undefined : 'var(--color-icon-sub)' }}
            data-color={status?.color}
            aria-hidden="true"
          />
        )
    : null;

  return (
    <div className={`premui-modal-header ${className}`} data-size={size}>
      {icon}
      <div className="premui-modal-header-text">
        <p className="premui-modal-header-title">{title}</p>
        {isMd && description && <p className="premui-modal-header-description">{description}</p>}
      </div>
      {dismissible && (
        <CompactButton icon="close-line" style="ghost" size="lg" onClick={onDismiss} ariaLabel="Dismiss" className="premui-modal-header-dismiss" />
      )}
    </div>
  );
};
