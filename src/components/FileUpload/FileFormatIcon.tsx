import React from 'react';
import './file-upload.css';

export type FileFormatIconColor =
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'teal'
  | 'pink';
export type FileFormatIconSize = 'md' | 'xs';

export interface FileFormatIconProps {
  color?: FileFormatIconColor;
  /** Format label shown on the colored tag, e.g. "PDF", "DOC", "MP4" */
  format?: string;
  /** md = 40px · xs = 32px */
  size?: FileFormatIconSize;
  className?: string;
}

export const FileFormatIcon = ({
  color = 'red',
  format = 'PDF',
  size = 'md',
  className = '',
}: FileFormatIconProps) => (
  <span className={`premui-file-format-icon ${className}`} data-color={color} data-size={size}>
    <i className="ri-file-2-line premui-file-format-icon-page" aria-hidden="true" />
    <span className="premui-file-format-icon-tag">{format}</span>
  </span>
);
