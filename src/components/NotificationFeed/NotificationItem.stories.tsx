import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import type { NotificationItemType, NotificationItemState } from './NotificationItem';

const TYPES: NotificationItemType[] = ['basic', 'file', 'button', 'message'];
const STATES: NotificationItemState[] = ['default', 'hover'];

const meta: Meta<typeof NotificationItem> = {
  title: 'Components/NotificationFeed/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Label',
    timestamp: '8 min ago',
    description: 'Description insert here.',
    type: 'basic',
  },
  argTypes: {
    title: { control: 'text' },
    timestamp: { control: 'text' },
    description: { control: 'text' },
    type: { control: 'select', options: TYPES },
    state: { control: 'select', options: [undefined, ...STATES] },
    fileName: { control: 'text' },
    fileSize: { control: 'text' },
    message: { control: 'text' },
    denyLabel: { control: 'text' },
    approveLabel: { control: 'text' },
    showMore: { control: 'boolean' },
    className: { table: { disable: true } },
    companyIcon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 524 }}>
      <NotificationItem {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 types x both states — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: 524 }}>
      {TYPES.map((type) =>
        STATES.map((state) => <NotificationItem key={`${type}-${state}`} type={type} state={state} />)
      )}
    </div>
  ),
};
