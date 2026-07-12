import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DatePicker/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

/**
 * Fully interactive — click a preset in the sidebar, or click two days to
 * select a custom range across the two months.
 */
export const Playground: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date(2023, 11, 19));
    const [endDate, setEndDate] = useState<Date | null>(new Date(2023, 11, 22));
    const [activePreset, setActivePreset] = useState(0);
    return (
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={(s, e) => {
          setStartDate(s);
          setEndDate(e);
        }}
        initialMonth={new Date(2023, 11, 1)}
        activePreset={activePreset}
        onPresetSelect={setActivePreset}
      />
    );
  },
};
