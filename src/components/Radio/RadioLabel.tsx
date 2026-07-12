import React from 'react';
import './radio.css';
import { Radio } from './Radio';
import { Badge } from '../Badge/Badge';
import { LinkButton } from '../LinkButton/LinkButton';

export interface RadioLabelProps {
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
  /** Puts the radio after the text instead of before it */
  flip?: boolean;
  className?: string;
}

export const RadioLabel = ({
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
}: RadioLabelProps) => {
  const toggle = () => !disabled && onChange?.(!checked);

  const radio = (
    <Radio
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      aria-label={typeof label === 'string' ? label : undefined}
    />
  );

  const title = (
    <div className="premui-radio-label-title" onClick={toggle}>
      <span className="premui-radio-label-text">{label}</span>
      {sublabel && <span className="premui-radio-label-sublabel">{sublabel}</span>}
      {badge && (
        <Badge color="blue" style="light" size="sm">
          {badge}
        </Badge>
      )}
    </div>
  );

  return (
    <div className={`premui-radio-label ${className}`} data-flip={flip || undefined} data-disabled={disabled || undefined}>
      {!flip && radio}
      {description ? (
        <div className="premui-radio-label-content">
          {title}
          <p className="premui-radio-label-description">{description}</p>
          {linkLabel && (
            <LinkButton style="primary" size="sm" onClick={onLinkClick}>
              {linkLabel}
            </LinkButton>
          )}
        </div>
      ) : (
        title
      )}
      {flip && radio}
    </div>
  );
};
