import React, { useId, useState } from 'react';
import './text-input.css';
import { Label } from '../FormHelpers/Label';
import { HintText } from '../FormHelpers/HintText';
import { CompactButton } from '../CompactButton/CompactButton';
import type { TextInputSize, TextInputState } from './TagInput';

export interface CounterInputProps {
  label?: string;
  sublabel?: React.ReactNode;
  required?: boolean;
  showInfo?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: TextInputSize;
  hintText?: React.ReactNode;
  showHint?: boolean;
  disabled?: boolean;
  error?: boolean;
  state?: TextInputState;
  className?: string;
}

export const CounterInput = ({
  label = 'Counter Input',
  sublabel = '(Optional)',
  required = true,
  showInfo = true,
  value,
  defaultValue = 16,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  size = 'md',
  hintText = 'This is a hint text to help user.',
  showHint = true,
  disabled = false,
  error = false,
  state,
  className = '',
}: CounterInputProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const resolvedValue = value ?? internalValue;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';

  const commit = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setInternalValue(clamped);
    onChange?.(clamped);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = Number(e.target.value.replace(/[^-0-9]/g, ''));
    if (!Number.isNaN(parsed)) commit(parsed);
  };

  return (
    <div className={`premui-text-input-field ${className}`}>
      {label && (
        <Label htmlFor={id} sublabel={sublabel} required={required} showInfo={showInfo} disabled={isDisabled}>
          {label}
        </Label>
      )}
      <div
        className="premui-text-input-wrapper premui-counter-input-wrapper"
        data-size={size}
        data-state={state}
        data-error={isError || undefined}
        data-disabled={isDisabled || undefined}
      >
        <CompactButton
          icon="subtract-line"
          style="stroke"
          size="md"
          onClick={() => commit(resolvedValue - step)}
          disabled={isDisabled || resolvedValue <= min}
          ariaLabel="Decrease"
        />
        <input
          id={id}
          type="text"
          inputMode="numeric"
          className="premui-text-input-input premui-counter-input-input"
          value={resolvedValue}
          onChange={handleTextChange}
          disabled={isDisabled}
        />
        <CompactButton
          icon="add-line"
          style="stroke"
          size="md"
          onClick={() => commit(resolvedValue + step)}
          disabled={isDisabled || resolvedValue >= max}
          ariaLabel="Increase"
        />
      </div>
      {showHint && <HintText state={isError ? 'error' : isDisabled ? 'disabled' : 'default'}>{hintText}</HintText>}
    </div>
  );
};
