import React from 'react';
import './time-picker.css';

export type TimePickerStatusType = 'available' | 'busy' | 'in-meeting' | 'offline';
export type TimePickerStatusState = 'default' | 'hover' | 'selected' | 'disabled';

export interface TimePickerStatusProps {
  status?: TimePickerStatusType;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/selected/disabled usage. */
  state?: TimePickerStatusState;
  onClick?: () => void;
  className?: string;
}

const DEFAULT_LABELS: Record<TimePickerStatusType, string> = {
  available: 'Available',
  busy: 'Busy',
  'in-meeting': 'In-meeting',
  offline: 'Offline',
};

export const TimePickerStatus = ({
  status = 'available',
  label,
  selected = false,
  disabled = false,
  state,
  onClick,
  className = '',
}: TimePickerStatusProps) => {
  const isDisabled = disabled || state === 'disabled';
  const isSelected = state ? state === 'selected' : selected;
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <button
      type="button"
      className={`premui-time-picker-status ${className}`}
      data-status={status}
      data-selected={isSelected || undefined}
      data-state={resolvedState}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="premui-time-picker-status-dot" aria-hidden="true" />
      {label ?? DEFAULT_LABELS[status]}
    </button>
  );
};
