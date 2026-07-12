import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Scroll } from './Scroll';
import type { ScrollSize, ScrollStyle } from './Scroll';

const SIZES: ScrollSize[] = ['md', 'sm', 'xs'];
const STYLES: ScrollStyle[] = ['default', 'lighter'];

const meta: Meta<typeof Scroll> = {
  title: 'Components/Scroll/Scroll',
  component: Scroll,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    size: 'md',
    style: 'default',
    thumbRatio: 0.2,
    thumbOffset: 0.5,
  },
  argTypes: {
    size: { control: 'select', options: SIZES },
    style: { control: 'select', options: STYLES },
    thumbRatio: { control: { type: 'range', min: 0.05, max: 1, step: 0.05 } },
    thumbOffset: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Scroll>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ height: 400 }}>
      <Scroll {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 3 sizes x both styles — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', height: 400 }}>
      {STYLES.map((style) => (
        <div key={style} style={{ display: 'flex', gap: '8px' }}>
          {SIZES.map((size) => (
            <Scroll key={size} size={size} style={style} thumbRatio={0.2} thumbOffset={0.5} />
          ))}
        </div>
      ))}
    </div>
  ),
};
