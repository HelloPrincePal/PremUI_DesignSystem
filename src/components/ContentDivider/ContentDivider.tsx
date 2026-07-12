import React from 'react';
import './content-divider.css';
import { FancyButton } from '../FancyButton/FancyButton';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import type { ButtonGroupItemData } from '../ButtonGroup/ButtonGroup';

export type ContentDividerType =
  | 'line'
  | 'line-spacing'
  | 'text-line'
  | 'text'
  | 'solid-text'
  | 'icon-button'
  | 'icon-button-group'
  | 'text-button'
  | 'text-button-group';

export interface ContentDividerProps {
  type?: ContentDividerType;
  /** Label for the text / text-line / solid-text variants */
  text?: string;
  /** RemixIcon name for the icon-button variant */
  icon?: string;
  onIconButtonClick?: () => void;
  /** Label for the text-button variant */
  buttonLabel?: string;
  onButtonClick?: () => void;
  /** Segments for the icon-button-group / text-button-group variants */
  groupItems?: ButtonGroupItemData[];
  className?: string;
}

const line = <span className="premui-content-divider-line" />;

export const ContentDivider = ({
  type = 'line',
  text = 'OR',
  icon = 'add-line',
  onIconButtonClick,
  buttonLabel = 'Add',
  onButtonClick,
  groupItems,
  className = '',
}: ContentDividerProps) => {
  const resolvedGroupItems =
    groupItems ??
    (type === 'icon-button-group'
      ? [{ icon: 'arrow-left-s-line' }, { icon: 'add-line' }, { icon: 'arrow-right-s-line' }]
      : [{ label: 'Button' }, { label: 'Button' }, { label: 'Button' }]);
  if (type === 'line') {
    return <div className={`premui-content-divider-bare ${className}`} />;
  }

  if (type === 'line-spacing') {
    return (
      <div className={`premui-content-divider-spacing ${className}`}>
        {line}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className={`premui-content-divider-text-wrap ${className}`}>
        <span className="premui-content-divider-label">{text}</span>
      </div>
    );
  }

  if (type === 'solid-text') {
    return (
      <div className={`premui-content-divider-solid ${className}`}>
        <span className="premui-content-divider-label">{text}</span>
      </div>
    );
  }

  if (type === 'text-line') {
    return (
      <div className={`premui-content-divider-row ${className}`}>
        {line}
        <span className="premui-content-divider-label-sm">{text}</span>
        {line}
      </div>
    );
  }

  return (
    <div className={`premui-content-divider-row ${className}`}>
      {type === 'icon-button' && (
        <FancyButton type="basic" size="xs" leftIcon={icon} onClick={onIconButtonClick} />
      )}
      {type === 'text-button' && (
        <FancyButton type="basic" size="xs" onClick={onButtonClick}>
          {buttonLabel}
        </FancyButton>
      )}
      {type === 'icon-button-group' && <ButtonGroup size="xs" items={resolvedGroupItems} />}
      {type === 'text-button-group' && <ButtonGroup size="sm" items={resolvedGroupItems} />}
      {line}
    </div>
  );
};
