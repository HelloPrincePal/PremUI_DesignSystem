import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import type { SidebarItemState } from './SidebarItem';

const STATES: SidebarItemState[] = ['default', 'hover', 'active'];

const meta: Meta<typeof SidebarItem> = {
  title: 'Product Components/Navigation/Sidebar Components/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    icon: { control: 'text' },
    label: { control: 'text' },
    leading: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

/**
 * Click to toggle the active (selected) state.
 */
export const Playground: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    return <SidebarItem {...args} active={active} onClick={() => setActive((v) => !v)} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Active — expanded and collapsed (icon-only rail) — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: 24 }}>
        {STATES.map((state) => (
          <SidebarItem key={state} state={state} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', paddingLeft: 24 }}>
        {STATES.map((state) => (
          <SidebarItem key={state} state={state} collapsed />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: 24 }}>
        <SidebarItem label="Notifications" icon="notification-3-line" notificationCount={2} />
        <SidebarItem label="Reports" icon="bar-chart-2-line" badge="New" />
        <SidebarItem label="Search" icon="search-line" shortcut="⌘1" />
        <SidebarItem label="Analytics" indicator indicatorColor="green" />
      </div>
    </div>
  ),
};
