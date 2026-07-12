import React from 'react';
import './switch.css';

export type SwitchState = 'default' | 'hover' | 'disabled';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover and `disabled` drive it. */
  state?: SwitchState;
  /** Renders a non-interactive <span> instead of <button> — for embedding inside another already-interactive element */
  decorative?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  state,
  decorative = false,
  ariaLabel = 'Toggle',
  className = '',
}: SwitchProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;
  const toggle = () => !isDisabled && onChange?.(!checked);

  if (decorative) {
    return (
      <span
        className={`premui-switch ${className}`}
        data-checked={checked || undefined}
        data-state={resolvedState}
        aria-hidden="true"
      >
        <span className="premui-switch-thumb" />
      </span>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`premui-switch ${className}`}
      data-checked={checked || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={toggle}
    >
      <span className="premui-switch-thumb" />
    </button>
  );
};
