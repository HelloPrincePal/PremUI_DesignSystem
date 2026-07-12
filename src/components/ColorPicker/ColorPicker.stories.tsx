import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

/**
 * Fully interactive — drag the spectrum, hue slider, and opacity slider,
 * or type a hex value.
 */
export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('#335CFF');
    const [opacity, setOpacity] = useState(100);
    return (
      <ColorPicker value={value} onChange={setValue} opacity={opacity} onOpacityChange={setOpacity} />
    );
  },
};
