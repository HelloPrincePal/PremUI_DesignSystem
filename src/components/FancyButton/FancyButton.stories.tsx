import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FancyButton } from './FancyButton';
import type { FancyButtonType, FancyButtonSize, FancyButtonState } from './FancyButton';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const TYPES: FancyButtonType[] = ['neutral', 'primary', 'destructive', 'basic'];
const SIZES: FancyButtonSize[] = ['md', 'sm', 'xs'];
const STATES: FancyButtonState[] = ['default', 'hover', 'disabled'];

const meta: Meta<typeof FancyButton> = {
  title: 'Components/Buttons/FancyButton',
  component: FancyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Button',
    type: 'neutral',
    size: 'md',
    leftIcon: 'arrow-left-s-line',
    rightIcon: 'arrow-right-s-line',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
    type: {
      control: 'select',
      options: TYPES,
    },
    size: {
      control: 'select',
      options: SIZES,
    },
    leftIcon: ICON_CONTROL,
    rightIcon: ICON_CONTROL,
    state: {
      control: 'select',
      options: [undefined, ...STATES],
      description: 'Forces a visual state for design QA. Leave unset to use real :hover/:focus-visible plus the `disabled` prop.',
    },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FancyButton>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 types × all 3 states (default/hover/disabled), at every size — mirrors
 * the Figma state grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {SIZES.map((size) => (
        <div key={size}>
          <h4 style={{ marginBottom: '8px', textTransform: 'uppercase', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            {size}
          </h4>
          <div style={{ display: 'flex', gap: '24px' }}>
            {TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {STATES.map((state) => (
                  <FancyButton
                    key={state}
                    type={type}
                    size={size}
                    state={state}
                    leftIcon="arrow-left-s-line"
                    rightIcon="arrow-right-s-line"
                  >
                    Button
                  </FancyButton>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Type Variants ────────────────────────────────────────────────────────────

/**
 * All 4 types side by side at Medium size.
 */
export const TypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {TYPES.map((type) => (
        <FancyButton key={type} type={type} leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">
          Button
        </FancyButton>
      ))}
    </div>
  ),
};

// ─── Icon-free ────────────────────────────────────────────────────────────────

/**
 * Label-only, no icons.
 */
export const NoIcons: Story = {
  args: {
    leftIcon: null,
    rightIcon: null,
  },
};
