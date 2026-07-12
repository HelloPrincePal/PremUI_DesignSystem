import React from 'react';
import './chart-legend.css';
import { ChartLegendDot } from './ChartLegendDot';
import type { ChartLegendColor } from './ChartLegendDot';

export interface ChartLegendProps {
  label?: React.ReactNode;
  color?: ChartLegendColor;
  disabled?: boolean;
  className?: string;
}

export const ChartLegend = ({ label = 'Legends', color = 'gray', disabled = false, className = '' }: ChartLegendProps) => (
  <div className={`premui-chart-legend ${className}`} data-disabled={disabled || undefined}>
    <ChartLegendDot color={disabled ? 'gray' : color} size="sm" />
    <span className="premui-chart-legend-label">{label}</span>
  </div>
);
