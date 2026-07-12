import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalHeader } from './ModalHeader';
import type { ModalHeaderType, ModalHeaderSize } from './ModalHeader';

const TYPES: ModalHeaderType[] = ['basic', 'left-icon', 'error', 'warning', 'success', 'information'];
const SIZES: ModalHeaderSize[] = ['md', 'sm'];

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/Modal/ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'basic',
    size: 'md',
    title: 'Insert Modal Title Here',
    description: 'Please insert modal description here.',
    dismissible: true,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    size: { control: 'select', options: SIZES },
    title: { control: 'text' },
    description: { control: 'text' },
    dismissible: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 440 }}>
      <ModalHeader {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 6 types x both sizes — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 440 }}>
      {SIZES.map((size) =>
        TYPES.map((type) => (
          <div key={`${type}-${size}`} style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
            <ModalHeader type={type} size={size} />
          </div>
        ))
      )}
    </div>
  ),
};
