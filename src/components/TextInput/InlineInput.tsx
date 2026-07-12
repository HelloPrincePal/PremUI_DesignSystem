import React, { useId, useState } from 'react';
import './text-input.css';
import { CompactButton } from '../CompactButton/CompactButton';
import type { TextInputState } from './TagInput';

export interface InlineInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onConfirm?: (value: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  leading?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  state?: TextInputState;
  className?: string;
}

export const InlineInput = ({
  value,
  defaultValue = '',
  onChange,
  onConfirm,
  onCancel,
  placeholder = 'Placeholder text...',
  leading = <i className="ri-user-3-line" aria-hidden="true" />,
  disabled = false,
  error = false,
  state,
  className = '',
}: InlineInputProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [editingValue, setEditingValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const resolvedValue = value ?? internalValue;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';
  const isEditingForced = state === 'focus';
  const showEditingUi = isEditing || isEditingForced;

  const startEditing = () => {
    if (isDisabled) return;
    setEditingValue(resolvedValue);
    setIsEditing(true);
  };

  const confirm = () => {
    setInternalValue(editingValue);
    onChange?.(editingValue);
    onConfirm?.(editingValue);
    setIsEditing(false);
  };

  const cancel = () => {
    setIsEditing(false);
    onCancel?.();
  };

  return (
    <div
      className={`premui-inline-input ${className}`}
      data-state={state}
      data-editing={showEditingUi || undefined}
      data-error={isError || undefined}
      data-disabled={isDisabled || undefined}
    >
      {leading && <span className="premui-inline-input-leading">{leading}</span>}
      <input
        id={id}
        type="text"
        className="premui-inline-input-field"
        placeholder={placeholder}
        value={showEditingUi ? editingValue : resolvedValue}
        onChange={(e) => setEditingValue(e.target.value)}
        onFocus={startEditing}
        disabled={isDisabled}
        readOnly={!showEditingUi}
      />
      {showEditingUi ? (
        <span className="premui-inline-input-actions">
          <CompactButton icon="close-line" style="ghost" size="md" onClick={cancel} ariaLabel="Cancel" />
          <CompactButton icon="check-line" style="ghost" size="md" onClick={confirm} ariaLabel="Confirm" />
        </span>
      ) : (
        <CompactButton
          icon="pencil-line"
          style="ghost"
          size="md"
          onClick={startEditing}
          disabled={isDisabled}
          ariaLabel="Edit"
          className="premui-inline-input-pencil"
        />
      )}
    </div>
  );
};
