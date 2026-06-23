import React from 'react';
import './alert.css';
import { LinkButton } from '../LinkButton/LinkButton';
import type { LinkButtonStyle, LinkButtonSize } from '../LinkButton/LinkButton';

export type AlertStatus = 'error' | 'warning' | 'success' | 'information' | 'feature';
export type AlertStyle = 'filled' | 'light' | 'lighter' | 'stroke';
export type AlertSize = 'xs' | 'sm' | 'lg';

export interface AlertProps {
  /** Semantic intent — drives background color and icon */
  status?: AlertStatus;
  /** Visual style variant */
  style?: AlertStyle;
  /** xs = 32px inline · sm = 36px inline · lg = full with description + actions */
  size?: AlertSize;
  /** Required: the main alert message / title */
  title: string;
  /** Optional description text — only visible at size="lg" */
  description?: string;
  /** Primary action link label */
  primaryAction?: string;
  /** Secondary action link label */
  secondaryAction?: string;
  /** Called when primary action is clicked */
  onPrimaryAction?: () => void;
  /** Called when secondary action is clicked */
  onSecondaryAction?: () => void;
  /** Show the status icon on the left */
  showIcon?: boolean;
  /** Show the dismiss × button */
  showDismiss?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  // ── LinkButton Passthrough Props ──
  linkStyle?: LinkButtonStyle;
  linkSize?: LinkButtonSize;
  linkUnderline?: boolean;
  linkLeftIcon?: string | null;
  linkRightIcon?: string | null;
  linkDisabled?: boolean;
  className?: string;
}

const STATUS_ICONS: Record<AlertStatus, string> = {
  error: 'ri-error-warning-fill',
  warning: 'ri-alert-fill',
  success: 'ri-checkbox-circle-fill',
  information: 'ri-information-fill',
  feature: 'ri-sparkling-fill',
};

export const Alert = ({
  status = 'information',
  style = 'stroke',
  size = 'lg',
  title,
  description,
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  showIcon = true,
  showDismiss = false,
  onDismiss,
  linkStyle,
  linkSize,
  linkUnderline,
  linkLeftIcon,
  linkRightIcon,
  linkDisabled,
  className = '',
}: AlertProps) => {
  const hasActions = size === 'lg' && (primaryAction || secondaryAction);

  return (
    <div
      className={`premui-alert premui-alert-${size} ${className}`}
      data-status={status}
      data-style={style}
      role="alert"
    >
      {showIcon && (
        <span className="premui-alert-icon" aria-hidden="true">
          <i className={STATUS_ICONS[status]} />
        </span>
      )}

      {size === 'lg' ? (
        <div className="premui-alert-content">
          <div className="premui-alert-text">
            <p className="premui-alert-title">{title}</p>
            {description && (
              <p className="premui-alert-description">{description}</p>
            )}
          </div>

          {hasActions && (
            <div className="premui-alert-actions">
              {primaryAction && (
                <LinkButton
                  style={linkStyle || "modifiable"}
                  size={linkSize || "md"}
                  underline={linkUnderline ?? true}
                  leftIcon={linkLeftIcon}
                  rightIcon={linkRightIcon}
                  disabled={linkDisabled}
                  onClick={onPrimaryAction}
                >
                  {primaryAction}
                </LinkButton>
              )}
              {primaryAction && secondaryAction && (
                <span className="premui-alert-separator" aria-hidden="true">∙</span>
              )}
              {secondaryAction && (
                <LinkButton
                  style="modifiable"
                  size="md"
                  underline
                  onClick={onSecondaryAction}
                >
                  {secondaryAction}
                </LinkButton>
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="premui-alert-inline-text">{title}</p>
      )}

      {size !== 'lg' && primaryAction && (
        <LinkButton
          style={linkStyle || "modifiable"}
          size={linkSize || (size === 'xs' ? 'sm' : 'md')}
          underline={linkUnderline ?? true}
          leftIcon={linkLeftIcon}
          rightIcon={linkRightIcon}
          disabled={linkDisabled}
          onClick={onPrimaryAction}
        >
          {primaryAction}
        </LinkButton>
      )}

      {showDismiss && (
        <button
          type="button"
          className="premui-alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
