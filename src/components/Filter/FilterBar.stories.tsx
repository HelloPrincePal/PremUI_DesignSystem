import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from './FilterBar';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof FilterBar> = {
  title: 'Components/Filter/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    showSearch: true,
    showFilterButton: true,
    showSettingsButton: true,
    showSortBy: false,
  },
  argTypes: {
    filterLabel: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    searchShortcut: { control: 'text' },
    sortLabel: { control: 'text' },
    showSearch: { control: 'boolean' },
    showFilterButton: { control: 'boolean' },
    showSettingsButton: { control: 'boolean' },
    showSortBy: { control: 'boolean' },
    className: { table: { disable: true } },
    left: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <FilterBar {...args} searchValue={value} onSearchChange={setValue} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Calendar type — date-preset ButtonGroup on the left, mirrors the Figma "Calendar" variant.
 */
export const CalendarType: Story = {
  render: () => (
    <FilterBar
      left={
        <>
          <Button type="neutral" style="stroke" size="sm">
            Today
          </Button>
          <ButtonGroup
            items={[
              { label: 'Last 7 days', rightIcon: 'arrow-down-s-line' },
              { label: 'Aug 04 - Aug 11 2023', leftIcon: 'calendar-line' },
            ]}
          />
        </>
      }
    />
  ),
};

/**
 * Table type — SegmentedControl tabs on the left plus a Sort By trigger, mirrors the Figma "Table" variant.
 */
export const TableType: Story = {
  render: () => {
    const [tab, setTab] = useState('all');
    return (
      <FilterBar
        showSortBy
        left={
          <SegmentedControl
            items={[
              { label: 'All', value: 'all' },
              { label: 'Income', value: 'income' },
              { label: 'Expenses', value: 'expenses' },
            ]}
            value={tab}
            onChange={setTab}
            style={{ width: 320 }}
          />
        }
      />
    );
  },
};
