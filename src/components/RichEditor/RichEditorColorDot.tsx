import React from 'react';
import './rich-editor.css';

export type RichEditorColorName =
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'sky'
  | 'pink'
  | 'teal';

export interface RichEditorColorDotProps {
  color?: RichEditorColorName;
  size?: number;
  className?: string;
}

export const RichEditorColorDot = ({ color = 'gray', size = 16, className = '' }: RichEditorColorDotProps) => (
  <span
    className={`premui-rich-editor-color-dot ${className}`}
    data-color={color}
    style={{ width: size, height: size }}
    aria-hidden="true"
  />
);
