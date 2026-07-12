import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioCard } from './RadioCard';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { Avatar } from '../Avatars/Avatar';

const meta: Meta<typeof RadioCard> = {
  title: 'Components/Radio/RadioCard',
  component: RadioCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    badge: 'NEW',
    description: 'Insert the checkbox description here.',
    checked: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    badge: { control: 'text' },
    description: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RadioCard>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <RadioCard {...args} checked={checked} onChange={setChecked} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic / Left-Icon (KeyIcon) / Avatar leading slots x Default/Active/Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: 360 }}>
      <RadioCard label="Label" checked={false} />
      <RadioCard label="Label" checked={true} />
      <RadioCard label="Label" disabled />
      <RadioCard label="Label" leading={<KeyIcon size="md" />} checked={false} />
      <RadioCard label="Label" leading={<KeyIcon size="md" />} checked={true} />
      <RadioCard label="Label" leading={<Avatar size={40} />} checked={false} />
    </div>
  ),
};
