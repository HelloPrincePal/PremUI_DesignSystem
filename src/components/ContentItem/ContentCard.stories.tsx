import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentCard } from './ContentCard';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { Avatar } from '../Avatars/Avatar';

const meta: Meta<typeof ContentCard> = {
  title: 'Components/ContentItem/ContentCard',
  component: ContentCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    description: 'Insert the content description here.',
    badge: true,
    dismissible: true,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    description: { control: 'text' },
    badge: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <ContentCard {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic / Left-Icon (KeyIcon) / Avatar / Card-Provider leading slots — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: 360 }}>
      <ContentCard />
      <ContentCard leading={<KeyIcon size="md" />} />
      <ContentCard leading={<Avatar size={40} />} />
      <ContentCard leading={<KeyIcon size="md" color="purple" />} badge={false} />
    </div>
  ),
};
