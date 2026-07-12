import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import type { PopoverPlacement } from './Popover';
import { PopoverFooter } from './PopoverFooter';

const PLACEMENTS: PopoverPlacement[] = [
  'top-start', 'top', 'top-end',
  'bottom-start', 'bottom', 'bottom-end',
  'left-start', 'left', 'left-end',
  'right-start', 'right', 'right-end',
];

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    placement: 'top-start',
    title: 'Insert Popover',
    description: 'Insert popover description here. It would look much better as three lines of text.',
    showIcon: true,
    dismissible: true,
    showTail: true,
  },
  argTypes: {
    placement: { control: 'select', options: PLACEMENTS },
    title: { control: 'text' },
    description: { control: 'text' },
    showIcon: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    showTail: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
    footer: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ padding: 48 }}>
      <Popover {...args} footer={<PopoverFooter type="text-stepper" />} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 12 placements — mirrors the Figma variant grid. Each card's tail points toward
 * where an anchor element would sit relative to that placement.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 32px', padding: 48 }}>
      {PLACEMENTS.map((placement) => (
        <div key={placement}>
          <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--color-text-soft)' }}>{placement}</p>
          <Popover placement={placement} footer={<PopoverFooter type="text-stepper" />} />
        </div>
      ))}
    </div>
  ),
};
