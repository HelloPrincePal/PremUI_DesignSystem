import React from 'react';
import './form-helpers.css';

export interface LabelProps {
  htmlFor?: string;
  children?: React.ReactNode;
  /** Shown in parentheses next to the label, e.g. "(Optional)" */
  sublabel?: React.ReactNode;
  required?: boolean;
  showInfo?: boolean;
  onInfoClick?: () => void;
  helpLabel?: string;
  onHelpClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Label = ({
  htmlFor,
  children = 'Label',
  sublabel,
  required = false,
  showInfo = false,
  onInfoClick,
  helpLabel,
  onHelpClick,
  disabled = false,
  className = '',
}: LabelProps) => (
  <label htmlFor={htmlFor} className={`premui-form-label ${className}`} data-disabled={disabled || undefined}>
    <span className="premui-form-label-text">{children}</span>
    {required && <span className="premui-form-label-required">*</span>}
    {sublabel && <span className="premui-form-label-sublabel">{sublabel}</span>}
    {showInfo && (
      <button
        type="button"
        className="premui-form-label-info"
        onClick={onInfoClick}
        aria-label="More information"
        tabIndex={disabled ? -1 : 0}
      >
        <i className="ri-information-fill" aria-hidden="true" />
      </button>
    )}
    {helpLabel && (
      <button type="button" className="premui-form-label-help" onClick={onHelpClick} tabIndex={disabled ? -1 : 0}>
        {helpLabel}
      </button>
    )}
  </label>
);
