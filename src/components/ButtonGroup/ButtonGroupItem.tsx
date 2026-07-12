import React from 'react';
import './button-group.css';

export type ButtonGroupItemSize = 'sm' | 'xs' | '2xs';
export type ButtonGroupItemState = 'default' | 'hover' | 'disabled';

export interface ButtonGroupItemProps {
  /** Label. Omit (with `icon`) to render an icon-only segment. */
  children?: React.ReactNode;
  size?: ButtonGroupItemSize;
  /** RemixIcon name for icon-only segments (no `ri-` prefix) */
  icon?: string | null;
  leftIcon?: string | null;
  rightIcon?: string | null;
  /** Marks this segment as the current selection */
  active?: boolean;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: ButtonGroupItemState;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ButtonGroupItem = ({
  children,
  size = 'sm',
  icon,
  leftIcon,
  rightIcon,
  active = false,
  state,
  disabled = false,
  onClick,
  className = '',
}: ButtonGroupItemProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;
  const onlyIcon = children == null && !!icon;
  const iconCount = (leftIcon ? 1 : 0) + (rightIcon ? 1 : 0);
  const padding = onlyIcon || iconCount === 2 ? 'tight' : iconCount === 1 ? 'one-icon' : 'none';

  return (
    <button
      type="button"
      className={`premui-button-group-item ${className}`}
      data-size={size}
      data-padding={padding}
      data-state={resolvedState}
      data-active={active || undefined}
      disabled={isDisabled}
      aria-pressed={active || undefined}
      onClick={onClick}
    >
      {onlyIcon ? (
        <i className={`ri-${icon} premui-button-group-item-icon`} aria-hidden="true" />
      ) : (
        <>
          {leftIcon && <i className={`ri-${leftIcon} premui-button-group-item-icon`} aria-hidden="true" />}
          {children != null && <span className="premui-button-group-item-label">{children}</span>}
          {rightIcon && <i className={`ri-${rightIcon} premui-button-group-item-icon`} aria-hidden="true" />}
        </>
      )}
    </button>
  );
};
