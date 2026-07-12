import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IntegrationSwitch } from './IntegrationSwitch';
import type { IntegrationSwitchAlignment, IntegrationSwitchStyle } from './IntegrationSwitch';

const ALIGNMENTS: IntegrationSwitchAlignment[] = ['horizontal', 'vertical'];
const STYLES: IntegrationSwitchStyle[] = ['card', 'list'];

const meta: Meta<typeof IntegrationSwitch> = {
  title: 'Components/Switch/IntegrationSwitch',
  component: IntegrationSwitch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Microsoft Office 365',
    description: 'Seamless collaboration and document management.',
    badge: true,
    alignment: 'horizontal',
    style: 'card',
    showManageButton: true,
    checked: false,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    badge: { control: 'boolean' },
    alignment: { control: 'select', options: ALIGNMENTS },
    style: { control: 'select', options: STYLES },
    showManageButton: { control: 'boolean' },
    checked: { control: 'boolean' },
    className: { table: { disable: true } },
    leading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof IntegrationSwitch>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <div style={{ width: args.alignment === 'horizontal' ? 613 : 378 }}>
        <IntegrationSwitch {...args} checked={checked} onChange={setChecked} />
      </div>
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Horizontal/Vertical x Card/List — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ALIGNMENTS.map((alignment) =>
        STYLES.map((style) => (
          <div key={`${alignment}-${style}`} style={{ width: alignment === 'horizontal' ? 613 : 378 }}>
            <IntegrationSwitch alignment={alignment} style={style} />
          </div>
        ))
      )}
    </div>
  ),
};
