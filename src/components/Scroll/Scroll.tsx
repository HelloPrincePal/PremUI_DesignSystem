import React from 'react';
import './scroll.css';

export type ScrollSize = 'md' | 'sm' | 'xs';
export type ScrollStyle = 'default' | 'lighter';

export interface ScrollProps {
  /** md = 20px track · sm = 16px · xs = 12px */
  size?: ScrollSize;
  style?: ScrollStyle;
  /** Thumb height as a fraction of the track (0–1) — e.g. clientHeight / scrollHeight */
  thumbRatio?: number;
  /** Thumb top offset as a fraction of the available track space (0–1) — e.g. scrollTop / (scrollHeight - clientHeight) */
  thumbOffset?: number;
  className?: string;
}

export const Scroll = React.forwardRef<HTMLDivElement, ScrollProps>(
  ({ size = 'md', style = 'default', thumbRatio = 0.2, thumbOffset = 0, className = '' }, ref) => {
    const ratio = Math.min(1, Math.max(0.05, thumbRatio));
    const offset = Math.min(1, Math.max(0, thumbOffset));

    return (
      <div className={`premui-scroll ${className}`} data-size={size} data-style={style}>
        <div
          ref={ref}
          className="premui-scroll-thumb"
          style={{
            height: `${ratio * 100}%`,
            top: `${(1 - ratio) * offset * 100}%`,
          }}
        />
      </div>
    );
  }
);
