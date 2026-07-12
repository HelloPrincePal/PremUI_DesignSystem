import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingCell } from './RatingCell';
import type { RatingCellState } from './RatingCell';
import type { RatingIconType } from './RatingIcon';

const STATES: RatingCellState[] = ['default', 'hover', 'selected'];
const TYPES: RatingIconType[] = ['star', 'heart'];

const meta: Meta<typeof RatingCell> = {
  title: 'Components/Rating/RatingCell',
  component: RatingCell,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'star',
    selected: false,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    selected: { control: 'boolean' },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RatingCell>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Star/Heart x Default/Hover/Selected — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => {
    const [selectedStar, setSelectedStar] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {TYPES.map((type) => (
          <div key={type} style={{ display: 'flex', gap: '12px' }}>
            {STATES.map((state) => (
              <RatingCell key={state} type={type} state={state} selected={state === 'selected'} />
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <RatingCell type="star" selected={selectedStar} onClick={() => setSelectedStar((s) => !s)} />
          <span style={{ fontSize: 12, color: 'var(--color-text-soft)' }}>← click to toggle</span>
        </div>
      </div>
    );
  },
};
