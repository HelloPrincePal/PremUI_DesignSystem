import React, { useRef } from 'react';
import './color-picker.css';

export type ColorSliderType = 'hue' | 'opacity';

export interface ColorSlidersProps {
  type?: ColorSliderType;
  /** hue: 0-360 · opacity: 0-100 */
  value: number;
  onChange: (value: number) => void;
  /** Base color (hex) rendered behind the opacity gradient — ignored for type="hue" */
  color?: string;
  className?: string;
}

export const ColorSliders = ({
  type = 'hue',
  value,
  onChange,
  color = '#335CFF',
  className = '',
}: ColorSlidersProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const max = type === 'hue' ? 360 : 100;

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    onChange(Math.round(ratio * max));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    updateFromClientX(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') onChange(Math.max(0, value - 1));
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') onChange(Math.min(max, value + 1));
  };

  const percent = (value / max) * 100;

  return (
    <div
      ref={trackRef}
      className={`premui-color-slider ${className}`}
      data-type={type}
      role="slider"
      aria-label={type === 'hue' ? 'Hue' : 'Opacity'}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      style={type === 'opacity' ? ({ '--color-slider-color': color } as React.CSSProperties) : undefined}
    >
      <div className="premui-color-slider-track" />
      <div className="premui-color-slider-thumb" style={{ left: `${percent}%` }} />
    </div>
  );
};
