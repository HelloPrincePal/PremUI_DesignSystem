import React from 'react';
import './image-upload.css';
import { Avatar } from '../Avatars/Avatar';
import { Button } from '../Button/Button';

export type ImageUploadType = 'avatar' | 'company';
export type ImageUploadAlignment = 'vertical' | 'horizontal';
export type ImageUploadState = 'empty' | 'uploaded';

export interface ImageUploadProps {
  /** "avatar" defaults to the Avatar component · "company" defaults to a generic logo placeholder */
  type?: ImageUploadType;
  /** "vertical" shows title+description above the actions · "horizontal" shows only the visual + actions inline */
  alignment?: ImageUploadAlignment;
  state?: ImageUploadState;
  /** Only shown at alignment="vertical" */
  title?: string;
  /** Only shown at alignment="vertical" */
  description?: string;
  /** Image/logo slot — defaults to Avatar (avatar type) or a building-icon placeholder (company type) */
  leading?: React.ReactNode;
  uploadLabel?: string;
  changeLabel?: string;
  removeLabel?: string;
  onUpload?: () => void;
  onChange?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const ImageUpload = ({
  type = 'avatar',
  alignment = 'vertical',
  state = 'empty',
  title = 'Upload Image',
  description = 'Min 400x400px, PNG or JPEG',
  leading,
  uploadLabel = 'Upload',
  changeLabel = 'Change',
  removeLabel = 'Remove',
  onUpload,
  onChange,
  onRemove,
  className = '',
}: ImageUploadProps) => {
  const isVertical = alignment === 'vertical';
  const size = isVertical ? 64 : 56;
  const isUploaded = state === 'uploaded';

  const defaultVisual =
    type === 'avatar' ? (
      <Avatar type={isUploaded ? 'Illustration' : 'Icon'} size={size} />
    ) : (
      <span
        className="premui-image-upload-company-placeholder"
        data-uploaded={isUploaded || undefined}
        style={{ width: size, height: size }}
      >
        <i className={isUploaded ? 'ri-building-2-fill' : 'ri-building-line'} aria-hidden="true" />
      </span>
    );

  const actions = isUploaded ? (
    <div className="premui-image-upload-actions">
      <Button type="error" style="stroke" size="sm" onClick={onRemove}>
        {removeLabel}
      </Button>
      <Button type="neutral" style="stroke" size="sm" onClick={onChange}>
        {changeLabel}
      </Button>
    </div>
  ) : (
    <Button type="neutral" style="stroke" size="sm" onClick={onUpload}>
      {uploadLabel}
    </Button>
  );

  return (
    <div className={`premui-image-upload ${className}`} data-alignment={alignment}>
      {leading ?? defaultVisual}
      {isVertical ? (
        <div className="premui-image-upload-content">
          <div className="premui-image-upload-text">
            <p className="premui-image-upload-title">{title}</p>
            <p className="premui-image-upload-description">{description}</p>
          </div>
          {actions}
        </div>
      ) : (
        actions
      )}
    </div>
  );
};
