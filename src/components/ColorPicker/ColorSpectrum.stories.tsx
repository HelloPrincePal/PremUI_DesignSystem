import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorSpectrum } from './ColorSpectrum';

const meta: Meta<typeof ColorSpectrum> = {
  title: 'Components/ColorPicker/ColorSpectrum',
  component: ColorSpectrum,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ColorSpectrum>;

export const Playground: Story = {
  render: () => {
    const [sat, setSat] = useState(60);
    const [val, setVal] = useState(100);
    return (
      <div style={{ width: '232px' }}>
        <ColorSpectrum
          hue={220}
          saturation={sat}
          value={val}
          onChange={(s, v) => {
            setSat(s);
            setVal(v);
          }}
        />
      </div>
    );
  },
};
