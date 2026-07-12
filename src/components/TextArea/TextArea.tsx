import React, { useId, useState } from 'react';
import './text-area.css';
import { Label } from '../FormHelpers/Label';
import { HintText } from '../FormHelpers/HintText';

export type TextAreaState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

export interface TextAreaProps {
  label?: string;
  sublabel?: React.ReactNode;
  required?: boolean;
  showInfo?: boolean;
  onInfoClick?: () => void;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  showCounter?: boolean;
  showResizeIcon?: boolean;
  hintText?: React.ReactNode;
  showHint?: boolean;
  disabled?: boolean;
  error?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/:focus/disabled/error usage. */
  state?: TextAreaState;
  rows?: number;
  className?: string;
}

export const TextArea = ({
  label = 'Label',
  sublabel = '(Optional)',
  required = true,
  showInfo = true,
  onInfoClick,
  placeholder = 'Placeholder text...',
  value,
  defaultValue = '',
  onChange,
  maxLength = 200,
  showCounter = true,
  showResizeIcon = true,
  hintText = 'This is a hint text to help user.',
  showHint = true,
  disabled = false,
  error = false,
  state,
  rows = 4,
  className = '',
}: TextAreaProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const resolvedValue = value ?? internalValue;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={`premui-text-area-field ${className}`}>
      {label && (
        <Label htmlFor={id} sublabel={sublabel} required={required} showInfo={showInfo} onInfoClick={onInfoClick} disabled={isDisabled}>
          {label}
        </Label>
      )}
      <div
        className="premui-text-area-wrapper"
        data-state={state}
        data-error={isError || undefined}
        data-disabled={isDisabled || undefined}
      >
        <textarea
          id={id}
          className="premui-text-area-input"
          placeholder={placeholder}
          value={resolvedValue}
          onChange={handleChange}
          maxLength={maxLength}
          disabled={isDisabled}
          rows={rows}
        />
        {showCounter && (
          <div className="premui-text-area-counter">
            <span className="premui-text-area-count">
              {resolvedValue.length}/{maxLength}
            </span>
            {showResizeIcon && <i className="ri-expand-diagonal-2-line premui-text-area-resize-icon" aria-hidden="true" />}
          </div>
        )}
      </div>
      {showHint && (
        <HintText state={isError ? 'error' : isDisabled ? 'disabled' : 'default'}>{hintText}</HintText>
      )}
    </div>
  );
};
