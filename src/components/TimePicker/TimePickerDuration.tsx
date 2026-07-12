import React from 'react';
import './time-picker.css';

export type TimePickerDurationState = 'default' | 'hover' | 'active' | 'disabled';

export interface TimePickerDurationProps {
  label?: string;
  active?: boolean;
  disabled?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active/disabled usage. */
  state?: TimePickerDurationState;
  onClick?: () => void;
  className?: string;
}

export const TimePickerDuration = ({
  label = '30 min',
  active = false,
  disabled = false,
  state,
  onClick,
  className = '',
}: TimePickerDurationProps) => {
  const isDisabled = disabled || state === 'disabled';
  const isActive = state ? state === 'active' : active;
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <button
      type="button"
      className={`premui-time-picker-duration ${className}`}
      data-active={isActive || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isActive && <i className="ri-checkbox-circle-fill premui-time-picker-duration-check" aria-hidden="true" />}
      {label}
    </button>
  );
};
