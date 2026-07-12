import React from 'react';
import './table.css';

export type TableCellPriority = 'leading' | 'regular' | 'passive';

export interface TableCellContentProps {
  /** Leading visual slot — a KeyIcon, Avatar, Checkbox, Radio, etc. */
  leading?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Controls the title/description emphasis: leading = bold title, regular = normal weight, passive = fully muted */
  priority?: TableCellPriority;
  className?: string;
}

export const TableCellContent = ({ leading, title, description, priority = 'regular', className = '' }: TableCellContentProps) => (
  <div className={`premui-table-cell-content ${className}`} data-priority={priority}>
    {leading && <span className="premui-table-cell-leading">{leading}</span>}
    <div className="premui-table-cell-text">
      <p className="premui-table-cell-title">{title}</p>
      {description && <p className="premui-table-cell-description">{description}</p>}
    </div>
  </div>
);
