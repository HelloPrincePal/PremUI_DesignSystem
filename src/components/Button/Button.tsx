import React from 'react';
import './button.css';

export type ButtonType = 'primary' | 'neutral' | 'error';
export type ButtonStyle = 'filled' | 'stroke' | 'lighter' | 'ghost';
export type ButtonSize = 'md' | 'sm' | 'xs' | '2xs';

export interface ButtonProps {
  /** Button label. Omit (with leftIcon) to render icon-only. */
  children?: React.ReactNode;
  /** Color intent */
  type?: ButtonType;
  /** Visual treatment */
  style?: ButtonStyle;
  /** md = 40px · sm = 36px · xs = 32px · 2xs = 28px */
  size?: ButtonSize;
  /** RemixIcon name for left icon — e.g. "add-line". */
  leftIcon?: string | null;
  /** RemixIcon name for right icon — e.g. "arrow-right-s-line". */
  rightIcon?: string | null;
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

export const Button = ({
  children,
  type = 'primary',
  style = 'filled',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
  href,
  target,
  rel,
  htmlType = 'button',
  className = '',
}: ButtonProps) => {
  const onlyIcon = !children && !!leftIcon;

  const classes = [
    'premui-btn',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {leftIcon && (
        <i className={`ri-${leftIcon} premui-btn-icon`} aria-hidden="true" />
      )}
      {children != null && (
        <span className="premui-btn-label">{children}</span>
      )}
      {rightIcon && !onlyIcon && (
        <i className={`ri-${rightIcon} premui-btn-icon`} aria-hidden="true" />
      )}
    </>
  );

  const commonProps = {
    className: classes,
    'data-type': type,
    'data-style': style,
    'data-size': size,
    'data-only-icon': onlyIcon || undefined,
    onClick: disabled ? undefined : onClick,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={disabled ? undefined : href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={disabled || undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      type={htmlType}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
