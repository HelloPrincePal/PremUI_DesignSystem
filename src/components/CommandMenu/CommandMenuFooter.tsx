import React from 'react';
import './command-menu.css';
import { LinkButton } from '../LinkButton/LinkButton';

export interface CommandMenuFooterProps {
  helpText?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const CommandMenuFooter = ({
  helpText = "Not what you're looking for? Try the",
  linkLabel = 'Help Center',
  onLinkClick,
  className = '',
}: CommandMenuFooterProps) => {
  return (
    <div className={`premui-command-footer ${className}`}>
      <span className="premui-command-footer-hint">
        <span className="premui-command-shortcut-icon">
          <i className="ri-arrow-up-line" aria-hidden="true" />
        </span>
        <span className="premui-command-shortcut-icon">
          <i className="ri-arrow-down-line" aria-hidden="true" />
        </span>
        <span className="premui-command-footer-label">Navigate</span>
      </span>

      <span className="premui-command-footer-hint">
        <span className="premui-command-shortcut-icon">
          <i className="ri-corner-down-left-line" aria-hidden="true" />
        </span>
        <span className="premui-command-footer-label">Select</span>
      </span>

      <span className="premui-command-footer-help">
        <span className="premui-command-footer-label">{helpText}</span>
        <LinkButton style="primary" size="sm" onClick={onLinkClick}>
          {linkLabel}
        </LinkButton>
      </span>
    </div>
  );
};
