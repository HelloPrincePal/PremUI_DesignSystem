import React from 'react';
import './modal.css';

export interface ModalOverlayProps {
  onClick?: () => void;
  className?: string;
}

export const ModalOverlay = ({ onClick, className = '' }: ModalOverlayProps) => (
  <div className={`premui-modal-overlay ${className}`} onClick={onClick} aria-hidden="true" />
);
