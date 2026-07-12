import React from 'react';
import './content-item.css';
import { Badge } from '../Badge/Badge';
import { Switch } from '../Switch/Switch';

export type ContentLabelSize = 'md' | 'lg';

export interface ContentLabelProps {
  /** Leading visual — an icon (e.g. wrapped in KeyIcon), Avatar, or brand/company logo */
  leading?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  /** Shows a "NEW" badge next to the label */
  badge?: boolean;
  showToggle?: boolean;
  toggled?: boolean;
  onToggleChange?: (toggled: boolean) => void;
  /** md = 40px leading slot · lg = 48px leading slot */
  size?: ContentLabelSize;
  className?: string;
}

export const ContentLabel = ({
  leading,
  label = 'Label',
  sublabel = '(Sublabel)',
  description = 'Insert the content description here.',
  badge = false,
  showToggle = false,
  toggled = false,
  onToggleChange,
  size = 'md',
  className = '',
}: ContentLabelProps) => (
  <div className={`premui-content-label ${className}`} data-size={size}>
    {leading && <span className="premui-content-label-leading">{leading}</span>}
    <div className="premui-content-label-text">
      <div className="premui-content-label-title">
        <span className="premui-content-label-label">{label}</span>
        {sublabel && <span className="premui-content-label-sublabel">{sublabel}</span>}
      </div>
      {description && <p className="premui-content-label-description">{description}</p>}
    </div>
    {badge && (
      <Badge color="blue" style="light" size="sm">
        NEW
      </Badge>
    )}
    {showToggle && <Switch checked={toggled} onChange={onToggleChange} />}
  </div>
);
