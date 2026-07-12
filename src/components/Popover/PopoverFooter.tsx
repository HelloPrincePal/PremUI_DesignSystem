import React from 'react';
import './popover.css';
import { Button } from '../Button/Button';
import { StepperDots } from '../Drawer/StepperDots';

export type PopoverFooterType = 'stretch' | 'stepper' | 'text-stepper';

export interface PopoverFooterProps {
  type?: PopoverFooterType;
  doubleButton?: boolean;
  backLabel?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  /** "stepper"/"text-stepper" types */
  currentStep?: number;
  totalSteps?: number;
  className?: string;
}

export const PopoverFooter = ({
  type = 'stretch',
  doubleButton = true,
  backLabel = 'Back',
  nextLabel = 'Next',
  onBack,
  onNext,
  currentStep = 1,
  totalSteps = 4,
  className = '',
}: PopoverFooterProps) => {
  const isFixedWidth = type !== 'stretch';

  const backButton = doubleButton && (
    <Button type="neutral" style="stroke" size="sm" onClick={onBack} className={isFixedWidth ? 'premui-popover-footer-btn' : undefined}>
      {backLabel}
    </Button>
  );
  const nextButton = (
    <Button type="primary" style="filled" size="sm" onClick={onNext} className={isFixedWidth ? 'premui-popover-footer-btn' : undefined}>
      {nextLabel}
    </Button>
  );

  return (
    <div className={`premui-popover-footer ${className}`} data-type={type}>
      {type === 'text-stepper' && (
        <span className="premui-popover-footer-step-text">
          Step {currentStep} of {totalSteps}
        </span>
      )}
      {type === 'stepper' && <StepperDots active={currentStep} count={totalSteps} />}
      <div className="premui-popover-footer-actions" data-justify={type === 'stretch' ? 'stretch' : 'end'}>
        {backButton}
        {nextButton}
      </div>
    </div>
  );
};
