import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import type { TagState, TagStyle } from './Tag';

const STATES: TagState[] = ['default', 'hover', 'active', 'disabled'];
const STYLES: TagStyle[] = ['stroke', 'gray'];

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Tag',
    style: 'stroke',
  },
  argTypes: {
    children: { control: 'text' },
    sublabel: { control: 'text' },
    style: { control: 'select', options: STYLES },
    state: { control: 'select', options: [undefined, ...STATES] },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Stroke / Gray styles x Default/Hover/Active/Disabled states, plain / sublabel / leading-icon / dismissible.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {STYLES.map((style) => (
        <div key={style}>
          <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 8, textTransform: 'uppercase' }}>{style}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {STATES.map((state) => (
              <Tag key={state} style={style} state={state}>
                Tag
              </Tag>
            ))}
            {STATES.map((state) => (
              <Tag key={`${state}-sub`} style={style} state={state} sublabel="(4)">
                Tag
              </Tag>
            ))}
            {STATES.map((state) => (
              <Tag key={`${state}-icon`} style={style} state={state} leading={<i className="ri-pushpin-fill" />}>
                Tag
              </Tag>
            ))}
            {STATES.map((state) => (
              <Tag key={`${state}-dismiss`} style={style} state={state} dismissible>
                Tag
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
