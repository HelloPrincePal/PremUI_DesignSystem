import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from './ImageUpload';
import type { ImageUploadType, ImageUploadAlignment, ImageUploadState } from './ImageUpload';

const TYPES: ImageUploadType[] = ['avatar', 'company'];
const ALIGNMENTS: ImageUploadAlignment[] = ['vertical', 'horizontal'];
const STATES: ImageUploadState[] = ['empty', 'uploaded'];

const meta: Meta<typeof ImageUpload> = {
  title: 'Components/FileUpload/ImageUpload',
  component: ImageUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'avatar',
    alignment: 'vertical',
    state: 'empty',
    title: 'Upload Image',
    description: 'Min 400x400px, PNG or JPEG',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    alignment: { control: 'select', options: ALIGNMENTS },
    state: { control: 'select', options: STATES },
    title: { control: 'text' },
    description: { control: 'text' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Avatar/Company x Vertical/Horizontal x Empty/Uploaded — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {TYPES.map((type) =>
        ALIGNMENTS.map((alignment) =>
          STATES.map((state) => (
            <ImageUpload key={`${type}-${alignment}-${state}`} type={type} alignment={alignment} state={state} />
          ))
        )
      )}
    </div>
  ),
};
