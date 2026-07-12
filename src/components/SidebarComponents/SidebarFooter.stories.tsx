import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarFooter } from './SidebarFooter';

const meta: Meta<typeof SidebarFooter> = {
  title: 'Product Components/Navigation/Sidebar Components/SidebarFooter',
  component: SidebarFooter,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    name: 'Sophia Williams',
    email: 'sophia@alignui.com',
  },
  argTypes: {
    avatar: { table: { disable: true } },
    onDropdownClick: { table: { disable: true } },
    onClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Expanded (with/without divider) and collapsed (avatar-only rail) — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarFooter />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarFooter showDivider />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarFooter collapsed />
      </div>
    </div>
  ),
};
