import React from 'react';
import './color-picker.css';

export type ColorDotColor = 'gray' | 'blue' | 'orange' | 'red' | 'green' | 'yellow' | 'purple' | 'sky' | 'pink' | 'teal';
export type ColorDotsState = 'default' | 'hover' | 'selected' | 'disabled';

/** Hex values mirror this project's --color-state-*-base tokens (see Badge's color mapping). */
export const COLOR_DOT_HEX: Record<ColorDotColor, string> = {
  gray: '#7B7B7B',
  blue: '#335CFF',
  orange: '#FA7319',
  red: '#FB3748',
  green: '#1FC16B',
  yellow: '#F6B51E',
  purple: '#7D52F4',
  sky: '#47C2FF',
  pink: '#FB4BA3',
  teal: '#22D3BB',
};

const COLOR_VAR: Record<ColorDotColor, string> = {
  gray: 'var(--color-state-faded-base)',
  blue: 'var(--color-state-information-base)',
  orange: 'var(--color-state-warning-base)',
  red: 'var(--color-state-error-base)',
  green: 'var(--color-state-success-base)',
  yellow: 'var(--color-state-away-base)',
  purple: 'var(--color-state-feature-base)',
  sky: 'var(--color-state-verified-base)',
  pink: 'var(--color-state-highlighted-base)',
  teal: 'var(--color-state-stable-base)',
};

export interface ColorDotsProps {
  color?: ColorDotColor;
  selected?: boolean;
  disabled?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover and `disabled`/`selected` drive it. */
  state?: ColorDotsState;
  onClick?: () => void;
  className?: string;
}

export const ColorDots = ({
  color = 'gray',
  selected = false,
  disabled = false,
  state,
  onClick,
  className = '',
}: ColorDotsProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : selected ? 'selected' : state;

  return (
    <button
      type="button"
      className={`premui-color-dot ${className}`}
      style={{ '--color-dot-color': COLOR_VAR[color] } as React.CSSProperties}
      data-state={resolvedState}
      disabled={isDisabled}
      aria-pressed={selected}
      aria-label={`${color} color`}
      onClick={onClick}
    >
      <span className="premui-color-dot-swatch" />
    </button>
  );
};
