import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationTabMenu } from './NotificationTabMenu';

const meta: Meta<typeof NotificationTabMenu> = {
  title: 'Components/NotificationFeed/NotificationTabMenu',
  component: NotificationTabMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    showFilterButton: true,
  },
  argTypes: {
    showFilterButton: { control: 'boolean' },
    tabs: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationTabMenu>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [active, setActive] = useState('all');
    return (
      <div style={{ width: 540 }}>
        <NotificationTabMenu {...args} activeValue={active} onChange={setActive} />
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * 2 / 3 / 4 tabs — mirrors the Figma quantity variants.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 540 }}>
      <NotificationTabMenu tabs={[{ label: 'All', value: 'all' }, { label: 'Inbox', value: 'inbox', count: 2 }]} activeValue="all" />
      <NotificationTabMenu
        tabs={[{ label: 'All', value: 'all' }, { label: 'Inbox', value: 'inbox', count: 2 }, { label: 'Following', value: 'following' }]}
        activeValue="all"
      />
      <NotificationTabMenu activeValue="all" />
    </div>
  ),
};
