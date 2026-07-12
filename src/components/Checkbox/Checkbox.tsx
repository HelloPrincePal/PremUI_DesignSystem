import React from 'react';
import './checkbox.css';

export type CheckboxSize = 'md' | 'sm';
export type CheckboxState = 'default' | 'hover' | 'disabled';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: CheckboxState;
  onChange?: (checked: boolean) => void;
  /** Renders a non-interactive <span> instead of <button> — for embedding inside another already-interactive element (e.g. CheckboxCard's own button) where a nested button would be invalid HTML. */
  decorative?: boolean;
  'aria-label'?: string;
  className?: string;
}

export const Checkbox = ({
  checked = false,
  indeterminate = false,
  size = 'md',
  disabled = false,
  state,
  onChange,
  decorative = false,
  'aria-label': ariaLabel,
  className = '',
}: CheckboxProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;
  const isFilled = checked || indeterminate;

  const content = isFilled ? (
    <span className="premui-checkbox-fill">
      {indeterminate ? (
        <span className="premui-checkbox-dash" />
      ) : (
        <i className="ri-check-line premui-checkbox-check" aria-hidden="true" />
      )}
    </span>
  ) : (
    <>
      <span className="premui-checkbox-ring" />
      {resolvedState !== 'disabled' && <span className="premui-checkbox-inner" />}
    </>
  );

  if (decorative) {
    return (
      <span
        aria-hidden="true"
        className={`premui-checkbox ${className}`}
        data-size={size}
        data-state={resolvedState}
      >
        {content}
      </span>
    );
  }

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-label={ariaLabel}
      className={`premui-checkbox ${className}`}
      data-size={size}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={() => onChange?.(!checked)}
    >
      {content}
    </button>
  );
};
