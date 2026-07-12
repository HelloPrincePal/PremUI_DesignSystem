import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartLegend } from './ChartLegend';
import type { ChartLegendColor } from './ChartLegendDot';

const COLORS: ChartLegendColor[] = ['gray', 'lightGray', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky', 'pink', 'teal'];

const meta: Meta<typeof ChartLegend> = {
  title: 'Components/ChartLegend/ChartLegend',
  component: ChartLegend,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Legends',
    color: 'gray',
    disabled: false,
  },
  argTypes: {
    color: { control: 'select', options: COLORS },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ChartLegend>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 11 colors plus disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      {COLORS.map((color) => (
        <ChartLegend key={color} color={color} label="Legends" />
      ))}
      <ChartLegend disabled label="Legends" />
    </div>
  ),
};
