import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingBarArea } from './RatingBarArea';
import type { RatingBarType } from './RatingBar';

const TYPES: RatingBarType[] = ['emoji', 'number', 'star', 'heart'];

const meta: Meta<typeof RatingBarArea> = {
  title: 'Components/Rating/RatingBarArea',
  component: RatingBarArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'emoji',
    value: 0,
    placeholder: 'Tell us why!',
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    value: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    text: { control: 'text' },
    placeholder: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RatingBarArea>;

/**
 * Test all props interactively — fully functional: select a rating, type feedback.
 */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);
    const [text, setText] = useState(args.text ?? '');
    return <RatingBarArea {...args} value={value} onChange={setValue} text={text} onTextChange={setText} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 types — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {TYPES.map((type) => (
        <RatingBarArea key={type} type={type} />
      ))}
    </div>
  ),
};
