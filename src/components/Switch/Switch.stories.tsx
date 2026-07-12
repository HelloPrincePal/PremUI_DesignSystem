import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import type { SwitchState } from './Switch';

const STATES: SwitchState[] = ['default', 'hover', 'disabled'];

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Disabled x Active on/off — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {STATES.map((state) => (
        <div key={state} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Switch state={state} checked={false} />
          <Switch state={state} checked={true} />
        </div>
      ))}
    </div>
  ),
};
