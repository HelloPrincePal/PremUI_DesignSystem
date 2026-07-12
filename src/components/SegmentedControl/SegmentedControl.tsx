import React from 'react';
import './segmented-control.css';

export interface SegmentedControlItem {
  /** Omit to render an icon-only segment (requires `icon`) */
  label?: React.ReactNode;
  value: string;
  /** RemixIcon name (no `ri-` prefix) — renders before the label, or alone if `label` is omitted */
  icon?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const SegmentedControl = ({ items, value, onChange, className = '', style }: SegmentedControlProps) => (
  <div className={`premui-segmented-control ${className}`} style={style} role="tablist">
    {items.map((item) => (
      <button
        key={item.value}
        type="button"
        role="tab"
        className="premui-segmented-control-item"
        data-active={item.value === value || undefined}
        data-icon-only={(!!item.icon && !item.label) || undefined}
        aria-selected={item.value === value}
        aria-label={item.ariaLabel}
        disabled={item.disabled}
        onClick={() => onChange?.(item.value)}
      >
        {item.icon && <i className={`ri-${item.icon}`} aria-hidden="true" />}
        {item.label}
      </button>
    ))}
  </div>
);
