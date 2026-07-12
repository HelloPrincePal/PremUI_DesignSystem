import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarHeader } from './SidebarHeader';

const COMPANIES = ['Apex', 'Aurora', 'Catalyst', 'Horizon', 'Orandis', 'Phoenix', 'Pulse', 'Solaris', 'Synergy'];

const meta: Meta<typeof SidebarHeader> = {
  title: 'Product Components/Navigation/Sidebar Components/SidebarHeader',
  component: SidebarHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    defaultCompany: 'Apex',
  },
  argTypes: {
    leading: { table: { disable: true } },
    brand: { table: { disable: true } },
    description: { table: { disable: true } },
    company: { table: { disable: true } },
    defaultCompany: { control: 'select', options: COMPANIES },
    companies: { table: { disable: true } },
    onCompanyChange: { table: { disable: true } },
    onDropdownClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarHeader>;

/**
 * The logo, brand name, and description come from the real Placeholder brand
 * asset library — click the expand button to open a real switcher panel and
 * pick a different company.
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
        <SidebarHeader defaultCompany="Apex" />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarHeader defaultCompany="Aurora" showDivider />
      </div>
      <div style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 12 }}>
        <SidebarHeader defaultCompany="Solaris" collapsed />
      </div>
    </div>
  ),
};
