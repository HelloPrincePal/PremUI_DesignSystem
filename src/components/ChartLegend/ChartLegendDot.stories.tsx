import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartLegendDot } from './ChartLegendDot';
import type { ChartLegendColor, ChartLegendDotSize } from './ChartLegendDot';

const COLORS: ChartLegendColor[] = ['gray', 'lightGray', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky', 'pink', 'teal'];
const SIZES: ChartLegendDotSize[] = ['sm', 'md'];

const meta: Meta<typeof ChartLegendDot> = {
  title: 'Components/ChartLegend/ChartLegendDot',
  component: ChartLegendDot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    color: 'gray',
    size: 'sm',
  },
  argTypes: {
    color: { control: 'select', options: COLORS },
    size: { control: 'select', options: SIZES },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ChartLegendDot>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {COLORS.map((color) => (
            <ChartLegendDot key={color} color={color} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
