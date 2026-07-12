import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import type { RatingAlignment } from './Rating';
import type { RatingIconType } from './RatingIcon';

const ALIGNMENTS: RatingAlignment[] = ['only', 'vertical', 'horizontal'];
const TYPES: RatingIconType[] = ['star', 'heart'];

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    value: 4.5,
    type: 'star',
    alignment: 'only',
    showDescription: true,
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    type: { control: 'select', options: TYPES },
    alignment: { control: 'select', options: ALIGNMENTS },
    showDescription: { control: 'boolean' },
    text: { control: 'text' },
    reviewsLabel: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

/**
 * Test all props interactively — drag the value slider to see the halves compute genuinely.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Only Ratings / Vertical / Horizontal x Star/Heart — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {TYPES.map((type) =>
        ALIGNMENTS.map((alignment) => (
          <Rating key={`${type}-${alignment}`} type={type} alignment={alignment} value={4.5} />
        ))
      )}
    </div>
  ),
};
