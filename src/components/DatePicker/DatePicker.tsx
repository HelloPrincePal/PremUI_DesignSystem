import React, { useState } from 'react';
import './date-picker.css';
import { DateSelector } from './DateSelector';
import { DayLabel } from './DayLabel';
import { DayCell } from './DayCell';
import { Button } from '../Button/Button';
import { DAY_LABELS, getMonthGrid, formatMonthYear, isSameDay } from './dateUtils';

export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  /** Which month is shown initially — defaults to `value`'s month, or today */
  initialMonth?: Date;
  showFooter?: boolean;
  onCancel?: () => void;
  onApply?: () => void;
  className?: string;
}

export const DatePicker = ({
  value = null,
  onChange,
  initialMonth,
  showFooter = true,
  onCancel,
  onApply,
  className = '',
}: DatePickerProps) => {
  const [viewDate, setViewDate] = useState(initialMonth ?? value ?? new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const grid = getMonthGrid(year, month);

  return (
    <div className={`premui-date-picker ${className}`}>
      <div className="premui-date-picker-panel">
        <DateSelector
          label={formatMonthYear(year, month)}
          onPrev={() => setViewDate(new Date(year, month - 1, 1))}
          onNext={() => setViewDate(new Date(year, month + 1, 1))}
        />
        <div className="premui-date-picker-grid-header">
          {DAY_LABELS.map((label) => (
            <DayLabel key={label}>{label}</DayLabel>
          ))}
        </div>
        <div className="premui-date-picker-grid">
          {grid.map((date, index) =>
            date ? (
              <DayCell
                key={index}
                day={date.getDate()}
                selected={isSameDay(date, value)}
                onClick={() => onChange?.(date)}
              />
            ) : (
              <span key={index} className="premui-day-cell-empty" />
            )
          )}
        </div>
      </div>
      {showFooter && (
        <div className="premui-date-picker-footer">
          <Button type="neutral" style="stroke" size="sm" className="premui-date-picker-footer-btn" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" style="filled" size="sm" className="premui-date-picker-footer-btn" onClick={onApply}>
            Apply
          </Button>
        </div>
      )}
    </div>
  );
};
