import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopbarItem } from './TopbarItem';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const meta: Meta<typeof TopbarItem> = {
  title: 'Product Components/Navigation/Topbar Components/TopbarItem',
  component: TopbarItem,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    label: 'Dashboard',
    icon: 'layout-grid-line',
  },
  argTypes: {
    icon: ICON_CONTROL,
    rightIcon: ICON_CONTROL,
    leading: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TopbarItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default, hover, and active states, plus the badge/notification affordances.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <TopbarItem label="Dashboard" state="default" />
      <TopbarItem label="Dashboard" state="hover" />
      <TopbarItem label="Dashboard" state="active" active />
      <TopbarItem label="Reports" badge="New" />
      <TopbarItem label="Inbox" notificationCount={2} />
      <TopbarItem label="Others" showIcon={false} showRightIcon />
    </div>
  ),
};
