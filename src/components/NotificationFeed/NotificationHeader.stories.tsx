import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationHeader } from './NotificationHeader';

const meta: Meta<typeof NotificationHeader> = {
  title: 'Components/NotificationFeed/NotificationHeader',
  component: NotificationHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Notifications',
    showMarkAllRead: true,
    showSettings: false,
  },
  argTypes: {
    title: { control: 'text' },
    showMarkAllRead: { control: 'boolean' },
    showSettings: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationHeader>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 540 }}>
      <NotificationHeader {...args} />
    </div>
  ),
};
