import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopbarNavigation } from './TopbarNavigation';

const meta: Meta<typeof TopbarNavigation> = {
  title: 'Product Components/Navigation/TopbarNavigation',
  component: TopbarNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    company: 'Synergy',
    showSearch: true,
  },
  argTypes: {
    logo: { table: { disable: true } },
    items: { table: { disable: true } },
    moreItems: { table: { disable: true } },
    user: { table: { disable: true } },
    onActiveChange: { table: { disable: true } },
    onItemClick: { table: { disable: true } },
    onSearchChange: { table: { disable: true } },
    onSearchIconClick: { table: { disable: true } },
    onQuickAction: { table: { disable: true } },
    onNotificationClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TopbarNavigation>;

/**
 * A real nav bar — click a tab to select it, type in the search field,
 * click "Others" to open a real overflow dropdown of extra items.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Text-only vs. with-icon nav items, and two different brands/item sets —
 * mirrors the Figma variant grid (HR Management / Finance & Banking).
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TopbarNavigation company="Synergy" notificationCount={2} />
      <TopbarNavigation company="Synergy" showIcons notificationCount={2} />
      <TopbarNavigation
        company="Apex"
        items={[
          { key: 'dashboard', label: 'Dashboard', icon: 'layout-grid-line' },
          { key: 'my-card', label: 'My Card', icon: 'bank-card-line' },
          { key: 'transfer', label: 'Transfer', icon: 'arrow-left-right-line' },
          { key: 'transactions', label: 'Transactions', icon: 'history-line' },
          { key: 'payments', label: 'Payments', icon: 'bill-line' },
          { key: 'exchange', label: 'Exchange', icon: 'exchange-line' },
        ]}
        moreItems={[{ key: 'others', label: 'Others', icon: 'apps-2-line' }]}
        user={{ name: 'Arthur', verified: false }}
      />
      <TopbarNavigation
        company="Apex"
        showIcons
        items={[
          { key: 'dashboard', label: 'Dashboard', icon: 'layout-grid-line' },
          { key: 'my-card', label: 'My Card', icon: 'bank-card-line' },
          { key: 'transfer', label: 'Transfer', icon: 'arrow-left-right-line' },
          { key: 'transactions', label: 'Transactions', icon: 'history-line' },
          { key: 'payments', label: 'Payments', icon: 'bill-line' },
          { key: 'exchange', label: 'Exchange', icon: 'exchange-line' },
        ]}
        moreItems={[{ key: 'others', label: 'Others', icon: 'apps-2-line' }]}
        showSearch={false}
        user={{ name: 'Arthur', verified: false }}
      />
    </div>
  ),
};
