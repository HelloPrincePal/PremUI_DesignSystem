import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import type { RadioState } from './Radio';

const STATES: RadioState[] = ['default', 'hover', 'disabled'];

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Focused (tab to focus) / Disabled x Active on/off — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {STATES.map((state) => (
        <div key={state} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Radio state={state} checked={false} />
          <Radio state={state} checked={true} />
        </div>
      ))}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Radio checked={false} />
        <Radio checked={true} />
        <span style={{ fontSize: 12, color: 'var(--color-text-soft)' }}>← tab here to see the real :focus-visible state</span>
      </div>
    </div>
  ),
};
