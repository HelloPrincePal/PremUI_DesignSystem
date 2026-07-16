import React from 'react';
import './widgets.css';

export interface GaugeBarProps {
  /** Value shown in the center label. */
  value?: number;
  /** Maximum, shown as "OUT OF {max}" and used to derive the fill if `percentage` is unset. */
  max?: number;
  /** 0–100 fill of the arc. Defaults to `value / max * 100`. */
  percentage?: number;
  /** Diameter of the (semicircular) gauge in px. */
  size?: number;
  /** Muted styling for the empty / 0% state. */
  muted?: boolean;
  className?: string;
}

/**
 * Gauge Bar [Time Off] — a 180° semicircular gauge whose blue fill grows from
 * the left edge over the top. Ported from Figma node 3789:9678. Used by the
 * Time Off widget. Ported from Figma node 3789:9678.
 */
export const GaugeBar = ({
  value = 0,
  max = 20,
  percentage,
  size = 200,
  muted = false,
  className = '',
}: GaugeBarProps) => {
  const stroke = 22;
  const r = (size - stroke) / 2;
  const cy = size / 2;
  const height = size / 2 + stroke / 2;
  const length = Math.PI * r;
  const derived = max > 0 ? (value / max) * 100 : 0;
  const fraction = Math.min(1, Math.max(0, (percentage ?? derived) / 100));
  const path = `M ${stroke / 2},${cy} A ${r},${r} 0 0 1 ${size - stroke / 2},${cy}`;

  return (
    <div className={`premui-widget-gauge ${className}`} style={{ width: size, height }} data-muted={muted || undefined}>
      <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`}>
        <path className="premui-widget-gauge-track" d={path} strokeWidth={stroke} fill="none" strokeLinecap="round" />
        {!muted && fraction > 0 && (
          <path
            className="premui-widget-gauge-fill"
            d={path}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={length}
            strokeDashoffset={length * (1 - fraction)}
          />
        )}
      </svg>
      <div className="premui-widget-gauge-center">
        <span className="premui-widget-gauge-value">{value}</span>
        <span className="premui-widget-gauge-max">OUT OF {max}</span>
      </div>
    </div>
  );
};
