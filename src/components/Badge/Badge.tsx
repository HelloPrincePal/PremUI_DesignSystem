import React from 'react';
import './badge.css';

export type BadgeColor =
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'sky'
  | 'pink'
  | 'teal';
export type BadgeStyle = 'filled' | 'light' | 'lighter' | 'stroke';
export type BadgeSize = 'sm' | 'md';
export type BadgeType = 'basic' | 'dot' | 'left-icon' | 'right-icon';

export interface BadgeProps {
  /** Badge label text. Ignored when `count` is set. */
  children?: React.ReactNode;
  /** Semantic color intent */
  color?: BadgeColor;
  /** Visual treatment */
  style?: BadgeStyle;
  /** sm = 16px · md = 20px */
  size?: BadgeSize;
  /** Layout variant — ignored when `count` is set */
  type?: BadgeType;
  /** RemixIcon name (no `ri-` prefix) — used when type is "left-icon" or "right-icon" */
  icon?: string;
  /** Renders a fixed-width square counter badge (e.g. "2", "9+") instead of the label/type layout */
  count?: string | number;
  disabled?: boolean;
  className?: string;
}

export const Badge = ({
  children = 'Badge',
  color = 'gray',
  style = 'filled',
  size = 'sm',
  type = 'basic',
  icon,
  count,
  disabled = false,
  className = '',
}: BadgeProps) => {
  const isCount = count !== undefined && count !== null && count !== '';
  const resolvedType = isCount ? 'count' : type;

  return (
    <span
      className={`premui-badge ${className}`}
      data-color={color}
      data-style={style}
      data-size={size}
      data-type={resolvedType}
      data-disabled={disabled || undefined}
    >
      {resolvedType === 'dot' && <span className="premui-badge-dot" aria-hidden="true" />}
      {resolvedType === 'left-icon' && icon && (
        <i className={`ri-${icon} premui-badge-icon`} aria-hidden="true" />
      )}
      {isCount ? (
        <span className="premui-badge-count">{count}</span>
      ) : (
        <span className="premui-badge-label">{children}</span>
      )}
      {resolvedType === 'right-icon' && icon && (
        <i className={`ri-${icon} premui-badge-icon`} aria-hidden="true" />
      )}
    </span>
  );
};
