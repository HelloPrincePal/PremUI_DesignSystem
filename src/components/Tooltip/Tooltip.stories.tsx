import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import type { TooltipPlacement } from './Tooltip';

const PLACEMENTS: TooltipPlacement[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'left', 'right'];

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    placement: 'top-left',
    size: 'md',
    darkMode: false,
    text: 'Insert Tooltip',
  },
  argTypes: {
    placement: { control: 'select', options: PLACEMENTS },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    darkMode: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ paddingTop: 40 }}>
      <Tooltip {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 8 placements at each size, light and dark mode.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 16, textTransform: 'uppercase' }}>
            Size: {size}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {PLACEMENTS.map((placement) => (
              <div key={placement} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: 'var(--color-text-soft)' }}>{placement}</span>
                <Tooltip placement={placement} size={size} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 16, textTransform: 'uppercase' }}>
          Dark mode
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', background: 'var(--color-bg-weak)', padding: 24, borderRadius: 12 }}>
          <Tooltip placement="top-left" size="sm" darkMode />
          <Tooltip placement="top-center" size="md" darkMode />
          <Tooltip placement="bottom-center" size="lg" darkMode />
        </div>
      </div>
    </div>
  ),
};
