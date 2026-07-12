import React from 'react';
import './banner.css';
import { LinkButton } from '../LinkButton/LinkButton';

export type BannerStatus = 'error' | 'warning' | 'success' | 'information' | 'feature';
export type BannerStyle = 'filled' | 'light' | 'lighter' | 'stroke';

export interface BannerProps {
  /** Semantic intent — drives background color and icon */
  status?: BannerStatus;
  /** Visual style variant */
  style?: BannerStyle;
  /** Required: the main banner message */
  title: string;
  /** Optional description, separated from the title by a dot */
  description?: string;
  /** Show the status icon on the left */
  showIcon?: boolean;
  /** Label for the trailing action link — omit to hide it */
  action?: string;
  /** Called when the action link is clicked */
  onAction?: () => void;
  /** Show the dismiss × button */
  showDismiss?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  className?: string;
}

const STATUS_ICONS: Record<BannerStatus, string> = {
  error: 'ri-error-warning-fill',
  warning: 'ri-alert-fill',
  success: 'ri-checkbox-circle-fill',
  information: 'ri-information-fill',
  feature: 'ri-magic-fill',
};

export const Banner = ({
  status = 'information',
  style = 'filled',
  title,
  description,
  showIcon = true,
  action,
  onAction,
  showDismiss = true,
  onDismiss,
  className = '',
}: BannerProps) => {
  return (
    <div
      className={`premui-banner ${className}`}
      data-status={status}
      data-style={style}
      role="status"
    >
      {showIcon && (
        <span className="premui-banner-icon" aria-hidden="true">
          <i className={STATUS_ICONS[status]} />
        </span>
      )}

      <div className="premui-banner-text">
        <p className="premui-banner-title">{title}</p>
        {description && (
          <>
            <span className="premui-banner-separator" aria-hidden="true">∙</span>
            <p className="premui-banner-description">{description}</p>
          </>
        )}
      </div>

      {action && (
        <LinkButton style="modifiable" size="md" underline onClick={onAction}>
          {action}
        </LinkButton>
      )}

      {showDismiss && (
        <button
          type="button"
          className="premui-banner-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss banner"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
