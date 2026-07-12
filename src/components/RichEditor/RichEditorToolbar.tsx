import React from 'react';
import './rich-editor.css';

export interface RichEditorToolbarProps {
  /** RichEditorItem / RichEditorDivider children, composed freely to match any toolbar layout */
  children?: React.ReactNode;
  className?: string;
}

export const RichEditorToolbar = ({ children, className = '' }: RichEditorToolbarProps) => (
  <div className={`premui-rich-editor-toolbar ${className}`} role="toolbar">
    {children}
  </div>
);
