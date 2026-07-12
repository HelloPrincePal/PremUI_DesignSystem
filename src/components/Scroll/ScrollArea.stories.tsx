import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/Scroll/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    size: 'md',
    style: 'default',
    height: 240,
  },
  argTypes: {
    size: { control: 'select', options: ['md', 'sm', 'xs'] },
    style: { control: 'select', options: ['default', 'lighter'] },
    height: { control: 'number' },
    className: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

/**
 * A genuinely working custom scrollbar — scroll the content and watch the thumb
 * track real position/size, computed from actual scrollTop/scrollHeight/clientHeight.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 280, border: '1px solid var(--color-stroke-soft)', borderRadius: 12, overflow: 'hidden' }}>
      <ScrollArea {...args}>
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ margin: 0, fontSize: 14, color: 'var(--color-text-sub)' }}>
              Row {i + 1} — scroll to see the custom thumb move.
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};
