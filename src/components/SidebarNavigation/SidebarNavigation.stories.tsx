import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNavigation } from './SidebarNavigation';

const meta: Meta<typeof SidebarNavigation> = {
  title: 'Product Components/Navigation/SidebarNavigation',
  component: SidebarNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    showSearch: true,
    header: { brand: 'Synergy', description: 'HR Management' },
  },
  argTypes: {
    header: { table: { disable: true } },
    user: { table: { disable: true } },
    mainItems: { table: { disable: true } },
    supportingItems: { table: { disable: true } },
    featureCard: { table: { disable: true } },
    onActiveChange: { table: { disable: true } },
    onItemClick: { table: { disable: true } },
    onSearchChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarNavigation>;

/**
 * A real navigation shell — click an item to select it, type in the search field,
 * toggle "collapsed" in the controls to switch every child to its icon-only rail mode.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ height: '900px' }}>
      <SidebarNavigation {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Expanded vs. collapsed, with and without the feature card promo — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', height: '900px' }}>
      <SidebarNavigation header={{ brand: 'Synergy', description: 'HR Management' }} showSearch />
      <SidebarNavigation header={{ brand: 'Synergy', description: 'HR Management' }} featureCard={null} />
      <SidebarNavigation header={{ brand: 'Synergy', description: 'HR Management' }} collapsed />
    </div>
  ),
};
