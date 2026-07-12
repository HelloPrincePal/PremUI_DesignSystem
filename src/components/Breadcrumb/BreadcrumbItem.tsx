import React from 'react';
import './breadcrumb.css';

export interface BreadcrumbItemProps {
  children?: React.ReactNode;
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  href?: string;
  /** Renders as the current page — neutral dark text, not a link */
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const BreadcrumbItem = ({
  children,
  icon,
  href,
  active = false,
  onClick,
  className = '',
}: BreadcrumbItemProps) => {
  const content = (
    <>
      {icon && <i className={`ri-${icon} premui-breadcrumb-item-icon`} aria-hidden="true" />}
      {children != null && <span className="premui-breadcrumb-item-label">{children}</span>}
    </>
  );

  if (active) {
    return (
      <span className={`premui-breadcrumb-item ${className}`} data-active="true" aria-current="page">
        {content}
      </span>
    );
  }

  if (href) {
    return (
      <a className={`premui-breadcrumb-item ${className}`} href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={`premui-breadcrumb-item ${className}`} onClick={onClick}>
      {content}
    </button>
  );
};
