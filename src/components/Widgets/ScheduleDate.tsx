import React from 'react';
import './widgets.css';

export type ScheduleDateState = 'default' | 'hover' | 'selected';

export interface ScheduleDateProps {
  /** Weekday abbreviation, e.g. "Sun". */
  day: string;
  /** Day-of-month number, e.g. "02". */
  date: string;
  selected?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover usage. */
  state?: ScheduleDateState;
  onClick?: () => void;
  className?: string;
}

/**
 * Schedule Date [Schedule] — a single day cell (weekday + date) with Default,
 * Hover and Selected states. Ported from Figma node 3520:2550.
 */
export const ScheduleDate = ({ day, date, selected = false, state, onClick, className = '' }: ScheduleDateProps) => (
  <button
    type="button"
    className={`premui-w-day ${className}`}
    data-active={(state ? state === 'selected' : selected) || undefined}
    data-state={state}
    onClick={onClick}
  >
    <span className="premui-w-day-name">{day}</span>
    <span className="premui-w-day-num">{date}</span>
  </button>
);
