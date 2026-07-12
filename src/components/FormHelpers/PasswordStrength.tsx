import React from 'react';
import './form-helpers.css';

export type PasswordStrengthLevel = 'empty' | 'weak' | 'moderate' | 'strong';

export interface PasswordStrengthProps {
  /** The password value to evaluate — drives the bars/checklist genuinely, not just a display prop */
  password?: string;
  className?: string;
}

const evaluate = (password: string) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;
  const score = [hasUppercase, hasNumber, hasMinLength].filter(Boolean).length;
  const level: PasswordStrengthLevel =
    password.length === 0 ? 'empty' : score <= 1 ? 'weak' : score === 2 ? 'moderate' : 'strong';
  return { hasUppercase, hasNumber, hasMinLength, level };
};

export const PasswordStrength = ({ password = '', className = '' }: PasswordStrengthProps) => {
  const { hasUppercase, hasNumber, hasMinLength, level } = evaluate(password);
  const isEmpty = level === 'empty';

  const conditions = [
    { met: hasUppercase, label: 'At least 1 uppercase' },
    { met: hasNumber, label: 'At least 1 number' },
    { met: hasMinLength, label: 'At least 8 characters' },
  ];

  return (
    <div className={`premui-password-strength ${className}`} data-level={level}>
      <div className="premui-password-strength-bars">
        <span className="premui-password-strength-bar" data-active={level !== 'empty' || undefined} data-tier="1" />
        <span className="premui-password-strength-bar" data-active={level === 'moderate' || level === 'strong' || undefined} data-tier="2" />
        <span className="premui-password-strength-bar" data-active={level === 'strong' || undefined} data-tier="3" />
      </div>
      <p className="premui-password-strength-caption">Must contain at least;</p>
      {conditions.map((condition) => (
        <div key={condition.label} className="premui-password-strength-condition">
          <i
            className={isEmpty ? 'ri-checkbox-circle-fill' : condition.met ? 'ri-checkbox-circle-fill' : 'ri-close-circle-fill'}
            data-met={isEmpty ? undefined : condition.met || undefined}
            aria-hidden="true"
          />
          <span>{condition.label}</span>
        </div>
      ))}
    </div>
  );
};
