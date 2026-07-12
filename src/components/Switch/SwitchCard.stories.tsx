import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitchCard } from './SwitchCard';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { Avatar } from '../Avatars/Avatar';

const meta: Meta<typeof SwitchCard> = {
  title: 'Components/Switch/SwitchCard',
  component: SwitchCard,
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
type Story = StoryObj<typeof SwitchCard>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <SwitchCard {...args} checked={checked} onChange={setChecked} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic / Left-Icon (KeyIcon) / Avatar leading slots x Default/Active/Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: 360 }}>
      <SwitchCard label="Label" checked={false} />
      <SwitchCard label="Label" checked={true} />
      <SwitchCard label="Label" disabled />
      <SwitchCard label="Label" leading={<KeyIcon size="md" />} checked={false} />
      <SwitchCard label="Label" leading={<KeyIcon size="md" />} checked={true} />
      <SwitchCard label="Label" leading={<Avatar size={40} />} checked={false} />
    </div>
  ),
};
