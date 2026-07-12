import React from 'react';
import './radio.css';

export type RadioState = 'default' | 'hover' | 'disabled';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: RadioState;
  onChange?: (checked: boolean) => void;
  /** Renders a non-interactive <span> instead of <button> — for embedding inside another already-interactive element (e.g. RadioCard's own button) where a nested button would be invalid HTML. */
  decorative?: boolean;
  'aria-label'?: string;
  className?: string;
}

export const Radio = ({
  checked = false,
  disabled = false,
  state,
  onChange,
  decorative = false,
  'aria-label': ariaLabel,
  className = '',
}: RadioProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;

  const content = (
    <>
      <span className="premui-radio-ring" />
      {!isDisabled || checked ? (
        checked ? (
          <span className="premui-radio-dot" />
        ) : (
          <span className="premui-radio-inner" />
        )
      ) : null}
    </>
  );

  if (decorative) {
    return (
      <span
        aria-hidden="true"
        className={`premui-radio ${className}`}
        data-checked={checked || undefined}
        data-state={resolvedState}
      >
        {content}
      </span>
    );
  }

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`premui-radio ${className}`}
      data-checked={checked || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={() => onChange?.(!checked)}
    >
      {content}
    </button>
  );
};
