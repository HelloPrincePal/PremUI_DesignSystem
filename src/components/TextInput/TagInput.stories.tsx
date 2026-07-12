import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagInput } from './TagInput';
import type { TextInputState } from './TagInput';

const STATES: TextInputState[] = ['default', 'hover', 'focus', 'disabled', 'error'];

const meta: Meta<typeof TagInput> = {
  title: 'Components/TextInput/TagInput',
  component: TagInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Tag Input',
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
type Story = StoryObj<typeof TagInput>;

/**
 * Type text and press Enter or "," to add a tag. Backspace on an empty field removes the last tag.
 * Click a tag's × to remove it directly.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <TagInput {...args} defaultTags={['Berlin', 'London']} />
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
        <TagInput key={state} state={state} defaultTags={state === 'focus' || state === 'error' ? ['Berlin', 'London', 'Paris'] : []} />
      ))}
    </div>
  ),
};
