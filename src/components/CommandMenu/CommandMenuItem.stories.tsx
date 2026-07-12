import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenuItem } from './CommandMenuItem';

const meta: Meta<typeof CommandMenuItem> = {
  title: 'Components/CommandMenu/CommandMenuItem',
  component: CommandMenuItem,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CommandMenuItem>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: '480px' }}>
      <CommandMenuItem {...args} />
    </div>
  ),
};

/**
 * Small (48px) vs. Medium (64px, with description).
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <CommandMenuItem
        size="sm"
        label="Label"
        sublabel="(Sublabel)"
        badge="Badge"
        shortcut="⌘K"
        leading={<i className="ri-user-6-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} />}
      />
      <CommandMenuItem
        size="md"
        label="Label"
        sublabel="(Sublabel)"
        description="Insert description here."
        badge="Badge"
        shortcut="⌘K"
        leading={<i className="ri-user-6-line" style={{ fontSize: 20, color: 'var(--color-text-sub)' }} />}
      />
    </div>
  ),
};
