import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import type { ProgressBarColor } from './ProgressBar';

const COLORS: ProgressBarColor[] = ['blue', 'red', 'orange', 'green'];

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    percentage: 40,
    color: 'blue',
  },
  argTypes: {
    percentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: { control: 'select', options: COLORS },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/**
 * Test all props interactively — drag the percentage slider to see a real continuous fill.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * 0-100% at 10% steps, plus each color variant — mirrors the Figma reference.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 320 }}>
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => (
        <ProgressBar key={pct} percentage={pct} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 320 }}>
      {COLORS.map((color) => (
        <ProgressBar key={color} percentage={45} color={color} />
      ))}
    </div>
  ),
};
