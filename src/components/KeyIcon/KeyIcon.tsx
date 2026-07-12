import React from 'react';
import './key-icon.css';

export type KeyIconColor =
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'pink'
  | 'teal';
export type KeyIconSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm';
export type KeyIconStyle = 'stroke' | 'lighter';

export interface KeyIconProps {
  /** RemixIcon name (no `ri-` prefix) */
  icon?: string;
  color?: KeyIconColor;
  /** 2xl = 64px · xl = 56px · lg = 48px · md = 40px · sm = 32px */
  size?: KeyIconSize;
  /** stroke = white bordered surface · lighter = tinted surface, no border */
  style?: KeyIconStyle;
  className?: string;
}

export const KeyIcon = ({
  icon = 'user-6-line',
  color = 'gray',
  size = '2xl',
  style = 'stroke',
  className = '',
}: KeyIconProps) => (
  <span className={`premui-key-icon ${className}`} data-color={color} data-size={size} data-style={style}>
    <i className={`ri-${icon}`} aria-hidden="true" />
  </span>
);
