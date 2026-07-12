import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBarLabel } from './ProgressBarLabel';
import type { ProgressBarLabelType } from './ProgressBarLabel';

const TYPES: ProgressBarLabelType[] = ['on-top', 'on-right'];

const meta: Meta<typeof ProgressBarLabel> = {
  title: 'Components/ProgressBar/ProgressBarLabel',
  component: ProgressBarLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'on-top',
    percentage: 80,
    title: 'Data Storage',
    description: 'to unlock unlimited date storage.',
    showBottom: true,
    showPercentage: true,
    showLinkButton: true,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    percentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    title: { control: 'text' },
    description: { control: 'text' },
    showBottom: { control: 'boolean' },
    showPercentage: { control: 'boolean' },
    showLinkButton: { control: 'boolean' },
    linkLabel: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBarLabel>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * On Top (with/without description) and On Right — mirrors the Figma reference.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 320 }}>
      <ProgressBarLabel type="on-top" showBottom />
      <ProgressBarLabel type="on-top" showBottom={false} />
      <ProgressBarLabel type="on-right" />
    </div>
  ),
};
