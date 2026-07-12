import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DrawerHeader } from './DrawerHeader';
import type { DrawerHeaderType, DrawerHeaderSize } from './DrawerHeader';

const TYPES: DrawerHeaderType[] = ['basic', 'left-icon'];
const SIZES: DrawerHeaderSize[] = ['sm', 'lg'];

const meta: Meta<typeof DrawerHeader> = {
  title: 'Components/Drawer/DrawerHeader',
  component: DrawerHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'basic',
    size: 'sm',
    title: 'Insert title here',
    description: 'Please insert drawer description here.',
    dismissible: true,
    divider: false,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    size: { control: 'select', options: SIZES },
    title: { control: 'text' },
    description: { control: 'text' },
    badgeCount: { control: 'text' },
    linkLabel: { control: 'text' },
    dismissible: { control: 'boolean' },
    divider: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DrawerHeader>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic/Left-Icon x Small/Large — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 400 }}>
      {TYPES.map((type) =>
        SIZES.map((size) => (
          <div key={`${type}-${size}`} style={{ border: '1px solid var(--color-stroke-soft)', borderRadius: 8, overflow: 'hidden' }}>
            <DrawerHeader type={type} size={size} badgeCount={size === 'sm' ? undefined : 2} linkLabel={size === 'sm' ? 'Link Button' : undefined} divider />
          </div>
        ))
      )}
    </div>
  ),
};
