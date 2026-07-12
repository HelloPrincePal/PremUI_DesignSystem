import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PinInput } from './PinInput';
import type { PinInputState } from './PinInput';

const STATES: PinInputState[] = ['default', 'hover', 'disabled', 'error'];

const meta: Meta<typeof PinInput> = {
  title: 'Components/TextInput/PinInput',
  component: PinInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    length: 6,
    // Demo-only flag — not a PinInput prop — toggles the debug value caption below the story's Playground.
    showValue: true,
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    showValue: { control: 'boolean', name: 'Show value (demo)' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PinInput & { showValue?: boolean }>;

/**
 * Type digits — focus genuinely auto-advances to the next box, Backspace on an empty box moves back,
 * arrow keys navigate, and pasting a full code fills every box at once. The "Show value" control
 * toggles the debug caption below — it's a story-only helper, not part of PinInput itself.
 */
export const Playground: Story = {
  render: (args) => {
    const { showValue, ...pinInputArgs } = args;
    const [value, setValue] = useState('');
    return (
      <div>
        <PinInput {...pinInputArgs} value={value} onChange={setValue} />
        {showValue && (
          <p style={{ marginTop: 12, fontSize: 12, color: 'var(--color-text-soft)' }}>Value: {value || '(empty)'}</p>
        )}
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Disabled / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {STATES.map((state) => (
        <PinInput key={state} state={state} defaultValue={state === 'error' ? '2' : ''} length={6} />
      ))}
    </div>
  ),
};
