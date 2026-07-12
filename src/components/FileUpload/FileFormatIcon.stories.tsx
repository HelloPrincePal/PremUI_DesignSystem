import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileFormatIcon } from './FileFormatIcon';
import type { FileFormatIconColor, FileFormatIconSize } from './FileFormatIcon';

const COLORS: FileFormatIconColor[] = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink', 'gray'];
const SIZES: FileFormatIconSize[] = ['md', 'xs'];

const meta: Meta<typeof FileFormatIcon> = {
  title: 'Components/FileUpload/FileFormatIcon',
  component: FileFormatIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    color: 'red',
    format: 'PDF',
    size: 'md',
  },
  argTypes: {
    color: { control: 'select', options: COLORS },
    size: { control: 'select', options: SIZES },
    format: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FileFormatIcon>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 9 colors x both sizes — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          {COLORS.map((color) => (
            <FileFormatIcon key={color} color={color} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
