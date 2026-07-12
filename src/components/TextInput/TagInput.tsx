import React, { useId, useState } from 'react';
import './text-input.css';
import { Label } from '../FormHelpers/Label';
import { HintText } from '../FormHelpers/HintText';
import { Tag } from '../Tag/Tag';

export type TextInputSize = 'md' | 'sm' | 'xs';
export type TextInputState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

export interface TagInputProps {
  label?: string;
  sublabel?: React.ReactNode;
  required?: boolean;
  showInfo?: boolean;
  placeholder?: string;
  tags?: string[];
  defaultTags?: string[];
  onTagsChange?: (tags: string[]) => void;
  size?: TextInputSize;
  hintText?: React.ReactNode;
  showHint?: boolean;
  disabled?: boolean;
  error?: boolean;
  state?: TextInputState;
  className?: string;
}

export const TagInput = ({
  label = 'Tag Input',
  sublabel = '(Optional)',
  required = true,
  showInfo = true,
  placeholder = 'Add tags...',
  tags,
  defaultTags = [],
  onTagsChange,
  size = 'md',
  hintText = 'This is a hint text to help user.',
  showHint = true,
  disabled = false,
  error = false,
  state,
  className = '',
}: TagInputProps) => {
  const id = useId();
  const [internalTags, setInternalTags] = useState(defaultTags);
  const [draft, setDraft] = useState('');
  const resolvedTags = tags ?? internalTags;
  const isDisabled = disabled || state === 'disabled';
  const isError = error || state === 'error';

  const commitTags = (next: string[]) => {
    setInternalTags(next);
    onTagsChange?.(next);
  };

  const addTag = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || resolvedTags.includes(trimmed)) return;
    commitTags([...resolvedTags, trimmed]);
  };

  const removeTag = (tag: string) => commitTags(resolvedTags.filter((t) => t !== tag));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(draft);
      setDraft('');
    } else if (e.key === 'Backspace' && draft === '' && resolvedTags.length > 0) {
      removeTag(resolvedTags[resolvedTags.length - 1]);
    }
  };

  return (
    <div className={`premui-text-input-field ${className}`}>
      {label && (
        <Label htmlFor={id} sublabel={sublabel} required={required} showInfo={showInfo} disabled={isDisabled}>
          {label}
        </Label>
      )}
      <div
        className="premui-text-input-wrapper premui-tag-input-wrapper"
        data-size={size}
        data-state={state}
        data-error={isError || undefined}
        data-disabled={isDisabled || undefined}
      >
        <input
          id={id}
          type="text"
          className="premui-text-input-input"
          placeholder={placeholder}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
        />
        {resolvedTags.length > 0 && (
          <div className="premui-tag-input-tags">
            {resolvedTags.map((tag) => (
              <Tag key={tag} dismissible onDismiss={() => removeTag(tag)} disabled={isDisabled}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
      {showHint && <HintText state={isError ? 'error' : isDisabled ? 'disabled' : 'default'}>{hintText}</HintText>}
    </div>
  );
};
