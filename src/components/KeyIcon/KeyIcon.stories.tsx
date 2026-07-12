import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KeyIcon } from './KeyIcon';
import type { KeyIconColor, KeyIconSize, KeyIconStyle } from './KeyIcon';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const COLORS: KeyIconColor[] = ['gray', 'blue', 'red', 'orange', 'yellow', 'green', 'purple', 'pink', 'teal'];
const SIZES: KeyIconSize[] = ['2xl', 'xl', 'lg', 'md', 'sm'];
const STYLES: KeyIconStyle[] = ['stroke', 'lighter'];

const meta: Meta<typeof KeyIcon> = {
  title: 'Components/KeyIcon',
  component: KeyIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    icon: 'user-6-line',
    color: 'gray',
    size: '2xl',
    style: 'stroke',
  },
  argTypes: {
    icon: ICON_CONTROL,
    color: { control: 'select', options: COLORS },
    size: { control: 'select', options: SIZES },
    style: { control: 'select', options: STYLES },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof KeyIcon>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 9 colors x both styles at size lg — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {STYLES.map((style) => (
        <div key={style} style={{ display: 'flex', gap: '16px' }}>
          {COLORS.map((color) => (
            <KeyIcon key={color} color={color} style={style} size="lg" />
          ))}
        </div>
      ))}
    </div>
  ),
};

/**
 * All 5 sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {SIZES.map((size) => (
        <KeyIcon key={size} size={size} color="blue" />
      ))}
    </div>
  ),
};
