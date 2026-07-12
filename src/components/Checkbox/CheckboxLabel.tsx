import React from 'react';
import './checkbox.css';
import { Checkbox } from './Checkbox';
import type { CheckboxSize } from './Checkbox';
import { Badge } from '../Badge/Badge';
import { LinkButton } from '../LinkButton/LinkButton';

export interface CheckboxLabelProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: CheckboxSize;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Text for the "NEW"-style badge — omitted when not provided */
  badge?: string;
  /** Supporting text — switches to the stacked title+description layout */
  description?: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  /** Puts the checkbox after the text instead of before it */
  flip?: boolean;
  className?: string;
}

export const CheckboxLabel = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  sublabel,
  badge,
  description,
  linkLabel,
  onLinkClick,
  flip = false,
  className = '',
}: CheckboxLabelProps) => {
  const toggle = () => !disabled && onChange?.(!checked);

  const checkbox = (
    <Checkbox
      checked={checked}
      disabled={disabled}
      size={size}
      onChange={onChange}
      aria-label={typeof label === 'string' ? label : undefined}
    />
  );

  const title = (
    <div className="premui-checkbox-label-title" onClick={toggle}>
      <span className="premui-checkbox-label-text">{label}</span>
      {sublabel && <span className="premui-checkbox-label-sublabel">{sublabel}</span>}
      {badge && (
        <Badge color="blue" style="light" size="sm">
          {badge}
        </Badge>
      )}
    </div>
  );

  return (
    <div className={`premui-checkbox-label ${className}`} data-flip={flip || undefined} data-disabled={disabled || undefined}>
      {!flip && checkbox}
      {description ? (
        <div className="premui-checkbox-label-content">
          {title}
          <p className="premui-checkbox-label-description">{description}</p>
          {linkLabel && (
            <LinkButton style="primary" size="sm" onClick={onLinkClick}>
              {linkLabel}
            </LinkButton>
          )}
        </div>
      ) : (
        title
      )}
      {flip && checkbox}
    </div>
  );
};
