import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentLabel } from './ContentLabel';
import type { ContentLabelSize } from './ContentLabel';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { Avatar } from '../Avatars/Avatar';

const SIZES: ContentLabelSize[] = ['md', 'lg'];

const meta: Meta<typeof ContentLabel> = {
  title: 'Components/ContentItem/ContentLabel',
  component: ContentLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    description: 'Insert the content description here.',
    size: 'md',
    badge: false,
    showToggle: false,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    description: { control: 'text' },
    size: { control: 'select', options: SIZES },
    badge: { control: 'boolean' },
    showToggle: { control: 'boolean' },
    toggled: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ContentLabel>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <ContentLabel {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic / Left-Icon (KeyIcon) / Avatar leading slots x both sizes, plus badge/toggle.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: 300 }}>
      <ContentLabel size="md" />
      <ContentLabel size="md" leading={<KeyIcon size="md" />} />
      <ContentLabel size="md" leading={<Avatar size={40} />} />
      <ContentLabel size="lg" leading={<KeyIcon size="lg" />} />
      <ContentLabel size="md" leading={<KeyIcon size="md" color="blue" />} badge />
      <ContentLabel size="md" leading={<KeyIcon size="md" color="green" />} showToggle toggled />
    </div>
  ),
};
