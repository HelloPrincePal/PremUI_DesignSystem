import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState, EMPTY_STATE_TYPES } from './EmptyState';
import { Button } from '../Button/Button';

const ALL_TYPES = Array.from(
  new Set([...EMPTY_STATE_TYPES.hr, ...EMPTY_STATE_TYPES.finance]),
).sort();

const meta: Meta<typeof EmptyState> = {
  title: 'Product Components/Empty States/Empty State',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    set: 'hr',
    type: 'Time Off',
    size: 148,
  },
  argTypes: {
    set: { control: 'inline-radio', options: ['hr', 'finance'] },
    type: { control: 'select', options: ALL_TYPES },
    size: { control: { type: 'range', min: 64, max: 320, step: 4 } },
    title: { control: 'text' },
    description: { control: 'text' },
    action: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

/** Pick a set + type from the controls to preview any illustration. */
export const Playground: Story = {};

/** The full empty-state composition — illustration + title + description + action. */
export const WithText: Story = {
  args: {
    set: 'hr',
    type: 'Time Off',
    title: 'No time off scheduled',
    description: 'When you request time off, it will show up here for your team to see.',
    action: (
      <Button size="sm" leftIcon="add-line">
        Request Time Off
      </Button>
    ),
  },
};

// ─── Galleries ──────────────────────────────────────────────────────────────

const GridStory = (set: 'hr' | 'finance'): Story['render'] =>
  function Grid() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 148px)',
          gap: 24,
          justifyContent: 'center',
        }}
      >
        {EMPTY_STATE_TYPES[set].map((type) => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <EmptyState set={set} type={type} />
            <span style={{ fontSize: 12, color: 'var(--color-text-sub)', textAlign: 'center' }}>{type}</span>
          </div>
        ))}
      </div>
    );
  };

/** All 18 HR Management empty-state illustrations. */
export const HRManagement: Story = { parameters: { layout: 'padded' }, render: GridStory('hr') };

/** All 16 Finance & Banking empty-state illustrations. */
export const FinanceAndBanking: Story = { parameters: { layout: 'padded' }, render: GridStory('finance') };
