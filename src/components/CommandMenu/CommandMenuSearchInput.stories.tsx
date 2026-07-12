import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenuSearchInput } from './CommandMenuSearchInput';

const meta: Meta<typeof CommandMenuSearchInput> = {
  title: 'Components/CommandMenu/CommandMenuSearchInput',
  component: CommandMenuSearchInput,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof CommandMenuSearchInput>;

/**
 * Type to see it switch from the shortcut+info affordance to a clear button.
 */
export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '600px', border: '1px solid var(--color-stroke-soft)', borderRadius: '16px' }}>
        <CommandMenuSearchInput value={value} onChange={setValue} />
      </div>
    );
  },
};
