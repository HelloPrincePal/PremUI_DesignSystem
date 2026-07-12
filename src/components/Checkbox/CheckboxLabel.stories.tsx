import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxLabel } from './CheckboxLabel';

const meta: Meta<typeof CheckboxLabel> = {
  title: 'Components/Checkbox/CheckboxLabel',
  component: CheckboxLabel,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    badge: 'NEW',
    flip: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxLabel>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <CheckboxLabel {...args} checked={checked} onChange={setChecked} />;
  },
};

/**
 * With description + link — switches to the stacked layout.
 */
export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div style={{ width: '300px' }}>
        <CheckboxLabel
          checked={checked}
          onChange={setChecked}
          label="Label"
          sublabel="(Sublabel)"
          badge="NEW"
          description="Insert the checkbox description here."
          linkLabel="Link Button"
        />
      </div>
    );
  },
};

/**
 * Flipped — checkbox on the right.
 */
export const Flipped: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ width: '300px' }}>
        <CheckboxLabel checked={checked} onChange={setChecked} label="Label" sublabel="(Sublabel)" flip />
      </div>
    );
  },
};
