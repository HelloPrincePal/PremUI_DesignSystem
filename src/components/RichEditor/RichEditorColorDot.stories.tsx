import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RichEditorColorDot } from './RichEditorColorDot';
import type { RichEditorColorName } from './RichEditorColorDot';

const COLORS: RichEditorColorName[] = ['gray', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky', 'pink', 'teal'];

const meta: Meta<typeof RichEditorColorDot> = {
  title: 'Components/RichEditor/RichEditorColorDot',
  component: RichEditorColorDot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    color: 'gray',
  },
  argTypes: {
    color: { control: 'select', options: COLORS },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RichEditorColorDot>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 10 colors — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      {COLORS.map((color) => (
        <RichEditorColorDot key={color} color={color} />
      ))}
    </div>
  ),
};
