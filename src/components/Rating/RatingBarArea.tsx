import React from 'react';
import './rating.css';
import { RatingBar } from './RatingBar';
import type { RatingBarType } from './RatingBar';

export interface RatingBarAreaProps {
  type?: RatingBarType;
  value?: number;
  onChange?: (value: number) => void;
  text?: string;
  onTextChange?: (text: string) => void;
  placeholder?: string;
  className?: string;
}

export const RatingBarArea = ({
  type = 'emoji',
  value = 0,
  onChange,
  text = '',
  onTextChange,
  placeholder = 'Tell us why!',
  className = '',
}: RatingBarAreaProps) => (
  <div className={`premui-rating-bar-area ${className}`}>
    <RatingBar type={type} value={value} onChange={onChange} />
    <textarea
      className="premui-rating-bar-area-input"
      value={text}
      onChange={(e) => onTextChange?.(e.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  </div>
);
