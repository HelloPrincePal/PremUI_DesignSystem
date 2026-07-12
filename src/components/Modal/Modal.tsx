import React, { useEffect } from 'react';
import './modal.css';
import { ModalOverlay } from './ModalOverlay';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  /** Modal card width in px */
  width?: number;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export const Modal = ({
  open,
  onClose,
  children,
  width = 440,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
}: ModalProps) => {
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="premui-modal-root">
      <ModalOverlay onClick={closeOnOverlayClick ? onClose : undefined} />
      <div className={`premui-modal-card ${className}`} style={{ width }} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
};
