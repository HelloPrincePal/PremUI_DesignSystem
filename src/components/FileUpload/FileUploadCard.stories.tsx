import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUploadCard } from './FileUploadCard';
import type { FileUploadCardState } from './FileUploadCard';

const STATES: FileUploadCardState[] = ['uploading', 'success', 'error'];

const meta: Meta<typeof FileUploadCard> = {
  title: 'Components/FileUpload/FileUploadCard',
  component: FileUploadCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    state: 'uploading',
    fileName: 'my-cv.pdf',
    sizeText: '0 KB of 120 KB',
    progress: 10,
    showStatus: true,
  },
  argTypes: {
    state: { control: 'select', options: STATES },
    fileName: { control: 'text' },
    sizeText: { control: 'text' },
    progress: { control: 'number' },
    showStatus: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploadCard>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Uploading / Success / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {STATES.map((state) => (
        <FileUploadCard key={state} state={state} progress={45} />
      ))}
    </div>
  ),
};
