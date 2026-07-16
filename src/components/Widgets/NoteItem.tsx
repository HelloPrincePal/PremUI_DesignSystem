import React from 'react';
import './widgets.css';
import { Badge } from '../Badge/Badge';
import type { BadgeColor } from '../Badge/Badge';

export interface NoteItemTag {
  label: string;
  color?: BadgeColor;
}

export interface NoteItemProps {
  title: string;
  description?: string;
  tags?: NoteItemTag[];
  date?: string;
  /** Checked (done) state — strikes through the title and fills the checkbox. */
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  className?: string;
}

/**
 * Notes Content [Notes] — a single note row with a Default and Checked state.
 * Ported from Figma node 3872:24017. Used by the Notes widget.
 */
export const NoteItem = ({
  title,
  description,
  tags = [],
  date,
  checked = false,
  onToggle,
  className = '',
}: NoteItemProps) => (
  <div className={`premui-w-note ${className}`}>
    <button
      type="button"
      className="premui-w-note-check"
      data-done={checked || undefined}
      aria-pressed={checked}
      aria-label={checked ? 'Mark as not done' : 'Mark as done'}
      onClick={() => onToggle?.(!checked)}
    >
      {checked && <i className="ri-checkbox-circle-fill" aria-hidden="true" />}
    </button>
    <div className="premui-w-note-body">
      <span className="premui-w-note-title" data-done={checked || undefined}>
        {title}
      </span>
      {description && <span className="premui-w-note-desc">{description}</span>}
      {(tags.length > 0 || date) && (
        <div className="premui-w-note-meta">
          {tags.map((tag) => (
            <Badge key={tag.label} color={tag.color ?? 'gray'} style="light" size="sm">
              {tag.label}
            </Badge>
          ))}
          {date && (
            <span className="premui-w-note-date">
              <i className="ri-calendar-line" aria-hidden="true" />
              {date}
            </span>
          )}
        </div>
      )}
    </div>
  </div>
);
