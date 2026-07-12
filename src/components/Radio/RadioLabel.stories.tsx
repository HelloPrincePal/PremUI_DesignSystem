import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioLabel } from './RadioLabel';

const meta: Meta<typeof RadioLabel> = {
  title: 'Components/Radio/RadioLabel',
  component: RadioLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    badge: 'NEW',
    checked: false,
    disabled: false,
    flip: false,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    badge: { control: 'text' },
    description: { control: 'text' },
    linkLabel: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    flip: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RadioLabel>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <RadioLabel {...args} checked={checked} onChange={setChecked} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic label, with description + Link Button, and flipped — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 300 }}>
      <RadioLabel label="Label" sublabel="(Sublabel)" badge="NEW" checked={false} />
      <RadioLabel label="Label" sublabel="(Sublabel)" badge="NEW" checked={true} />
      <RadioLabel
        label="Label"
        sublabel="(Sublabel)"
        badge="NEW"
        description="Insert the checkbox description here."
        linkLabel="Link Button"
        checked={false}
      />
      <RadioLabel label="Label" sublabel="(Sublabel)" badge="NEW" checked={true} flip />
    </div>
  ),
};
