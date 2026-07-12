import React, { useState } from 'react';
import './date-picker.css';
import { DateSelector } from './DateSelector';
import { DayLabel } from './DayLabel';
import { DayCell } from './DayCell';
import { PeriodRangeItem } from './PeriodRangeItem';
import { Button } from '../Button/Button';
import { DAY_LABELS, getMonthGrid, formatMonthYear, isSameDay, isBetween } from './dateUtils';

export interface DateRangePickerPreset {
  label: string;
}

export interface DateRangePickerProps {
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (start: Date | null, end: Date | null) => void;
  initialMonth?: Date;
  presets?: DateRangePickerPreset[];
  activePreset?: number;
  onPresetSelect?: (index: number) => void;
  showFooter?: boolean;
  onCancel?: () => void;
  onApply?: () => void;
  className?: string;
}

const DEFAULT_PRESETS: DateRangePickerPreset[] = [
  { label: 'Today' },
  { label: 'Last 7 days' },
  { label: 'Last 30 days' },
  { label: 'Last 3 months' },
  { label: 'Last 12 months' },
  { label: 'Month to date' },
  { label: 'Year to date' },
  { label: 'All time' },
];

const renderMonth = (
  year: number,
  month: number,
  startDate: Date | null,
  endDate: Date | null,
  onDayClick: (d: Date) => void,
  onPrev?: () => void,
  onNext?: () => void
) => {
  const grid = getMonthGrid(year, month);
  return (
    <div className="premui-date-range-picker-panel">
      <DateSelector label={formatMonthYear(year, month)} onPrev={onPrev} onNext={onNext} />
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
              selected={isSameDay(date, startDate) || isSameDay(date, endDate)}
              inRange={isBetween(date, startDate, endDate)}
              onClick={() => onDayClick(date)}
            />
          ) : (
            <span key={index} className="premui-day-cell-empty" />
          )
        )}
      </div>
    </div>
  );
};

export const DateRangePicker = ({
  startDate = null,
  endDate = null,
  onChange,
  initialMonth,
  presets = DEFAULT_PRESETS,
  activePreset,
  onPresetSelect,
  showFooter = true,
  onCancel,
  onApply,
  className = '',
}: DateRangePickerProps) => {
  const [viewDate, setViewDate] = useState(initialMonth ?? startDate ?? new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const nextMonthDate = new Date(year, month + 1, 1);

  const handleDayClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      onChange?.(day, null);
    } else if (day.getTime() < startDate.getTime()) {
      onChange?.(day, startDate);
    } else {
      onChange?.(startDate, day);
    }
  };

  return (
    <div className={`premui-date-range-picker ${className}`}>
      <div className="premui-date-range-picker-sidebar">
        {presets.map((preset, index) => (
          <PeriodRangeItem key={preset.label} active={activePreset === index} onClick={() => onPresetSelect?.(index)}>
            {preset.label}
          </PeriodRangeItem>
        ))}
      </div>
      <div className="premui-date-range-picker-content">
        <div className="premui-date-range-picker-months">
          {renderMonth(year, month, startDate, endDate, handleDayClick, () => setViewDate(new Date(year, month - 1, 1)))}
          {renderMonth(
            nextMonthDate.getFullYear(),
            nextMonthDate.getMonth(),
            startDate,
            endDate,
            handleDayClick,
            undefined,
            () => setViewDate(new Date(year, month + 1, 1))
          )}
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
    </div>
  );
};
