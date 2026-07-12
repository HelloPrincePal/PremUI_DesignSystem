import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CompactButton } from './CompactButton';
import type { CompactButtonStyle, CompactButtonSize, CompactButtonState } from './CompactButton';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const STYLES: CompactButtonStyle[] = ['stroke', 'ghost', 'modifiable', 'white'];
const SIZES: CompactButtonSize[] = ['lg', 'md'];
const STATES: CompactButtonState[] = ['default', 'hover', 'active', 'disabled'];

const meta: Meta<typeof CompactButton> = {
  title: 'Components/Buttons/CompactButton',
  component: CompactButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    icon: 'close-line',
    style: 'stroke',
    size: 'lg',
    fullRadius: false,
    disabled: false,
  },
  argTypes: {
    icon: ICON_CONTROL,
    style: {
      control: 'select',
      options: STYLES,
    },
    size: {
      control: 'select',
      options: SIZES,
    },
    state: {
      control: 'select',
      options: [undefined, ...STATES],
      description: 'Forces a visual state for design QA. Leave unset to use real :hover/:focus-visible plus the `disabled` prop.',
    },
    fullRadius: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CompactButton>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 styles × all 4 states (default/hover/active/disabled), each at both
 * sizes and both radius modes — mirrors the Figma state grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {STYLES.map((style) => (
        <div key={style}>
          <h4 style={{ marginBottom: '8px', textTransform: 'capitalize', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            {style}
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '12px',
              background: style === 'modifiable' ? 'var(--color-state-information-base)' : 'transparent',
              color: style === 'modifiable' ? 'var(--color-static-white)' : undefined,
              borderRadius: '8px',
            }}
          >
            {STATES.map((state) => (
              <div key={state} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {SIZES.map((size) => (
                  <React.Fragment key={size}>
                    <CompactButton style={style} size={size} state={state} fullRadius={false} />
                    <CompactButton style={style} size={size} state={state} fullRadius />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Modifiable style inherits currentColor — shown here on a colored banner-like surface.
 */
export const ModifiableOnColor: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: 'var(--color-state-error-base)',
        color: 'var(--color-static-white)',
        borderRadius: '8px',
        width: '320px',
      }}
    >
      <span>Dismissible banner text</span>
      <CompactButton style="modifiable" size="md" />
    </div>
  ),
};
