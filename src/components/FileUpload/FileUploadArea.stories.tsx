import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUploadArea } from './FileUploadArea';

const meta: Meta<typeof FileUploadArea> = {
  title: 'Components/FileUpload/FileUploadArea',
  component: FileUploadArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Choose a file or drag & drop it here.',
    description: 'JPEG, PNG, PDF, and MP4 formats, up to 50 MB.',
    browseLabel: 'Browse File',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    browseLabel: { control: 'text' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploadArea>;

/**
 * Test all props interactively — try dragging a file over the zone.
 */
export const Playground: Story = {};
