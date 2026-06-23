import React, { useState } from 'react';
import './accordion.css';

export interface AccordionProps {
  children: React.ReactNode;
  /** Choose between separated rounded blocks or a connected flush list */
  layout?: 'separated' | 'flush';
  className?: string;
}

export const Accordion = ({ children, layout = 'separated', className = '' }: AccordionProps) => {
  return (
    <div className={`premui-accordion layout-${layout} ${className}`}>
      {children}
    </div>
  );
};

export interface AccordionItemProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  /** RemixIcon name, e.g. "question-line" */
  icon?: string;
  /** Moves the expand/collapse icon to the start */
  flipIcon?: boolean;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem = ({
  title,
  description,
  children,
  icon,
  flipIcon = false,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  className = '',
}: AccordionItemProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (!isControlled) {
      setInternalIsOpen(!isOpen);
    }
    onToggle?.();
  };

  const indicatorIcon = isOpen ? "ri-subtract-line" : "ri-add-line";

  const alignmentClasses = [
    icon ? 'has-left-icon' : '',
    flipIcon ? 'has-flip-icon' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={`premui-accordion-item ${alignmentClasses} ${className}`}
      data-state={isOpen ? "open" : "closed"}
    >
      <button
        className="premui-accordion-header"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {flipIcon && (
          <span className="premui-accordion-indicator">
            <i className={indicatorIcon} />
          </span>
        )}

        {icon && (
          <span className="premui-accordion-left-icon">
            <i className={`ri-${icon}`} />
          </span>
        )}

        <span className="premui-accordion-title">{title}</span>

        {!flipIcon && (
          <span className="premui-accordion-indicator">
            <i className={indicatorIcon} />
          </span>
        )}
      </button>

      <div className="premui-accordion-content-grid" aria-hidden={!isOpen}>
        <div className="premui-accordion-content">
          <div className="premui-accordion-content-inner">
            {description && <p>{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
