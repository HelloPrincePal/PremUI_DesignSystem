import React from 'react';
import './compact-button.css';

export type CompactButtonStyle = 'stroke' | 'ghost' | 'modifiable' | 'white';
export type CompactButtonSize = 'lg' | 'md';
export type CompactButtonState = 'default' | 'hover' | 'active' | 'disabled';

export interface CompactButtonProps {
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  style?: CompactButtonStyle;
  /** lg = 24px · md = 20px */
  size?: CompactButtonSize;
  /** true = perfect circle · false = rounded square */
  fullRadius?: boolean;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible drive Default/Hover, and `disabled` drives Disabled. */
  state?: CompactButtonState;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  className?: string;
}

export const CompactButton = ({
  icon = 'close-line',
  style = 'stroke',
  size = 'lg',
  fullRadius = false,
  state,
  disabled = false,
  onClick,
  ariaLabel = 'Close',
  className = '',
}: CompactButtonProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <button
      type="button"
      className={`premui-compact-btn ${className}`}
      data-style={style}
      data-size={size}
      data-full-radius={fullRadius || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <i className={`ri-${icon}`} aria-hidden="true" />
    </button>
  );
};
