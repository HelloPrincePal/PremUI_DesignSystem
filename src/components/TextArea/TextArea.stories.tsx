import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import type { TextAreaState } from './TextArea';

const STATES: TextAreaState[] = ['default', 'hover', 'focus', 'disabled', 'error'];

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Change Label',
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    sublabel: { control: 'text' },
    hintText: { control: 'text' },
    onChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

/**
 * Test all props interactively — type into the field to see the real character counter update.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <TextArea {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Focus / Disabled / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 400 }}>
      {STATES.map((state) => (
        <TextArea key={state} state={state} label="Change Label" />
      ))}
    </div>
  ),
};
