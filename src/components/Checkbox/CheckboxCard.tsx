import React from 'react';
import './checkbox.css';
import { Checkbox } from './Checkbox';
import { Badge } from '../Badge/Badge';

export interface CheckboxCardProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: string;
  /** Text for the "NEW"-style badge — omitted when not provided */
  badge?: string;
  /** Leading visual — an icon, Avatar, or brand/company logo */
  leading?: React.ReactNode;
  className?: string;
}

export const CheckboxCard = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  sublabel,
  description,
  badge,
  leading,
  className = '',
}: CheckboxCardProps) => {
  return (
    <button
      type="button"
      className={`premui-checkbox-card ${className}`}
      data-checked={checked || undefined}
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onChange?.(!checked)}
    >
      {leading && <span className="premui-checkbox-card-leading">{leading}</span>}
      <div className="premui-checkbox-card-content">
        <div className="premui-checkbox-card-title">
          <span className="premui-checkbox-card-label">{label}</span>
          {sublabel && <span className="premui-checkbox-card-sublabel">{sublabel}</span>}
          {badge && (
            <Badge color="blue" style="light" size="sm">
              {badge}
            </Badge>
          )}
        </div>
        {description && <p className="premui-checkbox-card-description">{description}</p>}
      </div>
      <Checkbox checked={checked} disabled={disabled} decorative className="premui-checkbox-card-checkbox" />
    </button>
  );
};
