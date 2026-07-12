import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupItem } from './ButtonGroupItem';
import type { ButtonGroupSize } from './ButtonGroup';
import type { ButtonGroupItemState } from './ButtonGroupItem';

const SIZES: ButtonGroupSize[] = ['sm', 'xs', '2xs'];
const STATES: ButtonGroupItemState[] = ['default', 'hover', 'disabled'];

const ITEMS = [
  { label: 'Button' },
  { label: 'Button' },
  { label: 'Button' },
  { label: 'Button' },
];

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    items: ITEMS,
    size: 'sm',
    value: 2,
  },
  argTypes: {
    items: { table: { disable: true } },
    size: {
      control: 'select',
      options: SIZES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

/**
 * Interactive: clicking a segment updates the selection.
 */
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <ButtonGroup
        size="sm"
        value={value}
        items={ITEMS.map((item, i) => ({ ...item, onClick: () => setValue(i) }))}
      />
    );
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/**
 * All 3 sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      {SIZES.map((size) => (
        <ButtonGroup key={size} size={size} value={2} items={ITEMS} />
      ))}
    </div>
  ),
};

// ─── With Icons ───────────────────────────────────────────────────────────────

/**
 * Left icon, right icon, and icon-only segments.
 */
export const WithIcons: Story = {
  render: () => (
    <ButtonGroup
      size="sm"
      value={1}
      items={[
        { label: 'Button', leftIcon: 'arrow-left-s-line' },
        { label: 'Button', rightIcon: 'arrow-right-s-line' },
        { icon: 'arrow-down-s-line' },
      ]}
    />
  ),
};

// ─── Item States ──────────────────────────────────────────────────────────────

/**
 * ButtonGroupItem's default/hover/disabled states, forced via the `state` prop for design QA.
 */
export const ItemStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {STATES.map((state) => (
        <ButtonGroupItem key={state} size="sm" state={state}>
          Button
        </ButtonGroupItem>
      ))}
      <ButtonGroupItem size="sm" active>
        Active
      </ButtonGroupItem>
    </div>
  ),
};
