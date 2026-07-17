import React from 'react';

export type CardChipColor =
  | 'white' | 'gray' | 'purple' | 'red' | 'orange' | 'yellow' | 'blue' | 'teal' | 'pink' | 'green';

const CHIP_COLOR: Record<CardChipColor, string> = {
  white: '#e4e5e7',
  gray: '#c2c6cf',
  purple: 'var(--color-state-feature-base, #7d52f4)',
  red: 'var(--color-state-error-base, #fb3748)',
  orange: 'var(--color-state-warning-base, #fa7319)',
  yellow: 'var(--color-state-away-base, #f6b51e)',
  blue: 'var(--color-state-information-base, #335cff)',
  teal: 'var(--color-state-verified-base, #47c2ff)',
  pink: 'var(--color-state-highlighted-base, #fb4ba3)',
  green: 'var(--color-state-success-base, #1fc16b)',
};

export interface CardChipProps {
  /** Chip color variant. */
  color?: CardChipColor;
  width?: number;
  className?: string;
}

/**
 * Chips [My Cards] — the EMV smart-card chip shown on a physical card, in 10
 * colors. Ported from Figma node 3027:8865 (drawn as SVG). */
export const CardChip = ({ color = 'orange', width = 32, className = '' }: CardChipProps) => {
  const fill = CHIP_COLOR[color];
  const height = (width / 32) * 24;
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="23" rx="4" fill={fill} fillOpacity="0.85" stroke={fill} />
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="1">
        <line x1="0" y1="8" x2="11" y2="8" />
        <line x1="0" y1="16" x2="11" y2="16" />
        <line x1="21" y1="8" x2="32" y2="8" />
        <line x1="21" y1="16" x2="32" y2="16" />
        <rect x="11" y="5" width="10" height="14" rx="2" />
        <line x1="16" y1="0" x2="16" y2="5" />
        <line x1="16" y1="19" x2="16" y2="24" />
      </g>
    </svg>
  );
};
