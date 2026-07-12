import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordStrength } from './PasswordStrength';

const meta: Meta<typeof PasswordStrength> = {
  title: 'Components/FormHelpers/PasswordStrength',
  component: PasswordStrength,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    password: '',
  },
  argTypes: {
    password: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordStrength>;

/**
 * Type a password to see the bars and checklist genuinely evaluate uppercase/number/length.
 */
export const Playground: Story = {
  render: (args) => {
    const [password, setPassword] = useState(args.password ?? '');
    return (
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a password..."
          style={{ padding: '8px 10px', border: '1px solid var(--color-stroke-soft)', borderRadius: 8, fontSize: 14 }}
        />
        <PasswordStrength password={password} />
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Empty / Weak / Moderate / Strong — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 300 }}>
      <PasswordStrength password="" />
      <PasswordStrength password="pass" />
      <PasswordStrength password="Password" />
      <PasswordStrength password="Password1" />
    </div>
  ),
};
