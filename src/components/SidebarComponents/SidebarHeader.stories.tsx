import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarHeader } from './SidebarHeader';

const meta: Meta<typeof SidebarHeader> = {
  title: 'Product Components/Navigation/Sidebar Components/SidebarHeader',
  component: SidebarHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    brand: 'Apex',
    description: 'Finance & Banking',
  },
  argTypes: {
    leading: { table: { disable: true } },
    onDropdownClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarHeader>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Expanded (with/without divider) and collapsed (icon-only rail) — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarHeader />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarHeader showDivider />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarHeader collapsed />
      </div>
    </div>
  ),
};
