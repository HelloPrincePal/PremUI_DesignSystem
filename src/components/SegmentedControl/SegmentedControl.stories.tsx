import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    items: [
      { label: 'Overview', value: 'overview' },
      { label: 'Details', value: 'details' },
      { label: 'Activity', value: 'activity' },
    ],
    value: 'overview',
  },
  argTypes: {
    items: { table: { disable: true } },
    onChange: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Default / Left-Icon / Only-Icon types, each with an active segment and a disabled segment.
 * Hover is a real :hover rule (text color only) — hover over an inactive, non-disabled segment to see it.
 */
export const Gallery: Story = {
  render: () => {
    const [a, setA] = useState('overview');
    const [b, setB] = useState('overview');
    const [c, setC] = useState('grid');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 420 }}>
        <div>
          <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 8 }}>Default</div>
          <SegmentedControl
            value={a}
            onChange={setA}
            items={[
              { label: 'Overview', value: 'overview' },
              { label: 'Details', value: 'details' },
              { label: 'Archived', value: 'archived', disabled: true },
            ]}
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 8 }}>Left Icon</div>
          <SegmentedControl
            value={b}
            onChange={setB}
            items={[
              { label: 'Overview', value: 'overview', icon: 'sun-line' },
              { label: 'Details', value: 'details', icon: 'moon-line' },
              { label: 'Archived', value: 'archived', icon: 'archive-line', disabled: true },
            ]}
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'var(--color-text-soft)', marginBottom: 8 }}>Only Icon</div>
          <SegmentedControl
            value={c}
            onChange={setC}
            items={[
              { value: 'grid', icon: 'grid-line', ariaLabel: 'Grid view' },
              { value: 'list', icon: 'list-unordered', ariaLabel: 'List view' },
              { value: 'board', icon: 'layout-column-line', ariaLabel: 'Board view', disabled: true },
            ]}
          />
        </div>
      </div>
    );
  },
};
