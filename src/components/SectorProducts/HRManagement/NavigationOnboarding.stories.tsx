import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationOnboarding } from './NavigationOnboarding';

const meta: Meta<typeof NavigationOnboarding> = {
  title: 'Sector Products/HR Management/Navigation Onboarding',
  component: NavigationOnboarding,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    logo: { table: { disable: true } },
    steps: { table: { disable: true } },
    onContact: { table: { disable: true } },
    onClose: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof NavigationOnboarding>;

const STEPS = [
  { label: 'Personal' },
  { label: 'Role' },
  { label: 'Position' },
  { label: 'Password' },
  { label: 'Summary' },
];

/** Help variant — logo + "Need help? Contact Us" + close. */
export const Help: Story = {};

/** Stepper variant — logo + numbered step indicator + close. */
export const Steps: Story = {
  args: { steps: STEPS, activeStep: 1 },
};

/** Both variants stacked. */
export const Both: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <NavigationOnboarding />
      <NavigationOnboarding steps={STEPS} activeStep={1} />
    </div>
  ),
};
