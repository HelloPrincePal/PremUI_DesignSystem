import React, { useState } from 'react';
import './color-picker.css';
import { ColorSpectrum } from './ColorSpectrum';
import { ColorSliders } from './ColorSliders';
import { ColorDots, COLOR_DOT_HEX } from './ColorDots';
import type { ColorDotColor } from './ColorDots';
import { hsvToRgb, rgbToHsv, rgbToHex, hexToRgb } from './colorUtils';

export interface ColorPickerProps {
  /** Hex color, e.g. "#335CFF" */
  value?: string;
  onChange?: (hex: string) => void;
  opacity?: number;
  onOpacityChange?: (opacity: number) => void;
  presets?: ColorDotColor[];
  className?: string;
}

export const ColorPicker = ({
  value = '#335CFF',
  onChange,
  opacity = 100,
  onOpacityChange,
  presets = ['gray', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky'],
  className = '',
}: ColorPickerProps) => {
  const [hexInput, setHexInput] = useState(value.replace('#', ''));

  const [r, g, b] = hexToRgb(value);
  const [hue, sat, val] = rgbToHsv(r, g, b);

  const commit = (hex: string) => {
    setHexInput(hex.replace('#', ''));
    onChange?.(hex);
  };

  const handleSpectrumChange = (s: number, v: number) => {
    const [nr, ng, nb] = hsvToRgb(hue, s, v);
    commit(rgbToHex(nr, ng, nb));
  };

  const handleHueChange = (h: number) => {
    const [nr, ng, nb] = hsvToRgb(h, sat, val);
    commit(rgbToHex(nr, ng, nb));
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9a-fA-F]/g, '').slice(0, 6);
    setHexInput(raw);
    if (raw.length === 6) commit(`#${raw.toUpperCase()}`);
  };

  return (
    <div className={`premui-color-picker ${className}`}>
      <div className="premui-color-picker-section">
        <ColorSpectrum
          hue={hue}
          saturation={sat}
          value={val}
          onChange={handleSpectrumChange}
          className="premui-color-picker-spectrum"
        />
        <ColorSliders type="hue" value={hue} onChange={handleHueChange} />
        <ColorSliders type="opacity" value={opacity} onChange={(v) => onOpacityChange?.(v)} color={value} />
        <div className="premui-color-picker-input-row">
          <span className="premui-color-picker-input-icon">
            <i className="ri-drop-line" aria-hidden="true" />
          </span>
          <input
            className="premui-color-picker-input"
            value={hexInput}
            onChange={handleHexInputChange}
            maxLength={6}
            aria-label="Hex color"
          />
          <span className="premui-color-picker-opacity-display">{Math.round(opacity)}%</span>
        </div>
      </div>
      <div className="premui-color-picker-recommended">
        <p className="premui-color-picker-recommended-label">Recommended Colors</p>
        <div className="premui-color-picker-dots">
          {presets.map((color) => (
            <ColorDots
              key={color}
              color={color}
              selected={COLOR_DOT_HEX[color] === value.toUpperCase()}
              onClick={() => commit(COLOR_DOT_HEX[color])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
