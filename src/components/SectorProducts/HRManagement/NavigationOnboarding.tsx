import React from 'react';
import './navigation-onboarding.css';
import { Button } from '../../Button/Button';
import { CompactButton } from '../../CompactButton/CompactButton';

export interface OnboardingStep {
  label: string;
}

export interface NavigationOnboardingProps {
  /** Brand logo slot (defaults to a blue mark). */
  logo?: React.ReactNode;
  /** When provided, renders the numbered step indicator in the center. */
  steps?: OnboardingStep[];
  /** 1-based index of the active step. */
  activeStep?: number;
  /** Shows the "Need help? Contact Us" cluster on the right (when there are no steps). */
  showHelp?: boolean;
  onContact?: () => void;
  onClose?: () => void;
  className?: string;
}

const DefaultLogo = () => (
  <span className="premui-onb-logo" aria-hidden="true"><i className="ri-shapes-fill" /></span>
);

/**
 * Navigation Onboarding — the top bar for a multi-step onboarding flow: a brand
 * logo, an optional numbered step indicator (Personal → Role → Position →
 * Password → Summary), a "Need help?" cluster, and a close button. Ported from
 * Figma node 3903:28827.
 */
export const NavigationOnboarding = ({
  logo,
  steps,
  activeStep = 1,
  showHelp = true,
  onContact,
  onClose,
  className = '',
}: NavigationOnboardingProps) => (
  <div className={`premui-onb ${className}`}>
    <div className="premui-onb-logo-slot">{logo ?? <DefaultLogo />}</div>

    {steps && steps.length > 0 && (
      <div className="premui-onb-steps">
        {steps.map((s, i) => {
          const n = i + 1;
          const active = n === activeStep;
          return (
            <React.Fragment key={s.label}>
              {i > 0 && <i className="ri-arrow-right-s-line premui-onb-sep" aria-hidden="true" />}
              <span className="premui-onb-step" data-active={active || undefined}>
                <span className="premui-onb-step-num">{n}</span>
                <span className="premui-onb-step-label">{s.label}</span>
              </span>
            </React.Fragment>
          );
        })}
      </div>
    )}

    <div className="premui-onb-right">
      {(!steps || steps.length === 0) && showHelp && (
        <>
          <span className="premui-onb-help">Need help?</span>
          <Button type="neutral" style="stroke" size="sm" leftIcon="customer-service-2-line" onClick={onContact}>
            Contact Us
          </Button>
        </>
      )}
      <CompactButton icon="close-line" style="ghost" size="md" ariaLabel="Close" onClick={onClose} />
    </div>
  </div>
);
