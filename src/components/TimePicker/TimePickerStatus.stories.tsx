import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePickerStatus } from './TimePickerStatus';
import type { TimePickerStatusType, TimePickerStatusState } from './TimePickerStatus';

const TYPES: TimePickerStatusType[] = ['available', 'busy', 'in-meeting', 'offline'];
const STATES: TimePickerStatusState[] = ['default', 'hover', 'selected', 'disabled'];

const meta: Meta<typeof TimePickerStatus> = {
  title: 'Components/TimePicker/TimePickerStatus',
  component: TimePickerStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    status: 'available',
  },
  argTypes: {
    status: { control: 'select', options: TYPES },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TimePickerStatus>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 statuses x Default/Hover/Selected/Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {STATES.map((state) => (
        <div key={state} style={{ display: 'flex', gap: '12px' }}>
          {TYPES.map((status) => (
            <TimePickerStatus key={status} status={status} state={state} />
          ))}
        </div>
      ))}
    </div>
  ),
};
