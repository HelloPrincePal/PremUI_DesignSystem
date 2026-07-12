import React from 'react';
import './progress-bar.css';
import { ProgressBar } from './ProgressBar';
import type { ProgressBarColor } from './ProgressBar';
import { LinkButton } from '../LinkButton/LinkButton';

export type ProgressBarLabelType = 'on-top' | 'on-right';

export interface ProgressBarLabelProps {
  type?: ProgressBarLabelType;
  percentage?: number;
  color?: ProgressBarColor;
  showPercentage?: boolean;
  /** Only rendered at type="on-top" */
  title?: string;
  /** Only rendered at type="on-top" and showBottom */
  description?: string;
  showBottom?: boolean;
  showLinkButton?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const ProgressBarLabel = ({
  type = 'on-top',
  percentage = 80,
  color = 'blue',
  showPercentage = true,
  title = 'Data Storage',
  description = 'to unlock unlimited date storage.',
  showBottom = true,
  showLinkButton = true,
  linkLabel = 'Upgrade',
  onLinkClick,
  className = '',
}: ProgressBarLabelProps) => {
  const isOnTop = type === 'on-top';

  return (
    <div className={`premui-progress-bar-label ${className}`} data-type={type}>
      {isOnTop && (
        <div className="premui-progress-bar-label-header">
          <span className="premui-progress-bar-label-title">{title}</span>
          {showPercentage && <span className="premui-progress-bar-label-percentage">{percentage}%</span>}
        </div>
      )}
      <ProgressBar percentage={percentage} color={color} className="premui-progress-bar-label-bar" />
      {!isOnTop && showPercentage && (
        <span className="premui-progress-bar-label-percentage">{percentage}%</span>
      )}
      {isOnTop && showBottom && (
        <div className="premui-progress-bar-label-footer">
          {showLinkButton && (
            <LinkButton style="primary" size="sm" underline onClick={onLinkClick}>
              {linkLabel}
            </LinkButton>
          )}
          <span className="premui-progress-bar-label-description">{description}</span>
        </div>
      )}
    </div>
  );
};
