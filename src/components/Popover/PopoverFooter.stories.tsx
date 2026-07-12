import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PopoverFooter } from './PopoverFooter';
import type { PopoverFooterType } from './PopoverFooter';

const TYPES: PopoverFooterType[] = ['stretch', 'stepper', 'text-stepper'];

const meta: Meta<typeof PopoverFooter> = {
  title: 'Components/Popover/PopoverFooter',
  component: PopoverFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'stretch',
    doubleButton: true,
    backLabel: 'Back',
    nextLabel: 'Next',
    currentStep: 1,
    totalSteps: 4,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    doubleButton: { control: 'boolean' },
    backLabel: { control: 'text' },
    nextLabel: { control: 'text' },
    currentStep: { control: 'number' },
    totalSteps: { control: 'number' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PopoverFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 320, border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
      <PopoverFooter {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Stretch / Stepper / Text Stepper — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 320 }}>
      {TYPES.map((type) => (
        <div key={type} style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
          <PopoverFooter type={type} />
        </div>
      ))}
    </div>
  ),
};
