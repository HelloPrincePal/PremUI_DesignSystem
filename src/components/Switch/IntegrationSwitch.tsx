import React from 'react';
import './switch.css';
import { Switch } from './Switch';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

export type IntegrationSwitchAlignment = 'horizontal' | 'vertical';
export type IntegrationSwitchStyle = 'card' | 'list';

export interface IntegrationSwitchProps {
  /** Brand/integration logo slot — defaults to a generic plug icon */
  leading?: React.ReactNode;
  title?: string;
  description?: string;
  /** Shows a "NEW" badge next to the title */
  badge?: boolean;
  alignment?: IntegrationSwitchAlignment;
  style?: IntegrationSwitchStyle;
  showManageButton?: boolean;
  manageLabel?: string;
  onManageClick?: () => void;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  showToggle?: boolean;
  className?: string;
}

export const IntegrationSwitch = ({
  leading,
  title = 'Microsoft Office 365',
  description = 'Seamless collaboration and document management.',
  badge = true,
  alignment = 'horizontal',
  style = 'card',
  showManageButton = true,
  manageLabel = 'Manage',
  onManageClick,
  checked = false,
  onChange,
  showToggle = true,
  className = '',
}: IntegrationSwitchProps) => (
  <div className={`premui-integration-switch ${className}`} data-alignment={alignment} data-style={style}>
    <span className="premui-integration-switch-brand">{leading ?? <i className="ri-plug-line" aria-hidden="true" />}</span>
    <div className="premui-integration-switch-content">
      <div className="premui-integration-switch-title">
        <span className="premui-integration-switch-label">{title}</span>
        {badge && (
          <Badge color="blue" style="light" size="sm">
            NEW
          </Badge>
        )}
      </div>
      <p className="premui-integration-switch-description">{description}</p>
    </div>
    {showManageButton && (
      <Button type="neutral" style="stroke" size="sm" leftIcon="settings-2-line" onClick={onManageClick} className="premui-integration-switch-manage">
        {manageLabel}
      </Button>
    )}
    {showToggle && (
      <Switch checked={checked} onChange={onChange} className="premui-integration-switch-toggle" />
    )}
  </div>
);
