import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorDots } from './ColorDots';
import type { ColorDotColor } from './ColorDots';

const COLORS: ColorDotColor[] = ['gray', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky', 'pink', 'teal'];

const meta: Meta<typeof ColorDots> = {
  title: 'Components/ColorPicker/ColorDots',
  component: ColorDots,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { color: 'blue' },
  argTypes: {
    color: { control: 'select', options: COLORS },
  },
};

export default meta;
type Story = StoryObj<typeof ColorDots>;

export const Playground: Story = {};

export const Gallery: Story = {
  render: () => {
    const [selected, setSelected] = useState<ColorDotColor>('blue');
    return (
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {COLORS.map((color) => (
          <ColorDots key={color} color={color} selected={selected === color} onClick={() => setSelected(color)} />
        ))}
      </div>
    );
  },
};
