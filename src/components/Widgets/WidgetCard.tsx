/// <reference types="vite/client" />
import React from 'react';
import './widgets.css';

const brandLogos = import.meta.glob('../../assets/Brand/Brand Logos/**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const brandLogoByName: Record<string, string> = {};
for (const [key, url] of Object.entries(brandLogos)) {
  const name = (key.split('/').pop() ?? '').replace(/\.svg$/, '');
  brandLogoByName[name] = url;
}

export interface BrandLogoProps {
  /** Brand file name without extension, e.g. "Monday.com". */
  name: string;
  size?: number;
  className?: string;
}

/** Renders a brand logo from `src/assets/Brand/Brand Logos/` by file name. */
export const BrandLogo = ({ name, size = 20, className = '' }: BrandLogoProps) => {
  const url = brandLogoByName[name];
  if (!url) return null;
  return <img className={className} src={url} alt={name} width={size} height={size} style={{ flexShrink: 0 }} />;
};

const countryFlags = import.meta.glob('../../assets/Country Flags/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const flagByName: Record<string, string> = {};
for (const [key, url] of Object.entries(countryFlags)) {
  const name = (key.split('/').pop() ?? '').replace(/\.svg$/, '');
  flagByName[name] = url;
}

export interface CountryFlagProps {
  /** Country file name without extension, e.g. "United States", "European Union". */
  name: string;
  size?: number;
  className?: string;
}

/** Renders a round country flag from `src/assets/Country Flags/` by file name. */
export const CountryFlag = ({ name, size = 20, className = '' }: CountryFlagProps) => {
  const url = flagByName[name];
  if (!url) return null;
  return (
    <img
      className={className}
      src={url}
      alt={name}
      width={size}
      height={size}
      style={{ flexShrink: 0, borderRadius: '50%', objectFit: 'cover' }}
    />
  );
};

export interface WidgetCardProps {
  /** Header leading RemixIcon (no `ri-` prefix). */
  icon?: string;
  /** Header title. */
  title?: React.ReactNode;
  /** Trailing header slot — a `WidgetHeaderButton`, tabs count, search icon, etc. */
  action?: React.ReactNode;
  children?: React.ReactNode;
  /** Card width in px (or any CSS length). Defaults to the 352px Figma widget width. */
  width?: number | string;
  /** Remove body padding — for full-bleed lists/tables that manage their own insets. */
  flushBody?: boolean;
  /** Hide the header + divider entirely. */
  headless?: boolean;
  className?: string;
  bodyClassName?: string;
}

/**
 * The shared card shell every HR widget is built on: a rounded white card with
 * an optional header (leading icon + title + trailing action), an inset
 * divider, and a body slot. Ported from the Figma "Widgets [HR Management]"
 * frame (node 3851:32690).
 */
export const WidgetCard = ({
  icon,
  title,
  action,
  children,
  width = 352,
  flushBody = false,
  headless = false,
  className = '',
  bodyClassName = '',
}: WidgetCardProps) => {
  const showHeader = !headless && (title != null || icon != null || action != null);
  return (
    <div className={`premui-widget ${className}`} style={{ width }}>
      {showHeader && (
        <>
          <div className="premui-widget-header">
            <div className="premui-widget-head-left">
              {icon && <i className={`ri-${icon} premui-widget-head-icon`} aria-hidden="true" />}
              {title != null && <span className="premui-widget-head-title">{title}</span>}
            </div>
            {action != null && <div className="premui-widget-head-action">{action}</div>}
          </div>
          <div className="premui-widget-sep" aria-hidden="true" />
        </>
      )}
      <div className={`premui-widget-body ${flushBody ? 'is-flush' : ''} ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export interface WidgetHeaderButtonProps {
  children?: React.ReactNode;
  /** RemixIcon name (no `ri-` prefix). */
  icon?: string;
  /** Render as a square icon-only button. */
  iconOnly?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/** The small stroke "See All" / "Details" / "+ Add Note" button used in widget headers. */
export const WidgetHeaderButton = ({
  children,
  icon,
  iconOnly = false,
  onClick,
  ariaLabel,
  className = '',
}: WidgetHeaderButtonProps) => (
  <button
    type="button"
    className={`premui-widget-btn ${className}`}
    data-icon-only={iconOnly || undefined}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {icon && <i className={`ri-${icon}`} aria-hidden="true" />}
    {children != null && <span>{children}</span>}
  </button>
);

export { GaugeBar } from './GaugeBar';
export type { GaugeBarProps } from './GaugeBar';
