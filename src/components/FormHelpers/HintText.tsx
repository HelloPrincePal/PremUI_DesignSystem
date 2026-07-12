import React from 'react';
import './form-helpers.css';

export type HintTextState = 'default' | 'error' | 'disabled';

export interface HintTextProps {
  children?: React.ReactNode;
  showIcon?: boolean;
  /** Icon slot — defaults to an info icon */
  leading?: React.ReactNode;
  state?: HintTextState;
  className?: string;
}

export const HintText = ({
  children = 'This is a hint text to help user.',
  showIcon = true,
  leading,
  state = 'default',
  className = '',
}: HintTextProps) => (
  <div className={`premui-hint-text ${className}`} data-state={state}>
    {showIcon && (
      <span className="premui-hint-text-icon">{leading ?? <i className="ri-information-fill" aria-hidden="true" />}</span>
    )}
    <span className="premui-hint-text-label">{children}</span>
  </div>
);
