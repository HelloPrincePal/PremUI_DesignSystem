import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem } from './DropdownItem';
import type { DropdownItemSize, DropdownItemState } from './DropdownItem';

const SIZES: DropdownItemSize[] = ['sm', 'lg'];
const STATES: DropdownItemState[] = ['default', 'hover', 'selected', 'disabled'];

const meta: Meta<typeof DropdownItem> = {
  title: 'Components/Dropdown/DropdownItem',
  component: DropdownItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Item Label',
    sublabel: undefined,
    size: 'sm',
    showCheckbox: false,
    showToggle: false,
  },
  argTypes: {
    size: { control: 'select', options: SIZES },
    state: { control: 'select', options: [undefined, ...STATES] },
    label: { control: 'text' },
    sublabel: { control: 'text' },
    badge: { control: 'text' },
    shortcut: { control: 'text' },
    buttonLabel: { control: 'text' },
    showCheckbox: { control: 'boolean' },
    checked: { control: 'boolean' },
    showToggle: { control: 'boolean' },
    toggled: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 4 states x both sizes — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 320 }}>
      {SIZES.map((size) => (
        <div key={size}>
          <h4 style={{ marginBottom: '8px', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            Size: {size}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', border: '1px solid var(--color-stroke-soft)', borderRadius: 8, padding: 4 }}>
            {STATES.map((state) => (
              <DropdownItem
                key={state}
                size={size}
                state={state}
                leading={<i className="ri-folder-line" style={{ fontSize: 20 }} />}
                label={`${state[0].toUpperCase()}${state.slice(1)} item`}
                sublabel={size === 'lg' ? 'Supporting text' : undefined}
                showCheckbox
                checked={state === 'selected'}
                shortcut="⌘K"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Optional trailing slots: badge, shortcut, toggle, button, right icon.
 */
export const TrailingSlots: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: 320, border: '1px solid var(--color-stroke-soft)', borderRadius: 8, padding: 4 }}>
      <DropdownItem leading={<i className="ri-price-tag-3-line" style={{ fontSize: 20 }} />} label="With badge" badge="New" />
      <DropdownItem leading={<i className="ri-keyboard-line" style={{ fontSize: 20 }} />} label="With shortcut" shortcut="⌘S" />
      <DropdownItem leading={<i className="ri-notification-3-line" style={{ fontSize: 20 }} />} label="With toggle" showToggle toggled />
      <DropdownItem leading={<i className="ri-edit-line" style={{ fontSize: 20 }} />} label="With button" buttonLabel="Edit" />
      <DropdownItem leading={<i className="ri-external-link-line" style={{ fontSize: 20 }} />} label="With right icon" rightIcon="arrow-right-s-line" />
    </div>
  ),
};
