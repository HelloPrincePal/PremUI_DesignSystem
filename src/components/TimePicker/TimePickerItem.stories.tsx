import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePickerItem } from './TimePickerItem';
import type { TimePickerItemState } from './TimePickerItem';

const STATES: TimePickerItemState[] = ['default', 'hover', 'active', 'disabled'];

const meta: Meta<typeof TimePickerItem> = {
  title: 'Components/TimePicker/TimePickerItem',
  component: TimePickerItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    time: '09:30',
    period: 'AM',
    direction: 'right',
  },
  argTypes: {
    direction: { control: 'select', options: ['right', 'center'] },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TimePickerItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    return (
      <div style={{ width: 292 }}>
        <TimePickerItem {...args} active={active} onClick={() => setActive((v) => !v)} />
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Active / Disabled, single time and two-time-group rows, both check directions.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: 292 }}>
      {STATES.map((state) => (
        <TimePickerItem key={state} state={state} />
      ))}
      {STATES.map((state) => (
        <TimePickerItem key={`${state}-secondary-right`} state={state} secondaryTime="09:30" secondaryPeriod="AM" direction="right" />
      ))}
      {STATES.map((state) => (
        <TimePickerItem key={`${state}-secondary-center`} state={state} secondaryTime="09:30" secondaryPeriod="AM" direction="center" />
      ))}
    </div>
  ),
};
