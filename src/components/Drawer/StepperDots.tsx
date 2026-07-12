import React from 'react';
import './drawer.css';

export interface StepperDotsProps {
  /** Total number of dots */
  count?: number;
  /** 1-indexed active dot */
  active?: number;
  className?: string;
}

export const StepperDots = ({ count = 3, active = 1, className = '' }: StepperDotsProps) => (
  <div className={`premui-stepper-dots ${className}`} role="progressbar" aria-valuenow={active} aria-valuemin={1} aria-valuemax={count}>
    {Array.from({ length: count }, (_, i) => (
      <span key={i} className="premui-stepper-dot" data-active={i + 1 === active || undefined} />
    ))}
  </div>
);
