import React from 'react';
import './tooltip.css';
import { CompactButton } from '../CompactButton/CompactButton';

export type TooltipPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left'
  | 'right';

export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipProps {
  placement?: TooltipPlacement;
  size?: TooltipSize;
  darkMode?: boolean;
  showTail?: boolean;
  /** Single-line text — used at size="sm"/"md" */
  text?: string;
  /** Title + description layout — used at size="lg" */
  title?: string;
  description?: string;
  /** Leading icon slot (size="lg" only) — defaults to a global-line icon */
  leading?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

// Exact vector tails from the Figma source (node 2604:269): a rounded-tip triangle stroked
// in the border color, plus an unstroked "safe" rect straddling the base. Figma stacks the
// tail and card as plain flex siblings with no gap — the mask rect sits flush against the
// card's edge and simply erases that segment of its border, giving a seamless union without
// any absolute positioning or z-index. The smaller card size gets a proportionally smaller
// tail; X-Small and Large share the same (larger) tail, matching the source exactly.
const TAIL_SHAPES = {
  sm: {
    viewBox: '0 0 14 6.37868',
    path: 'M8.91406 5.29297C8.13304 6.07387 6.86696 6.07387 6.08594 5.29297L2.29297 1.5L12.707 1.5L8.91406 5.29297Z',
    width: 14,
  },
  md: {
    viewBox: '0 0 18 8.37868',
    path: 'M10.4141 7.29297C9.63304 8.07387 8.36696 8.07387 7.58594 7.29297L1.79297 1.5L16.207 1.5L10.4141 7.29297Z',
    width: 18,
  },
} as const;

// The SVG's natural orientation points down (tip at the bottom, flat mask edge at the top) —
// correct as-is for "bottom" placements. Rotate to point the tip toward the anchor for the rest.
const TAIL_ROTATION: Record<TooltipPlacement, number> = {
  'top-left': 180,
  'top-center': 180,
  'top-right': 180,
  'bottom-left': 0,
  'bottom-center': 0,
  'bottom-right': 0,
  left: 90,
  right: -90,
};

const TooltipTail = ({ size, placement }: { size: TooltipSize; placement: TooltipPlacement }) => {
  const shape = size === 'sm' ? TAIL_SHAPES.sm : TAIL_SHAPES.md;
  return (
    <svg
      className="premui-tooltip-tail"
      width={shape.width}
      viewBox={shape.viewBox}
      fill="none"
      style={{ transform: `rotate(${TAIL_ROTATION[placement]}deg)` }}
      aria-hidden="true"
    >
      <path d={shape.path} className="premui-tooltip-tail-outline" />
      <rect width={shape.width} height="2" rx="1" className="premui-tooltip-tail-mask" />
    </svg>
  );
};

export const Tooltip = ({
  placement = 'top-left',
  size = 'md',
  darkMode = false,
  showTail = true,
  text = 'Insert Tooltip',
  title = 'Insert Tooltip',
  description = 'Insert tooltip description here. It would look much better as three lines of text.',
  leading,
  showIcon = true,
  dismissible = true,
  onDismiss,
  className = '',
}: TooltipProps) => {
  const tail = showTail && <TooltipTail size={size} placement={placement} />;
  const card =
    size === 'lg' ? (
      <div className="premui-tooltip-card premui-tooltip-lg">
        {showIcon && (
          <span className="premui-tooltip-icon">{leading ?? <i className="ri-global-line" aria-hidden="true" />}</span>
        )}
        <div className="premui-tooltip-text">
          <p className="premui-tooltip-title">{title}</p>
          <p className="premui-tooltip-description">{description}</p>
        </div>
        {dismissible && (
          <CompactButton
            icon="close-line"
            style="ghost"
            size="md"
            onClick={onDismiss}
            ariaLabel="Dismiss"
            className="premui-tooltip-dismiss"
          />
        )}
      </div>
    ) : (
      <div className="premui-tooltip-card" data-size={size}>
        <p className="premui-tooltip-plain-text">{text}</p>
      </div>
    );

  // Tail renders before the card for top/left placements (tail leads toward the anchor),
  // after the card for bottom/right placements — plain DOM order, no absolute positioning.
  const tailFirst = placement.startsWith('top') || placement === 'left';

  return (
    <div className={`premui-tooltip ${className}`} data-placement={placement} data-size={size} data-dark={darkMode || undefined}>
      {tailFirst ? (
        <>
          {tail}
          {card}
        </>
      ) : (
        <>
          {card}
          {tail}
        </>
      )}
    </div>
  );
};
