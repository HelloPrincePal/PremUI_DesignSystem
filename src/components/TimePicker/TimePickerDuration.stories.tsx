import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePickerDuration } from './TimePickerDuration';
import type { TimePickerDurationState } from './TimePickerDuration';

const STATES: TimePickerDurationState[] = ['default', 'hover', 'active', 'disabled'];

const meta: Meta<typeof TimePickerDuration> = {
  title: 'Components/TimePicker/TimePickerDuration',
  component: TimePickerDuration,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: '30 min',
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TimePickerDuration>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Active / Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {STATES.map((state) => (
        <TimePickerDuration key={state} state={state} />
      ))}
    </div>
  ),
};
