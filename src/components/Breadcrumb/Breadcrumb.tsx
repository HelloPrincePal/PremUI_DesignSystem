import React from 'react';
import './breadcrumb.css';
import { BreadcrumbItem } from './BreadcrumbItem';

export type BreadcrumbDivider = 'arrow' | 'slash' | 'dot';

export interface BreadcrumbItemData {
  label: string;
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemData[];
  /** Divider glyph between items — the last item never renders a trailing divider */
  divider?: BreadcrumbDivider;
  className?: string;
}

const DIVIDER_GLYPH: Record<Exclude<BreadcrumbDivider, 'arrow'>, string> = {
  slash: '/',
  dot: '•',
};

export const Breadcrumb = ({ items, divider = 'arrow', className = '' }: BreadcrumbProps) => {
  return (
    <nav className={`premui-breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="premui-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li className="premui-breadcrumb-list-item" key={`${item.label}-${index}`}>
              <BreadcrumbItem
                icon={item.icon}
                href={isLast ? undefined : item.href}
                onClick={isLast ? undefined : item.onClick}
                active={isLast}
              >
                {item.label}
              </BreadcrumbItem>
              {!isLast && (
                <span className="premui-breadcrumb-divider" aria-hidden="true">
                  {divider === 'arrow' ? <i className="ri-arrow-right-s-line" /> : DIVIDER_GLYPH[divider]}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
