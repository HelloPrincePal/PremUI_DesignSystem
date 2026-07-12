import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/FormHelpers/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Label',
    sublabel: '(Optional)',
    required: true,
    showInfo: true,
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
    sublabel: { control: 'text' },
    required: { control: 'boolean' },
    showInfo: { control: 'boolean' },
    helpLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Normal / Disabled — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label sublabel="(Optional)" required showInfo>
        Label
      </Label>
      <Label sublabel="(Optional)" required showInfo disabled>
        Label
      </Label>
      <Label helpLabel="Help?">Label</Label>
    </div>
  ),
};
