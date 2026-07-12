import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusModal } from './StatusModal';
import type { StatusModalType, StatusModalAlignment } from './StatusModal';

const TYPES: StatusModalType[] = ['error', 'warning', 'success', 'information'];
const ALIGNMENTS: StatusModalAlignment[] = ['horizontal', 'vertical'];

const meta: Meta<typeof StatusModal> = {
  title: 'Components/Modal/StatusModal',
  component: StatusModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'error',
    alignment: 'horizontal',
    title: 'Insert Status Modal Title',
    description: 'Insert your status modal description here. It would look better as two lines of text.',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    alignment: { control: 'select', options: ALIGNMENTS },
    title: { control: 'text' },
    description: { control: 'text' },
    className: { table: { disable: true } },
    footerProps: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof StatusModal>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 status types x both alignments — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      {ALIGNMENTS.map((alignment) =>
        TYPES.map((type) => <StatusModal key={`${type}-${alignment}`} type={type} alignment={alignment} />)
      )}
    </div>
  ),
};
