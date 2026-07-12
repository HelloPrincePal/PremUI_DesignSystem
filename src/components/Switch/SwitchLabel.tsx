import React from 'react';
import './switch.css';
import { Switch } from './Switch';
import { Badge } from '../Badge/Badge';
import { LinkButton } from '../LinkButton/LinkButton';

export interface SwitchLabelProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Text for the "NEW"-style badge — omitted when not provided */
  badge?: string;
  /** Supporting text — switches to the stacked title+description layout */
  description?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  /** Puts the switch after the text instead of before it */
  flip?: boolean;
  className?: string;
}

export const SwitchLabel = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  sublabel,
  badge,
  description,
  linkLabel,
  onLinkClick,
  flip = false,
  className = '',
}: SwitchLabelProps) => {
  const toggle = () => !disabled && onChange?.(!checked);

  const toggleControl = <Switch checked={checked} disabled={disabled} onChange={onChange} ariaLabel={typeof label === 'string' ? label : 'Toggle'} />;

  const title = (
    <div className="premui-switch-label-title" onClick={toggle}>
      <span className="premui-switch-label-text">{label}</span>
      {sublabel && <span className="premui-switch-label-sublabel">{sublabel}</span>}
      {badge && (
        <Badge color="blue" style="light" size="sm">
          {badge}
        </Badge>
      )}
    </div>
  );

  return (
    <div className={`premui-switch-label ${className}`} data-flip={flip || undefined} data-disabled={disabled || undefined}>
      {!flip && toggleControl}
      {description ? (
        <div className="premui-switch-label-content">
          {title}
          <p className="premui-switch-label-description">{description}</p>
          {linkLabel && (
            <LinkButton style="primary" size="sm" onClick={onLinkClick}>
              {linkLabel}
            </LinkButton>
          )}
        </div>
      ) : (
        title
      )}
      {flip && toggleControl}
    </div>
  );
};
