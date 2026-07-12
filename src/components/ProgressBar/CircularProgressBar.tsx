import React from 'react';
import './progress-bar.css';

export type CircularProgressBarSize = 48 | 56 | 64 | 72 | 80;

export interface CircularProgressBarProps {
  /** 0–100 */
  percentage?: number;
  size?: CircularProgressBarSize;
  /** Shows the percentage label in the center — not rendered at size=48 regardless */
  showLabel?: boolean;
  strokeWidth?: number;
  className?: string;
}

export const CircularProgressBar = ({
  percentage = 0,
  size = 80,
  showLabel = true,
  strokeWidth = 4,
  className = '',
}: CircularProgressBarProps) => {
  const clamped = Math.min(100, Math.max(0, percentage));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - clamped / 100);
  const canShowLabel = showLabel && size >= 56;

  return (
    <div className={`premui-circular-progress ${className}`} style={{ width: size, height: size }} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="premui-circular-progress-svg">
        <circle
          className="premui-circular-progress-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className="premui-circular-progress-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {canShowLabel && (
        <span className="premui-circular-progress-label" data-size={size >= 64 ? 'lg' : 'sm'}>
          {clamped}%
        </span>
      )}
    </div>
  );
};
