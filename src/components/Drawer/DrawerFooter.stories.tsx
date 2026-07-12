import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DrawerFooter } from './DrawerFooter';
import type { DrawerFooterType } from './DrawerFooter';

const TYPES: DrawerFooterType[] = ['stretch', 'basic', 'checkbox', 'toggle', 'stepper', 'link-button'];

const meta: Meta<typeof DrawerFooter> = {
  title: 'Components/Drawer/DrawerFooter',
  component: DrawerFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'stretch',
    doubleButton: true,
    cancelLabel: 'Cancel',
    continueLabel: 'Continue',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    doubleButton: { control: 'boolean' },
    cancelLabel: { control: 'text' },
    continueLabel: { control: 'text' },
    checkboxLabel: { control: 'text' },
    switchLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    activeStep: { control: 'number' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DrawerFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 6 types — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 400 }}>
      {TYPES.map((type) => (
        <div key={type} style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
          <DrawerFooter type={type} />
        </div>
      ))}
    </div>
  ),
};
