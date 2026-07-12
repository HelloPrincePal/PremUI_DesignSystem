import React from 'react';
import './file-upload.css';
import { FileFormatIcon } from './FileFormatIcon';
import type { FileFormatIconColor } from './FileFormatIcon';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { CompactButton } from '../CompactButton/CompactButton';
import { LinkButton } from '../LinkButton/LinkButton';

export type FileUploadCardState = 'uploading' | 'success' | 'error';

export interface FileUploadCardProps {
  state?: FileUploadCardState;
  fileName?: string;
  /** e.g. "0 KB of 120 KB" */
  sizeText?: string;
  /** 0–100, only used when state="uploading" */
  progress?: number;
  showStatus?: boolean;
  format?: string;
  color?: FileFormatIconColor;
  onDismiss?: () => void;
  onRetry?: () => void;
  className?: string;
}

export const FileUploadCard = ({
  state = 'uploading',
  fileName = 'my-cv.pdf',
  sizeText = '0 KB of 120 KB',
  progress = 10,
  showStatus = true,
  format = 'PDF',
  color = 'red',
  onDismiss,
  onRetry,
  className = '',
}: FileUploadCardProps) => (
  <div className={`premui-file-upload-card ${className}`} data-state={state}>
    <div className="premui-file-upload-card-content">
      <FileFormatIcon color={color} format={format} size="md" />
      <div className="premui-file-upload-card-text">
        <p className="premui-file-upload-card-name">{fileName}</p>
        <div className="premui-file-upload-card-description">
          <span>{sizeText}</span>
          <span aria-hidden="true">∙</span>
          {showStatus && state === 'uploading' && (
            <span className="premui-file-upload-card-status">
              <i className="ri-loader-2-fill premui-file-upload-card-spinner" aria-hidden="true" />
              Uploading...
            </span>
          )}
          {showStatus && state === 'success' && (
            <span className="premui-file-upload-card-status" data-success>
              <i className="ri-checkbox-circle-fill" aria-hidden="true" />
              Completed
            </span>
          )}
          {showStatus && state === 'error' && (
            <span className="premui-file-upload-card-status" data-error>
              <i className="ri-error-warning-fill" aria-hidden="true" />
              Failed
            </span>
          )}
        </div>
        {state === 'error' && (
          <LinkButton style="error" size="sm" underline onClick={onRetry}>
            Try Again
          </LinkButton>
        )}
      </div>
      <CompactButton
        icon={state === 'uploading' ? 'close-line' : 'delete-bin-line'}
        style="ghost"
        size="lg"
        onClick={onDismiss}
        ariaLabel={state === 'uploading' ? 'Cancel upload' : 'Remove file'}
      />
    </div>
    {state === 'uploading' && <ProgressBar percentage={progress} className="premui-file-upload-card-progress" />}
  </div>
);
