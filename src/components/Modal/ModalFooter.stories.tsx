import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFooter } from './ModalFooter';
import type { ModalFooterType } from './ModalFooter';

const TYPES: ModalFooterType[] = ['basic', 'stretch', 'checkbox', 'information', 'toggle', 'stepper', 'link-button'];

const meta: Meta<typeof ModalFooter> = {
  title: 'Components/Modal/ModalFooter',
  component: ModalFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'basic',
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
    infoLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    activeStep: { control: 'number' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ModalFooter>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 440 }}>
      <ModalFooter {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 7 types — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 440 }}>
      {TYPES.map((type) => (
        <div key={type} style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
          <ModalFooter type={type} />
        </div>
      ))}
    </div>
  ),
};
