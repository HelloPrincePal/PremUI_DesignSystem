import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMiscItem } from './DropdownMiscItem';
import type { DropdownMiscItemType } from './DropdownMiscItem';

const TYPES: DropdownMiscItemType[] = ['search', 'button', 'caption'];

const meta: Meta<typeof DropdownMiscItem> = {
  title: 'Components/Dropdown/DropdownMiscItem',
  component: DropdownMiscItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'search',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    placeholder: { control: 'text' },
    buttonLabel: { control: 'text' },
    caption: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMiscItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <div style={{ width: 320 }}><DropdownMiscItem {...args} value={value} onChange={setValue} /></div>;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Search / Button / Caption — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => {
    const [value, setValue] = useState('typing...');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: 320, border: '1px solid var(--color-stroke-soft)', borderRadius: 8, padding: 4 }}>
        <DropdownMiscItem type="search" />
        <DropdownMiscItem type="search" value={value} onChange={setValue} />
        <DropdownMiscItem type="button" />
        <DropdownMiscItem type="caption" />
      </div>
    );
  },
};
