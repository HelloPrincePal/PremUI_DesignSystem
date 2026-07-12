import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputState } from './Input';

const STATES: InputState[] = ['default', 'hover', 'focus', 'disabled', 'error'];

const meta: Meta<typeof Input> = {
  title: 'Components/TextInput/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Change Label',
    leading: <i className="ri-user-6-line" />,
  },
  argTypes: {
    state: { control: 'select', options: [undefined, ...STATES] },
    size: { control: 'select', options: ['md', 'sm', 'xs'] },
    type: { control: 'select', options: ['text', 'email', 'tel', 'url', 'number', 'date', 'search', 'password'] },
    sublabel: { control: 'text' },
    hintText: { control: 'text' },
    leading: { table: { disable: true } },
    trailing: { table: { disable: true } },
    action: { table: { disable: true } },
    onChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <Input {...args} />
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Hover / Focus / Disabled / Error — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: 300 }}>
      {STATES.map((state) => (
        <Input key={state} state={state} leading={<i className="ri-user-6-line" />} defaultValue={state === 'focus' || state === 'error' ? 'Placeholder text...' : ''} />
      ))}
    </div>
  ),
};

/**
 * Figma's 12 rigid "types" (Basic/Email/Phone/Card/Website/Amount/Date/Search/Password/Button/
 * Dropdown/Emoji) collapse into this one Input via generic leading/trailing slots, a real
 * show/hide password toggle, a real clear button, and a separated trailing action button —
 * instead of 12 hardcoded variants x 3 sizes x 6 states.
 */
export const TypeComposition: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: 320 }}>
      <Input label="Email" leading={<i className="ri-mail-line" />} type="email" placeholder="you@example.com" />
      <Input label="Phone" leading={<i className="ri-phone-line" />} type="tel" placeholder="+1 (555) 000-0000" />
      <Input label="Amount" leading={<span style={{ fontSize: 14 }}>$</span>} type="number" placeholder="0.00" />
      <Input
        label="Search"
        leading={<i className="ri-search-2-line" />}
        placeholder="Search..."
        trailing={<span style={{ fontSize: 12, color: 'var(--color-text-soft)' }}>⌘1</span>}
      />
      <Input label="Password" leading={<i className="ri-lock-2-line" />} showPasswordToggle defaultValue="hunter2" />
      <Input
        label="Share Link"
        leading={<i className="ri-links-line" />}
        defaultValue="www.example.com"
        action={{ icon: 'file-copy-line', onClick: () => {}, ariaLabel: 'Copy link' }}
      />
      <Input
        label="Search (clearable)"
        leading={<i className="ri-search-2-line" />}
        placeholder="Search..."
        clearable
        defaultValue="design system"
      />
    </div>
  ),
};
