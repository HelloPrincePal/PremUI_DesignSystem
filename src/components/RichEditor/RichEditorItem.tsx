import React from 'react';
import './rich-editor.css';
import { RichEditorColorDot } from './RichEditorColorDot';
import type { RichEditorColorName } from './RichEditorColorDot';

export type RichEditorItemType = 'text' | 'dropdown' | 'icon' | 'color';
export type RichEditorItemState = 'default' | 'hover' | 'active';

export interface RichEditorItemProps {
  type?: RichEditorItemType;
  /** Force a visual state for design QA. Leave unset in real usage — native :hover and `active` drive it. */
  state?: RichEditorItemState;
  /** Persistent pressed/toggled state (e.g. Bold currently applied) */
  active?: boolean;
  /** RemixIcon name (no `ri-` prefix) — for "dropdown"/"icon" types */
  icon?: string;
  /** For "text" type, e.g. "Header" */
  label?: string;
  /** For "color" type */
  color?: RichEditorColorName;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const RichEditorItem = ({
  type = 'icon',
  state,
  active = false,
  icon = 'bold',
  label = 'Header',
  color = 'gray',
  disabled = false,
  onClick,
  ariaLabel,
  className = '',
}: RichEditorItemProps) => {
  const resolvedState = active ? 'active' : state;
  const showChevron = type === 'text' || type === 'dropdown' || type === 'color';

  return (
    <button
      type="button"
      className={`premui-rich-editor-item ${className}`}
      data-type={type}
      data-state={resolvedState}
      disabled={disabled}
      aria-pressed={type !== 'text' && type !== 'dropdown' ? active : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {type === 'text' && <span className="premui-rich-editor-item-label">{label}</span>}
      {(type === 'dropdown' || type === 'icon') && <i className={`ri-${icon}`} aria-hidden="true" />}
      {type === 'color' && <RichEditorColorDot color={color} size={16} />}
      {showChevron && (
        <i className={active ? 'ri-arrow-up-s-fill' : 'ri-arrow-down-s-fill'} aria-hidden="true" />
      )}
    </button>
  );
};
