import React from 'react';
import './content-item.css';
import { Badge } from '../Badge/Badge';
import { CompactButton } from '../CompactButton/CompactButton';

export interface ContentCardProps {
  /** Leading visual — an icon (e.g. wrapped in KeyIcon), Avatar, or brand/company/card-provider logo */
  leading?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  /** Shows a "NEW" badge next to the label */
  badge?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export const ContentCard = ({
  leading,
  label = 'Label',
  sublabel = '(Sublabel)',
  description = 'Insert the content description here.',
  badge = true,
  dismissible = true,
  onDismiss,
  className = '',
}: ContentCardProps) => (
  <div className={`premui-content-card ${className}`}>
    {leading && <span className="premui-content-card-leading">{leading}</span>}
    <div className="premui-content-card-text">
      <div className="premui-content-card-title">
        <span className="premui-content-card-label">{label}</span>
        {sublabel && <span className="premui-content-card-sublabel">{sublabel}</span>}
        {badge && (
          <Badge color="blue" style="light" size="sm">
            NEW
          </Badge>
        )}
      </div>
      {description && <p className="premui-content-card-description">{description}</p>}
    </div>
    {dismissible && <CompactButton icon="close-line" style="ghost" size="lg" onClick={onDismiss} ariaLabel="Dismiss" />}
  </div>
);
