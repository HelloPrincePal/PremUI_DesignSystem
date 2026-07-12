import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CounterInput } from './CounterInput';
import type { TextInputState } from './TagInput';

const STATES: TextInputState[] = ['default', 'hover', 'focus', 'disabled', 'error'];

const meta: Meta<typeof CounterInput> = {
  title: 'Components/TextInput/CounterInput',
  component: CounterInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Counter Input',
    defaultValue: 16,
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    size: { control: 'select', options: ['md', 'sm', 'xs'] },
    sublabel: { control: 'text' },
    hintText: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CounterInput>;

/**
 * Test all props interactively — the +/- buttons genuinely increment/decrement the value.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <CounterInput {...args} min={0} max={99} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Focus / Disabled / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 300 }}>
      {STATES.map((state) => (
        <CounterInput key={state} state={state} />
      ))}
    </div>
  ),
};
