import React from 'react';
import './link-button.css';

export type LinkButtonStyle = 'gray' | 'black' | 'primary' | 'error' | 'modifiable';
export type LinkButtonSize = 'md' | 'sm';

export interface LinkButtonProps {
  /** Text label */
  children: React.ReactNode;
  /** Color style — use "modifiable" to inherit color from parent (e.g. inside Alert) */
  style?: LinkButtonStyle;
  /** md = 20px icons, 14px text · sm = 16px icons, 12px text */
  size?: LinkButtonSize;
  /** Always show underline (hover always shows it regardless) */
  underline?: boolean;
  /** RemixIcon name for left icon — e.g. "arrow-left-s-line". Pass null to hide. */
  leftIcon?: string | null;
  /** RemixIcon name for right icon — e.g. "arrow-right-s-line". Pass null to hide. */
  rightIcon?: string | null;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Render as an <a> tag instead of <button> */
  href?: string;
  /** When used as <a> */
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const LinkButton = ({
  children,
  style = 'gray',
  size = 'md',
  underline = false,
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  className = '',
}: LinkButtonProps) => {
  const classes = [
    'premui-link-btn',
    `premui-link-btn-${size}`,
    underline ? 'premui-link-btn-underline' : '',
    disabled ? 'premui-link-btn-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {leftIcon && (
        <i className={`ri-${leftIcon} premui-link-btn-icon`} aria-hidden="true" />
      )}
      <span className="premui-link-btn-label">{children}</span>
      {rightIcon && (
        <i className={`ri-${rightIcon} premui-link-btn-icon`} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        data-style={style}
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
      type={type}
      className={classes}
      data-style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
