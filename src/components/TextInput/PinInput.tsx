import React, { useRef, useState } from 'react';
import './text-input.css';

export type PinInputState = 'default' | 'hover' | 'disabled' | 'error';

export interface PinInputProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  state?: PinInputState;
  className?: string;
}

export const PinInput = ({
  length = 6,
  value,
  defaultValue = '',
  onChange,
  onComplete,
  disabled = false,
  error = false,
  state,
  className = '',
}: PinInputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const resolvedValue = value ?? internalValue;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const commit = (next: string) => {
    setInternalValue(next);
    onChange?.(next);
    if (next.length === length) onComplete?.(next);
  };

  const setDigit = (index: number, digit: string) => {
    const chars = resolvedValue.padEnd(length, ' ').split('');
    chars[index] = digit;
    commit(chars.join('').trimEnd());
  };

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    if (!raw) {
      setDigit(index, '');
      return;
    }
    const digit = raw[raw.length - 1];
    setDigit(index, digit);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !resolvedValue[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, length);
    if (!pasted) return;
    e.preventDefault();
    commit(pasted);
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <div
      className={`premui-pin-input ${className}`}
      data-state={state}
      data-error={isError || undefined}
      data-disabled={isDisabled || undefined}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="premui-pin-input-digit"
          value={resolvedValue[index] ?? ''}
          onChange={handleChange(index)}
          onKeyDown={handleKeyDown(index)}
          onPaste={handlePaste}
          disabled={isDisabled}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};
