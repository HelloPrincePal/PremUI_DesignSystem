import React from 'react';
import './radio.css';
import { Radio } from './Radio';
import { Badge } from '../Badge/Badge';

export interface RadioCardProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: string;
  /** Text for the "NEW"-style badge — omitted when not provided */
  badge?: string;
  /** Leading visual — an icon, Avatar, or brand/company/card-provider logo */
  leading?: React.ReactNode;
  className?: string;
}

export const RadioCard = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  sublabel,
  description,
  badge,
  leading,
  className = '',
}: RadioCardProps) => {
  return (
    <button
      type="button"
      className={`premui-radio-card ${className}`}
      data-checked={checked || undefined}
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onChange?.(!checked)}
    >
      {leading && <span className="premui-radio-card-leading">{leading}</span>}
      <div className="premui-radio-card-content">
        <div className="premui-radio-card-title">
          <span className="premui-radio-card-label">{label}</span>
          {sublabel && <span className="premui-radio-card-sublabel">{sublabel}</span>}
          {badge && (
            <Badge color="blue" style={disabled ? 'stroke' : 'light'} size="sm">
              {badge}
            </Badge>
          )}
        </div>
        {description && <p className="premui-radio-card-description">{description}</p>}
      </div>
      <Radio checked={checked} disabled={disabled} decorative className="premui-radio-card-radio" />
    </button>
  );
};
