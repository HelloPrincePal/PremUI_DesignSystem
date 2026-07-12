import React from 'react';
import './social-button.css';

export type SocialBrand = 'apple' | 'x' | 'google' | 'facebook' | 'linkedin' | 'github' | 'dropbox';
export type SocialButtonStyle = 'filled' | 'stroke';

export interface SocialButtonProps {
  /** Button label. Defaults to "Login with {Brand}". */
  children?: React.ReactNode;
  brand?: SocialBrand;
  style?: SocialButtonStyle;
  /** Renders as a square icon-only button */
  onlyIcon?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** When provided, renders as an <a> tag */
  href?: string;
  target?: string;
  rel?: string;
  /** HTML button type (default: "button") */
  htmlType?: 'button' | 'submit' | 'reset';
  className?: string;
}

const BRAND_ICONS: Record<SocialBrand, string> = {
  apple: 'apple-fill',
  x: 'twitter-x-fill',
  google: 'google-fill',
  facebook: 'facebook-fill',
  linkedin: 'linkedin-fill',
  github: 'github-fill',
  dropbox: 'dropbox-fill',
};

const BRAND_LABELS: Record<SocialBrand, string> = {
  apple: 'Apple',
  x: 'X (Twitter)',
  google: 'Google',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  dropbox: 'Dropbox',
};

export const SocialButton = ({
  children,
  brand = 'apple',
  style = 'filled',
  onlyIcon = false,
  onClick,
  href,
  target,
  rel,
  htmlType = 'button',
  className = '',
}: SocialButtonProps) => {
  const defaultLabel = `Login with ${BRAND_LABELS[brand]}`;
  const ariaLabel = typeof children === 'string' ? children : defaultLabel;

  const content = (
    <>
      <i className={`ri-${BRAND_ICONS[brand]} premui-social-btn-icon`} aria-hidden="true" />
      {!onlyIcon && (
        <span className="premui-social-btn-label">{children ?? defaultLabel}</span>
      )}
    </>
  );

  const commonProps = {
    className: `premui-social-btn ${className}`,
    'data-brand': brand,
    'data-style': style,
    'data-only-icon': onlyIcon || undefined,
    'aria-label': onlyIcon ? ariaLabel : undefined,
    onClick,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...commonProps} type={htmlType}>
      {content}
    </button>
  );
};
