import React from 'react';
import './fancy-button.css';

export type FancyButtonType = 'neutral' | 'primary' | 'destructive' | 'basic';
export type FancyButtonSize = 'md' | 'sm' | 'xs';
export type FancyButtonState = 'default' | 'hover' | 'disabled';

export interface FancyButtonProps {
  /** Button label. */
  children?: React.ReactNode;
  /** Color intent */
  type?: FancyButtonType;
  /** md = 40px · sm = 36px · xs = 32px */
  size?: FancyButtonSize;
  /** RemixIcon name for left icon — e.g. "arrow-left-s-line". */
  leftIcon?: string | null;
  /** RemixIcon name for right icon — e.g. "arrow-right-s-line". */
  rightIcon?: string | null;
  /** Forces a visual state for design QA. Leave unset in real usage — native :hover/:focus-visible and `disabled` drive it. */
  state?: FancyButtonState;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** When provided, renders as an <a> tag */
  href?: string;
  target?: string;
  rel?: string;
  /** HTML button type (default: "button") */
  htmlType?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const FancyButton = ({
  children,
  type = 'neutral',
  size = 'md',
  leftIcon,
  rightIcon,
  state,
  disabled = false,
  onClick,
  href,
  target,
  rel,
  htmlType = 'button',
  className = '',
}: FancyButtonProps) => {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState = isDisabled ? 'disabled' : state;

  const content = (
    <>
      {leftIcon && (
        <i className={`ri-${leftIcon} premui-fancy-btn-icon`} aria-hidden="true" />
      )}
      {children != null && (
        <span className="premui-fancy-btn-label">{children}</span>
      )}
      {rightIcon && (
        <i className={`ri-${rightIcon} premui-fancy-btn-icon`} aria-hidden="true" />
      )}
    </>
  );

  const commonProps = {
    className: `premui-fancy-btn ${className}`,
    'data-type': type,
    'data-size': size,
    'data-state': resolvedState,
    onClick: isDisabled ? undefined : onClick,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={isDisabled ? undefined : href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={isDisabled || undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...commonProps} type={htmlType} disabled={isDisabled}>
      {content}
    </button>
  );
};
