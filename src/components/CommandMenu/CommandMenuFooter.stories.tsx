import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenuFooter } from './CommandMenuFooter';

const meta: Meta<typeof CommandMenuFooter> = {
  title: 'Components/CommandMenu/CommandMenuFooter',
  component: CommandMenuFooter,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof CommandMenuFooter>;

export const Playground: Story = {
  render: () => (
    <div style={{ width: '600px', border: '1px solid var(--color-stroke-soft)', borderRadius: '16px' }}>
      <CommandMenuFooter />
    </div>
  ),
};
