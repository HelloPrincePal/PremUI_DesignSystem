import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxCard } from './CheckboxCard';

const meta: Meta<typeof CheckboxCard> = {
  title: 'Components/Checkbox/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    sublabel: '(Sublabel)',
    badge: 'NEW',
    description: 'Insert the checkbox description here.',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    sublabel: { control: 'text' },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCard>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <CheckboxCard {...args} checked={checked} onChange={setChecked} />;
  },
};

/**
 * Default / hover (real) / checked / disabled.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCard label="Label" sublabel="(Sublabel)" badge="NEW" description="Insert the checkbox description here." />
      <CheckboxCard label="Label" sublabel="(Sublabel)" badge="NEW" description="Insert the checkbox description here." checked />
      <CheckboxCard label="Label" sublabel="(Sublabel)" description="Insert the checkbox description here." disabled />
    </div>
  ),
};

/**
 * With a leading RemixIcon.
 */
export const WithLeadingIcon: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckboxCard
        checked={checked}
        onChange={setChecked}
        label="Label"
        sublabel="(Sublabel)"
        description="Insert the checkbox description here."
        leading={
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-stroke-soft)',
              boxShadow: 'var(--shadow-regular-x-small)',
              fontSize: '20px',
              color: 'var(--color-text-sub)',
            }}
          >
            <i className="ri-user-6-line" aria-hidden="true" />
          </span>
        }
      />
    );
  },
};
