import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/**
 * Fully interactive — navigate months and click a day to select it.
 */
export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker value={value} onChange={setValue} initialMonth={new Date(2024, 0, 1)} />;
  },
};
