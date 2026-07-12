import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenu } from './CommandMenu';

const meta: Meta<typeof CommandMenu> = {
  title: 'Components/CommandMenu/CommandMenu',
  component: CommandMenu,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof CommandMenu>;

const ITEMS = [
  { label: 'Dashboard', sublabel: '(Overview)', leading: <i className="ri-dashboard-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} /> },
  { label: 'Settings', badge: 'NEW', leading: <i className="ri-settings-3-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} /> },
  { label: 'Billing', shortcut: '⌘B', leading: <i className="ri-bank-card-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} /> },
  {
    label: 'Team Members',
    size: 'md' as const,
    description: 'Invite, remove, and manage roles for your workspace.',
    leading: <i className="ri-team-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} />,
  },
];

/**
 * Fully interactive — type in the search field, hover/click items.
 */
export const Playground: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    return <CommandMenu searchValue={search} onSearchChange={setSearch} items={ITEMS} />;
  },
};

export const Empty: Story = {
  render: () => {
    const [search, setSearch] = useState('nothing matches this');
    return <CommandMenu searchValue={search} onSearchChange={setSearch} items={[]} />;
  },
};
