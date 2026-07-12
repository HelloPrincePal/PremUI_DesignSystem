import React from 'react';
import './progress-bar.css';

export type ProgressBarColor = 'blue' | 'red' | 'orange' | 'green';

export interface ProgressBarProps {
  /** 0–100 */
  percentage?: number;
  color?: ProgressBarColor;
  className?: string;
}

export const ProgressBar = ({ percentage = 10, color = 'blue', className = '' }: ProgressBarProps) => (
  <div className={`premui-progress-bar ${className}`} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
    <div
      className="premui-progress-bar-fill"
      data-color={color}
      style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
    />
  </div>
);
