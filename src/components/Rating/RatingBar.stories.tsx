import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingBar } from './RatingBar';
import type { RatingBarType } from './RatingBar';

const TYPES: RatingBarType[] = ['emoji', 'number', 'star', 'heart'];

const meta: Meta<typeof RatingBar> = {
  title: 'Components/Rating/RatingBar',
  component: RatingBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'emoji',
    value: 0,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    value: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RatingBar>;

/**
 * Test all props interactively — click a segment to select it.
 */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);
    return (
      <div style={{ width: 320 }}>
        <RatingBar {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 types — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => {
    const [values, setValues] = useState<Record<string, number>>({ emoji: 4, number: 4, star: 3, heart: 3 });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 320 }}>
        {TYPES.map((type) => (
          <RatingBar
            key={type}
            type={type}
            value={values[type]}
            onChange={(v) => setValues((prev) => ({ ...prev, [type]: v }))}
          />
        ))}
      </div>
    );
  },
};
