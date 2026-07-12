import React, { useRef, useState } from 'react';
import './file-upload.css';
import { Button } from '../Button/Button';

export interface FileUploadAreaProps {
  title?: string;
  description?: string;
  browseLabel?: string;
  /** Icon slot — defaults to an upload-cloud icon */
  leading?: React.ReactNode;
  accept?: string;
  onFilesSelected?: (files: FileList) => void;
  className?: string;
}

export const FileUploadArea = ({
  title = 'Choose a file or drag & drop it here.',
  description = 'JPEG, PNG, PDF, and MP4 formats, up to 50 MB.',
  browseLabel = 'Browse File',
  leading,
  accept,
  onFilesSelected,
  className = '',
}: FileUploadAreaProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (files && files.length > 0) onFilesSelected?.(files);
  };

  return (
    <div
      className={`premui-file-upload-area ${className}`}
      data-state={isDragging ? 'hover' : 'default'}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <span className="premui-file-upload-area-icon">
        {leading ?? <i className="ri-upload-cloud-2-line" aria-hidden="true" />}
      </span>
      <div className="premui-file-upload-area-text">
        <p className="premui-file-upload-area-title">{title}</p>
        <p className="premui-file-upload-area-description">{description}</p>
      </div>
      <Button type="neutral" style="stroke" size="sm" onClick={() => inputRef.current?.click()}>
        {browseLabel}
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
};
