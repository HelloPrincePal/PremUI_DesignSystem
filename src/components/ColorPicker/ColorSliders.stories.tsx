import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorSliders } from './ColorSliders';

const meta: Meta<typeof ColorSliders> = {
  title: 'Components/ColorPicker/ColorSliders',
  component: ColorSliders,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ColorSliders>;

export const HueSlider: Story = {
  render: () => {
    const [hue, setHue] = useState(220);
    return (
      <div style={{ width: '232px' }}>
        <ColorSliders type="hue" value={hue} onChange={setHue} />
      </div>
    );
  },
};

export const OpacitySlider: Story = {
  render: () => {
    const [opacity, setOpacity] = useState(80);
    return (
      <div style={{ width: '232px' }}>
        <ColorSliders type="opacity" value={opacity} onChange={setOpacity} color="#335CFF" />
      </div>
    );
  },
};
