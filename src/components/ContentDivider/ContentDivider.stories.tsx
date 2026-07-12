import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentDivider } from './ContentDivider';
import type { ContentDividerType } from './ContentDivider';

const TYPES: ContentDividerType[] = [
  'line',
  'line-spacing',
  'text-line',
  'text',
  'solid-text',
  'icon-button',
  'icon-button-group',
  'text-button',
  'text-button-group',
];

const meta: Meta<typeof ContentDivider> = {
  title: 'Components/ContentDivider/ContentDivider',
  component: ContentDivider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    type: 'line',
    text: 'OR',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
  },
};

export default meta;
type Story = StoryObj<typeof ContentDivider>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: '480px' }}>
      <ContentDivider {...args} />
    </div>
  ),
};

/**
 * All 9 variants.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '480px' }}>
      {TYPES.map((type) => (
        <ContentDivider key={type} type={type} />
      ))}
    </div>
  ),
};
