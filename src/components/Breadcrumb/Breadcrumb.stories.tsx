import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from './BreadcrumbItem';
import type { BreadcrumbDivider } from './Breadcrumb';

const DIVIDERS: BreadcrumbDivider[] = ['arrow', 'slash', 'dot'];

const ITEMS = [
  { label: 'Breadcrumb', icon: 'home-smile-2-line', href: '#' },
  { label: 'Breadcrumb', icon: 'home-smile-2-line', href: '#' },
  { label: 'Breadcrumb', icon: 'home-smile-2-line', href: '#' },
  { label: 'Breadcrumb', icon: 'home-smile-2-line', href: '#' },
  { label: 'Breadcrumb', icon: 'home-smile-2-line' },
];

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    items: ITEMS.slice(0, 3),
    divider: 'arrow',
  },
  argTypes: {
    items: { table: { disable: true } },
    divider: {
      control: 'select',
      options: DIVIDERS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Divider Variants ─────────────────────────────────────────────────────────

/**
 * All three divider styles at 3, 4, and 5 items.
 */
export const DividerVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {DIVIDERS.map((divider) => (
        <div key={divider} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Breadcrumb items={ITEMS.slice(0, 3)} divider={divider} />
          <Breadcrumb items={ITEMS.slice(0, 4)} divider={divider} />
          <Breadcrumb items={ITEMS} divider={divider} />
        </div>
      ))}
    </div>
  ),
};

// ─── Item States ──────────────────────────────────────────────────────────────

/**
 * BreadcrumbItem's default, hover (real browser :hover), and active (current page) states.
 */
export const ItemStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <BreadcrumbItem icon="home-smile-2-line" href="#">Default</BreadcrumbItem>
      <BreadcrumbItem icon="home-smile-2-line" href="#">Hover me</BreadcrumbItem>
      <BreadcrumbItem icon="home-smile-2-line" active>Active</BreadcrumbItem>
    </div>
  ),
};

// ─── Without Icons ────────────────────────────────────────────────────────────

/**
 * Text-only breadcrumb, no leading icons.
 */
export const TextOnly: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Profile' },
    ],
  },
};
