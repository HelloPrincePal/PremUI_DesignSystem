import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaymentIcon } from './PaymentIcon';
import type { PaymentIconType } from './PaymentIcon';

const TYPES: PaymentIconType[] = ['water', 'gas', 'electricity', 'donate', 'internet', 'phone', 'rent', 'tax'];

const meta: Meta<typeof PaymentIcon> = {
  title: 'Components/PaymentIcon',
  component: PaymentIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'water',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentIcon>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 8 types — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {TYPES.map((type) => (
        <PaymentIcon key={type} type={type} />
      ))}
    </div>
  ),
};
