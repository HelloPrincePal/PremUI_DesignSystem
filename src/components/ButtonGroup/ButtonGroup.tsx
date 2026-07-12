import React from 'react';
import './button-group.css';
import { ButtonGroupItem } from './ButtonGroupItem';
import type { ButtonGroupItemSize } from './ButtonGroupItem';

export type ButtonGroupSize = ButtonGroupItemSize;

export interface ButtonGroupItemData {
  label?: React.ReactNode;
  /** RemixIcon name for an icon-only segment (no `ri-` prefix) */
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  items: ButtonGroupItemData[];
  size?: ButtonGroupSize;
  /** Index of the currently selected segment */
  value?: number;
  className?: string;
}

export const ButtonGroup = ({ items, size = 'sm', value, className = '' }: ButtonGroupProps) => {
  return (
    <div className={`premui-button-group ${className}`} data-size={size} role="group">
      {items.map((item, index) => (
        <ButtonGroupItem
          key={index}
          size={size}
          icon={item.icon}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
          active={value === index}
          disabled={item.disabled}
          onClick={item.onClick}
        >
          {item.label}
        </ButtonGroupItem>
      ))}
    </div>
  );
};
