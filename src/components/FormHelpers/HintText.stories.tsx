import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HintText } from './HintText';
import type { HintTextState } from './HintText';

const STATES: HintTextState[] = ['default', 'error', 'disabled'];

const meta: Meta<typeof HintText> = {
  title: 'Components/FormHelpers/HintText',
  component: HintText,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'This is a hint text to help user.',
    showIcon: true,
    state: 'default',
  },
  argTypes: {
    children: { control: 'text' },
    showIcon: { control: 'boolean' },
    state: { control: 'select', options: STATES },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof HintText>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 190 }}>
      <HintText {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Error / Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: 240 }}>
      {STATES.map((state) => (
        <HintText key={state} state={state} />
      ))}
    </div>
  ),
};
