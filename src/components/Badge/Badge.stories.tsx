import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import type { BadgeColor, BadgeStyle, BadgeSize, BadgeType } from './Badge';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const COLORS: BadgeColor[] = ['gray', 'blue', 'red', 'orange', 'yellow', 'green', 'purple', 'sky', 'pink', 'teal'];
const STYLES: BadgeStyle[] = ['filled', 'light', 'lighter', 'stroke'];

const meta: Meta<typeof Badge> = {
  title: 'Components/Badges/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Badge',
    color: 'gray',
    style: 'filled',
    size: 'sm',
    type: 'basic',
    icon: 'flashlight-fill',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
    color: {
      control: 'select',
      options: COLORS,
    },
    style: {
      control: 'select',
      options: STYLES,
    },
    size: {
      control: 'select',
      options: ['sm', 'md'] satisfies BadgeSize[],
    },
    type: {
      control: 'select',
      options: ['basic', 'dot', 'left-icon', 'right-icon'] satisfies BadgeType[],
    },
    icon: ICON_CONTROL,
    count: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Style Variants ───────────────────────────────────────────────────────────

/**
 * All four style variants for the Blue color.
 */
export const StyleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {STYLES.map((style) => (
        <Badge key={style} color="blue" style={style}>
          Badge
        </Badge>
      ))}
    </div>
  ),
};

// ─── Color Variants ───────────────────────────────────────────────────────────

/**
 * All ten colors using the Filled style.
 */
export const ColorFilled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {COLORS.map((color) => (
        <Badge key={color} color={color} style="filled">
          {color}
        </Badge>
      ))}
    </div>
  ),
};

/**
 * All ten colors using the Stroke style.
 */
export const ColorStroke: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {COLORS.map((color) => (
        <Badge key={color} color={color} style="stroke">
          {color}
        </Badge>
      ))}
    </div>
  ),
};

// ─── Type Variants ────────────────────────────────────────────────────────────

/**
 * Basic, dot, left-icon, and right-icon layouts.
 */
export const TypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge color="blue" type="basic">Basic</Badge>
      <Badge color="blue" type="dot">With Dot</Badge>
      <Badge color="blue" type="left-icon" icon="flashlight-fill">Left Icon</Badge>
      <Badge color="blue" type="right-icon" icon="flashlight-fill">Right Icon</Badge>
    </div>
  ),
};

/**
 * The fixed-width square counter mode, used for notification counts.
 */
export const Count: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge color="red" size="sm" count="2" />
      <Badge color="red" size="md" count="9" />
      <Badge color="gray" size="md" count="99+" />
    </div>
  ),
};

// ─── Size Variants ────────────────────────────────────────────────────────────

/**
 * Small (16px) vs. Medium (20px).
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge color="blue" size="sm">Small</Badge>
      <Badge color="blue" size="md">Medium</Badge>
    </div>
  ),
};

// ─── Disabled ─────────────────────────────────────────────────────────────────

/**
 * Disabled state overrides style and color to a neutral, muted treatment.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {STYLES.map((style) => (
        <Badge key={style} color="blue" style={style} disabled>
          Badge
        </Badge>
      ))}
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Complete overview of all colors across all styles.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {STYLES.map((style) => (
        <div key={style}>
          <h4 style={{ marginBottom: '8px', textTransform: 'capitalize', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            {style}
          </h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {COLORS.map((color) => (
              <Badge key={color} color={color} style={style}>
                {color}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
