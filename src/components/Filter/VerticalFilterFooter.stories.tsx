import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalFilterFooter } from './VerticalFilterFooter';

const meta: Meta<typeof VerticalFilterFooter> = {
  title: 'Components/Filter/VerticalFilterFooter',
  component: VerticalFilterFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    clearLabel: 'Clear',
    applyLabel: 'Apply',
  },
  argTypes: {
    clearLabel: { control: 'text' },
    applyLabel: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalFilterFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 400, border: '1px solid var(--color-stroke-soft)', borderRadius: 8 }}>
      <VerticalFilterFooter {...args} />
    </div>
  ),
};
