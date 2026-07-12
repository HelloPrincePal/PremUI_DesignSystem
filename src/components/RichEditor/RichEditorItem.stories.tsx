import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RichEditorItem } from './RichEditorItem';
import type { RichEditorItemType, RichEditorItemState } from './RichEditorItem';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const TYPES: RichEditorItemType[] = ['text', 'dropdown', 'icon', 'color'];
const STATES: RichEditorItemState[] = ['default', 'hover', 'active'];

const meta: Meta<typeof RichEditorItem> = {
  title: 'Components/RichEditor/RichEditorItem',
  component: RichEditorItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'text',
    label: 'Header',
    icon: 'bold',
    active: false,
  },
  argTypes: {
    type: { control: 'select', options: TYPES },
    state: { control: 'select', options: [undefined, ...STATES] },
    label: { control: 'text' },
    icon: ICON_CONTROL,
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof RichEditorItem>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Text / Dropdown / Icon / Color x Default/Hover/Active — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {TYPES.map((type) => (
        <div key={type} style={{ display: 'flex', gap: '8px' }}>
          {STATES.map((state) => (
            <RichEditorItem key={state} type={type} state={state} active={state === 'active'} icon="bold" label="Header" />
          ))}
        </div>
      ))}
    </div>
  ),
};
