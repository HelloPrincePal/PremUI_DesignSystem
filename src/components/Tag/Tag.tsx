import React from 'react';
import './tag.css';

export type TagStyle = 'stroke' | 'gray';
export type TagState = 'default' | 'hover' | 'active' | 'disabled';

export interface TagProps {
  children?: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Leading visual slot (icon/avatar/flag/logo) — omit for the Basic type */
  leading?: React.ReactNode;
  style?: TagStyle;
  /** Persistent selected state (like ButtonGroup's `active`), not a `:active` press */
  active?: boolean;
  disabled?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/active/disabled usage. */
  state?: TagState;
  dismissible?: boolean;
  onDismiss?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Tag = ({
  children = 'Tag',
  sublabel,
  leading,
  style = 'stroke',
  active = false,
  disabled = false,
  state,
  dismissible = false,
  onDismiss,
  onClick,
  className = '',
}: TagProps) => {
  const isDisabled = disabled || state === 'disabled';
  const isActive = state ? state === 'active' : active;
  const resolvedState = isDisabled ? 'disabled' : state;

  return (
    <span
      className={`premui-tag ${className}`}
      data-style={style}
      data-active={isActive || undefined}
      data-state={resolvedState}
      data-has-leading={!!leading || undefined}
      data-dismissible={dismissible || undefined}
      data-disabled={isDisabled || undefined}
      onClick={!isDisabled ? onClick : undefined}
    >
      {leading && <span className="premui-tag-leading">{leading}</span>}
      <span className="premui-tag-text">
        <span className="premui-tag-label">{children}</span>
        {sublabel && <span className="premui-tag-sublabel">{sublabel}</span>}
      </span>
      {dismissible && (
        <button
          type="button"
          className="premui-tag-dismiss"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          disabled={isDisabled}
          aria-label="Remove"
        >
          <i className="ri-close-fill" aria-hidden="true" />
        </button>
      )}
    </span>
  );
};
