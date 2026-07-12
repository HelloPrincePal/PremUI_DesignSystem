import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';
import type { StatusBadgeStatus, StatusBadgeStyle } from './StatusBadge';

const STATUSES: StatusBadgeStatus[] = ['completed', 'pending', 'failed', 'information', 'disabled'];
const STYLES: StatusBadgeStyle[] = ['stroke', 'light'];

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/Badges/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Badge',
    status: 'completed',
    style: 'stroke',
    withDot: false,
  },
  argTypes: {
    children: { control: 'text' },
    status: {
      control: 'select',
      options: STATUSES,
    },
    style: {
      control: 'select',
      options: STYLES,
    },
    withDot: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Complete overview: all statuses across stroke/light, with and without dot mode.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {STYLES.map((style) => (
        <div key={style} style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {STATUSES.map((status) => (
              <StatusBadge key={`${style}-${status}`} status={status} style={style}>
                Badge
              </StatusBadge>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {STATUSES.map((status) => (
              <StatusBadge key={`${style}-${status}-dot`} status={status} style={style} withDot>
                Badge
              </StatusBadge>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
