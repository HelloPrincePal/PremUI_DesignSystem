import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaginationCell } from './PaginationCell';
import type { PaginationCellState } from './PaginationCell';

const STATES: PaginationCellState[] = ['default', 'hover', 'selected', 'disabled'];

const meta: Meta<typeof PaginationCell> = {
  title: 'Components/Pagination/PaginationCell',
  component: PaginationCell,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: '1',
    selected: false,
    disabled: false,
    fullRadius: false,
  },
  argTypes: {
    children: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullRadius: { control: 'boolean' },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationCell>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Selected / Disabled x square/full radius — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[false, true].map((fullRadius) => (
        <div key={String(fullRadius)} style={{ display: 'flex', gap: '8px' }}>
          {STATES.map((state) => (
            <PaginationCell key={state} state={state} selected={state === 'selected'} fullRadius={fullRadius}>
              1
            </PaginationCell>
          ))}
        </div>
      ))}
    </div>
  ),
};
