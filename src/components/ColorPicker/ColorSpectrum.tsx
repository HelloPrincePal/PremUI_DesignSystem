import React, { useRef } from 'react';
import './color-picker.css';

export interface ColorSpectrumProps {
  /** 0-360 */
  hue: number;
  /** 0-100 */
  saturation: number;
  /** 0-100 (HSV "value"/brightness) */
  value: number;
  onChange: (saturation: number, value: number) => void;
  className?: string;
}

export const ColorSpectrum = ({ hue, saturation, value, onChange, className = '' }: ColorSpectrumProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const updateFromPoint = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
    onChange(Math.round(x * 100), Math.round((1 - y) * 100));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    updateFromPoint(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    updateFromPoint(e.clientX, e.clientY);
  };

  return (
    <div
      ref={ref}
      className={`premui-color-spectrum ${className}`}
      style={{ '--spectrum-hue': hue } as React.CSSProperties}
      role="slider"
      aria-label="Saturation and brightness"
      aria-valuenow={Math.round(saturation)}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <div
        className="premui-color-spectrum-thumb"
        style={{ left: `${saturation}%`, top: `${100 - value}%` }}
      />
    </div>
  );
};
