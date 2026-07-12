import React from 'react';
import './drawer.css';
import { Button } from '../Button/Button';
import { CheckboxLabel } from '../Checkbox/CheckboxLabel';
import { Switch } from '../Switch/Switch';
import { LinkButton } from '../LinkButton/LinkButton';
import { StepperDots } from './StepperDots';

export type DrawerFooterType = 'stretch' | 'basic' | 'checkbox' | 'toggle' | 'stepper' | 'link-button';

export interface DrawerFooterProps {
  type?: DrawerFooterType;
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

export const DrawerFooter = ({
  type = 'stretch',
  doubleButton = true,
  cancelLabel = 'Cancel',
  continueLabel = 'Continue',
  onCancel,
  onContinue,
  checkboxLabel = "Don't show it again",
  switchLabel = 'Remember me',
  checked = false,
  onCheckedChange,
  linkLabel = 'Link Button',
  onLinkClick,
  activeStep = 1,
  className = '',
}: DrawerFooterProps) => {
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

  const isStretchOrBasic = type === 'stretch' || type === 'basic';

  return (
    <div className={`premui-drawer-footer ${className}`} data-type={type}>
      {isStretchOrBasic && (
        <div className="premui-drawer-footer-actions" data-justify={type === 'stretch' ? 'stretch' : 'end'}>
          {cancelButton}
          {continueButton}
        </div>
      )}
      {type === 'checkbox' && (
        <>
          <CheckboxLabel label={checkboxLabel} checked={checked} onChange={onCheckedChange} />
          <div className="premui-drawer-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'toggle' && (
        <>
          <div className="premui-drawer-footer-switch-label">
            <Switch checked={checked} onChange={onCheckedChange} />
            <span>{switchLabel}</span>
          </div>
          <div className="premui-drawer-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
      {type === 'stepper' && (
        <>
          <StepperDots active={activeStep} />
          <div className="premui-drawer-footer-actions" data-justify="end">
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
          <div className="premui-drawer-footer-actions" data-justify="end">
            {cancelButton}
            {continueButton}
          </div>
        </>
      )}
    </div>
  );
};
