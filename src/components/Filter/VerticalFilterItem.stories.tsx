import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalFilterItem } from './VerticalFilterItem';
import type { VerticalFilterItemState } from './VerticalFilterItem';

const STATES: VerticalFilterItemState[] = ['default', 'hover', 'active', 'disabled'];

const meta: Meta<typeof VerticalFilterItem> = {
  title: 'Components/Filter/VerticalFilterItem',
  component: VerticalFilterItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Date',
    active: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    state: { control: 'select', options: [undefined, ...STATES] },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalFilterItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 200 }}>
      <VerticalFilterItem {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Active / Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: 200 }}>
      {STATES.map((state) => (
        <VerticalFilterItem key={state} state={state} active={state === 'active'} label="Date" />
      ))}
    </div>
  ),
};
