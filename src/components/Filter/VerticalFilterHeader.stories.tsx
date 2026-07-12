import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalFilterHeader } from './VerticalFilterHeader';

const meta: Meta<typeof VerticalFilterHeader> = {
  title: 'Components/Filter/VerticalFilterHeader',
  component: VerticalFilterHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Label',
    showClear: true,
    clearLabel: 'Clear',
  },
  argTypes: {
    label: { control: 'text' },
    showClear: { control: 'boolean' },
    clearLabel: { control: 'text' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalFilterHeader>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 400, border: '1px solid var(--color-stroke-soft)', borderRadius: 8 }}>
      <VerticalFilterHeader {...args} />
    </div>
  ),
};
