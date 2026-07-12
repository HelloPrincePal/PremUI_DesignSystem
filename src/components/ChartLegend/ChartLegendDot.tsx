import React from 'react';
import './chart-legend.css';

export type ChartLegendColor =
  | 'gray'
  | 'lightGray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'sky'
  | 'teal'
  | 'pink';
export type ChartLegendDotSize = 'sm' | 'md';

export interface ChartLegendDotProps {
  color?: ChartLegendColor;
  /** sm = 16px · md = 20px */
  size?: ChartLegendDotSize;
  className?: string;
}

export const ChartLegendDot = ({ color = 'gray', size = 'sm', className = '' }: ChartLegendDotProps) => (
  <span className={`premui-chart-legend-dot ${className}`} data-color={color} data-size={size} aria-hidden="true" />
);
