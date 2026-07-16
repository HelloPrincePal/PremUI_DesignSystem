import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Avatar } from '../Avatars/Avatar';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { PlaceholderBrand } from '../../assets/Placeholder/PlaceholderBrand';

const meta: Meta<typeof PageHeader> = {
  title: 'Product Components/Page Headers/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    title: 'Insert page title here',
    description: 'Insert page description here.',
    showSearch: true,
    showNotification: true,
    notificationDot: true,
    secondaryLabel: 'Schedule',
    secondaryIcon: 'calendar-check-line',
    primaryLabel: 'Create Request',
    primaryIcon: 'add-line',
    divider: true,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    secondaryLabel: { control: 'text' },
    secondaryIcon: { control: 'text' },
    primaryLabel: { control: 'text' },
    primaryIcon: { control: 'text' },
    leading: { table: { disable: true } },
    titleAction: { table: { disable: true } },
    actions: { table: { disable: true } },
    onSearchClick: { table: { disable: true } },
    onNotificationClick: { table: { disable: true } },
    onSecondaryClick: { table: { disable: true } },
    onPrimaryClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

/** Basic variant — no leading visual. Edit the controls to explore the props. */
export const Playground: Story = {};

// ─── Leading variants ───────────────────────────────────────────────────────

export const Basic: Story = {};

export const WithAvatar: Story = {
  args: { leading: <Avatar persona="Sophia Williams" size={48} type="Illustration" /> },
};

export const WithLeftIcon: Story = {
  args: { leading: <KeyIcon icon="user-6-line" size="lg" color="gray" style="stroke" /> },
};

export const WithBrand: Story = {
  args: { leading: <PlaceholderBrand company="Aurora" size={48} /> },
};

export const WithCompany: Story = {
  args: { leading: <PlaceholderBrand company="Synergy" size={48} /> },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/** All five Figma leading treatments stacked, mirroring the source frame. */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <PageHeader />
      <PageHeader leading={<Avatar persona="Sophia Williams" size={48} type="Illustration" />} />
      <PageHeader leading={<KeyIcon icon="user-6-line" size="lg" color="gray" style="stroke" />} />
      <PageHeader leading={<PlaceholderBrand company="Aurora" size={48} />} />
      <PageHeader leading={<PlaceholderBrand company="Synergy" size={48} />} />
    </div>
  ),
};
