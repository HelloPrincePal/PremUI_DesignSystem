import React, { useId, useState } from 'react';
import './text-input.css';
import { Label } from '../FormHelpers/Label';
import { HintText } from '../FormHelpers/HintText';
import { CompactButton } from '../CompactButton/CompactButton';
import type { TextInputSize, TextInputState } from './TagInput';

export type InputSize = TextInputSize;
export type InputState = TextInputState;

export interface InputAction {
  icon: string;
  onClick: () => void;
  ariaLabel?: string;
}

export interface InputProps {
  label?: string;
  sublabel?: React.ReactNode;
  required?: boolean;
  showInfo?: boolean;
  onInfoClick?: () => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Leading visual slot — an icon, a currency symbol, etc. */
  leading?: React.ReactNode;
  /** Trailing visual slot — a shortcut badge, an inline select, a static icon */
  trailing?: React.ReactNode;
  /** Real "x" clear button that appears once there's a value */
  clearable?: boolean;
  /** Real show/hide toggle for type="password" fields */
  showPasswordToggle?: boolean;
  /** A separated trailing action button (e.g. copy-to-clipboard), rendered in its own bordered cell */
  action?: InputAction;
  size?: InputSize;
  hintText?: React.ReactNode;
  showHint?: boolean;
  disabled?: boolean;
  error?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover/:focus/disabled/error usage. */
  state?: InputState;
  className?: string;
}

export const Input = ({
  label = 'Change Label',
  sublabel = '(Optional)',
  required = true,
  showInfo = true,
  onInfoClick,
  type = 'text',
  placeholder = 'Placeholder text...',
  value,
  defaultValue = '',
  onChange,
  leading,
  trailing,
  clearable = false,
  showPasswordToggle = false,
  action,
  size = 'md',
  hintText = 'This is a hint text to help user.',
  showHint = true,
  disabled = false,
  error = false,
  state,
  className = '',
}: InputProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const resolvedValue = value ?? internalValue;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';
  const resolvedType = showPasswordToggle ? (passwordVisible ? 'text' : 'password') : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const clear = () => {
    setInternalValue('');
    onChange?.('');
  };

  return (
    <div className={`premui-text-input-field ${className}`}>
      {label && (
        <Label htmlFor={id} sublabel={sublabel} required={required} showInfo={showInfo} onInfoClick={onInfoClick} disabled={isDisabled}>
          {label}
        </Label>
      )}
      <div className="premui-input-group">
        <div
          className="premui-text-input-wrapper"
          data-size={size}
          data-state={state}
          data-error={isError || undefined}
          data-disabled={isDisabled || undefined}
        >
          {leading && <span className="premui-text-input-leading">{leading}</span>}
          <input
            id={id}
            type={resolvedType}
            className="premui-text-input-input"
            placeholder={placeholder}
            value={resolvedValue}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {clearable && resolvedValue && !isDisabled && (
            <CompactButton icon="close-line" style="ghost" size="md" onClick={clear} ariaLabel="Clear" />
          )}
          {showPasswordToggle && (
            <CompactButton
              icon={passwordVisible ? 'eye-off-line' : 'eye-line'}
              style="ghost"
              size="md"
              onClick={() => setPasswordVisible((v) => !v)}
              disabled={isDisabled}
              ariaLabel={passwordVisible ? 'Hide password' : 'Show password'}
            />
          )}
          {trailing && <span className="premui-text-input-trailing">{trailing}</span>}
        </div>
        {action && (
          <button
            type="button"
            className="premui-input-action"
            data-size={size}
            onClick={action.onClick}
            disabled={isDisabled}
            aria-label={action.ariaLabel ?? 'Action'}
          >
            <i className={`ri-${action.icon}`} aria-hidden="true" />
          </button>
        )}
      </div>
      {showHint && <HintText state={isError ? 'error' : isDisabled ? 'disabled' : 'default'}>{hintText}</HintText>}
    </div>
  );
};
