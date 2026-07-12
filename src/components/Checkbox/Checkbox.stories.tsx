import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckboxSize, CheckboxState } from './Checkbox';

const SIZES: CheckboxSize[] = ['md', 'sm'];
const STATES: CheckboxState[] = ['default', 'hover', 'disabled'];

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    checked: false,
    indeterminate: false,
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: { control: 'select', options: SIZES },
    state: { control: 'select', options: [undefined, ...STATES] },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};

/**
 * Unchecked/checked/indeterminate × default/hover/disabled, at both sizes.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {STATES.map((state) => (
            <div key={state} style={{ display: 'flex', gap: '8px' }}>
              <Checkbox size={size} state={state} />
              <Checkbox size={size} state={state} checked />
              <Checkbox size={size} state={state} indeterminate />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
