import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineInput } from './InlineInput';
import type { TextInputState } from './TagInput';

const STATES: TextInputState[] = ['default', 'hover', 'focus', 'disabled', 'error'];

const meta: Meta<typeof InlineInput> = {
  title: 'Components/TextInput/InlineInput',
  component: InlineInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    placeholder: 'Placeholder text...',
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    leading: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof InlineInput>;

/**
 * Borderless until focused — click the field (or hover to reveal the pencil) to start editing,
 * which swaps the pencil for real Cancel/Confirm buttons.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <InlineInput {...args} defaultValue="Alec Whitten" />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Focus / Disabled / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 300 }}>
      {STATES.map((state) => (
        <InlineInput key={state} state={state} defaultValue={state === 'focus' || state === 'error' ? 'Placeholder text...' : ''} />
      ))}
    </div>
  ),
};
