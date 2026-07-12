import React from 'react';
import './modal.css';
import { Button } from '../Button/Button';
import { CheckboxLabel } from '../Checkbox/CheckboxLabel';
import { Switch } from '../Switch/Switch';
import { LinkButton } from '../LinkButton/LinkButton';
import { StepperDots } from '../Drawer/StepperDots';

export type ModalFooterType = 'basic' | 'stretch' | 'checkbox' | 'information' | 'toggle' | 'stepper' | 'link-button';

export interface ModalFooterProps {
  type?: ModalFooterType;
  /** Shows the Cancel button alongside Continue. When false, only Continue renders. */
  doubleButton?: boolean;
  cancelLabel?: string;
  continueLabel?: string;
  onCancel?: () => void;
  onContinue?: () => void;
  /** Label for the "checkbox" type's CheckboxLabel */
  checkboxLabel?: string;
  /** Label for the "toggle" type's Switch */
  switchLabel?: string;
  /** Label for the "information" type's text */
  infoLabel?: string;
  /** Controls the checkbox ("checkbox" type) or switch ("toggle" type) */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Label for the "link-button" type */
  linkLabel?: string;
  onLinkClick?: () => void;
  /** 1-indexed active dot for the "stepper" type (out of 3) */
  activeStep?: number;
  className?: string;
}

export const ModalFooter = ({
  type = 'basic',
  doubleButton = true,
  cancelLabel = 'Cancel',
  continueLabel = 'Continue',
  onCancel,
  onContinue,
  checkboxLabel = "Don't show it again",
  switchLabel = 'Remain anonymous',
  infoLabel = 'Read before proceeding.',
  checked = false,
  onCheckedChange,
  linkLabel = 'Link Button',
  onLinkClick,
  activeStep = 1,
  className = '',
}: ModalFooterProps) => {
  const cancelButton = doubleButton && (
    <Button type="neutral" style="stroke" size="sm" onClick={onCancel}>
      {cancelLabel}
    </Button>
  );
  const continueButton = (
    <Button type="primary" style="filled" size="sm" onClick={onContinue}>
      {continueLabel}
    </Button>
  );

  const isBasicOrStretch = type === 'basic' || type === 'stretch';

  return (
    <div className={`premui-modal-footer ${className}`} data-type={type}>
      {isBasicOrStretch && (
        <div className="premui-modal-footer-actions" data-justify={type === 'stretch' ? 'stretch' : 'end'}>
          {cancelButton}
          {continueButton}
        </div>
      )}
      {type === 'checkbox' && (
        <>
          <CheckboxLabel label={checkboxLabel} checked={checked} onChange={onCheckedChange} />
          <div className="premui-modal-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'information' && (
        <>
          <div className="premui-modal-footer-info">
            <i className="ri-information-fill" aria-hidden="true" />
            <span>{infoLabel}</span>
          </div>
          <div className="premui-modal-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'toggle' && (
        <>
          <div className="premui-modal-footer-switch-label">
            <Switch checked={checked} onChange={onCheckedChange} />
            <span>{switchLabel}</span>
          </div>
          <div className="premui-modal-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'stepper' && (
        <>
          <StepperDots active={activeStep} />
          <div className="premui-modal-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'link-button' && (
        <>
          <LinkButton style="gray" size="sm" underline onClick={onLinkClick}>
            {linkLabel}
          </LinkButton>
          <div className="premui-modal-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
    </div>
  );
};
