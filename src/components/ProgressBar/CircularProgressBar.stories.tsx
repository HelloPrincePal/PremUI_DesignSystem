import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgressBar } from './CircularProgressBar';
import type { CircularProgressBarSize } from './CircularProgressBar';

const SIZES: CircularProgressBarSize[] = [80, 72, 64, 56, 48];

const meta: Meta<typeof CircularProgressBar> = {
  title: 'Components/ProgressBar/CircularProgressBar',
  component: CircularProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    percentage: 50,
    size: 80,
    showLabel: true,
  },
  argTypes: {
    percentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: SIZES },
    showLabel: { control: 'boolean' },
    strokeWidth: { control: 'number' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgressBar>;

/**
 * Test all props interactively — drag the percentage slider to see a real computed SVG arc.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 5 sizes x 0/25/50/75/100% — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {[0, 25, 50, 75, 100].map((pct) => (
        <div key={pct} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {SIZES.map((size) => (
            <CircularProgressBar key={size} percentage={pct} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
