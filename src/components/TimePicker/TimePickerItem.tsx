import React from 'react';
import './time-picker.css';

export type TimePickerItemDirection = 'right' | 'center';
export type TimePickerItemState = 'default' | 'hover' | 'active' | 'disabled';

export interface TimePickerItemProps {
  time?: string;
  period?: string;
  /** Renders a second time group — omit for a single-time row */
  secondaryTime?: string;
  secondaryPeriod?: string;
  /** Where the check mark sits relative to the two time groups once active */
  direction?: TimePickerItemDirection;
  active?: boolean;
  disabled?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active/disabled usage. */
  state?: TimePickerItemState;
  onClick?: () => void;
  className?: string;
}

export const TimePickerItem = ({
  time = '09:30',
  period = 'AM',
  secondaryTime,
  secondaryPeriod,
  direction = 'right',
  active = false,
  disabled = false,
  state,
  onClick,
  className = '',
}: TimePickerItemProps) => {
  const isDisabled = disabled || state === 'disabled';
  const isActive = state ? state === 'active' : active;
  const resolvedState = isDisabled ? 'disabled' : state;
  const hasSecondary = !!secondaryTime;

  const check = <i className="ri-checkbox-circle-fill premui-time-picker-item-check" aria-hidden="true" />;

  return (
    <button
      type="button"
      className={`premui-time-picker-item ${className}`}
      data-active={isActive || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="premui-time-picker-item-group">
        <span className="premui-time-picker-item-time">{time}</span>
        <span className="premui-time-picker-item-period">{period}</span>
      </span>
      {isActive && direction === 'center' && check}
      {hasSecondary && (
        <span className="premui-time-picker-item-group premui-time-picker-item-group-end">
          <span className="premui-time-picker-item-time">{secondaryTime}</span>
          <span className="premui-time-picker-item-period">{secondaryPeriod}</span>
        </span>
      )}
      {isActive && direction === 'right' && check}
    </button>
  );
};
