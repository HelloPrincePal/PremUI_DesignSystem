import React from 'react';
import './switch.css';
import { Switch } from './Switch';
import { Badge } from '../Badge/Badge';

export interface SwitchCardProps {
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

export const SwitchCard = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  sublabel,
  description,
  badge,
  leading,
  className = '',
}: SwitchCardProps) => {
  return (
    <button
      type="button"
      className={`premui-switch-card ${className}`}
      data-checked={checked || undefined}
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onChange?.(!checked)}
    >
      {leading && <span className="premui-switch-card-leading">{leading}</span>}
      <div className="premui-switch-card-content">
        <div className="premui-switch-card-title">
          <span className="premui-switch-card-label">{label}</span>
          {sublabel && <span className="premui-switch-card-sublabel">{sublabel}</span>}
          {badge && (
            <Badge color="blue" style={disabled ? 'stroke' : 'light'} size="sm">
              {badge}
            </Badge>
          )}
        </div>
        {description && <p className="premui-switch-card-description">{description}</p>}
      </div>
      <Switch checked={checked} disabled={disabled} decorative className="premui-switch-card-switch" />
    </button>
  );
};
