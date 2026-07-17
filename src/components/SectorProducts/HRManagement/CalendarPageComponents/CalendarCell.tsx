import React from 'react';
import './calendar-page.css';

export type CardPositioning = 'half-top' | 'half-bottom' | 'regular' | 'large';

export interface CalendarCellProps {
  /** Where a card sits within the time cell. */
  positioning?: CardPositioning;
  /** Empty cell — nothing placed. */
  empty?: boolean;
  /** Disabled (hatched) cell — no scheduling allowed. */
  disabled?: boolean;
  /** The card placed in the slot (usually a CalendarCard). */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Card Positioning [Calendar Page] — a single calendar time cell that positions
 * a card (half-top / half-bottom / regular / large), or shows an empty or a
 * disabled (hatched) state. Ported from Figma node 3877:58545.
 */
export const CalendarCell = ({
  positioning = 'regular',
  empty = false,
  disabled = false,
  children,
  className = '',
}: CalendarCellProps) => (
  <div className={`premui-cal-cell ${className}`} data-disabled={disabled || undefined}>
    {!empty && !disabled && (
      <div className="premui-cal-cell-slot" data-pos={positioning}>{children}</div>
    )}
  </div>
);
