import React from 'react';
import './modal.css';
import { ModalFooter } from './ModalFooter';
import type { ModalFooterProps, ModalFooterType } from './ModalFooter';
import { MODAL_STATUS_ICON } from './ModalHeader';

export type StatusModalType = 'error' | 'warning' | 'success' | 'information';
export type StatusModalAlignment = 'horizontal' | 'vertical';

export interface StatusModalProps {
  type?: StatusModalType;
  /** horizontal = icon beside left-aligned text · vertical = icon above centered text */
  alignment?: StatusModalAlignment;
  title?: string;
  description?: string;
  /** Footer layout — defaults to "checkbox" ("Don't show it again"), matching the Figma reference */
  footerType?: ModalFooterType;
  footerProps?: Omit<ModalFooterProps, 'type'>;
  className?: string;
}

export const StatusModal = ({
  type = 'error',
  alignment = 'horizontal',
  title = 'Insert Status Modal Title',
  description = 'Insert your status modal description here. It would look better as two lines of text.',
  footerType = 'checkbox',
  footerProps,
  className = '',
}: StatusModalProps) => {
  const status = MODAL_STATUS_ICON[type];

  return (
    <div className={`premui-status-modal ${className}`}>
      <div className="premui-status-modal-content" data-alignment={alignment}>
        <span className="premui-status-modal-icon" data-color={status.color}>
          <i className={`ri-${status.icon}`} aria-hidden="true" />
        </span>
        <div className="premui-status-modal-text">
          <p className="premui-status-modal-title">{title}</p>
          <p className="premui-status-modal-description">{description}</p>
        </div>
      </div>
      <ModalFooter type={footerType} {...footerProps} />
    </div>
  );
};
