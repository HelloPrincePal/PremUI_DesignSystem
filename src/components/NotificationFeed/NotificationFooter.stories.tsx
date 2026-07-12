import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationFooter } from './NotificationFooter';

const meta: Meta<typeof NotificationFooter> = {
  title: 'Components/NotificationFeed/NotificationFooter',
  component: NotificationFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    showManageLink: true,
  },
  argTypes: {
    showManageLink: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 540 }}>
      <NotificationFooter {...args} />
    </div>
  ),
};
